// Architecture diagrams for each project, drawn by components/ui/SystemDiagram.
// Nodes sit on a grid (col, row). Keep node labels under ~20 characters,
// sublabels under ~23 and edge labels under ~16 so they fit their cells.

export type DiagramNodeKind =
  | "actor"
  | "client"
  | "service"
  | "db"
  | "storage"
  | "identity"
  | "external"

/** Short mono tags printed on each node and in figure legends. */
export const kindTags: Record<DiagramNodeKind, string> = {
  actor: "USR",
  client: "WEB",
  service: "SVC",
  db: "DB",
  storage: "STO",
  identity: "IDP",
  external: "EXT",
}

export type DiagramNode = {
  id: string
  label: string
  sub?: string
  kind: DiagramNodeKind
  col: number
  row: number
}

export type DiagramEdge = {
  from: string
  to: string
  label?: string
  /** auto: straight when aligned, otherwise a z-bend through the gutter. */
  route?: "auto" | "hv" | "vh"
  /** Column boundary for the vertical leg of a z-route (1 = gutter before col 1). */
  bendX?: number
  /** Two-way connection. */
  both?: boolean
}

export type DiagramGroup = {
  id: string
  label: string
  cols: [number, number]
  rows: [number, number]
}

export type SystemDiagram = {
  title: string
  summary: string
  cols: number
  rows: number
  nodes: DiagramNode[]
  edges: DiagramEdge[]
  groups?: DiagramGroup[]
  notes?: string[]
}

