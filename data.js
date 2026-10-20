/* EDIT THIS FILE to update your portfolio. index.html reads everything from here. */

const PROFILE = {
  name: "Oluwole Gaius",
  title: "Software engineer and frontend developer with machine learning experience",
  intro: "I build web apps and machine learning tools that people actually use. I'm a statistics graduate finishing a computer science degree at the University of Ibadan, with hands-on experience in React, Next.js, Python and ML pipelines from internships and a team I've worked with since 2024.",
  status: "Available immediately for freelance and full-time work",
  location: "Ibadan, Oyo State, Nigeria",
  photo: "",      // add a photo: put a file like gaius.jpg in this folder and write "gaius.jpg" here
  email: "oluwolegaiusayokunle@gmail.com",
  github: "https://github.com/gaiuso33",
  linkedin: "",   // paste your LinkedIn profile URL; the link is hidden while empty
  twitter: "https://twitter.com/4charactas",
  cv: ""          // e.g. "OluwoleGaius.pdf" (put the file in this folder) to show a Download CV button
};

const ABOUT = [
  "I studied statistics, so I care whether a model or a number is right, not just whether it runs. I'm now finishing a second degree in computer science, which is where the web and software side of my work comes from.",
  "I like taking a messy problem, such as hand-typed exams, unread resumes or scattered marks, and turning it into a tool someone can use in a minute. I'm especially interested in frontend development, software engineering, data and AI, and cybersecurity.",
  "I speak English and Yoruba."
];

// Newest first. Add a job by copying a block.
const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    org: "Crop2Cash",
    when: "Aug 2026 to now",
    note: "Ibadan, Nigeria. Internship.",
    points: [
      "Build and maintain responsive web applications with Next.js and Supabase.",
      "Work with a team of 4 developers to test, debug and ship features on schedule.",
      "Documented technical workflows and database schemas so new interns can start faster."
    ]
  },
  {
    role: "Machine Learning Engineer and Data Analyst",
    org: "The Analyst Team",
    when: "Jan 2024 to now",
    note: "Ibadan, Nigeria. Mid level.",
    points: [
      "Train and test machine learning models, including a fruit classifier and a resume screener.",
      "Build pipelines that generate data and train and test models such as XGBoost and Random Forest.",
      "Worked on computer vision projects that detect tumors in MRI scans."
    ]
  },
  {
    role: "IT Support Intern",
    org: "University of Ibadan",
    when: "Jan to Apr 2025",
    note: "Ibadan, Nigeria. Internship.",
    points: [
      "Handled IT support and troubleshooting for the university's staff and students.",
      "Hands-on work with servers, routers and network switches, including on-site cable crimping and colour coding.",
      "Worked alongside network administrators and developers to solve issues."
    ]
  },
  {
    role: "Junior Web Developer and Software Intern",
    org: "International Institute of Tropical Agriculture (IITA)",
    when: "Jan to Jun 2024",
    note: "Ibadan, Nigeria. Internship.",
    points: [
      "Wrote Python scripts to automate workflows and scraped data from IITA-related sites.",
      "Worked on a resume-screening application and a fruit classification project using machine learning.",
      "Learned JavaScript and React, including components and how to build scalable websites."
    ]
  }
];

const CREDENTIALS = [
  { what: "BSc Computer Science", where: "University of Ibadan", when: "In progress" },
  { what: "BSc Statistics", where: "University of Ibadan", when: "Completed" }
];

// Add a skill by adding a word to a list. Add a group by adding a new line.
const SKILLS = {
  "Web development": ["React", "Next.js", "JavaScript (ES6+)", "HTML and CSS", "Tailwind CSS", "Node.js", "Express", "Flask", "REST APIs"],
  "Machine learning and data": ["Python", "Scikit-Learn", "XGBoost", "Random Forest", "Pandas", "Computer vision", "Text classification", "Data pipelines", "Data analysis", "Statistics"],
  "Databases": ["Supabase", "MongoDB", "SQL"],
  "Tools and practice": ["Git and GitHub", "Docker", "Postman", "CI/CD", "Linux", "Agile and Scrum", "Vercel", "Render"],
  "IT support": ["Computer networking", "Servers, routers and switches", "Troubleshooting"]
};

