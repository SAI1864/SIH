const translations = {
      en: {
        heroTitle: "One mobile desk for every ASHA worker.",
        heroText: "Plan home visits, track high-risk mothers and children, raise supply or payment problems, and get instant field guidance without waiting for office hours.",
        startWork: "Start daily work",
        askHelp: "Ask field assistant",
        emergency: "Emergency referral",
        visitsToday: "Visits planned today",
        riskCases: "High-risk cases need follow-up",
        stockAlerts: "Stock items below minimum",
        loggedInAs: "Logged in as",
        toolsTitle: "Built around ASHA problems",
        toolsText: "The portal focuses on field work pain points: too many registers, delayed escalation, stock shortages, incentive uncertainty, and lack of quick medical guidance."
      },
      hi: {
        heroTitle: "à¤¹à¤° ASHA worker ke liye ek mobile desk.",
        heroText: "Ghar visit plan karein, high-risk maa aur bacchon ko track karein, stock ya payment problem bhejein, aur turant field guidance paayen.",
        startWork: "Aaj ka kaam shuru karein",
        askHelp: "Sahayak se poochein",
        emergency: "Emergency referral",
        visitsToday: "Aaj ki planned visits",
        riskCases: "High-risk cases follow-up",
        stockAlerts: "Low stock alerts",
        loggedInAs: "Login worker",
        toolsTitle: "ASHA problems ke hisaab se tools",
        toolsText: "Yeh portal field ki asli problems par focus karta hai: zyada registers, late escalation, stock shortage, payment delay, aur quick medical guidance ki kami."
      }
    };

    Object.assign(translations.en, {
      topEmergency: "Emergency: 108 | Health helpline: 104", topOffline: "Works on mobile, low bandwidth, and offline notes", brandSub: "Accredited Social Health Activist Support Portal",
      navTools: "Tools", navWorkspace: "Workspace", navCommunity: "Community", navLogin: "Login",
      priorityPregTitle: "Meena Kumari - ANC danger sign", priorityPregText: "Swelling and BP follow-up due before 4:00 PM", priorityStockTitle: "ORS packets low", priorityStockText: "Only 4 left. Request refill from ANM store.", priorityVhndTitle: "VHND session reminder", priorityVhndText: "Anganwadi Centre 2, tomorrow 10:00 AM",
      tagUrgent: "Urgent", tagStock: "Stock", tagReady: "Ready", tag4New: "4 new", tagActive: "Active", tag2Pending: "2 pending", tagNewborn: "Newborn", tagDue: "Due", tagReferral: "Referral", tagPayment: "Payment",
      toolVisitTitle: "Home visit planner", toolVisitText: "Daily list by village, pregnancy month, newborn age, immunization date, and missed follow-up.", toolRiskTitle: "Risk triage", toolRiskText: "Flags danger signs and creates a referral note for ANM, PHC, or ambulance support.", toolStockTitle: "Medicine stock", toolStockText: "Tracks ORS, IFA, zinc, pregnancy kits, condoms, sanitary pads, and vaccine day material.", toolPayTitle: "Incentive support", toolPayText: "Raise payment delays with proof, work category, month, and status tracking.",
      tabTasks: "Daily tasks", tabReferral: "Referral help", tabStock: "Stock", tabProblems: "Problems", tabReports: "Reports", tabLearn: "Learn", tasksTitle: "Today's field plan", tasksText: "Tick work after completion. Progress is saved on this phone.", resetBtn: "Reset",
      referralTitle: "Referral decision helper", referralText: "Select signs seen during a visit. This creates the next action and message.", patientName: "Patient name", patientNamePh: "Example: Meena Kumari", caseType: "Case type", casePregnancy: "Pregnancy / ANC", caseNewborn: "Newborn", caseChild: "Child illness", caseTb: "TB symptoms", caseFamily: "Family planning", dangerSigns: "Danger signs observed", dangerSignsPh: "High fever, bleeding, swelling, fits, severe weakness, breathing difficulty...", village: "Village / ward", villagePh: "Ward 8", transport: "Transport available?", transportAmbulance: "Needs ambulance", transportFamily: "Family vehicle available", transportAnm: "ANM support needed", createReferral: "Create referral action",
      stockTitle: "Medicine and kit stock", stockText: "Update quantities after distribution. Low-stock items are highlighted.", saveStock: "Save stock", stockItem: "Item", stockQty: "Current qty", stockMin: "Minimum", stockStatus: "Status", requestRefill: "Request refill", available: "Available", stockSaved: "Stock saved on this device.",
      problemTitle: "Report a work problem", problemText: "Use this for delayed incentives, missing stock, harassment, transport issues, or app problems.", problemType: "Problem type", problemPayment: "Incentive/payment delay", problemStock: "Medicine or kit shortage", problemTransport: "Transport/referral issue", problemApp: "App/data problem", problemSafety: "Safety or harassment", problemMonth: "Month", problemDetails: "Details", problemDetailsPh: "Describe the problem, location, people contacted, and proof available.", submitProblem: "Submit problem",
      reportsTitle: "Monthly work summary", reportsText: "A quick view ASHA workers can share during review meetings.", downloadReport: "Download text report", reportAncTitle: "ANC follow-ups", reportAncText: "38 visits completed, 3 high-risk referrals made.", reportImmTitle: "Child immunization", reportImmText: "92% due-list coverage, 5 families need counseling.", reportTbTitle: "TB screening", reportTbText: "11 symptom checks, 2 sputum referrals pending.",
      learnTitle: "Quick learning cards", learnText: "Short field guidance for common ASHA questions.", learnPregTitle: "Pregnancy danger signs", learnPregText: "Heavy bleeding, fits, severe headache, swelling, fever, breathlessness, or reduced fetal movement need urgent escalation.", learnNewTitle: "Newborn danger signs", learnNewText: "Poor feeding, fast breathing, fever, cold body, yellow palms/soles, convulsions, or lethargy need referral.", learnOrsTitle: "ORS and zinc", learnOrsText: "For diarrhea, advise ORS after every loose stool, zinc course as per local protocol, and danger sign referral.", askMore: "Ask more",
      communityTitle: "ASHA community support", communityText: "Workers can coordinate with ANM, Anganwadi, PHC, and other ASHAs from the same block.", commAnnTitle: "Block announcements", commAnnText: "VHND schedule, vaccine supply updates, training dates, and campaign deadlines.", commPeerTitle: "Peer help", commPeerText: "Ask nearby ASHAs for replacement stock, missed household location, or referral experience.", commSupTitle: "Supervisor messages", commSupText: "Escalate unresolved issues to ANM, ASHA facilitator, or PHC medical officer.",
      assistantTitle: "ASHA Field Assistant", assistantGreeting: "Namaste. Ask about ANC, newborn care, diarrhea, TB symptoms, incentives, stock, or referral steps.", assistantPh: "Type your question...", footerText: "Field-first support for community health workers.", footerHelp: "Emergency: 108 | Health: 104 | PHC desk: 1800 000 0000", copyMessage: "Copy message", messageCopied: "Message copied.",
      task1Title: "ANC visit: Meena Kumari, 8 months pregnant", task1Meta: "Check BP, swelling, IFA tablets, birth plan", task2Title: "Newborn follow-up: Baby of Rani", task2Meta: "Day 7 check: feeding, temperature, cord, jaundice", task3Title: "Immunization reminder: 5 households", task3Meta: "Call families before tomorrow VHND session", task4Title: "TB screening: Ram Prasad", task4Meta: "Cough more than 2 weeks, refer sputum test", task5Title: "Update monthly incentive proof", task5Meta: "Upload JSY, PNC, and family planning activity notes",
      itemOrs: "ORS packets", itemIfa: "IFA tablets", itemZinc: "Zinc tablets", itemPregKit: "Pregnancy test kits", itemCondom: "Condom packs", itemPads: "Sanitary pads"
    });

    Object.assign(translations.hi, {
      topEmergency: "à¤†à¤ªà¤¾à¤¤à¤•à¤¾à¤²: 108 | à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨: 104", topOffline: "à¤®à¥‹à¤¬à¤¾à¤‡à¤², à¤•à¤® à¤‡à¤‚à¤Ÿà¤°à¤¨à¥‡à¤Ÿ à¤”à¤° à¤‘à¤«à¤²à¤¾à¤‡à¤¨ à¤¨à¥‹à¤Ÿà¥à¤¸ à¤ªà¤° à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ", brandSub: "à¤®à¤¾à¤¨à¥à¤¯à¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¸à¤¾à¤®à¤¾à¤œà¤¿à¤• à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤•à¤¾à¤°à¥à¤¯à¤•à¤°à¥à¤¤à¤¾ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤ªà¥‹à¤°à¥à¤Ÿà¤²",
      navTools: "à¤‰à¤ªà¤•à¤°à¤£", navWorkspace: "à¤•à¤¾à¤°à¥à¤¯à¤¸à¥à¤¥à¤¾à¤¨", navCommunity: "à¤¸à¤®à¥à¤¦à¤¾à¤¯", navLogin: "à¤²à¥‰à¤—à¤¿à¤¨", heroTitle: "à¤¹à¤° ASHA à¤•à¤¾à¤°à¥à¤¯à¤•à¤°à¥à¤¤à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤à¤• à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¡à¥‡à¤¸à¥à¤•à¥¤", heroText: "à¤˜à¤°-à¤˜à¤° à¤µà¤¿à¤œà¤¿à¤Ÿ à¤ªà¥à¤²à¤¾à¤¨ à¤•à¤°à¥‡à¤‚, à¤‰à¤šà¥à¤š à¤œà¥‹à¤–à¤¿à¤® à¤µà¤¾à¤²à¥€ à¤®à¤¾à¤¤à¤¾à¤“à¤‚ à¤”à¤° à¤¬à¤šà¥à¤šà¥‹à¤‚ à¤•à¥‹ à¤Ÿà¥à¤°à¥ˆà¤• à¤•à¤°à¥‡à¤‚, à¤¸à¤ªà¥à¤²à¤¾à¤ˆ à¤¯à¤¾ à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤­à¥‡à¤œà¥‡à¤‚, à¤”à¤° à¤¤à¥à¤°à¤‚à¤¤ à¤«à¥€à¤²à¥à¤¡ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ à¤ªà¤¾à¤à¤‚à¥¤", startWork: "à¤†à¤œ à¤•à¤¾ à¤•à¤¾à¤® à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚", askHelp: "à¤«à¥€à¤²à¥à¤¡ à¤¸à¤¹à¤¾à¤¯à¤• à¤¸à¥‡ à¤ªà¥‚à¤›à¥‡à¤‚", emergency: "à¤†à¤ªà¤¾à¤¤à¤•à¤¾à¤²à¥€à¤¨ à¤°à¥‡à¤«à¤°à¤²", visitsToday: "à¤†à¤œ à¤•à¥€ à¤µà¤¿à¤œà¤¿à¤Ÿ", riskCases: "à¤‰à¤šà¥à¤š à¤œà¥‹à¤–à¤¿à¤® à¤«à¥‰à¤²à¥‹-à¤…à¤ª", stockAlerts: "à¤•à¤® à¤¸à¥à¤Ÿà¥‰à¤• à¤†à¤‡à¤Ÿà¤®", loggedInAs: "à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤¾à¤°à¥à¤¯à¤•à¤°à¥à¤¤à¤¾",
      priorityPregTitle: "à¤®à¥€à¤¨à¤¾ à¤•à¥à¤®à¤¾à¤°à¥€ - ANC à¤–à¤¤à¤°à¥‡ à¤•à¤¾ à¤¸à¤‚à¤•à¥‡à¤¤", priorityPregText: "à¤¸à¥‚à¤œà¤¨ à¤”à¤° BP à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤¶à¤¾à¤® 4:00 à¤¬à¤œà¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡", priorityStockTitle: "ORS à¤ªà¥ˆà¤•à¥‡à¤Ÿ à¤•à¤® à¤¹à¥ˆà¤‚", priorityStockText: "à¤¸à¤¿à¤°à¥à¤« 4 à¤¬à¤šà¥‡ à¤¹à¥ˆà¤‚à¥¤ ANM à¤¸à¥à¤Ÿà¥‹à¤° à¤¸à¥‡ à¤°à¥€à¤«à¤¿à¤² à¤®à¤¾à¤‚à¤—à¥‡à¤‚à¥¤", priorityVhndTitle: "VHND à¤¸à¤¤à¥à¤° à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤°", priorityVhndText: "à¤†à¤‚à¤—à¤¨à¤µà¤¾à¤¡à¤¼à¥€ à¤•à¥‡à¤‚à¤¦à¥à¤° 2, à¤•à¤² à¤¸à¥à¤¬à¤¹ 10:00 à¤¬à¤œà¥‡",
      tagUrgent: "à¤¤à¤¤à¥à¤•à¤¾à¤²", tagStock: "à¤¸à¥à¤Ÿà¥‰à¤•", tagReady: "à¤¤à¥ˆà¤¯à¤¾à¤°", tag4New: "4 à¤¨à¤", tagActive: "à¤¸à¤•à¥à¤°à¤¿à¤¯", tag2Pending: "2 à¤²à¤‚à¤¬à¤¿à¤¤", tagNewborn: "à¤¨à¤µà¤œà¤¾à¤¤", tagDue: "à¤¦à¥‡à¤¯", tagReferral: "à¤°à¥‡à¤«à¤°à¤²", tagPayment: "à¤­à¥à¤—à¤¤à¤¾à¤¨",
      toolsTitle: "ASHA à¤¸à¤®à¤¸à¥à¤¯à¤¾à¤“à¤‚ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¬à¤¨à¤¾à¤¯à¤¾ à¤—à¤¯à¤¾", toolsText: "à¤¯à¤¹ à¤ªà¥‹à¤°à¥à¤Ÿà¤² à¤«à¥€à¤²à¥à¤¡ à¤•à¥€ à¤…à¤¸à¤²à¥€ à¤¦à¤¿à¤•à¥à¤•à¤¤à¥‹à¤‚ à¤ªà¤° à¤•à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¤ à¤¹à¥ˆ: à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤°à¤œà¤¿à¤¸à¥à¤Ÿà¤°, à¤¦à¥‡à¤° à¤¸à¥‡ à¤à¤¸à¥à¤•à¥‡à¤²à¥‡à¤¶à¤¨, à¤¸à¥à¤Ÿà¥‰à¤• à¤•à¤®à¥€, à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤…à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤à¤¤à¤¾ à¤”à¤° à¤¤à¥à¤°à¤‚à¤¤ à¤®à¥‡à¤¡à¤¿à¤•à¤² à¤¸à¤²à¤¾à¤¹ à¤•à¥€ à¤•à¤®à¥€à¥¤", toolVisitTitle: "à¤˜à¤° à¤µà¤¿à¤œà¤¿à¤Ÿ à¤ªà¥à¤²à¤¾à¤¨à¤°", toolVisitText: "à¤—à¤¾à¤‚à¤µ, à¤—à¤°à¥à¤­à¤¾à¤µà¤¸à¥à¤¥à¤¾ à¤®à¤¾à¤¹, à¤¨à¤µà¤œà¤¾à¤¤ à¤‰à¤®à¥à¤°, à¤Ÿà¥€à¤•à¤¾à¤•à¤°à¤£ à¤¤à¤¾à¤°à¥€à¤– à¤”à¤° à¤›à¥‚à¤Ÿà¥‡ à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¦à¥ˆà¤¨à¤¿à¤• à¤¸à¥‚à¤šà¥€à¥¤", toolRiskTitle: "à¤œà¥‹à¤–à¤¿à¤® à¤œà¤¾à¤‚à¤š", toolRiskText: "à¤–à¤¤à¤°à¥‡ à¤•à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤ à¤ªà¤¹à¤šà¤¾à¤¨à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° ANM, PHC à¤¯à¤¾ à¤à¤®à¥à¤¬à¥à¤²à¥‡à¤‚à¤¸ à¤•à¥‡ à¤²à¤¿à¤ à¤°à¥‡à¤«à¤°à¤² à¤¨à¥‹à¤Ÿ à¤¬à¤¨à¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤", toolStockTitle: "à¤¦à¤µà¤¾ à¤¸à¥à¤Ÿà¥‰à¤•", toolStockText: "ORS, IFA, zinc, pregnancy kits, condoms, sanitary pads à¤”à¤° vaccine day material à¤•à¥‹ à¤Ÿà¥à¤°à¥ˆà¤• à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤", toolPayTitle: "à¤ªà¥à¤°à¥‹à¤¤à¥à¤¸à¤¾à¤¹à¤¨ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾", toolPayText: "à¤ªà¥à¤°à¤®à¤¾à¤£, à¤•à¤¾à¤°à¥à¤¯ à¤¶à¥à¤°à¥‡à¤£à¥€, à¤®à¤¾à¤¹ à¤”à¤° à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤Ÿà¥à¤°à¥ˆà¤•à¤¿à¤‚à¤— à¤•à¥‡ à¤¸à¤¾à¤¥ à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤¦à¥‡à¤°à¥€ à¤‰à¤ à¤¾à¤à¤‚à¥¤",
      tabTasks: "à¤¦à¥ˆà¤¨à¤¿à¤• à¤•à¤¾à¤°à¥à¤¯", tabReferral: "à¤°à¥‡à¤«à¤°à¤² à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾", tabStock: "à¤¸à¥à¤Ÿà¥‰à¤•", tabProblems: "à¤¸à¤®à¤¸à¥à¤¯à¤¾à¤à¤‚", tabReports: "à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ", tabLearn: "à¤¸à¥€à¤–à¥‡à¤‚", tasksTitle: "à¤†à¤œ à¤•à¥€ à¤«à¥€à¤²à¥à¤¡ à¤¯à¥‹à¤œà¤¨à¤¾", tasksText: "à¤•à¤¾à¤® à¤ªà¥‚à¤°à¤¾ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° à¤Ÿà¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤ à¤ªà¥à¤°à¤—à¤¤à¤¿ à¤‡à¤¸à¥€ à¤«à¥‹à¤¨ à¤ªà¤° à¤¸à¥‡à¤µ à¤¹à¥‹à¤—à¥€à¥¤", resetBtn: "à¤°à¥€à¤¸à¥‡à¤Ÿ",
      referralTitle: "à¤°à¥‡à¤«à¤°à¤² à¤¨à¤¿à¤°à¥à¤£à¤¯ à¤¸à¤¹à¤¾à¤¯à¤•", referralText: "à¤µà¤¿à¤œà¤¿à¤Ÿ à¤®à¥‡à¤‚ à¤¦à¤¿à¤–à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤ à¤šà¥à¤¨à¥‡à¤‚à¥¤ à¤‡à¤¸à¤¸à¥‡ à¤…à¤—à¤²à¤¾ à¤•à¤¦à¤® à¤”à¤° à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¬à¤¨à¥‡à¤—à¤¾à¥¤", patientName: "à¤®à¤°à¥€à¤œ à¤•à¤¾ à¤¨à¤¾à¤®", patientNamePh: "à¤‰à¤¦à¤¾à¤¹à¤°à¤£: à¤®à¥€à¤¨à¤¾ à¤•à¥à¤®à¤¾à¤°à¥€", caseType: "à¤•à¥‡à¤¸ à¤ªà¥à¤°à¤•à¤¾à¤°", casePregnancy: "à¤—à¤°à¥à¤­à¤¾à¤µà¤¸à¥à¤¥à¤¾ / ANC", caseNewborn: "à¤¨à¤µà¤œà¤¾à¤¤", caseChild: "à¤¬à¤šà¥à¤šà¥‡ à¤•à¥€ à¤¬à¥€à¤®à¤¾à¤°à¥€", caseTb: "TB à¤²à¤•à¥à¤·à¤£", caseFamily: "à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤¨à¤¿à¤¯à¥‹à¤œà¤¨", dangerSigns: "à¤¦à¥‡à¤–à¥‡ à¤—à¤ à¤–à¤¤à¤°à¥‡ à¤•à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤", dangerSignsPh: "à¤¤à¥‡à¤œ à¤¬à¥à¤–à¤¾à¤°, à¤–à¥‚à¤¨ à¤†à¤¨à¤¾, à¤¸à¥‚à¤œà¤¨, à¤¦à¥Œà¤°à¥‡, à¤¬à¤¹à¥à¤¤ à¤•à¤®à¤œà¥‹à¤°à¥€, à¤¸à¤¾à¤‚à¤¸ à¤®à¥‡à¤‚ à¤¦à¤¿à¤•à¥à¤•à¤¤...", village: "à¤—à¤¾à¤‚à¤µ / à¤µà¤¾à¤°à¥à¤¡", villagePh: "à¤µà¤¾à¤°à¥à¤¡ 8", transport: "à¤ªà¤°à¤¿à¤µà¤¹à¤¨ à¤‰à¤ªà¤²à¤¬à¥à¤§?", transportAmbulance: "à¤à¤®à¥à¤¬à¥à¤²à¥‡à¤‚à¤¸ à¤šà¤¾à¤¹à¤¿à¤", transportFamily: "à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤•à¥€ à¤—à¤¾à¤¡à¤¼à¥€ à¤‰à¤ªà¤²à¤¬à¥à¤§", transportAnm: "ANM à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤šà¤¾à¤¹à¤¿à¤", createReferral: "à¤°à¥‡à¤«à¤°à¤² à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤¬à¤¨à¤¾à¤à¤‚",
      stockTitle: "à¤¦à¤µà¤¾ à¤”à¤° à¤•à¤¿à¤Ÿ à¤¸à¥à¤Ÿà¥‰à¤•", stockText: "à¤µà¤¿à¤¤à¤°à¤£ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤®à¤¾à¤¤à¥à¤°à¤¾ à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤•à¤°à¥‡à¤‚à¥¤ à¤•à¤® à¤¸à¥à¤Ÿà¥‰à¤• à¤†à¤‡à¤Ÿà¤® à¤¹à¤¾à¤‡à¤²à¤¾à¤‡à¤Ÿ à¤¹à¥‹à¤‚à¤—à¥‡à¥¤", saveStock: "à¤¸à¥à¤Ÿà¥‰à¤• à¤¸à¥‡à¤µ à¤•à¤°à¥‡à¤‚", stockItem: "à¤†à¤‡à¤Ÿà¤®", stockQty: "à¤®à¥Œà¤œà¥‚à¤¦à¤¾ à¤®à¤¾à¤¤à¥à¤°à¤¾", stockMin: "à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤®", stockStatus: "à¤¸à¥à¤¥à¤¿à¤¤à¤¿", requestRefill: "à¤°à¥€à¤«à¤¿à¤² à¤®à¤¾à¤‚à¤—à¥‡à¤‚", available: "à¤‰à¤ªà¤²à¤¬à¥à¤§", stockSaved: "à¤¸à¥à¤Ÿà¥‰à¤• à¤‡à¤¸ à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤ªà¤° à¤¸à¥‡à¤µ à¤¹à¥‹ à¤—à¤¯à¤¾à¥¤",
      problemTitle: "à¤•à¤¾à¤® à¤•à¥€ à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚", problemText: "à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤¦à¥‡à¤°à¥€, à¤¸à¥à¤Ÿà¥‰à¤• à¤•à¤®à¥€, à¤‰à¤¤à¥à¤ªà¥€à¤¡à¤¼à¤¨, à¤ªà¤°à¤¿à¤µà¤¹à¤¨ à¤¯à¤¾ à¤à¤ª à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚à¥¤", problemType: "à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤ªà¥à¤°à¤•à¤¾à¤°", problemPayment: "à¤ªà¥à¤°à¥‹à¤¤à¥à¤¸à¤¾à¤¹à¤¨/à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤¦à¥‡à¤°à¥€", problemStock: "à¤¦à¤µà¤¾ à¤¯à¤¾ à¤•à¤¿à¤Ÿ à¤•à¤®à¥€", problemTransport: "à¤ªà¤°à¤¿à¤µà¤¹à¤¨/à¤°à¥‡à¤«à¤°à¤² à¤¸à¤®à¤¸à¥à¤¯à¤¾", problemApp: "à¤à¤ª/à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¤®à¤¸à¥à¤¯à¤¾", problemSafety: "à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¯à¤¾ à¤‰à¤¤à¥à¤ªà¥€à¤¡à¤¼à¤¨", problemMonth: "à¤®à¤¾à¤¹", problemDetails: "à¤µà¤¿à¤µà¤°à¤£", problemDetailsPh: "à¤¸à¤®à¤¸à¥à¤¯à¤¾, à¤¸à¥à¤¥à¤¾à¤¨, à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤¿à¤ à¤—à¤ à¤²à¥‹à¤— à¤”à¤° à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤ªà¥à¤°à¤®à¤¾à¤£ à¤²à¤¿à¤–à¥‡à¤‚à¥¤", submitProblem: "à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤œà¤®à¤¾ à¤•à¤°à¥‡à¤‚",
      reportsTitle: "à¤®à¤¾à¤¸à¤¿à¤• à¤•à¤¾à¤°à¥à¤¯ à¤¸à¤¾à¤°à¤¾à¤‚à¤¶", reportsText: "à¤¸à¤®à¥€à¤•à¥à¤·à¤¾ à¤¬à¥ˆà¤ à¤• à¤®à¥‡à¤‚ à¤¸à¤¾à¤à¤¾ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥à¤µà¤°à¤¿à¤¤ à¤¦à¥ƒà¤¶à¥à¤¯à¥¤", downloadReport: "à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚", reportAncTitle: "ANC à¤«à¥‰à¤²à¥‹-à¤…à¤ª", reportAncText: "38 à¤µà¤¿à¤œà¤¿à¤Ÿ à¤ªà¥‚à¤°à¥€, 3 à¤‰à¤šà¥à¤š à¤œà¥‹à¤–à¤¿à¤® à¤°à¥‡à¤«à¤°à¤² à¤•à¤¿à¤ à¤—à¤à¥¤", reportImmTitle: "à¤¬à¤šà¥à¤šà¥‹à¤‚ à¤•à¤¾ à¤Ÿà¥€à¤•à¤¾à¤•à¤°à¤£", reportImmText: "92% à¤¡à¥à¤¯à¥‚-à¤²à¤¿à¤¸à¥à¤Ÿ à¤•à¤µà¤°à¥‡à¤œ, 5 à¤ªà¤°à¤¿à¤µà¤¾à¤°à¥‹à¤‚ à¤•à¥‹ à¤•à¤¾à¤‰à¤‚à¤¸à¤²à¤¿à¤‚à¤— à¤šà¤¾à¤¹à¤¿à¤à¥¤", reportTbTitle: "TB à¤¸à¥à¤•à¥à¤°à¥€à¤¨à¤¿à¤‚à¤—", reportTbText: "11 à¤²à¤•à¥à¤·à¤£ à¤œà¤¾à¤‚à¤š, 2 sputum à¤°à¥‡à¤«à¤°à¤² à¤²à¤‚à¤¬à¤¿à¤¤à¥¤",
      learnTitle: "à¤¤à¥à¤µà¤°à¤¿à¤¤ à¤¸à¥€à¤–à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤•à¤¾à¤°à¥à¤¡", learnText: "à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ ASHA à¤¸à¤µà¤¾à¤²à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤›à¥‹à¤Ÿà¥‡ à¤«à¥€à¤²à¥à¤¡ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨à¥¤", learnPregTitle: "à¤—à¤°à¥à¤­à¤¾à¤µà¤¸à¥à¤¥à¤¾ à¤–à¤¤à¤°à¥‡ à¤•à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤", learnPregText: "à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤–à¥‚à¤¨, à¤¦à¥Œà¤°à¥‡, à¤¤à¥‡à¤œ à¤¸à¤¿à¤°à¤¦à¤°à¥à¤¦, à¤¸à¥‚à¤œà¤¨, à¤¬à¥à¤–à¤¾à¤°, à¤¸à¤¾à¤‚à¤¸ à¤«à¥‚à¤²à¤¨à¤¾ à¤¯à¤¾ à¤¬à¤šà¥à¤šà¥‡ à¤•à¥€ à¤¹à¤²à¤šà¤² à¤•à¤® à¤¹à¥‹à¤¨à¤¾ à¤¤à¤¤à¥à¤•à¤¾à¤² à¤à¤¸à¥à¤•à¥‡à¤²à¥‡à¤¶à¤¨ à¤šà¤¾à¤¹à¤¿à¤à¥¤", learnNewTitle: "à¤¨à¤µà¤œà¤¾à¤¤ à¤–à¤¤à¤°à¥‡ à¤•à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤", learnNewText: "à¤¦à¥‚à¤§ à¤¨ à¤ªà¥€à¤¨à¤¾, à¤¤à¥‡à¤œ à¤¸à¤¾à¤‚à¤¸, à¤¬à¥à¤–à¤¾à¤°, à¤ à¤‚à¤¡à¤¾ à¤¶à¤°à¥€à¤°, à¤ªà¥€à¤²à¥€ à¤¹à¤¥à¥‡à¤²à¥€/à¤¤à¤²à¤µà¤¾, à¤¦à¥Œà¤°à¥‡ à¤¯à¤¾ à¤¸à¥à¤¸à¥à¤¤à¥€ à¤®à¥‡à¤‚ à¤°à¥‡à¤«à¤°à¤² à¤šà¤¾à¤¹à¤¿à¤à¥¤", learnOrsTitle: "ORS à¤”à¤° zinc", learnOrsText: "à¤¦à¤¸à¥à¤¤ à¤®à¥‡à¤‚ à¤¹à¤° à¤ªà¤¤à¤²à¥‡ à¤®à¤² à¤•à¥‡ à¤¬à¤¾à¤¦ ORS à¤¦à¥‡à¤‚, à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤ªà¥à¤°à¥‹à¤Ÿà¥‹à¤•à¥‰à¤² à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° zinc à¤¦à¥‡à¤‚ à¤”à¤° à¤–à¤¤à¤°à¥‡ à¤•à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤ à¤ªà¤° à¤°à¥‡à¤«à¤° à¤•à¤°à¥‡à¤‚à¥¤", askMore: "à¤”à¤° à¤ªà¥‚à¤›à¥‡à¤‚",
      communityTitle: "ASHA à¤¸à¤®à¥à¤¦à¤¾à¤¯ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾", communityText: "à¤•à¤¾à¤°à¥à¤¯à¤•à¤°à¥à¤¤à¤¾ ANM, à¤†à¤‚à¤—à¤¨à¤µà¤¾à¤¡à¤¼à¥€, PHC à¤”à¤° à¤‰à¤¸à¥€ à¤¬à¥à¤²à¥‰à¤• à¤•à¥€ à¤…à¤¨à¥à¤¯ ASHA à¤¸à¥‡ à¤¸à¤®à¤¨à¥à¤µà¤¯ à¤•à¤° à¤¸à¤•à¤¤à¥€ à¤¹à¥ˆà¤‚à¥¤", commAnnTitle: "à¤¬à¥à¤²à¥‰à¤• à¤˜à¥‹à¤·à¤£à¤¾à¤à¤‚", commAnnText: "VHND à¤¶à¥‡à¤¡à¥à¤¯à¥‚à¤², à¤µà¥ˆà¤•à¥à¤¸à¥€à¤¨ à¤¸à¤ªà¥à¤²à¤¾à¤ˆ à¤…à¤ªà¤¡à¥‡à¤Ÿ, à¤Ÿà¥à¤°à¥‡à¤¨à¤¿à¤‚à¤— à¤¤à¤¾à¤°à¥€à¤– à¤”à¤° à¤…à¤­à¤¿à¤¯à¤¾à¤¨ à¤¡à¥‡à¤¡à¤²à¤¾à¤‡à¤¨à¥¤", commPeerTitle: "à¤¸à¤¹à¤•à¤°à¥à¤®à¥€ à¤®à¤¦à¤¦", commPeerText: "à¤ªà¤¾à¤¸ à¤•à¥€ ASHA à¤¸à¥‡ à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤¸à¥à¤Ÿà¥‰à¤•, à¤›à¥‚à¤Ÿà¥‡ à¤˜à¤° à¤•à¤¾ à¤¸à¥à¤¥à¤¾à¤¨ à¤¯à¤¾ à¤°à¥‡à¤«à¤°à¤² à¤…à¤¨à¥à¤­à¤µ à¤ªà¥‚à¤›à¥‡à¤‚à¥¤", commSupTitle: "à¤¸à¥à¤ªà¤°à¤µà¤¾à¤‡à¤œà¤° à¤¸à¤‚à¤¦à¥‡à¤¶", commSupText: "à¤…à¤¨à¤¸à¥à¤²à¤à¥‡ à¤®à¥à¤¦à¥à¤¦à¥‡ ANM, ASHA facilitator à¤¯à¤¾ PHC medical officer à¤¤à¤• à¤­à¥‡à¤œà¥‡à¤‚à¥¤",
      assistantTitle: "ASHA à¤«à¥€à¤²à¥à¤¡ à¤¸à¤¹à¤¾à¤¯à¤•", assistantGreeting: "à¤¨à¤®à¤¸à¥à¤¤à¥‡à¥¤ ANC, à¤¨à¤µà¤œà¤¾à¤¤ à¤¦à¥‡à¤–à¤­à¤¾à¤², à¤¦à¤¸à¥à¤¤, TB à¤²à¤•à¥à¤·à¤£, à¤­à¥à¤—à¤¤à¤¾à¤¨, à¤¸à¥à¤Ÿà¥‰à¤• à¤¯à¤¾ à¤°à¥‡à¤«à¤°à¤² à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤ªà¥‚à¤›à¥‡à¤‚à¥¤", assistantPh: "à¤…à¤ªà¤¨à¤¾ à¤¸à¤µà¤¾à¤² à¤²à¤¿à¤–à¥‡à¤‚...", footerText: "à¤¸à¤®à¥à¤¦à¤¾à¤¯ à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤•à¤¾à¤°à¥à¤¯à¤•à¤°à¥à¤¤à¤¾à¤“à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤«à¥€à¤²à¥à¤¡-à¤«à¤°à¥à¤¸à¥à¤Ÿ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾à¥¤", footerHelp: "à¤†à¤ªà¤¾à¤¤à¤•à¤¾à¤²: 108 | à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯: 104 | PHC à¤¡à¥‡à¤¸à¥à¤•: 1800 000 0000", copyMessage: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¥‡à¤‚", messageCopied: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥‰à¤ªà¥€ à¤¹à¥à¤†à¥¤",
      task1Title: "ANC à¤µà¤¿à¤œà¤¿à¤Ÿ: à¤®à¥€à¤¨à¤¾ à¤•à¥à¤®à¤¾à¤°à¥€, 8 à¤®à¤¾à¤¹ à¤—à¤°à¥à¤­à¤µà¤¤à¥€", task1Meta: "BP, à¤¸à¥‚à¤œà¤¨, IFA à¤Ÿà¥ˆà¤¬à¤²à¥‡à¤Ÿ à¤”à¤° à¤œà¤¨à¥à¤® à¤¯à¥‹à¤œà¤¨à¤¾ à¤œà¤¾à¤‚à¤šà¥‡à¤‚", task2Title: "à¤¨à¤µà¤œà¤¾à¤¤ à¤«à¥‰à¤²à¥‹-à¤…à¤ª: à¤°à¤¾à¤¨à¥€ à¤•à¤¾ à¤¬à¤šà¥à¤šà¤¾", task2Meta: "à¤¦à¤¿à¤¨ 7 à¤œà¤¾à¤‚à¤š: à¤¦à¥‚à¤§ à¤ªà¥€à¤¨à¤¾, à¤¤à¤¾à¤ªà¤®à¤¾à¤¨, à¤¨à¤¾à¤², à¤ªà¥€à¤²à¤¿à¤¯à¤¾", task3Title: "à¤Ÿà¥€à¤•à¤¾à¤•à¤°à¤£ à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤°: 5 à¤˜à¤°", task3Meta: "à¤•à¤² à¤•à¥‡ VHND à¤¸à¤¤à¥à¤° à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤ªà¤°à¤¿à¤µà¤¾à¤°à¥‹à¤‚ à¤•à¥‹ à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚", task4Title: "TB à¤¸à¥à¤•à¥à¤°à¥€à¤¨à¤¿à¤‚à¤—: à¤°à¤¾à¤® à¤ªà¥à¤°à¤¸à¤¾à¤¦", task4Meta: "2 à¤¸à¤ªà¥à¤¤à¤¾à¤¹ à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤–à¤¾à¤‚à¤¸à¥€, sputum test à¤°à¥‡à¤«à¤° à¤•à¤°à¥‡à¤‚", task5Title: "à¤®à¤¾à¤¸à¤¿à¤• à¤ªà¥à¤°à¥‹à¤¤à¥à¤¸à¤¾à¤¹à¤¨ à¤ªà¥à¤°à¤®à¤¾à¤£ à¤…à¤ªà¤¡à¥‡à¤Ÿ", task5Meta: "JSY, PNC à¤”à¤° à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤¨à¤¿à¤¯à¥‹à¤œà¤¨ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤¨à¥‹à¤Ÿ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
      itemOrs: "ORS à¤ªà¥ˆà¤•à¥‡à¤Ÿ", itemIfa: "IFA à¤Ÿà¥ˆà¤¬à¤²à¥‡à¤Ÿ", itemZinc: "Zinc à¤Ÿà¥ˆà¤¬à¤²à¥‡à¤Ÿ", itemPregKit: "à¤—à¤°à¥à¤­ à¤œà¤¾à¤‚à¤š à¤•à¤¿à¤Ÿ", itemCondom: "à¤•à¤‚à¤¡à¥‹à¤® à¤ªà¥ˆà¤•", itemPads: "à¤¸à¥ˆà¤¨à¤¿à¤Ÿà¤°à¥€ à¤ªà¥ˆà¤¡"
    });

    translations.or = {
      topEmergency: "à¬œà¬°à­à¬°à­€à¬•à¬¾à¬³à­€à¬¨: 108 | à¬¸à­à­±à¬¾à¬¸à­à¬¥à­à­Ÿ à¬¹à­‡à¬²à­à¬ªà¬²à¬¾à¬‡à¬¨: 104", topOffline: "à¬®à­‹à¬¬à¬¾à¬‡à¬², à¬•à¬®à­ à¬‡à¬£à­à¬Ÿà¬°à¬¨à­‡à¬Ÿ à¬à¬¬à¬‚ à¬…à¬«à¬²à¬¾à¬‡à¬¨ à¬¨à­‹à¬Ÿà¬°à­‡ à¬•à¬¾à¬® à¬•à¬°à­‡", brandSub: "à¬¸à­à­±à­€à¬•à­ƒà¬¤ à¬¸à¬¾à¬®à¬¾à¬œà¬¿à¬• à¬¸à­à­±à¬¾à¬¸à­à¬¥à­à­Ÿ à¬•à¬°à­à¬®à­€ à¬¸à¬¹à¬¾à­Ÿà¬¤à¬¾ à¬ªà­‹à¬°à­à¬Ÿà¬¾à¬²",
      navTools: "à¬‰à¬ªà¬•à¬°à¬£", navWorkspace: "à¬•à¬¾à¬°à­à¬¯à­à­Ÿà¬¸à­à¬¥à¬³", navCommunity: "à¬¸à¬®à­à¬¦à¬¾à­Ÿ", navLogin: "à¬²à¬—à¬‡à¬¨", heroTitle: "à¬ªà­à¬°à¬¤à­à­Ÿà­‡à¬• ASHA à¬•à¬°à­à¬®à­€à¬™à­à¬• à¬ªà¬¾à¬‡à¬ à¬—à­‹à¬Ÿà¬¿à¬ à¬®à­‹à¬¬à¬¾à¬‡à¬² à¬¡à­‡à¬¸à­à¬•à¥¤", heroText: "à¬˜à¬° à¬­à¬¿à¬œà¬¿à¬Ÿ à¬ªà­à¬²à¬¾à¬¨ à¬•à¬°à¬¨à­à¬¤à­, à¬‰à¬šà­à¬š-à¬œà­‹à¬–à¬¿à¬® à¬®à¬¾à¬† à¬“ à¬¶à¬¿à¬¶à­à¬™à­à¬•à­ à¬Ÿà­à¬°à¬¾à¬• à¬•à¬°à¬¨à­à¬¤à­, à¬¸à¬ªà­à¬²à¬¾à¬‡ à¬•à¬¿à¬®à­à¬¬à¬¾ à¬ªà­‡à¬®à­‡à¬£à­à¬Ÿ à¬¸à¬®à¬¸à­à­Ÿà¬¾ à¬ªà¬ à¬¾à¬¨à­à¬¤à­, à¬à¬¬à¬‚ à¬¤à­à¬°à¬¨à­à¬¤ à¬«à¬¿à¬²à­à¬¡ à¬®à¬¾à¬°à­à¬—à¬¦à¬°à­à¬¶à¬¨ à¬ªà¬¾à¬†à¬¨à­à¬¤à­à¥¤", startWork: "à¬†à¬œà¬¿à¬° à¬•à¬¾à¬® à¬†à¬°à¬®à­à¬­ à¬•à¬°à¬¨à­à¬¤à­", askHelp: "à¬«à¬¿à¬²à­à¬¡ à¬¸à¬¹à¬¾à­Ÿà¬•à¬™à­à¬•à­ à¬ªà¬šà¬¾à¬°à¬¨à­à¬¤à­", emergency: "à¬œà¬°à­à¬°à­€ à¬°à­‡à¬«à¬°à¬¾à¬²", visitsToday: "à¬†à¬œà¬¿à¬° à¬¯à­‹à¬œà¬¿à¬¤ à¬­à¬¿à¬œà¬¿à¬Ÿ", riskCases: "à¬‰à¬šà­à¬š à¬œà­‹à¬–à¬¿à¬® à¬«à¬²à­‹-à¬…à¬ª", stockAlerts: "à¬•à¬®à­ à¬·à­à¬Ÿà¬• à¬†à¬‡à¬Ÿà¬®", loggedInAs: "à¬²à¬—à¬‡à¬¨ à¬•à¬°à­à¬®à­€",
      priorityPregTitle: "à¬®à­€à¬¨à¬¾ à¬•à­à¬®à¬¾à¬°à­€ - ANC à¬¬à¬¿à¬ªà¬¦ à¬¸à¬™à­à¬•à­‡à¬¤", priorityPregText: "à¬¸à­à¬œà¬¨ à¬à¬¬à¬‚ BP à¬«à¬²à­‹-à¬…à¬ª à¬¸à¬¨à­à¬§à­à­Ÿà¬¾ 4:00 à¬ªà­‚à¬°à­à¬¬à¬°à­", priorityStockTitle: "ORS à¬ªà­à­Ÿà¬¾à¬•à­‡à¬Ÿ à¬•à¬®à­", priorityStockText: "à¬®à¬¾à¬¤à­à¬° 4à¬Ÿà¬¿ à¬¬à¬¾à¬•à¬¿à¥¤ ANM à¬·à­à¬Ÿà­‹à¬°à¬°à­ à¬°à¬¿à¬«à¬¿à¬² à¬®à¬¾à¬—à¬¨à­à¬¤à­à¥¤", priorityVhndTitle: "VHND à¬¸à­‡à¬¸à¬¨ à¬¸à­à¬®à¬°à¬£", priorityVhndText: "à¬†à¬™à­à¬—à¬¨à­±à¬¾à¬¡à¬¿ à¬•à­‡à¬¨à­à¬¦à­à¬° 2, à¬•à¬¾à¬²à¬¿ à¬¸à¬•à¬¾à¬³ 10:00",
      tagUrgent: "à¬œà¬°à­à¬°à­€", tagStock: "à¬·à­à¬Ÿà¬•", tagReady: "à¬ªà­à¬°à¬¸à­à¬¤à­à¬¤", tag4New: "4 à¬¨à­‚à¬†", tagActive: "à¬¸à¬•à­à¬°à¬¿à­Ÿ", tag2Pending: "2 à¬¬à¬¾à¬•à¬¿", tagNewborn: "à¬¨à¬¬à¬œà¬¾à¬¤", tagDue: "à¬¦à­‡à­Ÿ", tagReferral: "à¬°à­‡à¬«à¬°à¬¾à¬²", tagPayment: "à¬ªà­‡à¬®à­‡à¬£à­à¬Ÿ",
      toolsTitle: "ASHA à¬¸à¬®à¬¸à­à­Ÿà¬¾à¬•à­ à¬§à­à­Ÿà¬¾à¬¨à¬°à­‡ à¬°à¬–à¬¿ à¬¤à¬¿à¬†à¬°à¬¿", toolsText: "à¬à¬¹à¬¿ à¬ªà­‹à¬°à­à¬Ÿà¬¾à¬² à¬«à¬¿à¬²à­à¬¡à¬° à¬®à­à¬–à­à­Ÿ à¬¸à¬®à¬¸à­à­Ÿà¬¾ à¬‰à¬ªà¬°à­‡ à¬§à­à­Ÿà¬¾à¬¨ à¬¦à­‡à¬‡à¬›à¬¿: à¬…à¬§à¬¿à¬• à¬°à­‡à¬œà¬¿à¬·à­à¬Ÿà¬°, à¬¬à¬¿à¬³à¬®à­à¬¬à¬¿à¬¤ à¬à¬¸à­à¬•à­‡à¬²à­‡à¬¸à¬¨, à¬·à­à¬Ÿà¬• à¬•à¬®à¬¿à¬¬à¬¾, à¬ªà­‡à¬®à­‡à¬£à­à¬Ÿ à¬…à¬¨à¬¿à¬¶à­à¬šà¬¿à¬¤à¬¤à¬¾ à¬à¬¬à¬‚ à¬¤à­à¬°à¬¨à­à¬¤ à¬šà¬¿à¬•à¬¿à¬¤à­à¬¸à¬¾ à¬®à¬¾à¬°à­à¬—à¬¦à¬°à­à¬¶à¬¨à¬° à¬…à¬­à¬¾à¬¬à¥¤", toolVisitTitle: "à¬˜à¬° à¬­à¬¿à¬œà¬¿à¬Ÿ à¬ªà­à¬²à¬¾à¬¨à¬°", toolVisitText: "à¬—à¬¾à¬, à¬—à¬°à­à¬­à¬¾à¬¬à¬¸à­à¬¥à¬¾ à¬®à¬¾à¬¸, à¬¨à¬¬à¬œà¬¾à¬¤ à¬¬à­Ÿà¬¸, à¬Ÿà¬¿à¬•à¬¾à¬•à¬°à¬£ à¬¤à¬¾à¬°à¬¿à¬– à¬à¬¬à¬‚ à¬›à­à¬Ÿà¬¿à¬¯à¬¾à¬‡à¬¥à¬¿à¬¬à¬¾ à¬«à¬²à­‹-à¬…à¬ª à¬…à¬¨à­à¬¸à¬¾à¬°à­‡ à¬¦à­ˆà¬¨à¬¿à¬• à¬¤à¬¾à¬²à¬¿à¬•à¬¾à¥¤", toolRiskTitle: "à¬œà­‹à¬–à¬¿à¬® à¬¯à¬¾à¬žà­à¬š", toolRiskText: "à¬¬à¬¿à¬ªà¬¦ à¬¸à¬™à­à¬•à­‡à¬¤ à¬šà¬¿à¬¹à­à¬¨à¬Ÿ à¬•à¬°à¬¿ ANM, PHC à¬•à¬¿à¬®à­à¬¬à¬¾ à¬†à¬®à­à¬¬à­à¬²à¬¾à¬¨à­à¬¸ à¬ªà¬¾à¬‡à¬ à¬°à­‡à¬«à¬°à¬¾à¬² à¬¨à­‹à¬Ÿ à¬¤à¬¿à¬†à¬°à¬¿ à¬•à¬°à­‡à¥¤", toolStockTitle: "à¬”à¬·à¬§ à¬·à­à¬Ÿà¬•", toolStockText: "ORS, IFA, zinc, pregnancy kits, condoms, sanitary pads à¬à¬¬à¬‚ vaccine day material à¬Ÿà­à¬°à¬¾à¬• à¬•à¬°à­‡à¥¤", toolPayTitle: "à¬ªà­à¬°à­‹à¬¤à­à¬¸à¬¾à¬¹à¬¨ à¬¸à¬¹à¬¾à­Ÿà¬¤à¬¾", toolPayText: "à¬ªà­à¬°à¬®à¬¾à¬£, à¬•à¬¾à¬® à¬¶à­à¬°à­‡à¬£à­€, à¬®à¬¾à¬¸ à¬à¬¬à¬‚ à¬¸à­à¬¥à¬¿à¬¤à¬¿ à¬Ÿà­à¬°à¬¾à¬•à¬¿à¬‚ à¬¸à¬¹ à¬ªà­‡à¬®à­‡à¬£à­à¬Ÿ à¬¬à¬¿à¬³à¬®à­à¬¬ à¬‰à¬ à¬¾à¬¨à­à¬¤à­à¥¤",
      tabTasks: "à¬¦à­ˆà¬¨à¬¿à¬• à¬•à¬¾à¬®", tabReferral: "à¬°à­‡à¬«à¬°à¬¾à¬² à¬¸à¬¹à¬¾à­Ÿà¬¤à¬¾", tabStock: "à¬·à­à¬Ÿà¬•", tabProblems: "à¬¸à¬®à¬¸à­à­Ÿà¬¾", tabReports: "à¬°à¬¿à¬ªà­‹à¬°à­à¬Ÿ", tabLearn: "à¬¶à¬¿à¬–à¬¨à­à¬¤à­", tasksTitle: "à¬†à¬œà¬¿à¬° à¬«à¬¿à¬²à­à¬¡ à¬ªà­à¬²à¬¾à¬¨", tasksText: "à¬•à¬¾à¬® à¬¸à¬°à¬¿à¬²à­‡ à¬Ÿà¬¿à¬•à­ à¬•à¬°à¬¨à­à¬¤à­à¥¤ à¬ªà­à¬°à¬—à¬¤à¬¿ à¬à¬¹à¬¿ à¬«à­‹à¬¨à¬°à­‡ à¬¸à­‡à¬­ à¬¹à­‡à¬¬à¥¤", resetBtn: "à¬°à¬¿à¬¸à­‡à¬Ÿ",
      referralTitle: "à¬°à­‡à¬«à¬°à¬¾à¬² à¬¨à¬¿à¬·à­à¬ªà¬¤à­à¬¤à¬¿ à¬¸à¬¹à¬¾à­Ÿà¬•", referralText: "à¬­à¬¿à¬œà¬¿à¬Ÿ à¬¸à¬®à­Ÿà¬°à­‡ à¬¦à­‡à¬–à¬¾à¬¯à¬¾à¬‡à¬¥à¬¿à¬¬à¬¾ à¬¸à¬™à­à¬•à­‡à¬¤ à¬¬à¬¾à¬›à¬¨à­à¬¤à­à¥¤ à¬à¬¹à¬¾ à¬†à¬—à¬¾à¬®à­€ à¬•à¬¾à¬°à­à¬¯à­à­Ÿ à¬à¬¬à¬‚ à¬¸à¬¨à­à¬¦à­‡à¬¶ à¬¤à¬¿à¬†à¬°à¬¿ à¬•à¬°à­‡à¥¤", patientName: "à¬°à­‹à¬—à­€à¬™à­à¬• à¬¨à¬¾à¬®", patientNamePh: "à¬‰à¬¦à¬¾à¬¹à¬°à¬£: à¬®à­€à¬¨à¬¾ à¬•à­à¬®à¬¾à¬°à­€", caseType: "à¬•à­‡à¬¸ à¬ªà­à¬°à¬•à¬¾à¬°", casePregnancy: "à¬—à¬°à­à¬­à¬¾à¬¬à¬¸à­à¬¥à¬¾ / ANC", caseNewborn: "à¬¨à¬¬à¬œà¬¾à¬¤", caseChild: "à¬¶à¬¿à¬¶à­ à¬°à­‹à¬—", caseTb: "TB à¬²à¬•à­à¬·à¬£", caseFamily: "à¬ªà¬°à¬¿à¬¬à¬¾à¬° à¬¯à­‹à¬œà¬¨à¬¾", dangerSigns: "à¬¦à­‡à¬–à¬¾à¬¯à¬¾à¬‡à¬¥à¬¿à¬¬à¬¾ à¬¬à¬¿à¬ªà¬¦ à¬¸à¬™à­à¬•à­‡à¬¤", dangerSignsPh: "à¬…à¬§à¬¿à¬• à¬œà­à­±à¬°, à¬°à¬•à­à¬¤à¬¸à­à¬°à¬¾à¬¬, à¬¸à­à¬œà¬¨, à¬–à¬¿à¬šà­à¬£à¬¿, à¬¦à­à¬°à­à¬¬à¬³à¬¤à¬¾, à¬¶à­à­±à¬¾à¬¸à¬•à¬·à­à¬Ÿ...", village: "à¬—à¬¾à¬ / à­±à¬¾à¬°à­à¬¡", villagePh: "à­±à¬¾à¬°à­à¬¡ 8", transport: "à¬ªà¬°à¬¿à¬¬à¬¹à¬¨ à¬…à¬›à¬¿ à¬•à¬¿?", transportAmbulance: "à¬†à¬®à­à¬¬à­à¬²à¬¾à¬¨à­à¬¸ à¬¦à¬°à¬•à¬¾à¬°", transportFamily: "à¬ªà¬°à¬¿à¬¬à¬¾à¬° à¬—à¬¾à¬¡à¬¿ à¬…à¬›à¬¿", transportAnm: "ANM à¬¸à¬¹à¬¾à­Ÿà¬¤à¬¾ à¬¦à¬°à¬•à¬¾à¬°", createReferral: "à¬°à­‡à¬«à¬°à¬¾à¬² à¬•à¬¾à¬°à­à¬¯à­à­Ÿ à¬¤à¬¿à¬†à¬°à¬¿ à¬•à¬°à¬¨à­à¬¤à­",
      stockTitle: "à¬”à¬·à¬§ à¬à¬¬à¬‚ à¬•à¬¿à¬Ÿà­ à¬·à­à¬Ÿà¬•", stockText: "à¬¬à¬£à­à¬Ÿà¬¨ à¬ªà¬°à­‡ à¬ªà¬°à¬¿à¬®à¬¾à¬£ à¬…à¬ªà¬¡à­‡à¬Ÿ à¬•à¬°à¬¨à­à¬¤à­à¥¤ à¬•à¬®à­ à¬·à­à¬Ÿà¬• à¬†à¬‡à¬Ÿà¬® à¬¦à­‡à¬–à¬¾à¬¯à¬¿à¬¬à¥¤", saveStock: "à¬·à­à¬Ÿà¬• à¬¸à­‡à¬­ à¬•à¬°à¬¨à­à¬¤à­", stockItem: "à¬†à¬‡à¬Ÿà¬®", stockQty: "à¬¬à¬°à­à¬¤à­à¬¤à¬®à¬¾à¬¨ à¬ªà¬°à¬¿à¬®à¬¾à¬£", stockMin: "à¬¨à­à­Ÿà­‚à¬¨à¬¤à¬®", stockStatus: "à¬¸à­à¬¥à¬¿à¬¤à¬¿", requestRefill: "à¬°à¬¿à¬«à¬¿à¬² à¬®à¬¾à¬—à¬¨à­à¬¤à­", available: "à¬‰à¬ªà¬²à¬¬à­à¬§", stockSaved: "à¬·à­à¬Ÿà¬• à¬à¬¹à¬¿ à¬¡à¬¿à¬­à¬¾à¬‡à¬¸à¬°à­‡ à¬¸à­‡à¬­ à¬¹à­‡à¬²à¬¾à¥¤",
      problemTitle: "à¬•à¬¾à¬®à¬° à¬¸à¬®à¬¸à­à­Ÿà¬¾ à¬°à¬¿à¬ªà­‹à¬°à­à¬Ÿ à¬•à¬°à¬¨à­à¬¤à­", problemText: "à¬ªà­‡à¬®à­‡à¬£à­à¬Ÿ à¬¬à¬¿à¬³à¬®à­à¬¬, à¬·à­à¬Ÿà¬• à¬•à¬®à¬¿à¬¬à¬¾, à¬¹à­‡à¬°à¬¾à¬¸à¬®à­‡à¬£à­à¬Ÿ, à¬ªà¬°à¬¿à¬¬à¬¹à¬¨ à¬•à¬¿à¬®à­à¬¬à¬¾ à¬†à¬ªà­ à¬¸à¬®à¬¸à­à­Ÿà¬¾ à¬ªà¬¾à¬‡à¬ à¬¬à­à­Ÿà¬¬à¬¹à¬¾à¬° à¬•à¬°à¬¨à­à¬¤à­à¥¤", problemType: "à¬¸à¬®à¬¸à­à­Ÿà¬¾ à¬ªà­à¬°à¬•à¬¾à¬°", problemPayment: "à¬ªà­à¬°à­‹à¬¤à­à¬¸à¬¾à¬¹à¬¨/à¬ªà­‡à¬®à­‡à¬£à­à¬Ÿ à¬¬à¬¿à¬³à¬®à­à¬¬", problemStock: "à¬”à¬·à¬§ à¬•à¬¿à¬®à­à¬¬à¬¾ à¬•à¬¿à¬Ÿà­ à¬•à¬®à¬¿à¬¬à¬¾", problemTransport: "à¬ªà¬°à¬¿à¬¬à¬¹à¬¨/à¬°à­‡à¬«à¬°à¬¾à¬² à¬¸à¬®à¬¸à­à­Ÿà¬¾", problemApp: "à¬†à¬ªà­/à¬¡à¬¾à¬Ÿà¬¾ à¬¸à¬®à¬¸à­à­Ÿà¬¾", problemSafety: "à¬¸à­à¬°à¬•à­à¬·à¬¾ à¬•à¬¿à¬®à­à¬¬à¬¾ à¬¹à­‡à¬°à¬¾à¬¸à¬®à­‡à¬£à­à¬Ÿ", problemMonth: "à¬®à¬¾à¬¸", problemDetails: "à¬¬à¬¿à¬¬à¬°à¬£à­€", problemDetailsPh: "à¬¸à¬®à¬¸à­à­Ÿà¬¾, à¬¸à­à¬¥à¬¾à¬¨, à¬¯à¬¾à¬¹à¬¾à¬™à­à¬•à­ à¬¯à­‹à¬—à¬¾à¬¯à­‹à¬— à¬•à¬²à­‡ à¬à¬¬à¬‚ à¬ªà­à¬°à¬®à¬¾à¬£ à¬²à­‡à¬–à¬¨à­à¬¤à­à¥¤", submitProblem: "à¬¸à¬®à¬¸à­à­Ÿà¬¾ à¬ªà¬ à¬¾à¬¨à­à¬¤à­",
      reportsTitle: "à¬®à¬¾à¬¸à¬¿à¬• à¬•à¬¾à¬® à¬¸à¬¾à¬°à¬¾à¬‚à¬¶", reportsText: "à¬¸à¬®à­€à¬•à­à¬·à¬¾ à¬¬à­ˆà¬ à¬•à¬°à­‡ à¬¸à­‡à­Ÿà¬¾à¬° à¬•à¬°à¬¿à¬¬à¬¾ à¬ªà¬¾à¬‡à¬ à¬¤à­à­±à¬°à¬¿à¬¤ à¬­à­à­Ÿà­à¥¤", downloadReport: "à¬Ÿà­‡à¬•à­à¬¸à¬Ÿ à¬°à¬¿à¬ªà­‹à¬°à­à¬Ÿ à¬¡à¬¾à¬‰à¬¨à¬²à­‹à¬¡", reportAncTitle: "ANC à¬«à¬²à­‹-à¬…à¬ª", reportAncText: "38 à¬­à¬¿à¬œà¬¿à¬Ÿ à¬¸à¬°à¬¿à¬›à¬¿, 3 à¬‰à¬šà­à¬š à¬œà­‹à¬–à¬¿à¬® à¬°à­‡à¬«à¬°à¬¾à¬² à¬¹à­‹à¬‡à¬›à¬¿à¥¤", reportImmTitle: "à¬¶à¬¿à¬¶à­ à¬Ÿà¬¿à¬•à¬¾à¬•à¬°à¬£", reportImmText: "92% due-list à¬•à¬­à¬°à­‡à¬œ, 5 à¬ªà¬°à¬¿à¬¬à¬¾à¬°à¬•à­ à¬•à¬¾à¬‰à¬¨à¬¸à­‡à¬²à¬¿à¬‚ à¬¦à¬°à¬•à¬¾à¬°à¥¤", reportTbTitle: "TB à¬¸à­à¬•à­à¬°à¬¿à¬¨à¬¿à¬‚", reportTbText: "11 à¬²à¬•à­à¬·à¬£ à¬¯à¬¾à¬žà­à¬š, 2 sputum à¬°à­‡à¬«à¬°à¬¾à¬² à¬¬à¬¾à¬•à¬¿à¥¤",
      learnTitle: "à¬¤à­à¬°à¬¨à­à¬¤ à¬¶à¬¿à¬–à¬¿à¬¬à¬¾ à¬•à¬¾à¬°à­à¬¡", learnText: "à¬¸à¬¾à¬§à¬¾à¬°à¬£ ASHA à¬ªà­à¬°à¬¶à­à¬¨ à¬ªà¬¾à¬‡à¬ à¬›à­‹à¬Ÿ à¬«à¬¿à¬²à­à¬¡ à¬®à¬¾à¬°à­à¬—à¬¦à¬°à­à¬¶à¬¨à¥¤", learnPregTitle: "à¬—à¬°à­à¬­à¬¾à¬¬à¬¸à­à¬¥à¬¾ à¬¬à¬¿à¬ªà¬¦ à¬¸à¬™à­à¬•à­‡à¬¤", learnPregText: "à¬…à¬§à¬¿à¬• à¬°à¬•à­à¬¤à¬¸à­à¬°à¬¾à¬¬, à¬–à¬¿à¬šà­à¬£à¬¿, à¬®à­à¬£à­à¬¡ à¬¬à¬¿à¬¨à­à¬§à¬¾, à¬¸à­à¬œà¬¨, à¬œà­à­±à¬°, à¬¶à­à­±à¬¾à¬¸à¬•à¬·à­à¬Ÿ à¬•à¬¿à¬®à­à¬¬à¬¾ à¬¶à¬¿à¬¶à­ à¬—à¬¤à¬¿ à¬•à¬®à¬¿à¬¬à¬¾à¬°à­‡ à¬¤à­à¬°à¬¨à­à¬¤ à¬à¬¸à­à¬•à­‡à¬²à­‡à¬¸à¬¨ à¬¦à¬°à¬•à¬¾à¬°à¥¤", learnNewTitle: "à¬¨à¬¬à¬œà¬¾à¬¤ à¬¬à¬¿à¬ªà¬¦ à¬¸à¬™à­à¬•à­‡à¬¤", learnNewText: "à¬¦à­à¬§ à¬¨ à¬ªà¬¿à¬¬à¬¾, à¬¤à­€à¬¬à­à¬° à¬¶à­à­±à¬¾à¬¸, à¬œà­à­±à¬°, à¬¥à¬£à­à¬¡à¬¾ à¬¶à¬°à­€à¬°, à¬¹à¬³à¬¦à¬¿à¬† à¬¤à¬¾à¬³à­/à¬ªà¬¾à¬¦, à¬–à¬¿à¬šà­à¬£à¬¿ à¬•à¬¿à¬®à­à¬¬à¬¾ à¬¸à­à¬¸à­à¬¤à¬¤à¬¾à¬°à­‡ à¬°à­‡à¬«à¬°à¬¾à¬² à¬¦à¬°à¬•à¬¾à¬°à¥¤", learnOrsTitle: "ORS à¬à¬¬à¬‚ zinc", learnOrsText: "à¬¡à¬¾à­Ÿà¬¾à¬°à¬¿à¬†à¬°à­‡ à¬ªà­à¬°à¬¤à­à­Ÿà­‡à¬• à¬ªà¬¾à¬¤à¬³à¬¾ à¬®à¬³ à¬ªà¬°à­‡ ORS à¬¦à¬¿à¬…à¬¨à­à¬¤à­, à¬¸à­à¬¥à¬¾à¬¨à­€à­Ÿ à¬ªà­à¬°à­‹à¬Ÿà­‹à¬•à¬² à¬…à¬¨à­à¬¸à¬¾à¬°à­‡ zinc à¬¦à¬¿à¬…à¬¨à­à¬¤à­ à¬à¬¬à¬‚ à¬¬à¬¿à¬ªà¬¦ à¬¸à¬™à­à¬•à­‡à¬¤à¬°à­‡ à¬°à­‡à¬«à¬° à¬•à¬°à¬¨à­à¬¤à­à¥¤", askMore: "à¬…à¬§à¬¿à¬• à¬ªà¬šà¬¾à¬°à¬¨à­à¬¤à­",
      communityTitle: "ASHA à¬¸à¬®à­à¬¦à¬¾à­Ÿ à¬¸à¬¹à¬¾à­Ÿà¬¤à¬¾", communityText: "à¬•à¬°à­à¬®à­€à¬®à¬¾à¬¨à­‡ ANM, à¬†à¬™à­à¬—à¬¨à­±à¬¾à¬¡à¬¿, PHC à¬à¬¬à¬‚ à¬¸à­‡à¬¹à¬¿ à¬¬à­à¬²à¬•à¬° à¬…à¬¨à­à­Ÿ ASHA à¬¸à¬¹ à¬¸à¬®à¬¨à­à­±à­Ÿ à¬•à¬°à¬¿à¬ªà¬¾à¬°à¬¿à¬¬à­‡à¥¤", commAnnTitle: "à¬¬à­à¬²à¬• à¬˜à­‹à¬·à¬£à¬¾", commAnnText: "VHND à¬¸à­‚à¬šà­€, à¬Ÿà¬¿à¬•à¬¾ à¬¸à¬ªà­à¬²à¬¾à¬‡ à¬…à¬ªà¬¡à­‡à¬Ÿ, à¬Ÿà­à¬°à­‡à¬¨à¬¿à¬‚ à¬¤à¬¾à¬°à¬¿à¬– à¬à¬¬à¬‚ à¬•à­à­Ÿà¬¾à¬®à­à¬ªà­‡à¬¨ à¬¡à­‡à¬¡à¬²à¬¾à¬‡à¬¨à¥¤", commPeerTitle: "à¬¸à¬¹à¬•à¬°à­à¬®à­€ à¬¸à¬¹à¬¾à­Ÿà¬¤à¬¾", commPeerText: "à¬¨à¬¿à¬•à¬Ÿà¬° ASHAà¬™à­à¬•à­ à¬…à¬¤à¬¿à¬°à¬¿à¬•à­à¬¤ à¬·à­à¬Ÿà¬•, à¬›à­à¬Ÿà¬¿à¬¯à¬¾à¬‡à¬¥à¬¿à¬¬à¬¾ à¬˜à¬°à¬° à¬¸à­à¬¥à¬¾à¬¨ à¬•à¬¿à¬®à­à¬¬à¬¾ à¬°à­‡à¬«à¬°à¬¾à¬² à¬…à¬¨à­à¬­à¬¬ à¬ªà¬šà¬¾à¬°à¬¨à­à¬¤à­à¥¤", commSupTitle: "à¬¸à­à¬ªà¬°à¬­à¬¾à¬‡à¬œà¬° à¬¸à¬¨à­à¬¦à­‡à¬¶", commSupText: "à¬…à¬¨à¬¸à¬²à¬­à­ à¬®à­à¬¦à­à¬¦à¬¾ ANM, ASHA facilitator à¬•à¬¿à¬®à­à¬¬à¬¾ PHC medical officerà¬™à­à¬•à­ à¬ªà¬ à¬¾à¬¨à­à¬¤à­à¥¤",
      assistantTitle: "ASHA à¬«à¬¿à¬²à­à¬¡ à¬¸à¬¹à¬¾à­Ÿà¬•", assistantGreeting: "à¬¨à¬®à¬¸à­à¬•à¬¾à¬°à¥¤ ANC, à¬¨à¬¬à¬œà¬¾à¬¤ à¬¯à¬¤à­à¬¨, à¬¡à¬¾à­Ÿà¬¾à¬°à¬¿à¬†, TB à¬²à¬•à­à¬·à¬£, à¬ªà­‡à¬®à­‡à¬£à­à¬Ÿ, à¬·à­à¬Ÿà¬• à¬•à¬¿à¬®à­à¬¬à¬¾ à¬°à­‡à¬«à¬°à¬¾à¬² à¬¬à¬¿à¬·à­Ÿà¬°à­‡ à¬ªà¬šà¬¾à¬°à¬¨à­à¬¤à­à¥¤", assistantPh: "à¬†à¬ªà¬£à¬™à­à¬• à¬ªà­à¬°à¬¶à­à¬¨ à¬²à­‡à¬–à¬¨à­à¬¤à­...", footerText: "à¬¸à¬®à­à¬¦à¬¾à­Ÿ à¬¸à­à­±à¬¾à¬¸à­à¬¥à­à­Ÿ à¬•à¬°à­à¬®à­€à¬™à­à¬• à¬ªà¬¾à¬‡à¬ à¬«à¬¿à¬²à­à¬¡-à¬«à¬°à­à¬·à­à¬Ÿ à¬¸à¬¹à¬¾à­Ÿà¬¤à¬¾à¥¤", footerHelp: "à¬œà¬°à­à¬°à­€: 108 | à¬¸à­à­±à¬¾à¬¸à­à¬¥à­à­Ÿ: 104 | PHC à¬¡à­‡à¬¸à­à¬•: 1800 000 0000", copyMessage: "à¬¸à¬¨à­à¬¦à­‡à¬¶ à¬•à¬ªà¬¿ à¬•à¬°à¬¨à­à¬¤à­", messageCopied: "à¬¸à¬¨à­à¬¦à­‡à¬¶ à¬•à¬ªà¬¿ à¬¹à­‡à¬²à¬¾à¥¤",
      task1Title: "ANC à¬­à¬¿à¬œà¬¿à¬Ÿ: à¬®à­€à¬¨à¬¾ à¬•à­à¬®à¬¾à¬°à­€, 8 à¬®à¬¾à¬¸ à¬—à¬°à­à¬­à¬¬à¬¤à­€", task1Meta: "BP, à¬¸à­à¬œà¬¨, IFA à¬Ÿà¬¾à¬¬à¬²à­‡à¬Ÿ à¬à¬¬à¬‚ à¬œà¬¨à­à¬® à¬ªà­à¬²à¬¾à¬¨ à¬¯à¬¾à¬žà­à¬š à¬•à¬°à¬¨à­à¬¤à­", task2Title: "à¬¨à¬¬à¬œà¬¾à¬¤ à¬«à¬²à­‹-à¬…à¬ª: à¬°à¬¾à¬£à­€à¬™à­à¬• à¬¶à¬¿à¬¶à­", task2Meta: "à¬¦à¬¿à¬¨ 7 à¬¯à¬¾à¬žà­à¬š: à¬¦à­à¬§ à¬ªà¬¿à¬¬à¬¾, à¬¤à¬¾à¬ªà¬®à¬¾à¬¤à­à¬°à¬¾, à¬¨à¬¾à¬­à¬¿, à¬œà¬£à­à¬¡à¬¿à¬¸", task3Title: "à¬Ÿà¬¿à¬•à¬¾à¬•à¬°à¬£ à¬¸à­à¬®à¬°à¬£: 5 à¬˜à¬°", task3Meta: "à¬•à¬¾à¬²à¬¿à¬° VHND à¬¸à­‡à¬¸à¬¨ à¬ªà­‚à¬°à­à¬¬à¬°à­ à¬ªà¬°à¬¿à¬¬à¬¾à¬°à¬•à­ à¬•à¬² à¬•à¬°à¬¨à­à¬¤à­", task4Title: "TB à¬¸à­à¬•à­à¬°à¬¿à¬¨à¬¿à¬‚: à¬°à¬¾à¬® à¬ªà­à¬°à¬¸à¬¾à¬¦", task4Meta: "2 à¬¸à¬ªà­à¬¤à¬¾à¬¹à¬°à­ à¬…à¬§à¬¿à¬• à¬•à¬¾à¬¶, sputum test à¬°à­‡à¬«à¬° à¬•à¬°à¬¨à­à¬¤à­", task5Title: "à¬®à¬¾à¬¸à¬¿à¬• à¬ªà­à¬°à­‹à¬¤à­à¬¸à¬¾à¬¹à¬¨ à¬ªà­à¬°à¬®à¬¾à¬£ à¬…à¬ªà¬¡à­‡à¬Ÿ", task5Meta: "JSY, PNC à¬à¬¬à¬‚ family planning à¬•à¬¾à¬°à­à¬¯à­à­Ÿ à¬¨à­‹à¬Ÿ à¬…à¬ªà¬²à­‹à¬¡ à¬•à¬°à¬¨à­à¬¤à­",
      itemOrs: "ORS à¬ªà­à­Ÿà¬¾à¬•à­‡à¬Ÿ", itemIfa: "IFA à¬Ÿà¬¾à¬¬à¬²à­‡à¬Ÿ", itemZinc: "Zinc à¬Ÿà¬¾à¬¬à¬²à­‡à¬Ÿ", itemPregKit: "à¬—à¬°à­à¬­ à¬¯à¬¾à¬žà­à¬š à¬•à¬¿à¬Ÿà­", itemCondom: "à¬•à¬£à­à¬¡à­‹à¬® à¬ªà­à­Ÿà¬¾à¬•", itemPads: "à¬¸à¬¾à¬¨à¬¿à¬Ÿà¬¾à¬°à¬¿ à¬ªà­à­Ÿà¬¾à¬¡"
    };

    let currentLang = localStorage.getItem("ashaLang") || "en";

    const defaultTasks = [
      { titleKey: "task1Title", metaKey: "task1Meta", tagKey: "tagUrgent", tone: "red" },
      { titleKey: "task2Title", metaKey: "task2Meta", tagKey: "tagNewborn", tone: "orange" },
      { titleKey: "task3Title", metaKey: "task3Meta", tagKey: "tagDue", tone: "green" },
      { titleKey: "task4Title", metaKey: "task4Meta", tagKey: "tagReferral", tone: "orange" },
      { titleKey: "task5Title", metaKey: "task5Meta", tagKey: "tagPayment", tone: "green" }
    ];

    const defaultStock = [
      { itemKey: "itemOrs", qty: 4, min: 10 },
      { itemKey: "itemIfa", qty: 62, min: 50 },
      { itemKey: "itemZinc", qty: 8, min: 20 },
      { itemKey: "itemPregKit", qty: 14, min: 8 },
      { itemKey: "itemCondom", qty: 35, min: 20 },
      { itemKey: "itemPads", qty: 28, min: 15 }
    ];

    const cp1252Bytes = {
      0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87,
      0x02c6: 0x88, 0x2030: 0x89, 0x0160: 0x8a, 0x2039: 0x8b, 0x0152: 0x8c, 0x017d: 0x8e,
      0x2018: 0x91, 0x2019: 0x92, 0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
      0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b, 0x0153: 0x9c, 0x017e: 0x9e, 0x0178: 0x9f
    };

    const utf8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { fatal: true }) : null;

    function decodeMojibake(value) {
      if (typeof value !== "string" || !/[\u00c0-\u00ff][\u0080-\u00ff]/.test(value)) {
        return value;
      }

      try {
        const bytes = Uint8Array.from([...value], char => {
          const code = char.charCodeAt(0);
          return cp1252Bytes[code] ?? (code <= 0xff ? code : 0x3f);
        });
        return utf8Decoder ? utf8Decoder.decode(bytes) : decodeURIComponent(escape(value));
      } catch (error) {
        return value;
      }
    }

    function t(key) {
      const value = translations[currentLang]?.[key] || translations.en[key] || key;
      return decodeMojibake(value);
    }

    let tasks = JSON.parse(localStorage.getItem("ashaTasks") || "null") || defaultTasks.map(task => ({ ...task, done: false }));
    let stock = JSON.parse(localStorage.getItem("ashaStock") || "null") || defaultStock;

    if (!tasks.every(task => task.titleKey)) {
      tasks = defaultTasks.map(task => ({ ...task, done: false }));
      localStorage.setItem("ashaTasks", JSON.stringify(tasks));
    }

    if (!stock.every(row => row.itemKey)) {
      stock = defaultStock;
      localStorage.setItem("ashaStock", JSON.stringify(stock));
    }

    function renderTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const row = document.createElement("label");
        row.className = "task" + (task.done ? " done" : "");
        const title = task.titleKey ? t(task.titleKey) : task.title;
        const meta = task.metaKey ? t(task.metaKey) : task.meta;
        const tag = task.tagKey ? t(task.tagKey) : task.tag;
        row.innerHTML = `
          <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleTask(${index})">
          <span><strong>${title}</strong><br><small>${meta}</small></span>
          <span class="tag ${task.tone}">${tag}</span>
        `;
        taskList.appendChild(row);
      });
      document.getElementById("visitCount").textContent = tasks.filter(task => !task.done).length + 7;
    }

    function toggleTask(index) {
      tasks[index].done = !tasks[index].done;
      localStorage.setItem("ashaTasks", JSON.stringify(tasks));
      renderTasks();
    }

    function resetTasks() {
      tasks = defaultTasks.map(task => ({ ...task, done: false }));
      localStorage.setItem("ashaTasks", JSON.stringify(tasks));
      renderTasks();
    }

    function renderStock() {
      const body = document.getElementById("stockBody");
      body.innerHTML = "";
      stock.forEach((row, index) => {
        const low = Number(row.qty) < Number(row.min);
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row.itemKey ? t(row.itemKey) : row.item}</td>
          <td><input type="number" min="0" value="${row.qty}" onchange="updateStock(${index}, this.value)"></td>
          <td>${row.min}</td>
          <td><span class="tag ${low ? "red" : "green"}">${low ? t("requestRefill") : t("available")}</span></td>
        `;
        body.appendChild(tr);
      });
    }

    function updateStock(index, value) {
      stock[index].qty = Number(value);
      renderStock();
    }

    function saveStock() {
      localStorage.setItem("ashaStock", JSON.stringify(stock));
      alert(t("stockSaved"));
    }

    function buildReferral() {
      const name = document.getElementById("patientName").value.trim() || "Patient";
      const type = document.getElementById("caseType").value;
      const signs = document.getElementById("dangerSigns").value.trim() || "Danger signs reported";
      const village = document.getElementById("village").value.trim() || "local area";
      const transport = document.getElementById("transport").value;
      const urgentWords = ["bleeding", "fits", "convulsion", "breath", "fever", "swelling", "unconscious", "jaundice", "not feeding"];
      const urgent = urgentWords.some(word => signs.toLowerCase().includes(word));
      const action = urgent ? "Call 108 now, inform ANM/PHC, keep patient warm and do not delay referral." : "Inform ANM, schedule same-day PHC review, and monitor symptoms.";
      const message = `Referral note: ${name}, ${type}, ${village}. Signs: ${signs}. Transport: ${transport}. Action: ${action}`;
      const result = document.getElementById("referralResult");
      result.style.display = "block";
      result.innerHTML = `<strong>${urgent ? "Urgent referral recommended" : "Medical review recommended"}</strong><br>${message}<br><br><button class="secondary-btn" type="button" onclick="copyText('${encodeURIComponent(message)}')"><i class="fa-solid fa-copy"></i> ${t("copyMessage")}</button>`;
    }

    function submitGrievance() {
      const type = document.getElementById("problemType").value;
      const month = document.getElementById("problemMonth").value || "Not selected";
      const details = document.getElementById("problemDetails").value.trim() || "No details added";
      const id = "ASHA-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      const result = document.getElementById("grievanceResult");
      result.style.display = "block";
      result.innerHTML = `<strong>Problem submitted: ${id}</strong><br>Type: ${type}<br>Month: ${month}<br>Details: ${details}<br>Status: Sent to ASHA facilitator queue.`;
    }

    function downloadReport() {
      const report = [
        "ASHA Saathi Monthly Summary",
        "Worker: Savita Devi, Ward 8",
        "ANC follow-ups: 38",
        "High-risk referrals: 3",
        "Child immunization coverage: 92%",
        "TB symptom checks: 11",
        "Low stock: ORS packets, Zinc tablets"
      ].join("\\n");
      const blob = new Blob([report], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "asha-monthly-summary.txt";
      link.click();
      URL.revokeObjectURL(url);
    }

    function copyText(encodedText) {
      navigator.clipboard.writeText(decodeURIComponent(encodedText));
      alert(t("messageCopied"));
    }

    function openAssistant(prefill) {
      document.getElementById("assistant").classList.add("open");
      if (prefill) {
        document.getElementById("assistantInput").value = prefill;
        document.getElementById("assistantInput").focus();
      }
    }

    function closeAssistant() {
      document.getElementById("assistant").classList.remove("open");
    }

    function askAssistant(event) {
      event.preventDefault();
      const input = document.getElementById("assistantInput");
      const text = input.value.trim();
      if (!text) return;
      addMessage(text, "user");
      input.value = "";
      addMessage(answerFor(text), "bot");
    }

    function addMessage(text, type) {
      const log = document.getElementById("assistantLog");
      const msg = document.createElement("div");
      msg.className = "msg " + type;
      msg.textContent = text;
      log.appendChild(msg);
      log.scrollTop = log.scrollHeight;
    }

    function answerFor(text) {
      const q = text.toLowerCase();
      if (q.includes("preg") || q.includes("anc") || q.includes("bleeding") || q.includes("swelling")) {
        return "For pregnancy danger signs such as bleeding, fits, severe headache, swelling, high fever, breathlessness, or reduced fetal movement: call ANM/PHC immediately and arrange 108 referral. Record BP, month of pregnancy, village, and family phone.";
      }
      if (q.includes("newborn") || q.includes("feeding") || q.includes("jaundice")) {
        return "For newborn danger signs: not feeding, fast breathing, fever, cold body, yellow palms/soles, convulsions, or lethargy need urgent facility referral. Keep the baby warm and support breastfeeding while arranging transport.";
      }
      if (q.includes("diarr") || q.includes("ors") || q.includes("zinc")) {
        return "Give ORS after every loose stool and counsel caregivers on fluids and feeding. Zinc should be given as per local protocol. Refer urgently if there is blood in stool, repeated vomiting, sunken eyes, lethargy, or inability to drink.";
      }
      if (q.includes("tb") || q.includes("cough")) {
        return "If cough lasts more than 2 weeks, fever, weight loss, night sweats, or TB contact history is present, refer for sputum testing and notify the ANM. Track the test result and treatment start date.";
      }
      if (q.includes("payment") || q.includes("incentive") || q.includes("money")) {
        return "For incentive delay, submit the problem form with month, activity type, beneficiary name or ID, and proof. Keep the generated problem ID for review with the ASHA facilitator.";
      }
      if (q.includes("stock") || q.includes("medicine") || q.includes("kit")) {
        return "Update stock quantities after distribution. When any item goes below minimum, request refill from ANM store and mention current quantity, expected VHND date, and urgent households.";
      }
      return "I can help with ANC, newborn care, diarrhea, TB screening, stock, incentive delays, and referrals. Add the patient age, symptoms, village, and urgency so I can suggest the next field action.";
    }

    function callEmergency() {
      const ok = confirm("Emergency referral: call 108 and inform ANM/PHC. Do you want to open the phone dialer?");
      if (ok) window.location.href = "tel:108";
    }

    document.querySelectorAll(".tab-btn").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
      });
    });

    function applyLanguage(lang) {
      currentLang = translations[lang] ? lang : "en";
      localStorage.setItem("ashaLang", currentLang);
      document.documentElement.lang = currentLang === "or" ? "or" : currentLang;

      document.querySelectorAll(".lang-toggle button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === currentLang);
      });

      document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.dataset.i18n);
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
      });

      renderTasks();
      renderStock();
    }

    document.querySelectorAll(".lang-toggle button").forEach(button => {
      button.addEventListener("click", () => applyLanguage(button.dataset.lang));
    });

    applyLanguage(currentLang);
