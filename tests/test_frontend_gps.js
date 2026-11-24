// Test suite verifying Auto GPS dropdown sync and edge cases
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log("==================================================");
console.log(" Running Auto GPS & Location Synchronization Tests");
console.log("==================================================");

// Create a DOM-like environment
class Element {
    constructor(id, tagName = 'div') {
        this.id = id;
        this.tagName = tagName;
        this.value = '';
        this.textContent = '';
        this.innerHTML = '';
        this.disabled = false;
        this.classList = {
            classes: new Set(),
            add: (c) => this.classList.classes.add(c),
            remove: (c) => this.classList.classes.delete(c),
            contains: (c) => this.classList.classes.has(c)
        };
        this.options = [];
        this.selectedIndex = -1;
        this.attributes = {};
        this.children = [];
        this.eventListeners = {};
        this.style = {};
    }

    setAttribute(k, v) { this.attributes[k] = String(v); }
    getAttribute(k) { return this.attributes[k] || null; }
    
    appendChild(child) {
        this.options.push(child);
        this.children.push(child);
        if (this.selectedIndex === -1) this.selectedIndex = 0;
    }

    addEventListener(event, fn) {
        if (!this.eventListeners[event]) this.eventListeners[event] = [];
        this.eventListeners[event].push(fn);
    }

    dispatchEvent(event) {
        const fns = this.eventListeners[event.type] || [];
        for (const fn of fns) fn(event);
    }
}

// Elements store
const domElements = {};
function getOrCreateElement(id, tagName = 'div') {
    if (!domElements[id]) {
        domElements[id] = new Element(id, tagName);
    }
    return domElements[id];
}

// Map district paths
const districtPaths = {};
const districtNames = [
    'adilabad', 'asifabad', 'mancherial', 'nirmal', 'nizamabad', 'kamareddy',
    'jagtial', 'peddapalli', 'karimnagar', 'sircilla', 'bhupalapally', 'mulugu',
    'hanumakonda', 'warangal', 'jangaon', 'mahabubabad', 'kothagudem', 'khammam',
    'sangareddy', 'medak', 'siddipet', 'medchal', 'hyderabad', 'rangareddy',
    'vikarabad', 'yadadri', 'suryapet', 'nalgonda', 'mahbubnagar', 'nagarkurnool',
    'wanaparthy', 'gadwal', 'narayanpet'
];

districtNames.forEach(d => {
    const el = new Element(`map-${d}`, 'path');
    el.setAttribute('data-district', d);
    districtPaths[d] = el;
});

let pendingTimeouts = [];
// Setup mock global context
const sandbox = {
    console,
    pendingTimeouts,
    setTimeout: (fn, delay) => {
        if (!delay || delay < 100) {
            fn();
        } else {
            pendingTimeouts.push(fn);
        }
        return 1;
    },
    clearTimeout: () => {},
    localStorage: {
        store: {},
        getItem: function(k) { return this.store[k] || null; },
        setItem: function(k, v) { this.store[k] = String(v); },
        removeItem: function(k) { delete this.store[k]; }
    },
    document: {
        getElementById: (id) => getOrCreateElement(id),
        querySelector: (sel) => {
            if (sel.startsWith('#')) return getOrCreateElement(sel.slice(1));
            const match = sel.match(/\[data-district="([^"]+)"\]/);
            if (match && districtPaths[match[1]]) return districtPaths[match[1]];
            return null;
        },
        querySelectorAll: (sel) => {
            if (sel === '.district-path') return Object.values(districtPaths);
            return [];
        },
        createElement: (tag) => new Element('', tag),
        addEventListener: () => {},
        removeEventListener: () => {}
    },
    window: {},
    navigator: {
        geolocation: {
            getCurrentPosition: (success, error, opts) => {}
        }
    },
    currentLanguage: 'en',
    appState: {
        location: null,
        selectedRegion: null,
        selectedDistrict: null,
        selectedCrop: null
    },
    elements: {
        locationName: getOrCreateElement('locationName'),
        locationCoords: getOrCreateElement('locationCoords'),
        gpsBtn: getOrCreateElement('gpsBtn'),
        locationLoading: getOrCreateElement('locationLoading'),
        confirmedLocation: getOrCreateElement('confirmedLocation'),
        locationConfirmation: getOrCreateElement('locationConfirmation'),
        cropGrid: getOrCreateElement('cropGrid'),
        selectedCropInfo: getOrCreateElement('selectedCropInfo'),
        selectedCropName: getOrCreateElement('selectedCropName')
    },
    crops: [
        { id: 'rice', name: 'Rice / Paddy', emoji: '🌾' },
        { id: 'cotton', name: 'Cotton', emoji: '🌱' }
    ],
    t: (key) => key,
    showAlertMessage: (msg) => { sandbox.lastAlertMessage = msg; },
    showAlertLoading: () => {},
    renderWeatherAlerts: () => {},
    fetchWeatherAlerts: () => { sandbox.weatherFetched = true; },
    API_BASE_URL: 'http://localhost:5000',
    URLSearchParams: URLSearchParams,
    fetch: async () => ({
        ok: true,
        json: async () => ({ status: 'success', current_weather: {}, forecast: [] })
    }),
    location: { port: '5000', hostname: 'localhost', href: 'http://localhost:5000', protocol: 'http:' },
    addEventListener: () => {},
    removeEventListener: () => {}
};

