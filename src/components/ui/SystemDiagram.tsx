import { useId, useMemo } from "react"
import { kindTags, type SystemDiagram as Diagram } from "../../data/diagrams"
import { layoutDiagram, type LaidOutNode } from "../../lib/diagramLayout"

type SystemDiagramProps = {
  diagram: Diagram
  /** "compact" is a decorative thumbnail: shapes and kind tags only. */
  variant?: "full" | "compact"
  /** Fill the parent's box (letterboxed) instead of sizing by width. */
  fit?: boolean
  className?: string
}

function NodeShape({ node }: { node: LaidOutNode }) {
  const { x, y, w, h } = node

  switch (node.kind) {
    case "db":
      return (
        <>
          <path
            className="sd-node-box"
            d={`M${x} ${y + 7} A${w / 2} 7 0 0 1 ${x + w} ${y + 7} V${y + h - 7} A${w / 2} 7 0 0 1 ${x} ${y + h - 7} Z`}
          />
          <path
            className="sd-node-detail"
            d={`M${x} ${y + 7} A${w / 2} 7 0 0 0 ${x + w} ${y + 7}`}
          />
        </>
      )
    case "storage":
      return (
        <>
          <path
            className="sd-node-box"
            d={`M${x} ${y} H${x + w - 12} L${x + w} ${y + 12} V${y + h} H${x} Z`}
          />
          <path
            className="sd-node-detail"
            d={`M${x + w - 12} ${y} V${y + 12} H${x + w}`}
          />
        </>
      )
    case "identity":
      return (
        <>
          <rect className="sd-node-box" x={x} y={y} width={w} height={h} />
          <path className="sd-node-detail" d={`M${x + 4} ${y} V${y + h}`} />
        </>
      )
    case "client":
      return (
        <>
          <rect className="sd-node-box" x={x} y={y} width={w} height={h} />
          <path className="sd-node-detail" d={`M${x} ${y + 21} H${x + w}`} />
          <rect className="sd-node-fill" x={x + w - 22} y={y + 8} width={5} height={5} />
          <rect className="sd-node-fill" x={x + w - 13} y={y + 8} width={5} height={5} />
        </>
      )
    case "actor": {
      const t = 10
      return (
        <path
          className="sd-node-detail"
          d={`M${x} ${y + t} V${y} H${x + t} M${x + w - t} ${y} H${x + w} V${y + t} M${x + w} ${y + h - t} V${y + h} H${x + w - t} M${x + t} ${y + h} H${x} V${y + h - t}`}
        />
      )
    }
    default:
      return <rect className="sd-node-box" x={x} y={y} width={w} height={h} />
  }
}

function NodeText({ node }: { node: LaidOutNode }) {
  // The cylinder's top ellipse needs a little more headroom.
  const shift = node.kind === "db" ? 6 : 0
  const textX = node.x + (node.kind === "identity" ? 14 : 12)

  return (
    <>
      <text className="sd-kind" x={textX} y={node.y + 15 + shift}>
        {kindTags[node.kind]}
      </text>
      <text
        className="sd-label"
        x={textX}
        y={node.y + (node.sub ? 39 : 43) + shift / 2}
      >
        {node.label}
      </text>
      {node.sub ? (
        <text className="sd-sub" x={textX} y={node.y + 54 + shift / 2}>
          {node.sub}
        </text>
      ) : null}
    </>
  )
}

export function SystemDiagram({
  diagram,
  variant = "full",
  fit = false,
  className = "",
}: SystemDiagramProps) {
  const layout = useMemo(() => layoutDiagram(diagram), [diagram])
  const id = useId()
  const compact = variant === "compact"
  const titleId = `${id}-title`
  const descId = `${id}-desc`

  return (
    <svg
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      className={`block w-full ${fit ? "h-full" : "h-auto"} ${compact ? "sd-compact" : ""} ${className}`.trim()}
      {...(compact
        ? { "aria-hidden": true, focusable: false }
        : { role: "img", "aria-labelledby": `${titleId} ${descId}` })}
    >
      {compact ? null : (
        <>
          <title id={titleId}>{diagram.title}</title>
          <desc id={descId}>
            {`${diagram.summary} ${diagram.nodes.length} components and ${diagram.edges.length} connections, also listed in the connections table.`}
          </desc>
        </>
      )}

      <g>
        {layout.groups.map((group) => (
          <g key={group.id} data-sd="group">
            <rect
              className="sd-group-box"
              x={group.x}
              y={group.y}
              width={group.w}
              height={group.h}
            />
            {compact ? null : (
              <text className="sd-group-label" x={group.x} y={group.y - 5}>
                {group.label}
              </text>
            )}
          </g>
        ))}
      </g>

      <g>
        {layout.edges.map((edge) => (
          <g key={edge.id} className="sd-edge-group" data-sd="edge" data-col={edge.col}>
            <path className="sd-edge" d={edge.d} pathLength={1} data-sd-path="" />
            {edge.arrows.map((points) => (
              <polygon key={points} className="sd-arrow" points={points} data-sd-arrow="" />
            ))}
          </g>
        ))}
      </g>

      <g>
        {layout.nodes.map((node) => (
          <g key={node.id} className="sd-node" data-sd="node" data-kind={node.kind} data-col={node.col}>
            <NodeShape node={node} />
            {compact ? (
              <text
                className="sd-kind-lg"
                x={node.cx}
                y={node.cy + 9}
                textAnchor="middle"
              >
                {kindTags[node.kind]}
              </text>
            ) : (
              <NodeText node={node} />
            )}
          </g>
        ))}
      </g>

      {compact ? null : (
        <g>
          {layout.edges.map((edge) =>
            edge.label ? (
              <text
                key={edge.id}
                className="sd-edge-label"
                data-sd="elabel"
                data-col={edge.col}
                x={edge.label.x}
                y={edge.label.y}
                textAnchor={edge.label.anchor}
                transform={
                  edge.label.rotate
                    ? `rotate(-90 ${edge.label.x} ${edge.label.y})`
                    : undefined
                }
              >
                {edge.label.text}
              </text>
            ) : null,
          )}
        </g>
      )}
    </svg>
  )
}
