import { Helmet } from 'react-helmet-async'
import { useMetaTags } from '../hooks/useMetaTags'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonicalUrl?: string
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  canonicalUrl 
}: SEOProps) => {
  const metaTags = useMetaTags({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalUrl
  })

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaTags.canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metaTags.ogTitle} />
      <meta property="og:description" content={metaTags.ogDescription} />
      <meta property="og:image" content={metaTags.ogImage} />
      <meta property="og:url" content={metaTags.canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Custom Home Builder" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTags.ogTitle} />
      <meta name="twitter:description" content={metaTags.ogDescription} />
      <meta name="twitter:image" content={metaTags.ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Custom Home Builder" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Austin, Texas" />
    </Helmet>
  )
}
