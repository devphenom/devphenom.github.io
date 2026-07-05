export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const socials = {
  github: "https://github.com/devphenom",
  linkedin: "https://linkedin.com/in/devphenom",
  twitter: "https://twitter.com/devphenom",
} as const;

export const RESUME_URL = "/resume.pdf";

export const profile = {
  name: "Abdulsamad Ali",
  handle: "devphenom",
  role: "Fullstack Engineer",
  company: "StrategyConnect",
} as const;

export const about = {
  eyebrow: "About",
  heading: "About Me",
  bio: [
    "I'm a frontend-heavy fullstack engineer based in Nigeria. Most of my time goes into building polished, fast interfaces for web and mobile: the small details people feel but rarely notice, like smooth transitions, thoughtful empty states, and layouts that just work.",
    "I'm very proficient across React, Next.js and React Native, and comfortable going the rest of the way down the stack with Node.js, NestJS, Prisma and PostgreSQL when a product needs it. That range lets me take an idea from a Figma frame to a shipped app on my own.",
  ],
  focus: ["Web UI", "Mobile apps", "Design systems"],
  oss: {
    label: "3D React Carousel",
    href: "https://github.com/devphenom/3d-react-carousel",
  },
  techLabel: "Technical Arsenal",
  techStack: ["TypeScript", "React", "Next.js", "React Native", "Motion", "Node.js", "NestJS", "Prisma", "PostgreSQL", "Tailwind CSS"],
  stats: [
    { value: "5+", label: "Years in production" },
    { value: "Web + Mobile", label: "Platforms shipped" },
    { value: "End to end", label: "Ownership I take" },
  ],
  location: {
    base: "Remote, worldwide",
    timezone: "Flexible across time zones",
  },
  current: {
    label: "Currently",
    line: "Building Pitchsync",
    detail: "Founding engineer, building the product end to end.",
    href: "https://pitchsync.ng",
  },
  cta: {
    title: "Have something worth building?",
    description: "I'm open to senior roles and selective collaborations. Let's ship it.",
    href: "#contact",
    label: "Get in touch",
  },
} as const;

export const projects = {
  heading: "Projects",
  items: [
    {
      name: "Pitchsync",
      image: "/projects/pitchsync.png",
      eyebrow: "Founding Engineer",
      description: "A platform that helps founders build and sync investor-ready pitches. I own engineering end to end, from the product UI down to the API and data layer.",
      tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
      live: "https://pitchsync.ng",
      repo: null,
      featured: true,
    },
    {
      name: "Marvin",
      image: "/projects/marvin.png",
      eyebrow: "Project",
      description: "TODO — add a short description for Marvin.",
      tags: [],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Plantshaven",
      image: "/projects/plantshaven.png",
      eyebrow: "Project",
      description: "TODO — add a short description for Plantshaven.",
      tags: [],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Telscare",
      image: "/projects/telscare.png",
      eyebrow: "Project",
      description: "TODO — add a short description for Telscare.",
      tags: [],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Marvin",
      image: "/projects/marvin.png",
      eyebrow: "Project",
      description: "TODO — add a short description for Marvin.",
      tags: [],
      live: null,
      repo: null,
      featured: false,
    },
    // {
    //   name: "Tenalve",
    //   image: "/projects/tenalve.png",
    //   eyebrow: "Project",
    //   description: "TODO — add a short description for Tenalve.",
    //   tags: [],
    //   live: null,
    //   repo: null,
    //   featured: false,
    // },
    {
      name: "Ticketisr",
      image: "/projects/ticketisr.png",
      eyebrow: "Project",
      description: "TODO — add a short description for Ticketisr.",
      tags: [],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Uri Creative",
      image: "/projects/uricreative.png",
      eyebrow: "Project",
      description: "TODO — add a short description for Uri Creative.",
      tags: [],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Verified Creators",
      image: "/projects/verifiedcreators.png",
      eyebrow: "Project",
      description: "TODO — add a short description for Verified Creators.",
      tags: [],
      live: null,
      repo: null,
      featured: false,
    },
  ],
} as const;
