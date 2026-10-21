export const site = {
  name: "Aldri Terrado",
  role: "Full-stack Engineer",
  location: "Singapore",
  timezone: "GMT+8",
  email: "aldriterrado30@gmail.com",
  phone: "+65 8938 8219",
  origin: "https://aldri-terrado.vercel.app",
  // DRAFT copy
  description:
    "Full-stack engineer in Singapore building the internal systems a business runs on, and the infrastructure under them.",
  // Document metadata shown in the DocHeader strip and footer.
  doc: {
    id: "AT/SYS-01",
    rev: "2026.10",
  },
  hero: {
    // DRAFT copy: one entry per visual line of the headline.
    lines: [
      "I build the internal systems",
      "a business runs on —",
      "and the infrastructure under them.",
    ],
    // DRAFT copy
    abstract:
      "Full-stack engineer working in React, TypeScript and Postgres. I turn spreadsheet-and-email workflows into systems people rely on every day, and because I also run the identity, network and storage they sit on, I design for the environment they actually live in.",
  },
  titleBlock: [
    { label: "Name", value: "Aldri Terrado" },
    { label: "Role", value: "Full-stack Engineer" },
    { label: "Base", value: "Singapore · GMT+8" },
    { label: "Focus", value: "Internal platforms, workflow systems" },
    { label: "Stack", value: "React · TypeScript · Node.js · PostgreSQL" },
    { label: "Status", value: "Open to software roles", note: 1 },
  ],
  footnotes: [{ n: 1, text: "Remote, or on-site in Singapore." }],
  intros: {
    // DRAFT copy
    systems:
      "Each system started as a spreadsheet, an inbox, or a shared folder. Every one is drawn as its architecture, because that is where the decisions are.",
    log: "Seven years across infrastructure, enterprise delivery and internal product work.",
    spec: "What I build with, and what I am learning next.",
  },
  exploring: {
    title: "AI Engineering",
    body: "Strengthening engineering fundamentals first, then bringing AI into real products where it earns its place.",
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
  contact: {
    // DRAFT copy
    headline: "Have a system that needs building?",
    body: "A role, a product, or a workflow that has outgrown its spreadsheet. Email reaches me fastest.",
    regarding: "Software and full-stack engineering roles",
    availability: "Available now · remote or Singapore",
  },
  // TODO: replace with your public LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/aldriterrado",
  github: "https://github.com/aldriterrado",
  // TODO: add a resume PDF to /public and update this path
  resume: "/resume.pdf",
} as const

export const navLinks = [
  { n: "01", label: "Systems", href: "/projects" },
  { n: "02", label: "Log", href: "/#log" },
  { n: "03", label: "Spec", href: "/#spec" },
  { n: "04", label: "Contact", href: "/#contact" },
] as const
