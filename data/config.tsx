import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiCheck, FiShield, FiZap, FiUsers, FiAward } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Vogt MedTech - Pioneering Innovation in Healthcare Technology',
    description:
      'Leading medical technology company providing innovative solutions in medical devices, diagnostic systems, digital health, and AI-powered healthcare.',
  },
  termsUrl: '/legal/terms',
  privacyUrl: '/legal/privacy',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} Vogt MedTech. All rights reserved.
      </>
    ),
    links: [
      {
        href: 'mailto:info@vogtmedtech.com',
        label: 'Contact',
      },
      {
        href: 'https://linkedin.com/company/vogtmedtech',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://twitter.com/vogtmedtech',
        label: <FaTwitter size="14" />,
      },
    ],
  },
  signup: {
    title: 'Transform Healthcare with Vogt MedTech',
    features: [
      {
        icon: FiShield,
        title: 'Medical Grade Compliance',
        description: 'FDA-approved and CE-marked solutions meeting the highest medical device standards.',
      },
      {
        icon: FiZap,
        title: 'AI-Powered Innovation',
        description:
          'Cutting-edge artificial intelligence and machine learning for enhanced diagnostics and treatment.',
      },
      {
        icon: FiUsers,
        title: 'Patient-Centered Design',
        description:
          'Solutions designed with healthcare providers and patients in mind for optimal outcomes.',
      },
      {
        icon: FiAward,
        title: 'Award-Winning Technology',
        description:
          'Recognized globally for excellence in medical technology innovation and research.',
      },
    ],
  },
}

export default siteConfig

