// Telangana Interactive Map Component - Official 33 Districts
// Accurate SVG map based on original Telangana administrative boundaries

const telanganaMapSVG = `
<svg viewBox="0 0 700 800" class="telangana-map-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <style>
            .district-label { font-size: 9px; font-weight: 600; fill: #1b5e20; text-anchor: middle; pointer-events: none; }
            .district-label-small { font-size: 7px; }
        </style>
    </defs>
    
    <!-- Background -->
    <rect width="700" height="800" fill="#e8f5e9"/>
    
    <!-- ============ NORTHERN REGION ============ -->
    
    <!-- Adilabad - Northwest corner -->
    <path id="map-adilabad" class="district-path" data-district="adilabad" 
          d="M140,50 L195,40 L235,55 L245,95 L210,125 L165,130 L130,105 L120,70 Z"/>
    <text x="180" y="90" class="district-label">Adilabad</text>
    
    <!-- Komaram Bheem Asifabad - North -->
    <path id="map-asifabad" class="district-path" data-district="asifabad"
          d="M235,55 L320,45 L380,75 L370,120 L310,135 L245,95 Z"/>
    <text x="305" y="95" class="district-label district-label-small">K.B.Asifabad</text>
    
    <!-- Mancherial - Northeast -->
    <path id="map-mancherial" class="district-path" data-district="mancherial"
          d="M310,135 L370,120 L430,145 L440,190 L385,215 L330,195 Z"/>
    <text x="375" y="170" class="district-label">Mancherial</text>
    
    <!-- Nirmal - North central -->
    <path id="map-nirmal" class="district-path" data-district="nirmal"
          d="M165,130 L210,125 L260,150 L250,200 L195,215 L155,180 Z"/>
    <text x="205" y="175" class="district-label">Nirmal</text>
    
    <!-- Nizamabad - Northwest -->
    <path id="map-nizamabad" class="district-path" data-district="nizamabad"
          d="M70,135 L130,120 L155,165 L150,220 L90,235 L55,190 Z"/>
    <text x="105" y="180" class="district-label">Nizamabad</text>
    
    <!-- Kamareddy - West central north -->
    <path id="map-kamareddy" class="district-path" data-district="kamareddy"
          d="M90,235 L150,220 L190,245 L185,300 L125,320 L80,285 Z"/>
    <text x="135" y="275" class="district-label">Kamareddy</text>
    
    <!-- ============ NORTH-CENTRAL REGION ============ -->
    
    <!-- Jagtial -->
    <path id="map-jagtial" class="district-path" data-district="jagtial"
          d="M195,215 L250,200 L300,225 L290,275 L240,295 L190,265 Z"/>
    <text x="245" y="255" class="district-label">Jagtial</text>
    
    <!-- Peddapalli -->
    <path id="map-peddapalli" class="district-path" data-district="peddapalli"
          d="M300,225 L330,195 L385,215 L400,260 L355,285 L300,265 Z"/>
    <text x="345" y="245" class="district-label">Peddapalli</text>
    
    <!-- Karimnagar -->
    <path id="map-karimnagar" class="district-path" data-district="karimnagar"
          d="M240,295 L290,275 L345,300 L335,355 L280,375 L230,345 Z"/>
    <text x="285" y="330" class="district-label">Karimnagar</text>
    
    <!-- Rajanna Sircilla -->
    <path id="map-sircilla" class="district-path" data-district="sircilla"
          d="M185,300 L240,295 L265,340 L255,395 L200,410 L170,365 Z"/>
    <text x="220" y="360" class="district-label district-label-small">R.Sircilla</text>
    
    <!-- ============ EASTERN REGION ============ -->
    
    <!-- Jayashankar Bhupalpally -->
    <path id="map-bhupalapally" class="district-path" data-district="bhupalapally"
          d="M400,260 L460,240 L520,265 L530,325 L470,350 L410,330 L380,295 Z"/>
    <text x="455" y="300" class="district-label district-label-small">Bhupalpally</text>
    
    <!-- Mulugu - Far east -->
    <path id="map-mulugu" class="district-path" data-district="mulugu"
          d="M520,265 L600,245 L660,280 L670,360 L610,400 L540,370 L530,325 Z"/>
    <text x="595" y="330" class="district-label">Mulugu</text>
    
    <!-- Hanumakonda (Warangal Urban) -->
    <path id="map-hanumakonda" class="district-path" data-district="hanumakonda"
          d="M335,420 L395,400 L440,425 L435,475 L380,495 L335,470 Z"/>
    <text x="385" y="450" class="district-label district-label-small">Hanumakonda</text>
    
    <!-- Warangal (Warangal Rural) -->
    <path id="map-warangal" class="district-path" data-district="warangal"
          d="M440,350 L520,330 L570,375 L555,440 L485,465 L440,425 L435,380 Z"/>
    <text x="495" y="400" class="district-label">Warangal</text>
    
    <!-- Jangaon -->
    <path id="map-jangaon" class="district-path" data-district="jangaon"
          d="M280,420 L335,405 L380,440 L370,500 L315,520 L275,485 Z"/>
    <text x="325" y="465" class="district-label">Jangaon</text>
    
    <!-- Mahabubabad -->
    <path id="map-mahabubabad" class="district-path" data-district="mahabubabad"
          d="M380,495 L435,475 L495,510 L490,580 L420,605 L375,565 Z"/>
    <text x="435" y="545" class="district-label district-label-small">Mahabubabad</text>
    
    <!-- Bhadradri Kothagudem - Southeast corner -->
    <path id="map-kothagudem" class="district-path" data-district="kothagudem"
          d="M555,440 L650,415 L700,480 L690,590 L610,640 L530,605 L495,545 L510,480 Z"/>
    <text x="595" y="535" class="district-label district-label-small">Kothagudem</text>
    
    <!-- Khammam -->
    <path id="map-khammam" class="district-path" data-district="khammam"
          d="M420,605 L490,580 L560,625 L545,705 L465,725 L400,680 Z"/>
    <text x="480" y="660" class="district-label">Khammam</text>
    
    <!-- ============ CENTRAL-WEST REGION ============ -->
    
    <!-- Sangareddy -->
    <path id="map-sangareddy" class="district-path" data-district="sangareddy"
          d="M30,295 L80,285 L130,315 L125,380 L70,405 L25,365 Z"/>
    <text x="75" y="350" class="district-label">Sangareddy</text>
    
    <!-- Medak -->
    <path id="map-medak" class="district-path" data-district="medak"
          d="M125,320 L185,300 L225,340 L215,400 L160,420 L125,380 Z"/>
    <text x="170" y="370" class="district-label">Medak</text>
    
    <!-- Siddipet -->
    <path id="map-siddipet" class="district-path" data-district="siddipet"
          d="M230,345 L280,375 L315,445 L290,505 L230,520 L195,470 L200,400 Z"/>
    <text x="255" y="445" class="district-label">Siddipet</text>
    
    <!-- ============ GREATER HYDERABAD REGION ============ -->
    
    <!-- Medchal-Malkajgiri -->
    <path id="map-medchal" class="district-path" data-district="medchal"
          d="M160,420 L215,400 L255,445 L245,505 L190,525 L150,485 Z"/>
    <text x="200" y="470" class="district-label district-label-small">Medchal</text>
    
    <!-- Hyderabad - Central -->
    <path id="map-hyderabad" class="district-path" data-district="hyderabad"
          d="M135,495 L190,480 L225,525 L215,575 L165,590 L130,545 Z"/>
    <text x="175" y="540" class="district-label">Hyderabad</text>
    
    <!-- Ranga Reddy -->
    <path id="map-rangareddy" class="district-path" data-district="rangareddy"
          d="M65,505 L135,495 L165,590 L145,660 L75,680 L30,620 Z"/>
    <text x="100" y="590" class="district-label district-label-small">Rangareddy</text>
    
    <!-- Vikarabad - West -->
    <path id="map-vikarabad" class="district-path" data-district="vikarabad"
          d="M5,420 L70,440 L70,520 L35,575 L-10,550 L-20,470 Z"/>
    <text x="30" y="495" class="district-label">Vikarabad</text>
    
    <!-- ============ SOUTH-CENTRAL REGION ============ -->
    
    <!-- Yadadri Bhuvanagiri -->
    <path id="map-yadadri" class="district-path" data-district="yadadri"
          d="M245,505 L340,530 L395,595 L370,665 L290,685 L245,620 Z"/>
    <text x="320" y="605" class="district-label district-label-small">Yadadri</text>
    
    <!-- Suryapet -->
    <path id="map-suryapet" class="district-path" data-district="suryapet"
          d="M370,665 L420,645 L480,695 L465,765 L395,785 L355,735 Z"/>
    <text x="420" y="720" class="district-label">Suryapet</text>
    
    <!-- Nalgonda -->
    <path id="map-nalgonda" class="district-path" data-district="nalgonda"
          d="M245,620 L370,665 L395,755 L365,810 L270,820 L215,755 Z"/>
    <text x="305" y="730" class="district-label">Nalgonda</text>
    
    <!-- ============ SOUTHERN REGION ============ -->
    
    <!-- Mahbubnagar -->
    <path id="map-mahbubnagar" class="district-path" data-district="mahbubnagar"
          d="M75,680 L145,660 L200,715 L185,785 L115,805 L60,755 Z"/>
    <text x="130" y="740" class="district-label district-label-small">Mahbubnagar</text>
    
    <!-- Nagarkurnool -->
    <path id="map-nagarkurnool" class="district-path" data-district="nagarkurnool"
          d="M165,805 L230,785 L290,825 L270,885 L185,900 L140,855 Z"/>
    <text x="215" y="850" class="district-label district-label-small">Nagarkurnool</text>
    
    <!-- Wanaparthy -->
    <path id="map-wanaparthy" class="district-path" data-district="wanaparthy"
          d="M60,755 L115,805 L100,870 L45,885 L10,835 L25,775 Z"/>
    <text x="65" y="825" class="district-label district-label-small">Wanaparthy</text>
    
    <!-- Jogulamba Gadwal - South -->
    <path id="map-gadwal" class="district-path" data-district="gadwal"
          d="M45,885 L100,870 L145,915 L115,960 L50,955 L25,915 Z"/>
    <text x="85" y="920" class="district-label district-label-small">Gadwal</text>
    
    <!-- Narayanpet - Southwest corner -->
    <path id="map-narayanpet" class="district-path" data-district="narayanpet"
          d="M-10,835 L45,885 L40,955 L-10,975 L-35,920 L-25,860 Z"/>
    <text x="10" y="905" class="district-label district-label-small">Narayanpet</text>
    
    <!-- State boundary outline -->
    <path d="M70,135 L140,50 L320,45 L430,145 L660,280 L700,480 L610,640 L465,725 L270,820 L140,855 L-35,920 L-20,470 L25,365 L55,190 Z" 
          fill="none" stroke="#1b5e20" stroke-width="3" stroke-linejoin="round"/>
    
    <!-- Title -->
    <text x="350" y="50" class="map-title" text-anchor="middle" style="font-size:16px; font-weight:bold; fill:#1b5e20;">తెలంగాణ / TELANGANA</text>
    <text x="350" y="70" text-anchor="middle" style="font-size:11px; fill:#2e7d32;">(33 Districts)</text>
</svg>
`;

