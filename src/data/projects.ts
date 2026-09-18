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
    title: "Training Management System",
    subtitle: "Employee training, credentials and renewals",
    summary:
      "A system for registration, scheduling, qualification management, credential tracking, expiry and renewals — so training status is visible before it becomes a compliance problem.",
    role: "Full-stack Development, Product Design",
    platform: "Internal Enterprise System",
    stack: ["React", "TypeScript", "Node.js", "SQL Server"],
    image: null,
    imageHint: "training-management.png",
    year: "2024",
    kind: "Internal Platform",
    monogram: "TMS",
    accent: "#6ee7b7",
    featured: true,
    caseStudy: {
      summary:
        "The Training Management System tracks employee training from registration through qualification, expiry and renewal, giving operations a current view of who is qualified to work.",
      sections: [
        {
          title: "Overview",
          body: [
            "Training records were spread across attendance sheets, certificates and informal reminders. The system brings registration, scheduling, qualifications and renewals into one workflow.",
            "The product is used by operations and training staff who need to know who is current, who is expiring, and what still needs to be scheduled.",
          ],
        },
        {
          title: "Problem",
          body: [
            "Expiry dates were easy to miss. Credentials lived in files, and there was no reliable way to see upcoming renewals or confirm that a person was still qualified for a role.",
            "Registration and scheduling were also disconnected from the credential itself, so completing a course did not automatically update the qualification record.",
          ],
        },
        {
          title: "Solution",
          body: [
            "The system treats a credential as a living record: registration, attendance, qualification, expiry and renewal are stages of the same object.",
            "Staff can schedule training, track completion and see who needs to renew before the date becomes a problem.",
          ],
        },
        {
          title: "Architecture",
          body: [
            "A React and TypeScript client sits on a Node.js API with SQL Server as the source of truth for people, courses, sessions and credentials.",
            "Expiry and renewal logic is derived from stored dates rather than manual flags, which keeps the status view consistent as records change.",
          ],
        },
        {
          title: "Key Features",
          body: [
            "Employee registration and session scheduling for required training.",
            "Qualification records tied to completion, not just attendance.",
            "Expiry tracking and renewal visibility so upcoming lapses are visible in advance.",
          ],
        },
        {
          title: "Design Decisions",
          body: [
            "The interface prioritizes status and dates over charts. The useful question is whether someone is current, due, or overdue.",
            "Training is presented as an operational process, not a learning-management marketplace.",
          ],
        },
        {
          title: "Challenges",
          body: [
            "Historical records were incomplete. The system had to accept partial imports without pretending that missing dates were valid qualifications.",
            "Renewal rules also vary by course. The data model needed enough flexibility for different validity periods without becoming a rules engine.",
          ],
        },
        {
          title: "Outcome",
          body: [
            "Training status became queryable. Operations can see who is qualified and what is expiring, instead of reconstructing it from files.",
            "The work also sharpened how later systems handle time-based operational state — current, due, expired — as first-class information.",
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
