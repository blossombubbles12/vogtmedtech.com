import { IconType } from 'react-icons'
import {
  FiHome,
  FiInfo,
  FiUsers,
  FiBriefcase,
  FiGrid,
  FiCpu,
  FiActivity,
  FiZap,
  FiLayers,
  FiTrendingUp,
  FiFileText,
  FiAward,
  FiBook,
  FiBookOpen,
  FiFile,
  FiImage,
  FiDollarSign,
  FiStar,
  FiHelpCircle,
  FiMail,
  FiLogIn,
  FiUserPlus,
} from 'react-icons/fi'

export interface MenuSubItem {
  label: string
  href: string
  description?: string
  icon?: IconType
}

export interface MenuItem {
  label: string
  href?: string
  description?: string
  icon?: IconType
  children?: MenuSubItem[]
  variant?: 'default' | 'primary' | 'ghost'
}

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: FiHome,
  },
  {
    label: 'About Us',
    href: '/about',
    description: 'Learn about our mission, leadership, and opportunities',
    icon: FiInfo,
    children: [
      {
        label: 'Our Story',
        href: '/about/story',
        description: 'Discover how we started and our vision for healthcare',
        icon: FiBook,
      },
      {
        label: 'Leadership Team',
        href: '/about/team',
        description: 'Meet the experts driving medical innovation',
        icon: FiUsers,
      },
      {
        label: 'Careers',
        href: '/about/careers',
        description: 'Join our team and shape the future of healthcare',
        icon: FiBriefcase,
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    description: 'Innovative medical technology solutions',
    icon: FiGrid,
    children: [
      {
        label: 'Medical Devices',
        href: '/solutions/medical-devices',
        description: 'Advanced medical devices for better patient outcomes',
        icon: FiActivity,
      },
      {
        label: 'Diagnostic Systems',
        href: '/solutions/diagnostics',
        description: 'Precision diagnostic tools for accurate results',
        icon: FiZap,
      },
      {
        label: 'Digital Health',
        href: '/solutions/digital-health',
        description: 'Connected healthcare solutions for modern medicine',
        icon: FiLayers,
      },
      {
        label: 'AI & Robotics',
        href: '/solutions/ai-robotics',
        description: 'Cutting-edge AI and robotic systems',
        icon: FiCpu,
      },
    ],
  },
  {
    label: 'Innovation',
    href: '/innovation',
    description: 'Our research, development, and breakthroughs',
    icon: FiTrendingUp,
    children: [
      {
        label: 'R&D',
        href: '/innovation/rnd',
        description: 'Exploring the frontiers of medical technology',
        icon: FiTrendingUp,
      },
      {
        label: 'Case Studies',
        href: '/innovation/case-studies',
        description: 'Real-world applications and success stories',
        icon: FiFileText,
      },
      {
        label: 'Patents & Publications',
        href: '/innovation/patents',
        description: 'Our intellectual property and research papers',
        icon: FiAward,
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    description: 'Educational materials and insights',
    icon: FiBookOpen,
    children: [
      {
        label: 'Blog / Insights',
        href: '/resources/blog',
        description: 'Latest trends and expert perspectives',
        icon: FiBookOpen,
      },
      {
        label: 'Whitepapers',
        href: '/resources/whitepapers',
        description: 'In-depth technical and clinical research',
        icon: FiFile,
      },
      {
        label: 'Documentation',
        href: '/resources/documentation',
        description: 'Product guides and technical specifications',
        icon: FiFileText,
      },
      {
        label: 'Media Center',
        href: '/resources/media',
        description: 'Press releases, videos, and media assets',
        icon: FiImage,
      },
    ],
  },
  {
    label: 'FAQ',
    href: '/resources/faq',
    icon: FiHelpCircle,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: FiMail,
  },
]

export const authMenuItems: MenuItem[] = [
  {
    label: 'Log In',
    href: '/login',
    icon: FiLogIn,
    variant: 'ghost',
  },
  {
    label: 'Sign Up',
    href: '/signup',
    icon: FiUserPlus,
    variant: 'primary',
  },
]
