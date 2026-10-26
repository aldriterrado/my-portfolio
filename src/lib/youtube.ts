const ID_PATTERN = /^[\w-]{11}$/

/**
 * The video ID from a YouTube watch, share, embed or Shorts link, or null when
 * the link isn't one, so callers can fall back to the regular cover.
 */
export function getYouTubeId(link: string): string | null {
  let url: URL
  try {
    url = new URL(link)
  } catch {
    return null
  }

  const host = url.hostname.replace(/^(www|m)\./, "")
  let id: string | null = null

  if (host === "youtu.be") {
    id = url.pathname.slice(1)
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    const [, first, second] = url.pathname.split("/")
    if (first === "watch") id = url.searchParams.get("v")
    else if (first === "embed" || first === "shorts") id = second
  }

  return id && ID_PATTERN.test(id) ? id : null
}
