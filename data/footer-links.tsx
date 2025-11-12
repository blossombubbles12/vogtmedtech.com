import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

export interface FooterLink {
  label: string
  href: string
  isExternal?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  label: string
  href: string
  icon: IconType
}

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about/story' },
      { label: 'Leadership Team', href: '/about/team' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Medical Devices', href: '/solutions/medical-devices' },
      { label: 'Diagnostic Systems', href: '/solutions/diagnostics' },
      { label: 'Digital Health', href: '/solutions/digital-health' },
      { label: 'AI & Robotics', href: '/solutions/ai-robotics' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog & Insights', href: '/resources/blog' },
      { label: 'Whitepapers', href: '/resources/whitepapers' },
      { label: 'Documentation', href: '/resources/documentation' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'support@vogtmedtech.com', href: 'mailto:support@vogtmedtech.com', isExternal: true },
      { label: '+1 (555) 123-4567', href: 'tel:+15551234567', isExternal: true },
      { label: 'Boston, MA, USA', href: '/contact', isExternal: false },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/vogtmedtech',
    icon: FaLinkedin,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/vogtmedtech',
    icon: FaTwitter,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/vogtmedtech',
    icon: FaFacebook,
  },
]

export const contactInfo = {
  email: 'support@vogtmedtech.com',
  phone: '+1 (555) 123-4567',
  address: '100 Innovation Drive, Boston, MA 02110',
}
