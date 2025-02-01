import projectGroupieImage from "../../public/images/groupie.png";
import projectAfyachainImage from "../../public/images/afyachain.png";
import projectKintaraaImage from "../../public/images/kintaraa.png";
import projectHealthnetaiImage from "../../public/images/healthnetai.png";
import { StaticImageData } from 'next/image';

// Define type interfaces for better type safety and documentation
interface HeroData {
  title: string;
  subtitle: string;
  description: string[];
  btnText: string;
}

interface AboutData {
  title: string;
  content: string[];
}

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

interface SkillSection {
  title: string;
  skills: SkillCategory[];
}

interface Project {
  name: string;
  image: StaticImageData;
  technologies: string[];
  description: string;
  demoUrl?: string;
  codeUrl?: string;
}

// Export constants with proper typing
export const heroData: HeroData = {
  title: "Hi, I'm Vincent Omondi",
  subtitle: "Full Stack Developer",
  description: [
    "From start to finish, I handle the complete development, deployment, and maintenance of your dApp.",
    "Want to know more?"
  ],
  btnText: "See My Projects",
};

export const aboutData: AboutData = {
  title: "About Me",
  content: [
    "I'm a Full Stack Developer specializing in blockchain technology, building secure, scalable, and user-friendly decentralized applications. My expertise covers the entire development lifecycle, from concept to deployment and maintenance.",
    "As a Software Development Apprentice at Zone01 Kisumu, I’ve advanced my skills in modern web and blockchain technologies, solving complex challenges to deliver innovative solutions. I’m passionate about continuous learning and exploring new tools to push the boundaries of decentralized systems."
  ]
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Backend",
      skills: [
        {
          category: "Languages",
          items: [
            { name: "Motoko", icon: "/images/motoko.svg" },
            { name: "Go", icon: "devicon:go" },
            { name: "Rust", icon: "simple-icons:rust" },
          ]
        },
        {
          category: "Frameworks",
          items: [
            { name: "Django", icon: "logos:django-icon" },
            // { name: "Rails", icon: "devicon:rails" },
          ]
        },
        {
          category: "Database Management",
          items: [
            // { name: "MySQL", icon: "logos:mysql" },
            { name: "Canister Storage", icon: "mdi:database" }, // Example icon
          ]
        },
        // {
        //   category: "APIs",
        //   items: [
        //     { name: "REST", icon: "simple-icons:fastapi" },
        //   ]
        // }
      ]
    },
    {
      title: "Frontend",
      skills: [
        {
          category: "Languages",
          items: [
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            // { name: "HTML", icon: "logos:html-5" },
          ]
        },
        {
          category: "Frameworks/Libraries",
          items: [
            // { name: "React", icon: "logos:react" },
            { name: "Next", icon: "simple-icons:nextdotjs" },
          ]
        },
        {
          category: "Styling",
          items: [
            { name: "CSS", icon: "logos:css-3" },
            { name: "SCSS", icon: "logos:sass" },
          ]
        },
        // {
        //   category: "Build Tools",
        //   items: [
        //     { name: "Webpack", icon: "logos:webpack" },
        //   ]
        // }
      ]
    },
    {
      title: "Miscellaneous",
      skills: [
        {
          category: "Version Control",
          items: [
            { name: "Git", icon: "logos:git-icon" },
            { name: "GitHub", icon: "simple-icons:github" },
            // { name: "GitLab", icon: "logos:gitlab" },
          ]
        },
        {
          category: "Testing",
          items: [
            { name: "Jest", icon: "logos:jest" },
          ]
        },
        {
          category: "CI/CD",
          items: [
            { name: "Docker", icon: "logos:docker-icon" },
          ]
        },
        // {
        //   category: "Cloud",
        //   items: [
        //     { name: "AWS", icon: "logos:aws" },
        //   ]
        // }
      ]
    }
  ]
};

export const contactData = {
  title: "Ready To",
  cards: [
    {
      title: "Offer a job opportunity?",
      text: "Let's cut to the chase: I build clean code and bring ideas to life on the web. If you're looking for a developer ready to tackle exciting, brain-twisting projects, let's connect and see if we're a match. I'm all ears—well, pixels.",
    },
    {
      title: "Connect over cubes?",
      text: "Networking's like solving a complex Rubik's Cube—sometimes frustrating, but always worth it when it clicks! If you're in the dev world (or share a love for puzzles and board games), reach out. Let's chat, connect, and see if we can turn a few gears together.",
    },
    {
      title: "Build something cool?",
      text: "If you have a bold vision for the next big web app or platform, I'm game. From sleek UIs to seamless functionality, I'm all about creating something that both works and wows. Let's team up and build something worth bragging about!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:vincentomondi1002@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/Vincent-Omondi",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vincent-omondi/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf",
    },
  ],
};

// Projects data with proper typing and validation
export const ProjectsData: { title: string; Projects: Project[] } = {
  title: "Projects",
  Projects: [
    {
      name: "Kintaraa",
      image: projectKintaraaImage,
      technologies: [
        "Rust",
        "React",
      ],
      description:
        "Kintaraa is a blockchain-powered platform that empowers victims of gender-based violence by enabling secure, anonymous reporting and providing holistic support through medical, legal, and psychological services.",
      demoUrl: "https://24dyw-2yaaa-aaaam-adxmq-cai.icp0.io/",
      codeUrl: "https://github.com/Kintaraa/kintaraa.git",
    },
    {
      name: "AfyaChain",
      image: projectAfyachainImage,
      technologies: [
        "Go",
        "HTML",
        "CSS",
        "Javascript",
      ],
      description:
        "AfyaChain is a blockchain-based Electronic Medical Record (EMR) and Health Management Information System (HMIS) designed to address the critical inefficiencies in Kenya's healthcare system.",
      demoUrl: "https://afyachain.co.ke/",
      codeUrl: "",
    },
    {
      name: "HealthNET AI",
      image: projectHealthnetaiImage,
      technologies: [
        "Go",
        "React",
        "DeepSeek AI",

      ],
      description:
        "HealthNET AI is an innovative platform leveraging AI and decentralized technology to provide reliable network connectivity, enhance healthcare efficiency, and ensure data security for underserved health clinics",
        demoUrl: "https://healthnetai.vercel.app/",
        codeUrl: "https://github.com/Evarest-ke/healthnetai.git",
    },
    // {
    //   name: "Groupie Tracker",
    //   image: projectGroupieImage,
    //   technologies: [
    //     "Go",
    //     "Javascript",
    //     "HTML",
    //     "CSS",
    //     "Dockerfile",
    //   ],
    //   description:
    //     "Consists of receiving a given API and manipulating the data contained in it to create a site and display the information about music artists, their concert locations, and related dates.",
    //   codeUrl: "https://github.com/Vincent-Omondi/groupie-tracker.git",
    // },
  ],
};