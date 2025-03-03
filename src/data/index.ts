import { Project, Skill, Experience, Testimonial, SocialLink } from '../types';

export const mainTags = [
  {
    name: "Python",
    displayInHeader: true
  },
  {
    name: "HTML",
    displayInHeader: true
  },
  {
    name: "CSS",
    displayInHeader: true
  },
  {
    name: "JavaScript",
    displayInHeader: true
  },
  {
    name: "Machine Learning",
    displayInHeader: true
  },
  {
    name: "React.js",
    displayInHeader: true
  },
  {
    name: "Node.js",
    displayInHeader: true
  },
  {
    name: "Vue.js",
    displayInHeader: true
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Medical Prediction System",
    description: "A comprehensive web application that uses machine learning to predict breast cancer and diabetes risks. Built with Flask and Scikit-learn, this system provides accurate medical predictions using advanced algorithms while maintaining a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mainTags: ["Python", "HTML", "CSS", "Machine Learning"],
    tags: ["Python", "Flask", "HTML", "CSS", "Machine Learning", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/Priyanshuraj21030/Prediction-System-",
    link: "https://prediction-system.vercel.app",
    achievements: [
      "95%+ accuracy in breast cancer prediction using advanced machine learning algorithms",
      "Real-time prediction capabilities with comprehensive analysis of 30 parameters",
      "Dual prediction system for both breast cancer and diabetes risks",
      "User-friendly interface with detailed health insights"
    ]
  },
  {
    id: 2,
    title: "Certify - Certificate Generation Platform",
    description: "A robust certificate generation and verification platform built with PHP and HTML/CSS. The system features bulk certificate generation from CSV files, unique certificate verification through QR codes, and a streamlined process for event organizers to create and distribute certificates efficiently.",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mainTags: ["HTML", "CSS", "Node.js"],
    tags: ["HTML", "CSS", "PHP", "CSV Processing", "QR Code Generation", "Certificate Design"],
    github: "https://github.com/Priyanshuraj21030/Certify",
    link: "https://certify-platform.vercel.app",
    achievements: [
      "Implemented bulk certificate generation from CSV data files",
      "Integrated QR code-based certificate verification system",
      "Created responsive certificate templates with customizable designs",
      "Built secure verification system using PHP"
    ]
  },
  {
    id: 3,
    title: "GreenBin - Waste Management Platform",
    description: "A modern and efficient web application designed to tackle waste management challenges with technology and sustainability. The platform empowers users to manage waste effectively while promoting eco-friendly practices through an interactive Rhino Runner game that promotes recycling education and environmental awareness.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mainTags: ["HTML", "CSS", "Java"],
    tags: ["HTML", "JavaScript", "CSS", "Game Development", "Environmental Education", "Interactive Learning"],
    github: "https://github.com/Priyanshuraj21030/GreenBin",
    link: "https://greenbin-platform.vercel.app",
    achievements: [
      "Developed an interactive Rhino Runner game with dynamic day/night cycle",
      "Implemented progressive difficulty system and real-time score tracking",
      "Created comprehensive recycling education modules",
      "Built achievement system for environmental awareness"
    ]
  },
  {
    id: 4,
    title: "Real-Time Location Tracker",
    description: "A modern web application built with Vue.js and TypeScript that enables real-time location sharing between friends and family. Features include interactive maps, one-click location sharing, comprehensive privacy controls, and cross-platform compatibility with a beautiful responsive design.",
    image: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mainTags: ["Vue.js", "TypeScript", "HTML", "CSS"],
    tags: ["Vue.js", "TypeScript", "Tailwind CSS", "PrimeIcons", "Vue Router", "Geolocation API", "Web Share API"],
    github: "https://github.com/Priyanshuraj21030/Real-Time-Tracker",
    link: "https://real-time-tracker.vercel.app",
    achievements: [
      "Implemented real-time location tracking using Geolocation API",
      "Built privacy-focused sharing controls with secure link generation",
      "Created responsive UI with Tailwind CSS and PrimeIcons",
      "Developed cross-platform compatibility for all major browsers"
    ]
  },
  {
    id: 5,
    title: "Movie Database",
    description: "A React-based movie database application using TMDB API. Features include comprehensive movie listings, advanced search functionality, and detailed movie information with a modern, responsive interface.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
    mainTags: ["React.js", "HTML", "CSS", "Node.js"],
    tags: ["React.js", "TMDB API", "JavaScript", "CSS", "RESTful API", "Responsive Design"],
    github: "https://github.com/Priyanshuraj21030/Movie",
    link: "https://movie-database-app.vercel.app",
    achievements: [
      "Integrated TMDB API for real-time movie data",
      "Implemented advanced search and filtering functionality",
      "Created responsive design for optimal viewing across devices",
      "Built efficient state management for smooth user experience"
    ]
  },
  {
    id: 6,
    title: "Advanced Product Catalog",
    description: "A sophisticated product catalog system featuring dynamic filtering and real-time data updates. Built with TypeScript for robust type safety and enhanced development experience.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mainTags: ["TypeScript", "React.js", "HTML", "CSS"],
    tags: ["TypeScript", "React.js", "Dynamic Filtering", "Real-time Updates", "State Management"],
    github: "https://github.com/Priyanshuraj21030/Advanced-Product-Catalog",
    link: "https://advanced-product-catalog.vercel.app",
    achievements: [
      "Implemented dynamic filtering system with multiple parameters",
      "Built real-time data update mechanism",
      "Created efficient state management solution",
      "Developed type-safe codebase using TypeScript"
    ]
  },
  {
    id: 7,
    title: "Art Gallery",
    description: "A modern art gallery platform built with TypeScript, showcasing various artworks with an elegant and intuitive interface. Features include artwork categorization, artist profiles, and virtual exhibitions.",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mainTags: ["TypeScript", "React.js", "HTML", "CSS"],
    tags: ["TypeScript", "React.js", "Gallery System", "Virtual Exhibition", "Artist Profiles"],
    github: "https://github.com/Priyanshuraj21030/Art-gallery",
    link: "https://art-gallery-platform.vercel.app",
    achievements: [
      "Developed virtual exhibition system for artwork showcase",
      "Implemented artist profile management system",
      "Created responsive gallery layout with optimal image loading",
      "Built intuitive artwork categorization system"
    ]
  }
];

export const viewMoreProjectsLink = "https://github.com/Priyanshuraj21030?tab=repositories";

export const skills: Skill[] = [
  {
    name: "HTML/CSS",
    level: 90,
  },
  {
    name: "React.js",
    level: 90,
  },
  {
    name: "TypeScript",
    level: 85,
  },
  {
    name: "Next.js",
    level: 85,
  },
  {
    name: "Python",
    level: 80,
  },
  {
    name: "Node.js",
    level: 85,
  },
  {
    name: "Firebase",
    level: 80,
  },
  {
    name: "GitHub",
    level: 85,
  },
  {
    name: "Tailwind CSS",
    level: 90,
  },
  {
    name: "Postman",
    level: 85,
  },
  {
    name: "AWS",
    level: 80,
  },
  {
    name: "MongoDB",
    level: 80,
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Testing & Data Intern",
    company: "PLYPicker",
    duration: "2022 - 2024",
    location: "Mumbai",
    description: [
      "Enhanced data accuracy by 30% through weekly data updates and systematic validation",
      "Optimized dataset relevancy, leading to a 25% increase in user satisfaction and a reduction in data-related queries",
      "Actively contributed to daily stand-ups and bi-weekly sprint reviews, streamlining agile workflows and boosting team productivity",
      "Developed automated testing procedures, reducing bug detection time by 40% and decreasing post-release issues by 60%",
      "Improved overall software quality, resulting in a 25% increase in customer satisfaction scores"
    ],
    technologies: ["HTML", "CSS", "Java", "Python", "Data Validation", "Testing Automation", "Agile Development", "Software Quality Assurance", "Workflow Optimization"]
  },
  {
    id: 2,
    role: "Core Member, PR Team",
    company: "GeeksforGeeks, VIT Bhopal",
    duration: "2023 - 2024",
    location: "VIT Bhopal",
    description: [
      "Organized and promoted technical events, boosting student participation by 40%",
      "Managed public relations and outreach, enhancing community engagement and brand visibility",
      "Collaborated with teams to execute workshops, hackathons, and coding challenges, driving skill development",
      "Designed and implemented marketing strategies, increasing event reach and awareness",
      "Strengthened team coordination and communication, ensuring smooth execution of initiatives"
    ],
    technologies: ["Event Management", "Public Relations", "Marketing Strategies", "Community Engagement", "Team Coordination"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "Tech Innovations Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    testimonial: "An exceptional developer who consistently delivers high-quality work. Their technical expertise and problem-solving skills have been invaluable to our team."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Digital Solutions Ltd.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    testimonial: "Working with them was a pleasure. They have a keen eye for detail and always go above and beyond to ensure the project's success."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CEO",
    company: "StartUp Ventures",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    testimonial: "Their ability to understand our business needs and translate them into technical solutions has been crucial for our growth. Highly recommended!"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Priyanshuraj21030",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/priyanshu-raj-280ba8220/",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:priyanshuraj21030@gmail.com",
    icon: "mail"
  }
];

export const personalInfo = {
  name: "Priyanshu Raj",
  role: "Full Stack Developer",
  bio: "Computer Science and Engineering student at VIT Bhopal, specializing in Cloud Computing. Passionate about building scalable web applications and finding bugs in different websites.",
  email: "priyanshuraj21030@gmail.com",
  location: "VIT Bhopal",
  phone: "+91 9770102110",
  education: {
    university: "Vellore Institute of Technology, VIT Bhopal",
    degree: "B. Tech in Computer Science and Engineering, Cloud Computing",
    duration: "September 2021– May, 2025",
    cgpa: "7.98/10"
  }
};

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "January 2024"
  },
  {
    name: "Developer Virtual Experience Program",
    issuer: "Accenture",
    date: "November 2023"
  }
];

export const achievements = [
  "Core member, PR Team: GeeksforGeeks, VIT Bhopal (February 2023– Present)",
  "Participation in E-Commerce & Tech Quiz of the Flipkart GRiD 5.0- Software Development Track (Level 1.1)"
];