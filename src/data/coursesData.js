import blogperson1 from "./../assets/images/blogperson1.jpg";
import blogperson2 from "./../assets/images/blogperson2.jpg";
import blogperson3 from "./../assets/images/blogperson3.jpg";

import course1 from "./../assets/images/Courses1.jpg";
import course2 from "./../assets/images/Courses2.jpg";
import course3 from "./../assets/images/Courses3.jpg";
import course4 from "./../assets/images/Courses4.jpg";
import course5 from "./../assets/images/Courses5.jpg";
import course6 from "./../assets/images/Courses6.jpg";

const courses = [
  // ================= BACKEND =================

  {
    id: 1,
    title: "Python Django",
    slug: "python-django",
    author: "Alex Morgan",
    price: "Free",
    duration: "12 Weeks",
    available: true,
    image: course1,
    avatar: blogperson1,

   curriculum: [
  {
    title: "Phase 1: Python Basics",
    content: [
      "Variables",
      "Functions",
      "Loops",
      "OOP Concepts",
    ],
  },
  {
    title: "Phase 2: Django Basics",
    content: [
      "Models",
      "Views",
      "Templates",
      "Admin Panel",
    ],
  },
  {
    title: "Phase 3: Database",
    content: [
      "CRUD Operations",
      "ORM",
      "Forms",
      "Validation",
    ],
  },
  {
    title: "Phase 4: APIs",
    content: [
      "Django REST Framework",
      "JWT Authentication",
      "API Development",
      "Postman Testing",
    ],
  },
  {
    title: "Phase 5: Advanced",
    content: [
      "Caching",
      "Optimization",
      "Security",
      "Testing",
    ],
  },
  {
    title: "Phase 6: DevOps",
    content: [
      "Docker",
      "Cloud Deployment",
      "CI/CD",
      "AWS Basics",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Blog System",
      "E-commerce Backend",
      "Live Projects",
      "Automation Scripts",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Portfolio",
      "Resume",
      "Interview Prep",
      "Freelancing",
    ],
  },
],
  },

  {
    id: 2,
    title: "Node.js",
    slug: "node-js",
    author: "Daniel Smith",
    price: "Free",
    duration: "10 Weeks",
    available: true,
    image: course2,
    avatar: blogperson2,

   curriculum: [
  {
    title: "Phase 1: JavaScript & Node Basics",
    content: [
      "JavaScript Fundamentals",
      "Node.js Setup",
      "Modules & NPM",
      "File System",
    ],
  },
  {
    title: "Phase 2: Backend Development",
    content: [
      "Express.js",
      "Routing",
      "Middleware",
      "REST API Development",
    ],
  },
  {
    title: "Phase 3: Database & Auth",
    content: [
      "MongoDB",
      "Mongoose",
      "CRUD Operations",
      "JWT Authentication",
    ],
  },
  {
    title: "Phase 4: Advanced Concepts",
    content: [
      "Socket.io",
      "MVC Architecture",
      "File Upload",
      "Project Structure",
    ],
  },
  {
    title: "Phase 5: Production Level",
    content: [
      "Caching",
      "Testing",
      "Performance Optimization",
      "Security Best Practices",
    ],
  },
  {
    title: "Phase 6: DevOps & Deployment",
    content: [
      "Docker",
      "AWS Deployment",
      "CI/CD Pipeline",
      "Cloud Hosting",
    ],
  },
  {
    title: "Phase 7: Internship & Projects",
    content: [
      "Live Client Projects",
      "Team Collaboration",
      "Git & GitHub",
      "Agile Workflow",
    ],
  },
  {
    title: "Phase 8: Career Preparation",
    content: [
      "Resume Building",
      "Portfolio Development",
      "Interview Questions",
    ],
  },
],
  },

  {
    id: 3,
    title: "Java Spring Boot",
    slug: "java-spring-boot",
    author: "Michael Brown",
    price: "Free",
    duration: "14 Weeks",
    available: true,
    image: course3,
    avatar: blogperson3,

   curriculum: [
  {
    title: "Phase 1: Core Java",
    content: [
      "Variables & Data Types",
      "OOP Concepts",
      "Collections",
      "Exception Handling",
    ],
  },
  {
    title: "Phase 2: Advanced Java",
    content: [
      "JDBC",
      "File Handling",
      "Multithreading",
      "MySQL Integration",
    ],
  },
  {
    title: "Phase 3: Web Development",
    content: [
      "Servlet",
      "JSP",
      "MVC Architecture",
      "Authentication",
    ],
  },
  {
    title: "Phase 4: Spring Boot",
    content: [
      "REST APIs",
      "Dependency Injection",
      "Spring Security",
      "JWT Authentication",
    ],
  },
  {
    title: "Phase 5: Microservices",
    content: [
      "Microservices Architecture",
      "API Gateway",
      "Service Communication",
      "Logging",
    ],
  },
  {
    title: "Phase 6: DevOps",
    content: [
      "Docker",
      "CI/CD",
      "Deployment",
      "Cloud Basics",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "E-commerce Backend",
      "Banking System",
      "Live Client Projects",
      "Team Collaboration",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Resume Building",
      "Interview Questions",
      "System Design Basics",
      "Portfolio",
    ],
  },
]
  },

  {
    id: 4,
    title: "PHP Laravel",
    slug: "php-laravel",
    author: "Sophia Carter",
    price: "Free",
    duration: "11 Weeks",
    available: true,
    image: course4,
    avatar: blogperson1,

  curriculum: [
  {
    title: "Phase 1: PHP Basics",
    content: [
      "Syntax",
      "Variables",
      "Functions",
      "Forms Handling",
    ],
  },
  {
    title: "Phase 2: Laravel Basics",
    content: [
      "Routing",
      "Blade Templates",
      "MVC Structure",
      "Database Migration",
    ],
  },
  {
    title: "Phase 3: CRUD & Auth",
    content: [
      "CRUD Operations",
      "Authentication",
      "Validation",
      "File Upload",
    ],
  },
  {
    title: "Phase 4: APIs",
    content: [
      "REST APIs",
      "JWT Authentication",
      "API Integration",
      "Postman",
    ],
  },
  {
    title: "Phase 5: Advanced",
    content: [
      "Caching",
      "Optimization",
      "Security",
      "Queue Jobs",
    ],
  },
  {
    title: "Phase 6: Deployment",
    content: [
      "Hosting",
      "cPanel",
      "Docker Basics",
      "CI/CD",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Admin Panel",
      "E-commerce Website",
      "Payment Gateway",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Portfolio",
      "Freelancing",
      "Resume",
      "Interview Prep",
    ],
  },
]
  },

  {
    id: 5,
    title: ".NET Development",
    slug: "net-development",
    author: "Emma Wilson",
    price: "Free",
    duration: "13 Weeks",
    available: true,
    image: course5,
    avatar: blogperson2,

   curriculum: [
  {
    title: "Phase 1: C# Basics",
    content: [
      "Variables",
      "OOP",
      "Collections",
      "Exception Handling",
    ],
  },
  {
    title: "Phase 2: .NET Core",
    content: [
      "ASP.NET MVC",
      "Routing",
      "CRUD",
      "Forms",
    ],
  },
  {
    title: "Phase 3: APIs",
    content: [
      "Web APIs",
      "Authentication",
      "JWT",
      "Entity Framework",
    ],
  },
  {
    title: "Phase 4: Advanced",
    content: [
      "LINQ",
      "Architecture",
      "Testing",
      "Optimization",
    ],
  },
  {
    title: "Phase 5: Microservices",
    content: [
      "Microservices",
      "API Gateway",
      "Logging",
      "Security",
    ],
  },
  {
    title: "Phase 6: Cloud",
    content: [
      "Azure",
      "CI/CD",
      "Deployment",
      "Docker",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Enterprise App",
      "Dashboard",
      "Live Projects",
      "Team Work",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Resume",
      "Interview Prep",
      "Portfolio",
      "Freelancing",
    ],
  },
]
  },

  // ================= FRONTEND =================

  {
    id: 6,
    title: "React.js",
    slug: "react-js",
    author: "Olivia Brown",
    price: "Free",
    duration: "10 Weeks",
    available: true,
    image: course6,
    avatar: blogperson3,

 curriculum: [
  {
    title: "Phase 1: React Basics",
    content: [
      "JSX",
      "Components",
      "Props",
      "Event Handling",
    ],
  },
  {
    title: "Phase 2: Hooks & Routing",
    content: [
      "useState",
      "useEffect",
      "React Router",
      "Forms Handling",
    ],
  },
  {
    title: "Phase 3: Intermediate React",
    content: [
      "Context API",
      "Firebase",
      "Authentication",
      "Tailwind CSS",
    ],
  },
  {
    title: "Phase 4: Advanced React",
    content: [
      "Redux Toolkit",
      "Protected Routes",
      "Dashboard UI",
      "API Integration",
    ],
  },
  {
    title: "Phase 5: Optimization",
    content: [
      "Performance Optimization",
      "Lazy Loading",
      "Code Splitting",
      "Testing",
    ],
  },
  {
    title: "Phase 6: Modern Tools",
    content: [
      "Next.js",
      "SEO Basics",
      "SSR & SSG",
      "Animations",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Admin Panel",
      "E-commerce UI",
      "Real Client Projects",
      "Portfolio Website",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Resume Building",
      "Interview Questions",
      "Freelancing",
      "Deployment",
    ],
  },
],
  },

  {
    id: 7,
    title: "Angular",
    slug: "angular",
    author: "Alex Morgan",
    price: "Free",
    duration: "12 Weeks",
    available: true,
    image: course1,
    avatar: blogperson1,

   curriculum: [
  {
    title: "Phase 1: TypeScript & Angular Basics",
    content: [
      "TypeScript Fundamentals",
      "Angular Setup (CLI)",
      "Components",
      "Templates & Data Binding",
    ],
  },
  {
    title: "Phase 2: Core Angular",
    content: [
      "Directives",
      "Pipes",
      "Forms (Template & Reactive)",
      "Event Handling",
    ],
  },
  {
    title: "Phase 3: Routing & Services",
    content: [
      "Angular Routing",
      "Navigation",
      "Services",
      "Dependency Injection",
    ],
  },
  {
    title: "Phase 4: API Integration",
    content: [
      "HTTP Client",
      "REST APIs",
      "Authentication",
      "JWT Integration",
    ],
  },
  {
    title: "Phase 5: State Management",
    content: [
      "RxJS",
      "Observables",
      "NgRx Basics",
      "State Handling",
    ],
  },
  {
    title: "Phase 6: Advanced Concepts",
    content: [
      "Lazy Loading",
      "Guards",
      "Interceptors",
      "Testing",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Admin Dashboard",
      "E-commerce Frontend",
      "Real Client Projects",
      "Team Collaboration",
    ],
  },
  {
    title: "Phase 8: Career Preparation",
    content: [
      "Resume Building",
      "Portfolio",
      "Interview Questions",
      "Deployment",
    ],
  },
],
  },

  {
    id: 8,
    title: "JavaScript",
    slug: "javascript",
    author: "Sophia Carter",
    price: "Free",
    duration: "8 Weeks",
    available: true,
    image: course2,
    avatar: blogperson2,

  curriculum: [
  {
    title: "Phase 1: JavaScript Basics",
    content: [
      "Variables",
      "Data Types",
      "Operators",
      "Control Statements",
    ],
  },
  {
    title: "Phase 2: Core Concepts",
    content: [
      "Functions",
      "Arrays",
      "Objects",
      "Loops",
    ],
  },
  {
    title: "Phase 3: DOM & Browser",
    content: [
      "DOM Manipulation",
      "Events",
      "Forms Handling",
      "Local Storage",
    ],
  },
  {
    title: "Phase 4: ES6+ Features",
    content: [
      "Arrow Functions",
      "Destructuring",
      "Spread & Rest",
      "Modules",
    ],
  },
  {
    title: "Phase 5: Asynchronous JS",
    content: [
      "Callbacks",
      "Promises",
      "Async/Await",
      "Fetch API",
    ],
  },
  {
    title: "Phase 6: Advanced JavaScript",
    content: [
      "Closures",
      "Hoisting",
      "Event Loop",
      "Prototype & Inheritance",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "To-Do App",
      "Weather App",
      "API Projects",
      "Mini Games",
    ],
  },
  {
    title: "Phase 8: Career Preparation",
    content: [
      "Interview Questions",
      "Problem Solving",
      "Portfolio",
      "Git & GitHub",
    ],
  },
],
  },

  {
    id: 9,
    title: "Vue.js",
    slug: "vue-js",
    author: "Daniel Smith",
    price: "Free",
    duration: "9 Weeks",
    available: true,
    image: course3,
    avatar: blogperson3,

  curriculum: [
  {
    title: "Phase 1: Vue Basics",
    content: [
      "Templates",
      "Directives",
      "Components",
      "Events",
    ],
  },
  {
    title: "Phase 2: Routing & Forms",
    content: [
      "Vue Router",
      "Navigation",
      "Forms",
      "Composition API",
    ],
  },
  {
    title: "Phase 3: Intermediate",
    content: [
      "Pinia",
      "Authentication",
      "CRUD",
      "Tailwind CSS",
    ],
  },
  {
    title: "Phase 4: Advanced",
    content: [
      "Dashboard UI",
      "API Integration",
      "Testing",
      "Project Structure",
    ],
  },
  {
    title: "Phase 5: Optimization",
    content: [
      "Performance Optimization",
      "Animations",
      "Architecture",
      "Best Practices",
    ],
  },
  {
    title: "Phase 6: Modern Tools",
    content: [
      "Nuxt.js",
      "SSR",
      "Deployment",
      "SEO",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Admin Dashboard",
      "Real Projects",
      "Portfolio",
      "Team Work",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Resume",
      "Interview Questions",
      "Freelancing",
      "Deployment",
    ],
  },
]
  },

  // ================= MOBILE =================

  {
    id: 10,
    title: "React Native",
    slug: "react-native",
    author: "Emma Wilson",
    price: "Free",
    duration: "14 Weeks",
    available: true,
    image: course4,
    avatar: blogperson1,

   curriculum: [
  {
    title: "Phase 1: Basics",
    content: [
      "JavaScript Fundamentals",
      "React Basics",
      "React Native Setup",
      "Core Components",
    ],
  },
  {
    title: "Phase 2: UI Development",
    content: [
      "Styling",
      "Flexbox",
      "Layouts",
      "Responsive Design",
    ],
  },
  {
    title: "Phase 3: Navigation",
    content: [
      "React Navigation",
      "Stack & Tab Navigation",
      "Drawer Navigation",
      "Deep Linking",
    ],
  },
  {
    title: "Phase 4: APIs & Storage",
    content: [
      "REST API Integration",
      "Axios",
      "AsyncStorage",
      "Local Database",
    ],
  },
  {
    title: "Phase 5: Native Features",
    content: [
      "Camera",
      "Location",
      "Permissions",
      "Push Notifications",
    ],
  },
  {
    title: "Phase 6: Advanced",
    content: [
      "Redux Toolkit",
      "Performance Optimization",
      "Animations",
      "Debugging",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "E-commerce App",
      "Social Media App",
      "Live Client Projects",
      "Team Collaboration",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "App Deployment",
      "Play Store Publishing",
      "Portfolio",
      "Interview Preparation",
    ],
  },
],
  },

  {
    id: 11,
    title: "Flutter",
    slug: "flutter",
    author: "Michael Brown",
    price: "Free",
    duration: "14 Weeks",
    available: true,
    image: course5,
    avatar: blogperson2,

  curriculum: [
  {
    title: "Phase 1: Dart Basics",
    content: [
      "Dart Language",
      "Variables & Functions",
      "OOP Concepts",
      "Control Flow",
    ],
  },
  {
    title: "Phase 2: Flutter Basics",
    content: [
      "Widgets",
      "Layouts",
      "Navigation",
      "UI Design",
    ],
  },
  {
    title: "Phase 3: State Management",
    content: [
      "Provider",
      "Riverpod",
      "Bloc Basics",
      "State Handling",
    ],
  },
  {
    title: "Phase 4: APIs & Firebase",
    content: [
      "REST APIs",
      "Firebase Auth",
      "Firestore",
      "Cloud Storage",
    ],
  },
  {
    title: "Phase 5: Native Features",
    content: [
      "Camera",
      "Location",
      "Notifications",
      "Permissions",
    ],
  },
  {
    title: "Phase 6: Advanced",
    content: [
      "Animations",
      "Performance Optimization",
      "Testing",
      "Debugging",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "E-commerce App",
      "Chat App",
      "Live Projects",
      "Portfolio Apps",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Play Store & App Store",
      "Deployment",
      "Resume",
      "Freelancing",
    ],
  },
],
  },

  {
    id: 12,
    title: "Android Development",
    slug: "android-development",
    author: "Sophia Carter",
    price: "Free",
    duration: "16 Weeks",
    available: true,
    image: course6,
    avatar: blogperson3,

  curriculum: [
  {
    title: "Phase 1: Kotlin Basics",
    content: [
      "Variables",
      "Functions",
      "OOP Concepts",
      "Control Flow",
    ],
  },
  {
    title: "Phase 2: Android UI",
    content: [
      "Layouts",
      "Activities",
      "Fragments",
      "Material Design",
    ],
  },
  {
    title: "Phase 3: Navigation & Storage",
    content: [
      "Navigation Component",
      "Intents",
      "SQLite",
      "Room Database",
    ],
  },
  {
    title: "Phase 4: APIs & Firebase",
    content: [
      "REST APIs",
      "Retrofit",
      "Firebase Auth",
      "Firestore",
    ],
  },
  {
    title: "Phase 5: Advanced",
    content: [
      "MVVM Architecture",
      "Dependency Injection",
      "Coroutines",
      "Testing",
    ],
  },
  {
    title: "Phase 6: Optimization",
    content: [
      "Performance Optimization",
      "Security",
      "Debugging",
      "Best Practices",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "E-commerce App",
      "Booking App",
      "Live Projects",
      "Team Work",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Play Store Publishing",
      "Portfolio",
      "Interview Prep",
      "Freelancing",
    ],
  },
],
  },


  {
  id: 13,
  title: "iOS Development",
  slug: "ios-development",
  author: "Alex Morgan",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course1,
  avatar: blogperson1,

  curriculum: [
  {
    title: "Phase 1: Swift Basics",
    content: [
      "Variables",
      "Functions",
      "OOP Concepts",
      "Control Flow",
    ],
  },
  {
    title: "Phase 2: UI Development",
    content: [
      "UIKit",
      "SwiftUI",
      "Layouts",
      "Navigation",
    ],
  },
  {
    title: "Phase 3: Storage & Data",
    content: [
      "Core Data",
      "UserDefaults",
      "File Handling",
      "Data Persistence",
    ],
  },
  {
    title: "Phase 4: APIs & Firebase",
    content: [
      "REST APIs",
      "Alamofire",
      "Firebase Auth",
      "Cloud Firestore",
    ],
  },
  {
    title: "Phase 5: Advanced",
    content: [
      "MVVM Architecture",
      "Concurrency",
      "Testing",
      "Debugging",
    ],
  },
  {
    title: "Phase 6: Optimization",
    content: [
      "Performance Optimization",
      "Security",
      "App Lifecycle",
      "Best Practices",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "E-commerce App",
      "Social App",
      "Live Projects",
      "Portfolio Apps",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "App Store Publishing",
      "Portfolio",
      "Interview Prep",
      "Freelancing",
    ],
  },
],
},

{
  id: 14,
  title: "Xamarin",
  slug: "xamarin",
  author: "Emma Wilson",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course2,
  avatar: blogperson2,

 curriculum: [
  {
    title: "Phase 1: C# Basics",
    content: [
      "Variables",
      "OOP",
      "Collections",
      "Exception Handling",
    ],
  },
  {
    title: "Phase 2: Xamarin Basics",
    content: [
      "Layouts",
      "UI Components",
      "Navigation",
      "Cross Platform Setup",
    ],
  },
  {
    title: "Phase 3: Data Handling",
    content: [
      "SQLite",
      "File Storage",
      "Data Binding",
      "MVVM Pattern",
    ],
  },
  {
    title: "Phase 4: APIs",
    content: [
      "REST APIs",
      "Authentication",
      "JSON Parsing",
      "HTTP Client",
    ],
  },
  {
    title: "Phase 5: Advanced",
    content: [
      "Dependency Injection",
      "Testing",
      "Performance Optimization",
      "Debugging",
    ],
  },
  {
    title: "Phase 6: Deployment",
    content: [
      "Android Build",
      "iOS Build",
      "CI/CD",
      "Cloud Services",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Business App",
      "E-commerce App",
      "Live Projects",
      "Team Collaboration",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "App Publishing",
      "Portfolio",
      "Resume",
      "Interview Prep",
    ],
  },
],
},

  // ================= DATABASE =================

  {
    id: 15,
    title: "MongoDB",
    slug: "mongodb",
    author: "Alex Morgan",
    price: "Free",
    duration: "6 Weeks",
    available: true,
    image: course1,
    avatar: blogperson1,

    curriculum: [
  {
    title: "Phase 1: Database Basics",
    content: [
      "What is Database",
      "NoSQL vs SQL",
      "MongoDB Installation",
      "Collections & Documents",
    ],
  },
  {
    title: "Phase 2: CRUD Operations",
    content: [
      "Insert Documents",
      "Find Queries",
      "Update & Delete",
      "Operators",
    ],
  },
  {
    title: "Phase 3: Mongoose",
    content: [
      "Schemas",
      "Models",
      "Validation",
      "Relationships",
    ],
  },
  {
    title: "Phase 4: Advanced MongoDB",
    content: [
      "Aggregation Pipeline",
      "Indexes",
      "Performance Optimization",
      "Data Modeling",
    ],
  },
  {
    title: "Phase 5: Security",
    content: [
      "Authentication",
      "Authorization",
      "Data Encryption",
      "Best Practices",
    ],
  },
  {
    title: "Phase 6: Integration",
    content: [
      "Node.js Integration",
      "REST APIs",
      "Cloud MongoDB (Atlas)",
      "Backup & Restore",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Blog Database",
      "E-commerce DB",
      "Analytics Dashboard",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Query Optimization",
      "Interview Questions",
      "Portfolio",
      "Real-world Case Studies",
    ],
  },
],
  },

  {
    id: 16,
    title: "PostgreSQL",
    slug: "postgresql",
    author: "Emma Wilson",
    price: "Free",
    duration: "7 Weeks",
    available: true,
    image: course2,
    avatar: blogperson2,

   curriculum: [
  {
    title: "Phase 1: SQL Basics",
    content: [
      "Database Concepts",
      "Tables",
      "Basic Queries",
      "Data Types",
    ],
  },
  {
    title: "Phase 2: Advanced SQL",
    content: [
      "Joins",
      "Subqueries",
      "Indexes",
      "Constraints",
    ],
  },
  {
    title: "Phase 3: PostgreSQL Features",
    content: [
      "Functions",
      "Triggers",
      "Views",
      "Stored Procedures",
    ],
  },
  {
    title: "Phase 4: Performance",
    content: [
      "Query Optimization",
      "Indexing Strategies",
      "Execution Plans",
      "Partitioning",
    ],
  },
  {
    title: "Phase 5: Security",
    content: [
      "User Roles",
      "Permissions",
      "Data Security",
      "Backup & Recovery",
    ],
  },
  {
    title: "Phase 6: Integration",
    content: [
      "Node.js / Java Integration",
      "ORM Tools",
      "API Integration",
      "Cloud Hosting",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Banking System DB",
      "E-commerce Database",
      "Analytics System",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Advanced Queries",
      "Interview Questions",
      "Portfolio",
      "Case Studies",
    ],
  },
],
  },
  {
  id: 17,
  title: "Oracle ",
  slug: "oracle",
  author: "Daniel Smith",
  price: "Free",
  duration: "8 Weeks",
  available: true,
  image: course3,
  avatar: blogperson3,

 curriculum: [
  {
    title: "Phase 1: SQL Fundamentals",
    content: [
      "Database Concepts",
      "Tables & Schemas",
      "Basic Queries",
      "Data Types",
    ],
  },
  {
    title: "Phase 2: Advanced SQL",
    content: [
      "Joins",
      "Indexes",
      "Constraints",
      "Subqueries",
    ],
  },
  {
    title: "Phase 3: PL/SQL",
    content: [
      "Procedures",
      "Functions",
      "Triggers",
      "Packages",
    ],
  },
  {
    title: "Phase 4: Performance",
    content: [
      "Query Optimization",
      "Execution Plans",
      "Indexing",
      "Tuning",
    ],
  },
  {
    title: "Phase 5: Security",
    content: [
      "User Management",
      "Roles & Privileges",
      "Data Encryption",
      "Backup",
    ],
  },
  {
    title: "Phase 6: Enterprise Integration",
    content: [
      "Java Integration",
      "Enterprise Systems",
      "API Connectivity",
      "Cloud Oracle",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Banking Database",
      "ERP System",
      "Enterprise DB Design",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "DBA Skills",
      "Interview Prep",
      "Case Studies",
      "Portfolio",
    ],
  },
],
},

{
  id: 18,
  title: "MySQL",
  slug: "mysql",
  author: "Sophia Carter",
  price: "Free",
  duration: "6 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,
curriculum: [
  {
    title: "Phase 1: SQL Basics",
    content: [
      "Database Concepts",
      "Tables",
      "Basic Queries",
      "Data Types",
    ],
  },
  {
    title: "Phase 2: Advanced SQL",
    content: [
      "Joins",
      "Subqueries",
      "Indexes",
      "Constraints",
    ],
  },
  {
    title: "Phase 3: Database Design",
    content: [
      "Normalization",
      "Relationships",
      "ER Diagrams",
      "Schema Design",
    ],
  },
  {
    title: "Phase 4: Performance",
    content: [
      "Query Optimization",
      "Indexing",
      "Execution Plans",
      "Caching",
    ],
  },
  {
    title: "Phase 5: Security",
    content: [
      "User Roles",
      "Permissions",
      "Backup & Restore",
      "Data Security",
    ],
  },
  {
    title: "Phase 6: Integration",
    content: [
      "PHP / Node Integration",
      "ORM Tools",
      "REST APIs",
      "Cloud Hosting",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "E-commerce DB",
      "Blog System",
      "Analytics DB",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Advanced Queries",
      "Interview Questions",
      "Portfolio",
      "Real-world Scenarios",
    ],
  },
],
},

  // ================= CYBER SECURITY =================

  {
    id: 19,
    title: "Ethical Hacking",
    slug: "ethical-hacking",
    author: "Michael Brown",
    price: "Free",
    duration: "15 Weeks",
    available: true,
    image: course3,
    avatar: blogperson3,

 curriculum: [
  {
    title: "Phase 1: Networking Basics",
    content: [
      "IP Addressing",
      "OSI Model",
      "TCP/IP",
      "DNS & Protocols",
    ],
  },
  {
    title: "Phase 2: Linux Fundamentals",
    content: [
      "Linux Commands",
      "File Permissions",
      "Shell Scripting",
      "System Management",
    ],
  },
  {
    title: "Phase 3: Security Basics",
    content: [
      "Cyber Security Concepts",
      "Types of Attacks",
      "Vulnerabilities",
      "Security Tools Overview",
    ],
  },
  {
    title: "Phase 4: Ethical Hacking",
    content: [
      "Kali Linux",
      "Penetration Testing",
      "Reconnaissance",
      "Scanning Techniques",
    ],
  },
  {
    title: "Phase 5: Web Security",
    content: [
      "OWASP Top 10",
      "SQL Injection",
      "XSS",
      "CSRF",
    ],
  },
  {
    title: "Phase 6: Advanced Hacking",
    content: [
      "Metasploit",
      "Wireshark",
      "Password Cracking",
      "Social Engineering",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Vulnerability Assessment",
      "Pen Testing Lab",
      "Bug Bounty Practice",
      "Live Security Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "CEH Preparation",
      "Resume Building",
      "Interview Questions",
      "Freelancing",
    ],
  },
],
  },

  {
  id: 20,
  title: "Network Security",
  slug: "network-security",
  author: "Emma Wilson",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course4,
  avatar: blogperson1,

 curriculum: [
  {
    title: "Phase 1: Networking Basics",
    content: [
      "OSI Model",
      "TCP/IP",
      "IP Addressing",
      "Subnetting",
    ],
  },
  {
    title: "Phase 2: Network Devices",
    content: [
      "Routers",
      "Switches",
      "Firewalls",
      "Load Balancers",
    ],
  },
  {
    title: "Phase 3: Security Fundamentals",
    content: [
      "Firewalls",
      "VPN",
      "IDS/IPS",
      "Network Protocol Security",
    ],
  },
  {
    title: "Phase 4: Threats & Attacks",
    content: [
      "DDoS",
      "Man-in-the-Middle",
      "Spoofing",
      "Sniffing",
    ],
  },
  {
    title: "Phase 5: Monitoring",
    content: [
      "Network Monitoring Tools",
      "Wireshark",
      "Log Analysis",
      "Intrusion Detection",
    ],
  },
  {
    title: "Phase 6: Advanced Security",
    content: [
      "Zero Trust Security",
      "Cloud Security",
      "Security Policies",
      "Risk Management",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Secure Network Setup",
      "Firewall Configuration",
      "Threat Detection System",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Certifications (CCNA, Security+)",
      "Interview Questions",
      "Portfolio",
      "Case Studies",
    ],
  },
],
},


{
  id: 21,
  title: "Cryptography",
  slug: "cryptography",
  author: "Daniel Smith",
  price: "Free",
  duration: "12 Weeks",
  available: true,
  image: course5,
  avatar: blogperson2,

 curriculum: [
  {
    title: "Phase 1: Basics",
    content: [
      "Introduction to Cryptography",
      "Encryption & Decryption",
      "Keys & Algorithms",
      "History of Cryptography",
    ],
  },
  {
    title: "Phase 2: Symmetric Encryption",
    content: [
      "AES",
      "DES",
      "Block & Stream Ciphers",
      "Encryption Techniques",
    ],
  },
  {
    title: "Phase 3: Asymmetric Encryption",
    content: [
      "RSA",
      "Public & Private Keys",
      "Key Exchange",
      "Digital Certificates",
    ],
  },
  {
    title: "Phase 4: Hashing",
    content: [
      "Hash Functions",
      "SHA",
      "MD5",
      "Password Security",
    ],
  },
  {
    title: "Phase 5: Protocols",
    content: [
      "SSL/TLS",
      "HTTPS",
      "Secure Communication",
      "Blockchain Basics",
    ],
  },
  {
    title: "Phase 6: Advanced Concepts",
    content: [
      "Digital Signatures",
      "PKI",
      "Cryptanalysis",
      "Quantum Cryptography Basics",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Secure Messaging App",
      "Encryption Tool",
      "Password Manager",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Security Certifications",
      "Interview Prep",
      "Portfolio",
      "Research Topics",
    ],
  },
],
},

  // ================= AI / ML =================

  {
    id: 22,
    title: "Machine Learning",
    slug: "machine-learning",
    author: "Olivia Brown",
    price: "Free",
    duration: "18 Weeks",
    available: true,
    image: course4,
    avatar: blogperson1,

  curriculum: [
  {
    title: "Phase 1: Python Basics",
    content: [
      "Python Fundamentals",
      "NumPy",
      "Pandas",
      "Data Handling",
    ],
  },
  {
    title: "Phase 2: Data Analysis",
    content: [
      "Data Cleaning",
      "Data Visualization",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Phase 3: Math for ML",
    content: [
      "Statistics Basics",
      "Probability",
      "Linear Algebra",
      "Data Distributions",
    ],
  },
  {
    title: "Phase 4: ML Algorithms",
    content: [
      "Regression",
      "Classification",
      "Clustering",
      "KNN & SVM",
    ],
  },
  {
    title: "Phase 5: Advanced ML",
    content: [
      "Decision Trees",
      "Random Forest",
      "Boosting Algorithms",
      "Model Evaluation",
    ],
  },
  {
    title: "Phase 6: Tools & Deployment",
    content: [
      "Scikit-learn",
      "Model Deployment",
      "Flask API",
      "Cloud Basics",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Prediction Models",
      "Recommendation System",
      "Live Projects",
      "Kaggle Practice",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Interview Questions",
      "Portfolio",
      "Resume Building",
      "Case Studies",
    ],
  },
],
  },


  {
  id: 23,
  title: "Deep Learning",
  slug: "deep-learning",
  author: "Alex Morgan",
  price: "Free",
  duration: "16 Weeks",
  available: true,
  image: course5,
  avatar: blogperson2,
curriculum: [
  {
    title: "Phase 1: Python & Math",
    content: [
      "Python Basics",
      "Linear Algebra",
      "Probability",
      "Statistics",
    ],
  },
  {
    title: "Phase 2: Neural Networks",
    content: [
      "Perceptron",
      "Activation Functions",
      "Forward Propagation",
      "Loss Functions",
    ],
  },
  {
    title: "Phase 3: Training Models",
    content: [
      "Backpropagation",
      "Gradient Descent",
      "Optimization",
      "Overfitting",
    ],
  },
  {
    title: "Phase 4: Deep Learning Models",
    content: [
      "CNN",
      "RNN",
      "LSTM",
      "Autoencoders",
    ],
  },
  {
    title: "Phase 5: Frameworks",
    content: [
      "TensorFlow",
      "Keras",
      "PyTorch Basics",
      "GPU Training",
    ],
  },
  {
    title: "Phase 6: Advanced Topics",
    content: [
      "Transfer Learning",
      "NLP Basics",
      "Computer Vision",
      "Model Optimization",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Image Classifier",
      "Chatbot",
      "Face Recognition",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Portfolio",
      "Research Papers",
      "Interview Prep",
      "AI Roles",
    ],
  },
],
 
},
{
  id: 24,
  title: "Neural Networks",
  slug: "neural-networks",
  author: "Emma Wilson",
  price: "Free",
  duration: "14 Weeks",
  available: true,
  image: course6,
  avatar: blogperson3,

 curriculum: [
  {
    title: "Phase 1: Basics",
    content: [
      "Neurons",
      "Layers",
      "Weights & Bias",
      "Activation Functions",
    ],
  },
  {
    title: "Phase 2: Forward Pass",
    content: [
      "Matrix Operations",
      "Forward Propagation",
      "Loss Functions",
      "Error Calculation",
    ],
  },
  {
    title: "Phase 3: Training",
    content: [
      "Backpropagation",
      "Gradient Descent",
      "Learning Rate",
      "Optimization",
    ],
  },
  {
    title: "Phase 4: Architectures",
    content: [
      "Feedforward Networks",
      "CNN",
      "RNN",
      "LSTM",
    ],
  },
  {
    title: "Phase 5: Regularization",
    content: [
      "Dropout",
      "Batch Normalization",
      "Overfitting Control",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "Phase 6: Frameworks",
    content: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Model Building",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Digit Recognition",
      "Image Classification",
      "Prediction Models",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Research Concepts",
      "Interview Prep",
      "Portfolio",
      "AI Specialization",
    ],
  },
],
},

{
  id: 25,
  title: "Data Science",
  slug: "data-science",
  author: "Daniel Smith",
  price: "Free",
  duration: "20 Weeks",
  available: true,
  image: course1,
  avatar: blogperson1,

 curriculum: [
  {
    title: "Phase 1: Python & Tools",
    content: [
      "Python Basics",
      "NumPy",
      "Pandas",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Phase 2: Data Analysis",
    content: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Visualization",
      "Matplotlib & Seaborn",
    ],
  },
  {
    title: "Phase 3: Statistics",
    content: [
      "Mean Median Mode",
      "Probability",
      "Hypothesis Testing",
      "Distributions",
    ],
  },
  {
    title: "Phase 4: Machine Learning",
    content: [
      "Regression",
      "Classification",
      "Clustering",
      "Model Evaluation",
    ],
  },
  {
    title: "Phase 5: Advanced",
    content: [
      "Feature Engineering",
      "Time Series",
      "Big Data Basics",
      "SQL for Data Science",
    ],
  },
  {
    title: "Phase 6: Tools",
    content: [
      "Power BI / Tableau",
      "Excel Advanced",
      "Model Deployment",
      "Cloud Basics",
    ],
  },
  {
    title: "Phase 7: Projects",
    content: [
      "Data Dashboard",
      "Prediction Models",
      "Business Case Studies",
      "Live Projects",
    ],
  },
  {
    title: "Phase 8: Career",
    content: [
      "Portfolio",
      "Resume",
      "Interview Prep",
      "Case Studies",
    ],
  },
],
},


];

export default courses;