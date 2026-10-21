type ScreenshotProps = {
  src: string | null
  alt: string
  hint?: string
  priority?: boolean
  onLoad?: () => void
}

export function Screenshot({
  src,
  alt,
  hint,
  priority = false,
  onLoad,
}: ScreenshotProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={onLoad}
        className="block w-full object-contain"
      />
    )
  }

  // The "add a screenshot" hint is for the author only; never ship it.
  if (!import.meta.env.DEV) return null

  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 px-6 text-center">
      <p className="text-[15px] text-secondary-text">{alt}</p>
      {hint ? (
        <p className="font-mono text-[13px] text-muted">
          Add {hint} to src/assets/photo/project/
        </p>
      ) : null}
    </div>
  )
}