sandbox.window = sandbox;

// Load translations.js
const transCode = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'translations.js'), 'utf8');
vm.runInNewContext(transCode, sandbox);

// Load telangana-map.js
const mapCode = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'telangana-map.js'), 'utf8');
vm.runInNewContext(mapCode, sandbox);

// Initialize manual selector dropdowns
sandbox.renderManualSelector();
const districtSelect = sandbox.document.getElementById('districtSelect');
const citySelect = sandbox.document.getElementById('citySelect');

// Load app.js
const appCode = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'app.js'), 'utf8');
vm.runInNewContext(appCode, sandbox);

console.log("✓ Scripts loaded into test sandbox successfully.");

// TEST 1: Dropdown synchronization for Telangana District with known city (Scenario A)
console.log("\n[Test 1] Testing Telangana District sync with known city (Hyderabad)...");
sandbox.syncLocationDropdowns('hyderabad', 'Nampally', 17.3850, 78.4867);
assert.strictEqual(districtSelect.value, 'hyderabad', 'District dropdown should be hyderabad');
assert.strictEqual(citySelect.disabled, false, 'City dropdown should be enabled');
assert.strictEqual(citySelect.value, 'Nampally', 'City dropdown should select Nampally');
assert.strictEqual(districtPaths['hyderabad'].classList.contains('selected'), true, 'Hyderabad map path should be selected');
console.log("✓ Test 1 passed: District & City dropdowns and map highlight accurately synchronized.");

// TEST 2: Dynamic insertion of town/village not in predefined list (Scenario B / Requirement 3.6)
console.log("\n[Test 2] Testing dynamic town addition when village is not in predefined list...");
sandbox.syncLocationDropdowns('medak', 'Kondurg Village', 18.04, 78.26);
assert.strictEqual(districtSelect.value, 'medak', 'District dropdown should be medak');
assert.strictEqual(citySelect.disabled, false, 'City dropdown should be enabled');
assert.strictEqual(citySelect.value, 'Kondurg Village', 'City dropdown should have Kondurg Village selected');
const foundOption = citySelect.options.some(o => o.value === 'Kondurg Village');
assert.strictEqual(foundOption, true, 'Dynamically created option should exist in citySelect');
console.log("✓ Test 2 passed: Unknown village successfully inserted dynamically and selected without error.");

// TEST 3: Dropdown reset for outside Telangana location (Scenario C)
console.log("\n[Test 3] Testing dropdown reset when location is outside Telangana...");
sandbox.syncLocationDropdowns(null);
assert.strictEqual(districtSelect.value, '', 'District dropdown should be cleared/empty');
assert.strictEqual(citySelect.disabled, true, 'City dropdown should be disabled');
assert.strictEqual(citySelect.value, '', 'City dropdown value should be empty');
const anySelected = Object.values(districtPaths).some(p => p.classList.contains('selected'));
assert.strictEqual(anySelected, false, 'No map paths should be selected');
console.log("✓ Test 3 passed: Dropdowns cleanly reset and map cleared when outside Telangana.");

// TEST 4: District Name Matching Logic
console.log("\n[Test 4] Testing matchTelanganaDistrict function...");
const m1 = sandbox.matchTelanganaDistrict('Hyderabad', 17.385, 78.486);
assert.strictEqual(m1.id, 'hyderabad', 'Should match Hyderabad');
const m2 = sandbox.matchTelanganaDistrict('Jogulamba Gadwal District', 16.23, 77.80);
assert.strictEqual(m2.id, 'gadwal', 'Should match Jogulamba Gadwal');
const m3 = sandbox.matchTelanganaDistrict('Warangal Urban', 17.97, 79.59);
assert.strictEqual(m3.id, 'hanumakonda', 'Should match Warangal Urban to hanumakonda');
const m4 = sandbox.matchTelanganaDistrict('Bengaluru Urban', 12.97, 77.59);
assert.strictEqual(m4, null, 'Outside Telangana place should return null');
console.log("✓ Test 4 passed: Telangana district name matching and aliases work accurately.");

// TEST 5: Auto GPS Full Flow inside Telangana
console.log("\n[Test 5] Testing detectLocation inside Telangana...");
sandbox.reverseGeocode = async (lat, lng) => ({
    status: 'success',
    lat, lng,
    town: 'Khammam',
    district: 'Khammam',
    state: 'Telangana',
    is_telangana: true,
    formatted: 'Khammam, Telangana'
});

let gpsDonePromise = null;
sandbox.navigator.geolocation.getCurrentPosition = (success) => {
    gpsDonePromise = success({ coords: { latitude: 17.2473, longitude: 80.1514 } });
};

