import { Metadata } from 'next'
import { getPageSEO, defaultSEO, PageSEO } from '#data/seo'

interface GenerateMetadataOptions {
  pageKey?: string
  customTitle?: string
  customDescription?: string
  customKeywords?: string[]
  noIndex?: boolean
}

export function generatePageMetadata(options: GenerateMetadataOptions = {}): Metadata {
  const { pageKey, customTitle, customDescription, customKeywords, noIndex } = options
  
  // Get default SEO data for the page
  const pageSEO: PageSEO = pageKey ? getPageSEO(pageKey) : { title: '', description: '' }
  
  // Use custom values or fall back to page defaults
  const title = customTitle || pageSEO.title
  const description = customDescription || pageSEO.description
  const keywords = customKeywords || pageSEO.keywords || []

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'VogtMedTech' }],
    openGraph: {
      title,
      description,
      siteName: defaultSEO.siteName,
      locale: defaultSEO.locale,
      type: 'website',
      images: [
        {
          url: defaultSEO.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: defaultSEO.twitterHandle,
      images: [defaultSEO.ogImage],
    },
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: defaultSEO.siteUrl,
    },
  }
}