export const diagrams = {
  assetflow: {
    title: "AssetFlow system architecture",
    summary:
      "A React client signs in through Supabase Auth and reads and writes related asset records in PostgreSQL through row-level security.",
    cols: 4,
    rows: 2,
    nodes: [
      { id: "ops", label: "IT operations", sub: "staff · requesters", kind: "actor", col: 0, row: 1 },
      { id: "app", label: "AssetFlow web", sub: "React · TypeScript", kind: "client", col: 1, row: 1 },
      { id: "auth", label: "Supabase Auth", sub: "sessions · JWT", kind: "identity", col: 2, row: 0 },
      { id: "api", label: "Supabase API", sub: "data access", kind: "service", col: 2, row: 1 },
      { id: "db", label: "PostgreSQL", sub: "assets · people · POs", kind: "db", col: 3, row: 1 },
    ],
    edges: [
      { from: "ops", to: "app", label: "operates" },
      { from: "app", to: "auth", label: "sign-in", route: "vh" },
      { from: "app", to: "api", label: "queries · JWT" },
      { from: "api", to: "db", label: "RLS-scoped SQL" },
    ],
    groups: [{ id: "sb", label: "SUPABASE", cols: [2, 3], rows: [0, 1] }],
    notes: [
      "Row-level security policies evaluate the signed-in identity on every query.",
      "Assets, people, requests and purchases are related records, so history stays attached to the asset.",
    ],
  },
  "training-management": {
    title: "BBR TrainLog system architecture",
    summary:
      "Microsoft 365 sign-in establishes identity, PostgreSQL enforces authorization with row-level security and trusted functions, and the File Gateway service brokers documents stored on a Synology NAS.",
    cols: 4,
    rows: 3,
    nodes: [
      { id: "admin", label: "Training / HR admin", sub: "per-role access", kind: "actor", col: 0, row: 1 },
      { id: "m365", label: "Microsoft 365", sub: "organisational sign-in", kind: "external", col: 1, row: 0 },
      { id: "app", label: "TrainLog web", sub: "React · TS · Tailwind", kind: "client", col: 1, row: 1 },
      { id: "auth", label: "Supabase Auth", sub: "app roles", kind: "identity", col: 2, row: 0 },
      { id: "api", label: "Supabase API", sub: "modular monolith", kind: "service", col: 2, row: 1 },
      { id: "db", label: "PostgreSQL", sub: "RLS · trusted functions", kind: "db", col: 3, row: 1 },
      { id: "gw", label: "File Gateway", sub: "Node.js", kind: "service", col: 2, row: 2 },
      { id: "nas", label: "Synology NAS", sub: "certificates · cards", kind: "storage", col: 3, row: 2 },
    ],
    edges: [
      { from: "admin", to: "app", label: "manages records" },
      { from: "app", to: "m365", label: "M365 sign-in" },
      { from: "m365", to: "auth", label: "identity" },
      { from: "app", to: "api", label: "queries · JWT" },
      { from: "api", to: "db", label: "RLS · RPC" },
      { from: "app", to: "gw", label: "documents", route: "vh" },
      { from: "gw", to: "nas", label: "authed R/W" },
    ],
    groups: [
      { id: "sb", label: "SUPABASE", cols: [2, 3], rows: [0, 1] },
      { id: "op", label: "ON-PREM", cols: [2, 3], rows: [2, 2] },
    ],
    notes: [
      "Credential validity is derived from recorded dates; renewal progress from linked registrations.",
      "The gateway is the same service documented in the File Gateway case study.",
    ],
  },
  "virtual-business-card": {
    title: "BBR Virtual Business Card system architecture",
    summary:
      "Three web experiences hosted on a Synology NAS running Apache share a Supabase backend. Approvals run through email links before an administrator activates a public card.",
    cols: 4,
    rows: 4,
    nodes: [
      { id: "emp", label: "Employee", sub: "by Employee ID", kind: "actor", col: 0, row: 0 },
      { id: "sys", label: "System admin", sub: "final activation", kind: "actor", col: 0, row: 1 },
      { id: "vis", label: "Visitor", sub: "link · QR code", kind: "actor", col: 0, row: 2 },
      { id: "appr", label: "Dept. approver", sub: "no admin account", kind: "actor", col: 0, row: 3 },
      { id: "req", label: "Request page", sub: "React · TypeScript", kind: "client", col: 1, row: 0 },
      { id: "adm", label: "Admin console", sub: "requests · cards", kind: "client", col: 1, row: 1 },
      { id: "card", label: "Public card", sub: "URL · QR · vCard", kind: "client", col: 1, row: 2 },
      { id: "sb", label: "Supabase", sub: "Auth · API · Storage", kind: "service", col: 2, row: 1 },
      { id: "db", label: "PostgreSQL", sub: "cards · requests · log", kind: "db", col: 3, row: 1 },
      { id: "mail", label: "Email", sub: "approve / reject links", kind: "external", col: 2, row: 3 },
    ],
    edges: [
      { from: "emp", to: "req", label: "submit / update" },
      { from: "sys", to: "adm", label: "review/activate" },
      { from: "vis", to: "card", label: "view · save" },
      { from: "req", to: "sb", label: "request + photo" },
      { from: "adm", to: "sb", label: "manage cards" },
      { from: "card", to: "sb", label: "public read" },
      { from: "sb", to: "db", label: "RLS policies" },
      { from: "sb", to: "mail", label: "notify", both: true },
      { from: "mail", to: "appr", label: "email action", both: true },
    ],
    groups: [
      { id: "nas", label: "SYNOLOGY NAS · APACHE", cols: [1, 1], rows: [0, 2] },
      { id: "sbg", label: "SUPABASE", cols: [2, 3], rows: [1, 1] },
    ],
    notes: [
      "Activation is separate from approval: a card is public only after the System Administrator activates it.",
      "Administrative operations and public card reads are kept apart by access policies.",
    ],
  },
  billo: {
    title: "Billo system architecture",
    summary:
      "A React client drives a Node.js workflow service that owns routing state and audit events in PostgreSQL. Files are attachments to the workflow, not the source of its status.",
    cols: 4,
    rows: 2,
    nodes: [
      { id: "prep", label: "Preparer", sub: "starts a document", kind: "actor", col: 0, row: 0 },
      { id: "sign", label: "Reviewer / signer", sub: "routed approvals", kind: "actor", col: 0, row: 1 },
      { id: "app", label: "Billo web", sub: "React · TypeScript", kind: "client", col: 1, row: 0 },
      { id: "svc", label: "Workflow service", sub: "Node.js", kind: "service", col: 2, row: 0 },
      { id: "rec", label: "PostgreSQL", sub: "routing · audit log", kind: "db", col: 3, row: 0 },
      { id: "files", label: "Attachments", sub: "document files", kind: "storage", col: 2, row: 1 },
    ],
    edges: [
      { from: "prep", to: "app", label: "prepare · route" },
      { from: "sign", to: "app", label: "review · sign", route: "hv" },
      { from: "app", to: "svc", label: "workflow actions" },
      { from: "svc", to: "rec", label: "state + audit" },
      { from: "svc", to: "files", label: "attach" },
    ],
    groups: [{ id: "sb", label: "SUPABASE", cols: [3, 3], rows: [0, 0] }],
    notes: ["Status lives on the workflow record; the file is an attachment."],
  },
  "file-gateway": {
    title: "File Gateway system architecture",
    summary:
      "A React client hands files to an on-premises Node.js gateway that records each transfer in PostgreSQL and mediates access to files on a Synology NAS.",
    cols: 4,
    rows: 2,
    nodes: [
      { id: "snd", label: "Sender", sub: "controlled intake", kind: "actor", col: 0, row: 0 },
      { id: "rcv", label: "Next owner", sub: "delivery view", kind: "actor", col: 0, row: 1 },
      { id: "app", label: "Gateway web", sub: "React · TypeScript", kind: "client", col: 1, row: 0 },
      { id: "svc", label: "Gateway service", sub: "Node.js · ACL", kind: "service", col: 2, row: 0 },
      { id: "rec", label: "PostgreSQL", sub: "sender · time · owner", kind: "db", col: 3, row: 0 },
      { id: "files", label: "Synology NAS", sub: "stored files", kind: "storage", col: 2, row: 1 },
    ],
    edges: [
      { from: "snd", to: "app", label: "upload" },
      { from: "rcv", to: "app", label: "retrieve", route: "hv" },
      { from: "app", to: "svc", label: "intake/delivery" },
      { from: "svc", to: "rec", label: "transfer record" },
      { from: "svc", to: "files", label: "mediated R/W" },
    ],
    groups: [
      { id: "op", label: "ON-PREM", cols: [2, 2], rows: [0, 1] },
      { id: "sb", label: "SUPABASE", cols: [3, 3], rows: [0, 0] },
    ],
    notes: [
      "Unusable uploads fail at intake instead of being silently accepted.",
      "BBR TrainLog uses this gateway for its certificate and card documents.",
    ],
  },
} satisfies Record<string, SystemDiagram>
