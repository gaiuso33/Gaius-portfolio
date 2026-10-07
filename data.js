/* EDIT THIS FILE to update your portfolio. index.html reads everything from here. */

const PROFILE = {
  name: "Oluwole Gaius",
  title: "Full-stack developer and machine learning engineer",
  intro: "I build web apps and machine learning tools that people actually use. I've spent three years working on a team as a data analyst and ML engineer, and I'm finishing a computer science degree at the University of Ibadan on top of a statistics degree.",
  status: "Available for freelance and full-time work",
  email: "oluwolegaiusayokunle@gmail.com",
  github: "https://github.com/gaiuso33",
  linkedin: "",   // paste your LinkedIn profile URL; the link is hidden while empty
  twitter: "https://twitter.com/4charactas",
  yearsExperience: 3
};

const ABOUT = [
  "I studied statistics, so I care whether a model or a number is right, not just whether it runs. I'm now in my final year of computer science, which is where the web and software side of my work comes from.",
  "I like taking a messy problem, such as hand-typed exams, unread resumes or scattered marks, and turning it into a tool someone can use in a minute."
];

const CREDENTIALS = [
  { what: "BSc Computer Science (400 level)", where: "University of Ibadan", when: "In progress" },
  { what: "Statistics degree", where: "University of Ibadan", when: "Completed this year" },
  { what: "Data analyst and ML engineer", where: "Team experience", when: "About 3 years" },
  { what: "Coursera certifications", where: "Python, machine learning, AI and software development", when: "In progress" }
];

// Add a skill by adding a word to a list. Add a group by adding a new line.
const SKILLS = {
  "Web development": ["React", "JavaScript (ES6+)", "HTML and CSS", "Tailwind CSS", "Node.js", "Express", "REST APIs"],
  "Machine learning and data": ["Python", "Scikit-Learn", "Pandas", "Text classification", "Data pipelines", "Statistics"],
  "Databases": ["MongoDB", "SQL"],
  "Tools": ["Git and GitHub", "Docker", "Postman", "Vercel", "Render"]
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
  }
  /* ,{ title: "", category: "Web", summary: "", tags: [], github: "", demo: "" } */
];
