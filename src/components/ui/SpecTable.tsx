import type { ReactNode } from "react"

export type SpecColumn<T> = {
  key: string
  label: string
  render: (row: T) => ReactNode
  mono?: boolean
  className?: string
}

type SpecTableProps<T> = {
  caption: string
  columns: SpecColumn<T>[]
  rows: T[]
  rowKey: (row: T) => string
  rowClassName?: (row: T) => string
  className?: string
}

/**
 * A ruled data table. Below md the rows stack into label/value pairs (see
 * .spec-table in index.css), so the ARIA roles are set explicitly: Safari drops
 * table semantics once a table's display type changes.
 */
export function SpecTable<T>({
  caption,
  columns,
  rows,
  rowKey,
  rowClassName,
  className = "",
}: SpecTableProps<T>) {
  return (
    <table
      role="table"
      className={`spec-table w-full border-collapse text-left ${className}`.trim()}
    >
      <caption className="sr-only">{caption}</caption>
      <thead role="rowgroup">
        <tr role="row" className="border-b border-primary-text">
          {columns.map((column) => (
            <th
              key={column.key}
              role="columnheader"
              scope="col"
              className="py-2 pr-6 font-mono text-[11px] font-normal tracking-[0.06em] text-muted uppercase last:pr-0"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {rows.map((row) => (
          <tr
            key={rowKey(row)}
            role="row"
            className={`border-b border-line ${rowClassName?.(row) ?? ""}`.trim()}
          >
            {columns.map((column) => (
              <td
                key={column.key}
                role="cell"
                data-label={column.label}
                className={`py-4 pr-6 align-top last:pr-0 ${
                  column.mono
                    ? "font-mono text-[13px] text-secondary-text"
                    : "text-[15px] leading-[1.55] text-secondary-text"
                } ${column.className ?? ""}`.trim()}
              >
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
