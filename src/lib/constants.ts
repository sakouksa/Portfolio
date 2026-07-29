import { 
  DeveloperProfile, 
  SkillItem, 
  ProjectItem, 
  ServiceItem, 
  TimelineItem, 
  TestimonialItem, 
  BlogPost, 
  PricingTier, 
  FAQItem 
} from '../types/portfolio.types';

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: "Sak Ousa",
  role: "Senior Full Stack Architect & UI/UX Engineer",
  tagline: "Crafting world-class digital experiences, scalable cloud systems, and intuitive interfaces with modern technologies.",
  bio: "Passionate Senior Software Architect with 3+ years of expertise in building enterprise web applications, high-performance distributed systems, and sleek interactive frontends. Specialized in React 19, Next.js, Node.js, TypeScript, Cloud Architecture, and AI integration. Dedicated to clean code, WCAG accessibility, and seamless user experiences.",
  location: "Phnom Penh, Cambodia",
  email: "sakousa.dev@gmail.com",
  phone: "+855 (0) 96 123 4567",
  github: "https://github.com/sakouksa",
  linkedin: "https://linkedin.com/in/sakousa",
  twitter: "https://twitter.com/sakousa",
  medium: "https://medium.com/@sakousa",
  leetcode: "https://leetcode.com/sakousa",
  resumeUrl: "/cv/Mr._SAKOUSA_CV.pdf",
  avatarUrl: "/profile.jpg",
  yearsExperience: 3,
  completedProjects: 35,
  happyClients: 32,
  githubStars: 1420,
  totalCommits: 3850
};

