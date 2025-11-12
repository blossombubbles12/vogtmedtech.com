'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import React from 'react'

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})
export interface PageHeaderProps {
  /**
   * Main page title
   */
  title: string
  /**
   * Optional subtitle or description
   */
  subtitle?: string
  /**
   * Optional background image path from /public/images
   * Example: "/images/medical-devices-hero.jpg"
   */
  image?: string
  /**
   * Enable gradient overlay (default: true)
   */
  gradient?: boolean
  /**
   * Custom gradient colors (default: blue.600 to teal.400)
   */
  gradientColors?: [string, string]
  /**
   * Header height (default: "400px" for desktop, "300px" for mobile)
   */
  height?: string | string[]
  /**
   * Text alignment (default: "center")
   */
  align?: 'left' | 'center' | 'right'
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  image,
  gradient = true,
  gradientColors = ['brand.600', 'accent.400'],
  height = ['300px', '350px', '400px'],
  align = 'center',
}) => {
  // Color mode values
  const overlayBg = useColorModeValue(
    `linear(to-r, ${gradientColors[0]}, ${gradientColors[1]})`,
    `linear(to-r, brand.700, accent.600)`
  )
  
  const fallbackBg = useColorModeValue(
    'linear(to-r, brand.500, accent.400)',
    'linear(to-r, brand.800, accent.700)'
  )

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <MotionBox
      position="relative"
      overflow="hidden"
      height={height}
      mt="80px" // Add margin to prevent overlap with fixed header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      {image && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          zIndex="0"
        />
      )}

      {/* Gradient Overlay */}
      {gradient && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient={image ? overlayBg : fallbackBg}
          opacity={image ? 0.9 : 1}
          zIndex="1"
        />
      )}

      {/* Content */}
      <Container
        maxW="container.xl"
        height="full"
        position="relative"
        zIndex="2"
        display="flex"
        alignItems="center"
        justifyContent={align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end'}
        px={{ base: 4, md: 8 }}
        py={{ base: 16, md: 20 }}
      >
        <VStack
          as={motion.div}
          spacing={{ base: 4, md: 6 }}
          align={align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end'}
          textAlign={align}
          maxW="container.md"
          w="full"
          variants={containerVariants}
        >
          {/* Title */}
          <motion.div variants={itemVariants} style={{ width: '100%' }}>
            <Heading
              as="h1"
              size={{ base: 'xl', md: '2xl', lg: '3xl' }}
              color="white"
              fontWeight="bold"
              lineHeight="shorter"
              letterSpacing="tight"
              textShadow="0 4px 20px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                right: '-4px',
                bottom: '-4px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%)',
                filter: 'blur(8px)',
                zIndex: -1,
                borderRadius: 'md',
              }}
            >
              {title}
            </Heading>
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.div variants={itemVariants} style={{ width: '100%' }}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="whiteAlpha.900"
                fontWeight="medium"
                lineHeight="tall"
                maxW="2xl"
                textShadow="0 2px 12px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)"
              >
                {subtitle}
              </Text>
            </motion.div>
          )}
        </VStack>
      </Container>

      {/* Decorative Bottom Wave (optional) */}
      <Box
        position="absolute"
        bottom="-1px"
        left="0"
        right="0"
        height="60px"
        zIndex="2"
        background={useColorModeValue('white', 'gray.900')}
        clipPath="polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
      />
    </MotionBox>
  )
}

export default PageHeader
