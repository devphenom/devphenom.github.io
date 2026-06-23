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
    detail: "Founding engineer, building the product end to end.",
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