// Complete district data for all 33 Telangana districts with accurate coordinates
const telanganaMapDistricts = {
    // Northern Districts
    adilabad: { id: 'adilabad', name: 'Adilabad', emoji: '🏔️', lat: 19.6641, lng: 78.5320, area: 4153 },
    asifabad: { id: 'asifabad', name: 'Komaram Bheem Asifabad', emoji: '🌲', lat: 19.3667, lng: 79.2833, area: 4878 },
    mancherial: { id: 'mancherial', name: 'Mancherial', emoji: '🏭', lat: 18.8681, lng: 79.4500, area: 4016 },
    nirmal: { id: 'nirmal', name: 'Nirmal', emoji: '🌾', lat: 19.0967, lng: 78.3422, area: 3845 },
    nizamabad: { id: 'nizamabad', name: 'Nizamabad', emoji: '🌿', lat: 18.6725, lng: 78.0941, area: 4288 },
    kamareddy: { id: 'kamareddy', name: 'Kamareddy', emoji: '🌻', lat: 18.3200, lng: 78.3300, area: 3652 },
    
    // North-Central Districts
    jagtial: { id: 'jagtial', name: 'Jagtial', emoji: '🌽', lat: 18.7917, lng: 78.9083, area: 2419 },
    peddapalli: { id: 'peddapalli', name: 'Peddapalli', emoji: '⛏️', lat: 18.6167, lng: 79.3833, area: 2236 },
    karimnagar: { id: 'karimnagar', name: 'Karimnagar', emoji: '🏛️', lat: 18.4386, lng: 79.1288, area: 2128 },
    sircilla: { id: 'sircilla', name: 'Rajanna Sircilla', emoji: '👔', lat: 18.3833, lng: 78.8167, area: 2019 },
    
    // Eastern Districts
    bhupalapally: { id: 'bhupalapally', name: 'Jayashankar Bhupalpally', emoji: '🌳', lat: 18.4333, lng: 79.9500, area: 2293 },
    mulugu: { id: 'mulugu', name: 'Mulugu', emoji: '🦚', lat: 18.1833, lng: 80.0000, area: 3881 },
    hanumakonda: { id: 'hanumakonda', name: 'Hanumakonda', emoji: '🏯', lat: 17.9784, lng: 79.5941, area: 1309 },
    warangal: { id: 'warangal', name: 'Warangal', emoji: '🏰', lat: 18.0000, lng: 79.5833, area: 2175 },
    jangaon: { id: 'jangaon', name: 'Jangaon', emoji: '🎋', lat: 17.7167, lng: 79.1500, area: 2188 },
    mahabubabad: { id: 'mahabubabad', name: 'Mahabubabad', emoji: '🌴', lat: 17.5833, lng: 80.0000, area: 2877 },
    kothagudem: { id: 'kothagudem', name: 'Bhadradri Kothagudem', emoji: '⛪', lat: 17.5500, lng: 80.6167, area: 7483 },
    khammam: { id: 'khammam', name: 'Khammam', emoji: '🌳', lat: 17.2473, lng: 80.1514, area: 4361 },
    
    // Central-West Districts
    sangareddy: { id: 'sangareddy', name: 'Sangareddy', emoji: '🏭', lat: 17.6166, lng: 78.0866, area: 4403 },
    medak: { id: 'medak', name: 'Medak', emoji: '⛪', lat: 18.0467, lng: 78.2600, area: 2786 },
    siddipet: { id: 'siddipet', name: 'Siddipet', emoji: '🌸', lat: 18.1000, lng: 78.8500, area: 3632 },
    
    // Greater Hyderabad Area
    medchal: { id: 'medchal', name: 'Medchal-Malkajgiri', emoji: '🏢', lat: 17.5294, lng: 78.5278, area: 1084 },
    hyderabad: { id: 'hyderabad', name: 'Hyderabad', emoji: '🏙️', lat: 17.3850, lng: 78.4867, area: 217 },
    rangareddy: { id: 'rangareddy', name: 'Ranga Reddy', emoji: '🌆', lat: 17.2000, lng: 78.1833, area: 5031 },
    vikarabad: { id: 'vikarabad', name: 'Vikarabad', emoji: '🏞️', lat: 17.3333, lng: 77.9000, area: 3386 },
    
    // South-Central Districts
    yadadri: { id: 'yadadri', name: 'Yadadri Bhuvanagiri', emoji: '🛕', lat: 17.5833, lng: 78.9500, area: 3092 },
    suryapet: { id: 'suryapet', name: 'Suryapet', emoji: '☀️', lat: 17.1333, lng: 79.6167, area: 3607 },
    nalgonda: { id: 'nalgonda', name: 'Nalgonda', emoji: '💎', lat: 17.0575, lng: 79.2748, area: 7122 },
    
    // Southern Districts
    mahbubnagar: { id: 'mahbubnagar', name: 'Mahbubnagar', emoji: '🏛️', lat: 16.7488, lng: 77.9853, area: 2738 },
    nagarkurnool: { id: 'nagarkurnool', name: 'Nagarkurnool', emoji: '🦅', lat: 16.4833, lng: 78.3000, area: 6545 },
    wanaparthy: { id: 'wanaparthy', name: 'Wanaparthy', emoji: '🌺', lat: 16.3622, lng: 78.0622, area: 2152 },
    gadwal: { id: 'gadwal', name: 'Jogulamba Gadwal', emoji: '🛕', lat: 16.2333, lng: 77.8000, area: 2928 },
    narayanpet: { id: 'narayanpet', name: 'Narayanpet', emoji: '🌿', lat: 16.7333, lng: 77.5000, area: 2336 }
};

