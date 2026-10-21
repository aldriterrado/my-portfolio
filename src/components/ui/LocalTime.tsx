import { useEffect, useState } from "react"
import { site } from "../../data/site"

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: site.timezone,
})

/** The current time in Singapore, refreshed every 15 seconds. */
export function LocalTime({ className = "" }: { className?: string }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <time dateTime={now.toISOString()} className={className}>
      {formatter.format(now)} GMT+8
    </time>
  )
}
