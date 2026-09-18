import { useEffect } from "react"
import { site } from "../data/site"

type SeoOptions = {
  title: string
  description: string
  path?: string
}

function upsertMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector(selector)
  if (element) {
    element.setAttribute(attribute, value)
  }
}

export function useSeo({ title, description, path = "/" }: SeoOptions) {
  useEffect(() => {
    const url = `${site.origin}${path}`

    document.title = title
    upsertMeta('meta[name="description"]', "content", description)
    upsertMeta('link[rel="canonical"]', "href", url)
    upsertMeta('meta[property="og:title"]', "content", title)
    upsertMeta('meta[property="og:description"]', "content", description)
    upsertMeta('meta[property="og:url"]', "content", url)
    upsertMeta('meta[name="twitter:title"]', "content", title)
    upsertMeta('meta[name="twitter:description"]', "content", description)
  }, [title, description, path])
}
