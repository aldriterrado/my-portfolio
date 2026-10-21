import type {
  DiagramEdge,
  DiagramNode,
  SystemDiagram,
} from "../data/diagrams"

// Grid geometry in SVG units. Nodes are centred in their cells, so the gap
// between two neighbouring nodes is centred on the cell boundary.
export const CELL_W = 272
export const CELL_H = 128
export const NODE_W = 164
export const NODE_H = 64
const MARGIN = 24
const GROUP_PAD_X = 14
const GROUP_PAD_Y = 16
// IBM Plex Mono has a fixed 0.6em advance, so label widths are known without
// measuring the DOM. Edge labels are set at 10px.
const LABEL_CHAR = 6
const ARROW_LENGTH = 7
const ARROW_HALF_WIDTH = 4

type Point = [number, number]

export type LaidOutNode = DiagramNode & {
  x: number
  y: number
  w: number
  h: number
  cx: number
  cy: number
}

export type EdgeLabel = {
  text: string
  x: number
  y: number
  anchor: "start" | "middle"
  rotate: boolean
}

export type LaidOutEdge = {
  id: string
  edge: DiagramEdge
  d: string
  arrows: string[]
  label: EdgeLabel | null
  /** The right-most column the edge touches; used to order the draw-in. */
  col: number
}

export type LaidOutGroup = {
  id: string
  label: string
  x: number
  y: number
  w: number
  h: number
}

export type DiagramLayout = {
  width: number
  height: number
  nodes: LaidOutNode[]
  edges: LaidOutEdge[]
  groups: LaidOutGroup[]
}

const cellLeft = (col: number) => MARGIN + col * CELL_W
const cellTop = (row: number) => MARGIN + row * CELL_H

function placeNode(node: DiagramNode): LaidOutNode {
  const x = cellLeft(node.col) + (CELL_W - NODE_W) / 2
  const y = cellTop(node.row) + (CELL_H - NODE_H) / 2
  return {
    ...node,
    x,
    y,
    w: NODE_W,
    h: NODE_H,
    cx: x + NODE_W / 2,
    cy: y + NODE_H / 2,
  }
}

function routeEdge(a: LaidOutNode, b: LaidOutNode, edge: DiagramEdge): Point[] {
  const right = b.cx > a.cx
  const down = b.cy > a.cy
  const exitSide = right ? a.x + a.w : a.x
  const enterSide = right ? b.x : b.x + b.w
  const exitEnd = down ? a.y + a.h : a.y
  const enterEnd = down ? b.y : b.y + b.h

  if (a.row === b.row) return [[exitSide, a.cy], [enterSide, b.cy]]
  if (a.col === b.col) return [[a.cx, exitEnd], [b.cx, enterEnd]]

  const mode = edge.route ?? "auto"
  if (mode === "hv") return [[exitSide, a.cy], [b.cx, a.cy], [b.cx, enterEnd]]
  if (mode === "vh") return [[a.cx, exitEnd], [a.cx, b.cy], [enterSide, b.cy]]

  const boundary = edge.bendX ?? (right ? b.col : b.col + 1)
  const gx = MARGIN + boundary * CELL_W
  return [[exitSide, a.cy], [gx, a.cy], [gx, b.cy], [enterSide, b.cy]]
}

function arrowHead(from: Point, tip: Point) {
  const dx = tip[0] - from[0]
  const dy = tip[1] - from[1]
  const length = Math.hypot(dx, dy) || 1
  const ux = dx / length
  const uy = dy / length
  const bx = tip[0] - ux * ARROW_LENGTH
  const by = tip[1] - uy * ARROW_LENGTH
  const px = -uy * ARROW_HALF_WIDTH
  const py = ux * ARROW_HALF_WIDTH
  return `${tip[0]},${tip[1]} ${bx + px},${by + py} ${bx - px},${by - py}`
}

const isHorizontal = (p: Point, q: Point) => p[1] === q[1]
const segLength = (p: Point, q: Point) => Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1])

function labelAbove(p: Point, q: Point, text: string): EdgeLabel {
  return { text, x: (p[0] + q[0]) / 2, y: p[1] - 6, anchor: "middle", rotate: false }
}

function labelBeside(p: Point, q: Point, text: string): EdgeLabel {
  return { text, x: p[0] + 6, y: (p[1] + q[1]) / 2 + 3.5, anchor: "start", rotate: false }
}

function placeLabel(points: Point[], text: string | undefined): EdgeLabel | null {
  if (!text) return null

  if (points.length === 4) {
    // z-route: run the label along the vertical leg in the gutter when it fits.
    const [, p, q] = points
    const width = text.length * LABEL_CHAR
    if (segLength(p, q) >= width + 16) {
      return { text, x: p[0] - 5, y: (p[1] + q[1]) / 2, anchor: "middle", rotate: true }
    }
  }

  let best: [Point, Point] = [points[0], points[1]]
  for (let i = 1; i < points.length - 1; i++) {
    const seg: [Point, Point] = [points[i], points[i + 1]]
    if (segLength(...seg) > segLength(...best)) best = seg
  }

  return isHorizontal(...best) ? labelAbove(...best, text) : labelBeside(...best, text)
}

export function diagramSize(diagram: SystemDiagram) {
  return {
    width: MARGIN * 2 + diagram.cols * CELL_W,
    height: MARGIN * 2 + diagram.rows * CELL_H,
  }
}

export function layoutDiagram(diagram: SystemDiagram): DiagramLayout {
  const nodes = diagram.nodes.map(placeNode)
  const byId = new Map(nodes.map((node) => [node.id, node]))

  const edges = diagram.edges.flatMap((edge): LaidOutEdge[] => {
    const a = byId.get(edge.from)
    const b = byId.get(edge.to)
    if (!a || !b) {
      if (import.meta.env.DEV) {
        console.warn(`Diagram "${diagram.title}": unknown edge ${edge.from} → ${edge.to}`)
      }
      return []
    }

    const points = routeEdge(a, b, edge)
    const last = points.length - 1
    const arrows = [arrowHead(points[last - 1], points[last])]
    if (edge.both) arrows.push(arrowHead(points[1], points[0]))

    return [
      {
        id: `${edge.from}-${edge.to}`,
        edge,
        d: points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" "),
        arrows,
        label: placeLabel(points, edge.label),
        col: Math.max(a.col, b.col),
      },
    ]
  })

  const groups = (diagram.groups ?? []).map((group) => {
    const [c0, c1] = group.cols
    const [r0, r1] = group.rows
    return {
      id: group.id,
      label: group.label,
      x: cellLeft(c0) + (CELL_W - NODE_W) / 2 - GROUP_PAD_X,
      y: cellTop(r0) + (CELL_H - NODE_H) / 2 - GROUP_PAD_Y,
      w: (c1 - c0) * CELL_W + NODE_W + GROUP_PAD_X * 2,
      h: (r1 - r0) * CELL_H + NODE_H + GROUP_PAD_Y * 2,
    }
  })

  return {
    ...diagramSize(diagram),
    nodes,
    edges,
    groups,
  }
}
