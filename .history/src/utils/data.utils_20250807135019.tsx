import { NavLink, Project, Service, Skill } from "./types.utils";
import {  Github, Globe, } from "lucide-react";
import { GiScrollQuill } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";


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
    title: "Nigeria's EV Revolution",
    description: "A deep-dive market analysis of Nigeria's EV and EV charging infrastructure.",
    image: "/assets/projects/proj2.png",
    link: "https://angrypacifist.substack.com/p/advancing-electric-mobility?r=ot0to",
    tech: ["Market Analysis", "Technology Analysis ", "Emerging Markets", "Nigeria"],
    whatFor: "Bounty",
  },
  {
    title: "An Introduction to Futarchy",
    description: "An exploration of advanced DAO governance models. This article breaks down the concept of Futarchy—a system where prediction markets determine policy.",
    image: "/assets/projects/proj3.png",
    link: "https://angrypacifist.substack.com/p/the-meta-dao-and-futarchy?r=ot0to",
    tech: ["Use Case Analysis", "Solana Ecosystem", "Product Strategy"],
    whatFor: "Hackathon",
  },
  {
    title: "Solana's Real-World Impact",
    description: "An analysis of how Solana's core technologies can be used to build practical solutions.",
    image: "/assets/projects/proj4.jpg",
    link: "https://angrypacifist.substack.com/p/real-world-solutions-with-solana?r=ot0to",
    tech: ["DAO Governance", "Futarchy", "Web3", "Blockchain"],
    whatFor: "Bounty",
  }
];

export const services: Service[] = [
  {
    icon: <GiScrollQuill size={48} className='text-indigo-600' />,
    title: "Content Strategy & Creation",
    description: "From in-depth articles to compelling brand narratives, I create content that educates, engages, and establishes authority.",
    features: ["Technical Writing & Explainers", "Long-Form Blog Posts & Articles", "Ghostwriting & Thought Leadership", "Content & Editorial Calendars"],
    isPopular: true
  },
  {
    icon: <RiUserCommunityFill size={48} className='text-indigo-600' />,
    title: "Community Building & Management",
    description: "I build, manage, and scale vibrant online communities from the ground up, turning passive users into active, loyal advocates.",
    features: ["Discord & Telegram Architecture", "Moderation Strategy & Team Training", "Engagement & Retention Campaigns", "Community Analytics & Health Reporting"],
    isPopular: false
  },
  {
    icon: <FaChartLine size={48} className='text-indigo-600' />,
    title: "Social Media & Growth Strategy",
    description: "A data-informed approach to social media that focuses on sustainable audience growth and meaningful interaction.",
    features: ["Multi-Platform Management (X, LinkedIn, etc.)", "Brand Voice & Tone Development", "Growth Campaigns & Audience Analysis", "Performance Tracking & Reporting"],
    isPopular: false
  },
  {
    icon: <FaGlobeAfrica size={48} className='text-indigo-600' />,
    title: "Partnerships & Ecosystem Outreach",
    description: "Forging strategic alliances that expand your reach, drive co-marketing success, and embed your project within the wider ecosystem.",
    features: ["Partner Identification & Vetting", "Outreach & Relationship Management|, "Admin Dashboard", "Analytics"],
    isPopular: false
  }
];
