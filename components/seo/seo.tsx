import React from 'react'

// SEO is now handled via Next.js 14 App Router metadata API
// This component is kept for backward compatibility but does nothing
export interface SEOProps {
  title?: string
  description?: string
  [key: string]: any
}

export const SEO = ({ title, description, ...props }: SEOProps) => null

