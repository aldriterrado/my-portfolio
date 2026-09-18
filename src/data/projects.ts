export type CaseStudySection = {
  title: string
  body: string[]
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  summary: string
  role: string
  platform: string
  stack: string[]
  image: string | null
  imageHint: string
  imageCaption?: string
  year: string
  kind: string
  monogram: string
  accent: string
  featured: boolean
  caseStudy: {
    summary: string
    sections: CaseStudySection[]
  }
}

export const projects: Project[] = [
  {
    slug: "assetflow",
    title: "AssetFlow",
    subtitle: "IT Asset & Operations Management Platform",
    summary:
      "A centralized platform for managing hardware, software, services, assignments, requisitions, purchases, audits and lifecycle information across the business.",
    role: "Product Design, Full-stack Development, System Architecture",
    platform: "Internal Enterprise System",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    image: null,
    imageHint: "assetflow.png",
    year: "2025",
    kind: "Internal Platform",
    monogram: "AF",
    accent: "#5b8cff",
    featured: true,
    caseStudy: {
      summary:
        "AssetFlow is an internal operations platform that replaces fragmented spreadsheets and ticket threads with a single system of record for IT assets and related workflows.",
      sections: [
        {
          title: "Overview",
          body: [
            "IT operations depended on disconnected records: hardware lists in spreadsheets, software licenses in email, and purchase history buried in shared drives. AssetFlow was designed as one place to track assets, assignments, requisitions and audits.",
            "The goal was not a generic inventory app. It had to reflect how a real operations team works — from onboarding a laptop to closing a purchase and reviewing an audit.",
          ],
        },
        {
          title: "Problem",
          body: [
            "Asset data lived in too many places. Hardware ownership, software entitlements, service contracts and request history were maintained separately, so answering simple questions took too long.",
            "Procurement and assignment were also informal. Requests moved through chat, approvals were hard to reconstruct, and lifecycle events such as transfers or disposal were rarely recorded consistently.",
          ],
        },
        {
          title: "Solution",
          body: [
            "AssetFlow centralizes hardware, software, services, assignments, requisitions, purchases, audits and operational IT data in one application.",
            "Users can request equipment, review ownership, track purchases and inspect lifecycle history without leaving the system. The interface is structured around operational tasks rather than database tables.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "The frontend is a React and TypeScript application. Supabase provides authentication, Postgres storage and row-level access for operational data.",
            "The data model treats assets, people, requests and purchases as related records rather than isolated lists, so assignment history and procurement context stay attached to the asset.",
          ],
        },
        {
          title: "Key Features",
          body: [
            "Asset registry for hardware, software and services, with assignment and ownership history.",
            "Requisition and purchase workflows that keep request, approval and receipt in the same record.",
            "Audit and lifecycle views that show what changed, when, and who was responsible.",
          ],
        },
        {
          title: "Design Decisions",
          body: [
            "The product is built around operations, not a technology demo. Screens emphasize search, status and next action over decorative dashboard widgets.",
            "Metadata such as stack and integrations stays secondary. The primary information is the asset, the person, and the workflow that connects them.",
          ],
        },
        {
          title: "Challenges",
          body: [
            "The hardest part was modeling messy operational reality: one person can hold many assets, one purchase can cover several items, and audits need a reliable snapshot without freezing day-to-day work.",
            "Access also had to stay practical. Operations staff need enough visibility to work, without exposing procurement or assignment history more broadly than necessary.",
          ],
        },
        {
          title: "Outcome",
          body: [
            "AssetFlow became the working system for IT asset and operations data, reducing the need to reconstruct ownership or purchase history from email and spreadsheets.",
            "It also established a pattern for later internal tools: start from the operational problem, design the workflow, then implement the smallest reliable system that supports it.",
          ],
        },
      ],
    },
  },
  {
    slug: "training-management",
    title: "BBR TrainLog",
    subtitle:
      "Employee training, qualifications, and study bonds in one connected system",
    summary:
      "A connected system for employee training across BBR organizations, linking registrations, schedules, costs, credentials, renewals, and study bonds.",
    role: "Full-stack Development, Product Design",
    platform: "Internal Enterprise Web Application",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Node.js",
    ],
    image: null,
    imageHint: "bbr-trainlog.png",
    imageCaption: "BBR TrainLog — employee training and qualification management.",
    year: "2025",
    kind: "Internal Platform",
    monogram: "TL",
    accent: "#6ee7b7",
    featured: true,
    caseStudy: {
      summary:
        "BBR TrainLog centralizes employee training across BBR organizations. Registrations, schedules, costs, credentials, renewals, and study bonds stay connected, so training and HR administrators can see activity, qualification validity, and outstanding work in one place.",
      sections: [
        {
          title: "Overview",
          body: [
            "BBR TrainLog brings training administration into one structured workflow, from the first registration and schedule through credential tracking and renewal.",
            "It is built for training, HR, and system administrators, connecting employee records, training costs, supporting documents, and study-bond commitments across subsidiaries and departments.",
            "The aim is to make training information easier to maintain, verify, and act on — while keeping its history intact.",
          ],
        },
        {
          title: "Problem",
          body: [
            "Training information lived in spreadsheets, certificates, attendance records, and manual reminders. Routine questions — who holds a valid qualification, what needs renewal, how much training costs — meant checking several sources.",
            "Registrations, credentials, funding, and study bonds also had to stay related. Without those links, a completed course could be mistaken for a recorded qualification, and later changes to people or policies could hide the original context.",
            "The work was to create a reliable operational record without flattening the detail behind it.",
          ],
        },
        {
          title: "Solution",
          body: [
            "I designed BBR TrainLog around connected training records. Each registration brings together the employee, course, schedule, payment, funding, and study-bond decision through a guided workflow.",
            "Administrators record credentials against eligible completed training, attach certificates or cards, and monitor validity. Renewal registrations point back to earlier training without overwriting previous credentials.",
            "A shared calendar, Qualification Matrix, dashboards, and reports make those records usable for daily planning and review.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "BBR TrainLog is a React and TypeScript frontend on Supabase and PostgreSQL, organized as a modular monolith.",
            "Microsoft 365 sign-in establishes identity, and provisioned application roles control access. Database permissions, Row Level Security, and trusted PostgreSQL functions enforce authorization and business rules.",
            "A dedicated Node.js file gateway handles authenticated access to documents stored on Synology. Credential validity is calculated from recorded dates, while renewal progress is derived from linked registrations and credentials.",
          ],
        },
        {
          title: "Key Features",
          body: [
            "Guided training registration: resumable drafts that connect course details, schedules, payment, funding, and study-bond decisions.",
            "Credential and renewal tracking: manage certificates and cards, review expiry, and start linked renewal registrations.",
            "Qualification visibility: find employees with current recorded qualifications by course, category, subsidiary, or department.",
            "Training calendar: review scheduled training on a shared calendar, with access appropriate to each role.",
            "Study-bond management: handle individual or combined training commitments with versioned policies and retained agreement history.",
            "Historical record imports: validate Excel and CSV files, review missing information and possible duplicates, and keep import provenance.",
            "Dashboards and reporting: review training hours, costs, credential expiry, funding, and study bonds, with exports for further analysis.",
          ],
        },
        {
          title: "Design Decisions",
          body: [
            "The interface leads with what administrators need to act on: employee, course, status, dates, costs, and supporting documents. Guided forms break complex registrations into steps, while searchable tables and focused detail views support everyday review.",
            "Completing a course and issuing a credential remain separate. Completion makes training eligible for a company credential; an administrator still records the qualification and its validity.",
            "Historical context is kept through snapshots, controlled amendments, and versioned bond policies, so current employee details or later policy changes do not silently rewrite earlier records.",
          ],
        },
        {
          title: "Challenges",
          body: [
            "Historical data was often incomplete. Imports had to accept usable records while keeping missing dates, costs, and agreement terms visible. Unknown values stay unknown — they are not turned into zero amounts or assumed qualifications.",
            "Renewals introduced another distinction: an expired credential, an active renewal registration, and a newly issued credential are different states. Connecting them without overwriting earlier records required clear lifecycle rules.",
            "Study bonds added policy changes and shared commitments across multiple registrations. Versioned policies and retained membership history keep those relationships traceable.",
          ],
        },
        {
          title: "Outcome",
          body: [
            "BBR TrainLog is a central workspace for training administration — a place to manage recorded qualifications, costs, and commitments together.",
            "Administrators can follow a registration through its schedule, financial details, credential, and renewal history. Historical imports bring older records into that workflow while keeping gaps and uncertainties visible.",
            "The project also sharpened how I approach enterprise software: turning operational rules into usable workflows, enforcing the critical ones in the database, and preserving the context needed to understand past decisions.",
          ],
        },
      ],
    },
  },
  {
    slug: "billo",
    title: "Billo",
    subtitle: "E-Sign and document workflow",
    summary:
      "An internal workflow for preparing, circulating and tracking documents that need signature, so status is visible without chasing threads.",
    role: "Full-stack Development",
    platform: "Internal Workflow Tool",
    stack: ["React", "TypeScript", "Node.js"],
    image: null,
    imageHint: "billo.png",
    year: "2024",
    kind: "Internal Workflow",
    monogram: "BL",
    accent: "#f0abfc",
    featured: true,
    caseStudy: {
      summary:
        "Billo is a document workflow for routing files that need review and signature, with a clear record of who has the document and what happens next.",
      sections: [
        {
          title: "Overview",
          body: [
            "Document circulation was informal: files moved through email, and it was hard to tell whether a document was waiting, signed, or stalled.",
            "Billo turns that into a tracked workflow — prepare, send, review, sign and close — with status attached to the document rather than the inbox.",
          ],
        },
        {
          title: "Problem",
          body: [
            "People spent time asking where a document was. There was no shared view of outstanding signatures or a reliable history of what had already been approved.",
            "Versions were also easy to mix. A later file could circulate while an earlier copy was still being signed.",
          ],
        },
        {
          title: "Solution",
          body: [
            "Each document becomes a workflow item with a current owner, a status and a history. Recipients act on the current version rather than a forwarded attachment.",
            "The interface is intentionally small: list, status, action. The value is visibility, not a new editor.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "The client is React and TypeScript. A Node.js service stores document metadata, routing state and audit events.",
            "The file itself is treated as an attachment to the workflow, not the source of truth for status.",
          ],
        },
        {
          title: "Key Features",
          body: [
            "Document intake and routing to the people who need to review or sign.",
            "Status that shows whether a file is waiting, in progress or complete.",
            "A simple history so later questions about who signed, and when, can be answered from the record.",
          ],
        },
        {
          title: "Design Decisions",
          body: [
            "The product stays close to the operational question: where is this document, and what is blocking it.",
            "Features that would turn it into a general document platform were left out on purpose.",
          ],
        },
        {
          title: "Challenges",
          body: [
            "Routing exceptions are common. A document can bounce back, skip a step, or need a different signer than the original path assumed.",
            "The workflow had to remain understandable when those exceptions happen, instead of hiding them behind a rigid state machine.",
          ],
        },
        {
          title: "Outcome",
          body: [
            "Outstanding documents became visible as a queue rather than a set of inboxes.",
            "The project reinforced a useful constraint for internal tools: track the work item, not the file format.",
          ],
        },
      ],
    },
  },
  {
    slug: "file-gateway",
    title: "File Gateway",
    subtitle: "Controlled file intake and delivery",
    summary:
      "A gateway for receiving, organizing and handing off operational files without relying on unmanaged shared folders.",
    role: "System Architecture, Full-stack Development",
    platform: "Internal Infrastructure Tool",
    stack: ["React", "TypeScript", "Node.js"],
    image: null,
    imageHint: "file-gateway.png",
    year: "2024",
    kind: "Infrastructure Tool",
    monogram: "FG",
    accent: "#fbbf24",
    featured: false,
    caseStudy: {
      summary:
        "File Gateway is a controlled intake point for operational files. It gives teams a predictable place to drop, retrieve and hand off documents without unmanaged shared folders.",
      sections: [
        {
          title: "Overview",
          body: [
            "Files needed for operations often arrived through email or ad-hoc folders. File Gateway provides a single intake and delivery surface with clearer ownership.",
            "It is intentionally narrow: get the file in, identify it, and make it available to the right next step.",
          ],
        },
        {
          title: "Problem",
          body: [
            "Shared folders accumulated files without context. Names were inconsistent, ownership was unclear, and older copies stayed in circulation.",
            "There was also no obvious handoff. A file could sit unused because the next person did not know it had arrived.",
          ],
        },
        {
          title: "Solution",
          body: [
            "The gateway accepts files, attaches basic context, and presents them as items waiting for action rather than as a dump of filenames.",
            "Delivery is explicit. The next person retrieves a file because the system says it is ready, not because they happened to check a folder.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "A React client talks to a Node.js service that stores metadata and mediates access to the files themselves.",
            "The important record is the transfer: who sent it, when, and who is expected to take it next.",
          ],
        },
        {
          title: "Key Features",
          body: [
            "Controlled intake instead of an open shared folder.",
            "Metadata that keeps a file identifiable after it leaves the original sender.",
            "A delivery view for outstanding handoffs.",
          ],
        },
        {
          title: "Design Decisions",
          body: [
            "The interface stays close to a queue. Search and status matter more than a rich file browser.",
            "Storage is an implementation detail. The product is the transfer process.",
          ],
        },
        {
          title: "Challenges",
          body: [
            "File size, naming and unexpected formats are part of real operations. The system had to fail clearly rather than silently accept unusable uploads.",
            "Access needed to be limited without making the handoff process slower than email.",
          ],
        },
        {
          title: "Outcome",
          body: [
            "File movement became visible as work items instead of folder contents.",
            "The same intake pattern can support later internal systems that depend on a reliable file arriving before a workflow can continue.",
          ],
        },
      ],
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null
  next: Project | null
} {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) {
    return { previous: null, next: null }
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
