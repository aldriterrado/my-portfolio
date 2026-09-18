export const site = {
  name: "Aldri Terrado",
  role: "IT Systems Engineer",
  location: "Singapore",
  email: "aldriterrado30@gmail.com",
  phone: "+65 8938 8219",
  origin: "https://aldri-terrado.vercel.app",
  description:
    "IT Systems Engineer based in Singapore, building software, automation, internal tools, and reliable infrastructure.",
  headline: {
    lead: "I enjoy building things, solving problems",
    trail: "and learning along the way.",
  },
  supporting:
    "I spend my time exploring software, automation and IT systems — turning ideas and everyday problems into things that actually work.",
  exploring: {
    title: "AI Engineering",
    body: "I’m currently learning how AI fits into the software I already enjoy building — strengthening my engineering fundamentals first, then gradually exploring how AI can become part of real products.",
    track: [
      {
        title: "Software foundations",
        note: "Writing cleaner, maintainable software and strengthening the fundamentals.",
        active: true,
      },
      {
        title: "Backend & data",
        note: "APIs, databases, data modelling, and the systems behind applications.",
        active: true,
      },
      {
        title: "Applied AI",
        note: "Exploring retrieval, evaluation, agents, and practical AI features inside real products.",
        active: false,
      },
    ],
    builtOn: ["product", "systems"],
  },
  contact: {
    status: "Open to new opportunities",
    headline: "Have something interesting to build?",
    body: "A role, a project, or a workflow that needs untangling — I'm happy to talk it through. Email reaches me fastest.",
    note: "I'm open for remote work",
  },
  about: [
    "I'm an IT professional and software builder based in Singapore.",
    "My work sits between infrastructure and software: understanding operational problems, designing systems around them, and building tools that make those workflows simpler.",
  ],
  // TODO: replace with your public LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/aldriterrado",
  github: "https://github.com/aldriterrado",
  // TODO: add a resume PDF to /public and update this path
  resume: "/resume.pdf",
} as const

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
] as const
