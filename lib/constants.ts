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
  techLabel: "Tech Stack",
  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Motion",
    "Node.js",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
  ],
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
    detail: "Founding engineer, building the product from the ground up.",
    href: "https://pitchsync.ng",
  },
  cta: {
    title: "Have something worth building?",
    description:
      "I'm open to senior roles and selective collaborations. Let's ship it.",
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
      eyebrow: "Project",
      description:
        "A full-stack platform for booking and scheduling stadiums and pitches across Nigeria. It's a monorepo: marketing site, admin dashboard, and API.",
      tags: ["Next.js", "React", "Node.js"],
      live: "https://pitchsync.ng",
      repo: null,
      featured: true,
    },
    {
      name: "Marvin",
      image: "/projects/marvin.png",
      eyebrow: "Project",
      description:
        "An AI presentation builder that turns raw slide files into on-brand, investor-ready pitch decks. Behind it sits a parsing pipeline, a slide editor, and an export engine.",
      tags: ["Next.js", "React", "NestJS", "Prisma"],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Plantshaven",
      image: "/projects/plantshaven.png",
      eyebrow: "Project",
      description:
        "A mobile farming companion that gives farmers AI-powered crop support: image-led diagnosis, a multilingual agricultural knowledge base, and community learning. Built with React Native and Expo.",
      tags: ["React Native", "TypeScript", "Tailwind CSS"],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Telscare",
      image: "/projects/telscare.png",
      eyebrow: "Project",
      description:
        "A telemedicine platform connecting patients with providers and health services — hospitals, pharmacies, blood banks, and ambulances — across a patient mobile app and a provider dashboard.",
      tags: ["React Native", "Next.js", "TypeScript", "Tailwind CSS"],
      live: null,
      repo: null,
      featured: false,
    },
    {
      name: "Tenalve",
      image: "/projects/tenalve.png",
      eyebrow: "Project",
      description:
        "A multi-tenant sports platform for organizations and facilities — member management, bookings, and dashboards, each org on its own subdomain. Built on the Next.js App Router.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      live: "https://tenalve.com",
      repo: null,
      featured: false,
    },
    {
      name: "TicketSir",
      image: "/projects/ticketisr.png",
      eyebrow: "Project",
      description:
        "An event-ticketing platform where fans discover shows and buy tickets, with card checkout and an embeddable purchase widget powering the storefront and API.",
      tags: ["React", "Node.js"],
      live: "https://www.ticketsir.com",
      repo: null,
      featured: false,
    },
    {
      name: "Uri Creative",
      image: "/projects/uricreative.png",
      eyebrow: "Project",
      description:
        "A marketplace connecting creative talent — models, hosts, and actors — with brands and clients hiring for events and projects, with AI-powered social insights and growth tools.",
      tags: ["TypeScript", "React", "Next.js", "Motion"],
      live: "https://uricreative.com",
      repo: null,
      featured: false,
    },
    {
      name: "Verified Creators",
      image: "/projects/verifiedcreators.png",
      eyebrow: "Project",
      description:
        "A non-KYC, on-chain identity platform built on DeSo that lets web3 creators prove they're real — removing trust friction for investors backing their tokens and NFTs.",
      tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      live: "https://verifiedcreators.io",
      repo: null,
      featured: false,
    },
  ],
} as const;
