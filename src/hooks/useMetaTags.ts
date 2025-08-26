import { useMemo } from 'react'

interface MetaTagsConfig {
  title: string
  description: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonicalUrl?: string
}

export const useMetaTags = (config: MetaTagsConfig) => {
  const metaTags = useMemo(() => {
    const baseUrl = window.location.origin
    const fullUrl = `${baseUrl}${window.location.pathname}`
    
    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords || 'custom home builder, Austin TX, home construction, remodeling, architectural design',
      ogTitle: config.ogTitle || config.title,
      ogDescription: config.ogDescription || config.description,
      ogImage: config.ogImage || `${baseUrl}/og-image.jpg`,
      canonicalUrl: config.canonicalUrl || fullUrl
    }
  }, [config])

  return metaTags
}
