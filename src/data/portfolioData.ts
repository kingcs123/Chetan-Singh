export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  organization: string;
  description: string;
  impact: string;
  tags: string[];
  metrics?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  statusOrYear: string;
  details?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    phone: string;
    email: string;
    location: string;
    dob: string;
    tagline: string;
    summary: string;
    yearsOfExperience: string;
    timeSavedMetric: string;
    linkedin: string;
  };
  competencies: string[];
  skillsCategories: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  achievements: string[];
  socialLinks: {
    name: string;
    url: string;
    type: "email" | "phone" | "whatsapp" | "location" | "linkedin";
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Chetan Singh",
    role: "Team Leader – MIS Operations",
    phone: "+91 9079265198",
    email: "shekhawatcs9636@gmail.com",
    location: "Jaipur, Rajasthan",
    dob: "05 March 2000",
    tagline:
      "Transforming complex operational data into actionable business intelligence, automated workflows, and high-impact executive dashboards.",
    summary:
      "Results-driven MIS Operations Team Leader with 5+ years of progressive experience in data analysis, business intelligence, and process automation. Proven track record of designing and delivering actionable MIS dashboards, automating workflows via Google AppSheet, and leveraging AI tools (ChatGPT, Copilot, Claude, Gemini) to generate deep business insights. Skilled in building interactive, production-grade web dashboards using HTML, CSS, JavaScript, and Python with AI-assisted development in VS Code. Strong command of Advanced Excel, SQL, and Google Data Studio (Looker Studio). Adept at leading cross-functional teams and translating complex data into strategic decisions for senior management.",
    yearsOfExperience: "5+",
    timeSavedMetric: "~40%",
    linkedin: "https://www.linkedin.com/in/mrchetan-singh?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  competencies: [
    "Advanced Excel, Macros & VBA",
    "Google Data Studio (Looker Studio)",
    "Google AppSheet Development",
    "AI-Driven Insights & Reporting (ChatGPT / Copilot / Claude / Gemini)",
    "Interactive Dashboard Development (HTML / CSS / JS / Python)",
    "MIS Operations & Reporting",
    "Business Intelligence & Analytics",
    "Process Automation & BPM",
    "Team Leadership & Cross-Functional Collaboration",
    "KPI Tracking & Performance Monitoring",
    "Data Visualization & Storytelling",
  ],
  skillsCategories: [
    {
      title: "Reporting & Business Intelligence",
      description: "Enterprise visual reporting engines and multi-tier executive dashboards",
      skills: [
        { name: "Google Data Studio (Looker)", level: "Advanced" },
        { name: "Excel Interactive Dashboards", level: "Mastery" },
        { name: "KPI Tracking & Attrition Dashboards", level: "Expert" },
        { name: "Data Visualization & Storytelling", level: "Expert" },
      ],
    },
    {
      title: "Spreadsheets & Database Automation",
      description: "High-volume data processing, macros, and automation systems",
      skills: [
        { name: "Advanced Excel", level: "Mastery" },
        { name: "VBA & Macros", level: "Expert" },
        { name: "Google Sheets Cloud Sync", level: "Advanced" },
        { name: "SQL Queries & Data Modeling", level: "Proficient" },
        { name: "Pivot Tables & Trend Modeling", level: "Expert" },
      ],
    },
    {
      title: "Application & Web Development",
      description: "Low-code app engineering and custom front-end operational portals",
      skills: [
        { name: "Google AppSheet", level: "Specialist (3+ Apps)" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Proficient" },
        { name: "Python (Data Reporting & Scripts)", level: "Proficient" },
        { name: "Web Forms & Google Forms", level: "Expert" },
      ],
    },
    {
      title: "AI Tools & Modern Developer Workflows",
      description: "Augmenting MIS workflows and automated insight pipelines with generative AI",
      skills: [
        { name: "Google Gemini", level: "AI Insights" },
        { name: "ChatGPT & Prompt Engineering", level: "Workflow Automation" },
        { name: "Microsoft Copilot", level: "Reporting Acceleration" },
        { name: "Claude AI", level: "Data Synthesis" },
        { name: "VS Code & Antigravity IDE", level: "AI-Assisted Coding" },
      ],
    },
    {
      title: "MIS Operations & Leadership",
      description: "Cross-functional management, SLA adherence, and operational governance",
      skills: [
        { name: "End-to-End MIS Operations", level: "Team Leader" },
        { name: "Agent Productivity Analysis", level: "Voice & Non-Voice" },
        { name: "Flowchart Management System (FMS)", level: "Architect" },
        { name: "Ad-hoc Report SLAs", level: "Consistent 100%" },
        { name: "Cross-Functional Collaboration", level: "Stakeholder Management" },
      ],
    },
  ],
  experience: [
    {
      role: "Team Leader – MIS Operations",
      company: "Quess Corp",
      location: "Jaipur, Rajasthan",
      period: "Aug 2024 – Present",
      badge: "Current Leadership Role",
      highlights: [
        "Lead end-to-end MIS operations including preparation of Agent Voice/Non-Voice Productivity Reports, Client Attrition Reports, and Retention & Influencing Reports with visual dashboards.",
        "Leverage AI tools (ChatGPT, Microsoft Copilot, Claude, Gemini) to generate actionable business insights from raw operational data, reducing manual analysis time by ~40%.",
        "Develop interactive web dashboards using HTML, CSS, JavaScript, and Python with AI-assisted coding in VS Code and Antigravity IDE, enabling real-time process visibility for management.",
        "Built and deployed Google AppSheet applications for field data collection and process automation, syncing data to Google Sheets on cloud in real time.",
        "Design and maintain visual dashboards on Google Data Studio (Looker Studio) and Advanced Excel tailored to diverse management requirements for data-driven decision-making.",
        "Handle ad-hoc report requests with fast turnaround, ensuring all non-standard data requirements are addressed within agreed timelines.",
        "Collaborate cross-functionally across departments to gather accurate information and deliver timely reporting insights to senior stakeholders.",
        "Create and manage Web Forms and Google Forms for capturing structured data from customers and employees to improve operational workflows.",
      ],
    },
    {
      role: "MIS Executive & MIS Analyst",
      company: "Medicure Pharma",
      location: "Jaipur, Rajasthan",
      period: "Apr 2023 – Jul 2024",
      badge: "Pharma MIS & Cloud Automation",
      highlights: [
        "Performed periodic data analysis and generated daily, weekly, monthly, and quarterly MIS reports to support management decision-making.",
        "Developed Google AppSheet apps for process automation, collecting and storing operational data on cloud-based Google Sheets.",
        "Created Web Forms and Google Forms to capture critical data from customers and employees, streamlining information flow across departments.",
        "Prepared pivot tables, charts, and trend reports to assist the management team with business performance evaluation.",
        "Maintained and updated MIS documentation to ensure ease of system maintenance and operational efficiency.",
        "Monitored industry trends and best practices to continually improve reporting standards and analytical approaches.",
      ],
    },
    {
      role: "MIS Executive & E-Commerce Analyst",
      company: "Poddar Footwear Private Limited",
      location: "Jaipur, Rajasthan",
      period: "Mar 2022 – Apr 2023",
      badge: "E-Commerce & FMS Systems",
      highlights: [
        "Maintained and enhanced existing MIS systems; generated customised reports across daily, weekly, monthly, and quarterly cycles.",
        "Developed reports to track key performance metrics including customer acquisition, revenue, and customer retention.",
        "Analyzed customer behavior and recommended data-backed strategies to optimize conversion rates and revenue growth.",
        "Identified customer trends and segmentation patterns to inform product development and marketing strategies.",
        "Created and managed a Flowchart Management System (FMS) to monitor and document operational workflows.",
        "Built productivity dashboards and shared reports on MIS portals, ensuring data accuracy and accessibility for management.",
      ],
    },
    {
      role: "Back Office & Data Entry Specialist",
      company: "Bansal Elastomers Private Limited",
      location: "Jaipur, Rajasthan",
      period: "May 2020 – Jan 2022",
      badge: "Foundations & Data Integrity",
      highlights: [
        "Processed, verified, and recorded data into information systems; audited and entered tax contracts into database systems.",
        "Extracted data from source documents and maintained organized records in Microsoft Excel and Google Sheets.",
        "Created Google Forms for multi-department data collection, improving data standardization and accessibility.",
        "Ensured data integrity by testing systems for accuracy and maintaining strict adherence to data entry procedures.",
      ],
    },
  ],
  projects: [
    {
      id: "ai-mis-pipeline",
      title: "AI-Augmented MIS Reporting & Insight Engine",
      category: "Process Automation & AI",
      organization: "Quess Corp",
      description:
        "Engineered an automated data synthesis workflow combining prompt engineering with ChatGPT, Copilot, Claude, and Gemini to translate complex raw operations metrics into instant executive summaries.",
      impact: "Reduced manual reporting and analysis cycle times by approximately 40%.",
      tags: ["ChatGPT", "Gemini", "Claude", "Copilot", "Python", "Executive Reports"],
      metrics: "~40% Time Reduction",
    },
    {
      id: "appsheet-ecosystem",
      title: "Enterprise Google AppSheet Operational Apps",
      category: "No-Code Cloud Applications",
      organization: "Medicure Pharma & Quess Corp",
      description:
        "Architected and deployed 3+ production Google AppSheet mobile and tablet apps for real-time field data gathering, automated field validations, and direct cloud syncing with Google Sheets.",
      impact: "Replaced manual paper-based logs with real-time validated cloud data across operational nodes.",
      tags: ["Google AppSheet", "Google Sheets Cloud", "Process Automation", "Field Tracking"],
      metrics: "3+ Cloud Apps Deployed",
    },
    {
      id: "web-dashboards",
      title: "Interactive Web Dashboards & Monitoring Portals",
      category: "Frontend & Scripting",
      organization: "Quess Corp & Antigravity IDE",
      description:
        "Developed custom browser-based operational dashboards using HTML5, CSS3, JavaScript, and lightweight Python backend automation scripts, developed with AI-assisted coding in VS Code and Antigravity IDE.",
      impact: "Provided executive stakeholders with real-time, interactive visibility over process bottlenecks and team metrics.",
      tags: ["HTML5", "CSS3", "JavaScript", "Python", "VS Code", "Antigravity IDE"],
      metrics: "Real-time Visibility",
    },
    {
      id: "flowchart-system",
      title: "Flowchart Management System (FMS)",
      category: "BPM & Operational Architecture",
      organization: "Poddar Footwear Pvt. Ltd.",
      description:
        "Conceptualized, designed, and instituted a comprehensive Flowchart Management System (FMS) mapping step-by-step operational and reporting dependencies across e-commerce logistics.",
      impact: "Standardized and documented over 10 core operational processes, driving departmental consistency.",
      tags: ["FMS", "Process Mapping", "Standard Operating Procedures", "E-Commerce MIS"],
      metrics: "10+ Standardized Processes",
    },
    {
      id: "productivity-attrition-suite",
      title: "Agent Voice/Non-Voice Productivity & Attrition Intelligence",
      category: "Business Intelligence",
      organization: "Quess Corp",
      description:
        "Built specialized analytical models and multi-dimensional dashboards tracking agent efficiency, voice vs. non-voice call throughput, attrition trends, and retention influencing indicators.",
      impact: "Supplied actionable retention insights directly to senior management to stabilize team performance.",
      tags: ["Google Data Studio", "Looker Studio", "Advanced Excel", "Attrition Analytics", "Voice/Non-Voice"],
      metrics: "Multi-Team SLA Tracking",
    },
  ],
  education: [
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Rajasthan University",
      location: "Jaipur, Rajasthan",
      statusOrYear: "Pursuing",
      details: "Comprehensive studies in commercial operations, business finance, accounting, and organizational management.",
    },
    {
      degree: "Senior Secondary (Science – Mathematics)",
      institution: "MIPS",
      location: "Jaipur, Rajasthan",
      statusOrYear: "2016",
      details: "Graduated with 70% aggregate; strong foundation in quantitative analytics, mathematics, and logic.",
    },
  ],
  achievements: [
    "Reduced manual reporting effort by ~40% at Quess Corp by integrating AI tools (ChatGPT, Copilot, Claude) into the daily MIS workflow.",
    "Built interactive HTML/CSS/JS/Python dashboards using AI-assisted development in VS Code and Antigravity IDE.",
    "Developed 3+ Google AppSheet applications at Medicure Pharma and Quess Corp, replacing paper-based records with cloud-synced systems.",
    "Designed a Flowchart Management System (FMS) at Poddar Footwear to standardize and document over 10 key operational processes.",
    "Consistently delivered ad-hoc MIS reports within tight SLAs for senior management across 4 organizations spanning manufacturing, pharma, e-commerce, and BPO sectors.",
  ],
  socialLinks: [
    {
      name: "shekhawatcs9636@gmail.com",
      url: "mailto:shekhawatcs9636@gmail.com",
      type: "email",
    },
    {
      name: "+91 9079265198",
      url: "tel:+919079265198",
      type: "phone",
    },
    {
      name: "WhatsApp Direct",
      url: "https://wa.me/919079265198",
      type: "whatsapp",
    },
    {
      name: "Jaipur, Rajasthan",
      url: "https://maps.google.com/?q=Jaipur,Rajasthan",
      type: "location",
    },
    {
      name: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/mrchetan-singh?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      type: "linkedin",
    },
  ],
};
