export type Role = {
  id: string
  range: string
  title: string
  company: string
  current?: boolean
  summary: string
  highlights: string[]
}

export type CapabilityGroup = {
  id: string
  title: string
  focus: string
  stack: string[]
}

export type Credential = {
  title: string
  issuer: string
  year: string
  href: string
}

export const roles: Role[] = [
  {
    id: "sec",
    range: "2024 — Present",
    title: "IT Support Engineer",
    company: "Singapore Engineering & Construction Pte Ltd",
    current: true,
    summary:
      "Supporting enterprise IT operations while designing and developing internal systems that improve business workflows.",
    highlights: [
      "Designed and built internal systems that replaced manual, spreadsheet-driven workflows",
      "Own end-user support and core infrastructure for the whole company",
      "Standardised asset tracking and procurement across the equipment lifecycle",
    ],
  },
  {
    id: "accenture",
    range: "2021 — 2024",
    title: "Associate Software Engineer",
    company: "Accenture in the Philippines",
    summary:
      "Delivered software for enterprise clients, working across application support, development, and delivery of production systems.",
    highlights: [
      "Shipped and supported production features for enterprise clients",
      "Handled incidents and change requests as the link between client stakeholders and engineering",
      "Worked the full delivery cycle, from requirement clarification through release support",
    ],
  },
  {
    id: "lipa",
    range: "2019 — 2021",
    title: "IT Staff",
    company: "City Government of Lipa",
    summary:
      "Supported municipal IT operations, including end-user support, hardware lifecycle, and day-to-day system administration.",
    highlights: [
      "Ran end-user support and hardware lifecycle for municipal offices",
      "Kept networks and systems available for daily government operations",
    ],
  },
]

export const capabilities: CapabilityGroup[] = [
  {
    id: "product",
    title: "Software & Internal Tools",
    focus:
      "I enjoy building tools that make everyday work a little simpler — from interfaces to the systems behind them.",
    stack: ["React", "TypeScript", "Node.js", "Supabase", "PostgreSQL"],
  },
  {
    id: "infrastructure",
    title: "IT & Infrastructure",
    focus:
      "I work with the systems that keep people connected and productive — accounts, networks, storage, devices, and access.",
    stack: [
      "Microsoft 365",
      "Active Directory",
      "Networking",
      "Synology",
      "Fortinet",
    ],
  },
  {
    id: "systems",
    title: "Systems & Automation",
    focus:
      "A lot of what I build starts with understanding how people work, finding repetitive steps, and seeing where software or automation can help.",
    stack: [
      "System Architecture",
      "Internal Tools",
      "Workflow Design",
      "UI/UX",
      "Automation",
      "IT Operations",
    ],
  },
]

export const credentials: Credential[] = [
  {
    title: "Programming with JavaScript",
    issuer: "Meta · Coursera",
    year: "2025",
    href: "https://coursera.org/share/ae83984ff3f12fab94c8504a143c3a6a",
  },
  {
    title: "Frontend Development",
    issuer: "Meta · Coursera",
    year: "2025",
    href: "https://coursera.org/share/3c8cfef20c5bdb8c764b71d935f8c305",
  },
  {
    title: "Software Engineering",
    issuer: "IBM · Coursera",
    year: "2025",
    href: "https://coursera.org/share/677977416c78f6ed4ff0207230554a35",
  },
]