// Translation mapping for all 33 map districts in 8 languages
const telanganaMapDistrictTranslations = {
    en: {
        adilabad: "Adilabad", asifabad: "K.B. Asifabad", mancherial: "Mancherial",
        nirmal: "Nirmal", nizamabad: "Nizamabad", kamareddy: "Kamareddy",
        jagtial: "Jagtial", peddapalli: "Peddapalli", karimnagar: "Karimnagar",
        sircilla: "R. Sircilla", bhupalapally: "Bhupalpally", mulugu: "Mulugu",
        hanumakonda: "Hanumakonda", warangal: "Warangal", jangaon: "Jangaon", 
        mahabubabad: "Mahabubabad", kothagudem: "B. Kothagudem", khammam: "Khammam", 
        sangareddy: "Sangareddy", medak: "Medak", siddipet: "Siddipet", 
        medchal: "Medchal", hyderabad: "Hyderabad", rangareddy: "Rangareddy", 
        vikarabad: "Vikarabad", yadadri: "Yadadri", suryapet: "Suryapet", 
        nalgonda: "Nalgonda", mahbubnagar: "Mahbubnagar", nagarkurnool: "Nagarkurnool", 
        wanaparthy: "Wanaparthy", gadwal: "Gadwal", narayanpet: "Narayanpet"
    },
    hi: {
        adilabad: "आदिलाबाद", asifabad: "आसिफाबाद", mancherial: "मंचिर्याल",
        nirmal: "निर्मल", nizamabad: "निज़ामाबाद", kamareddy: "कामारेड्डी",
        jagtial: "जगतियाल", peddapalli: "पेद्दापल्ली", karimnagar: "करीमनगर",
        sircilla: "सिरसिला", bhupalapally: "भूपालपल्ली", mulugu: "मुलुगु",
        hanumakonda: "हनुमकोंडा", warangal: "वारंगल", jangaon: "जंगांव", 
        mahabubabad: "महबूबाबाद", kothagudem: "कोठागुडेम", khammam: "खम्मम", 
        sangareddy: "संगारेड्डी", medak: "मेडक", siddipet: "सिद्दीपेट", 
        medchal: "मेडचल", hyderabad: "हैदराबाद", rangareddy: "रंगारेड्डी", 
        vikarabad: "विकाराबाद", yadadri: "यादाद्री", suryapet: "सूर्यापेट", 
        nalgonda: "नलगोंडा", mahbubnagar: "महबूबनगर", nagarkurnool: "नागरकुर्नूल", 
        wanaparthy: "वानापर्ती", gadwal: "गडवाल", narayanpet: "नारायणपेट"
    },
    te: {
        adilabad: "ఆదిలాబాద్", asifabad: "ఆసిఫాబాద్", mancherial: "మంచిర్యాల",
        nirmal: "నిర్మల్", nizamabad: "నిజామాబాద్", kamareddy: "కామారెడ్డి",
        jagtial: "జగిత్యాల", peddapalli: "పెద్దపల్లి", karimnagar: "కరీంనగర్",
        sircilla: "సిరిసిల్ల", bhupalapally: "భూపాలపల్లి", mulugu: "ములుగు",
        hanumakonda: "హనుమకొండ", warangal: "వరంగల్", jangaon: "జనగాం", 
        mahabubabad: "మహబూబాబాద్", kothagudem: "కొత్తగూడెం", khammam: "ఖమ్మం", 
        sangareddy: "సంగారెడ్డి", medak: "మెదక్", siddipet: "సిద్దిపేట", 
        medchal: "మేడ్చల్", hyderabad: "హైదరాబాద్", rangareddy: "రంగారెడ్డి", 
        vikarabad: "వికారాబాద్", yadadri: "యాదాద్రి", suryapet: "సూర్యాపేట", 
        nalgonda: "నల్గొండ", mahbubnagar: "మహబూబ్‌నగర్", nagarkurnool: "నాగర్‌కర్నూల్", 
        wanaparthy: "వనపర్తి", gadwal: "గద్వాల", narayanpet: "నారాయణపేట"
    },
    ta: {
        adilabad: "ஆதிலாபாத்", asifabad: "ஆசிஃபாபாத்", mancherial: "மஞ்சிரியால்",
        nirmal: "நிர்மல்", nizamabad: "நிஜாமாபாத்", kamareddy: "காமரெட்டி",
        jagtial: "ஜக்தியால்", peddapalli: "பெத்தபள்ளி", karimnagar: "கரீம்நகர்",
        sircilla: "சிர்சில்லா", bhupalapally: "பூபாலபள்ளி", mulugu: "முலுகு",
        hanumakonda: "ஹனுமகொண்டா", warangal: "வாரங்கல்", jangaon: "ஜங்காவ்ன்", 
        mahabubabad: "மஹபூபாபாத்", kothagudem: "கோத்தகுடெம்", khammam: "கம்மம்", 
        sangareddy: "சங்காரெட்டி", medak: "மேடக்", siddipet: "சித்திபேட்", 
        medchal: "மெட்சல்", hyderabad: "ஹைதராபாத்", rangareddy: "ரங்காரெட்டி", 
        vikarabad: "விகாராபாத்", yadadri: "யாததிரி", suryapet: "சூர்யாபேட்", 
        nalgonda: "நல்கொண்டா", mahbubnagar: "மகபூப்நகர்", nagarkurnool: "நாகர்கர்னூல்", 
        wanaparthy: "வனபர்தி", gadwal: "கட்வால்", narayanpet: "நாராயணபேட்"
    },
    kn: {
        adilabad: "ಆದಿಲಾಬಾದ್", asifabad: "ಆಸಿಫಾಬಾದ್", mancherial: "ಮಂಚಿರ್ಯಾಲ್",
        nirmal: "ನಿರ್ಮಲ್", nizamabad: "ನಿಜಾಮಾಬಾದ್", kamareddy: "ಕಾಮಾರೆಡ್ಡಿ",
        jagtial: "ಜಗಿತ್ಯಾಲ್", peddapalli: "ಪೆದ್ದಪಲ್ಲಿ", karimnagar: "ಕರೀಂನಗರ್",
        sircilla: "ಸಿರ್ಸಿಲ್ಲ", bhupalapally: "ಭೂಪಾಲಪಲ್ಲಿ", mulugu: "ಮುಲುಗು",
        hanumakonda: "ಹನುಮಕೊಂಡ", warangal: "ವಾರಂಗಲ್", jangaon: "ಜಂಗಾವ್ನ್", 
        mahabubabad: "ಮಹಬೂಬಾಬಾದ್", kothagudem: "ಕೊತ್ತಗುಡೆಂ", khammam: "ಖಮ್ಮಂ", 
        sangareddy: "ಸಂಗಾರೆಡ್ಡಿ", medak: "ಮೆದಕ್", siddipet: "ಸಿದ್ದಿಪೇಟ್", 
        medchal: "ಮೇಡ್ಚಲ್", hyderabad: "ಹೈದರಾಬಾದ್", rangareddy: "ರಂಗಾರೆಡ್ಡಿ", 
        vikarabad: "ವಿಕಾರಾಬಾದ್", yadadri: "ಯಾದಾದ್ರಿ", suryapet: "ಸೂರ್ಯಾಪೇಟ್", 
        nalgonda: "ನಲ್ಗೊಂಡ", mahbubnagar: "ಮಹಬೂಬ್‌ನಗರ", nagarkurnool: "ನಾಗರ್‌ಕರ್ನೂಲ್", 
        wanaparthy: "ವನಪರ್ತಿ", gadwal: "ಗದ್ವಾಲ್", narayanpet: "ನಾರಾಯಣಪೇಟ್"
    },
    mr: {
        adilabad: "आदिलाबाद", asifabad: "आसिफाबाद", mancherial: "मंचिर्याल",
        nirmal: "निर्मल", nizamabad: "निजामाबाद", kamareddy: "कामारेड्डी",
        jagtial: "जगतियाल", peddapalli: "पेद्दापल्ली", karimnagar: "करीमनगर",
        sircilla: "सिरसिला", bhupalapally: "भूपालपल्ली", mulugu: "मुलुगु",
        hanumakonda: "हनुमकोंडा", warangal: "वारंगळ", jangaon: "जंगांव", 
        mahabubabad: "महबूबाबाद", kothagudem: "कोठागुडेम", khammam: "खम्मम", 
        sangareddy: "संगारेड्डी", medak: "मेडक", siddipet: "सिद्दीपेट", 
        medchal: "मेडचल", hyderabad: "हैदराबाद", rangareddy: "रंगारेड्डी", 
        vikarabad: "विकाराबाद", yadadri: "यादाद्री", suryapet: "सूर्यापेट", 
        nalgonda: "नळगोंडा", mahbubnagar: "महबूबनगर", nagarkurnool: "नागरकुर्नूल", 
        wanaparthy: "वनापर्ती", gadwal: "गडवाल", narayanpet: "नारायणपेट"
    },
    pa: {
        adilabad: "ਆਦਿਲਾਬਾਦ", asifabad: "ਆਸਿਫਾਬਾਦ", mancherial: "ਮੰਚਿਰਿਆਲ",
        nirmal: "ਨਿਰਮਲ", nizamabad: "ਨਿਜ਼ਾਮਾਬਾਦ", kamareddy: "ਕਾਮਾਰੇੱਡੀ",
        jagtial: "ਜਗਤਿਆਲ", peddapalli: "ਪੇਦਾਪੱਲੀ", karimnagar: "ਕਰੀਮਨਗਰ",
        sircilla: "ਸਿਰਸਿੱਲਾ", bhupalapally: "ਭੂਪਾਲਪੱਲੀ", mulugu: "ਮੁਲੁਗੂ",
        hanumakonda: "ਹਨੁਮਕੋਂਡਾ", warangal: "ਵਾਰੰਗਲ", jangaon: "ਜੰਗਾਉਂ", 
        mahabubabad: "ਮਹਬੂਬਾਬਾਦ", kothagudem: "ਕੋਠਾਗੁਡੇਮ", khammam: "ਖਮਮ", 
        sangareddy: "ਸੰਗਾਰੇੱਡੀ", medak: "ਮੇਡਕ", siddipet: "ਸਿੱਦੀਪੇਟ", 
        medchal: "ਮੇਡਚਲ", hyderabad: "ਹੈਦਰਾਬਾਦ", rangareddy: "ਰੰਗਾਰੇੱਡੀ", 
        vikarabad: "ਵਿਕਾਰਾਬਾਦ", yadadri: "ਯਾਦਾਦਰੀ", suryapet: "ਸੂਰਯਾਪੇਟ", 
        nalgonda: "ਨਲਗੋਂਡਾ", mahbubnagar: "ਮਹਬੂਬਨਗਰ", nagarkurnool: "ਨਾਗਰਕੁਰਨੂਲ", 
        wanaparthy: "ਵਨਾਪਾਰਥੀ", gadwal: "ਗਡਵਾਲ", narayanpet: "ਨਾਰਾਇਣਪੇਟ"
    },
    bn: {
        adilabad: "আদিলাবাদ", asifabad: "আসিফাবাদ", mancherial: "মাঞ্চিরিয়াল",
        nirmal: "নির্মল", nizamabad: "নিজামাবাদ", kamareddy: "কামারেড্ডি",
        jagtial: "জগতিয়াল", peddapalli: "পেদ্দাপল্লি", karimnagar: "করিমনগর",
        sircilla: "সিরসিল্লা", bhupalapally: "ভূপালপল্লি", mulugu: "মুলুগু",
        hanumakonda: "হনুমকোন্ডা", warangal: "ওয়ারাঙ্গল", jangaon: "জংগাওঁ", 
        mahabubabad: "মাহবুবাবাদ", kothagudem: "কোথাগুডেম", khammam: "খাম্মাম", 
        sangareddy: "সাঙ্গারেড্ডি", medak: "মেডাক", siddipet: "সিদ্দিপেট", 
        medchal: "মেডচল", hyderabad: "হায়দরাবাদ", rangareddy: "রাঙ্গারেড্ডি", 
        vikarabad: "বিকারাবাদ", yadadri: "য়াদাদ্রি", suryapet: "সূর্যাপেট", 
        nalgonda: "নালগোন্ডা", mahbubnagar: "মাহবুবনগর", nagarkurnool: "নাগরকুর্নুল", 
        wanaparthy: "বনপর্তি", gadwal: "গাদওয়াল", narayanpet: "নারায়ণপেট"
    }
};

// Get translated district name for map
function getMapDistrictName(districtId) {
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    if (telanganaMapDistrictTranslations[lang] && telanganaMapDistrictTranslations[lang][districtId]) {
        return telanganaMapDistrictTranslations[lang][districtId];
    }
    return telanganaMapDistrictTranslations['en'][districtId] || districtId;
}