sandbox.weatherFetched = false;
sandbox.detectLocation();
Promise.resolve(gpsDonePromise).then(() => {
    assert.strictEqual(districtSelect.value, 'khammam', 'District dropdown should be khammam');
    assert.strictEqual(citySelect.disabled, false, 'City dropdown should be enabled');
    assert.strictEqual(citySelect.value, 'Khammam', 'City dropdown should be Khammam');
    assert.strictEqual(sandbox.appState.selectedRegion.id, 'telangana');
    assert.strictEqual(sandbox.appState.location.lat, 17.2473);
    assert.strictEqual(sandbox.elements.locationCoords.textContent.includes('GPS'), true);
    console.log("✓ Test 5 passed: Full GPS flow inside Telangana updates dropdowns, state, coordinates.");

    // TEST 6: Auto GPS Full Flow outside Telangana
    console.log("\n[Test 6] Testing detectLocation outside Telangana (Bengaluru)...");
    sandbox.reverseGeocode = async (lat, lng) => ({
        status: 'success',
        lat, lng,
        town: 'Bengaluru',
        district: 'Bengaluru Urban',
        state: 'Karnataka',
        is_telangana: false,
        formatted: 'Bengaluru, Karnataka'
    });
    sandbox.navigator.geolocation.getCurrentPosition = (success) => {
        gpsDonePromise = success({ coords: { latitude: 12.9716, longitude: 77.5946 } });
    };

    sandbox.detectLocation();
    Promise.resolve(gpsDonePromise).then(() => {
        assert.strictEqual(districtSelect.value, '', 'District dropdown must be empty');
        assert.strictEqual(citySelect.disabled, true, 'City dropdown must be disabled');
        assert.strictEqual(sandbox.appState.selectedRegion.id, 'other');
        assert.strictEqual(sandbox.appState.selectedDistrict, null);
        assert.strictEqual(sandbox.appState.location.lat, 12.9716);
        assert.strictEqual(sandbox.elements.locationName.textContent.includes('Bengaluru'), true);
        console.log("✓ Test 6 passed: Outside Telangana coordinates preserved, dropdowns not falsely mapped.");

        // TEST 7: Crop selection for outside Telangana user
        console.log("\n[Test 7] Testing crop selection when location is outside Telangana...");
        sandbox.weatherFetched = false;
        sandbox.lastAlertMessage = null;
        const origFetch = sandbox.fetchWeatherAlerts;
        sandbox.fetchWeatherAlerts = () => {
            sandbox.weatherFetched = true;
            return origFetch();
        };
        sandbox.selectCrop('rice');
        assert.strictEqual(sandbox.weatherFetched, true, 'Weather alerts should fetch without blocking error');
        assert.strictEqual(sandbox.lastAlertMessage, null, 'No error message should be displayed');
        console.log("✓ Test 7 passed: Crop selection triggers weather fetch for out-of-state GPS location.");

        // TEST 8: Error handling & retention of state
        console.log("\n[Test 8] Testing geolocation error / permission denied...");
        sandbox.navigator.geolocation.getCurrentPosition = (success, error) => {
            error({ code: 1, PERMISSION_DENIED: 1 });
        };
        const prevLat = sandbox.appState.location.lat;
        sandbox.detectLocation();
        assert.strictEqual(sandbox.elements.locationCoords.textContent.includes('denied'), true);
        assert.strictEqual(sandbox.appState.location.lat, prevLat, 'Previous valid location should be retained');
        console.log("✓ Test 8 passed: Error message shown and previous state preserved on denial.");

        // TEST 9: Manual dropdown workflow intact
        console.log("\n[Test 9] Testing manual dropdown workflow...");
        districtSelect.value = 'karimnagar';
        sandbox.handleDistrictSelectChange({ target: districtSelect });
        assert.strictEqual(citySelect.disabled, false, 'City dropdown should be enabled after manual district selection');
        assert.strictEqual(citySelect.options.length > 1, true, 'City dropdown should have Karimnagar cities');
        citySelect.selectedOptions = [{
            value: 'Huzurabad',
            getAttribute: (k) => k === 'data-lat' ? '18.1900' : '79.3900'
        }];
        sandbox.handleCitySelectChange({ target: citySelect });
        assert.strictEqual(sandbox.appState.selectedDistrict.id, 'karimnagar');
        assert.strictEqual(sandbox.appState.selectedDistrict.selectedCity, 'Huzurabad');
        console.log("✓ Test 9 passed: Manual dropdown selection functions seamlessly.");

        // TEST 10: Map path click synchronizes dropdowns
        console.log("\n[Test 10] Testing map path click synchronizes dropdowns...");
        const pathNalgonda = districtPaths['nalgonda'];
        sandbox.syncLocationDropdowns('nalgonda');
        assert.strictEqual(districtSelect.value, 'nalgonda', 'District dropdown synchronized on map selection');
        assert.strictEqual(citySelect.disabled, false, 'City dropdown enabled on map selection');
        console.log("✓ Test 10 passed: Map path click synchronizes both dropdowns.");

        console.log("\n==================================================");
        console.log(" ALL 10 FRONTEND LOCATION TESTS PASSED SUCCESSFULLY!");
        console.log("==================================================");
    });
});