export const SKILL_ITEMS: SkillItem[] = [
  // Frontend & UI Ecosystem
  { name: "JAVASCRIPT", category: "Frontend & UI Ecosystem", level: 98, bgColor: "#F7DF1E", textColor: "#000000", years: 3, featured: true },
  { name: "TYPESCRIPT", category: "Frontend & UI Ecosystem", level: 95, bgColor: "#007ACC", textColor: "#FFFFFF", years: 0.5, featured: true },
  { name: "REACT", category: "Frontend & UI Ecosystem", level: 96, bgColor: "#20232A", textColor: "#61DAFB", years: 1, featured: true },
  { name: "HTML5", category: "Frontend & UI Ecosystem", level: 99, bgColor: "#E34F26", textColor: "#FFFFFF", years: 3 },
  { name: "CSS", category: "Frontend & UI Ecosystem", level: 98, bgColor: "#1572B6", textColor: "#FFFFFF", years: 3 },
  { name: "TAILWIND CSS", category: "Frontend & UI Ecosystem", level: 96, bgColor: "#06B6D4", textColor: "#FFFFFF", years: 0.5, featured: true },
  { name: "BOOTSTRAP", category: "Frontend & UI Ecosystem", level: 90, bgColor: "#7952B3", textColor: "#FFFFFF", years: 3 },
  { name: "ANT DESIGN", category: "Frontend & UI Ecosystem", level: 88, bgColor: "#0170FE", textColor: "#FFFFFF", years: 0.5 },
  { name: "VITE", category: "Frontend & UI Ecosystem", level: 95, bgColor: "#646CFF", textColor: "#FFFFFF", years: 0.5, featured: true },
  { name: "JQUERY", category: "Frontend & UI Ecosystem", level: 85, bgColor: "#0769AD", textColor: "#FFFFFF", years: 2 },

  // Backend Frameworks & Systems
  { name: "SPRING BOOT", category: "Backend Frameworks & Systems", level: 90, bgColor: "#6DB33F", textColor: "#FFFFFF", years: 0.17, featured: true },
  { name: "SPRING FRAMEWORK", category: "Backend Frameworks & Systems", level: 88, bgColor: "#6DB33F", textColor: "#FFFFFF", years: 0.25 },
  { name: "LARAVEL", category: "Backend Frameworks & Systems", level: 92, bgColor: "#FF2D20", textColor: "#FFFFFF", years: 2, featured: true },
  { name: "NODE.JS", category: "Backend Frameworks & Systems", level: 95, bgColor: "#339933", textColor: "#FFFFFF", years: 1, featured: true },
  { name: "ASP.NET CORE", category: "Backend Frameworks & Systems", level: 88, bgColor: "#512BD4", textColor: "#FFFFFF", years: 1 },
  { name: "ASP.NET", category: "Backend Frameworks & Systems", level: 85, bgColor: "#512BD4", textColor: "#FFFFFF", years: 1 },
  { name: "DJANGO", category: "Backend Frameworks & Systems", level: 86, bgColor: "#092E20", textColor: "#FFFFFF", years: 1 },

  // Mobile Development
  { name: "FLUTTER", category: "Mobile Development", level: 90, bgColor: "#02569B", textColor: "#FFFFFF", years: 0.5, featured: true },
  { name: "DART", category: "Mobile Development", level: 88, bgColor: "#0175C2", textColor: "#FFFFFF", years: 0.58, featured: true },

  // Programming Languages & Desktop
  { name: "JAVA", category: "Programming Languages & Desktop", level: 92, bgColor: "#ED8B00", textColor: "#FFFFFF", years: 1, featured: true },
  { name: "C#", category: "Programming Languages & Desktop", level: 90, bgColor: "#239120", textColor: "#FFFFFF", years: 2 },
  { name: "PYTHON", category: "Programming Languages & Desktop", level: 92, bgColor: "#3776AB", textColor: "#FFFFFF", years: 1, featured: true },
  { name: "PHP", category: "Programming Languages & Desktop", level: 90, bgColor: "#777BB4", textColor: "#FFFFFF", years: 2 },
  { name: "C", category: "Programming Languages & Desktop", level: 82, bgColor: "#A8B9CC", textColor: "#FFFFFF", years: 2 },
  { name: "C++", category: "Programming Languages & Desktop", level: 85, bgColor: "#00599C", textColor: "#FFFFFF", years: 2 },

  // Databases
  { name: "MYSQL", category: "Databases", level: 94, bgColor: "#4479A1", textColor: "#FFFFFF", years: 2, featured: true },
  { name: "POSTGRESQL", category: "Databases", level: 95, bgColor: "#4169E1", textColor: "#FFFFFF", years: 1, featured: true },
  { name: "SQL SERVER", category: "Databases", level: 88, bgColor: "#CC292B", textColor: "#FFFFFF", years: 2 },

  // DevTools & Platforms
  { name: "GIT", category: "DevTools & Platforms", level: 96, bgColor: "#F05032", textColor: "#FFFFFF", years: 2, featured: true },
  { name: "VS CODE", category: "DevTools & Platforms", level: 98, bgColor: "#007ACC", textColor: "#FFFFFF", years: 3, featured: true },
  { name: "INTELLIJ IDEA", category: "DevTools & Platforms", level: 92, bgColor: "#1D1D1D", textColor: "#FE315D", years: 1 },
  { name: "PHPSTORM", category: "DevTools & Platforms", level: 90, bgColor: "#1D1D1D", textColor: "#9A63EB", years: 1 },
  { name: "ANDROID STUDIO", category: "DevTools & Platforms", level: 88, bgColor: "#3DDC84", textColor: "#000000", years: 0.5 },
  { name: "POSTMAN", category: "DevTools & Platforms", level: 95, bgColor: "#FF6C37", textColor: "#FFFFFF", years: 1, featured: true },
  { name: "VERCEL", category: "DevTools & Platforms", level: 96, bgColor: "#000000", textColor: "#FFFFFF", years: 2, featured: true },
];