// City name translations for major cities in 8 languages
const telanganaCityTranslations = {
    // All Cities - Telugu (Complete)
    te: {
        // Adilabad District
        'Adilabad': 'ఆదిలాబాద్', 'Utnoor': 'ఊట్నూర్', 'Boath': 'బోత్', 'Jainath': 'జైనత్',
        'Bela': 'బేలా', 'Tamsi': 'తమ్సి', 'Ichoda': 'ఇచ్చోడ',
        // Asifabad District
        'Asifabad': 'ఆసిఫాబాద్', 'Kagaznagar': 'కాగజ్‌నగర్', 'Sirpur': 'సిర్పూర్',
        'Kerameri': 'కెరామెరి', 'Wankidi': 'వాంకిడి', 'Dahegaon': 'దహేగాం',
        // Mancherial District
        'Mancherial': 'మంచిర్యాల', 'Bellampalli': 'బెల్లంపల్లి', 'Kyathampalli': 'క్యాతంపల్లి',
        'Naspur': 'నాస్పూర్', 'Luxettipet': 'లక్సెట్టిపేట్', 'Chennur': 'చెన్నూర్',
        // Nirmal District
        'Nirmal': 'నిర్మల్', 'Bhainsa': 'భైంసా', 'Mudhole': 'ముధోల్',
        'Khanapur': 'ఖానాపూర్', 'Laxmanchanda': 'లక్ష్మణచంద', 'Sarangapur': 'సారంగాపూర్',
        // Nizamabad District
        'Nizamabad': 'నిజామాబాద్', 'Bodhan': 'బోధన్', 'Armoor': 'ఆర్మూర్',
        'Bichkunda': 'బిచ్కుండా', 'Balkonda': 'బాల్కొండ', 'Varni': 'వర్ని', 'Yellareddy': 'ఎల్లారెడ్డి',
        // Kamareddy District
        'Kamareddy': 'కామారెడ్డి', 'Banswada': 'బన్స్వాడా', 'Domakonda': 'దోమకొండ',
        'Nizamsagar': 'నిజామ్‌సాగర్', 'Sadasivanagar': 'సదాశివనగర్',
        // Jagtial District
        'Jagtial': 'జగిత్యాల', 'Metpally': 'మెట్‌పల్లి', 'Korutla': 'కొరట్ల',
        'Raikal': 'రాయికల్', 'Dharmapuri': 'ధర్మపురి', 'Gollapalli': 'గొల్లపల్లి',
        // Peddapalli District
        'Peddapalli': 'పెద్దపల్లి', 'Ramagundam': 'రామగుండం', 'Godavarikhani': 'గోదావరిఖని',
        'Sultanabad': 'సుల్తానాబాద్', 'Manthani': 'మంథని', 'Dharmaram': 'ధర్మారం',
        // Karimnagar District
        'Karimnagar': 'కరీంనగర్', 'Huzurabad': 'హుజూరాబాద్', 'Jammikunta': 'జమ్మికుంట',
        'Choppadandi': 'చొప్పదండి', 'Kothapalli': 'కొత్తపల్లి',
        // Sircilla District
        'Sircilla': 'సిరిసిల్ల', 'Vemulawada': 'వేములవాడ', 'Yellareddypet': 'ఎల్లారెడ్డిపేట్',
        'Boinpally': 'బోయిన్‌పల్లి', 'Gambhiraopet': 'గంభీరావుపేట్',
        // Bhupalpally District
        'Bhupalpally': 'భూపాలపల్లి', 'Mahadevpur': 'మహదేవ్‌పూర్', 'Kataram': 'కాటారం',
        'Tekumatla': 'తెకుమట్ల', 'Chityal': 'చిత్యాల',
        // Mulugu District
        'Mulugu': 'ములుగు', 'Venkatapuram': 'వెంకటాపురం', 'Eturunagaram': 'ఏటూరునాగారం',
        'Tadvai': 'తాడ్వాయి', 'Mangapet': 'మంగపేట్',
        // Hanumakonda District
        'Hanumakonda': 'హనుమకొండ', 'Hanamkonda': 'హనంకొండ', 'Kazipet': 'కాజీపేట్',
        'Subedari': 'సుబేదారి', 'Hasanparthy': 'హసన్‌పర్తి',
        // Warangal District
        'Warangal': 'వరంగల్', 'Narsampet': 'నర్సంపేట్', 'Parkal': 'పార్కాల్',
        'Wardhannapet': 'వర్ధన్నపేట్', 'Atmakur': 'ఆత్మకూర్', 'Nekkonda': 'నెక్కొండ',
        // Jangaon District
        'Jangaon': 'జనగాం', 'Station Ghanpur': 'స్టేషన్ ఘన్‌పూర్', 'Palakurthy': 'పాలకుర్తి',
        'Lingalaghanpur': 'లింగాలఘన్‌పూర్', 'Raghunathpalle': 'రఘునాథపల్లె',
        // Mahabubabad District
        'Mahabubabad': 'మహబూబాబాద్', 'Thorrur': 'తొర్రూర్', 'Dornakal': 'దొర్నకల్',
        'Kuravi': 'కురవి', 'Kesamudram': 'కేసముద్రం', 'Nellikudur': 'నెల్లికుదురు',
        // Kothagudem District
        'Kothagudem': 'కొత్తగూడెం', 'Bhadrachalam': 'భద్రాచలం', 'Yellandu': 'ఎల్లందు',
        'Manuguru': 'మానుగూరు', 'Palvancha': 'పాల్వంచ', 'Sathupalli': 'సత్తుపల్లి', 'Aswapuram': 'అశ్వాపురం',
        // Khammam District
        'Khammam': 'ఖమ్మం', 'Madhira': 'మాధిర', 'Wyra': 'వైరా',
        'Kallur': 'కల్లూరు', 'Enkoor': 'ఎంకూరు', 'Kusumanchi': 'కూసుమంచి',
        // Sangareddy District
        'Sangareddy': 'సంగారెడ్డి', 'Zaheerabad': 'జహీరాబాద్', 'Narayankhed': 'నారాయణఖేడ్',
        'Andole': 'అందోల్', 'Jogipet': 'జోగిపేట్', 'Patancheru': 'పటాన్‌చెరు', 'Sadasivpet': 'సదాశివపేట్',
        // Medak District
        'Medak': 'మెదక్', 'Narsapur': 'నర్సాపూర్', 'Ramayampet': 'రామాయంపేట్',
        'Toopran': 'తూప్రాన్', 'Tekmal': 'తేక్మల్', 'Kowdipally': 'కౌడిపల్లి',
        // Siddipet District
        'Siddipet': 'సిద్దిపేట', 'Gajwel': 'గజ్వేల్', 'Dubbak': 'దుబ్బాక్',
        'Husnabad': 'హుస్నాబాద్', 'Cheriyal': 'చేర్యాల్', 'Thoguta': 'తొగుట',
        // Medchal District
        'Medchal': 'మేడ్చల్', 'Malkajgiri': 'మల్కాజిగిరి', 'Kompally': 'కొంపల్లి',
        'Alwal': 'అల్వాల్', 'Quthbullapur': 'కుత్బుల్లాపూర్', 'Shamirpet': 'షామీర్‌పేట్', 'Keesara': 'కీసర',
        // Hyderabad District
        'Hyderabad': 'హైదరాబాద్', 'Secunderabad': 'సికింద్రాబాద్', 'Charminar': 'చార్మినార్',
        'Begumpet': 'బేగంపేట్', 'Ameerpet': 'అమీర్‌పేట్', 'Kukatpally': 'కూకట్‌పల్లి',
        'Madhapur': 'మాధాపూర్', 'Hitech City': 'హైటెక్ సిటీ', 'Gachibowli': 'గచ్చిబౌలి',
        'Jubilee Hills': 'జూబ్లీహిల్స్', 'Banjara Hills': 'బంజారాహిల్స్',
        'Dilsukhnagar': 'దిల్‌సుఖ్‌నగర్', 'LB Nagar': 'ఎల్బీ నగర్',
        // Rangareddy District
        'Rangareddy': 'రంగారెడ్డి', 'Shamshabad': 'షంషాబాద్', 'Chevella': 'చేవెళ్ల',
        'Ibrahimpatnam': 'ఇబ్రహీంపట్నం', 'Maheshwaram': 'మహేశ్వరం', 'Kandukur': 'కందుకూరు', 'Shadnagar': 'షాద్‌నగర్',
        // Vikarabad District
        'Vikarabad': 'వికారాబాద్', 'Tandur': 'తాండూర్', 'Parigi': 'పరిగి',
        'Kodangal': 'కోడంగల్', 'Basheerabad': 'బషీరాబాద్', 'Peddemul': 'పెద్దేముల్',
        // Yadadri District
        'Bhuvanagiri': 'భువనగిరి', 'Aler': 'ఆలేర్', 'Bhongir': 'భోంగిర్',
        'Yadadri': 'యాదాద్రి', 'Choutuppal': 'చౌటుప్పల్', 'Ramannapet': 'రామన్నపేట్',
        // Suryapet District
        'Suryapet': 'సూర్యాపేట', 'Kodad': 'కోడాడ', 'Huzurnagar': 'హుజూర్‌నగర్',
        'Tungaturthi': 'తుంగతుర్తి', 'Nereducharla': 'నేరేడుచర్ల', 'Jajireddygudem': 'జాజిరెడ్డిగూడెం',
        // Nalgonda District
        'Nalgonda': 'నల్గొండ', 'Miryalaguda': 'మిర్యాలగూడ', 'Devarakonda': 'దేవరకొండ',
        'Nakrekal': 'నక్రేకల్', 'Tipparthy': 'తిప్పర్తి', 'Chandur': 'చందూర్',
        // Mahbubnagar District
        'Mahbubnagar': 'మహబూబ్‌నగర్', 'Jadcherla': 'జడ్చర్ల', 'Devarkadra': 'దేవరకద్ర',
        'Addakal': 'అడ్డకల్', 'Koilkonda': 'కోయిల్‌కొండ', 'Balanagar': 'బాలానగర్',
        // Nagarkurnool District
        'Nagarkurnool': 'నాగర్‌కర్నూల్', 'Kollapur': 'కొల్లాపూర్', 'Kalwakurthy': 'కల్వకుర్తి',
        'Achampet': 'అచ్చంపేట్', 'Amrabad': 'అమ్రాబాద్', 'Lingal': 'లింగాల్',
        // Wanaparthy District
        'Wanaparthy': 'వనపర్తి', 'Kothakota': 'కొత్తకోట', 'Gopalpet': 'గోపాల్‌పేట్',
        'Pebbair': 'పెబ్బేర్',
        // Gadwal District
        'Gadwal': 'గద్వాల', 'Alampur': 'ఆలంపూర్', 'Ieeja': 'ఈజ',
        'Maldakal': 'మల్దకల్', 'Undavalli': 'ఉండవల్లి',
        // Narayanpet District
        'Narayanpet': 'నారాయణపేట', 'Makthal': 'మక్తల్', 'Kosgi': 'కోస్గి',
        'Marikal': 'మారికల్', 'Narva': 'నర్వ'
    },
    // All Cities - Hindi (Complete)
    hi: {
        // Adilabad District
        'Adilabad': 'आदिलाबाद', 'Utnoor': 'उत्नूर', 'Boath': 'बोथ', 'Jainath': 'जैनथ',
        'Bela': 'बेला', 'Tamsi': 'तमसी', 'Ichoda': 'इचोडा',
        // Asifabad District
        'Asifabad': 'आसिफाबाद', 'Kagaznagar': 'काग़ज़नगर', 'Sirpur': 'सिरपुर',
        'Kerameri': 'केरामेरी', 'Wankidi': 'वांकिडी', 'Dahegaon': 'दहेगांव',
        // Mancherial District
        'Mancherial': 'मंचिर्याल', 'Bellampalli': 'बेल्लमपल्ली', 'Kyathampalli': 'क्याथमपल्ली',
        'Naspur': 'नासपुर', 'Luxettipet': 'लक्सेटीपेट', 'Chennur': 'चेन्नूर',
        // Nirmal District
        'Nirmal': 'निर्मल', 'Bhainsa': 'भैंसा', 'Mudhole': 'मुधोल',
        'Khanapur': 'खानापुर', 'Laxmanchanda': 'लक्ष्मणचंदा', 'Sarangapur': 'सारंगापुर',
        // Nizamabad District
        'Nizamabad': 'निज़ामाबाद', 'Bodhan': 'बोधन', 'Armoor': 'आर्मूर',
        'Bichkunda': 'बिचकुंडा', 'Balkonda': 'बालकोंडा', 'Varni': 'वर्नी', 'Yellareddy': 'येल्लारेड्डी',
        // Kamareddy District
        'Kamareddy': 'कामारेड्डी', 'Banswada': 'बनस्वाड़ा', 'Domakonda': 'डोमाकोंडा',
        'Nizamsagar': 'निज़ामसागर', 'Sadasivanagar': 'सदाशिवनगर',
        // Jagtial District
        'Jagtial': 'जगतियाल', 'Metpally': 'मेटपल्ली', 'Korutla': 'कोरुटला',
        'Raikal': 'रायकल', 'Dharmapuri': 'धर्मपुरी', 'Gollapalli': 'गोल्लापल्ली',
        // Peddapalli District
        'Peddapalli': 'पेद्दापल्ली', 'Ramagundam': 'रामागुंडम', 'Godavarikhani': 'गोदावरीखनी',
        'Sultanabad': 'सुल्तानाबाद', 'Manthani': 'मंथनी', 'Dharmaram': 'धर्माराम',
        // Karimnagar District
        'Karimnagar': 'करीमनगर', 'Huzurabad': 'हुजूराबाद', 'Jammikunta': 'जम्मीकुंटा',
        'Choppadandi': 'चोप्पदंडी', 'Kothapalli': 'कोठापल्ली',
        // Sircilla District
        'Sircilla': 'सिरसिल्ला', 'Vemulawada': 'वेमुलवाड़ा', 'Yellareddypet': 'येल्लारेड्डीपेट',
        'Boinpally': 'बोयिनपल्ली', 'Gambhiraopet': 'गंभीरावपेट',
        // Bhupalpally District
        'Bhupalpally': 'भूपालपल्ली', 'Mahadevpur': 'महादेवपुर', 'Kataram': 'कटारम',
        'Tekumatla': 'तेकुमटला', 'Chityal': 'चित्याल',
        // Mulugu District
        'Mulugu': 'मुलुगु', 'Venkatapuram': 'वेंकटापुरम', 'Eturunagaram': 'एटूरुनागरम',
        'Tadvai': 'तडवई', 'Mangapet': 'मंगापेट',
        // Hanumakonda District
        'Hanumakonda': 'हनुमकोंडा', 'Hanamkonda': 'हनमकोंडा', 'Kazipet': 'काजीपेट',
        'Subedari': 'सुबेदारी', 'Hasanparthy': 'हसनपर्थी',
        // Warangal District
        'Warangal': 'वारंगल', 'Narsampet': 'नरसमपेट', 'Parkal': 'पार्कल',
        'Wardhannapet': 'वर्धन्नापेट', 'Atmakur': 'आत्मकूर', 'Nekkonda': 'नेक्कोंडा',
        // Jangaon District
        'Jangaon': 'जंगांव', 'Station Ghanpur': 'स्टेशन घनपुर', 'Palakurthy': 'पालकुर्थी',
        'Lingalaghanpur': 'लिंगालघनपुर', 'Raghunathpalle': 'रघुनाथपल्ले',
        // Mahabubabad District
        'Mahabubabad': 'महबूबाबाद', 'Thorrur': 'थोर्रूर', 'Dornakal': 'दोर्नकल',
        'Kuravi': 'कुरावी', 'Kesamudram': 'केसमुद्रम', 'Nellikudur': 'नेल्लीकुडुर',
        // Kothagudem District
        'Kothagudem': 'कोठागुडेम', 'Bhadrachalam': 'भद्राचलम', 'Yellandu': 'येल्लंदू',
        'Manuguru': 'मनुगुरु', 'Palvancha': 'पालवंचा', 'Sathupalli': 'सत्तुपल्ली', 'Aswapuram': 'अश्वापुरम',
        // Khammam District
        'Khammam': 'खम्मम', 'Madhira': 'माधिरा', 'Wyra': 'वायरा',
        'Kallur': 'कल्लूर', 'Enkoor': 'एनकूर', 'Kusumanchi': 'कुसुमंची',
        // Sangareddy District
        'Sangareddy': 'संगारेड्डी', 'Zaheerabad': 'ज़हीराबाद', 'Narayankhed': 'नारायणखेड़',
        'Andole': 'अंडोल', 'Jogipet': 'जोगीपेट', 'Patancheru': 'पटानचेरु', 'Sadasivpet': 'सदाशिवपेट',
        // Medak District
        'Medak': 'मेडक', 'Narsapur': 'नरसापुर', 'Ramayampet': 'रामायमपेट',
        'Toopran': 'तूपरान', 'Tekmal': 'तेकमल', 'Kowdipally': 'कौडीपल्ली',
        // Siddipet District
        'Siddipet': 'सिद्दीपेट', 'Gajwel': 'गजवेल', 'Dubbak': 'दुब्बाक',
        'Husnabad': 'हुस्नाबाद', 'Cheriyal': 'चेरियाल', 'Thoguta': 'थोगुटा',
        // Medchal District
        'Medchal': 'मेडचल', 'Malkajgiri': 'मलकाजगिरी', 'Kompally': 'कोंपल्ली',
        'Alwal': 'अलवाल', 'Quthbullapur': 'कुतबुल्लापुर', 'Shamirpet': 'शामीरपेट', 'Keesara': 'कीसरा',
        // Hyderabad District
        'Hyderabad': 'हैदराबाद', 'Secunderabad': 'सिकंदराबाद', 'Charminar': 'चारमीनार',
        'Begumpet': 'बेगमपेट', 'Ameerpet': 'अमीरपेट', 'Kukatpally': 'कुकटपल्ली',
        'Madhapur': 'माधापुर', 'Hitech City': 'हाईटेक सिटी', 'Gachibowli': 'गच्चीबोवली',
        'Jubilee Hills': 'जुबली हिल्स', 'Banjara Hills': 'बंजारा हिल्स',
        'Dilsukhnagar': 'दिलसुखनगर', 'LB Nagar': 'एलबी नगर',
        // Rangareddy District
        'Rangareddy': 'रंगारेड्डी', 'Shamshabad': 'शमशाबाद', 'Chevella': 'चेवेला',
        'Ibrahimpatnam': 'इब्राहिमपट्नम', 'Maheshwaram': 'महेश्वरम', 'Kandukur': 'कंडुकुर', 'Shadnagar': 'शादनगर',
        // Vikarabad District
        'Vikarabad': 'विकाराबाद', 'Tandur': 'तांडूर', 'Parigi': 'परीगी',
        'Kodangal': 'कोडंगल', 'Basheerabad': 'बशीराबाद', 'Peddemul': 'पेद्देमुल',
        // Yadadri District
        'Bhuvanagiri': 'भुवनगिरी', 'Aler': 'अलेर', 'Bhongir': 'भोंगीर',
        'Yadadri': 'यादाद्री', 'Choutuppal': 'चौटुप्पल', 'Ramannapet': 'रामन्नापेट',
        // Suryapet District
        'Suryapet': 'सूर्यापेट', 'Kodad': 'कोडाड', 'Huzurnagar': 'हुजूरनगर',
        'Tungaturthi': 'तुंगतुर्थी', 'Nereducharla': 'नेरेडुचर्ला', 'Jajireddygudem': 'जाजीरेड्डीगुडेम',
        // Nalgonda District
        'Nalgonda': 'नलगोंडा', 'Miryalaguda': 'मिर्यालगुडा', 'Devarakonda': 'देवरकोंडा',
        'Nakrekal': 'नक्रेकल', 'Tipparthy': 'तिप्पर्थी', 'Chandur': 'चंदूर',
        // Mahbubnagar District
        'Mahbubnagar': 'महबूबनगर', 'Jadcherla': 'जडचर्ला', 'Devarkadra': 'देवरकद्रा',
        'Addakal': 'अड्डकल', 'Koilkonda': 'कोयिलकोंडा', 'Balanagar': 'बालानगर',
        // Nagarkurnool District
        'Nagarkurnool': 'नागरकुर्नूल', 'Kollapur': 'कोल्लापूर', 'Kalwakurthy': 'कलवाकुर्थी',
        'Achampet': 'अचम्पेट', 'Amrabad': 'अमराबाद', 'Lingal': 'लिंगल',
        // Wanaparthy District
        'Wanaparthy': 'वानापर्ती', 'Kothakota': 'कोठाकोटा', 'Gopalpet': 'गोपालपेट',
        'Pebbair': 'पेब्बैर',
        // Gadwal District
        'Gadwal': 'गडवाल', 'Alampur': 'आलमपूर', 'Ieeja': 'ईजा',
        'Maldakal': 'मलदकल', 'Undavalli': 'उंडवल्ली',
        // Narayanpet District
        'Narayanpet': 'नारायणपेट', 'Makthal': 'मकतल', 'Kosgi': 'कोस्गी',
        'Marikal': 'मारीकल', 'Narva': 'नर्वा'
    }
};

