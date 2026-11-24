// FarmGuard - Weather Alert System
// Single Page Application

// Dynamic API base URL:
// 1. Same-origin (Flask server, Dev Tunnels, ngrok, local Wi-Fi IP, mobile devices, cloud): uses relative URL ''
// 2. Dedicated local dev server (e.g. Live Server on port 5500): connects to local backend on port 5000
// 3. Direct file:// access: connects to localhost:5000
const API_BASE_URL = (() => {
    if (typeof window === 'undefined' || !window.location) return 'http://localhost:5000';
    
    if (window.location.protocol === 'file:') {
        return 'http://localhost:5000';
    }
    
    if ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
        window.location.port && window.location.port !== '5000') {
        return `http://${window.location.hostname}:5000`;
    }
    
    return '';
})();

// Current language
let currentLanguage = localStorage.getItem('farmguard_language') || 'en';

// Crop data with emoji images - Full Telangana Crops
const crops = [
    { id: 'rice', name: 'Rice', emoji: '🌾', frostSensitive: true },
    { id: 'cotton', name: 'Cotton', emoji: '☁️', frostSensitive: true },
    { id: 'corn', name: 'Corn', emoji: '🌽', frostSensitive: true },
    { id: 'chili', name: 'Chili', emoji: '🌶️', frostSensitive: true },
    { id: 'redgram', name: 'Red Gram', emoji: '🥣', frostSensitive: false },
    { id: 'groundnut', name: 'Groundnut', emoji: '🥜', frostSensitive: false },
    { id: 'turmeric', name: 'Turmeric', emoji: '🟡', frostSensitive: false },
    { id: 'soybean', name: 'Soybean', emoji: '🌿', frostSensitive: false },
    { id: 'bengalgram', name: 'Bengal Gram', emoji: '🫘', frostSensitive: false },
    { id: 'greengram', name: 'Green Gram', emoji: '🌱', frostSensitive: false },
    { id: 'blackgram', name: 'Black Gram', emoji: '🌾', frostSensitive: false },
    { id: 'sugarcane', name: 'Sugarcane', emoji: '🎋', frostSensitive: false },
    { id: 'tomato', name: 'Tomato', emoji: '🍅', frostSensitive: true },
    { id: 'onion', name: 'Onion', emoji: '🧅', frostSensitive: false },
    { id: 'mango', name: 'Mango', emoji: '🥭', frostSensitive: true },
    { id: 'banana', name: 'Banana', emoji: '🍌', frostSensitive: true },
    { id: 'potato', name: 'Potato', emoji: '🥔', frostSensitive: true },
    { id: 'wheat', name: 'Wheat', emoji: '🌿', frostSensitive: true }
];

