import type { SVGProps } from "react"

type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-down"
  | "arrow-left"
  | "arrow-up"
  | "sun"
  | "moon"
  | "copy"
  | "check"

const paths: Record<IconName, string> = {
  "arrow-right": "M4 12h15m-6-6 6 6-6 6",
  "arrow-left": "M20 12H5m6-6-6 6 6 6",
  "arrow-up-right": "M7 17 17 7M8 7h9v9",
  "arrow-down": "M12 4v15m-6-6 6 6 6-6",
  "arrow-up": "M12 20V5m-6 6 6-6 6 6",
  sun: "M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  moon: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z",
  copy: "M9 9h10v10H9zM5 15V5h10",
  check: "m5 12.5 4.5 4.5L19 7.5",
}

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number }

/** Stroke icons; decorative by default, so label the control, not the icon. */
export function Icon({ name, size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  )
}
