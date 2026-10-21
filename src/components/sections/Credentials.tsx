import { credentials } from "../../data/experience"
import { SpecTable } from "../ui/SpecTable"

export function Credentials() {
  return (
    <SpecTable
      caption="Certifications"
      rows={credentials}
      rowKey={(row) => row.href}
      columns={[
        {
          key: "cert",
          label: "Certificate",
          className: "font-medium !text-primary-text",
          render: (row) => row.title,
        },
        { key: "issuer", label: "Issuer", render: (row) => row.issuer },
        { key: "year", label: "Year", mono: true, render: (row) => row.year },
        {
          key: "record",
          label: "Record",
          mono: true,
          className: "whitespace-nowrap",
          render: (row) => (
            <a
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-text hover:decoration-accent"
            >
              Verify
              <span className="sr-only"> {row.title} (opens in a new tab)</span>{" "}
              <span aria-hidden="true">↗</span>
            </a>
          ),
        },
      ]}
    />
  )
}
