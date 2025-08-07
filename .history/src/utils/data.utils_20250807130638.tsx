import { NavLink, Project, Service, Skill } from "./types.utils";
import { Code, Github, Globe, Layout, Server, ShoppingCart } from "lucide-react";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiTypescript
} from "react-icons/si";

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];



export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={24} className="text-yellow-500" />,
    level: 90,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={24} className="text-blue-600" />,
    level: 88,
  },
  {
    name: "React",
    icon: <SiReact size={24} className="text-blue-300" />,
    level: 85,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={24} className="text-black" />,
    level: 80,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={24} className="text-black-600" />,
    level: 80,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs size={24} className="text-red-600" />,
    level: 78,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={24} className="text-green-600" />,
    level: 70,
  },
  {
    name: "RESTful APIs",
    icon: <Globe size={24} className="text-indigo-600" />,
    level: 80,
  },
  {
    name: "Git and GitHub",
    icon: <Github size={24} className="text-black" />,
    level: 80,
  },
];

export const projects: Project[] = [
  {
    title: "A Framework for Effective Writing",
    description: "A look into the structured process I use for all my work, this piece breaks down my framework for turning raw research and ideas into clear, effective writing.",
    image: "/assets/projects/proj1.png",
    link: "https://angrypacifist.substack.com/p/research-and-drafting?r=ot0to",
    // github: "https://github.com/",
    whatFor: "Personal",
    tech: ["Writing Process", "Content Strategy", "Research Skills", "Thought Leadership"],
  },
  {
    title: "Premier Learning Centre Official Website",
    description: "Designed and implemented a modern website for Premier Learning Centre, showcasing institutional information, academic programs, and school activities.",
    image: "/assets/projects/proj2.png",
    link: "https://angrypacifist.substack.com/p/advancing-electric-mobility?r=ot0to",
    tech: ["Next.js"],
    whatFor: "Bounty",
  }
];

export const services: Service[] = [
  {
    icon: <Layout size={48} className='text-indigo-600' />,
    title: "Custom Web Development",
    description: "Bespoke web solutions tailored to your specific business needs and requirements.",
    features: ["Custom Design", "Scalable Architecture", "Modern Frameworks", "SEO Optimized"],
    isPopular: false
  },
  {
    icon: <Globe size={48} className='text-indigo-600' />,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your site works perfectly on all devices and screen sizes.",
    features: ["Mobile-First", "Cross-Browser", "Touch Optimized", "Fast Loading"],
    isPopular: true
  },
  {
    icon: <Code size={48} className='text-indigo-600' />,
    title: "Single & Multi-Page Applications",
    description: "Modern SPAs and traditional multi-page websites built with the latest technologies.",
    features: ["React/Next.js", "Performance Optimized", "Interactive UI"],
    isPopular: false
  },
  {
    icon: <ShoppingCart size={48} className='text-indigo-600' />,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management.",
    features: ["Payment Integration", "Inventory System", "Admin Dashboard", "Analytics"],
    isPopular: false
  },
  {
    icon: <Server size={48} className='text-indigo-600' />,
    title: "Backend & API Integration",
    description: "Robust backend systems and seamless API integrations to power your web applications.",
    features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security"],
    isPopular: false
  }
];
