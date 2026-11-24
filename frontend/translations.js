// Translations for FarmGuard Weather Alert System
// Supports: English, Hindi, Telugu, Tamil, Kannada, Marathi, Punjabi, Bengali

const translations = {
    en: {
        // App Name
        appName: "FarmGuard Weather Report",
        riskLevel: "Risk Level",
        
        // Welcome Modal
        welcomeTitle: "Welcome to FarmGuard",
        welcomeSubtitle: "Your Smart Farming Weather Assistant",
        featureWeather: "Real-time Weather",
        featureAlerts: "Activity Alerts",
        featureFrost: "Frost Predictions",
        getStarted: "Get Started",
        
        // Greetings
        goodMorning: "Good Morning, Farmer!",
        goodAfternoon: "Good Afternoon, Farmer!",
        goodEvening: "Good Evening, Farmer!",
        goodNight: "Good Night, Farmer!",
        
        // Location Section
        yourLocation: "Your Location",
        selectLocation: "Select your location",
        chooseOrGps: "Choose below or use GPS",
        autoGps: "Auto GPS",
        detectingLocation: "Detecting location...",
        orTapRegion: "Or Tap Your Region",
        selectDistrict: "Select Your District",
        locationSet: "Location Set:",
        
        // Crop Section
        selectCrop: "Select Your Crop",
        selected: "Selected:",
        
        // Weather Alerts
        weatherAlerts: "Weather Alerts",
        selectLocationCrop: "Select your location and crop to view weather alerts",
        selectDistrictFirst: "Please select a district first",
        selectCityFirst: "Please select a city to view weather alerts",
        selectDistrictCity: "Please select a district and city to view weather alerts",
        selectCropFirst: "Please select a crop first",
        noWeatherData: "No weather data available. Please refresh first.",
        speechNotSupported: "Speech is not supported in this browser",
        speechError: "Speech error occurred",
        yourLocation: "Your location",
        fetchingWeather: "Fetching weather data...",
        dataRefreshed: "Data refreshed successfully!",
        refreshFailed: "Failed to refresh data",
        temperature: "Temperature",
        humidity: "Humidity",
        windSpeed: "Wind Speed",
        precipitation: "Precipitation",
        condition: "Condition",
        uvIndex: "UV Index",
        summary: "Summary",
        suitable: "Suitable",
        notSuitable: "Not Suitable",
        
        // Weather Conditions
        sunny: "Sunny",
        cloudy: "Cloudy",
        rainy: "Rainy",
        windy: "Windy",
        stormy: "Stormy",
        
        // Activities
        todayRecommendations: "Today's Recommendations",
        irrigation: "Irrigation",
        spraying: "Spraying (Pesticides/Fertilizers)",
        harvesting: "Harvesting",
        recommended: "RECOMMENDED",
        notRecommended: "NOT RECOMMENDED",
        bestTime: "Best Time",
        
        // Frost Alert
        frostRiskAlert: "Frost Risk Alert",
        frostProbability: "Frost Probability",
        minimal: "MINIMAL",
        low: "LOW",
        moderate: "MODERATE",
        high: "HIGH",
        frostSensitive: "is frost-sensitive. Take extra precautions!",
        frostRecHigh: "ALERT: High frost risk! Protect sensitive crops immediately.",
        frostRecModerate: "WARNING: Moderate frost risk. Consider protective measures.",
        frostRecLow: "Low frost risk. Monitor overnight temperatures.",
        frostRecMinimal: "Minimal frost risk. No immediate action needed.",
        
        // Footer
        footerText: "FarmGuard - Protecting Your Harvest",
        poweredBy: "Live Satellite & Station Telemetry powered by Open-Meteo",
        
        // Disease and Spray Additions
        sprayWindowAdvisor: "Pesticide Spraying Window",
        bestSprayWindow: "Next Safe Window:",
        safeToSprayNow: "SAFE TO SPRAY NOW",
        cautionSprayNow: "PROCEED WITH CAUTION",
        doNotSprayNow: "DO NOT SPRAY NOW",
        diseasePressureAdvisor: "Disease & Pest Risk (PJTSAU Guidelines)",
        diseaseRisk: "Disease Risk",
        fungalRiskLevel: "Risk Level",
        inspectedAdvisory: "Recommended Action",
        liveDataBadge: "Live Satellite Data",
        
        // Day Names
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        today: "Today",
        tomorrow: "Tomorrow",
        
        // Forecast Section
        sevenDayForecast: "7-Day Forecast",
        rainyDays: "Rainy Days",
        sunnyDays: "Sunny Days",
        avgTemp: "Avg Temp",
        
        // Smart Recommendations Section
        whatToDoToday: "What To Do Today",
        planYourWeek: "Plan Your Week",
        tipsForYourCrop: "Tips for Your Crop",
        
        // Today's Action Recommendations
        skipIrrigationToday: "Skip Irrigation Today",
        skipIrrigationRainTomorrow: "No Irrigation Needed",
        irrigateToday: "Irrigate Today!",
        noSprayingWind: "No Spraying - Windy",
        noSprayingRain: "No Spraying - Rain Expected",
        sprayToday: "Good Day to Spray",
        noHarvestRain: "No Harvesting - Wet",
        waitHarvestHumidity: "Wait - High Humidity",
        harvestToday: "Perfect for Harvesting",
        goodDayFarming: "Good Day for Farming!",
        weatherFavorable: "Weather is favorable for farm work",
        
        // Week Alerts
        rainyWeekAlert: "Rainy Week Ahead",
        heatWaveAlert: "Heat Wave Expected",
        coldNightAlert: "Cold Nights Coming",
        bestSprayingDay: "Best Day for Spraying",
        bestHarvestingDay: "Best Day for Harvesting",
        
        // Reasons
        rainExpected: "Rain expected - save water!",
        rainTomorrow: "Rain coming tomorrow - natural irrigation!",
        goodConditions: "Dry conditions - crops need water",
        windyConditions: "Wind will blow spray away",
        rainWashOff: "Rain will wash off chemicals",
        calmConditions: "Calm weather - spray will stick",
        wetConditions: "Wet crops will get damaged",
        highHumidity: "Wait for dew to evaporate",
        perfectConditions: "Dry and sunny - harvest now!",
        multipleRainyDays: "Plan indoor work this week",
        highTemperatures: "Irrigate early morning/evening",
        frostRisk: "Cover sensitive crops at night",
        optimalConditions: "Weather will be ideal",
        dryConditions: "Low humidity expected",
        
        // Crop Tips
        highWaterCropDry: "Your crop needs extra water. Irrigate more frequently.",
        lowWaterCropRain: "Heavy rain expected. Consider drainage to prevent waterlogging.",
        frostProtectionNeeded: "Cold nights ahead! Cover your crops for protection.",
        heatProtectionNeeded: "Extreme heat coming. Provide shade and increase watering.",
        
        // Crops
        rice: "Rice",
        cotton: "Cotton",
        corn: "Corn (Maize)",
        chili: "Chili",
        redgram: "Red Gram (Kandi)",
        groundnut: "Groundnut",
        turmeric: "Turmeric (Pasupu)",
        soybean: "Soybean",
        bengalgram: "Bengal Gram (Senaga)",
        greengram: "Green Gram (Pesara)",
        blackgram: "Black Gram (Minumu)",
        sugarcane: "Sugarcane",
        tomato: "Tomato",
        onion: "Onion",
        mango: "Mango",
        banana: "Banana",
        potato: "Potato",
        wheat: "Wheat"
    },
    
    hi: {
        // App Name
        appName: "फार्मगार्ड मौसम रिपोर्ट",
        riskLevel: "जोखिम स्तर",
        
        // Welcome Modal
        welcomeTitle: "फार्मगार्ड में आपका स्वागत है",
        welcomeSubtitle: "आपका स्मार्ट खेती मौसम सहायक",
        featureWeather: "लाइव मौसम",
        featureAlerts: "गतिविधि अलर्ट",
        featureFrost: "पाला पूर्वानुमान",
        getStarted: "शुरू करें",
        
        // Greetings
        goodMorning: "🌅 सुप्रभात, किसान!",
        goodAfternoon: "☀️ नमस्ते, किसान!",
        goodEvening: "🌇 शुभ संध्या, किसान!",
        goodNight: "🌙 शुभ रात्रि, किसान!",
        
        // Location Section
        yourLocation: "आपका स्थान",
        selectLocation: "अपना स्थान चुनें",
        chooseOrGps: "नीचे चुनें या GPS उपयोग करें",
        autoGps: "ऑटो GPS",
        detectingLocation: "स्थान पता लगा रहे हैं...",
        orTapRegion: "या अपना क्षेत्र टैप करें",
        selectDistrict: "अपना जिला चुनें",
        locationSet: "स्थान सेट:",
        
        // Crop Section
        selectCrop: "अपनी फसल चुनें",
        selected: "चुना गया:",
        
        // Weather Alerts
        weatherAlerts: "मौसम अलर्ट",
        selectLocationCrop: "मौसम अलर्ट देखने के लिए स्थान और फसल चुनें",
        selectDistrictFirst: "कृपया पहले जिला चुनें",
        selectCityFirst: "मौसम अलर्ट देखने के लिए शहर चुनें",
        selectDistrictCity: "मौसम अलर्ट देखने के लिए जिला और शहर चुनें",
        selectCropFirst: "कृपया पहले फसल चुनें",
        noWeatherData: "मौसम डेटा उपलब्ध नहीं। कृपया पहले रिफ्रेश करें।",
        speechNotSupported: "इस ब्राउज़र में स्पीच समर्थित नहीं है",
        speechError: "स्पीच में त्रुटि हुई",
        yourLocation: "आपका स्थान",
        fetchingWeather: "मौसम डेटा प्राप्त कर रहे हैं...",
        dataRefreshed: "डेटा सफलतापूर्वक रिफ्रेश हो गया!",
        refreshFailed: "डेटा रिफ्रेश करने में विफल",
        temperature: "तापमान",
        humidity: "आर्द्रता",
        windSpeed: "हवा की गति",
        precipitation: "वर्षा",
        condition: "स्थिति",
        uvIndex: "यूवी इंडेक्स",
        summary: "सारांश",
        suitable: "उपयुक्त",
        notSuitable: "अनुपयुक्त",
        
        // Weather Conditions
        sunny: "धूप",
        cloudy: "बादल",
        rainy: "बारिश",
        windy: "तेज हवा",
        stormy: "तूफान",
        
        // Activities
        todayRecommendations: "आज की सिफारिशें",
        irrigation: "सिंचाई",
        spraying: "छिड़काव (कीटनाशक/उर्वरक)",
        harvesting: "कटाई",
        recommended: "सिफारिश",
        notRecommended: "सिफारिश नहीं",
        bestTime: "सबसे अच्छा समय",
        
        // Frost Alert
        frostRiskAlert: "पाला जोखिम अलर्ट",
        frostProbability: "पाला संभावना",
        minimal: "न्यूनतम",
        low: "कम",
        moderate: "मध्यम",
        high: "उच्च",
        frostSensitive: "पाला-संवेदनशील है। अतिरिक्त सावधानी बरतें!",
        frostRecHigh: "अलर्ट: उच्च पाला जोखिम! संवेदनशील फसलों को तुरंत बचाएं।",
        frostRecModerate: "चेतावनी: मध्यम पाला जोखिम। सुरक्षात्मक उपाय करें।",
        frostRecLow: "कम पाला जोखिम। रात के तापमान पर नजर रखें।",
        frostRecMinimal: "न्यूनतम पाला जोखिम। तत्काल कार्रवाई की आवश्यकता नहीं।",
        
        // Footer
        footerText: "फार्मगार्ड - आपकी फसल की रक्षा",
        poweredBy: "मौसम डेटा AccuWeather द्वारा",
        
        // Day Names
        monday: "सोमवार",
        tuesday: "मंगलवार",
        wednesday: "बुधवार",
        thursday: "गुरुवार",
        friday: "शुक्रवार",
        saturday: "शनिवार",
        sunday: "रविवार",
        today: "आज",
        tomorrow: "कल",
        
        // Forecast Section
        sevenDayForecast: "7-दिन का पूर्वानुमान",
        rainyDays: "बारिश के दिन",
        sunnyDays: "धूप के दिन",
        avgTemp: "औसत तापमान",
        
        // Smart Recommendations Section
        whatToDoToday: "आज क्या करें",
        planYourWeek: "सप्ताह की योजना",
        tipsForYourCrop: "आपकी फसल के लिए टिप्स",
        
        // Today's Action Recommendations
        skipIrrigationToday: "💧 आज सिंचाई न करें",
        skipIrrigationRainTomorrow: "💧 सिंचाई की जरूरत नहीं",
        irrigateToday: "💧 आज सिंचाई करें!",
        noSprayingWind: "🧪 छिड़काव नहीं - हवा तेज",
        noSprayingRain: "🧪 छिड़काव नहीं - बारिश आएगी",
        sprayToday: "🧪 छिड़काव का अच्छा दिन",
        noHarvestRain: "🚜 कटाई नहीं - गीला",
        waitHarvestHumidity: "🚜 रुकें - नमी ज्यादा",
        harvestToday: "🚜 कटाई के लिए बढ़िया",
        goodDayFarming: "खेती का अच्छा दिन!",
        weatherFavorable: "मौसम खेती के लिए अनुकूल है",
        
        // Week Alerts
        rainyWeekAlert: "🌧️ बारिश का सप्ताह आ रहा",
        heatWaveAlert: "🔥 गर्मी की लहर आएगी",
        coldNightAlert: "❄️ ठंडी रातें आ रही हैं",
        bestSprayingDay: "📅 छिड़काव का सबसे अच्छा दिन",
        bestHarvestingDay: "📅 कटाई का सबसे अच्छा दिन",
        
        // Reasons
        rainExpected: "बारिश होगी - पानी बचाएं!",
        rainTomorrow: "कल बारिश आएगी - प्राकृतिक सिंचाई!",
        goodConditions: "सूखा है - फसल को पानी चाहिए",
        windyConditions: "हवा स्प्रे उड़ा देगी",
        rainWashOff: "बारिश दवाई बहा देगी",
        calmConditions: "शांत मौसम - स्प्रे चिपकेगा",
        wetConditions: "गीली फसल खराब होगी",
        highHumidity: "ओस सूखने का इंतजार करें",
        perfectConditions: "सूखा और धूप - अभी काटें!",
        multipleRainyDays: "घर के काम की योजना बनाएं",
        highTemperatures: "सुबह/शाम सिंचाई करें",
        frostRisk: "रात में फसल ढकें",
        optimalConditions: "मौसम बढ़िया होगा",
        dryConditions: "कम नमी रहेगी",
        
        // Crop Tips
        highWaterCropDry: "आपकी फसल को ज्यादा पानी चाहिए। बार-बार सिंचाई करें।",
        lowWaterCropRain: "भारी बारिश आएगी। पानी निकासी का ध्यान रखें।",
        frostProtectionNeeded: "ठंडी रातें आ रही हैं! फसल को ढकें।",
        heatProtectionNeeded: "बहुत गर्मी आएगी। छाया दें और पानी बढ़ाएं।",
        
        // Crops
        rice: "चावल",
        wheat: "गेहूं",
        corn: "मक्का",
        cotton: "कपास",
        sugarcane: "गन्ना",
        tomato: "टमाटर",
        potato: "आलू",
        onion: "प्याज",
        chili: "मिर्च",
        mango: "आम",
        banana: "केला",
        groundnut: "मूंगफली"
    },
    
    te: {
        // App Name
        appName: "ఫార్మ్‌గార్డ్ వాతావరణ నివేదిక",
        riskLevel: "ప్రమాద స్థాయి",
        
        // Welcome Modal
        welcomeTitle: "ఫార్మ్‌గార్డ్‌కు స్వాగతం",
        welcomeSubtitle: "మీ స్మార్ట్ వ్యవసాయ వాతావరణ సహాయకుడు",
        featureWeather: "లైవ్ వాతావరణం",
        featureAlerts: "కార్యకలాప అలర్ట్‌లు",
        featureFrost: "మంచు అంచనాలు",
        getStarted: "ప్రారంభించండి",
        
        // Greetings
        goodMorning: "🌅 శుభోదయం, రైతు!",
        goodAfternoon: "☀️ శుభ మధ్యాహ్నం, రైతు!",
        goodEvening: "🌇 శుభ సాయంత్రం, రైతు!",
        goodNight: "🌙 శుభ రాత్రి, రైతు!",
        
        // Location Section
        yourLocation: "మీ స్థానం",
        selectLocation: "మీ స్థానాన్ని ఎంచుకోండి",
        chooseOrGps: "క్రింద ఎంచుకోండి లేదా GPS ఉపయోగించండి",
        autoGps: "ఆటో GPS",
        detectingLocation: "స్థానం గుర్తిస్తోంది...",
        orTapRegion: "లేదా మీ ప్రాంతంపై నొక్కండి",
        selectDistrict: "మీ జిల్లాను ఎంచుకోండి",
        locationSet: "స్థానం సెట్:",
        
        // Crop Section
        selectCrop: "మీ పంటను ఎంచుకోండి",
        selected: "ఎంపిక:",
        
        // Weather Alerts
        weatherAlerts: "వాతావరణ అలర్ట్‌లు",
        selectLocationCrop: "వాతావరణ అలర్ట్‌లను చూడటానికి స్థానం మరియు పంట ఎంచుకోండి",
        selectDistrictFirst: "దయచేసి ముందుగా జిల్లాను ఎంచుకోండి",
        selectCityFirst: "వాతావరణ అలర్ట్‌లను చూడటానికి నగరం ఎంచుకోండి",
        selectDistrictCity: "వాతావరణ అలర్ట్‌లను చూడటానికి జిల్లా మరియు నగరం ఎంచుకోండి",
        selectCropFirst: "దయచేసి ముందుగా పంటను ఎంచుకోండి",
        noWeatherData: "వాతావరణ డేటా అందుబాటులో లేదు. దయచేసి ముందుగా రిఫ్రెష్ చేయండి.",
        speechNotSupported: "ఈ బ్రౌజర్‌లో స్పీచ్ సపోర్ట్ కాదు",
        speechError: "స్పీచ్ లోపం జరిగింది",
        yourLocation: "మీ స్థానం",
        fetchingWeather: "వాతావరణ డేటా తెస్తోంది...",
        dataRefreshed: "డేటా విజయవంతంగా రిఫ్రెష్ చేయబడింది!",
        refreshFailed: "డేటా రిఫ్రెష్ చేయడంలో విఫలమైంది",
        temperature: "ఉష్ణోగ్రత",
        humidity: "తేమ",
        windSpeed: "గాలి వేగం",
        precipitation: "వర్షపాతం",
        condition: "పరిస్థితి",
        uvIndex: "యూవీ ఇండెక్స్",
        summary: "సారాంశం",
        suitable: "అనుకూలం",
        notSuitable: "అనుకూలం కాదు",
        
        // Weather Conditions
        sunny: "ఎండ",
        cloudy: "మేఘావృతం",
        rainy: "వర్షం",
        windy: "గాలి",
        stormy: "తుఫాను",
        
        // Activities
        todayRecommendations: "నేటి సిఫార్సులు",
        irrigation: "నీటిపారుదల",
        spraying: "పిచికారీ (పురుగుమందులు/ఎరువులు)",
        harvesting: "కోత",
        recommended: "సిఫార్సు",
        notRecommended: "సిఫార్సు చేయలేదు",
        bestTime: "ఉత్తమ సమయం",
        
        // Frost Alert
        frostRiskAlert: "మంచు ప్రమాద అలర్ట్",
        frostProbability: "మంచు సంభావ్యత",
        minimal: "కనిష్ట",
        low: "తక్కువ",
        moderate: "మధ్యస్థ",
        high: "అధిక",
        frostSensitive: "మంచు-సున్నితం. అదనపు జాగ్రత్తలు తీసుకోండి!",
        frostRecHigh: "అలర్ట్: అధిక మంచు ప్రమాదం! సున్నితమైన పంటలను వెంటనే రక్షించండి.",
        frostRecModerate: "హెచ్చరిక: మధ్యస్థ మంచు ప్రమాదం. రక్షణ చర్యలు తీసుకోండి.",
        frostRecLow: "తక్కువ మంచు ప్రమాదం. రాత్రి ఉష్ణోగ్రతలను పర్యవేక్షించండి.",
        frostRecMinimal: "కనిష్ట మంచు ప్రమాదం. తక్షణ చర్య అవసరం లేదు.",
        
        // Footer
        footerText: "ఫార్మ్‌గార్డ్ - మీ పంటను రక్షిస్తోంది",
        poweredBy: "లైవ్ శాటిలైట్ మరియు స్టేషన్ డేటా Open-Meteo ద్వారా",
        
        // Disease and Spray Additions
        sprayWindowAdvisor: "మందుల పిచికారీ అనుకూల సమయం",
        bestSprayWindow: "తదుపరి సురక్షిత సమయం:",
        safeToSprayNow: "ఇప్పుడు పిచికారీ చేయవచ్చు",
        cautionSprayNow: "జాగ్రత్తగా పిచికారీ చేయండి",
        doNotSprayNow: "ఇప్పుడు పిచికారీ చేయవద్దు",
        diseasePressureAdvisor: "తెగుళ్లు & పురుగుల ముప్పు (PJTSAU మార్గదర్శకాలు)",
        diseaseRisk: "తెగులు ప్రమాదం",
        fungalRiskLevel: "ముప్పు స్థాయి",
        inspectedAdvisory: "రైతు పాటించాల్సిన చర్య",
        liveDataBadge: "లైవ్ శాటిలైట్ డేటా",
        
        // Day Names
        monday: "సోమవారం",
        tuesday: "మంగళవారం",
        wednesday: "బుధవారం",
        thursday: "గురువారం",
        friday: "శుక్రవారం",
        saturday: "శనివారం",
        sunday: "ఆదివారం",
        today: "ఈరోజు",
        tomorrow: "రేపు",
        
        // Forecast Section
        sevenDayForecast: "7-రోజుల అంచనా",
        rainyDays: "వర్షపు రోజులు",
        sunnyDays: "ఎండ రోజులు",
        avgTemp: "సగటు ఉష్ణోగ్రత",
        
        // Smart Recommendations
        whatToDoToday: "ఈరోజు ఏమి చేయాలి",
        planYourWeek: "వారం ప్రణాళిక",
        tipsForYourCrop: "మీ పంటకు చిట్కాలు",
        
        // Today's Actions
        skipIrrigationToday: "💧 ఈరోజు నీటిపారుదల వద్దు",
        skipIrrigationRainTomorrow: "💧 నీటిపారుదల అవసరం లేదు",
        irrigateToday: "💧 ఈరోజు నీరు పెట్టండి!",
        noSprayingWind: "🧪 పిచికారీ వద్దు - గాలి",
        noSprayingRain: "🧪 పిచికారీ వద్దు - వర్షం వస్తుంది",
        sprayToday: "🧪 పిచికారీకి మంచి రోజు",
        noHarvestRain: "🚜 కోత వద్దు - తడి",
        waitHarvestHumidity: "🚜 ఆగండి - తేమ ఎక్కువ",
        harvestToday: "🚜 కోతకు అనువైన రోజు",
        goodDayFarming: "వ్యవసాయానికి మంచి రోజు!",
        weatherFavorable: "వాతావరణం వ్యవసాయానికి అనుకూలం",
        
        // Week Alerts
        rainyWeekAlert: "🌧️ వర్షపు వారం వస్తోంది",
        heatWaveAlert: "🔥 ఎండ వేడి వస్తుంది",
        coldNightAlert: "❄️ చల్లని రాత్రులు వస్తున్నాయి",
        bestSprayingDay: "📅 పిచికారీకి మంచి రోజు",
        bestHarvestingDay: "📅 కోతకు మంచి రోజు",
        
        // Reasons
        rainExpected: "వర్షం వస్తుంది - నీరు ఆదా చేయండి!",
        rainTomorrow: "రేపు వర్షం - సహజ నీటిపారుదల!",
        goodConditions: "పొడి వాతావరణం - పంటకు నీరు కావాలి",
        windyConditions: "గాలి స్ప్రేను ఎగరేస్తుంది",
        rainWashOff: "వర్షం మందును కొట్టుకుపోతుంది",
        calmConditions: "ప్రశాంత వాతావరణం - స్ప్రే అంటుకుంటుంది",
        wetConditions: "తడి పంట పాడవుతుంది",
        highHumidity: "మంచు ఆరే వరకు ఆగండి",
        perfectConditions: "పొడి మరియు ఎండ - ఇప్పుడే కోయండి!",
        multipleRainyDays: "ఇంట్లో పని ప్లాన్ చేయండి",
        highTemperatures: "ఉదయం/సాయంత్రం నీరు పెట్టండి",
        frostRisk: "రాత్రి పంటను కప్పండి",
        optimalConditions: "వాతావరణం బాగుంటుంది",
        dryConditions: "తక్కువ తేమ ఉంటుంది",
        
        // Crop Tips
        highWaterCropDry: "మీ పంటకు ఎక్కువ నీరు కావాలి. తరచుగా నీరు పెట్టండి.",
        lowWaterCropRain: "భారీ వర్షం వస్తుంది. నీరు నిలవకుండా చూసుకోండి.",
        frostProtectionNeeded: "చల్లని రాత్రులు వస్తున్నాయి! పంటను కప్పండి.",
        heatProtectionNeeded: "విపరీతమైన వేడి వస్తుంది. నీడ ఇచ్చి నీరు పెంచండి.",
        
        // Crops
        rice: "వరి",
        cotton: "పత్తి",
        corn: "మొక్కజొన్న",
        chili: "మిర్చి",
        redgram: "కంది",
        groundnut: "వేరుశెనగ",
        turmeric: "పసుపు",
        soybean: "సోయాచిక్కుడు",
        bengalgram: "శనగ",
        greengram: "పెసర",
        blackgram: "మినుము",
        sugarcane: "చెరకు",
        tomato: "టమాటా",
        onion: "ఉల్లిపాయ",
        mango: "మామిడి",
        banana: "అరటి",
        potato: "బంగాళదుంప",
        wheat: "గోధుమ"
    },
    
    ta: {
        // Welcome Modal
        welcomeTitle: "FarmGuard-க்கு வரவேற்கிறோம்",
        welcomeSubtitle: "உங்கள் ஸ்மார்ட் விவசாய வானிலை உதவியாளர்",
        featureWeather: "நேரடி வானிலை",
        featureAlerts: "செயல்பாட்டு எச்சரிக்கைகள்",
        featureFrost: "பனி கணிப்புகள்",
        getStarted: "தொடங்கு",
        
        // Greetings
        goodMorning: "🌅 காலை வணக்கம், விவசாயி!",
        goodAfternoon: "☀️ மதிய வணக்கம், விவசாயி!",
        goodEvening: "🌇 மாலை வணக்கம், விவசாயி!",
        goodNight: "🌙 இனிய இரவு, விவசாயி!",
        
        // Location Section
        yourLocation: "உங்கள் இருப்பிடம்",
        selectLocation: "உங்கள் இருப்பிடத்தை தேர்ந்தெடுக்கவும்",
        chooseOrGps: "கீழே தேர்ந்தெடுக்கவும் அல்லது GPS பயன்படுத்தவும்",
        autoGps: "ஆட்டோ GPS",
        detectingLocation: "இருப்பிடம் கண்டறிகிறது...",
        orTapRegion: "அல்லது உங்கள் பகுதியை தட்டவும்",
        selectDistrict: "உங்கள் மாவட்டத்தை தேர்ந்தெடுக்கவும்",
        locationSet: "இருப்பிடம் அமைக்கப்பட்டது:",
        
        // Crop Section
        selectCrop: "உங்கள் பயிரை தேர்ந்தெடுக்கவும்",
        selected: "தேர்ந்தெடுக்கப்பட்டது:",
        
        // Weather Alerts
        weatherAlerts: "வானிலை எச்சரிக்கைகள்",
        selectLocationCrop: "வானிலை எச்சரிக்கைகளைக் காண இருப்பிடம் மற்றும் பயிரைத் தேர்ந்தெடுக்கவும்",
        fetchingWeather: "வானிலை தரவைப் பெறுகிறது...",
        dataRefreshed: "தரவு வெற்றிகரமாக புதுப்பிக்கப்பட்டது!",
        refreshFailed: "தரவை புதுப்பிக்க முடியவில்லை",
        temperature: "வெப்பநிலை",
        humidity: "ஈரப்பதம்",
        windSpeed: "காற்றின் வேகம்",
        precipitation: "மழை",
        condition: "நிலை",
        uvIndex: "UV குறியீட்டு",
        summary: "சுருக்கம்",
        suitable: "பொருத்தமானது",
        notSuitable: "பொருத்தமற்றது",
        
        // Weather Conditions
        sunny: "வெயில்",
        cloudy: "மேகமூட்டம்",
        rainy: "மழை",
        windy: "காற்று",
        stormy: "புயல்",
        
        // Activities
        todayRecommendations: "இன்றைய பரிந்துரைகள்",
        irrigation: "நீர்ப்பாசனம்",
        spraying: "தெளிப்பு (பூச்சிக்கொல்லிகள்/உரங்கள்)",
        harvesting: "அறுவடை",
        recommended: "பரிந்துரைக்கப்படுகிறது",
        notRecommended: "பரிந்துரைக்கப்படவில்லை",
        bestTime: "சிறந்த நேரம்",
        
        // Frost Alert
        frostRiskAlert: "பனி ஆபத்து எச்சரிக்கை",
        frostProbability: "பனி நிகழ்தகவு",
        minimal: "குறைந்தபட்சம்",
        low: "குறைவு",
        moderate: "மிதமான",
        high: "அதிகம்",
        frostSensitive: "பனி-உணர்திறன். கூடுதல் முன்னெச்சரிக்கை தேவை!",
        
        // Footer
        footerText: "FarmGuard - உங்கள் அறுவடையைப் பாதுகாக்கிறது",
        poweredBy: "வானிலை தரவு AccuWeather மூலம்",
        
        // Day Names
        monday: "திங்கள்",
        tuesday: "செவ்வாய்",
        wednesday: "புதன்",
        thursday: "வியாழன்",
        friday: "வெள்ளி",
        saturday: "சனி",
        sunday: "ஞாயிறு",
        today: "இன்று",
        tomorrow: "நாளை",
        
        // Forecast Section
        sevenDayForecast: "7-நாள் முன்னறிவிப்பு",
        rainyDays: "மழை நாட்கள்",
        sunnyDays: "வெயில் நாட்கள்",
        avgTemp: "சராசரி வெப்பநிலை",
        
        // Smart Recommendations
        whatToDoToday: "இன்று என்ன செய்ய வேண்டும்",
        planYourWeek: "வாரத்தை திட்டமிடுங்கள்",
        tipsForYourCrop: "உங்கள் பயிருக்கான குறிப்புகள்",
        
        // Today's Actions
        skipIrrigationToday: "💧 இன்று நீர்ப்பாசனம் வேண்டாம்",
        skipIrrigationRainTomorrow: "💧 நீர்ப்பாசனம் தேவையில்லை",
        irrigateToday: "💧 இன்று நீர் பாய்ச்சுங்கள்!",
        noSprayingWind: "🧪 தெளிப்பு வேண்டாம் - காற்று",
        noSprayingRain: "🧪 தெளிப்பு வேண்டாம் - மழை வரும்",
        sprayToday: "🧪 தெளிப்புக்கு நல்ல நாள்",
        noHarvestRain: "🚜 அறுவடை வேண்டாம் - ஈரம்",
        waitHarvestHumidity: "🚜 காத்திருங்கள் - அதிக ஈரப்பதம்",
        harvestToday: "🚜 அறுவடைக்கு சிறந்த நாள்",
        goodDayFarming: "விவசாயத்திற்கு நல்ல நாள்!",
        weatherFavorable: "வானிலை விவசாயத்திற்கு சாதகமானது",
        
        // Week Alerts
        rainyWeekAlert: "🌧️ மழை வாரம் வருகிறது",
        heatWaveAlert: "🔥 வெப்ப அலை எதிர்பார்க்கப்படுகிறது",
        coldNightAlert: "❄️ குளிர் இரவுகள் வருகின்றன",
        bestSprayingDay: "📅 தெளிப்புக்கு சிறந்த நாள்",
        bestHarvestingDay: "📅 அறுவடைக்கு சிறந்த நாள்",
        
        // Reasons
        rainExpected: "மழை எதிர்பார்க்கப்படுகிறது - நீரை சேமியுங்கள்!",
        rainTomorrow: "நாளை மழை - இயற்கை நீர்ப்பாசனம்!",
        goodConditions: "வறண்ட நிலை - பயிருக்கு நீர் தேவை",
        windyConditions: "காற்று தெளிப்பை பறக்கடிக்கும்",
        rainWashOff: "மழை மருந்தை கழுவிவிடும்",
        calmConditions: "அமைதியான வானிலை - தெளிப்பு ஒட்டும்",
        wetConditions: "ஈரமான பயிர் சேதமடையும்",
        highHumidity: "பனி ஆவியாகும் வரை காத்திருங்கள்",
        perfectConditions: "வறண்ட மற்றும் வெயில் - இப்போது அறுவடை செய்யுங்கள்!",
        multipleRainyDays: "வீட்டு வேலைகளை திட்டமிடுங்கள்",
        highTemperatures: "காலை/மாலை நீர் பாய்ச்சுங்கள்",
        frostRisk: "இரவில் பயிரை மூடுங்கள்",
        optimalConditions: "வானிலை சிறப்பாக இருக்கும்",
        dryConditions: "குறைந்த ஈரப்பதம் எதிர்பார்க்கப்படுகிறது",
        
        // Crop Tips
        highWaterCropDry: "உங்கள் பயிருக்கு அதிக நீர் தேவை. அடிக்கடி நீர் பாய்ச்சுங்கள்.",
        lowWaterCropRain: "கனமழை எதிர்பார்க்கப்படுகிறது. வடிகால் செய்யுங்கள்.",
        frostProtectionNeeded: "குளிர் இரவுகள் வருகின்றன! பயிரை மூடுங்கள்.",
        heatProtectionNeeded: "கடுமையான வெப்பம் வருகிறது. நிழல் கொடுத்து நீர் அதிகரிக்கவும்.",
        
        // Crops
        rice: "நெல்",
        wheat: "கோதுமை",
        corn: "சோளம்",
        cotton: "பருத்தி",
        sugarcane: "கரும்பு",
        tomato: "தக்காளி",
        potato: "உருளைக்கிழங்கு",
        onion: "வெங்காயம்",
        chili: "மிளகாய்",
        mango: "மாம்பழம்",
        banana: "வாழைப்பழம்",
        groundnut: "நிலக்கடலை"
    },
    
    kn: {
        // Welcome Modal
        welcomeTitle: "FarmGuard ಗೆ ಸುಸ್ವಾಗತ",
        welcomeSubtitle: "ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಹವಾಮಾನ ಸಹಾಯಕ",
        featureWeather: "ನೇರ ಹವಾಮಾನ",
        featureAlerts: "ಚಟುವಟಿಕೆ ಎಚ್ಚರಿಕೆಗಳು",
        featureFrost: "ಹಿಮ ಮುನ್ಸೂಚನೆ",
        getStarted: "ಪ್ರಾರಂಭಿಸಿ",
        
        // Greetings
        goodMorning: "🌅 ಶುಭೋದಯ, ರೈತ!",
        goodAfternoon: "☀️ ಶುಭ ಮಧ್ಯಾಹ್ನ, ರೈತ!",
        goodEvening: "🌇 ಶುಭ ಸಂಜೆ, ರೈತ!",
        goodNight: "🌙 ಶುಭ ರಾತ್ರಿ, ರೈತ!",
        
        // Location Section
        yourLocation: "ನಿಮ್ಮ ಸ್ಥಳ",
        selectLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        chooseOrGps: "ಕೆಳಗೆ ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ GPS ಬಳಸಿ",
        autoGps: "ಆಟೋ GPS",
        detectingLocation: "ಸ್ಥಳ ಪತ್ತೆಹಚ್ಚುತ್ತಿದೆ...",
        orTapRegion: "ಅಥವಾ ನಿಮ್ಮ ಪ್ರದೇಶವನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ",
        selectDistrict: "ನಿಮ್ಮ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        locationSet: "ಸ್ಥಳ ಸೆಟ್:",
        
        // Crop Section
        selectCrop: "ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        selected: "ಆಯ್ಕೆಮಾಡಿದ:",
        
        // Weather Alerts
        weatherAlerts: "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು",
        selectLocationCrop: "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಸ್ಥಳ ಮತ್ತು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        fetchingWeather: "ಹವಾಮಾನ ಡೇಟಾವನ್ನು ಪಡೆಯುತ್ತಿದೆ...",
        dataRefreshed: "ಡೇಟಾ ಯಶಸ್ವಿಯಾಗಿ ರಿಫ್ರೆಶ್ ಆಯಿತು!",
        refreshFailed: "ಡೇಟಾ ರಿಫ್ರೆಶ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ",
        temperature: "ತಾಪಮಾನ",
        humidity: "ತೇವಾಂಶ",
        windSpeed: "ಗಾಳಿಯ ವೇಗ",
        precipitation: "ಮಳೆ",
        condition: "ಸ್ಥಿತಿ",
        uvIndex: "UV ಸೂಚ್ಯಂಕ",
        summary: "ಸಾರಾಂಶ",
        suitable: "ಸೂಕ್ತ",
        notSuitable: "ಸೂಕ್ತವಲ್ಲ",
        
        // Weather Conditions
        sunny: "ಬಿಸಿಲು",
        cloudy: "ಮೋಡ",
        rainy: "ಮಳೆ",
        windy: "ಗಾಳಿ",
        stormy: "ಬಿರುಗಾಳಿ",
        
        // Activities
        todayRecommendations: "ಇಂದಿನ ಶಿಫಾರಸುಗಳು",
        irrigation: "ನೀರಾವರಿ",
        spraying: "ಸಿಂಪಡಣೆ (ಕೀಟನಾಶಕ/ಗೊಬ್ಬರ)",
        harvesting: "ಕೊಯ್ಲು",
        recommended: "ಶಿಫಾರಸು",
        notRecommended: "ಶಿಫಾರಸು ಮಾಡಲಾಗಿಲ್ಲ",
        bestTime: "ಉತ್ತಮ ಸಮಯ",
        
        // Frost Alert
        frostRiskAlert: "ಹಿಮ ಅಪಾಯ ಎಚ್ಚರಿಕೆ",
        frostProbability: "ಹಿಮ ಸಂಭಾವ್ಯತೆ",
        minimal: "ಕನಿಷ್ಠ",
        low: "ಕಡಿಮೆ",
        moderate: "ಮಧ್ಯಮ",
        high: "ಹೆಚ್ಚು",
        frostSensitive: "ಹಿಮ-ಸೂಕ್ಷ್ಮ. ಹೆಚ್ಚುವರಿ ಮುನ್ನೆಚ್ಚರಿಕೆ ತೆಗೆದುಕೊಳ್ಳಿ!",
        
        // Footer
        footerText: "FarmGuard - ನಿಮ್ಮ ಫಸಲನ್ನು ರಕ್ಷಿಸುತ್ತಿದೆ",
        poweredBy: "ಹವಾಮಾನ ಡೇಟಾ AccuWeather ಮೂಲಕ",
        
        // Day Names
        monday: "ಸೋಮವಾರ",
        tuesday: "ಮಂಗಳವಾರ",
        wednesday: "ಬುಧವಾರ",
        thursday: "ಗುರುವಾರ",
        friday: "ಶುಕ್ರವಾರ",
        saturday: "ಶನಿವಾರ",
        sunday: "ಭಾನುವಾರ",
        today: "ಇಂದು",
        tomorrow: "ನಾಳೆ",
        
        // Forecast Section
        sevenDayForecast: "7-ದಿನ ಮುನ್ಸೂಚನೆ",
        rainyDays: "ಮಳೆ ದಿನಗಳು",
        sunnyDays: "ಬಿಸಿಲು ದಿನಗಳು",
        avgTemp: "ಸರಾಸರಿ ತಾಪಮಾನ",
        
        // Smart Recommendations
        whatToDoToday: "ಇಂದು ಏನು ಮಾಡಬೇಕು",
        planYourWeek: "ವಾರವನ್ನು ಯೋಜಿಸಿ",
        tipsForYourCrop: "ನಿಮ್ಮ ಬೆಳೆಗೆ ಸಲಹೆಗಳು",
        
        // Today's Actions
        skipIrrigationToday: "💧 ಇಂದು ನೀರಾವರಿ ಬೇಡ",
        skipIrrigationRainTomorrow: "💧 ನೀರಾವರಿ ಅಗತ್ಯವಿಲ್ಲ",
        irrigateToday: "💧 ಇಂದು ನೀರು ಹಾಕಿ!",
        noSprayingWind: "🧪 ಸಿಂಪಡಣೆ ಬೇಡ - ಗಾಳಿ",
        noSprayingRain: "🧪 ಸಿಂಪಡಣೆ ಬೇಡ - ಮಳೆ ಬರುತ್ತದೆ",
        sprayToday: "🧪 ಸಿಂಪಡಣೆಗೆ ಒಳ್ಳೆಯ ದಿನ",
        noHarvestRain: "🚜 ಕೊಯ್ಲು ಬೇಡ - ಒದ್ದೆ",
        waitHarvestHumidity: "🚜 ಕಾಯಿರಿ - ಹೆಚ್ಚು ತೇವಾಂಶ",
        harvestToday: "🚜 ಕೊಯ್ಲಿಗೆ ಸೂಕ್ತ ದಿನ",
        goodDayFarming: "ಕೃಷಿಗೆ ಒಳ್ಳೆಯ ದಿನ!",
        weatherFavorable: "ಹವಾಮಾನ ಕೃಷಿಗೆ ಅನುಕೂಲ",
        
        // Week Alerts
        rainyWeekAlert: "🌧️ ಮಳೆ ವಾರ ಬರುತ್ತಿದೆ",
        heatWaveAlert: "🔥 ಶಾಖದ ಅಲೆ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ",
        coldNightAlert: "❄️ ತಂಪಾದ ರಾತ್ರಿಗಳು ಬರುತ್ತಿವೆ",
        bestSprayingDay: "📅 ಸಿಂಪಡಣೆಗೆ ಉತ್ತಮ ದಿನ",
        bestHarvestingDay: "📅 ಕೊಯ್ಲಿಗೆ ಉತ್ತಮ ದಿನ",
        
        // Reasons
        rainExpected: "ಮಳೆ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ - ನೀರು ಉಳಿಸಿ!",
        rainTomorrow: "ನಾಳೆ ಮಳೆ - ಸ್ವಾಭಾವಿಕ ನೀರಾವರಿ!",
        goodConditions: "ಒಣ ಸ್ಥಿತಿ - ಬೆಳೆಗೆ ನೀರು ಬೇಕು",
        windyConditions: "ಗಾಳಿ ಸಿಂಪಡಣೆ ಹಾರಿಸುತ್ತದೆ",
        rainWashOff: "ಮಳೆ ಔಷಧ ತೊಳೆದುಹಾಕುತ್ತದೆ",
        calmConditions: "ಶಾಂತ ಹವಾಮಾನ - ಸಿಂಪಡಣೆ ಅಂಟುತ್ತದೆ",
        wetConditions: "ಒದ್ದೆ ಬೆಳೆ ಹಾಳಾಗುತ್ತದೆ",
        highHumidity: "ಇಬ್ಬನಿ ಆವಿಯಾಗುವವರೆಗೆ ಕಾಯಿರಿ",
        perfectConditions: "ಒಣ ಮತ್ತು ಬಿಸಿಲು - ಈಗ ಕೊಯ್ಲು ಮಾಡಿ!",
        multipleRainyDays: "ಮನೆ ಕೆಲಸ ಯೋಜಿಸಿ",
        highTemperatures: "ಬೆಳಿಗ್ಗೆ/ಸಂಜೆ ನೀರು ಹಾಕಿ",
        frostRisk: "ರಾತ್ರಿ ಬೆಳೆ ಮುಚ್ಚಿ",
        optimalConditions: "ಹವಾಮಾನ ಉತ್ತಮವಾಗಿರುತ್ತದೆ",
        dryConditions: "ಕಡಿಮೆ ತೇವಾಂಶ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ",
        
        // Crop Tips
        highWaterCropDry: "ನಿಮ್ಮ ಬೆಳೆಗೆ ಹೆಚ್ಚು ನೀರು ಬೇಕು. ಆಗಾಗ್ಗೆ ನೀರು ಹಾಕಿ.",
        lowWaterCropRain: "ಭಾರೀ ಮಳೆ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ. ನೀರು ಬಸಿಯುವುದನ್ನು ನೋಡಿಕೊಳ್ಳಿ.",
        frostProtectionNeeded: "ತಂಪಾದ ರಾತ್ರಿಗಳು ಬರುತ್ತಿವೆ! ಬೆಳೆ ಮುಚ್ಚಿ.",
        heatProtectionNeeded: "ತೀವ್ರ ಶಾಖ ಬರುತ್ತಿದೆ. ನೆರಳು ಕೊಟ್ಟು ನೀರು ಹೆಚ್ಚಿಸಿ.",
        
        // Crops
        rice: "ಭತ್ತ",
        wheat: "ಗೋಧಿ",
        corn: "ಜೋಳ",
        cotton: "ಹತ್ತಿ",
        sugarcane: "ಕಬ್ಬು",
        tomato: "ಟೊಮೇಟೊ",
        potato: "ಆಲೂಗಡ್ಡೆ",
        onion: "ಈರುಳ್ಳಿ",
        chili: "ಮೆಣಸಿನಕಾಯಿ",
        mango: "ಮಾವು",
        banana: "ಬಾಳೆಹಣ್ಣು",
        groundnut: "ಕಡಲೆಕಾಯಿ"
    },
    
    mr: {
        // Welcome Modal
        welcomeTitle: "FarmGuard मध्ये स्वागत",
        welcomeSubtitle: "तुमचा स्मार्ट शेती हवामान सहाय्यक",
        featureWeather: "लाइव्ह हवामान",
        featureAlerts: "क्रियाकलाप अलर्ट",
        featureFrost: "दंव अंदाज",
        getStarted: "सुरू करा",
        
        // Greetings
        goodMorning: "🌅 सुप्रभात, शेतकरी!",
        goodAfternoon: "☀️ शुभ दुपार, शेतकरी!",
        goodEvening: "🌇 शुभ संध्याकाळ, शेतकरी!",
        goodNight: "🌙 शुभ रात्री, शेतकरी!",
        
        // Location Section
        yourLocation: "तुमचे स्थान",
        selectLocation: "तुमचे स्थान निवडा",
        chooseOrGps: "खाली निवडा किंवा GPS वापरा",
        autoGps: "ऑटो GPS",
        detectingLocation: "स्थान शोधत आहे...",
        orTapRegion: "किंवा तुमच्या प्रदेशावर टॅप करा",
        selectDistrict: "तुमचा जिल्हा निवडा",
        locationSet: "स्थान सेट:",
        
        // Crop Section
        selectCrop: "तुमचे पीक निवडा",
        selected: "निवडले:",
        
        // Weather Alerts
        weatherAlerts: "हवामान अलर्ट",
        selectLocationCrop: "हवामान अलर्ट पाहण्यासाठी स्थान आणि पीक निवडा",
        fetchingWeather: "हवामान डेटा आणत आहे...",
        dataRefreshed: "डेटा यशस्वीरित्या रिफ्रेश झाला!",
        refreshFailed: "डेटा रिफ्रेश करण्यात अयशस्वी",
        temperature: "तापमान",
        humidity: "आर्द्रता",
        windSpeed: "वाऱ्याचा वेग",
        precipitation: "पाऊस",
        condition: "स्थिती",
        uvIndex: "UV निर्देशांक",
        summary: "सारांश",
        suitable: "योग्य",
        notSuitable: "अयोग्य",
        
        // Weather Conditions
        sunny: "ऊन",
        cloudy: "ढगाळ",
        rainy: "पाऊस",
        windy: "वारा",
        stormy: "वादळ",
        
        // Activities
        todayRecommendations: "आजच्या शिफारशी",
        irrigation: "सिंचन",
        spraying: "फवारणी (कीटकनाशके/खते)",
        harvesting: "कापणी",
        recommended: "शिफारस",
        notRecommended: "शिफारस नाही",
        bestTime: "उत्तम वेळ",
        
        // Frost Alert
        frostRiskAlert: "दंव धोका अलर्ट",
        frostProbability: "दंव संभाव्यता",
        minimal: "किमान",
        low: "कमी",
        moderate: "मध्यम",
        high: "उच्च",
        frostSensitive: "दंव-संवेदनशील आहे. अतिरिक्त खबरदारी घ्या!",
        
        // Footer
        footerText: "FarmGuard - तुमच्या पिकाचे रक्षण करत आहे",
        poweredBy: "हवामान डेटा AccuWeather द्वारे",
        
        // Day Names
        monday: "सोमवार",
        tuesday: "मंगळवार",
        wednesday: "बुधवार",
        thursday: "गुरुवार",
        friday: "शुक्रवार",
        saturday: "शनिवार",
        sunday: "रविवार",
        today: "आज",
        tomorrow: "उद्या",
        
        // Forecast Section
        sevenDayForecast: "7-दिवसांचा अंदाज",
        rainyDays: "पावसाचे दिवस",
        sunnyDays: "उन्हाचे दिवस",
        avgTemp: "सरासरी तापमान",
        
        // Smart Recommendations
        whatToDoToday: "आज काय करावे",
        planYourWeek: "आठवड्याचे नियोजन",
        tipsForYourCrop: "तुमच्या पिकासाठी टिप्स",
        
        // Today's Actions
        skipIrrigationToday: "💧 आज सिंचन करू नका",
        skipIrrigationRainTomorrow: "💧 सिंचनाची गरज नाही",
        irrigateToday: "💧 आज पाणी द्या!",
        noSprayingWind: "🧪 फवारणी नको - वारा",
        noSprayingRain: "🧪 फवारणी नको - पाऊस येईल",
        sprayToday: "🧪 फवारणीसाठी चांगला दिवस",
        noHarvestRain: "🚜 कापणी नको - ओले",
        waitHarvestHumidity: "🚜 थांबा - जास्त आर्द्रता",
        harvestToday: "🚜 कापणीसाठी उत्तम दिवस",
        goodDayFarming: "शेतीसाठी चांगला दिवस!",
        weatherFavorable: "हवामान शेतीसाठी अनुकूल आहे",
        
        // Week Alerts
        rainyWeekAlert: "🌧️ पावसाचा आठवडा येत आहे",
        heatWaveAlert: "🔥 उष्णतेची लाट अपेक्षित",
        coldNightAlert: "❄️ थंड रात्री येत आहेत",
        bestSprayingDay: "📅 फवारणीसाठी सर्वोत्तम दिवस",
        bestHarvestingDay: "📅 कापणीसाठी सर्वोत्तम दिवस",
        
        // Reasons
        rainExpected: "पाऊस अपेक्षित - पाणी वाचवा!",
        rainTomorrow: "उद्या पाऊस - नैसर्गिक सिंचन!",
        goodConditions: "कोरडे आहे - पिकाला पाणी हवे",
        windyConditions: "वारा फवारणी उडवेल",
        rainWashOff: "पाऊस औषध धुवून टाकेल",
        calmConditions: "शांत हवामान - फवारणी चिकटेल",
        wetConditions: "ओले पीक खराब होईल",
        highHumidity: "दव सुकेपर्यंत थांबा",
        perfectConditions: "कोरडे आणि ऊन - आता कापा!",
        multipleRainyDays: "घरातील कामाचे नियोजन करा",
        highTemperatures: "सकाळी/संध्याकाळी पाणी द्या",
        frostRisk: "रात्री पीक झाका",
        optimalConditions: "हवामान उत्तम असेल",
        dryConditions: "कमी आर्द्रता अपेक्षित",
        
        // Crop Tips
        highWaterCropDry: "तुमच्या पिकाला जास्त पाणी लागते. वारंवार पाणी द्या.",
        lowWaterCropRain: "जोरदार पाऊस अपेक्षित. पाणी निचरा करा.",
        frostProtectionNeeded: "थंड रात्री येत आहेत! पीक झाका.",
        heatProtectionNeeded: "अत्यंत उष्णता येत आहे. सावली द्या आणि पाणी वाढवा.",
        
        // Crops
        rice: "तांदूळ",
        wheat: "गहू",
        corn: "मका",
        cotton: "कापूस",
        sugarcane: "ऊस",
        tomato: "टोमॅटो",
        potato: "बटाटा",
        onion: "कांदा",
        chili: "मिरची",
        mango: "आंबा",
        banana: "केळे",
        groundnut: "भुईमूग"
    },
    
    pa: {
        // Welcome Modal
        welcomeTitle: "FarmGuard ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ",
        welcomeSubtitle: "ਤੁਹਾਡਾ ਸਮਾਰਟ ਖੇਤੀ ਮੌਸਮ ਸਹਾਇਕ",
        featureWeather: "ਲਾਈਵ ਮੌਸਮ",
        featureAlerts: "ਗਤੀਵਿਧੀ ਅਲਰਟ",
        featureFrost: "ਕੋਰੇ ਦੀ ਭਵਿੱਖਬਾਣੀ",
        getStarted: "ਸ਼ੁਰੂ ਕਰੋ",
        
        // Greetings
        goodMorning: "🌅 ਸ਼ੁਭ ਸਵੇਰ, ਕਿਸਾਨ!",
        goodAfternoon: "☀️ ਸ਼ੁਭ ਦੁਪਹਿਰ, ਕਿਸਾਨ!",
        goodEvening: "🌇 ਸ਼ੁਭ ਸ਼ਾਮ, ਕਿਸਾਨ!",
        goodNight: "🌙 ਸ਼ੁਭ ਰਾਤ, ਕਿਸਾਨ!",
        
        // Location Section
        yourLocation: "ਤੁਹਾਡਾ ਟਿਕਾਣਾ",
        selectLocation: "ਆਪਣਾ ਟਿਕਾਣਾ ਚੁਣੋ",
        chooseOrGps: "ਹੇਠਾਂ ਚੁਣੋ ਜਾਂ GPS ਵਰਤੋ",
        autoGps: "ਆਟੋ GPS",
        detectingLocation: "ਟਿਕਾਣਾ ਲੱਭ ਰਿਹਾ ਹੈ...",
        orTapRegion: "ਜਾਂ ਆਪਣੇ ਖੇਤਰ ਤੇ ਟੈਪ ਕਰੋ",
        selectDistrict: "ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ",
        locationSet: "ਟਿਕਾਣਾ ਸੈੱਟ:",
        
        // Crop Section
        selectCrop: "ਆਪਣੀ ਫ਼ਸਲ ਚੁਣੋ",
        selected: "ਚੁਣਿਆ:",
        
        // Weather Alerts
        weatherAlerts: "ਮੌਸਮ ਅਲਰਟ",
        selectLocationCrop: "ਮੌਸਮ ਅਲਰਟ ਦੇਖਣ ਲਈ ਟਿਕਾਣਾ ਅਤੇ ਫ਼ਸਲ ਚੁਣੋ",
        fetchingWeather: "ਮੌਸਮ ਡਾਟਾ ਲੈ ਰਿਹਾ ਹੈ...",
        dataRefreshed: "ਡਾਟਾ ਸਫਲਤਾਪੂਰਵਕ ਰਿਫ੍ਰੈਸ਼ ਹੋ ਗਿਆ!",
        refreshFailed: "ਡਾਟਾ ਰਿਫ੍ਰੈਸ਼ ਕਰਨ ਵਿੱਚ ਅਸਫਲ",
        temperature: "ਤਾਪਮਾਨ",
        humidity: "ਨਮੀ",
        windSpeed: "ਹਵਾ ਦੀ ਗਤੀ",
        precipitation: "ਮੀਂਹ",
        condition: "ਸਥਿਤੀ",
        uvIndex: "UV ਸੂਚਕ",
        summary: "ਸਾਰ",
        suitable: "ਢੁਕਵਾਂ",
        notSuitable: "ਢੁਕਵਾਂ ਨਹੀਂ",
        
        // Weather Conditions
        sunny: "ਧੁੱਪ",
        cloudy: "ਬੱਦਲਵਾਈ",
        rainy: "ਮੀਂਹ",
        windy: "ਹਵਾਦਾਰ",
        stormy: "ਤੂਫ਼ਾਨ",
        
        // Activities
        todayRecommendations: "ਅੱਜ ਦੀਆਂ ਸਿਫ਼ਾਰਸ਼ਾਂ",
        irrigation: "ਸਿੰਚਾਈ",
        spraying: "ਛਿੜਕਾਅ (ਕੀਟਨਾਸ਼ਕ/ਖਾਦ)",
        harvesting: "ਵਾਢੀ",
        recommended: "ਸਿਫ਼ਾਰਸ਼",
        notRecommended: "ਸਿਫ਼ਾਰਸ਼ ਨਹੀਂ",
        bestTime: "ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ",
        
        // Frost Alert
        frostRiskAlert: "ਕੋਰੇ ਦਾ ਖ਼ਤਰਾ ਅਲਰਟ",
        frostProbability: "ਕੋਰੇ ਦੀ ਸੰਭਾਵਨਾ",
        minimal: "ਘੱਟੋ-ਘੱਟ",
        low: "ਘੱਟ",
        moderate: "ਦਰਮਿਆਨਾ",
        high: "ਉੱਚ",
        frostSensitive: "ਕੋਰੇ-ਸੰਵੇਦਨਸ਼ੀਲ ਹੈ। ਵਾਧੂ ਸਾਵਧਾਨੀ ਵਰਤੋ!",
        
        // Footer
        footerText: "FarmGuard - ਤੁਹਾਡੀ ਫ਼ਸਲ ਦੀ ਰੱਖਿਆ",
        poweredBy: "ਮੌਸਮ ਡਾਟਾ AccuWeather ਦੁਆਰਾ",
        
        // Day Names
        monday: "ਸੋਮਵਾਰ",
        tuesday: "ਮੰਗਲਵਾਰ",
        wednesday: "ਬੁੱਧਵਾਰ",
        thursday: "ਵੀਰਵਾਰ",
        friday: "ਸ਼ੁੱਕਰਵਾਰ",
        saturday: "ਸ਼ਨੀਵਾਰ",
        sunday: "ਐਤਵਾਰ",
        today: "ਅੱਜ",
        tomorrow: "ਕੱਲ੍ਹ",
        
        // Forecast Section
        sevenDayForecast: "7-ਦਿਨਾਂ ਦਾ ਅੰਦਾਜ਼ਾ",
        rainyDays: "ਮੀਂਹ ਦੇ ਦਿਨ",
        sunnyDays: "ਧੁੱਪ ਦੇ ਦਿਨ",
        avgTemp: "ਔਸਤ ਤਾਪਮਾਨ",
        
        // Smart Recommendations
        whatToDoToday: "ਅੱਜ ਕੀ ਕਰਨਾ ਹੈ",
        planYourWeek: "ਹਫ਼ਤੇ ਦੀ ਯੋਜਨਾ",
        tipsForYourCrop: "ਤੁਹਾਡੀ ਫ਼ਸਲ ਲਈ ਟਿਪਸ",
        
        // Today's Actions
        skipIrrigationToday: "💧 ਅੱਜ ਸਿੰਚਾਈ ਨਾ ਕਰੋ",
        skipIrrigationRainTomorrow: "💧 ਸਿੰਚਾਈ ਦੀ ਲੋੜ ਨਹੀਂ",
        irrigateToday: "💧 ਅੱਜ ਪਾਣੀ ਦਿਓ!",
        noSprayingWind: "🧪 ਛਿੜਕਾਅ ਨਾ ਕਰੋ - ਹਵਾ",
        noSprayingRain: "🧪 ਛਿੜਕਾਅ ਨਾ ਕਰੋ - ਮੀਂਹ ਆਵੇਗਾ",
        sprayToday: "🧪 ਛਿੜਕਾਅ ਲਈ ਚੰਗਾ ਦਿਨ",
        noHarvestRain: "🚜 ਵਾਢੀ ਨਾ ਕਰੋ - ਗਿੱਲਾ",
        waitHarvestHumidity: "🚜 ਉਡੀਕ ਕਰੋ - ਨਮੀ ਜ਼ਿਆਦਾ",
        harvestToday: "🚜 ਵਾਢੀ ਲਈ ਵਧੀਆ ਦਿਨ",
        goodDayFarming: "ਖੇਤੀ ਲਈ ਚੰਗਾ ਦਿਨ!",
        weatherFavorable: "ਮੌਸਮ ਖੇਤੀ ਲਈ ਅਨੁਕੂਲ ਹੈ",
        
        // Week Alerts
        rainyWeekAlert: "🌧️ ਮੀਂਹ ਦਾ ਹਫ਼ਤਾ ਆ ਰਿਹਾ",
        heatWaveAlert: "🔥 ਗਰਮੀ ਦੀ ਲਹਿਰ ਆਵੇਗੀ",
        coldNightAlert: "❄️ ਠੰਢੀਆਂ ਰਾਤਾਂ ਆ ਰਹੀਆਂ",
        bestSprayingDay: "📅 ਛਿੜਕਾਅ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਦਿਨ",
        bestHarvestingDay: "📅 ਵਾਢੀ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਦਿਨ",
        
        // Reasons
        rainExpected: "ਮੀਂਹ ਆਵੇਗਾ - ਪਾਣੀ ਬਚਾਓ!",
        rainTomorrow: "ਕੱਲ੍ਹ ਮੀਂਹ - ਕੁਦਰਤੀ ਸਿੰਚਾਈ!",
        goodConditions: "ਸੁੱਕਾ ਹੈ - ਫ਼ਸਲ ਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ",
        windyConditions: "ਹਵਾ ਸਪਰੇਅ ਉਡਾ ਦੇਵੇਗੀ",
        rainWashOff: "ਮੀਂਹ ਦਵਾਈ ਧੋ ਦੇਵੇਗਾ",
        calmConditions: "ਸ਼ਾਂਤ ਮੌਸਮ - ਸਪਰੇਅ ਲੱਗੇਗੀ",
        wetConditions: "ਗਿੱਲੀ ਫ਼ਸਲ ਖ਼ਰਾਬ ਹੋਵੇਗੀ",
        highHumidity: "ਤ੍ਰੇਲ ਸੁੱਕਣ ਤੱਕ ਉਡੀਕੋ",
        perfectConditions: "ਸੁੱਕਾ ਤੇ ਧੁੱਪ - ਹੁਣੇ ਕੱਟੋ!",
        multipleRainyDays: "ਘਰ ਦੇ ਕੰਮ ਦੀ ਯੋਜਨਾ ਬਣਾਓ",
        highTemperatures: "ਸਵੇਰੇ/ਸ਼ਾਮ ਪਾਣੀ ਦਿਓ",
        frostRisk: "ਰਾਤ ਨੂੰ ਫ਼ਸਲ ਢੱਕੋ",
        optimalConditions: "ਮੌਸਮ ਵਧੀਆ ਹੋਵੇਗਾ",
        dryConditions: "ਘੱਟ ਨਮੀ ਹੋਵੇਗੀ",
        
        // Crop Tips
        highWaterCropDry: "ਤੁਹਾਡੀ ਫ਼ਸਲ ਨੂੰ ਵੱਧ ਪਾਣੀ ਚਾਹੀਦਾ। ਵਾਰ-ਵਾਰ ਪਾਣੀ ਦਿਓ।",
        lowWaterCropRain: "ਭਾਰੀ ਮੀਂਹ ਆਵੇਗਾ। ਪਾਣੀ ਨਿਕਾਸ ਦਾ ਧਿਆਨ ਰੱਖੋ।",
        frostProtectionNeeded: "ਠੰਢੀਆਂ ਰਾਤਾਂ ਆ ਰਹੀਆਂ! ਫ਼ਸਲ ਢੱਕੋ।",
        heatProtectionNeeded: "ਬਹੁਤ ਗਰਮੀ ਆ ਰਹੀ। ਛਾਂ ਦਿਓ ਤੇ ਪਾਣੀ ਵਧਾਓ।",
        
        // Crops
        rice: "ਝੋਨਾ",
        wheat: "ਕਣਕ",
        corn: "ਮੱਕੀ",
        cotton: "ਕਪਾਹ",
        sugarcane: "ਗੰਨਾ",
        tomato: "ਟਮਾਟਰ",
        potato: "ਆਲੂ",
        onion: "ਪਿਆਜ਼",
        chili: "ਮਿਰਚ",
        mango: "ਅੰਬ",
        banana: "ਕੇਲਾ",
        groundnut: "ਮੂੰਗਫਲੀ"
    },
    
    bn: {
        // Welcome Modal
        welcomeTitle: "FarmGuard-এ স্বাগতম",
        welcomeSubtitle: "আপনার স্মার্ট কৃষি আবহাওয়া সহায়ক",
        featureWeather: "লাইভ আবহাওয়া",
        featureAlerts: "কার্যকলাপ সতর্কতা",
        featureFrost: "তুষার পূর্বাভাস",
        getStarted: "শুরু করুন",
        
        // Greetings
        goodMorning: "🌅 সুপ্রভাত, কৃষক!",
        goodAfternoon: "☀️ শুভ দুপুর, কৃষক!",
        goodEvening: "🌇 শুভ সন্ধ্যা, কৃষক!",
        goodNight: "🌙 শুভ রাত্রি, কৃষক!",
        
        // Location Section
        yourLocation: "আপনার অবস্থান",
        selectLocation: "আপনার অবস্থান নির্বাচন করুন",
        chooseOrGps: "নীচে বেছে নিন অথবা GPS ব্যবহার করুন",
        autoGps: "অটো GPS",
        detectingLocation: "অবস্থান সনাক্ত করা হচ্ছে...",
        orTapRegion: "অথবা আপনার এলাকায় ট্যাপ করুন",
        selectDistrict: "আপনার জেলা নির্বাচন করুন",
        locationSet: "অবস্থান সেট:",
        
        // Crop Section
        selectCrop: "আপনার ফসল নির্বাচন করুন",
        selected: "নির্বাচিত:",
        
        // Weather Alerts
        weatherAlerts: "আবহাওয়া সতর্কতা",
        selectLocationCrop: "আবহাওয়া সতর্কতা দেখতে অবস্থান এবং ফসল নির্বাচন করুন",
        fetchingWeather: "আবহাওয়া ডেটা আনা হচ্ছে...",
        dataRefreshed: "ডেটা সফলভাবে রিফ্রেশ হয়েছে!",
        refreshFailed: "ডেটা রিফ্রেশ করতে ব্যর্থ",
        temperature: "তাপমাত্রা",
        humidity: "আর্দ্রতা",
        windSpeed: "বায়ুর গতি",
        precipitation: "বৃষ্টিপাত",
        condition: "অবস্থা",
        uvIndex: "UV সূচক",
        summary: "সারসংক্ষেপ",
        suitable: "উপযুক্ত",
        notSuitable: "অনুপযুক্ত",
        
        // Weather Conditions
        sunny: "রোদ",
        cloudy: "মেঘলা",
        rainy: "বৃষ্টি",
        windy: "বাতাস",
        stormy: "ঝড়",
        
        // Activities
        todayRecommendations: "আজকের সুপারিশ",
        irrigation: "সেচ",
        spraying: "স্প্রে করা (কীটনাশক/সার)",
        harvesting: "ফসল কাটা",
        recommended: "সুপারিশ করা হয়েছে",
        notRecommended: "সুপারিশ করা হয় না",
        bestTime: "সেরা সময়",
        
        // Frost Alert
        frostRiskAlert: "তুষার ঝুঁকি সতর্কতা",
        frostProbability: "তুষার সম্ভাবনা",
        minimal: "সর্বনিম্ন",
        low: "কম",
        moderate: "মাঝারি",
        high: "উচ্চ",
        frostSensitive: "তুষার-সংবেদনশীল। অতিরিক্ত সতর্কতা অবলম্বন করুন!",
        
        // Footer
        footerText: "FarmGuard - আপনার ফসল রক্ষা করছে",
        poweredBy: "আবহাওয়া ডেটা AccuWeather দ্বারা",
        
        // Day Names
        monday: "সোমবার",
        tuesday: "মঙ্গলবার",
        wednesday: "বুধবার",
        thursday: "বৃহস্পতিবার",
        friday: "শুক্রবার",
        saturday: "শনিবার",
        sunday: "রবিবার",
        today: "আজ",
        tomorrow: "আগামীকাল",
        
        // Forecast Section
        sevenDayForecast: "৭-দিনের পূর্বাভাস",
        rainyDays: "বৃষ্টির দিন",
        sunnyDays: "রোদের দিন",
        avgTemp: "গড় তাপমাত্রা",
        
        // Smart Recommendations
        whatToDoToday: "আজ কী করবেন",
        planYourWeek: "সপ্তাহের পরিকল্পনা",
        tipsForYourCrop: "আপনার ফসলের জন্য টিপস",
        
        // Today's Actions
        skipIrrigationToday: "💧 আজ সেচ দেবেন না",
        skipIrrigationRainTomorrow: "💧 সেচের প্রয়োজন নেই",
        irrigateToday: "💧 আজ জল দিন!",
        noSprayingWind: "🧪 স্প্রে করবেন না - বাতাস",
        noSprayingRain: "🧪 স্প্রে করবেন না - বৃষ্টি আসবে",
        sprayToday: "🧪 স্প্রে করার জন্য ভালো দিন",
        noHarvestRain: "🚜 ফসল কাটবেন না - ভেজা",
        waitHarvestHumidity: "🚜 অপেক্ষা করুন - বেশি আর্দ্রতা",
        harvestToday: "🚜 ফসল কাটার জন্য উপযুক্ত দিন",
        goodDayFarming: "কৃষির জন্য ভালো দিন!",
        weatherFavorable: "আবহাওয়া কৃষির জন্য অনুকূল",
        
        // Week Alerts
        rainyWeekAlert: "🌧️ বৃষ্টির সপ্তাহ আসছে",
        heatWaveAlert: "🔥 তাপপ্রবাহ আসছে",
        coldNightAlert: "❄️ ঠান্ডা রাত আসছে",
        bestSprayingDay: "📅 স্প্রে করার সেরা দিন",
        bestHarvestingDay: "📅 ফসল কাটার সেরা দিন",
        
        // Reasons
        rainExpected: "বৃষ্টি হবে - জল বাঁচান!",
        rainTomorrow: "আগামীকাল বৃষ্টি - প্রাকৃতিক সেচ!",
        goodConditions: "শুকনো - ফসলে জল দরকার",
        windyConditions: "বাতাস স্প্রে উড়িয়ে দেবে",
        rainWashOff: "বৃষ্টি ওষুধ ধুয়ে ফেলবে",
        calmConditions: "শান্ত আবহাওয়া - স্প্রে লাগবে",
        wetConditions: "ভেজা ফসল নষ্ট হবে",
        highHumidity: "শিশির শুকানো পর্যন্ত অপেক্ষা করুন",
        perfectConditions: "শুকনো ও রোদ - এখনই কাটুন!",
        multipleRainyDays: "বাড়ির কাজের পরিকল্পনা করুন",
        highTemperatures: "সকালে/সন্ধ্যায় জল দিন",
        frostRisk: "রাতে ফসল ঢেকে দিন",
        optimalConditions: "আবহাওয়া ভালো থাকবে",
        dryConditions: "কম আর্দ্রতা থাকবে",
        
        // Crop Tips
        highWaterCropDry: "আপনার ফসলে বেশি জল দরকার। বারবার জল দিন।",
        lowWaterCropRain: "ভারী বৃষ্টি আসছে। জল নিষ্কাশনের ব্যবস্থা করুন।",
        frostProtectionNeeded: "ঠান্ডা রাত আসছে! ফসল ঢেকে দিন।",
        heatProtectionNeeded: "প্রচণ্ড গরম আসছে। ছায়া দিন ও জল বাড়ান।",
        
        // Crops
        rice: "ধান",
        wheat: "গম",
        corn: "ভুট্টা",
        cotton: "তুলা",
        sugarcane: "আখ",
        tomato: "টমেটো",
        potato: "আলু",
        onion: "পেঁয়াজ",
        chili: "মরিচ",
        mango: "আম",
        banana: "কলা",
        groundnut: "চিনাবাদাম"
    }
};

