// SEO metadata for VogtMedTech pages
export interface PageSEO {
  title: string
  description: string
  keywords?: string[]
}

export const seoData: Record<string, PageSEO> = {
  // Homepage
  home: {
    title: 'VogtMedTech | Medical Device Innovation & Healthcare Technology Solutions',
    description: 'Leading medical technology company specializing in AI diagnostics, robotic surgery, and digital health solutions. Transforming patient care through cutting-edge medical devices and healthcare innovation.',
    keywords: ['medical technology', 'healthcare innovation', 'medical devices', 'AI diagnostics', 'robotic surgery', 'digital health', 'patient care solutions'],
  },

  // About Pages
  aboutStory: {
    title: 'Our Story | VogtMedTech - 25+ Years of Medical Innovation',
    description: 'Discover VogtMedTech\'s journey from startup to global healthcare leader. Learn how our patient-centered engineering approach has revolutionized medical technology since 2000.',
    keywords: ['medical technology company', 'healthcare innovation history', 'patient-centered engineering', 'medical device manufacturer'],
  },

  aboutTeam: {
    title: 'Leadership Team | Expert Medical Technology Innovators - VogtMedTech',
    description: 'Meet VogtMedTech\'s world-class leadership team of physicians, engineers, and healthcare executives driving innovation in medical devices and patient care technology.',
    keywords: ['medical technology leaders', 'healthcare executives', 'medical device experts', 'biomedical engineering team'],
  },

  aboutCareers: {
    title: 'Careers | Join VogtMedTech\'s Healthcare Innovation Team',
    description: 'Explore career opportunities at VogtMedTech. Join our mission to transform healthcare through innovative medical devices, AI diagnostics, and patient-centered technology solutions.',
    keywords: ['medical technology careers', 'healthcare jobs', 'biomedical engineering jobs', 'medical device careers'],
  },

  // Solutions Pages
  solutionsMedicalDevices: {
    title: 'Medical Devices | Advanced Patient Monitoring & Diagnostic Systems',
    description: 'FDA-cleared medical devices including Sentinel-X vital signs monitor, CardioPulse cardiac system, and NeuroGuide brain monitoring. Hospital-grade patient care technology.',
    keywords: ['medical devices', 'patient monitoring systems', 'cardiac monitoring', 'vital signs monitor', 'FDA cleared devices', 'hospital equipment'],
  },

  solutionsDiagnostics: {
    title: 'Diagnostic Solutions | AI-Powered Medical Imaging & Laboratory Systems',
    description: 'Advanced diagnostic systems featuring Spectrum™ clinical analyzer, DxVision™ AI imaging, and GenomicsPro™ sequencing. Precision diagnostics for modern healthcare.',
    keywords: ['diagnostic systems', 'AI medical imaging', 'clinical laboratory', 'genomic sequencing', 'medical diagnostics', 'pathology systems'],
  },

  solutionsAIRobotics: {
    title: 'AI & Robotics | Surgical Robots & Clinical Intelligence Platforms',
    description: 'Next-generation surgical robotics and AI-powered diagnostics. CognitionAI™ clinical intelligence, PrecisionBot™ surgery system, and autonomous surgical assistance.',
    keywords: ['surgical robotics', 'AI diagnostics', 'robotic surgery', 'clinical AI', 'autonomous surgery', 'medical robotics'],
  },

  solutionsDigitalHealth: {
    title: 'Digital Health | Telehealth, Remote Monitoring & Patient Engagement',
    description: 'Comprehensive digital health platform including HealthConnect™ EHR integration, VitalWatch™ remote monitoring, and CarePath™ patient engagement solutions.',
    keywords: ['digital health', 'telehealth platform', 'remote patient monitoring', 'patient engagement', 'EHR integration', 'healthcare coordination'],
  },

  // Innovation Pages
  innovationRnD: {
    title: 'Research & Development | Medical Technology Innovation Lab',
    description: 'VogtMedTech\'s advanced R&D facilities driving breakthrough innovations in medical devices, AI diagnostics, and patient care technology. 180+ patents awarded.',
    keywords: ['medical research', 'healthcare innovation', 'R&D lab', 'medical technology development', 'biomedical research', 'medical device innovation'],
  },

  innovationPatents: {
    title: 'Patents & IP | 180+ Medical Technology Innovations',
    description: 'Explore VogtMedTech\'s extensive patent portfolio covering AI algorithms, surgical robotics, diagnostic systems, and breakthrough medical device technologies.',
    keywords: ['medical patents', 'healthcare IP', 'medical technology patents', 'medical device innovations', 'surgical robot patents'],
  },

  innovationCaseStudies: {
    title: 'Case Studies | Real-World Healthcare Technology Success Stories',
    description: 'Proven results: How VogtMedTech\'s medical devices and digital health solutions have transformed patient outcomes across 500+ healthcare institutions worldwide.',
    keywords: ['medical technology case studies', 'healthcare success stories', 'patient outcomes', 'clinical results', 'hospital implementations'],
  },

  // Resources Pages
  resourcesBlog: {
    title: 'Medical Technology Blog | Healthcare Innovation Insights - VogtMedTech',
    description: 'Expert insights on AI diagnostics, robotic surgery, precision medicine, and digital health trends. Latest healthcare technology news and medical device innovations.',
    keywords: ['medical technology blog', 'healthcare insights', 'AI diagnostics', 'robotic surgery', 'digital health', 'precision medicine'],
  },

  resourcesFAQ: {
    title: 'FAQ | Medical Device & Healthcare Technology Questions',
    description: 'Frequently asked questions about VogtMedTech\'s medical devices, diagnostic systems, regulatory compliance, training, and healthcare technology solutions.',
    keywords: ['medical device FAQ', 'healthcare technology questions', 'medical equipment support', 'FDA compliance', 'device training'],
  },

  resourcesDocumentation: {
    title: 'Technical Documentation | Medical Device User Guides & Manuals',
    description: 'Comprehensive technical documentation, user manuals, clinical guides, and training materials for VogtMedTech medical devices and healthcare technology systems.',
    keywords: ['medical device manuals', 'technical documentation', 'user guides', 'clinical training', 'device specifications'],
  },

  resourcesWhitepapers: {
    title: 'Whitepapers | Medical Technology Research & Clinical Studies',
    description: 'In-depth whitepapers on medical device technology, AI diagnostics, clinical outcomes, regulatory compliance, and healthcare innovation best practices.',
    keywords: ['medical whitepapers', 'clinical studies', 'healthcare research', 'medical device technology', 'clinical outcomes'],
  },

  resourcesMedia: {
    title: 'Media Center | VogtMedTech News, Press Releases & Resources',
    description: 'Latest news, press releases, media kits, and company announcements. Media resources for journalists covering medical technology and healthcare innovation.',
    keywords: ['medical technology news', 'press releases', 'media resources', 'healthcare news', 'company announcements'],
  },

  // Contact
  contact: {
    title: 'Contact VogtMedTech | Medical Technology Sales & Support',
    description: 'Contact VogtMedTech for medical device inquiries, sales information, technical support, or partnership opportunities. Global offices serving 45+ countries.',
    keywords: ['contact medical device company', 'healthcare technology support', 'medical sales', 'technical support', 'partnership inquiries'],
  },
}

// Helper function to get SEO data
export function getPageSEO(pageKey: string): PageSEO {
  return seoData[pageKey] || seoData.home
}

// Default site-wide SEO
export const defaultSEO = {
  siteName: 'VogtMedTech',
  siteUrl: 'https://vogtmedtech.com',
  twitterHandle: '@vogtmedtech',
  ogImage: '/static/images/og-image.jpg',
  locale: 'en_US',
}
