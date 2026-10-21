import { capabilities } from "../../data/experience"
import { site } from "../../data/site"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { SpecLabel } from "../ui/SpecLabel"
import { SpecTable } from "../ui/SpecTable"
import { Credentials } from "./Credentials"

function SubHeading({ n, title }: { n: string; title: string }) {
  return (
    <h3 className="mb-4 flex items-baseline gap-3 text-[16px] font-medium text-primary-text">
      <span className="font-mono text-[12px] text-accent-text">{n}</span>
      {title}
    </h3>
  )
}

export function Capabilities() {
  return (
    <Section id="spec" labelledBy="spec-title">
      <Container>
        <SpecLabel n="3" id="spec-title" title="Specifications" meta="03 tables" />
        <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.6] text-secondary-text">
          {site.intros.spec}
        </p>

        <Reveal className="mt-12">
          <SubHeading n="3.1" title="Capabilities" />
          <SpecTable
            caption="Capabilities"
            rows={capabilities}
            rowKey={(row) => row.id}
            columns={[
              {
                key: "parameter",
                label: "Parameter",
                className: "font-medium !text-primary-text md:w-[22%]",
                render: (row) => row.title,
              },
              {
                key: "description",
                label: "Description",
                className: "md:w-[42%]",
                render: (row) => row.focus,
              },
              {
                key: "values",
                label: "Values",
                mono: true,
                render: (row) => row.stack.join(" · "),
              },
            ]}
          />
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SubHeading
              n="3.2"
              title={`Under development — ${site.exploring.title}`}
            />
            <p className="mb-6 max-w-[52ch] text-[15px] leading-[1.6] text-secondary-text">
              {site.exploring.body}
            </p>
            <SpecTable
              caption={`Under development: ${site.exploring.title}`}
              rows={[...site.exploring.track]}
              rowKey={(row) => row.title}
              columns={[
                {
                  key: "item",
                  label: "Item",
                  className: "font-medium !text-primary-text md:w-[34%]",
                  render: (row) => row.title,
                },
                { key: "note", label: "Note", render: (row) => row.note },
                {
                  key: "status",
                  label: "Status",
                  mono: true,
                  className: "whitespace-nowrap",
                  render: (row) =>
                    row.active ? (
                      <span className="text-accent-text">■ Active</span>
                    ) : (
                      <span>□ Queued</span>
                    ),
                },
              ]}
            />
          </Reveal>

          <Reveal delay={80}>
            <SubHeading n="3.3" title="Certifications" />
            <Credentials />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