// Region names in different languages
const regionTranslations = {
    en: {
        telangana: "Telangana", andhra: "Andhra Pradesh", karnataka: "Karnataka",
        tamil: "Tamil Nadu", maharashtra: "Maharashtra", punjab: "Punjab",
        rajasthan: "Rajasthan", gujarat: "Gujarat", mp: "Madhya Pradesh",
        up: "Uttar Pradesh", bihar: "Bihar", wb: "West Bengal"
    },
    hi: {
        telangana: "तेलंगाना", andhra: "आंध्र प्रदेश", karnataka: "कर्नाटक",
        tamil: "तमिलनाडु", maharashtra: "महाराष्ट्र", punjab: "पंजाब",
        rajasthan: "राजस्थान", gujarat: "गुजरात", mp: "मध्य प्रदेश",
        up: "उत्तर प्रदेश", bihar: "बिहार", wb: "पश्चिम बंगाल"
    },
    te: {
        telangana: "తెలంగాణ", andhra: "ఆంధ్రప్రదేశ్", karnataka: "కర్ణాటక",
        tamil: "తమిళనాడు", maharashtra: "మహారాష్ట్ర", punjab: "పంజాబ్",
        rajasthan: "రాజస్థాన్", gujarat: "గుజరాత్", mp: "మధ్యప్రదేశ్",
        up: "ఉత్తరప్రదేశ్", bihar: "బీహార్", wb: "పశ్చిమ బెంగాల్"
    },
    ta: {
        telangana: "தெலங்கானா", andhra: "ஆந்திரா", karnataka: "கர்நாடகா",
        tamil: "தமிழ்நாடு", maharashtra: "மகாராஷ்டிரா", punjab: "பஞ்சாப்",
        rajasthan: "ராஜஸ்தான்", gujarat: "குஜராத்", mp: "மத்தியப் பிரதேசம்",
        up: "உத்தரப் பிரதேசம்", bihar: "பீகார்", wb: "மேற்கு வங்காளம்"
    },
    kn: {
        telangana: "ತೆಲಂಗಾಣ", andhra: "ಆಂಧ್ರಪ್ರದೇಶ", karnataka: "ಕರ್ನಾಟಕ",
        tamil: "ತಮಿಳುನಾಡು", maharashtra: "ಮಹಾರಾಷ್ಟ್ರ", punjab: "ಪಂಜಾಬ್",
        rajasthan: "ರಾಜಸ್ಥಾನ", gujarat: "ಗುಜರಾತ್", mp: "ಮಧ್ಯಪ್ರದೇಶ",
        up: "ಉತ್ತರಪ್ರದೇಶ", bihar: "ಬಿಹಾರ", wb: "ಪಶ್ಚಿಮ ಬಂಗಾಳ"
    },
    mr: {
        telangana: "तेलंगणा", andhra: "आंध्र प्रदेश", karnataka: "कर्नाटक",
        tamil: "तामिळनाडू", maharashtra: "महाराष्ट्र", punjab: "पंजाब",
        rajasthan: "राजस्थान", gujarat: "गुजरात", mp: "मध्य प्रदेश",
        up: "उत्तर प्रदेश", bihar: "बिहार", wb: "पश्चिम बंगाल"
    },
    pa: {
        telangana: "ਤੇਲੰਗਾਨਾ", andhra: "ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼", karnataka: "ਕਰਨਾਟਕ",
        tamil: "ਤਾਮਿਲਨਾਡੂ", maharashtra: "ਮਹਾਰਾਸ਼ਟਰ", punjab: "ਪੰਜਾਬ",
        rajasthan: "ਰਾਜਸਥਾਨ", gujarat: "ਗੁਜਰਾਤ", mp: "ਮੱਧ ਪ੍ਰਦੇਸ਼",
        up: "ਉੱਤਰ ਪ੍ਰਦੇਸ਼", bihar: "ਬਿਹਾਰ", wb: "ਪੱਛਮੀ ਬੰਗਾਲ"
    },
    bn: {
        telangana: "তেলেঙ্গানা", andhra: "অন্ধ্রপ্রদেশ", karnataka: "কর্ণাটক",
        tamil: "তামিলনাড়ু", maharashtra: "মহারাষ্ট্র", punjab: "পাঞ্জাব",
        rajasthan: "রাজস্থান", gujarat: "গুজরাট", mp: "মধ্যপ্রদেশ",
        up: "উত্তরপ্রদেশ", bihar: "বিহার", wb: "পশ্চিমবঙ্গ"
    }
};

