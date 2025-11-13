'use client'

import Head from 'next/head'
import { getPageSEO, defaultSEO } from '#data/seo'

interface PageSEOProps {
  pageKey?: string
  title?: string
  description?: string
  canonical?: string
  noIndex?: boolean
}

export function PageSEO({ pageKey, title, description, canonical, noIndex }: PageSEOProps) {
  // Get default SEO data for the page
  const pageSEO = pageKey ? getPageSEO(pageKey) : null
  
  // Use custom values or fall back to page defaults
  const finalTitle = title || pageSEO?.title || defaultSEO.siteName
  const finalDescription = description || pageSEO?.description || ''
  const finalCanonical = canonical || defaultSEO.siteUrl
  
  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {pageSEO?.keywords && (
        <meta name="keywords" content={pageSEO.keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta property="og:locale" content={defaultSEO.locale} />
      <meta property="og:image" content={defaultSEO.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaultSEO.twitterHandle} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={defaultSEO.ogImage} />
    </Head>
  )
}
