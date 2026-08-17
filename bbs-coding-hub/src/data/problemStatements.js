export const problemStatements = [
  {
    id: 1,
    code: 'PS-01',
    title: 'Community Health Risk Screening and Referral System',
    category: 'Software',
    theme: 'MedTech / BioTech / HealthTech',
    background: 'In semi-urban and rural communities, access to timely healthcare screening and specialist consultation can be limited. Individuals may delay seeking medical attention because they are unable to determine the seriousness of their symptoms or do not have immediate access to appropriate healthcare facilities. Community health workers often collect health-related information manually, but such information may not be systematically organized, prioritized, or connected to an appropriate referral mechanism.',
    detailedProblem: 'Develop a technology-based system that enables individuals or authorized community health workers to record basic health indicators, symptoms, and relevant health information. The system should analyze the collected information using validated rule-based methods or machine-learning techniques to identify potentially high-risk cases.\n\nBased on the identified risk level, the system should recommend an appropriate next step, such as general self-care guidance, routine medical consultation, or urgent professional evaluation. The system must not present its assessment as a medical diagnosis.\n\nThe platform should maintain a longitudinal screening history for registered individuals and provide an authorized healthcare-worker dashboard for monitoring high-risk cases and following up on referrals.',
    expectedOutcome: [
      'A multilingual and mobile-friendly interface.',
      'Structured collection of symptoms and basic health indicators.',
      'Risk categorization based on predefined or validated criteria.',
      'Appropriate referral recommendations.',
      'A dashboard for authorized healthcare workers.',
      'Longitudinal screening and follow-up records.',
      'Privacy-conscious storage and management of health information.',
      'Notifications or alerts for cases requiring timely attention.'
    ],
    constraints: [
      'The system must not replace qualified medical professionals or provide definitive medical diagnoses.',
      'Health information must be protected through appropriate authentication, authorization, and privacy mechanisms.',
      'Risk assessment should be explainable to healthcare workers.',
      'The system should be usable in areas with limited internet connectivity.',
      'Recommendations should be based on validated medical or public-health guidelines where applicable.',
      'The system should support multiple languages where feasible.'
    ]
  },
  {
    id: 2,
    code: 'PS-02',
    title: 'Smart Patient Flow and Resource Coordination System for Small Hospitals',
    category: 'Software',
    theme: 'MedTech / BioTech / HealthTech',
    background: 'Small hospitals and community healthcare centres often manage outpatient queues, appointments, doctors, beds, and essential medicines through separate or partially manual processes. As a result, hospital administrators may not have a unified view of current workload or available resources. This can lead to excessive waiting times, inefficient utilization of resources, and difficulty anticipating periods of high demand.',
    detailedProblem: 'Develop a centralized hospital-management and decision-support system that provides real-time visibility into patient queues, appointment schedules, available beds, medical staff availability, and selected critical resources.\n\nThe system should analyze historical and current operational data to identify expected congestion and potential resource shortages. Based on this analysis, it should provide recommendations to hospital administrators for improving patient flow and resource utilization.\n\nThe system should support administrative decision-making without interfering with clinical diagnosis or treatment decisions.',
    expectedOutcome: [
      'Digital outpatient queue management.',
      'Appointment scheduling and management.',
      'Real-time bed-availability information.',
      'Medical-resource monitoring.',
      'Estimated patient waiting times.',
      'Alerts for expected congestion or resource shortages.',
      'Basic demand forecasting.',
      'Administrative dashboards and analytical reports.',
      'Historical operational-data analysis.'
    ],
    constraints: [
      'The system must not make medical treatment or diagnosis decisions.',
      'Access to patient information must be restricted according to user roles.',
      'Personally identifiable health information must be securely stored.',
      'The system should continue providing essential functionality during temporary network interruptions.',
      'Recommendations should be explainable and based on available operational data.',
      'The solution should be adaptable to hospitals of different sizes.'
    ]
  },
  {
    id: 3,
    code: 'PS-03',
    title: 'Low-Cost Digital Screening and Follow-Up System for Hearing Health',
    category: 'Software',
    theme: 'MedTech / BioTech / HealthTech',
    background: 'Hearing impairment may remain undetected for long periods, particularly among children, elderly individuals, and people living in communities where access to audiology services is limited. Conventional hearing-screening procedures may require specialized equipment and trained professionals, which can make regular preliminary screening difficult in underserved areas.',
    detailedProblem: 'Develop a low-cost digital system capable of conducting preliminary hearing screening through a controlled software-based or optional hardware-assisted interface.\n\nThe system should record screening results, identify individuals who may require professional hearing evaluation, and maintain follow-up information for subsequent assessments.\n\nThe system must clearly distinguish between preliminary screening and medical diagnosis. Results should be presented in a simple and understandable format for users while also providing sufficient information for authorized healthcare workers.',
    expectedOutcome: [
      'A controlled digital hearing-screening procedure.',
      'Recording and storage of screening results.',
      'Basic risk classification.',
      'Professional-referral recommendations.',
      'Follow-up and reassessment tracking.',
      'An accessible and user-friendly interface.',
      'Support for multiple languages where feasible.',
      'Optional integration with affordable hearing-screening hardware.'
    ],
    constraints: [
      'The system must not claim to provide a clinical diagnosis.',
      'Screening procedures must follow appropriate hearing-health guidelines.',
      'The system should minimize the influence of environmental noise on screening results.',
      'User health information must be securely stored.',
      'The solution should be affordable and suitable for community-level deployment.',
      'Hardware integration, if used, should rely on low-cost and easily available components.'
    ]
  },
  {
    id: 4,
    code: 'PS-04',
    title: 'Localized Crop Health Assessment and Action Prioritization System',
    category: 'Software',
    theme: 'Agriculture / FoodTech / Rural Development',
    background: 'Farmers may observe visible changes in crops but often lack timely access to agricultural experts who can determine whether these symptoms are caused by diseases, pests, nutrient deficiencies, or environmental stress. Delayed or incorrect identification can result in unnecessary pesticide use, increased cultivation costs, and crop losses.',
    detailedProblem: 'Develop a technology-based system that allows farmers to submit crop images along with contextual information such as crop type, growth stage, geographical location, and recent weather conditions.\n\nThe system should analyze the submitted information and estimate the likely cause of the observed crop condition. It should provide a confidence level for the assessment and prioritize appropriate actions based on the identified condition.\n\nCases where the system has low confidence should be flagged for review by an agricultural expert rather than being presented as definitive recommendations.',
    expectedOutcome: [
      'Image-based crop-condition assessment.',
      'Collection of crop and environmental information.',
      'Crop-specific classification.',
      'Confidence estimation for predictions.',
      'Prioritization of recommended actions.',
      'Expert-review or escalation mechanism.',
      'Local-language support.',
      'Historical records of crop assessments.'
    ],
    constraints: [
      'The system must clearly communicate uncertainty in its predictions.',
      'It should not recommend hazardous pesticide usage without appropriate safety information.',
      'Recommendations should consider crop type, growth stage, and local conditions.',
      'The system should function effectively on commonly available mobile devices.',
      'The solution should support low-bandwidth environments where possible.',
      'Training or reference data should represent relevant crops and regional conditions.'
    ]
  },
  {
    id: 5,
    code: 'PS-05',
    title: 'Farm-to-Market Decision Support System for Small Farmers',
    category: 'Software',
    theme: 'Agriculture / FoodTech / Rural Development',
    background: 'Small farmers often have to decide when and where to sell their agricultural produce without having sufficient information about market prices, expected demand, nearby buyers, transportation costs, or short-term storage options. A poorly timed or poorly planned sale can significantly reduce the farmer\'s income.',
    detailedProblem: 'Develop a decision-support platform that combines information such as crop type, expected harvest quantity, historical and current market prices, nearby buyers, transportation distance and cost, and available short-term storage options.\n\nThe system should compare multiple possible selling strategies and present estimated outcomes to help farmers make informed decisions. Rather than forcing a single recommendation, the system should allow farmers to compare alternatives such as immediate sale, transportation to another market, or temporary storage followed by sale.',
    expectedOutcome: [
      'Current and historical market-price information.',
      'Nearby buyer and market discovery.',
      'Expected harvest-quantity estimation.',
      'Transportation-cost estimation.',
      'Available storage-option comparison.',
      'Estimated revenue and profit comparison.',
      'Multiple selling-strategy recommendations.',
      'Regional-language support.',
      'Simple and understandable visualizations.'
    ],
    constraints: [
      'Market information must be sourced from reliable and verifiable sources.',
      'Predictions should clearly distinguish estimated values from actual market prices.',
      'The system should account for transportation and storage costs when comparing alternatives.',
      'The system must not guarantee a particular profit or market price.',
      'The interface should be usable by farmers with limited digital literacy.',
      'The system should support regional languages and mobile devices.'
    ]
  },
  {
    id: 6,
    code: 'PS-06',
    title: 'Precision Farm Input Planner for Water and Fertilizer Management',
    category: 'Software',
    theme: 'Agriculture / FoodTech / Rural Development',
    background: 'Farmers may apply irrigation and fertilizers according to fixed schedules rather than actual crop requirements. Variations in soil conditions, crop growth stages, weather, rainfall, and previous input usage can result in excessive or insufficient application of water and fertilizers. This can increase cultivation costs, reduce productivity, and contribute to inefficient use of natural resources.',
    detailedProblem: 'Develop a farm-level decision-support system that estimates appropriate irrigation and fertilizer requirements using available information such as soil characteristics, crop type, growth stage, weather conditions, recent rainfall, and historical farm data.\n\nThe system should provide understandable recommendations and explain the major factors influencing each recommendation. It should also allow farmers to track their actual water and fertilizer usage and compare it with recommended levels.',
    expectedOutcome: [
      'Soil and farm-information management.',
      'Crop and growth-stage tracking.',
      'Weather and rainfall integration.',
      'Irrigation recommendations.',
      'Fertilizer recommendations.',
      'Historical input-usage tracking.',
      'Estimated water and fertilizer savings.',
      'Explanations for generated recommendations.',
      'Farmer-friendly notifications or reminders.'
    ],
    constraints: [
      'Recommendations should consider crop-specific requirements.',
      'The system should not automatically control irrigation equipment unless such functionality is explicitly added as an optional component.',
      'Weather information must be obtained from reliable sources.',
      'Recommendations should account for local soil and climatic conditions.',
      'The system should clearly communicate uncertainty in estimated requirements.',
      'The solution should remain usable for small and marginal farmers.'
    ]
  },
  {
    id: 7,
    code: 'PS-07',
    title: 'Smart Tourist Safety and Emergency Assistance Platform',
    category: 'Software',
    theme: 'Tourism',
    background: 'Tourists visiting unfamiliar locations may unknowingly enter unsafe areas, encounter environmental hazards, become separated from their groups, or face difficulty communicating their location during emergencies. Tourism authorities and local emergency responders may also lack timely information about incidents involving visitors.',
    detailedProblem: 'Develop a technology-based platform that provides tourists with location-aware safety information and enables rapid emergency assistance.\n\nThe system should provide alerts regarding predefined risk zones and relevant environmental or location-based hazards. In an emergency, tourists should be able to request assistance and securely share their location with authorized emergency contacts or designated authorities.\n\nThe system should also allow authorized authorities to monitor and manage reported incidents through a centralized dashboard.',
    expectedOutcome: [
      'Tourist registration and profile management.',
      'Location-aware safety alerts.',
      'Geofenced risk-zone notifications.',
      'Emergency assistance mechanism.',
      'Secure location sharing during emergencies.',
      'Emergency-contact notifications.',
      'Tourist incident reporting.',
      'Authority-side incident management.',
      'Offline or low-connectivity fallback functionality.'
    ],
    constraints: [
      'Location information must only be shared with authorized parties.',
      'The system must minimize unnecessary collection and storage of personal information.',
      'Emergency alerts should not depend entirely on continuous internet connectivity.',
      'False emergency reports should be appropriately handled.',
      'The system should not replace official emergency-response services.',
      'Location-based alerts should be based on verified or authorized information.'
    ]
  },
  {
    id: 8,
    code: 'PS-08',
    title: 'Digital Cultural Heritage Explorer for Local and Lesser-Known Destinations',
    category: 'Software',
    theme: 'Tourism',
    background: 'Many culturally significant locations, local traditions, historical structures, festivals, and community stories receive limited visibility because information about them is scattered, available only in a single language, or presented without sufficient local context. As a result, tourists may overlook lesser-known destinations, while local communities may receive limited opportunities to showcase their cultural heritage.',
    detailedProblem: 'Develop a digital platform that enables visitors to discover lesser-known cultural and heritage destinations through verified multimedia information, interactive maps, and location-based storytelling.\n\nThe platform should allow authorized cultural institutions, local authorities, and verified community contributors to submit and maintain information about heritage locations. Each contribution should retain appropriate source attribution to improve reliability and preserve cultural context.',
    expectedOutcome: [
      'Interactive cultural and heritage maps.',
      'Multilingual information.',
      'Audio-based storytelling.',
      'Images, videos, and immersive media where available.',
      'Location-based cultural discovery.',
      'Verified contributor management.',
      'Information about local artisans, traditions, and events.',
      'Offline access to selected information.',
      'Source attribution for cultural content.'
    ],
    constraints: [
      'Cultural information must be verified before being presented as authoritative.',
      'The system must preserve source attribution.',
      'Community-contributed content should undergo an appropriate moderation process.',
      'Sensitive cultural information should be handled respectfully.',
      'The system should support low-connectivity environments.',
      'The platform should avoid misrepresentation or inappropriate commercialization of culturally sensitive content.'
    ]
  },
  {
    id: 9,
    code: 'PS-09',
    title: 'Smart Visitor Experience and Crowd Management System for Tourist Sites',
    category: 'Software',
    theme: 'Tourism',
    background: 'Popular tourist destinations frequently experience uneven visitor distribution. Certain attractions may become overcrowded while nearby destinations remain underutilized. Visitors may also spend significant time waiting for tickets or entry and may lack reliable information about current crowd levels, expected waiting times, or alternative attractions.',
    detailedProblem: 'Develop a technology-based platform that collects and analyzes visitor-flow information and provides estimated crowd levels and waiting times for tourist destinations.\n\nThe system should help visitors identify suitable visiting times and alternative nearby attractions based on current and historical visitor patterns. At the same time, tourism administrators should receive analytical information about visitor distribution to support better crowd management and resource planning.',
    expectedOutcome: [
      'Crowd-density estimation.',
      'Estimated waiting times.',
      'Real-time or periodically updated visitor-flow information.',
      'Visitor-flow dashboards for tourism administrators.',
      'Alternative attraction recommendations.',
      'Suggested visiting time slots.',
      'Ticket and entry information.',
      'Historical visitor analytics.',
      'Privacy-conscious and preferably anonymous visitor counting.'
    ],
    constraints: [
      'Visitor counting should prioritize privacy and avoid unnecessary collection of personally identifiable information.',
      'Crowd estimates should clearly indicate whether they are real-time, estimated, or historical.',
      'The system should remain functional with incomplete or delayed data.',
      'Recommendations should not create unsafe crowd concentration at alternative locations.',
      'The system should support integration with existing ticketing or entry systems where available.',
      'Data used for crowd estimation must comply with applicable privacy requirements.'
    ]
  },
  {
    id: 10,
    code: 'PS-10',
    title: 'Artificial Intelligence-Powered Academic Risk and Intervention System',
    category: 'Software',
    theme: 'Smart Education',
    background: 'Educational institutions often identify academically struggling students only after poor examination results, repeated attendance issues, or failure to complete academic requirements. Information related to attendance, assessments, assignments, academic performance, and participation may be maintained across separate systems, making it difficult for faculty members to identify students who require timely academic support.',
    detailedProblem: 'Develop a technology-based system that combines available academic indicators to identify students who may be at risk of falling behind academically.\n\nThe system should analyze factors such as attendance, assessment performance, assignment completion, previous academic performance, and other relevant indicators to generate an academic-risk assessment. It should also provide faculty members with understandable information about the factors contributing to the identified risk.\n\nBased on the identified risk factors, the system should allow faculty members to record and track appropriate interventions such as additional academic support, mentoring, remedial classes, or counselling.\n\nThe system should function as an early-warning mechanism and must not automatically label a student as unsuccessful or incapable.',
    expectedOutcome: [
      'Centralized academic-performance monitoring.',
      'Attendance and assessment analysis.',
      'Identification of students requiring academic attention.',
      'Risk scoring or risk categorization.',
      'Explainable factors contributing to the risk assessment.',
      'Faculty and mentor dashboards.',
      'Intervention recommendation and tracking.',
      'Historical student-performance analysis.',
      'Progress monitoring after intervention.'
    ],
    constraints: [
      'The system must not make irreversible academic decisions automatically.',
      'Risk assessments must be explainable and should assist faculty rather than replace their judgment.',
      'Student information must be protected through appropriate authentication and authorization.',
      'Personally identifiable student information must be handled securely.',
      'The system should minimize bias arising from incomplete or unrepresentative academic data.',
      'Students should not be negatively labelled solely on the basis of an automated prediction.'
    ]
  },
  {
    id: 11,
    code: 'PS-11',
    title: 'Unified Student Opportunity and Skill-Mapping Platform',
    category: 'Software',
    theme: 'Smart Education',
    background: 'Students encounter internships, employment opportunities, competitions, certifications, projects, mentorship programs, and other career-development opportunities through multiple disconnected platforms. At the same time, students may not have a clear understanding of which skills they currently possess, which skills are required for their desired career paths, or which opportunities are suitable for their profiles.',
    detailedProblem: 'Develop a centralized platform that creates and maintains a dynamic skill profile for each student and matches the profile with relevant academic, professional, and extracurricular opportunities.\n\nThe system should analyze information such as a student\'s skills, academic background, projects, certifications, interests, experience, and career preferences. It should identify relevant opportunities and highlight skill gaps between the student\'s current profile and selected career paths or opportunities.\n\nThe system should further provide a personalized development roadmap containing suitable courses, projects, certifications, competitions, or mentorship opportunities that may help the student address the identified skill gaps.',
    expectedOutcome: [
      'Student profile and skill management.',
      'Academic and project-profile integration.',
      'Opportunity aggregation.',
      'Internship and employment opportunity matching.',
      'Skill-gap identification.',
      'Career-path recommendations.',
      'Personalized learning and development roadmaps.',
      'Course, project, certification, and mentorship recommendations.',
      'Notifications for relevant opportunities.',
      'Dashboard for students and authorized institutional administrators.'
    ],
    constraints: [
      'Recommendations should be based on transparent and relevant criteria.',
      'The system should distinguish between verified and unverified opportunities.',
      'Student data must be protected through appropriate access controls.',
      'The system must not guarantee employment or selection for any opportunity.',
      'Recommendations should avoid unfair discrimination based on protected or irrelevant personal characteristics.',
      'The platform should support students with different academic backgrounds and levels of experience.'
    ]
  },
  {
    id: 12,
    code: 'PS-12',
    title: 'Smart Campus Knowledge and Service Assistant',
    category: 'Software',
    theme: 'Smart Education',
    background: 'Students and staff frequently require information regarding academic regulations, examination procedures, timetables, attendance requirements, scholarships, institutional services, laboratories, clubs, notices, and administrative processes. Such information is often distributed across websites, notices, documents, circulars, and departmental systems, making it difficult to locate accurate information quickly.',
    detailedProblem: 'Develop an intelligent institutional information and service platform that can retrieve relevant information from authorized institutional documents and systems and provide context-aware responses to student and staff queries.\n\nThe system should retrieve information from approved sources and provide the source document or reference supporting its response. It should be capable of distinguishing between official institutional information and queries that require confirmation from an authorized administrator.\n\nThe platform should also provide an administrative interface through which authorized personnel can upload, update, archive, and manage institutional information.',
    expectedOutcome: [
      'Centralized institutional-information management.',
      'Intelligent document search and retrieval.',
      'Natural-language question answering.',
      'Source references for generated responses.',
      'Multilingual support where feasible.',
      'Role-based access control.',
      'Academic and administrative information retrieval.',
      'Notice and circular discovery.',
      'Administrative document-management interface.',
      'Escalation mechanism for queries requiring human confirmation.'
    ],
    constraints: [
      'Responses must be based on authorized institutional information.',
      'The system should clearly identify situations where sufficient information is unavailable.',
      'The system must not fabricate institutional policies, deadlines, or regulations.',
      'Access to restricted information must be controlled according to user roles.',
      'Institutional documents must be securely stored.',
      'Outdated or superseded documents should be appropriately identified or archived.',
      'The system should remain useful when user queries are phrased differently from the terminology used in official documents.'
    ]
  },
  {
    id: 13,
    code: 'PS-13',
    title: 'Intelligent Institutional Workflow and Backlog Management System',
    category: 'Software',
    theme: 'Smart Automation',
    background: 'Educational institutions and other organizations handle large numbers of applications, approvals, certificates, complaints, requests, and administrative tasks through manual or partially digitized workflows. As request volumes increase, some departments may become overloaded while others remain underutilized. This makes it difficult to identify bottlenecks and ensure that requests are processed within expected timeframes.',
    detailedProblem: 'Develop a centralized workflow-management system that tracks institutional requests from submission to completion and provides real-time visibility into workload, pending tasks, processing times, and bottlenecks.\n\nThe system should automatically categorize incoming requests and route them to the appropriate department or authorized personnel according to configurable rules. It should monitor processing time and generate alerts when requests approach or exceed predefined service-level limits.\n\nThe system should also analyze historical workload data and recommend possible workload redistribution or escalation when persistent bottlenecks are detected.',
    expectedOutcome: [
      'Digital request submission.',
      'Automatic request categorization.',
      'Department and personnel assignment.',
      'Workflow and approval tracking.',
      'Real-time workload dashboards.',
      'Pending-request monitoring.',
      'Service-level monitoring.',
      'Bottleneck identification.',
      'Automated notifications and escalation.',
      'Historical workload analytics.',
      'Administrative reports.'
    ],
    constraints: [
      'Workflow rules must be configurable by authorized administrators.',
      'Automated routing should not bypass mandatory approval procedures.',
      'Sensitive institutional information must be protected through role-based access.',
      'Every workflow action should maintain an appropriate audit trail.',
      'The system should allow authorized personnel to override automated recommendations.',
      'The platform should support different workflow types without requiring complete redevelopment.'
    ]
  },
  {
    id: 14,
    code: 'PS-14',
    title: 'Predictive Maintenance and Anomaly Detection System for Institutional Infrastructure',
    category: 'Software',
    theme: 'Smart Automation',
    background: 'Educational institutions, hospitals, offices, and public facilities depend on infrastructure such as electrical equipment, pumps, generators, heating and cooling systems, water systems, and other machinery. Maintenance is often performed according to fixed schedules or only after equipment failure occurs. This can result in unexpected downtime, unnecessary maintenance, increased operating costs, and disruption of essential services.',
    detailedProblem: 'Develop a technology-based predictive-maintenance system that collects operational information from sensors, equipment logs, or historical maintenance records and identifies abnormal patterns that may indicate an upcoming equipment failure.\n\nThe system should analyze historical and real-time information to identify anomalies, estimate equipment risk, and provide maintenance alerts before a critical failure occurs.\n\nWhere sufficient historical information is available, the system may estimate the expected time or risk of failure and assist administrators in prioritizing maintenance activities.',
    expectedOutcome: [
      'Centralized equipment and asset management.',
      'Sensor or operational-data integration.',
      'Historical maintenance-record management.',
      'Real-time equipment monitoring where applicable.',
      'Anomaly detection.',
      'Equipment-risk assessment.',
      'Predictive maintenance alerts.',
      'Maintenance-priority recommendations.',
      'Maintenance scheduling.',
      'Administrative dashboards and reports.'
    ],
    constraints: [
      'The system should clearly distinguish between an anomaly and a confirmed equipment failure.',
      'Predictions should include appropriate confidence or reliability indicators.',
      'Sensor data should be validated to minimize false alerts.',
      'The system should support both sensor-based and historical-data-based implementations.',
      'Automated equipment control should not be performed without appropriate safety mechanisms.',
      'Critical maintenance decisions should remain under authorized human supervision.',
      'The solution should be adaptable to different types of institutional infrastructure.'
    ]
  },
  {
    id: 15,
    code: 'PS-15',
    title: 'Intelligent Document Processing and Decision Support System',
    category: 'Software',
    theme: 'Smart Automation',
    background: 'Organizations receive large volumes of forms, applications, reports, invoices, certificates, letters, and other documents in different formats. Staff members often spend significant time extracting information, checking documents for completeness, identifying relevant categories, and forwarding them to the appropriate departments.\n\nManual processing becomes increasingly difficult as document volume increases and may result in delays, inconsistent data entry, and human errors.',
    detailedProblem: 'Develop an intelligent document-processing system capable of accepting documents in multiple formats and automatically extracting relevant structured information.\n\nThe system should classify documents, identify required fields, perform configurable validation checks, detect missing or potentially inconsistent information, and route documents to the appropriate workflow or department.\n\nWhere the system is uncertain about an extracted value or validation result, it should place the document in a human-review queue rather than making an unverified decision.',
    expectedOutcome: [
      'Document upload and management.',
      'Optical character recognition for scanned documents.',
      'Structured information extraction.',
      'Document classification.',
      'Configurable validation rules.',
      'Missing-field identification.',
      'Duplicate or potentially inconsistent document detection.',
      'Automated workflow routing.',
      'Human-review queue.',
      'Audit trail.',
      'Searchable document repository.'
    ],
    constraints: [
      'The system should support commonly used document formats.',
      'Extracted information must be presented with appropriate confidence indicators.',
      'Sensitive documents must be securely stored and accessed only by authorized users.',
      'Automated processing should not replace mandatory human verification.',
      'The system should preserve the original document for audit purposes.',
      'The solution should support documents containing different layouts and languages where feasible.',
      'Incorrect extraction should be identifiable and correctable by authorized personnel.'
    ]
  },
  {
    id: 16,
    code: 'PS-16',
    title: 'Smart Last-Mile Transport Planner for Agricultural Produce',
    category: 'Software',
    theme: 'Transportation & Logistics',
    background: 'Farmers in remote and hilly regions may face significant difficulty transporting agricultural produce from farms to collection centres, motorable roads, or markets. Limited vehicle availability, small shipment quantities, poor road connectivity, and high transportation costs can result in delays, produce deterioration, and reduced farmer income.',
    detailedProblem: 'Develop a transportation-planning platform that enables farmers, collection centres, or logistics operators to coordinate the movement of agricultural produce from remote farms to suitable collection points or markets.\n\nThe system should consider information such as pickup locations, quantity of produce, available vehicle capacity, road accessibility, destination, delivery requirements, and transportation cost. It should identify opportunities to combine compatible shipments and recommend efficient pickup and delivery sequences.',
    expectedOutcome: [
      'Farmer and shipment registration.',
      'Pickup-location mapping.',
      'Produce-quantity management.',
      'Vehicle and capacity management.',
      'Road and destination information.',
      'Shipment consolidation.',
      'Route planning.',
      'Estimated transportation cost.',
      'Collection-centre mapping.',
      'Delivery-status tracking.',
      'Logistics dashboard.'
    ],
    constraints: [
      'Route recommendations should consider actual road accessibility wherever reliable data is available.',
      'Vehicle capacity must not be exceeded.',
      'Perishable agricultural produce should be prioritized according to appropriate delivery requirements.',
      'Estimated costs should clearly identify assumptions used in their calculation.',
      'The system should support low-connectivity regions where feasible.',
      'The platform should allow authorized operators to modify automatically generated plans.',
      'The system should not assume that all remote locations have continuous internet access or reliable location services.'
    ]
  },
  {
    id: 17,
    code: 'PS-17',
    title: 'Dynamic Public Transport Demand and Route Optimization System for Small Cities',
    category: 'Software',
    theme: 'Transportation & Logistics',
    background: 'Public transportation systems in smaller cities often operate according to fixed routes and schedules even though passenger demand can vary significantly according to time of day, location, weather conditions, academic schedules, working hours, and local events. As a result, some routes may experience overcrowding while vehicles on other routes operate with low occupancy.',
    detailedProblem: 'Develop a technology-based system that collects and analyzes historical and real-time public-transport demand information to identify passenger-demand patterns and recommend improvements in vehicle allocation, scheduling, and route planning.\n\nThe system should enable transport authorities to evaluate different scheduling or routing strategies and estimate their potential impact on passenger waiting time, vehicle utilization, route coverage, and congestion.\n\nThe system should provide decision support to transport authorities rather than automatically implementing route changes without human approval.',
    expectedOutcome: [
      'Passenger-demand data collection.',
      'Route and stop mapping.',
      'Historical demand analysis.',
      'Peak-demand prediction.',
      'Vehicle-allocation recommendations.',
      'Schedule recommendations.',
      'Route optimization.',
      'Passenger waiting-time estimation.',
      'Vehicle-utilization analysis.',
      'Transport-authority dashboard.'
    ],
    constraints: [
      'Recommendations should consider existing routes, vehicles, stops, and operational constraints.',
      'The system should distinguish between predicted and actual passenger demand.',
      'Safety and accessibility requirements must not be compromised for optimization.',
      'Route changes should require authorized human approval.',
      'The system should remain functional with incomplete or delayed passenger data.',
      'Personal passenger information should not be collected unless necessary.',
      'The system should support integration with existing public-transport tracking systems where available.'
    ]
  },
  {
    id: 18,
    code: 'PS-18',
    title: 'Intelligent Load and Delivery Consolidation Platform',
    category: 'Software',
    theme: 'Transportation & Logistics',
    background: 'Logistics operators frequently handle multiple shipments travelling toward nearby or overlapping destinations. When shipments are planned independently, vehicles may operate partially empty, resulting in higher transportation costs, increased fuel consumption, inefficient vehicle utilization, and longer delivery routes.',
    detailedProblem: 'Develop an intelligent logistics platform that identifies compatible shipments and recommends opportunities for load consolidation based on destination, delivery deadlines, vehicle capacity, route constraints, cargo characteristics, and other operational requirements.\n\nThe system should generate feasible shipment combinations and recommend an efficient delivery sequence while allowing logistics operators to review and modify the proposed plan.\n\nThe platform should provide comparative information such as estimated transportation cost, total distance, vehicle utilization, and expected delivery time for different consolidation strategies.',
    expectedOutcome: [
      'Shipment registration and tracking.',
      'Destination-based shipment grouping.',
      'Vehicle-capacity management.',
      'Delivery-deadline management.',
      'Cargo-compatibility checking.',
      'Load-consolidation recommendations.',
      'Route optimization.',
      'Delivery-sequence planning.',
      'Estimated transportation cost.',
      'Vehicle-utilization analysis.',
      'Logistics-operator dashboard.'
    ],
    constraints: [
      'Vehicle capacity must not be exceeded.',
      'Delivery deadlines must be considered while generating consolidation recommendations.',
      'Incompatible or restricted cargo must not be combined.',
      'Route recommendations should consider relevant road and operational constraints.',
      'Estimated costs should clearly identify the assumptions used.',
      'Operators must be able to manually approve, reject, or modify recommendations.',
      'The system should maintain an appropriate record of changes made to automatically generated plans.'
    ]
  }
];

export const problemThemes = [
  'All',
  'MedTech / BioTech / HealthTech',
  'Agriculture / FoodTech / Rural Development',
  'Tourism',
  'Smart Education',
  'Smart Automation',
  'Transportation & Logistics'
];

export default problemStatements;