export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: "project-1",
    title: "Enterprise E-Commerce + POS System",
    subtitle: "All-in-One E-Commerce & Multi-Branch POS Platform",
    description: "An enterprise-grade, multi-branch management platform integrating online e-commerce sales with physical POS terminal operations, inventory tracking, financial analytics, HRM, and real-time cash register control.",
    category: "Full Stack",
    tags: ["Laravel 12/13", "React 19", "Tailwind CSS v4", "TypeScript", "PostgreSQL", "Zustand", "REST API"],
    image: "/images/pos-dashboard.png",
    gallery: [
      "/images/pos-dashboard.png",
      "/images/pos-terminal.png",
      "/images/pos-login.png"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/sakouksa/Project-Enterprise-E-Commerce-POS-System",
    featured: true,
    date: "2025 - Present",
    architecture: "Monolithic Laravel backend acting as a REST API server connected to a reactive React 19 single-page application (SPA). Features multi-warehouse inventory isolation, real-time POS cash drawer tracking, and role-based permissions (RBAC).",
    challenges: [
      "Synchronizing real-time inventory levels between high-volume web orders and active physical POS cashier terminals without race conditions.",
      "Designing a high-speed cashier POS interface supporting barcode/IMEI scanning, discount calculations, and instant receipt generation."
    ],
    solutions: [
      "Implemented optimistic concurrency control and database transaction locks during cart checkout.",
      "Built keyboard-first shortcuts and local caching for lightning-fast item lookups in the POS terminal."
    ],
    metrics: [
      { label: "Inventory Managed", value: "14K+ Items" },
      { label: "Uptime", value: "99.98%" },
      { label: "Tech Stack", value: "Laravel + React" }
    ]
  },
  {
    id: "project-2",
    title: "Betheme Shop",
    subtitle: "Full-Featured E-Commerce Fashion Store",
    description: "A complete multi-page e-commerce web application for a fashion retail store built with pure HTML5, CSS3, and JavaScript. Features a product catalogue, shopping cart, user authentication, contact form, and promotional landing pages — deployed live on Vercel.",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Vercel", "Responsive Design", "FontAwesome"],
    image: "/images/ecommerce-home.png",
    gallery: [
      "/images/ecommerce-home.png",
      "/images/ecommerce-shop.png",
      "/images/ecommerce-blog.png",
      "/images/ecommerce-about.png",
      "/images/ecommerce-contact.png",
      "/images/ecommerce-card.png",
    ],
    demoUrl: "https://e-commerce-shoping-five.vercel.app/index.html",
    githubUrl: "https://github.com/sakouksa/E-commerceShoping",
    featured: true,
    date: "2024",
    architecture: "Multi-page static website architecture with HTML5 semantic structure, responsive CSS Grid & Flexbox layouts, and vanilla JavaScript for cart logic, form validation, and interactive UI components. Hosted on Vercel with automatic HTTPS and global CDN.",
    challenges: [
      "Building a fully functional shopping cart using only vanilla JavaScript without any framework or state management library.",
      "Ensuring consistent responsive layout across all pages from mobile (320px) to 4K desktop."
    ],
    solutions: [
      "Implemented a localStorage-based cart system for persistent session data across page navigation.",
      "Used CSS custom properties and a mobile-first approach with media queries for seamless multi-device support."
    ],
    metrics: [
      { label: "Pages", value: "6+" },
      { label: "Lighthouse", value: "95/100" },
      { label: "Deploy", value: "Vercel" }
    ]
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Full-Stack Web Application",
    shortDesc: "End-to-end web apps with React 19, Next.js, Node.js, and modern databases.",
    fullDesc: "I architect and build enterprise-grade full-stack web applications tailored for speed, scalability, SEO optimization, and exceptional user experience.",
    iconName: "Globe",
    features: [
      "Custom React 19 & Next.js App Architecture",
      "Type-safe Backend APIs (Node.js, Express, FastAPI, Spring)",
      "Database Schema Design (PostgreSQL, MySQL, Prisma)",
      "Dark / Light Mode & Glassmorphic UI Aesthetics",
      "Full SEO & Performance Optimization (100 Lighthouse Score)"
    ],
    deliverables: ["Production Source Code", "CI/CD Pipeline", "Deployment to Vercel/AWS", "Documentation"],
    popular: true
  },
  {
    id: "srv-2",
    title: "Mobile App Development",
    shortDesc: "Cross-platform mobile applications for iOS & Android using Flutter, Dart & React Native.",
    fullDesc: "Deliver native-feeling mobile applications with smooth 60 FPS animations, offline capabilities, secure authentication, and push notifications.",
    iconName: "Smartphone",
    features: [
      "Cross-Platform iOS & Android Codebase (Flutter / React Native)",
      "Smooth Framer / Reanimated Gestures & Motion",
      "Offline Storage & Real-Time Sync",
      "App Store & Google Play Submission Ready"
    ],
    deliverables: ["Flutter / React Native Codebase", "IPA & APK Builds", "App Store Guidance"]
  },
  {
    id: "srv-3",
    title: "AI Integration & LLM Apps",
    shortDesc: "Seamlessly integrate OpenAI, Claude, LangChain, and RAG pipelines into your product.",
    fullDesc: "Supercharge your business with generative AI capabilities, custom prompt engineering pipelines, autonomous agents, and vector database embeddings.",
    iconName: "Bot",
    features: [
      "OpenAI & Claude API Integration",
      "RAG (Retrieval-Augmented Generation) Systems",
      "Vector Database Setup (Pinecone, Qdrant)",
      "Interactive AI Chat & Automation UIs"
    ],
    deliverables: ["AI Service Layer", "Vector Index Pipeline", "Testing Suite"],
    popular: true
  },
  {
    id: "srv-4",
    title: "UI/UX & Design Systems",
    shortDesc: "Pixel-perfect Figma designs, modern design systems, and component libraries.",
    fullDesc: "Create cohesive, accessible, and scalable design systems that streamline product development and elevate brand aesthetic across all platforms.",
    iconName: "Layout",
    features: [
      "Figma UI/UX Mockups & Interactive Prototypes",
      "Reusable Tailwind CSS & React Component Library",
      "WCAG AA Accessibility Compliance",
      "Design Token System & Dark Mode Foundations"
    ],
    deliverables: ["Figma Design Files", "Storybook Component Catalog", "Tailwind Config"]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    title: "Senior Lead Frontend Architect",
    organization: "Vanguard Tech Systems",
    period: "2024 - Present",
    location: "Kampong Thom, Cambodia",
    description: "Leading the core frontend platform team building high-scale SaaS applications, design systems, and real-time AI dashboards.",
    achievements: [
      "Architected React 19 micro-frontend framework reducing page load time by 42%.",
      "Mentored team of engineers and standardized TypeScript & WCAG AA design system across 4 product suites.",
      "Spearheaded real-time streaming analytics engine processing 4M+ daily events."
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Zustand", "GraphQL", "WebSockets"]
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Full Stack Engineer",
    organization: "Apex Cloud Solutions",
    period: "2023 - 2024",
    location: "Kampong Thom, Cambodia",
    description: "Developed cloud management infrastructure tools, REST/GraphQL microservices, and mobile applications.",
    achievements: [
      "Engineered Next.js cloud monitoring dashboard handling 100K+ concurrent users.",
      "Reduced cloud infrastructure costs by 30% through Docker containerization and serverless optimization."
    ],
    technologies: ["Next.js", "Node.js", "Spring Boot", "PostgreSQL", "AWS", "Docker", "Flutter"]
  },
  {
    id: "edu-1",
    type: "education",
    title: "B.S. in Computer Science & Software Engineering",
    organization: "Heng Samrin Thbongkhmum University (HSTU)",
    period: "2020 - 2024",
    location: "Phnom Penh, Cambodia",
    description: "Graduated with High Honors. Specialized in Distributed Systems, Software Engineering, and Web Development.",
    achievements: [
      "Dean's Honor List (All Semesters)",
      "President of Web Developers Student Society",
      "First Place in National Hackathon 2023"
    ]
  }
];