// Get translated text
function t(key) {
    if (translations && translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    // Fallback to English
    if (translations && translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    return key;
}

// Get translated region name
function getRegionName(regionId) {
    if (regionTranslations && regionTranslations[currentLanguage] && regionTranslations[currentLanguage][regionId]) {
        return regionTranslations[currentLanguage][regionId];
    }
    // Fallback to English
    if (regionTranslations && regionTranslations['en'] && regionTranslations['en'][regionId]) {
        return regionTranslations['en'][regionId];
    }
    return regionId;
}

// Get translated district name
function getDistrictName(districtId) {
    if (districtTranslations && districtTranslations[currentLanguage] && districtTranslations[currentLanguage][districtId]) {
        return districtTranslations[currentLanguage][districtId];
    }
    // Fallback to English
    if (districtTranslations && districtTranslations['en'] && districtTranslations['en'][districtId]) {
        return districtTranslations['en'][districtId];
    }
    return districtId;
}

// Get translated crop name
function getCropName(cropId) {
    return t(cropId) || cropId;
}

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('farmguard_language', lang);
    
    // Update UI elements
    updateAllTranslations();
    updateLanguageBadge();
}

// Update all UI translations
function updateAllTranslations() {
    // Update welcome modal
    const welcomeTitle = document.querySelector('.welcome-modal h1');
    const welcomeSubtitle = document.querySelector('.welcome-subtitle');
    const getStartedBtn = document.getElementById('getStartedBtn');
    
    if (welcomeTitle) welcomeTitle.textContent = t('welcomeTitle');
    if (welcomeSubtitle) welcomeSubtitle.textContent = t('welcomeSubtitle');
    if (getStartedBtn) {
        getStartedBtn.innerHTML = `${t('getStarted')} <span class="btn-arrow">→</span>`;
    }
    
    // Update features in welcome modal
    const featureSpans = document.querySelectorAll('.welcome-features .feature span:not(.feature-icon)');
    if (featureSpans.length >= 3) {
        featureSpans[0].textContent = t('featureWeather');
        featureSpans[1].textContent = t('featureAlerts');
        featureSpans[2].textContent = t('featureFrost');
    }
    
    // Update greeting
    updateGreeting();
    
    // Update language badge
    updateLanguageBadge();
    
    // Update location section
    const locationSectionTitle = document.getElementById('locationSectionTitle');
    if (locationSectionTitle) locationSectionTitle.textContent = t('yourLocation');
    
    const locationName = document.getElementById('locationName');
    if (locationName && !appState.selectedDistrict && !appState.location) {
        locationName.textContent = t('selectLocation');
    }
    
    const locationCoords = document.getElementById('locationCoords');
    if (locationCoords && !appState.location) {
        locationCoords.textContent = t('chooseOrGps');
    }
    
    // Update GPS button
    const gpsBtnText = document.getElementById('gpsBtnText');
    if (gpsBtnText) gpsBtnText.textContent = t('autoGps');
    
    // Update detecting location text
    const detectingText = document.getElementById('detectingText');
    if (detectingText) detectingText.textContent = t('detectingLocation');
    
    // Update "Or tap region" label
    const orTapRegionText = document.getElementById('orTapRegionText');
    if (orTapRegionText) orTapRegionText.textContent = t('orTapRegion');
    
    // Update district section label
    const selectDistrictText = document.getElementById('selectDistrictText');
    if (selectDistrictText) selectDistrictText.textContent = t('selectDistrict');
    
    // Update location set label
    const locationSetLabel = document.getElementById('locationSetLabel');
    if (locationSetLabel) locationSetLabel.textContent = t('locationSet');
    
    // Update crop section
    const cropSectionTitle = document.getElementById('cropSectionTitle');
    if (cropSectionTitle) cropSectionTitle.textContent = t('selectCrop');
    
    // Update "Selected" label
    const selectedLabel = document.getElementById('selectedLabel');
    if (selectedLabel) selectedLabel.textContent = t('selected');
    
    // Update alerts section
    const alertsSectionTitle = document.getElementById('alertsSectionTitle');
    if (alertsSectionTitle) alertsSectionTitle.textContent = t('weatherAlerts');
    
    // Update alerts placeholder based on district/city selection
    const alertsPlaceholder = document.getElementById('alertsPlaceholder');
    if (alertsPlaceholder) {
        const districtSelect = document.getElementById('districtSelect');
        const citySelect = document.getElementById('citySelect');
        const districtSelected = districtSelect && districtSelect.value;
        const citySelected = citySelect && citySelect.value;
        
        if (!districtSelected && !citySelected) {
            alertsPlaceholder.textContent = t('selectDistrictCity');
        } else if (!districtSelected) {
            alertsPlaceholder.textContent = t('selectDistrictFirst');
        } else if (!citySelected) {
            alertsPlaceholder.textContent = t('selectCityFirst');
        } else {
            alertsPlaceholder.textContent = t('selectLocationCrop');
        }
    }
    
    // Update activities section
    const activitiesSectionTitle = document.getElementById('activitiesSectionTitle');
    if (activitiesSectionTitle) activitiesSectionTitle.textContent = t('todayRecommendations');
    
    // Update frost section
    const frostSectionTitle = document.getElementById('frostSectionTitle');
    if (frostSectionTitle) frostSectionTitle.textContent = t('frostRiskAlert');
    
    // Update spray and disease sections
    const spraySectionTitle = document.getElementById('spraySectionTitle');
    if (spraySectionTitle) spraySectionTitle.textContent = t('sprayWindowAdvisor');
    
    const diseaseSectionTitle = document.getElementById('diseaseSectionTitle');
    if (diseaseSectionTitle) diseaseSectionTitle.textContent = t('diseasePressureAdvisor');
    
    // Update footer
    const footerMain = document.getElementById('footerMain');
    const footerSub = document.getElementById('footerSub');
    if (footerMain) footerMain.textContent = `🌾 ${t('footerText')}`;
    if (footerSub) footerSub.textContent = t('poweredBy');
    
    // Update Telangana map with current language
    if (typeof updateMapLabels === 'function') {
        updateMapLabels();
    }
    
    // Re-render crops with translations
    renderCrops();
    if (appState.selectedCrop) {
        // Re-select the crop card
        const cropCard = document.querySelector(`[data-crop-id="${appState.selectedCrop.id}"]`);
        if (cropCard) cropCard.classList.add('selected');
        elements.selectedCropInfo.classList.remove('hidden');
        elements.selectedCropName.textContent = `${appState.selectedCrop.emoji} ${getCropName(appState.selectedCrop.id)}`;
    }
    
    // Re-render district selection if one exists
    if (appState.selectedDistrict) {
        const districtCard = document.querySelector(`[data-district-id="${appState.selectedDistrict.id}"]`);
        if (districtCard) districtCard.classList.add('selected');
        
        // Update confirmed location text
        const region = appState.selectedRegion;
        const district = appState.selectedDistrict;
        if (region && district) {
            const locationText = `${getDistrictName(district.id)}, ${getRegionName(region.id)}`;
            elements.confirmedLocation.textContent = `${district.emoji} ${locationText}`;
            elements.locationName.textContent = locationText;
        }
    }
    
    // Update forecast section title
    const forecastSectionTitle = document.getElementById('forecastSectionTitle');
    if (forecastSectionTitle) forecastSectionTitle.textContent = t('sevenDayForecast');
    
    // Update smart recommendations section title
    const smartRecommendationsSectionTitle = document.getElementById('smartRecommendationsSectionTitle');
    if (smartRecommendationsSectionTitle) smartRecommendationsSectionTitle.textContent = t('whatToDoToday');
    
    // Update week planning title
    const weekPlanningTitle = document.getElementById('weekPlanningTitle');
    if (weekPlanningTitle) weekPlanningTitle.textContent = t('planYourWeek');
    
    // Update crop tips title
    const cropTipsTitle = document.getElementById('cropTipsTitle');
    if (cropTipsTitle) cropTipsTitle.textContent = t('tipsForYourCrop');
    
    // Re-render alerts if they exist
    if (appState.alertsData) {
        renderWeatherAlerts(appState.alertsData);
        renderFrostAlert(appState.alertsData.frost_alert);
        
        // Re-render forecast with new language
        if (appState.alertsData.forecast) {
            renderForecast(appState.alertsData.forecast);
        }
        
        // Re-render smart recommendations with new language
        if (appState.alertsData.weekly_recommendations) {
            renderSmartRecommendations(appState.alertsData.weekly_recommendations, appState.alertsData.crop_tips);
        }
        
        // Re-render spray window and disease pressure
        if (appState.alertsData.spray_window) {
            renderSprayWindow(appState.alertsData.spray_window);
        }
        if (appState.alertsData.disease_pressure) {
            renderDiseasePressure(appState.alertsData.disease_pressure);
        }
    }
    
    // Update Telangana map labels if visible
    if (typeof updateMapLabels === 'function') {
        updateMapLabels();
    }
    
    // Update manual selector labels
    if (typeof updateManualSelectorLabels === 'function') {
        updateManualSelectorLabels();
    }
}

// Make changeLanguage globally available
window.changeLanguage = changeLanguage;

// Regions with visual icons - Farmer friendly with emojis
const regions = [
    { id: 'telangana', name: 'Telangana', emoji: '🏛️', lat: 17.385, lng: 78.4867 },
    { id: 'andhra', name: 'Andhra', emoji: '🌊', lat: 15.9129, lng: 79.74 },
    { id: 'karnataka', name: 'Karnataka', emoji: '🏰', lat: 15.3173, lng: 75.7139 },
    { id: 'tamil', name: 'Tamil Nadu', emoji: '🛕', lat: 11.1271, lng: 78.6569 },
    { id: 'maharashtra', name: 'Maharashtra', emoji: '🚪', lat: 19.7515, lng: 75.7139 },
    { id: 'punjab', name: 'Punjab', emoji: '🌾', lat: 31.1471, lng: 75.3412 },
    { id: 'rajasthan', name: 'Rajasthan', emoji: '🏜️', lat: 27.0238, lng: 74.2179 },
    { id: 'gujarat', name: 'Gujarat', emoji: '🦁', lat: 22.2587, lng: 71.1924 },
    { id: 'mp', name: 'Madhya Pradesh', emoji: '🐅', lat: 22.9734, lng: 78.6569 },
    { id: 'up', name: 'Uttar Pradesh', emoji: '🕌', lat: 26.8467, lng: 80.9462 },
    { id: 'bihar', name: 'Bihar', emoji: '📿', lat: 25.0961, lng: 85.3131 },
    { id: 'wb', name: 'West Bengal', emoji: '🎭', lat: 22.9868, lng: 87.855 }
];

// Districts for each region with visual icons
const districts = {
    telangana: [
        { id: 'hyderabad', name: 'Hyderabad', emoji: '🏙️', lat: 17.385, lng: 78.4867 },
        { id: 'warangal', name: 'Warangal', emoji: '🏯', lat: 17.9784, lng: 79.5941 },
        { id: 'karimnagar', name: 'Karimnagar', emoji: '🌾', lat: 18.4386, lng: 79.1288 },
        { id: 'nizamabad', name: 'Nizamabad', emoji: '🌿', lat: 18.6725, lng: 78.0941 },
        { id: 'khammam', name: 'Khammam', emoji: '🌳', lat: 17.2473, lng: 80.1514 },
        { id: 'nalgonda', name: 'Nalgonda', emoji: '💎', lat: 17.0575, lng: 79.2748 }
    ],
    andhra: [
        { id: 'vijayawada', name: 'Vijayawada', emoji: '🌉', lat: 16.5062, lng: 80.648 },
        { id: 'visakhapatnam', name: 'Vizag', emoji: '⚓', lat: 17.6868, lng: 83.2185 },
        { id: 'guntur', name: 'Guntur', emoji: '🌶️', lat: 16.3067, lng: 80.4365 },
        { id: 'nellore', name: 'Nellore', emoji: '🏖️', lat: 14.4426, lng: 79.9865 },
        { id: 'kurnool', name: 'Kurnool', emoji: '⛰️', lat: 15.8281, lng: 78.0373 },
        { id: 'tirupati', name: 'Tirupati', emoji: '🛕', lat: 13.6288, lng: 79.4192 }
    ],
    karnataka: [
        { id: 'bangalore', name: 'Bangalore', emoji: '💻', lat: 12.9716, lng: 77.5946 },
        { id: 'mysore', name: 'Mysore', emoji: '👑', lat: 12.2958, lng: 76.6394 },
        { id: 'hubli', name: 'Hubli', emoji: '🏭', lat: 15.3647, lng: 75.124 },
        { id: 'belgaum', name: 'Belgaum', emoji: '🏔️', lat: 15.8497, lng: 74.4977 },
        { id: 'mangalore', name: 'Mangalore', emoji: '🌴', lat: 12.9141, lng: 74.856 },
        { id: 'davangere', name: 'Davangere', emoji: '🌾', lat: 14.4644, lng: 75.9218 }
    ],
    tamil: [
        { id: 'chennai', name: 'Chennai', emoji: '🏖️', lat: 13.0827, lng: 80.2707 },
        { id: 'coimbatore', name: 'Coimbatore', emoji: '🏭', lat: 11.0168, lng: 76.9558 },
        { id: 'madurai', name: 'Madurai', emoji: '🛕', lat: 9.9252, lng: 78.1198 },
        { id: 'trichy', name: 'Trichy', emoji: '🏰', lat: 10.7905, lng: 78.7047 },
        { id: 'salem', name: 'Salem', emoji: '⛰️', lat: 11.6643, lng: 78.146 },
        { id: 'tirunelveli', name: 'Tirunelveli', emoji: '🌳', lat: 8.7139, lng: 77.7567 }
    ],
    maharashtra: [
        { id: 'mumbai', name: 'Mumbai', emoji: '🌆', lat: 19.076, lng: 72.8777 },
        { id: 'pune', name: 'Pune', emoji: '📚', lat: 18.5204, lng: 73.8567 },
        { id: 'nagpur', name: 'Nagpur', emoji: '🍊', lat: 21.1458, lng: 79.0882 },
        { id: 'nashik', name: 'Nashik', emoji: '🍇', lat: 19.9975, lng: 73.7898 },
        { id: 'aurangabad', name: 'Aurangabad', emoji: '🏛️', lat: 19.8762, lng: 75.3433 },
        { id: 'kolhapur', name: 'Kolhapur', emoji: '👟', lat: 16.705, lng: 74.2433 }
    ],
    punjab: [
        { id: 'amritsar', name: 'Amritsar', emoji: '🛕', lat: 31.634, lng: 74.8723 },
        { id: 'ludhiana', name: 'Ludhiana', emoji: '🏭', lat: 30.901, lng: 75.8573 },
        { id: 'jalandhar', name: 'Jalandhar', emoji: '⚽', lat: 31.326, lng: 75.5762 },
        { id: 'patiala', name: 'Patiala', emoji: '👑', lat: 30.34, lng: 76.3869 },
        { id: 'bathinda', name: 'Bathinda', emoji: '🌾', lat: 30.2104, lng: 74.9455 },
        { id: 'mohali', name: 'Mohali', emoji: '🏏', lat: 30.7046, lng: 76.7179 }
    ],
    rajasthan: [
        { id: 'jaipur', name: 'Jaipur', emoji: '🏰', lat: 26.9124, lng: 75.7873 },
        { id: 'jodhpur', name: 'Jodhpur', emoji: '🏜️', lat: 26.2389, lng: 73.0243 },
        { id: 'udaipur', name: 'Udaipur', emoji: '🏞️', lat: 24.5854, lng: 73.7125 },
        { id: 'kota', name: 'Kota', emoji: '📚', lat: 25.2138, lng: 75.8648 },
        { id: 'ajmer', name: 'Ajmer', emoji: '🕌', lat: 26.4499, lng: 74.6399 },
        { id: 'bikaner', name: 'Bikaner', emoji: '🐪', lat: 28.0229, lng: 73.3119 }
    ],
    gujarat: [
        { id: 'ahmedabad', name: 'Ahmedabad', emoji: '🏛️', lat: 23.0225, lng: 72.5714 },
        { id: 'surat', name: 'Surat', emoji: '💎', lat: 21.1702, lng: 72.8311 },
        { id: 'vadodara', name: 'Vadodara', emoji: '👑', lat: 22.3072, lng: 73.1812 },
        { id: 'rajkot', name: 'Rajkot', emoji: '🏭', lat: 22.3039, lng: 70.8022 },
        { id: 'bhavnagar', name: 'Bhavnagar', emoji: '⚓', lat: 21.7645, lng: 72.1519 },
        { id: 'junagadh', name: 'Junagadh', emoji: '🦁', lat: 21.5222, lng: 70.4579 }
    ],
    mp: [
        { id: 'bhopal', name: 'Bhopal', emoji: '🏞️', lat: 23.2599, lng: 77.4126 },
        { id: 'indore', name: 'Indore', emoji: '🏙️', lat: 22.7196, lng: 75.8577 },
        { id: 'gwalior', name: 'Gwalior', emoji: '🏰', lat: 26.2183, lng: 78.1828 },
        { id: 'jabalpur', name: 'Jabalpur', emoji: '🌊', lat: 23.1815, lng: 79.9864 },
        { id: 'ujjain', name: 'Ujjain', emoji: '🛕', lat: 23.1765, lng: 75.7885 },
        { id: 'rewa', name: 'Rewa', emoji: '🌳', lat: 24.5373, lng: 81.303 }
    ],
    up: [
        { id: 'lucknow', name: 'Lucknow', emoji: '🏛️', lat: 26.8467, lng: 80.9462 },
        { id: 'kanpur', name: 'Kanpur', emoji: '🏭', lat: 26.4499, lng: 80.3319 },
        { id: 'varanasi', name: 'Varanasi', emoji: '🛕', lat: 25.3176, lng: 82.9739 },
        { id: 'agra', name: 'Agra', emoji: '🕌', lat: 27.1767, lng: 78.0081 },
        { id: 'prayagraj', name: 'Prayagraj', emoji: '🌊', lat: 25.4358, lng: 81.8463 },
        { id: 'meerut', name: 'Meerut', emoji: '⚔️', lat: 28.9845, lng: 77.7064 }
    ],
    bihar: [
        { id: 'patna', name: 'Patna', emoji: '🏛️', lat: 25.5941, lng: 85.1376 },
        { id: 'gaya', name: 'Gaya', emoji: '🛕', lat: 24.7914, lng: 85.0002 },
        { id: 'muzaffarpur', name: 'Muzaffarpur', emoji: '🍈', lat: 26.1209, lng: 85.3647 },
        { id: 'bhagalpur', name: 'Bhagalpur', emoji: '🐟', lat: 25.2425, lng: 87.0041 },
        { id: 'darbhanga', name: 'Darbhanga', emoji: '📚', lat: 26.1542, lng: 85.8918 },
        { id: 'purnia', name: 'Purnia', emoji: '🌾', lat: 25.7771, lng: 87.4753 }
    ],
    wb: [
        { id: 'kolkata', name: 'Kolkata', emoji: '🌉', lat: 22.5726, lng: 88.3639 },
        { id: 'howrah', name: 'Howrah', emoji: '🏭', lat: 22.5958, lng: 88.2636 },
        { id: 'durgapur', name: 'Durgapur', emoji: '⚙️', lat: 23.5204, lng: 87.3119 },
        { id: 'siliguri', name: 'Siliguri', emoji: '🏔️', lat: 26.7271, lng: 88.3953 },
        { id: 'asansol', name: 'Asansol', emoji: '⛏️', lat: 23.6889, lng: 86.9661 },
        { id: 'kharagpur', name: 'Kharagpur', emoji: '🚂', lat: 22.346, lng: 87.232 }
    ]
};

// Application State
let appState = {
    location: null,
    selectedCrop: null,
    selectedRegion: null,
    selectedDistrict: null,
    weatherData: null,
    alertsData: null
};
window.appState = appState;

// DOM Elements
const elements = {
    welcomeModal: document.getElementById('welcomeModal'),
    app: document.getElementById('app'),
    getStartedBtn: document.getElementById('getStartedBtn'),
    headerGreeting: document.getElementById('headerGreeting'),
    gpsBtn: document.getElementById('gpsBtn'),
    locationName: document.getElementById('locationName'),
    locationCoords: document.getElementById('locationCoords'),
    locationLoading: document.getElementById('locationLoading'),
    locationConfirmation: document.getElementById('locationConfirmation'),
    confirmedLocation: document.getElementById('confirmedLocation'),
    cropGrid: document.getElementById('cropGrid'),
    selectedCropInfo: document.getElementById('selectedCropInfo'),
    selectedCropName: document.getElementById('selectedCropName'),
    alertsContainer: document.getElementById('alertsContainer'),
    frostSection: document.getElementById('frostSection'),
    frostCard: document.getElementById('frostCard'),
    refreshBtn: document.getElementById('refreshBtn'),
    talkBtn: document.getElementById('talkBtn')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Stop speech when user leaves page or switches tab
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const talkBtn = document.getElementById('talkBtn');
        if (talkBtn) {
            talkBtn.classList.remove('speaking');
            talkBtn.innerHTML = '🔊';
        }
    }
});