// Professional certificates (full programs). Add the courses each one includes as you like.
const PRO_CERTS = [
  {
    name: "IBM DevOps and Software Engineering Professional Certificate", issuer: "IBM", year: "2026",
    courses: [
      "Introduction to DevOps", "Introduction to Cloud Computing", "Introduction to Agile Development and Scrum",
      "Introduction to Software Engineering", "Getting Started with Git and GitHub",
      "Hands-on Introduction to Linux Commands and Shell Scripting", "Python for Data Science, AI & Development",
      "Developing AI Applications with Python and Flask", "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      "Application Development using Microservices and Serverless", "Introduction to Test and Behavior Driven Development",
      "Continuous Integration and Continuous Delivery (CI/CD)", "Application Security for Developers and DevOps Professionals",
      "Monitoring and Observability for Development and DevOps"
    ]
  },
  {
    name: "Microsoft Python Development Professional Certificate", issuer: "Microsoft", year: "2026",
    courses: [
      "Python Programming Fundamentals", "Data Analysis and Visualization with Python", "Automation and Scripting with Python",
      "Web Development with Python", "Advanced Python Development Techniques", "Project Development in Python"
    ]
  }
];
// Coursera certificates, all earned in 2026. Add one by adding a line to a group.
const CERTIFICATES = {
  "Python and data": [
    ["Data Analysis with Python", "IBM"],
    ["Data Analysis and Visualization with Python", "Microsoft"],
    ["Python for Data Science, AI and Development", "IBM"],
    ["Python Programming Fundamentals", "Microsoft"]
  ],
  "AI and machine learning": [
    ["Machine Learning with Python", "IBM"],
    ["Introduction to Artificial Intelligence", "IBM"],
    ["Generative AI: Introduction and Applications", "IBM"],
    ["Generative AI: Prompt Engineering Basics", "IBM"],
    ["Developing AI Applications with Python and Flask", "IBM"]
  ],
  "Software engineering and DevOps": [
    ["Web Development with Python", "Microsoft"],
    ["Introduction to Software Engineering", "IBM"],
    ["Getting Started with Git and GitHub", "IBM"],
    ["Introduction to Agile Development and Scrum", "IBM"],
    ["Continuous Integration and Continuous Delivery", "IBM"],
    ["Introduction to DevOps", "IBM"],
    ["Introduction to Cloud Computing", "IBM"],
    ["Hands-on Introduction to Linux Commands and Shell Scripting", "IBM"]
  ]
};

// Add a project by copying one block. category decides which filter button it appears under.
const PROJECTS = [
  {
    title: "Automated Google Forms Generator",
    category: "ML and AI",
    summary: "Turns written exams, quizzes and study guides into auto-graded Google Forms, saving hours of manual data entry.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NLP"],
    github: "https://github.com/gaiuso33/form-generator-ui",
    demo: "https://form-generator-ui.vercel.app"
  },
  {
    title: "AI-Powered Resume Screener",
    category: "ML and AI",
    summary: "Upload a resume PDF and a job description. It gives a match score, lists the missing skills and suggests what to improve.",
    tags: ["Python (Flask)", "PyPDF2", "Chart.js", "ReportLab"],
    github: "https://github.com/gaiuso33/resume-checker-main",
    demo: "https://resume-checker-main-2.onrender.com"
  },
  {
    title: "GPA Calculator",
    category: "Web",
    summary: "A clean GPA calculator that lets students track their academic performance as they go.",
    tags: ["React", "CSS", "JavaScript"],
    github: "https://github.com/gaiuso33/gpa-calculator-web/",
    demo: "https://gaiuso33.github.io/gpa-calculator-web/"
  },
  {
    title: "E-Learning Web App",
    category: "Web",
    summary: "A learning platform where students browse courses, watch lessons and track their progress.",
    tags: ["React", "CSS", "JavaScript"],
    github: "https://github.com/gaiuso33/e-learning-app",
    demo: "https://e-learning-app.vercel.app"
  },
  {
    title: "Life Dashboard",
    category: "ML and Web",
    summary: "A personal dashboard that turns daily check-ins into visible progress across fitness, money and career, rewards consistency, and uses an AI advisor and forecasts to keep you on track.",
    tags: ["Supabase", "CI/CD", "TypeScript"],
    github: "https://github.com/gaiuso33/life-dashboard",
    demo: "https://life-dashboard-neon-ten.vercel.app/"
  },
  {
    title: "Student Analytics",
    category: "Web",
    summary: "A web dashboard for schools and departments to track student performance: grades, GPA trends, course difficulty and students at risk. Staff sign in with their own accounts; administrators can enter, import and edit data, while viewers get read-only access.",
    tags: ["Python", "Javascript"],
    github: "https://github.com/gaiuso33/student-analytics",
    demo: "https://student-analytics-dash.netlify.app/"
  }
  /* ,{ title: "", category: "Web", summary: "", tags: [], github: "", demo: "" } */
];