// Get translated city name
function getTranslatedCityName(cityName) {
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    if (lang === 'en') return cityName;
    if (telanganaCityTranslations[lang] && telanganaCityTranslations[lang][cityName]) {
        return telanganaCityTranslations[lang][cityName];
    }
    return cityName; // Return original if no translation
}

// Render Telangana Map
function renderTelanganaMap() {
    const mapContainer = document.getElementById('telanganaMapContainer');
    if (!mapContainer) return;
    
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    const instruction = lang === 'te' ? 'మీ జిల్లాపై నొక్కండి' : 'Tap on your district';
    const selectedText = lang === 'te' ? 'ఎంపిక చేయబడింది' : 'Selected';
    
    mapContainer.innerHTML = `
        <div class="map-header">
            <span class="map-icon">🗺️</span>
            <span class="map-instruction">${instruction}</span>
            <span class="district-count">(33 Districts)</span>
        </div>
        <div class="map-wrapper">
            ${telanganaMapSVG}
        </div>
        <div id="mapTooltip" class="map-tooltip"></div>
        <div class="map-legend">
            <div class="legend-item">
                <span class="legend-color selected"></span>
                <span class="legend-text">${selectedText}</span>
            </div>
        </div>
    `;
    
    // Add click handlers to district paths
    const districtPaths = mapContainer.querySelectorAll('.district-path');
    districtPaths.forEach(path => {
        path.addEventListener('click', handleMapDistrictClick);
        path.addEventListener('mouseenter', handleMapDistrictHover);
        path.addEventListener('mouseleave', handleMapDistrictLeave);
        path.addEventListener('touchstart', handleMapDistrictClick, { passive: true });
    });
}

// Update map labels based on current language
function updateMapLabels() {
    const labels = document.querySelectorAll('.district-label');
    labels.forEach(label => {
        const districtId = label.getAttribute('data-for');
        if (districtId) {
            label.textContent = getMapDistrictName(districtId);
        }
    });
    
    // Update map title
    const mapTitle = document.querySelector('.map-title');
    if (mapTitle) {
        const titles = {
            en: 'TELANGANA',
            hi: 'तेलंगाना',
            te: 'తెలంగాణ',
            ta: 'தெலங்கானா',
            kn: 'ತೆಲಂಗಾಣ',
            mr: 'तेलंगणा',
            pa: 'ਤੇਲੰਗਾਨਾ',
            bn: 'তেলেঙ্গানা'
        };
        const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
        mapTitle.textContent = titles[lang] || titles['en'];
    }
}

