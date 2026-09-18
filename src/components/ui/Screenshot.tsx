type ScreenshotProps = {
  src: string | null
  alt: string
  hint?: string
  priority?: boolean
}

export function Screenshot({
  src,
  alt,
  hint,
  priority = false,
}: ScreenshotProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-line bg-surface">
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 px-6 text-center">
          <p className="text-[15px] text-secondary-text">{alt}</p>
          {hint ? (
            <p className="font-mono text-[13px] text-muted">
              Add {hint} to src/assets/photo/project/
            </p>
          ) : null}
        </div>
      )}
    </div>
  )
}