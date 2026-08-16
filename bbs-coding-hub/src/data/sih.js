export const sihInfo = {
  title: 'SMART INDIA HACKATHON 2K26',
  subtitle: 'INTERNAL SCREENING & HACKATHON',
  tagline: 'Innovate. Build. Represent BBS.',
  overview: 'The official internal campus hackathon and evaluation round for Smart India Hackathon 2K26. Student teams will develop prototype solutions for problem statements across hardware and software categories, with top-performing teams nominated to represent BBS at the national level.',
  status: 'UPCOMING',
  edition: '2K26',
  teamSize: '6 Members per team',
  diversityRule: 'Minimum 1 female team member is mandatory',
  eligibility: 'Open to all enrolled students across all departments & years',
  mode: 'Hybrid / Campus Evaluation',
  contactEmail: 'codingclub@bbs.ac.in', // Placeholder
  registrationUrl: '', // Editable registration link
  submissionUrl: '',   // Editable PPT/Idea submission link
  templateUrl: ''      // Editable PPT template link
};

export const sihAnnouncements = [
  {
    id: 'ann-1',
    date: 'ANNOUNCEMENT',
    title: 'Internal Screening Process Announced',
    content: 'The internal evaluation schedule and team registration guidelines for SIH 2K26 are now active. Review the rules and begin team formation.',
    isImportant: true
  },
  {
    id: 'ann-2',
    date: 'GUIDELINES',
    title: 'Team Composition & Female Representation',
    content: 'As per national SIH guidelines, every team must have exactly 6 members with at least one female participant.',
    isImportant: false
  }
];

export const sihTimeline = [
  {
    id: 't-1',
    step: '01',
    phase: 'TEAM FORMATION & REGISTRATION',
    date: 'PHASE 1',
    status: 'ACTIVE',
    description: 'Assemble a team of 6 members adhering to the diversity criteria and submit the team registration form.'
  },
  {
    id: 't-2',
    step: '02',
    phase: 'PROBLEM STATEMENT SELECTION',
    date: 'PHASE 2',
    status: 'UPCOMING',
    description: 'Choose an official problem statement from the national portal or propose a solution under Open Innovation.'
  },
  {
    id: 't-3',
    step: '03',
    phase: 'IDEA & PPT SUBMISSION',
    date: 'PHASE 3',
    status: 'UPCOMING',
    description: 'Submit your solution deck and project proposal following the standard prescribed PPT format.'
  },
  {
    id: 't-4',
    step: '04',
    phase: 'CAMPUS INTERNAL HACKATHON',
    date: 'PHASE 4',
    status: 'UPCOMING',
    description: 'Present and demo your working prototype / solution deck before the expert faculty evaluation panel.'
  },
  {
    id: 't-5',
    step: '05',
    phase: 'NATIONAL NOMINATIONS',
    date: 'PHASE 5',
    status: 'UPCOMING',
    description: 'Top-ranked qualified teams are officially nominated on the national SIH portal.'
  }
];

export const sihTracks = [
  {
    id: 'track-smart-automation',
    name: 'Smart Automation & AI',
    category: 'Software / Hybrid',
    status: 'OPEN FOR IDEAS',
    summary: 'Autonomous systems, generative AI, robotic process automation, and intelligent agents.',
    description: 'Focuses on building intelligent automated workflows, computer vision tools, machine learning pipelines, and predictive applications that address real-world inefficiencies.',
    topics: ['Edge AI & Vision', 'Agentic Workflows', 'Smart Process Automation', 'Predictive Diagnostics']
  },
  {
    id: 'track-clean-green-tech',
    name: 'Clean & Green Technology',
    category: 'Hardware / Software',
    status: 'OPEN FOR IDEAS',
    summary: 'Renewable energy, carbon tracking, waste management, and sustainable infrastructure.',
    description: 'Solutions dedicated to environmental stewardship, smart energy distribution, sustainable agriculture monitoring, and water conservation systems.',
    topics: ['Renewable Energy Monitoring', 'Smart Waste Sorting', 'Carbon Accounting', 'Precision Agriculture']
  },
  {
    id: 'track-healthcare-biotech',
    name: 'Healthcare & Biomedical',
    category: 'Software / Hybrid',
    status: 'OPEN FOR IDEAS',
    summary: 'Remote patient monitoring, preventive care, diagnostic assistive tools, and mental wellness.',
    description: 'Leveraging technology to improve access to healthcare, digitize patient records securely, and build assistive healthcare diagnostics.',
    topics: ['Remote Vitals Tracking', 'Telemedicine Assist', 'Health Data Privacy', 'Emergency Dispatch AI']
  },
  {
    id: 'track-smart-education',
    name: 'Smart Education (EdTech)',
    category: 'Software',
    status: 'OPEN FOR IDEAS',
    summary: 'Adaptive learning environments, gamified education, interactive digital laboratories.',
    description: 'Creating accessible, inclusive, and personalized digital learning experiences for students and educators in varied learning environments.',
    topics: ['Adaptive Assessment', 'Virtual Science Labs', 'Vernacular Learning Tools', 'Skill Graph Analytics']
  },
  {
    id: 'track-open-innovation',
    name: 'Open Innovation & Civic Tech',
    category: 'Hardware / Software',
    status: 'OPEN FOR IDEAS',
    summary: 'Unique student innovations solving unlisted community or governance challenges.',
    description: 'Have a breakthrough solution that goes beyond listed themes? Build cutting-edge technology for public infrastructure, smart cities, or citizen security.',
    topics: ['Civic Reporting Systems', 'Disaster Relief Coordination', 'Blockchain Transparency', 'Smart Transport']
  }
];

export const sihGuidelines = [
  'Team size must be strictly 6 members (students from any department or year).',
  'Each team must include at least one female member to comply with official guidelines.',
  'Teams can choose to participate in Software or Hardware editions based on problem statement requirements.',
  'Submissions must include problem identification, proposed methodology, tech stack, and feasibility analysis.',
  'Plagiarism or copying existing commercial repositories will lead to immediate disqualification.',
  'Internal screening scores will determine official college nominations for national portal entry.'
];