// Handle district click on map
function handleMapDistrictClick(event) {
    event.preventDefault();
    const districtId = event.target.getAttribute('data-district');
    if (!districtId || !telanganaMapDistricts[districtId]) return;
    
    // Sync dropdowns and map highlight
    syncLocationDropdowns(districtId);
    
    // Get district data
    const district = telanganaMapDistricts[districtId];
    const citySelect = document.getElementById('citySelect');
    const selectedCity = (citySelect && citySelect.value) ? citySelect.value : district.name;
    
    // Update app state if it exists
    if (typeof appState !== 'undefined') {
        appState.selectedDistrict = { ...district, selectedCity: selectedCity };
        appState.selectedRegion = { id: 'telangana', name: 'Telangana' };
        appState.location = { lat: district.lat, lng: district.lng };
    }
    
    // Update location display
    const locationText = `${getMapDistrictName(districtId)}, Telangana`;
    
    if (typeof elements !== 'undefined') {
        if (elements.locationName) {
            elements.locationName.textContent = locationText;
        }
        if (elements.locationCoords) {
            elements.locationCoords.textContent = `${district.lat.toFixed(4)}°N, ${district.lng.toFixed(4)}°E`;
        }
        
        // Show confirmation
        if (elements.confirmedLocation) {
            elements.confirmedLocation.textContent = `${district.emoji} ${locationText}`;
        }
        if (elements.locationConfirmation) {
            elements.locationConfirmation.classList.remove('hidden');
        }
    }
    
    // Save to localStorage
    try {
        localStorage.setItem('farmguard_location', JSON.stringify({ lat: district.lat, lng: district.lng }));
        localStorage.setItem('farmguard_region', 'telangana');
        localStorage.setItem('farmguard_district', districtId);
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
    
    // Fetch weather if crop is selected and function exists
    if (typeof appState !== 'undefined' && appState.selectedCrop && typeof fetchWeatherAlerts === 'function') {
        fetchWeatherAlerts();
    }
    
    // Visual feedback
    showMapSelectionFeedback(event.target, district);
}

// Show selection feedback animation
function showMapSelectionFeedback(element, district) {
    // Create pulse effect
    element.style.animation = 'mapPulse 0.5s ease-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Handle hover on district
function handleMapDistrictHover(event) {
    const districtId = event.target.getAttribute('data-district');
    if (!districtId) return;
    
    // Show tooltip
    const tooltip = document.getElementById('mapTooltip');
    if (tooltip) {
        const district = telanganaMapDistricts[districtId];
        const translatedName = getMapDistrictName(districtId);
        tooltip.innerHTML = `
            <strong>${translatedName}</strong>
            <br><small>${district ? district.name : ''}</small>
            ${district && district.area ? `<br><small>Area: ${district.area} km²</small>` : ''}
        `;
        tooltip.classList.add('visible');
        
        // Position tooltip
        const rect = event.target.getBoundingClientRect();
        const mapWrapper = document.querySelector('.map-wrapper');
        if (mapWrapper) {
            const mapRect = mapWrapper.getBoundingClientRect();
            tooltip.style.left = `${rect.left - mapRect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - mapRect.top - 50}px`;
        }
    }
}

// Handle mouse leave on district
function handleMapDistrictLeave(event) {
    // Hide tooltip
    const tooltip = document.getElementById('mapTooltip');
    if (tooltip) {
        tooltip.classList.remove('visible');
    }
}

// Check if map should be shown for a region
function shouldShowMap(regionId) {
    return regionId === 'telangana';
}

// Synchronize District and City dropdowns and map selection
function syncLocationDropdowns(districtId, cityName, lat, lng) {
    const districtSelect = document.getElementById('districtSelect');
    const citySelect = document.getElementById('citySelect');
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    
    const cityPlaceholderLabels = {
        en: 'Select City/Town', hi: 'शहर/कस्बा चुनें', te: 'నగరం/పట్టణం ఎంచుకోండి',
        ta: 'நகரம்/ஊர் தேர்ந்தெடுக்கவும்', kn: 'ನಗರ/ಪಟ್ಟಣ ಆಯ್ಕೆಮಾಡಿ',
        mr: 'शहर/गाव निवडा', pa: 'ਸ਼ਹਿਰ/ਕਸਬਾ ਚੁਣੋ', bn: 'শহর/শহর নির্বাচন করুন'
    };
    const cityPlaceholder = cityPlaceholderLabels[lang] || cityPlaceholderLabels['en'];
    
    if (!districtId || !telanganaMapDistricts[districtId]) {
        if (districtSelect) {
            districtSelect.value = '';
        }
        if (citySelect) {
            citySelect.innerHTML = `<option value="">-- ${cityPlaceholder} --</option>`;
            citySelect.disabled = true;
            citySelect.value = '';
        }
        document.querySelectorAll('.district-path').forEach(p => p.classList.remove('selected'));
        return;
    }
    
    // 1. Select district in dropdown
    if (districtSelect) {
        districtSelect.value = districtId;
    }
    
    // 2. Populate cities in dropdown
    handleDistrictSelectChange({ target: { value: districtId } });
    
    // 3. Match or add city in dropdown
    if (citySelect) {
        citySelect.disabled = false;
        if (cityName) {
            const cleanTarget = cityName.trim().toLowerCase();
            let matchedOption = null;
            
            for (let i = 0; i < citySelect.options.length; i++) {
                const opt = citySelect.options[i];
                if (!opt.value) continue;
                const optVal = opt.value.trim().toLowerCase();
                const optText = opt.textContent.trim().toLowerCase();
                if (optVal === cleanTarget || optText.includes(cleanTarget) || cleanTarget.includes(optVal)) {
                    matchedOption = opt;
                    break;
                }
            }
            
            if (matchedOption) {
                citySelect.value = matchedOption.value;
            } else {
                // Dynamically insert detected town/village (Requirement 3.6)
                const newOpt = document.createElement('option');
                newOpt.value = cityName;
                newOpt.textContent = `${cityName} (GPS)`;
                if (lat !== undefined && lng !== undefined) {
                    newOpt.setAttribute('data-lat', lat);
                    newOpt.setAttribute('data-lng', lng);
                }
                citySelect.appendChild(newOpt);
                citySelect.value = cityName;
            }
        } else {
            // Default to HQ or first city if none specified
            if (citySelect.options.length > 1) {
                citySelect.selectedIndex = 1;
            }
        }
    }
    
    // 4. Update map highlight
    document.querySelectorAll('.district-path').forEach(p => p.classList.remove('selected'));
    const districtPath = document.querySelector(`[data-district="${districtId}"]`);
    if (districtPath) {
        districtPath.classList.add('selected');
    }
}

// Select district from map (for external calls)
function selectDistrictFromMap(districtId, cityName, lat, lng) {
    syncLocationDropdowns(districtId, cityName, lat, lng);
    const district = telanganaMapDistricts[districtId];
    if (district && typeof appState !== 'undefined') {
        const citySelect = document.getElementById('citySelect');
        const selectedCity = (citySelect && citySelect.value) ? citySelect.value : (cityName || district.name);
        appState.selectedDistrict = { ...district, selectedCity: selectedCity };
        appState.selectedRegion = { id: 'telangana', name: 'Telangana' };
        appState.location = { lat: lat || district.lat, lng: lng || district.lng };
    }
}

// Cities/Towns data for all 33 Telangana districts
const telanganaCities = {
    adilabad: [
        { name: 'Adilabad', lat: 19.6641, lng: 78.5320, isHQ: true },
        { name: 'Utnoor', lat: 19.3733, lng: 78.9244, isHQ: false },
        { name: 'Boath', lat: 19.4667, lng: 78.5333, isHQ: false },
        { name: 'Jainath', lat: 19.5500, lng: 78.5333, isHQ: false },
        { name: 'Bela', lat: 19.5833, lng: 78.6500, isHQ: false },
        { name: 'Tamsi', lat: 19.4167, lng: 78.4500, isHQ: false },
        { name: 'Ichoda', lat: 19.5383, lng: 78.6772, isHQ: false }
    ],
    asifabad: [
        { name: 'Asifabad', lat: 19.3667, lng: 79.2833, isHQ: true },
        { name: 'Kagaznagar', lat: 19.3333, lng: 79.4667, isHQ: false },
        { name: 'Sirpur', lat: 19.4667, lng: 79.5667, isHQ: false },
        { name: 'Kerameri', lat: 19.4167, lng: 79.3667, isHQ: false },
        { name: 'Wankidi', lat: 19.2667, lng: 79.2167, isHQ: false },
        { name: 'Dahegaon', lat: 19.3167, lng: 79.3000, isHQ: false }
    ],
    mancherial: [
        { name: 'Mancherial', lat: 18.8681, lng: 79.4500, isHQ: true },
        { name: 'Bellampalli', lat: 19.0550, lng: 79.4936, isHQ: false },
        { name: 'Kyathampalli', lat: 18.9167, lng: 79.5500, isHQ: false },
        { name: 'Naspur', lat: 18.9833, lng: 79.3167, isHQ: false },
        { name: 'Luxettipet', lat: 18.8667, lng: 79.2500, isHQ: false },
        { name: 'Chennur', lat: 18.8000, lng: 79.7333, isHQ: false }
    ],
    nirmal: [
        { name: 'Nirmal', lat: 19.0967, lng: 78.3422, isHQ: true },
        { name: 'Bhainsa', lat: 19.1000, lng: 77.9667, isHQ: false },
        { name: 'Mudhole', lat: 19.2333, lng: 78.0667, isHQ: false },
        { name: 'Khanapur', lat: 19.0333, lng: 78.2167, isHQ: false },
        { name: 'Laxmanchanda', lat: 19.1833, lng: 78.2833, isHQ: false },
        { name: 'Sarangapur', lat: 19.0667, lng: 78.4333, isHQ: false }
    ],
    nizamabad: [
        { name: 'Nizamabad', lat: 18.6725, lng: 78.0941, isHQ: true },
        { name: 'Bodhan', lat: 18.6667, lng: 77.8833, isHQ: false },
        { name: 'Armoor', lat: 18.7903, lng: 78.2903, isHQ: false },
        { name: 'Bichkunda', lat: 18.3833, lng: 77.7167, isHQ: false },
        { name: 'Balkonda', lat: 18.8667, lng: 78.0000, isHQ: false },
        { name: 'Varni', lat: 18.6000, lng: 78.0333, isHQ: false },
        { name: 'Yellareddy', lat: 18.6000, lng: 78.0167, isHQ: false }
    ],
    kamareddy: [
        { name: 'Kamareddy', lat: 18.3200, lng: 78.3300, isHQ: true },
        { name: 'Banswada', lat: 18.3833, lng: 77.8833, isHQ: false },
        { name: 'Yellareddy', lat: 18.1833, lng: 78.0167, isHQ: false },
        { name: 'Domakonda', lat: 18.2500, lng: 78.4167, isHQ: false },
        { name: 'Nizamsagar', lat: 18.1333, lng: 78.2833, isHQ: false },
        { name: 'Sadasivanagar', lat: 18.1833, lng: 78.3667, isHQ: false }
    ],
    jagtial: [
        { name: 'Jagtial', lat: 18.7917, lng: 78.9083, isHQ: true },
        { name: 'Metpally', lat: 18.8333, lng: 78.6000, isHQ: false },
        { name: 'Korutla', lat: 18.8233, lng: 78.7131, isHQ: false },
        { name: 'Raikal', lat: 18.9167, lng: 78.8167, isHQ: false },
        { name: 'Dharmapuri', lat: 18.9500, lng: 79.1167, isHQ: false },
        { name: 'Gollapalli', lat: 18.7667, lng: 78.8500, isHQ: false }
    ],
    peddapalli: [
        { name: 'Peddapalli', lat: 18.6167, lng: 79.3833, isHQ: true },
        { name: 'Ramagundam', lat: 18.7554, lng: 79.4748, isHQ: false },
        { name: 'Godavarikhani', lat: 18.7500, lng: 79.5000, isHQ: false },
        { name: 'Sultanabad', lat: 18.6000, lng: 79.3333, isHQ: false },
        { name: 'Manthani', lat: 18.6500, lng: 79.6667, isHQ: false },
        { name: 'Dharmaram', lat: 18.7167, lng: 79.5000, isHQ: false }
    ],
    karimnagar: [
        { name: 'Karimnagar', lat: 18.4386, lng: 79.1288, isHQ: true },
        { name: 'Huzurabad', lat: 18.1981, lng: 79.4022, isHQ: false },
        { name: 'Jammikunta', lat: 18.2833, lng: 79.4667, isHQ: false },
        { name: 'Sircilla', lat: 18.3833, lng: 78.8167, isHQ: false },
        { name: 'Choppadandi', lat: 18.5333, lng: 79.1833, isHQ: false },
        { name: 'Kothapalli', lat: 18.3667, lng: 79.0500, isHQ: false }
    ],
    sircilla: [
        { name: 'Sircilla', lat: 18.3833, lng: 78.8167, isHQ: true },
        { name: 'Vemulawada', lat: 18.4667, lng: 78.8667, isHQ: false },
        { name: 'Yellareddypet', lat: 18.4333, lng: 78.8000, isHQ: false },
        { name: 'Boinpally', lat: 18.5000, lng: 78.7500, isHQ: false },
        { name: 'Gambhiraopet', lat: 18.2833, lng: 78.7500, isHQ: false }
    ],
    bhupalapally: [
        { name: 'Bhupalpally', lat: 18.4333, lng: 79.9500, isHQ: true },
        { name: 'Mahadevpur', lat: 18.4833, lng: 80.0167, isHQ: false },
        { name: 'Kataram', lat: 18.5167, lng: 79.8833, isHQ: false },
        { name: 'Tekumatla', lat: 18.4667, lng: 80.0500, isHQ: false },
        { name: 'Chityal', lat: 18.3333, lng: 79.8667, isHQ: false }
    ],
    mulugu: [
        { name: 'Mulugu', lat: 18.1833, lng: 80.0000, isHQ: true },
        { name: 'Venkatapuram', lat: 18.0667, lng: 80.1500, isHQ: false },
        { name: 'Eturunagaram', lat: 18.0333, lng: 80.0833, isHQ: false },
        { name: 'Tadvai', lat: 18.3500, lng: 80.1667, isHQ: false },
        { name: 'Mangapet', lat: 18.2500, lng: 80.0833, isHQ: false }
    ],
    hanumakonda: [
        { name: 'Hanumakonda', lat: 17.9784, lng: 79.5941, isHQ: true },
        { name: 'Hanamkonda', lat: 17.9833, lng: 79.5500, isHQ: false },
        { name: 'Kazipet', lat: 17.9667, lng: 79.5333, isHQ: false },
        { name: 'Subedari', lat: 17.9500, lng: 79.5667, isHQ: false },
        { name: 'Hasanparthy', lat: 17.9167, lng: 79.4833, isHQ: false }
    ],
    warangal: [
        { name: 'Warangal', lat: 18.0000, lng: 79.5833, isHQ: true },
        { name: 'Narsampet', lat: 17.9333, lng: 79.8833, isHQ: false },
        { name: 'Parkal', lat: 18.2167, lng: 79.7000, isHQ: false },
        { name: 'Wardhannapet', lat: 17.7500, lng: 79.5167, isHQ: false },
        { name: 'Atmakur', lat: 17.9167, lng: 79.0833, isHQ: false },
        { name: 'Nekkonda', lat: 17.8500, lng: 79.6667, isHQ: false }
    ],
    jangaon: [
        { name: 'Jangaon', lat: 17.7167, lng: 79.1500, isHQ: true },
        { name: 'Station Ghanpur', lat: 17.7500, lng: 79.1833, isHQ: false },
        { name: 'Palakurthy', lat: 17.5833, lng: 79.1500, isHQ: false },
        { name: 'Lingalaghanpur', lat: 17.6833, lng: 79.1000, isHQ: false },
        { name: 'Raghunathpalle', lat: 17.7667, lng: 79.0833, isHQ: false }
    ],
    mahabubabad: [
        { name: 'Mahabubabad', lat: 17.5833, lng: 80.0000, isHQ: true },
        { name: 'Thorrur', lat: 17.5581, lng: 79.7717, isHQ: false },
        { name: 'Dornakal', lat: 17.4500, lng: 80.1500, isHQ: false },
        { name: 'Kuravi', lat: 17.6000, lng: 80.0667, isHQ: false },
        { name: 'Kesamudram', lat: 17.6667, lng: 79.8833, isHQ: false },
        { name: 'Nellikudur', lat: 17.5000, lng: 79.9667, isHQ: false }
    ],
    kothagudem: [
        { name: 'Kothagudem', lat: 17.5500, lng: 80.6167, isHQ: true },
        { name: 'Bhadrachalam', lat: 17.6683, lng: 80.8936, isHQ: false },
        { name: 'Yellandu', lat: 17.5897, lng: 80.3317, isHQ: false },
        { name: 'Manuguru', lat: 17.9833, lng: 80.7500, isHQ: false },
        { name: 'Palvancha', lat: 17.5983, lng: 80.7086, isHQ: false },
        { name: 'Sathupalli', lat: 17.2500, lng: 80.8500, isHQ: false },
        { name: 'Aswapuram', lat: 17.5833, lng: 80.5333, isHQ: false }
    ],
    khammam: [
        { name: 'Khammam', lat: 17.2473, lng: 80.1514, isHQ: true },
        { name: 'Madhira', lat: 17.0167, lng: 80.3667, isHQ: false },
        { name: 'Wyra', lat: 17.2500, lng: 80.3333, isHQ: false },
        { name: 'Sathupalli', lat: 17.2500, lng: 80.8500, isHQ: false },
        { name: 'Kallur', lat: 17.1333, lng: 80.0667, isHQ: false },
        { name: 'Enkoor', lat: 17.3833, lng: 80.1833, isHQ: false },
        { name: 'Kusumanchi', lat: 17.1667, lng: 80.1167, isHQ: false }
    ],
    sangareddy: [
        { name: 'Sangareddy', lat: 17.6166, lng: 78.0866, isHQ: true },
        { name: 'Zaheerabad', lat: 17.6832, lng: 77.6073, isHQ: false },
        { name: 'Narayankhed', lat: 17.6167, lng: 77.7500, isHQ: false },
        { name: 'Andole', lat: 17.5667, lng: 77.8167, isHQ: false },
        { name: 'Jogipet', lat: 17.6500, lng: 77.9333, isHQ: false },
        { name: 'Patancheru', lat: 17.5333, lng: 78.2667, isHQ: false },
        { name: 'Sadasivpet', lat: 17.6167, lng: 77.9500, isHQ: false }
    ],
    medak: [
        { name: 'Medak', lat: 18.0467, lng: 78.2600, isHQ: true },
        { name: 'Narsapur', lat: 17.7333, lng: 78.2167, isHQ: false },
        { name: 'Ramayampet', lat: 18.0833, lng: 78.2000, isHQ: false },
        { name: 'Toopran', lat: 17.8833, lng: 78.3833, isHQ: false },
        { name: 'Tekmal', lat: 17.7667, lng: 78.3167, isHQ: false },
        { name: 'Kowdipally', lat: 17.9333, lng: 78.1167, isHQ: false }
    ],
    siddipet: [
        { name: 'Siddipet', lat: 18.1000, lng: 78.8500, isHQ: true },
        { name: 'Gajwel', lat: 17.8500, lng: 78.6833, isHQ: false },
        { name: 'Dubbak', lat: 17.9500, lng: 78.5667, isHQ: false },
        { name: 'Husnabad', lat: 18.1333, lng: 78.8667, isHQ: false },
        { name: 'Cheriyal', lat: 17.8833, lng: 78.9333, isHQ: false },
        { name: 'Thoguta', lat: 17.9667, lng: 78.9000, isHQ: false }
    ],
    medchal: [
        { name: 'Medchal', lat: 17.5294, lng: 78.5278, isHQ: true },
        { name: 'Malkajgiri', lat: 17.4500, lng: 78.5167, isHQ: false },
        { name: 'Kompally', lat: 17.5333, lng: 78.4833, isHQ: false },
        { name: 'Alwal', lat: 17.5000, lng: 78.4833, isHQ: false },
        { name: 'Quthbullapur', lat: 17.5167, lng: 78.4167, isHQ: false },
        { name: 'Shamirpet', lat: 17.5833, lng: 78.5667, isHQ: false },
        { name: 'Keesara', lat: 17.5167, lng: 78.6333, isHQ: false }
    ],
    hyderabad: [
        { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, isHQ: true },
        { name: 'Secunderabad', lat: 17.4399, lng: 78.4983, isHQ: false },
        { name: 'Charminar', lat: 17.3616, lng: 78.4747, isHQ: false },
        { name: 'Begumpet', lat: 17.4433, lng: 78.4675, isHQ: false },
        { name: 'Ameerpet', lat: 17.4375, lng: 78.4483, isHQ: false },
        { name: 'Kukatpally', lat: 17.4947, lng: 78.3996, isHQ: false },
        { name: 'Madhapur', lat: 17.4504, lng: 78.3915, isHQ: false },
        { name: 'Hitech City', lat: 17.4435, lng: 78.3772, isHQ: false },
        { name: 'Gachibowli', lat: 17.4400, lng: 78.3489, isHQ: false },
        { name: 'Jubilee Hills', lat: 17.4318, lng: 78.4071, isHQ: false },
        { name: 'Banjara Hills', lat: 17.4138, lng: 78.4481, isHQ: false },
        { name: 'Dilsukhnagar', lat: 17.3687, lng: 78.5247, isHQ: false },
        { name: 'LB Nagar', lat: 17.3459, lng: 78.5471, isHQ: false }
    ],
    rangareddy: [
        { name: 'Rangareddy', lat: 17.2000, lng: 78.1833, isHQ: true },
        { name: 'Shamshabad', lat: 17.2500, lng: 78.4167, isHQ: false },
        { name: 'Chevella', lat: 17.3167, lng: 78.1333, isHQ: false },
        { name: 'Ibrahimpatnam', lat: 17.1000, lng: 78.5667, isHQ: false },
        { name: 'Maheshwaram', lat: 17.1333, lng: 78.4333, isHQ: false },
        { name: 'Kandukur', lat: 17.1333, lng: 78.2167, isHQ: false },
        { name: 'Shadnagar', lat: 17.0667, lng: 78.2000, isHQ: false }
    ],
    vikarabad: [
        { name: 'Vikarabad', lat: 17.3333, lng: 77.9000, isHQ: true },
        { name: 'Tandur', lat: 17.2333, lng: 77.5833, isHQ: false },
        { name: 'Parigi', lat: 17.3000, lng: 77.7500, isHQ: false },
        { name: 'Kodangal', lat: 17.1833, lng: 77.7167, isHQ: false },
        { name: 'Basheerabad', lat: 17.3167, lng: 77.8500, isHQ: false },
        { name: 'Peddemul', lat: 17.2333, lng: 77.8333, isHQ: false }
    ],
    yadadri: [
        { name: 'Bhuvanagiri', lat: 17.5833, lng: 78.9500, isHQ: true },
        { name: 'Aler', lat: 17.5500, lng: 78.9167, isHQ: false },
        { name: 'Bhongir', lat: 17.5167, lng: 78.8833, isHQ: false },
        { name: 'Yadadri', lat: 17.5903, lng: 78.9486, isHQ: false },
        { name: 'Choutuppal', lat: 17.2500, lng: 78.9167, isHQ: false },
        { name: 'Ramannapet', lat: 17.3000, lng: 79.0333, isHQ: false }
    ],
    suryapet: [
        { name: 'Suryapet', lat: 17.1333, lng: 79.6167, isHQ: true },
        { name: 'Kodad', lat: 16.9986, lng: 79.9669, isHQ: false },
        { name: 'Huzurnagar', lat: 16.9000, lng: 79.8833, isHQ: false },
        { name: 'Tungaturthi', lat: 17.0667, lng: 79.7167, isHQ: false },
        { name: 'Nereducharla', lat: 17.0833, lng: 80.0333, isHQ: false },
        { name: 'Jajireddygudem', lat: 17.0833, lng: 79.6833, isHQ: false }
    ],
    nalgonda: [
        { name: 'Nalgonda', lat: 17.0575, lng: 79.2748, isHQ: true },
        { name: 'Miryalaguda', lat: 16.8667, lng: 79.5667, isHQ: false },
        { name: 'Devarakonda', lat: 16.6833, lng: 79.2667, isHQ: false },
        { name: 'Nakrekal', lat: 17.1500, lng: 79.4500, isHQ: false },
        { name: 'Tipparthy', lat: 17.0000, lng: 79.3333, isHQ: false },
        { name: 'Chityal', lat: 17.0667, lng: 79.2000, isHQ: false },
        { name: 'Chandur', lat: 16.9500, lng: 79.1667, isHQ: false }
    ],
    mahbubnagar: [
        { name: 'Mahbubnagar', lat: 16.7488, lng: 77.9853, isHQ: true },
        { name: 'Jadcherla', lat: 16.7667, lng: 78.1333, isHQ: false },
        { name: 'Devarkadra', lat: 16.6833, lng: 77.8167, isHQ: false },
        { name: 'Addakal', lat: 16.4833, lng: 77.9833, isHQ: false },
        { name: 'Koilkonda', lat: 16.7500, lng: 77.9667, isHQ: false },
        { name: 'Balanagar', lat: 16.7667, lng: 77.8667, isHQ: false }
    ],
    nagarkurnool: [
        { name: 'Nagarkurnool', lat: 16.4833, lng: 78.3000, isHQ: true },
        { name: 'Kollapur', lat: 16.1333, lng: 78.3500, isHQ: false },
        { name: 'Kalwakurthy', lat: 16.6667, lng: 78.4833, isHQ: false },
        { name: 'Achampet', lat: 16.3833, lng: 78.2167, isHQ: false },
        { name: 'Amrabad', lat: 16.3833, lng: 78.8333, isHQ: false },
        { name: 'Lingal', lat: 16.5500, lng: 78.1500, isHQ: false }
    ],
    wanaparthy: [
        { name: 'Wanaparthy', lat: 16.3622, lng: 78.0622, isHQ: true },
        { name: 'Kothakota', lat: 16.3333, lng: 78.1500, isHQ: false },
        { name: 'Gopalpet', lat: 16.4167, lng: 78.0500, isHQ: false },
        { name: 'Atmakur', lat: 16.3667, lng: 78.0000, isHQ: false },
        { name: 'Pebbair', lat: 16.3000, lng: 78.0333, isHQ: false }
    ],
    gadwal: [
        { name: 'Gadwal', lat: 16.2333, lng: 77.8000, isHQ: true },
        { name: 'Alampur', lat: 15.8833, lng: 78.1333, isHQ: false },
        { name: 'Ieeja', lat: 16.0833, lng: 77.7167, isHQ: false },
        { name: 'Maldakal', lat: 16.0667, lng: 77.6333, isHQ: false },
        { name: 'Undavalli', lat: 16.2000, lng: 77.8500, isHQ: false }
    ],
    narayanpet: [
        { name: 'Narayanpet', lat: 16.7333, lng: 77.5000, isHQ: true },
        { name: 'Makthal', lat: 16.5000, lng: 77.5333, isHQ: false },
        { name: 'Kosgi', lat: 16.7000, lng: 77.7333, isHQ: false },
        { name: 'Marikal', lat: 16.4500, lng: 77.3500, isHQ: false },
        { name: 'Narva', lat: 16.6167, lng: 77.4833, isHQ: false }
    ]
};

// Render Manual Location Selector
function renderManualSelector() {
    const container = document.getElementById('manualSelectorContainer');
    if (!container) return;
    
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    
    const labels = {
        en: { district: 'Select District', city: 'Select City/Town' },
        hi: { district: 'जिला चुनें', city: 'शहर/कस्बा चुनें' },
        te: { district: 'జిల్లాను ఎంచుకోండి', city: 'నగరం/పట్టణం ఎంచుకోండి' },
        ta: { district: 'மாவட்டத்தைத் தேர்ந்தெடுக்கவும்', city: 'நகரம்/ஊர் தேர்ந்தெடுக்கவும்' },
        kn: { district: 'ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ', city: 'ನಗರ/ಪಟ್ಟಣ ಆಯ್ಕೆಮಾಡಿ' },
        mr: { district: 'जिल्हा निवडा', city: 'शहर/गाव निवडा' },
        pa: { district: 'ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ', city: 'ਸ਼ਹਿਰ/ਕਸਬਾ ਚੁਣੋ' },
        bn: { district: 'জেলা নির্বাচন করুন', city: 'শহর/শহর নির্বাচন করুন' }
    };
    
    const l = labels[lang] || labels['en'];
    
    // Build district options sorted alphabetically
    const sortedDistricts = Object.keys(telanganaMapDistricts).sort((a, b) => {
        return telanganaMapDistricts[a].name.localeCompare(telanganaMapDistricts[b].name);
    });
    
    const districtOptions = sortedDistricts.map(id => {
        const district = telanganaMapDistricts[id];
        const translatedName = getMapDistrictName(id);
        return `<option value="${id}">${translatedName}</option>`;
    }).join('');
    
    container.innerHTML = `
        <div class="manual-selector-dropdowns">
            <div class="selector-group">
                <label for="districtSelect" class="selector-label">${l.district}</label>
                <select id="districtSelect" class="selector-dropdown">
                    <option value="">-- ${l.district} --</option>
                    ${districtOptions}
                </select>
            </div>
            <div class="selector-group">
                <label for="citySelect" class="selector-label">${l.city}</label>
                <select id="citySelect" class="selector-dropdown" disabled>
                    <option value="">-- ${l.city} --</option>
                </select>
            </div>
        </div>
    `;
    
    // Add event listeners
    const districtSelect = document.getElementById('districtSelect');
    const citySelect = document.getElementById('citySelect');
    
    if (districtSelect) {
        districtSelect.addEventListener('change', handleDistrictSelectChange);
    }
    if (citySelect) {
        citySelect.addEventListener('change', handleCitySelectChange);
    }
}

// Handle district dropdown change
function handleDistrictSelectChange(event) {
    const districtId = event.target.value;
    const citySelect = document.getElementById('citySelect');
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    
    // City placeholder translations
    const cityPlaceholderLabels = {
        en: 'Select City/Town', hi: 'शहर/कस्बा चुनें', te: 'నగరం/పట్టణం ఎంచుకోండి',
        ta: 'நகரம்/ஊர் தேர்ந்தெடுக்கவும்', kn: 'ನಗರ/ಪಟ್ಟಣ ಆಯ್ಕೆಮಾಡಿ',
        mr: 'शहर/गाव निवडा', pa: 'ਸ਼ਹਿਰ/ਕਸਬਾ ਚੁਣੋ', bn: 'শহর/শহর নির্বাচন করুন'
    };
    const cityPlaceholder = cityPlaceholderLabels[lang] || cityPlaceholderLabels['en'];
    
    // HQ suffix translations
    const hqLabels = {
        en: 'HQ', hi: 'मुख्यालय', te: 'ప్రధాన కార్యాలయం', ta: 'தலைமையகம்',
        kn: 'ಮುಖ್ಯ ಕಚೇರಿ', mr: 'मुख्यालय', pa: 'ਮੁੱਖ ਦਫ਼ਤਰ', bn: 'সদর দপ্তর'
    };
    const hqSuffix = hqLabels[lang] || hqLabels['en'];
    
    if (!districtId || !citySelect) {
        if (citySelect) {
            citySelect.innerHTML = `<option value="">-- ${cityPlaceholder} --</option>`;
            citySelect.disabled = true;
        }
        return;
    }
    
    // Populate cities
    const cities = telanganaCities[districtId] || [];
    const sortedCities = [...cities].sort((a, b) => {
        if (a.isHQ && !b.isHQ) return -1;
        if (!a.isHQ && b.isHQ) return 1;
        return a.name.localeCompare(b.name);
    });
    
    const cityOptions = sortedCities.map(city => {
        const translatedName = getTranslatedCityName(city.name);
        const suffix = city.isHQ ? ` (${hqSuffix})` : '';
        return `<option value="${city.name}" data-lat="${city.lat}" data-lng="${city.lng}">${translatedName}${suffix}</option>`;
    }).join('');
    
    citySelect.innerHTML = `<option value="">-- ${cityPlaceholder} --</option>${cityOptions}`;
    citySelect.disabled = false;
}

// Handle city dropdown change
function handleCitySelectChange(event) {
    const selectedOption = event.target.selectedOptions[0];
    if (!selectedOption || !selectedOption.value) return;
    
    const cityName = selectedOption.value;
    const lat = parseFloat(selectedOption.getAttribute('data-lat'));
    const lng = parseFloat(selectedOption.getAttribute('data-lng'));
    const districtId = document.getElementById('districtSelect').value;
    
    if (!districtId || isNaN(lat) || isNaN(lng)) return;
    
    const district = telanganaMapDistricts[districtId];
    
    // Update app state
    if (typeof appState !== 'undefined') {
        appState.selectedDistrict = { ...district, selectedCity: cityName };
        appState.selectedRegion = { id: 'telangana', name: 'Telangana' };
        appState.location = { lat, lng };
    }
    
    // Update location display with translated names
    const translatedCity = getTranslatedCityName(cityName);
    const translatedDistrict = getMapDistrictName(districtId);
    const locationText = `${translatedCity}, ${translatedDistrict}`;
    
    if (typeof elements !== 'undefined') {
        if (elements.locationName) {
            elements.locationName.textContent = locationText;
        }
        if (elements.locationCoords) {
            elements.locationCoords.textContent = `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`;
        }
        
        // Show confirmation
        if (elements.confirmedLocation) {
            elements.confirmedLocation.textContent = `${district.emoji} ${locationText}`;
        }
        if (elements.locationConfirmation) {
            elements.locationConfirmation.classList.remove('hidden');
        }
    }
    
    // Save to localStorage
    try {
        localStorage.setItem('farmguard_location', JSON.stringify({ lat, lng }));
        localStorage.setItem('farmguard_region', 'telangana');
        localStorage.setItem('farmguard_district', districtId);
        localStorage.setItem('farmguard_city', cityName);
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
    
    // Fetch weather if crop is selected, otherwise show message
    if (typeof appState !== 'undefined' && appState.selectedCrop && typeof fetchWeatherAlerts === 'function') {
        fetchWeatherAlerts();
    } else if (typeof showAlertMessage === 'function' && typeof t === 'function') {
        // Show message to select crop
        showAlertMessage(t('selectLocationCrop'));
    }
}

// Update manual selector labels when language changes
function updateManualSelectorLabels() {
    // Save current selections before re-rendering
    const districtSelect = document.getElementById('districtSelect');
    const citySelect = document.getElementById('citySelect');
    const savedDistrict = districtSelect ? districtSelect.value : '';
    const savedCity = citySelect ? citySelect.value : '';
    
    // Re-render the selector with new language
    renderManualSelector();
    
    // Restore district selection
    const newDistrictSelect = document.getElementById('districtSelect');
    if (newDistrictSelect && savedDistrict) {
        newDistrictSelect.value = savedDistrict;
        // Trigger change to populate cities
        handleDistrictSelectChange({ target: newDistrictSelect });
        
        // Restore city selection
        const newCitySelect = document.getElementById('citySelect');
        if (newCitySelect && savedCity) {
            newCitySelect.value = savedCity;
        }
    }
}

// Export functions globally
window.renderTelanganaMap = renderTelanganaMap;
window.updateMapLabels = updateMapLabels;
window.shouldShowMap = shouldShowMap;
window.telanganaMapDistricts = telanganaMapDistricts;
window.getMapDistrictName = getMapDistrictName;
window.getTranslatedCityName = getTranslatedCityName;
window.selectDistrictFromMap = selectDistrictFromMap;
window.telanganaCities = telanganaCities;
window.renderManualSelector = renderManualSelector;
window.updateManualSelectorLabels = updateManualSelectorLabels;
window.handleDistrictSelectChange = handleDistrictSelectChange;
window.handleCitySelectChange = handleCitySelectChange;
window.syncLocationDropdowns = syncLocationDropdowns;