window.addEventListener('beforeunload', () => {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
});

window.addEventListener('pagehide', () => {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
});

function initializeApp() {
    // Set language dropdown to saved language
    const languageDropdown = document.getElementById('languageSelect');
    if (languageDropdown) {
        languageDropdown.value = currentLanguage;
        languageDropdown.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
    
    // Initialize speech synthesis voices
    if ('speechSynthesis' in window) {
        // Load voices (some browsers need this to be called)
        window.speechSynthesis.getVoices();
        // Some browsers load voices asynchronously
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
    
    // Always show welcome modal on page load
    // Load any saved state (location, crop, language)
    loadSavedState();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize Telangana map for manual selection
    initializeTelanganaMap();
    
    // Render crops
    renderCrops();
    
    // Update greeting
    updateGreeting();
    
    // Apply translations for current language
    updateAllTranslations();
}

function setupEventListeners() {
    // Get Started button
    elements.getStartedBtn.addEventListener('click', () => {
        hideWelcomeModal();
    });
    
    // GPS button
    elements.gpsBtn.addEventListener('click', detectLocation);
    
    // Refresh button
    elements.refreshBtn.addEventListener('click', refreshData);
    
    // Talk button
    if (elements.talkBtn) {
        elements.talkBtn.addEventListener('click', speakWeatherAlerts);
    }
}

function hideWelcomeModal() {
    elements.welcomeModal.classList.add('hidden');
    elements.app.classList.remove('hidden');
}

function updateGreeting() {
    const hour = new Date().getHours();
    let greetingKey = '';
    let emoji = '';
    
    if (hour >= 5 && hour < 12) {
        greetingKey = 'goodMorning';
        emoji = '🌅';
    } else if (hour >= 12 && hour < 17) {
        greetingKey = 'goodAfternoon';
        emoji = '☀️';
    } else if (hour >= 17 && hour < 21) {
        greetingKey = 'goodEvening';
        emoji = '🌇';
    } else {
        greetingKey = 'goodNight';
        emoji = '🌙';
    }
    
    // Get translation (it may already include emoji for non-English)
    let greeting = t(greetingKey);
    
    // If English, prepend emoji
    if (currentLanguage === 'en') {
        greeting = `${emoji} ${greeting}`;
    }
    
    elements.headerGreeting.textContent = greeting;
}

// Update language badge in smart recommendations section
function updateLanguageBadge() {
    const languageBadge = document.getElementById('languageBadge');
    if (!languageBadge) return;
    
    const languageNames = {
        'en': 'English 🇬🇧',
        'hi': 'हिंदी 🇮🇳',
        'te': 'తెలుగు 🇮🇳',
        'ta': 'தமிழ் 🇮🇳',
        'kn': 'ಕನ್ನಡ 🇮🇳',
        'mr': 'मराठी 🇮🇳',
        'pa': 'ਪੰਜਾਬੀ 🇮🇳',
        'bn': 'বাংলা 🇮🇳'
    };
    
    languageBadge.textContent = languageNames[currentLanguage] || currentLanguage;
}

// Telangana district aliases to ensure robust mapping from geocoding APIs
const TELANGANA_DISTRICT_ALIASES = {
    'komaram bheem': 'asifabad',
    'komarambheem': 'asifabad',
    'asifabad': 'asifabad',
    'jayashankar': 'bhupalapally',
    'bhupalpally': 'bhupalapally',
    'bhupalapally': 'bhupalapally',
    'bhadradri': 'kothagudem',
    'kothagudem': 'kothagudem',
    'jogulamba': 'gadwal',
    'gadwal': 'gadwal',
    'medchal': 'medchal',
    'malkajgiri': 'medchal',
    'rajanna': 'sircilla',
    'sircilla': 'sircilla',
    'ranga reddy': 'rangareddy',
    'rangareddy': 'rangareddy',
    'yadadri': 'yadadri',
    'bhuvanagiri': 'yadadri',
    'bhongir': 'yadadri',
    'warangal urban': 'hanumakonda',
    'hanumakonda': 'hanumakonda',
    'warangal rural': 'warangal',
    'warangal': 'warangal',
    'mahbubnagar': 'mahbubnagar',
    'mahabubnagar': 'mahbubnagar'
};

// Match detected location to one of the 33 official Telangana districts
function matchTelanganaDistrict(districtName, lat, lng) {
    const list = (typeof telanganaMapDistricts !== 'undefined') ? telanganaMapDistricts : {};
    if (!districtName && (lat === undefined || lng === undefined)) return null;

    if (districtName) {
        const clean = districtName.toLowerCase().replace(/district/gi, '').replace(/collectorate/gi, '').trim();

        // 1. Direct ID match
        if (list[clean]) return list[clean];

        // 2. Direct name match
        for (const [id, d] of Object.entries(list)) {
            if (d.name.toLowerCase() === clean) return d;
        }

        // 3. Alias dictionary match
        for (const [alias, id] of Object.entries(TELANGANA_DISTRICT_ALIASES)) {
            if (clean.includes(alias) || alias.includes(clean)) {
                if (list[id]) return list[id];
            }
        }

        // 4. Substring search in district names
        for (const [id, d] of Object.entries(list)) {
            const dName = d.name.toLowerCase();
            if (clean.includes(dName) || dName.includes(clean) || id.includes(clean) || clean.includes(id)) {
                return d;
            }
        }
    }

    // 5. Fallback: If coordinates inside Telangana bounding box, pick closest district
    if (lat !== undefined && lng !== undefined) {
        if (lat >= 15.8 && lat <= 19.9 && lng >= 77.2 && lng <= 81.3) {
            return findNearestTelanganaDistrict(lat, lng);
        }
    }

    return null;
}

// Find nearest Telangana district from coordinates
function findNearestTelanganaDistrict(lat, lng) {
    let nearest = null;
    let minDistance = Infinity;
    const districtList = (typeof telanganaMapDistricts !== 'undefined') ? telanganaMapDistricts : {};
    
    for (const [id, dist] of Object.entries(districtList)) {
        const dLat = (lat - dist.lat);
        const dLng = (lng - dist.lng);
        const distSq = (dLat * dLat) + (dLng * dLng);
        if (distSq < minDistance) {
            minDistance = distSq;
            nearest = dist;
        }
    }
    return nearest;
}

// Reverse Geocoding with Backend Proxy and multi-tier client fallbacks
async function reverseGeocode(lat, lng) {
    // 1. Primary: Server-side proxy endpoint (immune to browser CORS & rate limits)
    try {
        const res = await fetch(`${API_BASE_URL}/reverse-geocode?lat=${lat}&lng=${lng}`);
        if (res.ok) {
            const data = await res.json();
            if (data.status === 'success') {
                return data;
            }
        }
    } catch (e) {
        console.warn('Backend reverse-geocode error, trying client-side fallback:', e);
    }

    // 2. Fallback 1: BigDataCloud Client API (fast, free, CORS-enabled)
    try {
        const bdcRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        if (bdcRes.ok) {
            const bdcData = await bdcRes.json();
            const town = bdcData.locality || bdcData.city || '';
            const state = bdcData.principalSubdivision || '';
            let district = '';

            const localityInfo = bdcData.localityInfo?.administrative || [];
            for (const item of localityInfo) {
                if (item.adminLevel === 6 || item.adminLevel === 5) {
                    const n = item.name || '';
                    if (n && !district) district = n.replace(/ District/gi, '').trim();
                }
            }
            if (!district) district = town;

            const isTelangana = state.toLowerCase().includes('telangana') ||
                (lat >= 15.8 && lat <= 19.9 && lng >= 77.2 && lng <= 81.3);

            const parts = [town, district, state].filter(Boolean);
            return {
                status: 'success',
                lat,
                lng,
                town,
                district,
                state,
                is_telangana: isTelangana,
                formatted: parts.join(', ') || `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`
            };
        }
    } catch (e) {
        console.warn('BigDataCloud reverse geocode error, trying Nominatim fallback:', e);
    }

    // 3. Fallback 2: OpenStreetMap Nominatim
    try {
        const nomRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        if (nomRes.ok) {
            const nomData = await nomRes.json();
            const addr = nomData.address || {};
            const town = addr.city || addr.town || addr.village || addr.suburb || '';
            const district = (addr.state_district || addr.county || '').replace(/ District/gi, '').trim();
            const state = addr.state || '';
            const isTelangana = state.toLowerCase().includes('telangana') ||
                (lat >= 15.8 && lat <= 19.9 && lng >= 77.2 && lng <= 81.3);

            const parts = [town, district, state].filter(Boolean);
            return {
                status: 'success',
                lat,
                lng,
                town,
                district,
                state,
                is_telangana: isTelangana,
                formatted: parts.join(', ') || `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`
            };
        }
    } catch (e) {
        console.warn('Nominatim reverse geocode error:', e);
    }

    // 4. Fallback 3: Coordinate bounds check
    const isTelangana = (lat >= 15.8 && lat <= 19.9 && lng >= 77.2 && lng <= 81.3);
    return {
        status: 'fallback',
        lat,
        lng,
        town: '',
        district: '',
        state: isTelangana ? 'Telangana' : 'Other',
        is_telangana: isTelangana,
        formatted: `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`
    };
}

// Location Functions - Auto GPS
async function detectLocation() {
    if (elements.gpsBtn) elements.gpsBtn.classList.add('loading');
    if (elements.locationLoading) elements.locationLoading.classList.remove('hidden');
    
    if (!navigator.geolocation) {
        showLocationError('Geolocation is not supported by your browser');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                
                // Reverse geocode detected coordinates
                const geo = await reverseGeocode(latitude, longitude);
                const isTelangana = geo.is_telangana;
                
                if (isTelangana) {
                    // Match to Telangana District
                    const matchedDistrict = matchTelanganaDistrict(geo.district || geo.town, latitude, longitude);
                    const districtId = matchedDistrict ? matchedDistrict.id : 'hyderabad';
                    const districtObj = (typeof telanganaMapDistricts !== 'undefined' && telanganaMapDistricts[districtId])
                        ? telanganaMapDistricts[districtId]
                        : { id: districtId, name: 'Hyderabad', emoji: '🏛️', lat: latitude, lng: longitude };
                    
                    const townName = geo.town || districtObj.name;
                    
                    // 1. Sync dropdowns (select district, populate & select city/town, dynamically add if missing)
                    if (typeof syncLocationDropdowns === 'function') {
                        syncLocationDropdowns(districtId, townName, latitude, longitude);
                    }
                    
                    // 2. Update app state
                    appState.location = { lat: latitude, lng: longitude };
                    appState.selectedRegion = { id: 'telangana', name: 'Telangana' };
                    appState.selectedDistrict = { ...districtObj, selectedCity: townName };
                    
                    // 3. Update UI location labels
                    const displayName = `${townName ? townName + ', ' : ''}${districtObj.name}, Telangana`;
                    if (elements.locationName) elements.locationName.textContent = displayName;
                    if (elements.locationCoords) elements.locationCoords.textContent = `${latitude.toFixed(4)}°N, ${longitude.toFixed(4)}°E (GPS)`;
                    
                    // 4. Update confirmed location badge
                    if (elements.confirmedLocation) {
                        elements.confirmedLocation.textContent = `${districtObj.emoji || '📍'} ${displayName}`;
                    }
                    if (elements.locationConfirmation) {
                        elements.locationConfirmation.classList.remove('hidden');
                    }
                    
                    // 5. Save to localStorage
                    try {
                        localStorage.setItem('farmguard_location', JSON.stringify({ lat: latitude, lng: longitude }));
                        localStorage.setItem('farmguard_region', 'telangana');
                        localStorage.setItem('farmguard_district', districtId);
                        localStorage.setItem('farmguard_city', townName);
                    } catch (e) {
                        console.warn('Could not save to localStorage:', e);
                    }
                    
                    // 6. Fetch weather alerts if a crop is selected
                    if (appState.selectedCrop && typeof fetchWeatherAlerts === 'function') {
                        fetchWeatherAlerts();
                    }
                } else {
                    // OUTSIDE TELANGANA:
                    // Preserve real coordinates and place name (e.g. "Bengaluru, Karnataka")
                    // Do NOT force/snap to an unrelated Telangana district!
                    const stateName = geo.state || 'Outside Telangana';
                    const placeName = geo.town ? `${geo.town}, ${stateName}` : (geo.formatted || `${stateName}`);
                    
                    // 1. Reset dropdowns and clear map highlight
                    if (typeof syncLocationDropdowns === 'function') {
                        syncLocationDropdowns(null);
                    }
                    
                    // 2. Update app state
                    appState.location = { lat: latitude, lng: longitude };
                    appState.selectedRegion = { id: 'other', name: stateName };
                    appState.selectedDistrict = null;
                    
                    // 3. Update UI location labels
                    if (elements.locationName) elements.locationName.textContent = placeName;
                    if (elements.locationCoords) elements.locationCoords.textContent = `${latitude.toFixed(4)}°N, ${longitude.toFixed(4)}°E (GPS)`;
                    
                    // 4. Update confirmed location badge
                    if (elements.confirmedLocation) {
                        elements.confirmedLocation.textContent = `📍 ${placeName}`;
                    }
                    if (elements.locationConfirmation) {
                        elements.locationConfirmation.classList.remove('hidden');
                    }
                    
                    // 5. Save to localStorage
                    try {
                        localStorage.setItem('farmguard_location', JSON.stringify({ lat: latitude, lng: longitude }));
                        localStorage.setItem('farmguard_region', 'other');
                        localStorage.removeItem('farmguard_district');
                        localStorage.removeItem('farmguard_city');
                    } catch (e) {
                        console.warn('Could not save to localStorage:', e);
                    }
                    
                    // 6. Fetch weather alerts if a crop is selected
                    if (appState.selectedCrop && typeof fetchWeatherAlerts === 'function') {
                        fetchWeatherAlerts();
                    }
                }
            } catch (err) {
                console.error('Error processing GPS location:', err);
                showLocationError('Error resolving location details.');
            } finally {
                if (elements.gpsBtn) elements.gpsBtn.classList.remove('loading');
                if (elements.locationLoading) elements.locationLoading.classList.add('hidden');
            }
        },
        (error) => {
            showLocationError(getLocationErrorMessage(error));
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function getLocationErrorMessage(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return 'Location permission denied. Please enable GPS.';
        case error.POSITION_UNAVAILABLE:
            return 'Location information unavailable.';
        case error.TIMEOUT:
            return 'Location request timed out.';
        default:
            return 'An unknown error occurred.';
    }
}

function showLocationError(message) {
    if (elements.gpsBtn) elements.gpsBtn.classList.remove('loading');
    if (elements.locationLoading) elements.locationLoading.classList.add('hidden');
    if (elements.locationCoords) {
        elements.locationCoords.textContent = message;
        elements.locationCoords.style.color = '#ef4444';
        
        setTimeout(() => {
            elements.locationCoords.style.color = '';
            if (appState.location) {
                elements.locationCoords.textContent = `${appState.location.lat.toFixed(4)}°N, ${appState.location.lng.toFixed(4)}°E`;
            } else {
                elements.locationCoords.textContent = (typeof t === 'function' ? t('chooseOrGps') : 'Choose below or use GPS') || 'Choose below or use GPS';
            }
        }, 4000);
    }
}

// Manual Location Selection Functions
function initializeTelanganaMap() {
    // Initialize Telangana map directly as primary interface
    const mapContainer = document.getElementById('telanganaMapContainer');
    if (mapContainer && typeof renderTelanganaMap === 'function') {
        mapContainer.classList.remove('hidden');
        renderTelanganaMap();
    }
    
    // Initialize manual selector dropdowns
    if (typeof renderManualSelector === 'function') {
        renderManualSelector();
    }
}

function selectDistrictFromMap(districtId, cityName, lat, lng) {
    if (typeof syncLocationDropdowns === 'function') {
        syncLocationDropdowns(districtId, cityName, lat, lng);
    }
    const district = (typeof telanganaMapDistricts !== 'undefined') ? telanganaMapDistricts[districtId] : null;
    
    if (district) {
        const citySelect = document.getElementById('citySelect');
        const selectedCity = (citySelect && citySelect.value) ? citySelect.value : (cityName || district.name);
        appState.selectedDistrict = { ...district, selectedCity: selectedCity };
        appState.selectedRegion = { id: 'telangana', name: 'Telangana' };
        appState.location = { lat: lat || district.lat, lng: lng || district.lng };
        
        // Update location display with translated names
        const translatedCity = (typeof getTranslatedCityName === 'function') ? getTranslatedCityName(selectedCity) : selectedCity;
        const translatedDistrict = (typeof getMapDistrictName === 'function') ? getMapDistrictName(districtId) : (getDistrictName(district.id) || district.name);
        const locationText = `${translatedCity}, ${translatedDistrict}`;
        
        const locationNameEl = document.getElementById('locationName');
        if (locationNameEl) {
            locationNameEl.textContent = locationText;
        }
        
        const locationCoordsEl = document.getElementById('locationCoords');
        if (locationCoordsEl) {
            locationCoordsEl.textContent = `${appState.location.lat.toFixed(4)}°N, ${appState.location.lng.toFixed(4)}°E`;
        }
        
        // Show confirmation
        const confirmedLocationEl = document.getElementById('confirmedLocation');
        const locationConfirmationEl = document.getElementById('locationConfirmation');
        if (confirmedLocationEl) {
            confirmedLocationEl.textContent = `${district.emoji || '📍'} ${locationText}`;
        }
        if (locationConfirmationEl) {
            locationConfirmationEl.classList.remove('hidden');
        }
        
        // Save to localStorage
        try {
            localStorage.setItem('farmguard_location', JSON.stringify(appState.location));
            localStorage.setItem('farmguard_region', 'telangana');
            localStorage.setItem('farmguard_district', districtId);
            localStorage.setItem('farmguard_city', selectedCity);
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
        
        // Fetch weather if crop is selected
        if (appState.selectedCrop && typeof fetchWeatherAlerts === 'function') {
            fetchWeatherAlerts();
        }
    }
}

// Keep old functions for compatibility but they won't be called
function renderRegions() {
    // No longer used - Telangana map is primary interface
}

function renderDistricts(regionId) {
    // No longer used - Telangana map is primary interface
}

function selectDistrict(regionId, districtId) {
    // No longer used - Telangana map is primary interface
}

// Make district selection function globally available for map clicks
window.selectDistrictFromMap = selectDistrictFromMap;

// Crop Functions
function renderCrops() {
    elements.cropGrid.innerHTML = crops.map(crop => `
        <div class="crop-card" data-crop-id="${crop.id}" onclick="selectCrop('${crop.id}')">
            <span class="crop-image">${crop.emoji}</span>
            <span class="crop-name">${getCropName(crop.id)}</span>
        </div>
    `).join('');
}

function selectCrop(cropId) {
    // Remove previous selection
    document.querySelectorAll('.crop-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to new crop
    const selectedCard = document.querySelector(`[data-crop-id="${cropId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // Update state
    appState.selectedCrop = crops.find(c => c.id === cropId);
    
    // Show selected crop info with translated name
    elements.selectedCropInfo.classList.remove('hidden');
    elements.selectedCropName.textContent = `${appState.selectedCrop.emoji} ${getCropName(appState.selectedCrop.id)}`;
    
    // Save to localStorage
    localStorage.setItem('farmguard_crop', cropId);
    
    // Check if district and city are selected, or if location is outside Telangana
    const districtSelect = document.getElementById('districtSelect');
    const citySelect = document.getElementById('citySelect');
    const districtSelected = districtSelect && districtSelect.value;
    const citySelected = citySelect && citySelect.value;
    const isOutsideTelangana = appState.location && appState.selectedRegion && appState.selectedRegion.id === 'other';
    
    // Fetch weather if location is set
    if (appState.location && ((districtSelected && citySelected) || isOutsideTelangana)) {
        fetchWeatherAlerts();
    } else if (!districtSelected && !citySelected) {
        showAlertMessage(t('selectDistrictCity'));
    } else if (!districtSelected) {
        showAlertMessage(t('selectDistrictFirst'));
    } else if (!citySelected) {
        showAlertMessage(t('selectCityFirst'));
    } else {
        showAlertMessage(t('selectLocationCrop'));
    }
}

// Weather & Alerts Functions
async function fetchWeatherAlerts() {
    showAlertLoading();
    
    try {
        // Build query parameters with location and crop
        const params = new URLSearchParams();
        
        // Add location coordinates
        if (appState.location) {
            params.append('lat', appState.location.lat);
            params.append('lng', appState.location.lng);
        }
        
        // Add district name for better localization
        if (appState.selectedDistrict) {
            params.append('district', appState.selectedDistrict.id || appState.selectedDistrict.name);
        }
        
        // Add crop for crop-specific tips
        if (appState.selectedCrop) {
            params.append('crop', appState.selectedCrop.id);
        }
        
        const queryString = params.toString();
        const url = `${API_BASE_URL}/alerts${queryString ? '?' + queryString : ''}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        appState.alertsData = data;
        
        renderWeatherAlerts(data);
        renderForecast(data.forecast);
        renderSmartRecommendations(data.weekly_recommendations, data.crop_tips);
        renderSprayWindow(data.spray_window);
        renderDiseasePressure(data.disease_pressure);
        renderFrostAlert(data.frost_alert);
        
    } catch (error) {
        console.error('Error fetching alerts:', error);
        showAlertError('Unable to fetch weather data. Please check your connection.');
    }
}

function showAlertLoading() {
    elements.alertsContainer.innerHTML = `
        <div class="placeholder-message">
            <div class="spinner"></div>
            <p>Fetching weather data...</p>
        </div>
    `;
}

function showAlertMessage(message) {
    elements.alertsContainer.innerHTML = `
        <div class="placeholder-message">
            <span class="placeholder-icon">📍</span>
            <p>${message}</p>
        </div>
    `;
}

function showAlertError(message) {
    elements.alertsContainer.innerHTML = `
        <div class="placeholder-message">
            <span class="placeholder-icon">⚠️</span>
            <p>${message}</p>
        </div>
    `;
}

function renderWeatherAlerts(data) {
    const weather = data.current_weather;
    const condition = weather.condition || 'sunny';
    
    const conditionEmojis = {
        sunny: '☀️',
        cloudy: '☁️',
        rainy: '🌧️',
        windy: '💨',
        stormy: '⛈️'
    };
    
    // Get translated condition name
    const translatedCondition = t(condition) || (condition.charAt(0).toUpperCase() + condition.slice(1));
    
    // Get translated crop name
    const cropName = appState.selectedCrop ? getCropName(appState.selectedCrop.id) : t('selectCrop');
    
    // Generate summary from activity_alerts
    const activities = data.activity_alerts || [];
    const suitableActivities = activities.filter(a => a.suitable).map(a => a.activity);
    const unsuitableActivities = activities.filter(a => !a.suitable).map(a => a.activity);
    
    elements.alertsContainer.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
            <span style="font-size: 0.85rem; font-weight: 600; color: #475569;">📍 ${data.location ? data.location.district : 'Telangana'}</span>
            <span style="display: inline-flex; align-items: center; font-size: 0.8rem; color: #166534; font-weight: 600; background: #dcfce7; padding: 0.2rem 0.6rem; border-radius: 12px;">
                <span style="display: inline-block; width: 7px; height: 7px; background: #22c55e; border-radius: 50%; margin-right: 6px;"></span>
                🛰️ ${t('liveDataBadge') || 'Live Satellite Data'} (Open-Meteo)
            </span>
        </div>
        <div class="weather-card">
            <div class="weather-item temp-item">
                <span class="weather-icon">🌡️</span>
                <div class="weather-value">${weather.temperature}</div>
                <div class="weather-label">${t('temperature')}</div>
            </div>
            <div class="weather-item humidity-item">
                <span class="weather-icon">💧</span>
                <div class="weather-value">${weather.humidity}</div>
                <div class="weather-label">${t('humidity')}</div>
            </div>
            <div class="weather-item wind-item">
                <span class="weather-icon">💨</span>
                <div class="weather-value">${weather.wind_speed}</div>
                <div class="weather-label">${t('windSpeed')}</div>
            </div>
            <div class="weather-item rain-item">
                <span class="weather-icon">🌧️</span>
                <div class="weather-value">${weather.precipitation}</div>
                <div class="weather-label">${t('precipitation')}</div>
            </div>
            <div class="weather-item">
                <span class="weather-icon">${conditionEmojis[condition] || '🌤️'}</span>
                <div class="weather-value">${translatedCondition}</div>
                <div class="weather-label">${t('condition')}</div>
            </div>
            <div class="weather-item temp-item">
                <span class="weather-icon">☀️</span>
                <div class="weather-value">${weather.uv_index}</div>
                <div class="weather-label">${t('uvIndex')}</div>
            </div>
        </div>
        <div class="weather-summary">
            <p><strong>${t('summary')} - ${cropName}:</strong></p>
            <p>✅ ${t('suitable')}: ${suitableActivities.length > 0 ? suitableActivities.join(', ') : 'None'}</p>
            <p>❌ ${t('notSuitable')}: ${unsuitableActivities.length > 0 ? unsuitableActivities.join(', ') : 'None'}</p>
        </div>
    `;
}

function renderActivities(activities) {
    // Activities are now displayed through smart recommendations section
    // This function is kept for compatibility but does nothing
    return;
}

function renderFrostAlert(frost) {
    if (!frost) return;
    
    elements.frostSection.classList.remove('hidden');
    
    const riskClass = `risk-${frost.risk_level.toLowerCase()}`;
    const frostEmoji = {
        'MINIMAL': '✅',
        'LOW': '⚠️',
        'MODERATE': '🔶',
        'HIGH': '🚨'
    };
    
    // Translate risk level
    const riskLevelKey = frost.risk_level.toLowerCase();
    const translatedRiskLevel = t(riskLevelKey) || frost.risk_level;
    
    // Get translated recommendation based on risk level
    const frostRecKeys = {
        'HIGH': 'frostRecHigh',
        'MODERATE': 'frostRecModerate',
        'LOW': 'frostRecLow',
        'MINIMAL': 'frostRecMinimal'
    };
    const translatedRecommendation = t(frostRecKeys[frost.risk_level]) || frost.recommendation;
    
    elements.frostCard.className = `frost-card ${riskClass}`;
    elements.frostCard.innerHTML = `
        <div class="frost-icon">❄️</div>
        <div class="frost-level">
            ${frostEmoji[frost.risk_level] || '❄️'} ${translatedRiskLevel.toUpperCase()}
        </div>
        <div class="frost-probability">
            ${t('frostProbability')}: ${frost.probability}
        </div>
        <div class="frost-recommendation">
            💡 ${translatedRecommendation}
        </div>
        ${appState.selectedCrop?.frostSensitive ? `
            <div class="frost-crop-warning" style="margin-top: 1rem; padding: 1rem; background: linear-gradient(135deg, #fee2e2, #fecaca); border-radius: 12px; color: #991b1b; font-weight: 600; border: 2px solid #f87171;">
                ⚠️ ${getCropName(appState.selectedCrop.id)} ${t('frostSensitive')}
            </div>
        ` : ''}
    `;
}

// Render Spray Window Advisor
function renderSprayWindow(spray) {
    const spraySection = document.getElementById('sprayWindowSection');
    const sprayCard = document.getElementById('sprayWindowCard');
    if (!spraySection || !sprayCard || !spray) return;
    
    spraySection.classList.remove('hidden');
    
    const statusClass = spray.status === 'OPTIMAL' ? 'status-optimal' : (spray.status === 'CAUTION' ? 'status-caution' : 'status-unsuitable');
    const statusText = spray.status === 'OPTIMAL' ? (t('safeToSprayNow') || 'SAFE TO SPRAY NOW') : (spray.status === 'CAUTION' ? (t('cautionSprayNow') || 'PROCEED WITH CAUTION') : (t('doNotSprayNow') || 'DO NOT SPRAY NOW'));
    const statusIcon = spray.status === 'OPTIMAL' ? '✅' : (spray.status === 'CAUTION' ? '⚠️' : '🚫');
    const bestWin = spray.best_window ? spray.best_window.window_text : 'Early Morning';
    
    let reasonsHtml = '';
    if (spray.reasons && spray.reasons.length > 0) {
        reasonsHtml = '<ul class="spray-reasons-list">' + spray.reasons.map(r => `<li>${r.text}</li>`).join('') + '</ul>';
    }
    
    let timelineHtml = '';
    if (spray.timeline && spray.timeline.length > 0) {
        timelineHtml = '<div class="hourly-timeline-scroll">' + spray.timeline.map(h => `
            <div class="timeline-hour-chip chip-${h.status}">
                <div class="chip-time">${h.hour_label}</div>
                <div class="chip-stat">💨 ${h.wind} km/h</div>
                <div class="chip-stat">💧 ${h.rain_prob}% rain</div>
            </div>
        `).join('') + '</div>';
    }
    
    sprayCard.innerHTML = `
        <div class="spray-banner ${statusClass}">
            <div class="spray-status-badge">
                <span>${statusIcon}</span>
                <span>${statusText}</span>
            </div>
            <div class="spray-best-window">
                ⏰ ${t('bestSprayWindow') || 'Next Safe Window:'} <strong>${bestWin}</strong>
            </div>
        </div>
        ${reasonsHtml}
        <div style="font-weight: 600; font-size: 0.9rem; color: #475569; margin-top: 0.75rem;">
            🕒 12-Hour Spray Forecast:
        </div>
        ${timelineHtml}
    `;
}

// Render Crop Disease & Pest Risk (PJTSAU)
function renderDiseasePressure(disease) {
    const diseaseSection = document.getElementById('diseasePressureSection');
    const container = document.getElementById('diseaseContainer');
    if (!diseaseSection || !container || !disease) return;
    
    diseaseSection.classList.remove('hidden');
    
    if (!disease.disease_alerts || disease.disease_alerts.length === 0) {
        container.innerHTML = `<div style="padding: 1rem; color: #64748b;">No active disease risks reported for this crop under current climate.</div>`;
        return;
    }
    
    container.innerHTML = disease.disease_alerts.map(d => {
        const borderClass = d.risk_level === 'HIGH' ? 'border-danger' : (d.risk_level === 'MODERATE' ? 'border-warning' : '');
        const badgeClass = d.risk_level === 'HIGH' ? 'badge-danger' : (d.risk_level === 'MODERATE' ? 'badge-warning' : 'badge-success');
        const translatedRisk = t(d.risk_level.toLowerCase()) || d.risk_level;
        
        return `
            <div class="disease-card ${borderClass}">
                <div class="disease-card-header">
                    <span class="disease-title">${d.disease_name}</span>
                    <span class="disease-badge ${badgeClass}">${translatedRisk} Risk</span>
                </div>
                <div style="font-size: 0.82rem; color: #64748b; margin-bottom: 0.5rem;">
                    Pathogen / Threat: <em>${d.pathogen}</em>
                </div>
                <div class="disease-advisory">
                    <strong>💡 ${t('inspectedAdvisory') || 'Recommended Action'}:</strong><br>
                    ${d.advisory}
                </div>
            </div>
        `;
    }).join('');
}

// Render 7-Day Forecast
function renderForecast(forecast) {
    if (!forecast || forecast.length === 0) return;
    
    const forecastSection = document.getElementById('forecastSection');
    const forecastGrid = document.getElementById('forecastGrid');
    const weekSummary = document.getElementById('weekSummary');
    
    if (!forecastSection || !forecastGrid) return;
    
    forecastSection.classList.remove('hidden');
    
    const conditionEmojis = {
        sunny: '☀️',
        partly_cloudy: '⛅',
        cloudy: '☁️',
        rainy: '🌧️',
        windy: '💨',
        stormy: '⛈️'
    };
    
    const dayNames = {
        'Monday': t('monday') || 'Monday',
        'Tuesday': t('tuesday') || 'Tuesday',
        'Wednesday': t('wednesday') || 'Wednesday',
        'Thursday': t('thursday') || 'Thursday',
        'Friday': t('friday') || 'Friday',
        'Saturday': t('saturday') || 'Saturday',
        'Sunday': t('sunday') || 'Sunday'
    };
    
    forecastGrid.innerHTML = forecast.slice(0, 7).map((day, index) => {
        const dayName = index === 0 ? (t('today') || 'Today') : 
                       index === 1 ? (t('tomorrow') || 'Tomorrow') : 
                       (dayNames[day.day_name] || day.day_name);
        
        const dateFormatted = new Date(day.date).toLocaleDateString(currentLanguage, { 
            month: 'short', 
            day: 'numeric' 
        });
        
        return `
            <div class="forecast-day-card">
                <div class="day-name">${dayName}</div>
                <div class="day-date">${dateFormatted}</div>
                <span class="weather-emoji">${conditionEmojis[day.condition] || '🌤️'}</span>
                <div class="temp-range">
                    <span class="temp-high">${Math.round(day.temp_max)}°</span>
                    <span class="temp-low">${Math.round(day.temp_min)}°</span>
                </div>
                <div class="rain-chance">
                    💧 ${day.precipitation_probability}%
                </div>
            </div>
        `;
    }).join('');
    
    // Week summary
    const rainyDays = forecast.filter(d => d.condition === 'rainy' || d.precipitation_probability > 60).length;
    const sunnyDays = forecast.filter(d => d.condition === 'sunny' || d.condition === 'partly_cloudy').length;
    const avgTemp = Math.round(forecast.reduce((sum, d) => sum + d.temp_max, 0) / forecast.length);
    
    weekSummary.innerHTML = `
        <div class="summary-item">
            <span class="summary-emoji">🌧️</span>
            <span class="summary-text">${t('rainyDays') || 'Rainy Days'}: <span class="summary-value">${rainyDays}</span></span>
        </div>
        <div class="summary-item">
            <span class="summary-emoji">☀️</span>
            <span class="summary-text">${t('sunnyDays') || 'Sunny Days'}: <span class="summary-value">${sunnyDays}</span></span>
        </div>
        <div class="summary-item">
            <span class="summary-emoji">🌡️</span>
            <span class="summary-text">${t('avgTemp') || 'Avg Temp'}: <span class="summary-value">${avgTemp}°C</span></span>
        </div>
    `;
}

// Render Smart Visual Recommendations
function renderSmartRecommendations(recommendations, cropTips) {
    if (!recommendations || recommendations.length === 0) return;
    
    const section = document.getElementById('smartRecommendationsSection');
    const todayActions = document.getElementById('todayActions');
    const weekPlanning = document.getElementById('weekPlanning');
    const planningCards = document.getElementById('planningCards');
    const cropTipsSection = document.getElementById('cropTipsSection');
    const cropTipsCards = document.getElementById('cropTipsCards');
    
    if (!section || !todayActions) return;
    
    section.classList.remove('hidden');
    
    // Separate today's actions from planning
    const todayRecs = recommendations.filter(r => r.urgency === 'today');
    const weekRecs = recommendations.filter(r => r.urgency === 'week' || r.urgency === 'plan');
    
    // Get translations for recommendations
    const recTitles = {
        skipIrrigationToday: t('skipIrrigationToday') || '💧 Skip Irrigation Today',
        skipIrrigationRainTomorrow: t('skipIrrigationRainTomorrow') || '💧 No Irrigation Needed',
        irrigateToday: t('irrigateToday') || '💧 Irrigate Today!',
        noSprayingWind: t('noSprayingWind') || '🧪 No Spraying - Windy',
        noSprayingRain: t('noSprayingRain') || '🧪 No Spraying - Rain Expected',
        sprayToday: t('sprayToday') || '🧪 Good Day to Spray',
        noHarvestRain: t('noHarvestRain') || '🚜 No Harvesting - Wet',
        waitHarvestHumidity: t('waitHarvestHumidity') || '🚜 Wait - High Humidity',
        harvestToday: t('harvestToday') || '🚜 Perfect for Harvesting',
        rainyWeekAlert: t('rainyWeekAlert') || '🌧️ Rainy Week Ahead',
        heatWaveAlert: t('heatWaveAlert') || '🔥 Heat Wave Expected',
        coldNightAlert: t('coldNightAlert') || '❄️ Cold Nights Coming',
        bestSprayingDay: t('bestSprayingDay') || '📅 Best Day for Spraying',
        bestHarvestingDay: t('bestHarvestingDay') || '📅 Best Day for Harvesting'
    };
    
    const recReasons = {
        rainExpected: t('rainExpected') || 'Rain expected - save water!',
        rainTomorrow: t('rainTomorrow') || 'Rain coming tomorrow - natural irrigation!',
        goodConditions: t('goodConditions') || 'Dry conditions - crops need water',
        windyConditions: t('windyConditions') || 'Wind will blow spray away',
        rainWashOff: t('rainWashOff') || 'Rain will wash off chemicals',
        calmConditions: t('calmConditions') || 'Calm weather - spray will stick',
        wetConditions: t('wetConditions') || 'Wet crops will get damaged',
        highHumidity: t('highHumidity') || 'Wait for dew to evaporate',
        perfectConditions: t('perfectConditions') || 'Dry and sunny - harvest now!',
        multipleRainyDays: t('multipleRainyDays') || 'Plan indoor work this week',
        highTemperatures: t('highTemperatures') || 'Irrigate early morning/evening',
        frostRisk: t('frostRisk') || 'Cover sensitive crops at night',
        optimalConditions: t('optimalConditions') || 'Weather will be ideal',
        dryConditions: t('dryConditions') || 'Low humidity expected'
    };
    
    // Render TODAY's action cards - Large visual cards
    if (todayRecs.length > 0) {
        todayActions.innerHTML = todayRecs.map(rec => {
            const actionClass = `action-${rec.action}`;
            const title = recTitles[rec.title_key] || rec.title_key;
            const reason = recReasons[rec.reason_key] || rec.reason_key;
            
            return `
                <div class="action-card ${actionClass}">
                    <span class="action-day">${t('today') || 'TODAY'}</span>
                    <span class="action-emoji">${rec.emoji}</span>
                    <h3 class="action-title">${title}</h3>
                    <p class="action-reason">${reason}</p>
                    ${rec.best_time ? `
                        <div class="action-time">
                            🕐 ${t('bestTime') || 'Best Time'}: ${rec.best_time}
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    } else {
        // Show default message
        todayActions.innerHTML = `
            <div class="action-card action-do">
                <span class="action-day">${t('today') || 'TODAY'}</span>
                <span class="action-emoji">✅🌾</span>
                <h3 class="action-title">${t('goodDayFarming') || 'Good Day for Farming!'}</h3>
                <p class="action-reason">${t('weatherFavorable') || 'Weather is favorable for farm work'}</p>
            </div>
        `;
    }
    
    // Render week planning if available
    if (weekRecs.length > 0) {
        weekPlanning.classList.remove('hidden');
        planningCards.innerHTML = weekRecs.map(rec => {
            const title = recTitles[rec.title_key] || rec.title_key;
            const reason = recReasons[rec.reason_key] || rec.reason_key;
            
            return `
                <div class="planning-card">
                    <span class="planning-emoji">${rec.emoji}</span>
                    <div class="planning-content">
                        <div class="planning-day">${rec.day}</div>
                        <div class="planning-activity">${title}</div>
                        ${rec.details ? `<div class="planning-details" style="font-size: 0.8rem; color: var(--text-secondary);">${rec.details}</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    } else {
        weekPlanning.classList.add('hidden');
    }
    
    // Render crop tips if available
    if (cropTips && cropTips.length > 0) {
        cropTipsSection.classList.remove('hidden');
        
        const tipTranslations = {
            highWaterCropDry: t('highWaterCropDry') || 'Your crop needs extra water in dry conditions. Irrigate more frequently.',
            lowWaterCropRain: t('lowWaterCropRain') || 'Heavy rain expected. Consider drainage to prevent waterlogging.',
            frostProtectionNeeded: t('frostProtectionNeeded') || 'Cold nights ahead! Cover your crops or use mulch for protection.',
            heatProtectionNeeded: t('heatProtectionNeeded') || 'Extreme heat coming. Provide shade and increase watering.'
        };
        
        cropTipsCards.innerHTML = cropTips.map(tip => {
            const tipText = tipTranslations[tip.tip_key] || tip.tip_key;
            const urgencyClass = tip.urgency === 'high' ? 'tip-urgent' : '';
            
            return `
                <div class="tip-card ${urgencyClass}">
                    <span class="tip-emoji">${tip.emoji}</span>
                    <p class="tip-text">${tipText}</p>
                </div>
            `;
        }).join('');
    } else {
        cropTipsSection.classList.add('hidden');
    }
}

// Refresh Data
async function refreshData() {
    const btn = elements.refreshBtn;
    const talkBtn = elements.talkBtn;
    
    // Prevent multiple clicks
    if (btn.classList.contains('refreshing')) return;
    
    // Stop any ongoing speech
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        if (talkBtn) {
            talkBtn.classList.remove('speaking');
            talkBtn.innerHTML = '🔊';
        }
    }
    
    // Add refreshing state
    btn.classList.add('refreshing');
    btn.disabled = true;
    
    // Check if district and city are selected
    const districtSelect = document.getElementById('districtSelect');
    const citySelect = document.getElementById('citySelect');
    const districtSelected = districtSelect && districtSelect.value;
    const citySelected = citySelect && citySelect.value;
    
    if (!districtSelected && !citySelected) {
        showRefreshMessage(t('selectDistrictCity') || 'Please select district and city first');
        btn.classList.remove('refreshing');
        btn.disabled = false;
        return;
    } else if (!districtSelected) {
        showRefreshMessage(t('selectDistrictFirst') || 'Please select a district first');
        btn.classList.remove('refreshing');
        btn.disabled = false;
        return;
    } else if (!citySelected) {
        showRefreshMessage(t('selectCityFirst') || 'Please select a city first');
        btn.classList.remove('refreshing');
        btn.disabled = false;
        return;
    }
    
    // Check if crop is selected
    if (!appState.selectedCrop) {
        showRefreshMessage(t('selectLocationCrop') || 'Please select a crop first');
        btn.classList.remove('refreshing');
        btn.disabled = false;
        return;
    }
    
    try {
        // Show refreshing indicator
        showRefreshMessage(t('fetchingWeather') || 'Refreshing weather data...');
        
        // Fetch fresh weather data
        await fetchWeatherAlerts();
        
        // Show success message briefly
        showRefreshMessage('✅ ' + (t('dataRefreshed') || 'Data refreshed successfully!'), 'success');
        
        // Auto-speak after refresh if talk button exists
        setTimeout(() => {
            if (talkBtn && appState.alertsData && appState.alertsData.current_weather) {
                speakWeatherAlerts();
            }
        }, 1000);
        
    } catch (error) {
        console.error('Refresh error:', error);
        showRefreshMessage('❌ ' + (t('refreshFailed') || 'Failed to refresh data'), 'error');
    } finally {
        // Remove refreshing state after animation completes
        setTimeout(() => {
            btn.classList.remove('refreshing');
            btn.disabled = false;
        }, 600);
    }
}

// Show refresh status message
function showRefreshMessage(message, type = 'info') {
    // Check if message element exists, if not create it
    let msgEl = document.getElementById('refreshMessage');
    if (!msgEl) {
        msgEl = document.createElement('div');
        msgEl.id = 'refreshMessage';
        msgEl.className = 'refresh-message';
        document.body.appendChild(msgEl);
    }
    
    // Set message and type
    msgEl.textContent = message;
    msgEl.className = `refresh-message refresh-message-${type} show`;
    
    // Auto-hide after 2.5 seconds for success/error, longer for info
    const hideDelay = type === 'info' ? 4000 : 2500;
    
    clearTimeout(msgEl.hideTimeout);
    msgEl.hideTimeout = setTimeout(() => {
        msgEl.classList.remove('show');
    }, hideDelay);
}

// Text-to-Speech: Speak Weather Alerts
let currentSpeech = null;

function speakWeatherAlerts() {
    const btn = elements.talkBtn;
    
    // If already speaking, stop it
    if (btn.classList.contains('speaking')) {
        window.speechSynthesis.cancel();
        btn.classList.remove('speaking');
        btn.innerHTML = '🔊';
        return;
    }
    
    // Check if district and city are selected
    const districtSelect = document.getElementById('districtSelect');
    const citySelect = document.getElementById('citySelect');
    const districtSelected = districtSelect && districtSelect.value;
    const citySelected = citySelect && citySelect.value;
    
    if (!districtSelected && !citySelected) {
        showRefreshMessage(t('selectDistrictCity') || 'Please select district and city first');
        return;
    } else if (!districtSelected) {
        showRefreshMessage(t('selectDistrictFirst') || 'Please select a district first');
        return;
    } else if (!citySelected) {
        showRefreshMessage(t('selectCityFirst') || 'Please select a city first');
        return;
    }
    
    // Check if crop is selected
    if (!appState.selectedCrop) {
        showRefreshMessage(t('selectCropFirst') || 'Please select a crop first');
        return;
    }
    
    // Check if we have weather data
    if (!appState.alertsData || !appState.alertsData.current_weather) {
        showRefreshMessage(t('noWeatherData') || 'No weather data available. Please refresh first.');
        return;
    }
    
    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
        showRefreshMessage(t('speechNotSupported') || 'Speech is not supported in this browser');
        return;
    }
    
    // Build the speech text
    const text = buildSpeechText();
    console.log('Speech text for', currentLanguage, ':', text); // Debug
    
    // Create speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on current selection
    const langCodes = {
        'en': 'en-IN',
        'hi': 'hi-IN',
        'te': 'te-IN'
    };
    
    utterance.lang = langCodes[currentLanguage] || 'en-IN';
    
    // Try to find voice matching the language
    const voices = window.speechSynthesis.getVoices();
    console.log('Available voices:', voices.map(v => v.name + ' (' + v.lang + ')'));
    
    let selectedVoice = null;
    
    if (currentLanguage === 'te') {
        // Telugu voice selection - try multiple options
        selectedVoice = voices.find(v => v.lang === 'te-IN');
        if (!selectedVoice) selectedVoice = voices.find(v => v.lang.startsWith('te'));
        if (!selectedVoice) selectedVoice = voices.find(v => v.name.toLowerCase().includes('telugu'));
        // If no Telugu voice, use Google voice or any available
        if (!selectedVoice) selectedVoice = voices.find(v => v.name.includes('Google') && v.lang.startsWith('te'));
    } else if (currentLanguage === 'hi') {
        // Hindi voice selection
        selectedVoice = voices.find(v => v.lang === 'hi-IN');
        if (!selectedVoice) selectedVoice = voices.find(v => v.lang.startsWith('hi'));
        if (!selectedVoice) selectedVoice = voices.find(v => v.name.toLowerCase().includes('hindi'));
    } else {
        // English voice selection
        selectedVoice = voices.find(v => v.lang === 'en-IN');
        if (!selectedVoice) selectedVoice = voices.find(v => v.lang.startsWith('en'));
    }
    
    // Final fallback: use any available voice
    if (!selectedVoice && voices.length > 0) {
        selectedVoice = voices[0];
    }
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log('Selected voice:', selectedVoice.name, selectedVoice.lang);
    }
    
    // Voice settings for clarity
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1;
    
    // Add speaking state
    btn.classList.add('speaking');
    btn.innerHTML = '⏹️';
    
    // Handle speech end
    utterance.onend = () => {
        btn.classList.remove('speaking');
        btn.innerHTML = '🔊';
    };
    
    // Handle speech error
    utterance.onerror = (event) => {
        console.error('Speech error:', event);
        btn.classList.remove('speaking');
        btn.innerHTML = '🔊';
        showRefreshMessage(t('speechError') || 'Speech error occurred', 'error');
    };
    
    // Speak
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    window.speechSynthesis.speak(utterance);
}

function buildSpeechText() {
    const data = appState.alertsData;
    const weather = data.current_weather;
    const frost = data.frost_alert;
    const activities = data.activity_alerts || [];
    
    let text = '';
    
    // Weather Alerts Section Title - Start here (in user's selected language)
    text += `${t('weatherAlerts') || 'Weather Alerts'}. `;
    
    // Temperature
    text += `${t('temperature') || 'Temperature'}, ${weather.temperature}. `;
    
    // Humidity
    text += `${t('humidity') || 'Humidity'}, ${weather.humidity}. `;
    
    // Wind Speed
    text += `${t('windSpeed') || 'Wind Speed'}, ${weather.wind_speed}. `;
    
    // Precipitation
    if (weather.precipitation) {
        text += `${t('precipitation') || 'Precipitation'}, ${weather.precipitation}. `;
    }
    
    // UV Index
    if (weather.uv_index) {
        text += `${t('uvIndex') || 'UV Index'}, ${weather.uv_index}. `;
    }
    
    // Weather Condition
    const condition = weather.condition || 'sunny';
    const translatedCondition = t(condition) || condition;
    text += `${t('condition') || 'Condition'}, ${translatedCondition}. `;
    
    // Frost Alert Section
    if (frost) {
        text += `${t('frostRiskAlert') || 'Frost Risk Alert'}. `;
        const frostRecKeys = {
            'HIGH': 'frostRecHigh',
            'MODERATE': 'frostRecModerate',
            'LOW': 'frostRecLow',
            'MINIMAL': 'frostRecMinimal'
        };
        const riskLevel = t(frost.risk_level.toLowerCase()) || frost.risk_level;
        const recommendation = t(frostRecKeys[frost.risk_level]) || frost.recommendation;
        text += `${t('riskLevel') || 'Risk Level'}, ${riskLevel}. `;
        text += `${t('frostProbability') || 'Probability'}, ${frost.probability}. `;
        text += `${recommendation}. `;
    }
    
    // Today's Recommendations Section
    const suitableActivities = activities.filter(a => a.suitable);
    const unsuitableActivities = activities.filter(a => !a.suitable);
    
    if (suitableActivities.length > 0 || unsuitableActivities.length > 0) {
        text += `${t('todayRecommendations') || 'Todays Recommendations'}. `;
    }
    
    if (suitableActivities.length > 0) {
        text += `${t('recommended') || 'Recommended'}. `;
        suitableActivities.forEach(a => {
            // Try activity name in lowercase for translation key
            const activityKey = a.activity.toLowerCase();
            const activityName = t(activityKey) || a.activity;
            text += `${activityName}. `;
        });
    }
    
    if (unsuitableActivities.length > 0) {
        text += `${t('notRecommended') || 'Not Recommended'}. `;
        unsuitableActivities.forEach(a => {
            // Try activity name in lowercase for translation key
            const activityKey = a.activity.toLowerCase();
            const activityName = t(activityKey) || a.activity;
            text += `${activityName}. `;
        });
    }
    
    return text;
}

// Load Saved State
function loadSavedState() {
    // Load saved location
    const savedLocation = localStorage.getItem('farmguard_location');
    const savedDistrict = localStorage.getItem('farmguard_district');
    const savedCity = localStorage.getItem('farmguard_city');
    const savedRegion = localStorage.getItem('farmguard_region');
    
    if (savedLocation && savedDistrict) {
        try {
            appState.location = JSON.parse(savedLocation);
            
            // Restore district & city dropdowns and map selection
            setTimeout(() => {
                if (typeof syncLocationDropdowns === 'function') {
                    syncLocationDropdowns(savedDistrict, savedCity);
                }
                
                const district = (typeof telanganaMapDistricts !== 'undefined') ? telanganaMapDistricts[savedDistrict] : null;
                if (district) {
                    appState.selectedDistrict = { ...district, selectedCity: savedCity || district.name };
                    appState.selectedRegion = { id: 'telangana', name: 'Telangana' };
                    
                    const translatedCity = (typeof getTranslatedCityName === 'function') ? getTranslatedCityName(savedCity || district.name) : (savedCity || district.name);
                    const translatedDistrict = (typeof getMapDistrictName === 'function') ? getMapDistrictName(savedDistrict) : (getDistrictName(savedDistrict) || district.name);
                    const locationText = `${translatedCity}, ${translatedDistrict}`;
                    
                    const locationNameEl = document.getElementById('locationName');
                    if (locationNameEl) {
                        locationNameEl.textContent = locationText;
                    }
                    
                    const locationCoordsEl = document.getElementById('locationCoords');
                    if (locationCoordsEl) {
                        locationCoordsEl.textContent = `${appState.location.lat.toFixed(4)}°N, ${appState.location.lng.toFixed(4)}°E`;
                    }
                    
                    const confirmedLocationEl = document.getElementById('confirmedLocation');
                    const locationConfirmationEl = document.getElementById('locationConfirmation');
                    if (confirmedLocationEl) {
                        confirmedLocationEl.textContent = `${district.emoji || '📍'} ${locationText}`;
                    }
                    if (locationConfirmationEl) {
                        locationConfirmationEl.classList.remove('hidden');
                    }
                }
            }, 300);
        } catch (e) {
            console.error('Error loading saved location:', e);
        }
    } else if (savedLocation && savedRegion === 'other') {
        try {
            appState.location = JSON.parse(savedLocation);
            appState.selectedRegion = { id: 'other', name: 'Outside Telangana' };
            appState.selectedDistrict = null;
        } catch (e) {
            console.error('Error loading saved location:', e);
        }
    }
    
    // Load saved crop
    const savedCrop = localStorage.getItem('farmguard_crop');
    if (savedCrop) {
        setTimeout(() => selectCrop(savedCrop), 400);
    }
}

// Make selectCrop available globally
window.selectCrop = selectCrop;
