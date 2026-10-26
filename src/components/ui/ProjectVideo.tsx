import { useState } from "react"
import { ScrollTrigger } from "../../lib/scrollTrigger"
import { Icon } from "./Icon"

type ProjectVideoProps = {
  videoId: string
  title: string
  className?: string
}

/**
 * A YouTube demo in the cover slot. Shows the video's poster until the visitor
 * presses play, so the player only loads on demand. `data-cover` gives it the
 * scrubbed clip opening; there is no `data-cover-media`, so it never zooms and
 * crops the player controls.
 */
export function ProjectVideo({ videoId, title, className = "" }: ProjectVideoProps) {
  const [playing, setPlaying] = useState(false)
  const [poster, setPoster] = useState("maxresdefault")

  return (
    <div
      data-cover
      className={`relative aspect-video overflow-hidden rounded-lg bg-surface ${className}`.trim()}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={`${title} demo video`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title} demo video`}
          data-cursor="Play"
          className="group absolute inset-0 grid size-full cursor-pointer place-items-center"
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/${poster}.jpg`}
            alt=""
            decoding="async"
            onLoad={(event) => {
              // YouTube serves a 120px grey placeholder when there is no HD poster.
              if (poster === "maxresdefault" && event.currentTarget.naturalWidth <= 120) {
                setPoster("hqdefault")
                return
              }
              ScrollTrigger.refresh()
            }}
            onError={() => setPoster("hqdefault")}
            className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.03]"
          />
          <span className="relative grid size-16 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-500 ease-out-expo group-hover:scale-110 md:size-24">
            <Icon name="play" size={28} fill="currentColor" className="translate-x-0.5" />
          </span>
        </button>
      )}
    </div>
  )
}
