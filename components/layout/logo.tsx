import { Box, Flex, Heading, VisuallyHidden, Text } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

import * as React from 'react'

import siteConfig from '#data/config'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const LogoIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#007BFF" />
        <stop offset="50%" stopColor="#00C2A8" />
        <stop offset="100%" stopColor="#9D4EDD" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Outer hexagon */}
    <path
      d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
      stroke="url(#logoGradient)"
      strokeWidth="2"
      fill="none"
      filter="url(#glow)"
    />

    {/* Inner geometric pattern - DNA helix inspired */}
    <path
      d="M20 10V30"
      stroke="url(#logoGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Top cross */}
    <path
      d="M15 14H25"
      stroke="url(#logoGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Middle cross */}
    <path
      d="M15 20H25"
      stroke="url(#logoGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Bottom cross */}
    <path
      d="M15 26H25"
      stroke="url(#logoGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Pulse circles */}
    <circle
      cx="20"
      cy="20"
      r="12"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.3"
    />
    <circle
      cx="20"
      cy="20"
      r="8"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    
    {/* Center dot */}
    <circle
      cx="20"
      cy="20"
      r="2.5"
      fill="url(#logoGradient)"
    />
  </svg>
)

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  return (
    <Flex h="10" flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        alignItems="center"
        gap={3}
        p="1"
        borderRadius="md"
        onClick={onClick}
        _hover={{
          textDecoration: 'none',
          transform: 'translateY(-1px)',
        }}
        transition="all 0.2s"
      >
        <Box
          sx={{
            '@keyframes pulse': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.8 },
            },
            animation: 'pulse 3s ease-in-out infinite',
          }}
        >
          <LogoIcon />
        </Box>
        
        <Flex direction="column" lineHeight="1">
          <Text
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="tight"
            bgGradient="linear(to-r, brand.600, accent.500, purple.500)"
            bgClip="text"
          >
            VogtMedTech
          </Text>
          <Text
            fontSize="2xs"
            fontWeight="500"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
            letterSpacing="wider"
            textTransform="uppercase"
            mt="0.5"
          >
            Medical Innovation
          </Text>
        </Flex>
        
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
