export const site = {
  name: "Aldri Terrado",
  role: "IT Support Engineer",
  // DRAFT copy: where the career is heading, shown next to the role.
  direction: "Moving into software engineering",
  location: "Singapore",
  timezone: "Asia/Singapore",
  email: "aldriterrado30@gmail.com",
  phone: "+65 8938 8219",
  origin: "https://aldri-terrado.vercel.app",
  // DRAFT copy
  description:
    "IT support engineer in Singapore moving into software engineering, learning by building internal tools for problems I see at work.",
  hero: {
    first: "Aldri",
    last: "Terrado",
    // DRAFT copy: the accent word is set in italic serif.
    tagline: {
      before: "IT support engineer becoming a software engineer by",
      accent: "building",
      after: "real tools for the problems I see at work every day.",
    },
    availability: "Open to new full-time opportunities",
  },
  about: {
    // DRAFT copy
    statement:
      "Most of my career has been in IT support — keeping accounts, networks, devices and storage running for the people who depend on them. Now I'm moving into software engineering, and I learn by building: every project here started as a problem I kept running into at work.",
    stack: "React, TypeScript, Node.js and PostgreSQL",
    years: "7+",
    stats: {
      years: "Years in IT support and infrastructure",
      projects: "Internal tools built while learning",
      roles: "Roles across government, consulting and enterprise",
    },
  },
  // DRAFT copy: section headlines; the accent word is set in italic serif.
  headings: {
    work: { before: "Built on the", accent: "job", after: "" },
    experience: { before: "Where I've", accent: "worked", after: "" },
    capabilities: { before: "Tools of the", accent: "trade", after: "" },
  },
  intros: {
    // DRAFT copy
    work: "Each one started as a spreadsheet, an inbox or a shared folder at work. I built them to fix real problems, and to learn how software is made.",
    experience:
      "Seven years in IT, mostly support and infrastructure, with a stint in enterprise software delivery. Now pointed at software engineering.",
    capabilities: "What I support today, what I build with, and what I'm learning next.",
  },
  marquee: [
    "IT support",
    "Microsoft 365",
    "Active Directory",
    "Networking",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Always learning",
  ],
  exploring: {
    // DRAFT copy
    title: "Software Engineering",
    body: "Moving from IT support into software: strengthening fundamentals first, then backend and data, then bringing AI into real products where it earns its place.",
    track: [
      {
        title: "Software foundations",
        note: "Cleaner, maintainable software and stronger fundamentals.",
        active: true,
      },
      {
        title: "Backend & data",
        note: "APIs, databases, data modelling, and the systems behind applications.",
        active: true,
      },
      {
        title: "Applied AI",
        note: "Retrieval, evaluation, agents, and practical AI features inside real products.",
        active: false,
      },
    ],
  },
  // The owner holds an S Pass: offer full-time employment only. Don't add copy
  // that invites freelance, side, contract or remote work for others.
  contact: {
    // DRAFT copy: the accent word is set in italic serif.
    headline: { before: "Open to the", accent: "next", after: "opportunity." },
    body: "I'm looking for a full-time junior software or full-stack role in Singapore, where I can keep building and learning and bring years of IT support with me. Email reaches me fastest.",
    availability: "Open to full-time roles · Singapore",
    note: "Full-time employment only. I'm not taking freelance or side work.",
    cta: "Get in touch",
  },
  // TODO: replace with your public LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/aldriterrado",
  github: "https://github.com/aldriterrado",
  // TODO: add a resume PDF to /public and update this path
  resume: "/resume.pdf",
} as const

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
] as const