export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Nova AI Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content: "Sak Ousa is an absolute wizard when it comes to frontend architecture and UI polish. He transformed our AI platform into a lightning-fast, beautiful experience that our users rave about every single day.",
    rating: 5
  },
  {
    id: "test-2",
    name: "David Chen",
    role: "CTO & Co-Founder",
    company: "LinearFlow Inc",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    content: "Working with Sak Ousa was the best decision we made for our SaaS launcher. His mastery of React 19, TypeScript, and Tailwind CSS delivered our MVP 3 weeks ahead of schedule with zero tech debt.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Head of Design",
    company: "Apex Mobile",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    content: "Sak Ousa bridges the gap between design and engineering like no one else. He took our complex Figma designs and brought them to life with micro-interactions, accessibility, and 60 FPS animations.",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Mastering React 19: Server Components, Actions, and Modern Patterns",
    slug: "mastering-react-19",
    summary: "A deep dive into React 19's newest capabilities, compiler optimizations, useActionState, and performance gains for production apps.",
    content: `React 19 brings some of the most exciting architectural shifts to modern frontend web development. In this comprehensive guide, we explore how React Server Components (RSC) and Actions change how we manage state and data fetching...`,
    category: "React / Frontend",
    readTime: "6 min read",
    date: "July 2026",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    tags: ["React 19", "TypeScript", "Performance", "Frontend"]
  },
  {
    id: "blog-2",
    title: "Building Glassmorphic UIs with Tailwind CSS v4 & Framer Motion",
    slug: "glassmorphic-uis-tailwind-v4",
    summary: "Learn how to build sleek Apple & Vercel inspired interfaces using CSS backdrop blur filters, custom design tokens, and smooth physics-based gestures.",
    content: `Glassmorphism continues to dominate high-end modern UI design. With Tailwind CSS v4's new CSS variable engine and Framer Motion spring physics, creating ultra-responsive frosted glass cards has never been cleaner...`,
    category: "UI/UX & CSS",
    readTime: "5 min read",
    date: "June 2026",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["Tailwind CSS", "Framer Motion", "UI Design", "Glassmorphism"]
  },
  {
    id: "blog-3",
    title: "Architecting Generative AI Applications with LangChain & Vector DBs",
    slug: "architecting-ai-apps-langchain",
    summary: "A step-by-step architectural breakdown for serving low-latency LLM stream responses with hybrid search in Pinecone.",
    content: `Building production AI applications requires much more than simply calling OpenAI API endpoints. In this article, we outline proper prompt caching, streaming chunks over WebSockets, and indexing documents into Pinecone...`,
    category: "AI & Engineering",
    readTime: "8 min read",
    date: "May 2026",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tags: ["AI", "OpenAI", "Node.js", "Vector DB"]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "price-starter",
    name: "Starter MVP",
    price: "$2,999",
    period: "per project",
    description: "Ideal for early-stage startups needing a sleek landing page or high-converting product MVP.",
    features: [
      "Custom Single Page or 3-Page Website",
      "React 19 + Vite / Next.js Setup",
      "Tailwind CSS Glassmorphism Design",
      "Mobile Responsive & Dark Mode",
      "Basic SEO Setup & Contact Form",
      "2 Weeks Delivery & Support"
    ],
    ctaText: "Choose Starter"
  },
  {
    id: "price-pro",
    name: "Professional Product",
    price: "$5,999",
    period: "per project",
    description: "Full-stack SaaS product architecture with backend APIs, database, and authentication.",
    features: [
      "Complete Full-Stack Application",
      "React 19 + TypeScript + Node.js / Spring / Laravel",
      "Database & Authentication (PostgreSQL/MySQL)",
      "Custom Dashboard & Interactive Charts",
      "100 Lighthouse Performance & Accessibility",
      "AI API Integration (OpenAI / Claude)",
      "4 Weeks Delivery & 30 Days Support"
    ],
    popular: true,
    ctaText: "Start Pro Project"
  },
  {
    id: "price-enterprise",
    name: "Enterprise Architecture",
    price: "$11,999+",
    period: "per project",
    description: "Dedicated full-stack engineering, complex cloud architecture, design systems, & team lead support.",
    features: [
      "Enterprise Micro-Frontend Architecture",
      "Custom Design System & Figma Kit",
      "Mobile App (Flutter / React Native)",
      "Cloud Infra (AWS/Kubernetes & Docker)",
      "Security Audit & Automated CI/CD",
      "Dedicated Slack Support & Maintenance"
    ],
    ctaText: "Contact for Enterprise"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Development",
    question: "What is your primary tech stack for building web & mobile applications?",
    answer: "I specialize in modern development using React 19, TypeScript, Tailwind CSS v4, Next.js, Spring Boot, Laravel, Node.js, Flutter, and MySQL/PostgreSQL."
  },
  {
    id: "faq-2",
    category: "Freelance",
    question: "What is your typical project timeline and process?",
    answer: "Small MVP projects typically take 2-3 weeks, while comprehensive full-stack SaaS applications range from 4 to 8 weeks. I follow an agile process with weekly interactive demo builds and continuous communication."
  },
  {
    id: "faq-3",
    category: "Tech Stack",
    question: "Do you guarantee 100 Lighthouse performance scores and WCAG accessibility?",
    answer: "Yes! Every web project is built with semantic HTML5, aria labels, optimized assets, dynamic code splitting, and strict contrast ratios to ensure 100 scores across Performance, Accessibility, Best Practices, and SEO."
  },
  {
    id: "faq-4",
    category: "General",
    question: "Are you available for full-time senior roles or contract work?",
    answer: "Yes, I am open to select Senior/Lead Full Stack Architect roles, technical consultancy, and high-impact freelance projects worldwide."
  }
];
