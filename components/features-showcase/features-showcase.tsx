'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, isValidMotionProp } from 'framer-motion'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  Progress,
  Badge,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Feature {
  id: number
  icon: IconType
  title: string
  description: string
  image: string
}

interface FeaturesShowcaseProps {
  features: Feature[]
  title?: string
  subtitle?: string
  primaryColor?: string
}

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export function FeaturesShowcase({
  features,
  title = 'Features',
  subtitle = 'Discover what makes us different',
  primaryColor = 'brand.500',
}: FeaturesShowcaseProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }, 200)
    }
  }, [progress, features.length])

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature]
    const container = containerRef.current

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect()
      const elementRect = activeFeatureElement.getBoundingClientRect()

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: 'smooth',
      })
    }
  }, [currentFeature])

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0)
  }

  return (
    <Box py={{ base: 16, md: 20 }} px={4}>
      <Container maxW="7xl">
        {/* Header */}
        <VStack spacing={4} mb={{ base: 12, md: 16 }} textAlign="center">
          <Badge
            colorScheme="blue"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wider"
            px={3}
            py={1}
          >
            {subtitle}
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
            {title}
          </Heading>
        </VStack>

        <Box
          display={{ base: 'flex', lg: 'grid' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          gridTemplateColumns={{ lg: '1fr 1fr' }}
          gap={{ base: 8, lg: 16 }}
          alignItems="center"
        >
          {/* Left Side - Features with Progress Lines */}
          <Box
            ref={containerRef}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
            gap={{ base: 4, sm: 6, lg: 8 }}
            overflowX={{ base: 'visible', sm: 'auto', lg: 'visible' }}
            overflowY="hidden"
            pb={{ base: 0, sm: 4, lg: 0 }}
            order={{ base: 1, lg: 0 }}
            css={{
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {features.map((feature, index) => {
              const isActive = currentFeature === index

              return (
                <Box
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el
                  }}
                  cursor="pointer"
                  flexShrink={0}
                  onClick={() => handleFeatureClick(index)}
                  transition="all 0.3s"
                >
                  {/* Feature Content */}
                  <VStack
                    spacing={4}
                    p={{ base: 3, md: 4 }}
                    maxW={{ base: 'full', sm: 'xs', lg: '2xl' }}
                    w={{ base: 'full', sm: 'auto' }}
                    bg={isActive ? 'white' : 'transparent'}
                    _dark={{
                      bg: isActive ? 'gray.800' : 'transparent',
                      borderColor: isActive ? 'gray.700' : 'transparent',
                    }}
                    borderRadius="xl"
                    border={isActive ? '1px' : 'none'}
                    borderColor={isActive ? 'gray.200' : 'transparent'}
                    shadow={isActive ? 'xl' : 'none'}
                    align={{ base: 'center', lg: 'start' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                    minH={{ base: 'auto', sm: '200px', lg: 'auto' }}
                    justifyContent={{ base: 'flex-start', sm: 'center', lg: 'flex-start' }}
                  >
                    {/* Icon */}
                    <Box
                      p={{ base: 2, md: 3 }}
                      borderRadius="full"
                      bg={isActive ? primaryColor : `${primaryColor}15`}
                      color={isActive ? 'white' : primaryColor}
                      transition="all 0.3s"
                    >
                      <Icon as={feature.icon} boxSize={{ base: 5, md: 6 }} />
                    </Box>

                    {/* Content */}
                    <VStack align={{ base: 'center', lg: 'start' }} flex={1} spacing={2} textAlign={{ base: 'center', lg: 'left' }}>
                      <Heading
                        as="h3"
                        size={{ base: 'sm', md: 'md' }}
                        color={isActive ? 'gray.900' : 'gray.700'}
                        _dark={{
                          color: isActive ? 'white' : 'gray.300',
                        }}
                        transition="all 0.3s"
                      >
                        {feature.title}
                      </Heading>
                      <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color={isActive ? 'gray.600' : 'gray.500'}
                        _dark={{
                          color: isActive ? 'gray.400' : 'gray.500',
                        }}
                        transition="all 0.3s"
                      >
                        {feature.description}
                      </Text>
                      <Box w="full" mt={2}>
                        {isActive && (
                          <Progress
                            value={progress}
                            size="xs"
                            colorScheme="blue"
                            borderRadius="full"
                            bg="gray.200"
                            _dark={{ bg: 'gray.700' }}
                          />
                        )}
                      </Box>
                    </VStack>
                  </VStack>
                </Box>
              )
            })}
          </Box>

          {/* Right Side - Image Display */}
          <Box
            position="relative"
            maxW={{ base: 'full', lg: 'full' }}
            mx="auto"
            order={{ base: 0, lg: 1 }}
            mb={{ base: 6, lg: 0 }}
          >
            <MotionBox
              key={currentFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeOut' } as any}
            >
              <Image
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                borderRadius="2xl"
                border="1px"
                borderColor="gray.100"
                _dark={{ borderColor: 'gray.800' }}
                shadow="2xl"
                w="full"
                h={{ base: '200px', sm: '250px', md: '300px', lg: 'auto' }}
                objectFit="cover"
              />
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
