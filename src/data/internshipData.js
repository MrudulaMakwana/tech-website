import { FaReact, FaVuejs, FaPhp, FaNodeJs, FaJava } from "react-icons/fa";
import { SiDjango, SiDotnet } from "react-icons/si";

// reusable 1 year plan
const oneYearPlan = {
  duration: "1 Year",
  level: "Expert",
  topics: [
    "Advanced Projects",
    "Internship Experience",
    "Team Collaboration",
    "Client Work",
    "Deployment & DevOps",
    "Job Preparation",
    "Portfolio + Resume",
    "Interview Training",
  ],
  about:
    "This is a complete industry-level program designed to make you job-ready with real-world experience.",
  learn:
    "You will work on real projects, collaborate with teams, deploy applications, and prepare for interviews.",
};

const internshipData = [
  {
    id: 1,
    title: "React.js",
    slug: "react-js",
    desc: "Frontend Library",
    icon: FaReact,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["HTML, CSS, JS", "React Setup", "JSX", "Components"],
        about:
          "React.js is a powerful JavaScript library for building interactive user interfaces.",
        learn:
          "You will learn JSX, components, props, and basic UI building concepts.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["Hooks", "Routing", "API Integration", "Mini Project"],
        about:
          "React enables reusable UI components and efficient development.",
        learn:
          "You will learn hooks, routing, API integration, and build mini projects.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Redux", "Authentication", "Dashboard UI", "Projects"],
        about:
          "React is widely used in industry for scalable frontend apps.",
        learn:
          "You will build dashboards, implement authentication, and manage state using Redux.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["Performance", "Testing", "Advanced Hooks", "Live Project"],
        about:
          "Advanced React focuses on performance optimization and real apps.",
        learn:
          "You will optimize apps, test components, and work on real-time projects.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Full App Dev", "Team Project", "Deployment", "Portfolio"],
        about:
          "Professional React development includes full app lifecycle.",
        learn:
          "You will build complete apps, deploy them, and create a strong portfolio.",
      },
      oneYearPlan,
    ],
  },

  {
    id: 2,
    title: "Vue.js",
     slug: "vue-js",
    desc: "Progressive Framework",
    icon: FaVuejs,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["Vue Setup", "Templates", "Directives", "Components"],
        about: "Vue.js is a progressive framework for building UI.",
        learn: "You will learn templates, directives, and basic components.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["Vue Router", "State Management", "API Calls", "Mini App"],
        about: "Vue makes frontend development simple and flexible.",
        learn: "You will build apps with routing and API integration.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Vuex", "Forms", "Auth", "Dashboard"],
        about: "Vue is scalable and used in modern web apps.",
        learn: "You will handle state, authentication, and dashboards.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["Optimization", "Testing", "Reusable Components"],
        about: "Advanced Vue focuses on performance and scalability.",
        learn: "You will optimize apps and create reusable components.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Enterprise App", "Deployment", "Portfolio"],
        about: "Vue is used in enterprise-level applications.",
        learn: "You will build production apps and deploy them.",
      },
      oneYearPlan,
    ],
  },

  {
    id: 3,
    title: "PHP Laravel",
     slug: "php-laravel",
    desc: "Full-Stack Development",
    icon: FaPhp,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["PHP Basics", "Laravel Setup", "Routing", "MVC"],
        about: "Laravel is a powerful PHP framework for backend development.",
        learn: "You will learn MVC architecture and routing.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["Blade", "Forms", "CRUD", "Database"],
        about: "Laravel simplifies backend development.",
        learn: "You will build CRUD apps and manage databases.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Auth", "API", "Admin Panel"],
        about: "Laravel supports API and authentication systems.",
        learn: "You will build admin panels and secure apps.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["REST API", "Security", "Optimization"],
        about: "Advanced Laravel includes API development.",
        learn: "You will build secure REST APIs.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Full System Dev", "Payment Integration"],
        about: "Laravel is used for full system development.",
        learn: "You will build real-world applications.",
      },
      oneYearPlan,
    ],
  },

  {
    id: 4,
    title: "MERN Stack",
     slug: "mern-stack",
    desc: "JavaScript Full Stack",
    icon: FaReact,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["HTML, CSS, JS", "Node Intro", "React Basics"],
        about: "MERN stack is full-stack JavaScript development.",
        learn: "You will learn frontend + backend basics.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["Express", "MongoDB", "CRUD"],
        about: "MERN enables building full apps using JS.",
        learn: "You will create APIs and connect databases.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Auth", "Full Stack App"],
        about: "MERN is widely used in startups.",
        learn: "You will build complete full-stack apps.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["Optimization", "Security"],
        about: "Advanced MERN includes production readiness.",
        learn: "You will optimize and secure applications.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Real Projects", "Deployment"],
        about: "MERN is used in real-world applications.",
        learn: "You will deploy production-ready apps.",
      },
      oneYearPlan,
    ],
  },

  {
    id: 5,
    title: "Python Django",
      slug: "python-django",
    desc: "Python Web Framework",
    icon: SiDjango,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["Python Basics", "Django Setup"],
        about: "Django is a high-level Python web framework.",
        learn: "You will learn backend development basics.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["Models", "Forms", "CRUD"],
        about: "Django simplifies database-driven apps.",
        learn: "You will create CRUD applications.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Auth", "API"],
        about: "Django supports scalable backend apps.",
        learn: "You will build APIs and authentication systems.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["REST API", "Deployment"],
        about: "Advanced Django includes API development.",
        learn: "You will build REST APIs and deploy apps.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Full App Dev", "Live Project"],
        about: "Django is used in production-level apps.",
        learn: "You will build real-world applications.",
      },
      oneYearPlan,
    ],
  },

  {
    id: 6,
    title: ".NET Full Stack",
     slug: "dot-net-full-stack",
    desc: "Microsoft Ecosystem",
    icon: SiDotnet,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["C# Basics", ".NET Setup"],
        about: ".NET is a Microsoft framework for development.",
        learn: "You will learn C# and basics of .NET.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["CRUD", "Entity Framework"],
        about: ".NET supports enterprise apps.",
        learn: "You will build database-driven apps.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Auth", "API"],
        about: ".NET is used in enterprise development.",
        learn: "You will build secure APIs.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["Microservices", "Security"],
        about: "Advanced .NET includes microservices.",
        learn: "You will build scalable apps.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Enterprise App", "Deployment"],
        about: ".NET is used in large-scale systems.",
        learn: "You will develop enterprise apps.",
      },
      oneYearPlan,
    ],
  },

  {
    id: 7,
    title: "Node.js",
     slug: "node-js",
    desc: "JavaScript Backend",
    icon: FaNodeJs,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["JS Basics", "Node Setup"],
        about: "Node.js is used for backend development.",
        learn: "You will learn server-side JS basics.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["Express", "Routing"],
        about: "Node builds scalable backend apps.",
        learn: "You will build APIs.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Auth", "Database"],
        about: "Node supports real-time apps.",
        learn: "You will handle authentication and DB.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["Security", "Deployment"],
        about: "Advanced Node includes scaling.",
        learn: "You will optimize backend apps.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Production App", "Scaling"],
        about: "Node is used in production systems.",
        learn: "You will deploy scalable apps.",
      },
      oneYearPlan,
    ],
  },

  {
    id: 8,
    title: "Java",
      slug: "java",
    desc: "Enterprise Development",
    icon: FaJava,
    plans: [
      {
        duration: "15 Days",
        level: "Starter",
        topics: ["Java Basics", "OOP"],
        about: "Java is widely used in enterprise applications.",
        learn: "You will learn OOP concepts.",
      },
      {
        duration: "1 Month",
        level: "Basic",
        topics: ["Collections", "JDBC"],
        about: "Java supports backend systems.",
        learn: "You will work with databases.",
      },
      {
        duration: "3 Months",
        level: "Intermediate",
        topics: ["Spring Boot", "REST API"],
        about: "Spring Boot simplifies Java development.",
        learn: "You will build REST APIs.",
      },
      {
        duration: "4 Months",
        level: "Advanced",
        topics: ["Microservices", "Security"],
        about: "Java is used for scalable systems.",
        learn: "You will build enterprise systems.",
      },
      {
        duration: "6 Months",
        level: "Professional",
        topics: ["Enterprise App", "Deployment"],
        about: "Java is used in large companies.",
        learn: "You will build production apps.",
      },
      oneYearPlan,
    ],
  },
];

export default internshipData;