// District names in different languages
const districtTranslations = {
    en: {
        // Telangana
        hyderabad: "Hyderabad", warangal: "Warangal", karimnagar: "Karimnagar",
        nizamabad: "Nizamabad", khammam: "Khammam", nalgonda: "Nalgonda",
        adilabad: "Adilabad", medak: "Medak", mahbubnagar: "Mahbubnagar", sangareddy: "Sangareddy",
        // Andhra Pradesh
        vijayawada: "Vijayawada", visakhapatnam: "Visakhapatnam", guntur: "Guntur",
        nellore: "Nellore", kurnool: "Kurnool", tirupati: "Tirupati",
        // Karnataka
        bangalore: "Bangalore", mysore: "Mysore", hubli: "Hubli",
        belgaum: "Belgaum", mangalore: "Mangalore", davangere: "Davangere",
        // Tamil Nadu
        chennai: "Chennai", coimbatore: "Coimbatore", madurai: "Madurai",
        trichy: "Trichy", salem: "Salem", tirunelveli: "Tirunelveli",
        // Maharashtra
        mumbai: "Mumbai", pune: "Pune", nagpur: "Nagpur",
        nashik: "Nashik", aurangabad: "Aurangabad", kolhapur: "Kolhapur",
        // Punjab
        amritsar: "Amritsar", ludhiana: "Ludhiana", jalandhar: "Jalandhar",
        patiala: "Patiala", bathinda: "Bathinda", mohali: "Mohali",
        // Rajasthan
        jaipur: "Jaipur", jodhpur: "Jodhpur", udaipur: "Udaipur",
        kota: "Kota", ajmer: "Ajmer", bikaner: "Bikaner",
        // Gujarat
        ahmedabad: "Ahmedabad", surat: "Surat", vadodara: "Vadodara",
        rajkot: "Rajkot", bhavnagar: "Bhavnagar", junagadh: "Junagadh",
        // Madhya Pradesh
        bhopal: "Bhopal", indore: "Indore", gwalior: "Gwalior",
        jabalpur: "Jabalpur", ujjain: "Ujjain", rewa: "Rewa",
        // Uttar Pradesh
        lucknow: "Lucknow", kanpur: "Kanpur", varanasi: "Varanasi",
        agra: "Agra", prayagraj: "Prayagraj", meerut: "Meerut",
        // Bihar
        patna: "Patna", gaya: "Gaya", muzaffarpur: "Muzaffarpur",
        bhagalpur: "Bhagalpur", darbhanga: "Darbhanga", purnia: "Purnia",
        // West Bengal
        kolkata: "Kolkata", howrah: "Howrah", durgapur: "Durgapur",
        siliguri: "Siliguri", asansol: "Asansol", kharagpur: "Kharagpur"
    },
    hi: {
        // Telangana
        hyderabad: "हैदराबाद", warangal: "वारंगल", karimnagar: "करीमनगर",
        nizamabad: "निज़ामाबाद", khammam: "खम्मम", nalgonda: "नलगोंडा",
        adilabad: "आदिलाबाद", medak: "मेडक", mahbubnagar: "महबूबनगर", sangareddy: "संगारेड्डी",
        // Andhra Pradesh
        vijayawada: "विजयवाड़ा", visakhapatnam: "विशाखापट्टनम", guntur: "गुंटूर",
        nellore: "नेल्लोर", kurnool: "कुर्नूल", tirupati: "तिरुपति",
        // Karnataka
        bangalore: "बैंगलोर", mysore: "मैसूर", hubli: "हुबली",
        belgaum: "बेलगाम", mangalore: "मैंगलोर", davangere: "दावणगेरे",
        // Tamil Nadu
        chennai: "चेन्नई", coimbatore: "कोयंबटूर", madurai: "मदुरई",
        trichy: "त्रिची", salem: "सेलम", tirunelveli: "तिरुनेलवेली",
        // Maharashtra
        mumbai: "मुंबई", pune: "पुणे", nagpur: "नागपुर",
        nashik: "नासिक", aurangabad: "औरंगाबाद", kolhapur: "कोल्हापुर",
        // Punjab
        amritsar: "अमृतसर", ludhiana: "लुधियाना", jalandhar: "जालंधर",
        patiala: "पटियाला", bathinda: "बठिंडा", mohali: "मोहाली",
        // Rajasthan
        jaipur: "जयपुर", jodhpur: "जोधपुर", udaipur: "उदयपुर",
        kota: "कोटा", ajmer: "अजमेर", bikaner: "बीकानेर",
        // Gujarat
        ahmedabad: "अहमदाबाद", surat: "सूरत", vadodara: "वडोदरा",
        rajkot: "राजकोट", bhavnagar: "भावनगर", junagadh: "जूनागढ़",
        // Madhya Pradesh
        bhopal: "भोपाल", indore: "इंदौर", gwalior: "ग्वालियर",
        jabalpur: "जबलपुर", ujjain: "उज्जैन", rewa: "रीवा",
        // Uttar Pradesh
        lucknow: "लखनऊ", kanpur: "कानपुर", varanasi: "वाराणसी",
        agra: "आगरा", prayagraj: "प्रयागराज", meerut: "मेरठ",
        // Bihar
        patna: "पटना", gaya: "गया", muzaffarpur: "मुज़फ़्फ़रपुर",
        bhagalpur: "भागलपुर", darbhanga: "दरभंगा", purnia: "पूर्णिया",
        // West Bengal
        kolkata: "कोलकाता", howrah: "हावड़ा", durgapur: "दुर्गापुर",
        siliguri: "सिलीगुड़ी", asansol: "आसनसोल", kharagpur: "खड़गपुर"
    },
    te: {
        // Telangana
        hyderabad: "హైదరాబాద్", warangal: "వరంగల్", karimnagar: "కరీంనగర్",
        nizamabad: "నిజామాబాద్", khammam: "ఖమ్మం", nalgonda: "నల్గొండ",
        adilabad: "ఆదిలాబాద్", medak: "మెదక్", mahbubnagar: "మహబూబ్‌నగర్", sangareddy: "సంగారెడ్డి",
        // Andhra Pradesh
        vijayawada: "విజయవాడ", visakhapatnam: "విశాఖపట్నం", guntur: "గుంటూరు",
        nellore: "నెల్లూరు", kurnool: "కర్నూల్", tirupati: "తిరుపతి",
        // Karnataka
        bangalore: "బెంగళూరు", mysore: "మైసూరు", hubli: "హుబ్లి",
        belgaum: "బెల్గాం", mangalore: "మంగుళూరు", davangere: "దావణగెరె",
        // Tamil Nadu
        chennai: "చెన్నై", coimbatore: "కోయంబత్తూరు", madurai: "మదురై",
        trichy: "తిరుచ్చి", salem: "సేలం", tirunelveli: "తిరునెల్వేలి",
        // Maharashtra
        mumbai: "ముంబై", pune: "పూణే", nagpur: "నాగ్‌పూర్",
        nashik: "నాశిక్", aurangabad: "ఔరంగాబాద్", kolhapur: "కొల్హాపూర్",
        // Punjab
        amritsar: "అమృత్‌సర్", ludhiana: "లూధియానా", jalandhar: "జలంధర్",
        patiala: "పాటియాలా", bathinda: "బఠిండా", mohali: "మొహాలి",
        // Rajasthan
        jaipur: "జైపూర్", jodhpur: "జోధ్‌పూర్", udaipur: "ఉదయ్‌పూర్",
        kota: "కోటా", ajmer: "అజ్మీర్", bikaner: "బీకనీర్",
        // Gujarat
        ahmedabad: "అహ్మదాబాద్", surat: "సూరత్", vadodara: "వడోదరా",
        rajkot: "రాజ్‌కోట్", bhavnagar: "భావ్‌నగర్", junagadh: "జునాగఢ్",
        // Madhya Pradesh
        bhopal: "భోపాల్", indore: "ఇండోర్", gwalior: "గ్వాలియర్",
        jabalpur: "జబల్‌పూర్", ujjain: "ఉజ్జయిని", rewa: "రేవా",
        // Uttar Pradesh
        lucknow: "లక్నో", kanpur: "కాన్పూర్", varanasi: "వారణాసి",
        agra: "ఆగ్రా", prayagraj: "ప్రయాగ్‌రాజ్", meerut: "మీరట్",
        // Bihar
        patna: "పాట్నా", gaya: "గయ", muzaffarpur: "ముజఫ్ఫర్‌పూర్",
        bhagalpur: "భాగల్పూర్", darbhanga: "దర్భంగా", purnia: "పూర్నియా",
        // West Bengal
        kolkata: "కోల్‌కతా", howrah: "హౌరా", durgapur: "దుర్గాపూర్",
        siliguri: "సిలిగురి", asansol: "ఆసన్సోల్", kharagpur: "ఖరగ్‌పూర్"
    },
    ta: {
        // Telangana
        hyderabad: "ஹைதராபாத்", warangal: "வாரங்கல்", karimnagar: "கரீம்நகர்",
        nizamabad: "நிஜாமாபாத்", khammam: "கம்மம்", nalgonda: "நல்கொண்டா",
        adilabad: "ஆதிலாபாத்", medak: "மேடக்", mahbubnagar: "மகபூப்நகர்", sangareddy: "சங்காரெட்டி",
        // Andhra Pradesh
        vijayawada: "விஜயவாடா", visakhapatnam: "விசாகப்பட்டினம்", guntur: "குண்டூர்",
        nellore: "நெல்லூர்", kurnool: "கர்னூல்", tirupati: "திருப்பதி",
        // Karnataka
        bangalore: "பெங்களூர்", mysore: "மைசூர்", hubli: "ஹூப்ளி",
        belgaum: "பெல்காம்", mangalore: "மங்களூர்", davangere: "தாவணகெரே",
        // Tamil Nadu
        chennai: "சென்னை", coimbatore: "கோயம்புத்தூர்", madurai: "மதுரை",
        trichy: "திருச்சி", salem: "சேலம்", tirunelveli: "திருநெல்வேலி",
        // Maharashtra
        mumbai: "மும்பை", pune: "புனே", nagpur: "நாக்பூர்",
        nashik: "நாசிக்", aurangabad: "ஔரங்காபாத்", kolhapur: "கொல்லாபூர்",
        // Punjab
        amritsar: "அமிர்தசரஸ்", ludhiana: "லூதியானா", jalandhar: "ஜலந்தர்",
        patiala: "பாட்டியாலா", bathinda: "பதிண்டா", mohali: "மொஹாலி",
        // Rajasthan
        jaipur: "ஜெய்ப்பூர்", jodhpur: "ஜோத்பூர்", udaipur: "உதய்பூர்",
        kota: "கோட்டா", ajmer: "அஜ்மீர்", bikaner: "பிகானேர்",
        // Gujarat
        ahmedabad: "அகமதாபாத்", surat: "சூரத்", vadodara: "வதோதரா",
        rajkot: "ராஜ்கோட்", bhavnagar: "பவ்நகர்", junagadh: "ஜூனாகத்",
        // Madhya Pradesh
        bhopal: "போபால்", indore: "இந்தூர்", gwalior: "குவாலியர்",
        jabalpur: "ஜபல்பூர்", ujjain: "உஜ்ஜைன்", rewa: "ரேவா",
        // Uttar Pradesh
        lucknow: "லக்னோ", kanpur: "கான்பூர்", varanasi: "வாரணாசி",
        agra: "ஆக்ரா", prayagraj: "பிரயாக்ராஜ்", meerut: "மீரட்",
        // Bihar
        patna: "பாட்னா", gaya: "கயா", muzaffarpur: "முஜாபர்பூர்",
        bhagalpur: "பாகல்பூர்", darbhanga: "தர்பங்கா", purnia: "பூர்னியா",
        // West Bengal
        kolkata: "கொல்கத்தா", howrah: "ஹவுரா", durgapur: "துர்காபூர்",
        siliguri: "சிலிகுரி", asansol: "ஆசன்சோல்", kharagpur: "கரக்பூர்"
    },
    kn: {
        // Telangana
        hyderabad: "ಹೈದರಾಬಾದ್", warangal: "ವಾರಂಗಲ್", karimnagar: "ಕರೀಂನಗರ್",
        nizamabad: "ನಿಜಾಮಾಬಾದ್", khammam: "ಖಮ್ಮಂ", nalgonda: "ನಲ್ಗೊಂಡ",
        adilabad: "ಆದಿಲಾಬಾದ್", medak: "ಮೆದಕ್", mahbubnagar: "ಮಹಬೂಬ್‌ನಗರ", sangareddy: "ಸಂಗಾರೆಡ್ಡಿ",
        // Andhra Pradesh
        vijayawada: "ವಿಜಯವಾಡ", visakhapatnam: "ವಿಶಾಖಪಟ್ಟಣಂ", guntur: "ಗುಂಟೂರು",
        nellore: "ನೆಲ್ಲೂರು", kurnool: "ಕರ್ನೂಲ್", tirupati: "ತಿರುಪತಿ",
        // Karnataka
        bangalore: "ಬೆಂಗಳೂರು", mysore: "ಮೈಸೂರು", hubli: "ಹುಬ್ಬಳ್ಳಿ",
        belgaum: "ಬೆಳಗಾವಿ", mangalore: "ಮಂಗಳೂರು", davangere: "ದಾವಣಗೆರೆ",
        // Tamil Nadu
        chennai: "ಚೆನ್ನೈ", coimbatore: "ಕೊಯಮತ್ತೂರು", madurai: "ಮಧುರೈ",
        trichy: "ತಿರುಚ್ಚಿ", salem: "ಸೇಲಂ", tirunelveli: "ತಿರುನೆಲ್ವೇಲಿ",
        // Maharashtra
        mumbai: "ಮುಂಬೈ", pune: "ಪುಣೆ", nagpur: "ನಾಗಪುರ",
        nashik: "ನಾಸಿಕ್", aurangabad: "ಔರಂಗಾಬಾದ್", kolhapur: "ಕೊಲ್ಹಾಪುರ",
        // Punjab
        amritsar: "ಅಮೃತಸರ", ludhiana: "ಲೂಧಿಯಾನಾ", jalandhar: "ಜಲಂಧರ್",
        patiala: "ಪಟಿಯಾಲಾ", bathinda: "ಬಠಿಂಡಾ", mohali: "ಮೊಹಾಲಿ",
        // Rajasthan
        jaipur: "ಜೈಪುರ", jodhpur: "ಜೋಧಪುರ", udaipur: "ಉದಯಪುರ",
        kota: "ಕೋಟಾ", ajmer: "ಅಜ್ಮೀರ್", bikaner: "ಬಿಕಾನೇರ್",
        // Gujarat
        ahmedabad: "ಅಹಮದಾಬಾದ್", surat: "ಸೂರತ್", vadodara: "ವಡೋದರಾ",
        rajkot: "ರಾಜ್‌ಕೋಟ್", bhavnagar: "ಭಾವನಗರ", junagadh: "ಜುನಾಗಢ",
        // Madhya Pradesh
        bhopal: "ಭೋಪಾಲ್", indore: "ಇಂದೋರ್", gwalior: "ಗ್ವಾಲಿಯರ್",
        jabalpur: "ಜಬಲ್‌ಪುರ", ujjain: "ಉಜ್ಜಯಿನಿ", rewa: "ರೇವಾ",
        // Uttar Pradesh
        lucknow: "ಲಕ್ನೋ", kanpur: "ಕಾನ್ಪುರ", varanasi: "ವಾರಣಾಸಿ",
        agra: "ಆಗ್ರಾ", prayagraj: "ಪ್ರಯಾಗರಾಜ್", meerut: "ಮೀರಟ್",
        // Bihar
        patna: "ಪಾಟ್ನಾ", gaya: "ಗಯಾ", muzaffarpur: "ಮುಜಫ್ಫರ್‌ಪುರ",
        bhagalpur: "ಭಾಗಲ್‌ಪುರ", darbhanga: "ದರ್ಭಂಗಾ", purnia: "ಪೂರ್ಣಿಯಾ",
        // West Bengal
        kolkata: "ಕೋಲ್ಕತ್ತಾ", howrah: "ಹೌರಾ", durgapur: "ದುರ್ಗಾಪುರ",
        siliguri: "ಸಿಲಿಗುರಿ", asansol: "ಆಸನ್‌ಸೋಲ್", kharagpur: "ಖರಗ್‌ಪುರ"
    },
    mr: {
        // Telangana
        hyderabad: "हैदराबाद", warangal: "वारंगळ", karimnagar: "करीमनगर",
        nizamabad: "निजामाबाद", khammam: "खम्मम", nalgonda: "नळगोंडा",
        adilabad: "आदिलाबाद", medak: "मेडक", mahbubnagar: "महबूबनगर", sangareddy: "संगारेड्डी",
        // Andhra Pradesh
        vijayawada: "विजयवाडा", visakhapatnam: "विशाखापट्टणम", guntur: "गुंटूर",
        nellore: "नेल्लोर", kurnool: "कुर्नूल", tirupati: "तिरुपती",
        // Karnataka
        bangalore: "बंगळूर", mysore: "म्हैसूर", hubli: "हुबळी",
        belgaum: "बेळगाव", mangalore: "मंगळूर", davangere: "दावणगेरे",
        // Tamil Nadu
        chennai: "चेन्नई", coimbatore: "कोइंबतूर", madurai: "मदुराई",
        trichy: "त्रिची", salem: "सेलम", tirunelveli: "तिरुनेलवेली",
        // Maharashtra
        mumbai: "मुंबई", pune: "पुणे", nagpur: "नागपूर",
        nashik: "नाशिक", aurangabad: "औरंगाबाद", kolhapur: "कोल्हापूर",
        // Punjab
        amritsar: "अमृतसर", ludhiana: "लुधियाना", jalandhar: "जालंधर",
        patiala: "पटियाला", bathinda: "बठिंडा", mohali: "मोहाली",
        // Rajasthan
        jaipur: "जयपूर", jodhpur: "जोधपूर", udaipur: "उदयपूर",
        kota: "कोटा", ajmer: "अजमेर", bikaner: "बिकानेर",
        // Gujarat
        ahmedabad: "अहमदाबाद", surat: "सुरत", vadodara: "वडोदरा",
        rajkot: "राजकोट", bhavnagar: "भावनगर", junagadh: "जुनागड",
        // Madhya Pradesh
        bhopal: "भोपाळ", indore: "इंदूर", gwalior: "ग्वाल्हेर",
        jabalpur: "जबलपूर", ujjain: "उज्जैन", rewa: "रीवा",
        // Uttar Pradesh
        lucknow: "लखनऊ", kanpur: "कानपूर", varanasi: "वाराणसी",
        agra: "आग्रा", prayagraj: "प्रयागराज", meerut: "मेरठ",
        // Bihar
        patna: "पाटणा", gaya: "गया", muzaffarpur: "मुझफ्फरपूर",
        bhagalpur: "भागलपूर", darbhanga: "दरभंगा", purnia: "पूर्णिया",
        // West Bengal
        kolkata: "कोलकाता", howrah: "हावडा", durgapur: "दुर्गापूर",
        siliguri: "सिलीगुडी", asansol: "आसनसोल", kharagpur: "खरगपूर"
    },
    pa: {
        // Telangana
        hyderabad: "ਹੈਦਰਾਬਾਦ", warangal: "ਵਾਰੰਗਲ", karimnagar: "ਕਰੀਮਨਗਰ",
        nizamabad: "ਨਿਜ਼ਾਮਾਬਾਦ", khammam: "ਖਮਮ", nalgonda: "ਨਲਗੋਂਡਾ",
        adilabad: "ਆਦਿਲਾਬਾਦ", medak: "ਮੇਡਕ", mahbubnagar: "ਮਹਬੂਬਨਗਰ", sangareddy: "ਸੰਗਾਰੇੱਡੀ",
        // Andhra Pradesh
        vijayawada: "ਵਿਜੇਵਾੜਾ", visakhapatnam: "ਵਿਸ਼ਾਖਾਪਟਨਮ", guntur: "ਗੁੰਟੂਰ",
        nellore: "ਨੇਲੌਰ", kurnool: "ਕੁਰਨੂਲ", tirupati: "ਤਿਰੁਪਤੀ",
        // Karnataka
        bangalore: "ਬੈਂਗਲੋਰ", mysore: "ਮੈਸੂਰ", hubli: "ਹੁਬਲੀ",
        belgaum: "ਬੇਲਗਾਮ", mangalore: "ਮੰਗਲੌਰ", davangere: "ਦਾਵਣਗੇਰੇ",
        // Tamil Nadu
        chennai: "ਚੇਨਈ", coimbatore: "ਕੋਇੰਬਟੂਰ", madurai: "ਮਦੁਰੈ",
        trichy: "ਤ੍ਰਿਚੀ", salem: "ਸੇਲਮ", tirunelveli: "ਤਿਰੁਨੇਲਵੇਲੀ",
        // Maharashtra
        mumbai: "ਮੁੰਬਈ", pune: "ਪੁਣੇ", nagpur: "ਨਾਗਪੁਰ",
        nashik: "ਨਾਸਿਕ", aurangabad: "ਔਰੰਗਾਬਾਦ", kolhapur: "ਕੋਲ੍ਹਾਪੁਰ",
        // Punjab
        amritsar: "ਅੰਮ੍ਰਿਤਸਰ", ludhiana: "ਲੁਧਿਆਣਾ", jalandhar: "ਜਲੰਧਰ",
        patiala: "ਪਟਿਆਲਾ", bathinda: "ਬਠਿੰਡਾ", mohali: "ਮੋਹਾਲੀ",
        // Rajasthan
        jaipur: "ਜੈਪੁਰ", jodhpur: "ਜੋਧਪੁਰ", udaipur: "ਉਦੈਪੁਰ",
        kota: "ਕੋਟਾ", ajmer: "ਅਜਮੇਰ", bikaner: "ਬੀਕਾਨੇਰ",
        // Gujarat
        ahmedabad: "ਅਹਿਮਦਾਬਾਦ", surat: "ਸੂਰਤ", vadodara: "ਵਡੋਦਰਾ",
        rajkot: "ਰਾਜਕੋਟ", bhavnagar: "ਭਾਵਨਗਰ", junagadh: "ਜੂਨਾਗੜ੍ਹ",
        // Madhya Pradesh
        bhopal: "ਭੋਪਾਲ", indore: "ਇੰਦੌਰ", gwalior: "ਗਵਾਲੀਅਰ",
        jabalpur: "ਜਬਲਪੁਰ", ujjain: "ਉੱਜੈਨ", rewa: "ਰੀਵਾ",
        // Uttar Pradesh
        lucknow: "ਲਖਨਊ", kanpur: "ਕਾਨਪੁਰ", varanasi: "ਵਾਰਾਣਸੀ",
        agra: "ਆਗਰਾ", prayagraj: "ਪ੍ਰਯਾਗਰਾਜ", meerut: "ਮੇਰਠ",
        // Bihar
        patna: "ਪਟਨਾ", gaya: "ਗਯਾ", muzaffarpur: "ਮੁਜ਼ੱਫਰਪੁਰ",
        bhagalpur: "ਭਾਗਲਪੁਰ", darbhanga: "ਦਰਭੰਗਾ", purnia: "ਪੂਰਨੀਆ",
        // West Bengal
        kolkata: "ਕੋਲਕਾਤਾ", howrah: "ਹਾਵੜਾ", durgapur: "ਦੁਰਗਾਪੁਰ",
        siliguri: "ਸਿਲੀਗੁੜੀ", asansol: "ਆਸਨਸੋਲ", kharagpur: "ਖੜਗਪੁਰ"
    },
    bn: {
        // Telangana
        hyderabad: "হায়দরাবাদ", warangal: "ওয়ারাঙ্গল", karimnagar: "করিমনগর",
        nizamabad: "নিজামাবাদ", khammam: "খাম্মাম", nalgonda: "নালগোন্ডা",
        adilabad: "আদিলাবাদ", medak: "মেডাক", mahbubnagar: "মাহবুবনগর", sangareddy: "সাঙ্গারেড্ডি",
        // Andhra Pradesh
        vijayawada: "বিজয়ওয়াড়া", visakhapatnam: "বিশাখাপত্তনম", guntur: "গুন্টুর",
        nellore: "নেল্লোর", kurnool: "কুর্নুল", tirupati: "তিরুপতি",
        // Karnataka
        bangalore: "ব্যাঙ্গালোর", mysore: "মাইসোর", hubli: "হুব্লি",
        belgaum: "বেলগাম", mangalore: "ম্যাঙ্গালোর", davangere: "দাভাংগেরে",
        // Tamil Nadu
        chennai: "চেন্নাই", coimbatore: "কোয়েম্বাটোর", madurai: "মাদুরাই",
        trichy: "ত্রিচি", salem: "সালেম", tirunelveli: "তিরুনেলভেলি",
        // Maharashtra
        mumbai: "মুম্বাই", pune: "পুনে", nagpur: "নাগপুর",
        nashik: "নাসিক", aurangabad: "আওরঙ্গাবাদ", kolhapur: "কোলহাপুর",
        // Punjab
        amritsar: "অমৃতসর", ludhiana: "লুধিয়ানা", jalandhar: "জলন্ধর",
        patiala: "পাতিয়ালা", bathinda: "বাঠিন্ডা", mohali: "মোহালি",
        // Rajasthan
        jaipur: "জয়পুর", jodhpur: "যোধপুর", udaipur: "উদয়পুর",
        kota: "কোটা", ajmer: "আজমীর", bikaner: "বিকানের",
        // Gujarat
        ahmedabad: "আহমেদাবাদ", surat: "সুরাট", vadodara: "ভাদোদরা",
        rajkot: "রাজকোট", bhavnagar: "ভাবনগর", junagadh: "জুনাগড়",
        // Madhya Pradesh
        bhopal: "ভোপাল", indore: "ইন্দোর", gwalior: "গোয়ালিয়র",
        jabalpur: "জবলপুর", ujjain: "উজ্জয়িনী", rewa: "রেওয়া",
        // Uttar Pradesh
        lucknow: "লক্ষ্ণৌ", kanpur: "কানপুর", varanasi: "বারানসী",
        agra: "আগ্রা", prayagraj: "প্রয়াগরাজ", meerut: "মীরাট",
        // Bihar
        patna: "পাটনা", gaya: "গয়া", muzaffarpur: "মুজাফফরপুর",
        bhagalpur: "ভাগলপুর", darbhanga: "দরভঙ্গা", purnia: "পূর্ণিয়া",
        // West Bengal
        kolkata: "কলকাতা", howrah: "হাওড়া", durgapur: "দুর্গাপুর",
        siliguri: "শিলিগুড়ি", asansol: "আসানসোল", kharagpur: "খড়গপুর"
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, regionTranslations, districtTranslations };
}
