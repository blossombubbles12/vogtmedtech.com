'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  SimpleGrid,
  Grid,
  Icon,
  HStack,
  Badge,
  Flex,
  Avatar,
  useColorModeValue,
  AspectRatio,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import dynamic from 'next/dynamic'
import {
  FiActivity,
  FiAward,
  FiBox,
  FiCpu,
  FiHeart,
  FiShield,
  FiSmile,
  FiThumbsUp,
  FiTrendingUp,
  FiZap,
  FiUsers,
  FiGlobe,
  FiTarget,
  FiCheckCircle,
  FiArrowRight,
  FiTrendingDown,
  FiClock,
  FiDollarSign,
  FiBriefcase,
  FiBarChart2,
  FiLayers,
} from 'react-icons/fi'
import { FaBrain, FaHospital, FaStethoscope, FaMicroscope, FaRobot, FaChartLine } from 'react-icons/fa'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { FeaturesShowcase } from '#components/features-showcase'
import { LatestBlogClient } from '#components/blog'

// Dynamic import with SSR disabled for canvas-based animation
const AnimatedHero = dynamic(
  () => import('#components/hero').then((mod) => ({ default: mod.AnimatedHero })),
  { ssr: false }
)
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import { Section } from '#components/section'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const HeroSection: React.FC = () => {
  return (
    <Box>
      <AnimatedHero />
    </Box>
  )
}

// Global Impact Stats Section
const StatsSection = () => {
  const statBg = useColorModeValue('white', 'gray.800')
  const stats = [
    { icon: FaHospital, value: '500+', label: 'Healthcare Institutions', color: 'brand' },
    { icon: FiGlobe, value: '45', label: 'Countries Worldwide', color: 'accent' },
    { icon: FiUsers, value: '2M+', label: 'Lives Impacted', color: 'purple' },
    { icon: FiAward, value: '180+', label: 'Patents & Innovations', color: 'pink' },
  ]

  return (
    <Section py={20} bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <Container maxW="container.2xl">
        <FallInPlace delay={0.1}>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Badge colorScheme="brand" fontSize="sm" px={3} py={1} borderRadius="full">
              Global Impact
            </Badge>
            <Heading size="2xl" maxW="3xl">
              Transforming Healthcare at Scale
            </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.400' }} maxW="2xl">
              Our innovative solutions are deployed across leading healthcare institutions worldwide,
              driving measurable improvements in patient outcomes and operational efficiency.
            </Text>
          </VStack>
        </FallInPlace>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {stats.map((stat, index) => (
            <FallInPlace key={index} delay={0.2 + index * 0.1}>
              <Box
                p={8}
                bg={statBg}
                borderRadius="2xl"
                border="1px"
                borderColor="gray.200"
                _dark={{ borderColor: 'gray.700' }}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-8px)',
                  shadow: '2xl',
                  borderColor: `${stat.color}.500`,
                }}
                textAlign="center"
              >
                <Icon
                  as={stat.icon}
                  boxSize={12}
                  color={`${stat.color}.500`}
                  mb={4}
                />
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  bgGradient={`linear(to-r, ${stat.color}.500, ${stat.color}.600)`}
                  bgClip="text"
                  mb={2}
                >
                  {stat.value}
                </Text>
                <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.400' }} fontWeight="600">
                  {stat.label}
                </Text>
              </Box>
            </FallInPlace>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Key Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: FiShield,
      title: 'FDA Approved & Certified',
      description:
        'All devices meet rigorous FDA regulatory standards, CE marking, and international compliance requirements. Comprehensive quality management systems ensure safety and reliability.',
      color: 'brand',
    },
    {
      icon: FaBrain,
      title: 'AI-Powered Intelligence',
      description:
        'Advanced machine learning algorithms trained on millions of medical cases provide superhuman pattern recognition, predictive analytics, and clinical decision support.',
      color: 'accent',
    },
    {
      icon: FiHeart,
      title: 'Patient-Centered Design',
      description:
        'Every solution is designed with patient safety, comfort, and dignity at the forefront. User-friendly interfaces ensure optimal care delivery and positive patient experiences.',
      color: 'purple',
    },
    {
      icon: FiCheckCircle,
      title: 'Proven Clinical Outcomes',
      description:
        'Trusted by 500+ leading healthcare institutions with documented improvements in diagnostic accuracy, surgical precision, and patient recovery times across all specialties.',
      color: 'pink',
    },
  ]

  return (
    <Section py={{ base: 16, md: 20 }}>
      <Container maxW="container.2xl">
        <FallInPlace delay={0.1}>
          <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
            <Badge colorScheme="accent" fontSize="sm" px={3} py={1} borderRadius="full">
              Why Choose VogtMedTech
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="3xl">
              Excellence in Every Innovation
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" _dark={{ color: 'gray.400' }} maxW="2xl">
              Combining cutting-edge technology with decades of medical expertise to deliver
              solutions that exceed the highest industry standards.
            </Text>
          </VStack>
        </FallInPlace>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }}>
          {benefits.map((benefit, index) => (
            <FallInPlace key={index} delay={0.2 + index * 0.1}>
                <Box
                  p={{ base: 6, md: 10 }}
                  bg="white"
                  borderRadius="2xl"
                  border="1px"
                  borderColor="gray.200"
                  transition="all 0.3s"
                  h="full"
                  _dark={{
                    bg: 'gray.800',
                    borderColor: 'gray.700',
                  }}
                  _hover={{
          
                    transform: 'translateY(-4px)',
                    shadow: '2xl',
                    borderColor: `${benefit.color}.500`,
                  }}
                >
                  <HStack spacing={{ base: 3, md: 4 }} align="start" flexDirection={{ base: 'column', sm: 'row' }}>
                    <Box
                      p={{ base: 3, md: 4 }}
                      bg={`${benefit.color}.50`}
                      borderRadius="xl"
                      _dark={{ bg: `${benefit.color}.900` }}
                      alignSelf={{ base: 'center', sm: 'flex-start' }}
                    >
                      <Icon as={benefit.icon} boxSize={{ base: 6, md: 8 }} color={`${benefit.color}.500`} />
                    </Box>
                    <VStack align={{ base: 'center', sm: 'start' }} spacing={3} flex={1} textAlign={{ base: 'center', sm: 'left' }}>
                      <Heading size={{ base: 'sm', md: 'md' }}>{benefit.title}</Heading>
                      <Text
                        color="gray.600"
                        lineHeight="tall"
                        fontSize={{ base: 'sm', md: 'md' }}
                        _dark={{ color: 'gray.400' }}
                      >
                        {benefit.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
            </FallInPlace>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Story Section 1: Precision Medicine (Image Right)
const StorySection1 = () => {
  return (
    <Section py={{ base: 16, md: 24 }}>
      <Container maxW="container.2xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 16 }} alignItems="center">
          {/* Text Content - Left */}
          <FallInPlace delay={0.2}>
            <VStack align={{ base: 'center', lg: 'start' }} spacing={6} textAlign={{ base: 'center', lg: 'left' }}>
              <Badge
                colorScheme="brand"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Precision Medicine
              </Badge>
              
              <Heading
                as="h2"
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
                lineHeight="shorter"
                fontWeight="bold"
              >
                Redefining Surgical
                <br />
                <Text as="span" bgGradient="linear(to-r, brand.500, accent.500)" bgClip="text">
                  Precision & Safety
                </Text>
              </Heading>

              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                Our robotic-assisted surgical systems combine sub-millimeter precision with
                AI-powered guidance, enabling surgeons to perform complex procedures with
                unprecedented accuracy. Real-time imaging and haptic feedback create a seamless
                extension of the surgeon's capabilities.
              </Text>

              <VStack align={{ base: 'center', lg: 'start' }} spacing={4} pt={4} w="full">
                {[
                  {
                    icon: FiTarget,
                    title: '0.1mm Precision',
                    description: 'Sub-millimeter accuracy for delicate procedures',
                  },
                  {
                    icon: FiActivity,
                    title: 'Real-Time Feedback',
                    description: 'Instant visual and haptic response systems',
                  },
                  {
                    icon: FiShield,
                    title: '99.8% Safety Rate',
                    description: 'Industry-leading complication prevention',
                  },
                ].map((feature, index) => (
                  <HStack key={index} spacing={{ base: 3, md: 4 }} align="start" w="full" justifyContent={{ base: 'center', lg: 'start' }}>
                    <Box
                      p={2}
                      bg="brand.50"
                      _dark={{ bg: 'brand.900' }}
                      borderRadius="lg"
                      mt={1}
                      flexShrink={0}
                    >
                      <Icon as={feature.icon} boxSize={5} color="brand.500" />
                    </Box>
                    <VStack align={{ base: 'center', lg: 'start' }} spacing={0} textAlign={{ base: 'center', lg: 'left' }}>
                      <Text fontWeight="600" fontSize={{ base: 'sm', md: 'md' }}>
                        {feature.title}
                      </Text>
                      <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600" _dark={{ color: 'gray.400' }}>
                        {feature.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>

              <Button
                as="a"
                href="/solutions/ai-robotics"
                size={{ base: 'md', md: 'lg' }}
                colorScheme="brand"
                rightIcon={<FiArrowRight />}
                mt={4}
                w={{ base: 'full', sm: 'auto' }}
              >
                Explore Robotic Systems
              </Button>
            </VStack>
          </FallInPlace>

          {/* Image - Right */}
          <FallInPlace delay={0.4}>
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              order={{ base: -1, lg: 0 }}
              _hover={{
                transform: 'scale(1.02)',
                transition: 'transform 0.4s ease',
              }}
            >
              <AspectRatio ratio={{ base: 16 / 9, md: 4 / 3 }}>
                <Box
                  position="relative"
                  overflow="hidden"
                  backgroundImage="url('https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&h=900&fit=crop&q=80')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                >
                  {/* Premium overlay for content legibility */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(135deg, blackAlpha.400, blackAlpha.600)"
                    backdropFilter="blur(1px)"
                  />

                  {/* Key stats overlay */}
                  <VStack
                    position="absolute"
                    bottom={6}
                    left={6}
                    spacing={2}
                    align="start"
                  >
                    <HStack spacing={6}>
                      <Box
                        bg="whiteAlpha.200"
                        backdropFilter="blur(10px)"
                        px={4}
                        py={2}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                      >
                        <Text color="white" fontSize="sm" fontWeight="600">
                          99.8% Success Rate
                        </Text>
                      </Box>
                      <Box
                        bg="whiteAlpha.200"
                        backdropFilter="blur(10px)"
                        px={4}
                        py={2}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                      >
                        <Text color="white" fontSize="sm" fontWeight="600">
                          0.1mm Precision
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>

                  {/* Corner tech indicator */}
                  <Box
                    position="absolute"
                    top={4}
                    left={4}
                    bg="accent.500"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    AI-Powered
                  </Box>
                  
                  {/* Premium border effect */}
                  <Box
                    position="absolute"
                    inset={0}
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="2xl"
                    pointerEvents="none"
                  />
                </Box>
              </AspectRatio>

              {/* Enhanced floating badge */}
              <Badge
                position="absolute"
                top={6}
                right={6}
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
                border="1px solid"
                borderColor="whiteAlpha.300"
              >
                500+ Hospitals Worldwide
              </Badge>
            </Box>
          </FallInPlace>
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Story Section 2: AI Diagnostics (Image Left)
const StorySection2 = () => {
  return (
    <Section py={24} bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <Container maxW="container.2xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
          {/* Image - Left */}
          <FallInPlace delay={0.2}>
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              _hover={{
                transform: 'scale(1.02)',
                transition: 'transform 0.4s ease',
              }}
            >
              <AspectRatio ratio={4 / 3}>
                <Box
                  position="relative"
                  overflow="hidden"
                  backgroundImage="url('https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=900&fit=crop&q=80')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                >
                  {/* Premium overlay for AI theme */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(135deg, purple.600 0%, purple.800 50%, blackAlpha.700 100%)"
                    opacity={0.85}
                    mixBlendMode="multiply"
                  />

                  {/* AI neural network visualization overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    opacity={0.2}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 400 300">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      {/* Neural network nodes */}
                      <circle cx="100" cy="75" r="3" fill="rgba(255,255,255,0.6)" />
                      <circle cx="200" cy="50" r="3" fill="rgba(255,255,255,0.6)" />
                      <circle cx="300" cy="100" r="3" fill="rgba(255,255,255,0.6)" />
                      <circle cx="150" cy="150" r="3" fill="rgba(255,255,255,0.6)" />
                      <circle cx="250" cy="200" r="3" fill="rgba(255,255,255,0.6)" />
                      {/* Connections */}
                      <line x1="100" y1="75" x2="200" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                      <line x1="200" y1="50" x2="300" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                      <line x1="150" y1="150" x2="250" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    </svg>
                  </Box>

                  {/* AI processing indicator */}
                  <Box
                    position="absolute"
                    top={4}
                    left={4}
                    bg="purple.500"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    Deep Learning
                  </Box>

                  {/* Real-time stats overlay */}
                  <VStack
                    position="absolute"
                    top={6}
                    right={6}
                    spacing={2}
                    align="end"
                  >
                    <Box
                      bg="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      px={3}
                      py={1}
                      borderRadius="md"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Text color="white" fontSize="xs" fontWeight="600">
                        Processing: 2.3ms
                      </Text>
                    </Box>
                    <Box
                      bg="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      px={3}
                      py={1}
                      borderRadius="md"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Text color="white" fontSize="xs" fontWeight="600">
                        Confidence: 97.8%
                      </Text>
                    </Box>
                  </VStack>

                  {/* Animated scan lines */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
                    sx={{
                      '@keyframes scan': {
                        '0%': { transform: 'translateY(-100%)' },
                        '100%': { transform: 'translateY(100%)' },
                      },
                      animation: 'scan 3s linear infinite',
                    }}
                  />
                  
                  {/* Premium border effect */}
                  <Box
                    position="absolute"
                    inset={0}
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="2xl"
                    pointerEvents="none"
                  />
                </Box>
              </AspectRatio>

              {/* Enhanced floating badge */}
              <Badge
                position="absolute"
                bottom={6}
                left={6}
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
                border="1px solid"
                borderColor="whiteAlpha.300"
              >
                1M+ Scans Analyzed Daily
              </Badge>
            </Box>
          </FallInPlace>

          {/* Text Content - Right */}
          <FallInPlace delay={0.4}>
            <VStack align="start" spacing={6}>
              <Badge
                colorScheme="purple"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Artificial Intelligence
              </Badge>
              
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                lineHeight="shorter"
                fontWeight="bold"
              >
                AI That Sees What
                <br />
                <Text as="span" bgGradient="linear(to-r, purple.500, pink.500)" bgClip="text">
                  Humans Can't
                </Text>
              </Heading>

              <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                Our deep learning algorithms have been trained on over 10 million medical images,
                detecting subtle patterns and anomalies invisible to the human eye. From early
                cancer detection to cardiovascular risk assessment, our AI provides clinicians
                with actionable insights in seconds.
              </Text>

              <VStack align="start" spacing={4} pt={4}>
                {[
                  {
                    icon: FaBrain,
                    title: '10M+ Training Images',
                    description: 'Vast dataset for superior pattern recognition',
                  },
                  {
                    icon: FiClock,
                    title: 'Real-Time Analysis',
                    description: 'Results in seconds, not hours or days',
                  },
                  {
                    icon: FiTrendingUp,
                    title: 'Continuous Learning',
                    description: 'AI improves with every diagnosis made',
                  },
                ].map((feature, index) => (
                  <HStack key={index} spacing={4} align="start">
                    <Box
                      p={2}
                      bg="purple.50"
                      _dark={{ bg: 'purple.900' }}
                      borderRadius="lg"
                      mt={1}
                    >
                      <Icon as={feature.icon} boxSize={5} color="purple.500" />
                    </Box>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="600" fontSize="md">
                        {feature.title}
                      </Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                        {feature.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>

              <Button
                as="a"
                href="/solutions/diagnostics"
                size="lg"
                colorScheme="purple"
                rightIcon={<FiArrowRight />}
                mt={4}
              >
                Discover AI Diagnostics
              </Button>
            </VStack>
          </FallInPlace>
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Story Section 3: Connected Care (Image Right)
const StorySection3 = () => {
  return (
    <Section py={24}>
      <Container maxW="container.2xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
          {/* Text Content - Left */}
          <FallInPlace delay={0.2}>
            <VStack align="start" spacing={6}>
              <Badge
                colorScheme="accent"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Digital Health
              </Badge>
              
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                lineHeight="shorter"
                fontWeight="bold"
              >
                Connected Care for
                <br />
                <Text as="span" bgGradient="linear(to-r, accent.500, brand.500)" bgClip="text">
                  Better Outcomes
                </Text>
              </Heading>

              <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                Our integrated digital health platform connects patients, providers, and devices
                in a seamless ecosystem. Remote monitoring, predictive analytics, and personalized
                care plans ensure patients receive the right intervention at the right time,
                reducing readmissions by 58%.
              </Text>

              <VStack align="start" spacing={4} pt={4}>
                {[
                  {
                    icon: FiActivity,
                    title: '24/7 Monitoring',
                    description: 'Continuous vital signs and health metrics tracking',
                  },
                  {
                    icon: FiBarChart2,
                    title: 'Predictive Analytics',
                    description: 'Early warning system for potential complications',
                  },
                  {
                    icon: FiHeart,
                    title: '58% Fewer Readmissions',
                    description: 'Proven reduction in hospital readmissions',
                  },
                ].map((feature, index) => (
                  <HStack key={index} spacing={4} align="start">
                    <Box
                      p={2}
                      bg="accent.50"
                      _dark={{ bg: 'accent.900' }}
                      borderRadius="lg"
                      mt={1}
                    >
                      <Icon as={feature.icon} boxSize={5} color="accent.500" />
                    </Box>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="600" fontSize="md">
                        {feature.title}
                      </Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                        {feature.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>

              <Button
                as="a"
                href="/solutions/digital-health"
                size="lg"
                colorScheme="accent"
                rightIcon={<FiArrowRight />}
                mt={4}
              >
                Learn About Digital Health
              </Button>
            </VStack>
          </FallInPlace>

          {/* Image - Right */}
          <FallInPlace delay={0.4}>
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              _hover={{
                transform: 'scale(1.02)',
                transition: 'transform 0.4s ease',
              }}
            >
              <AspectRatio ratio={4 / 3}>
                <Box
                  position="relative"
                  overflow="hidden"
                  backgroundImage="url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=900&fit=crop&q=80')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                >
                  {/* Connected care overlay theme */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(135deg, accent.600 0%, accent.800 30%, blackAlpha.600 100%)"
                    opacity={0.8}
                    mixBlendMode="multiply"
                  />

                  {/* Digital network visualization */}
                  <Box
                    position="absolute"
                    inset={0}
                    opacity={0.3}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 400 300">
                      {/* Network nodes representing connected devices */}
                      <circle cx="80" cy="60" r="4" fill="rgba(255,255,255,0.8)" />
                      <circle cx="160" cy="40" r="4" fill="rgba(255,255,255,0.8)" />
                      <circle cx="240" cy="80" r="4" fill="rgba(255,255,255,0.8)" />
                      <circle cx="320" cy="60" r="4" fill="rgba(255,255,255,0.8)" />
                      <circle cx="120" cy="140" r="4" fill="rgba(255,255,255,0.8)" />
                      <circle cx="200" cy="180" r="6" fill="rgba(0,194,168,0.9)" />
                      <circle cx="280" cy="160" r="4" fill="rgba(255,255,255,0.8)" />
                      <circle cx="100" cy="220" r="4" fill="rgba(255,255,255,0.8)" />
                      <circle cx="300" cy="240" r="4" fill="rgba(255,255,255,0.8)" />
                      
                      {/* Connection lines */}
                      <line x1="200" y1="180" x2="160" y2="40" stroke="rgba(0,194,168,0.5)" strokeWidth="2" />
                      <line x1="200" y1="180" x2="240" y2="80" stroke="rgba(0,194,168,0.5)" strokeWidth="2" />
                      <line x1="200" y1="180" x2="120" y2="140" stroke="rgba(0,194,168,0.5)" strokeWidth="2" />
                      <line x1="200" y1="180" x2="280" y2="160" stroke="rgba(0,194,168,0.5)" strokeWidth="2" />
                      <line x1="80" y1="60" x2="160" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                      <line x1="240" y1="80" x2="320" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    </svg>
                  </Box>

                  {/* Live status indicators */}
                  <VStack
                    position="absolute"
                    top={4}
                    left={4}
                    spacing={2}
                    align="start"
                  >
                    <Box
                      bg="accent.500"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      Live Monitoring
                    </Box>
                    <HStack spacing={2}>
                      <Box
                        w={2}
                        h={2}
                        borderRadius="full"
                        bg="green.400"
                        sx={{
                          '@keyframes blink': {
                            '0%, 100%': { opacity: 1 },
                            '50%': { opacity: 0.3 },
                          },
                          animation: 'blink 2s ease-in-out infinite',
                        }}
                      />
                      <Text color="white" fontSize="xs" fontWeight="500">
                        2,847 Patients Online
                      </Text>
                    </HStack>
                  </VStack>

                  {/* Health metrics overlay */}
                  <VStack
                    position="absolute"
                    bottom={6}
                    right={6}
                    spacing={2}
                    align="end"
                  >
                    <Box
                      bg="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      px={3}
                      py={2}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <VStack spacing={1} align="center">
                        <Text color="white" fontSize="xs" fontWeight="600">
                          Readmissions
                        </Text>
                        <Text color="green.300" fontSize="lg" fontWeight="700">
                          ↓58%
                        </Text>
                      </VStack>
                    </Box>
                    <Box
                      bg="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      px={3}
                      py={1}
                      borderRadius="md"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Text color="white" fontSize="xs" fontWeight="600">
                        Response Time: 1.2s
                      </Text>
                    </Box>
                  </VStack>

                  {/* Pulse animation for heart rate */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    {[0, 1, 2].map((i) => (
                      <Box
                        key={i}
                        position="absolute"
                        w="120px"
                        h="120px"
                        borderRadius="full"
                        border="2px solid"
                        borderColor="whiteAlpha.300"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        sx={{
                          '@keyframes pulse': {
                            '0%': {
                              transform: 'translate(-50%, -50%) scale(0.8)',
                              opacity: 0.8,
                            },
                            '100%': {
                              transform: 'translate(-50%, -50%) scale(1.8)',
                              opacity: 0,
                            },
                          },
                          animation: `pulse 3s ease-out infinite`,
                          animationDelay: `${i * 1}s`,
                        }}
                      />
                    ))}
                  </Box>
                  
                  {/* Premium border effect */}
                  <Box
                    position="absolute"
                    inset={0}
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="2xl"
                    pointerEvents="none"
                  />
                </Box>
              </AspectRatio>

              {/* Enhanced floating badge */}
              <Badge
                position="absolute"
                top={6}
                right={6}
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
                border="1px solid"
                borderColor="whiteAlpha.300"
              >
                2.8M+ Remote Consultations
              </Badge>
            </Box>
          </FallInPlace>
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Solutions Showcase
const SolutionsShowcase = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  
  const solutions = [
    {
      icon: FaStethoscope,
      title: 'Medical Devices',
      description: 'State-of-the-art surgical instruments, implants, and therapeutic devices designed for precision and patient safety.',
      features: ['FDA Approved', 'ISO Certified', 'Clinical Proven'],
      color: 'brand',
      href: '/solutions/medical-devices',
    },
    {
      icon: FaMicroscope,
      title: 'Diagnostic Systems',
      description: 'Advanced imaging platforms and laboratory systems delivering rapid, accurate results for informed clinical decisions.',
      features: ['Real-time Analysis', 'AI-Enhanced', 'Cloud Connected'],
      color: 'accent',
      href: '/solutions/diagnostics',
    },
    {
      icon: FaRobot,
      title: 'AI & Robotics',
      description: 'Intelligent surgical systems and AI-powered analytics transforming precision medicine and surgical outcomes.',
      features: ['Autonomous Systems', 'Deep Learning', '97% Accuracy'],
      color: 'purple',
      href: '/solutions/ai-robotics',
    },
    {
      icon: FaChartLine,
      title: 'Digital Health',
      description: 'Connected care platforms enabling remote monitoring, telemedicine, and personalized patient experiences at scale.',
      features: ['Remote Monitoring', 'Predictive Analytics', 'HIPAA Compliant'],
      color: 'pink',
      href: '/solutions/digital-health',
    },
  ]

  return (
    <Section py={{ base: 16, md: 20 }} bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <Container maxW="container.2xl">
        <FallInPlace delay={0.1}>
          <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
            <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="full">
              Our Solutions
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="3xl">
              Comprehensive Medical Technology Portfolio
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" _dark={{ color: 'gray.400' }} maxW="2xl">
              From advanced diagnostics to intelligent surgical systems, our integrated solutions
              cover the entire spectrum of modern healthcare delivery.
            </Text>
          </VStack>
        </FallInPlace>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
          {solutions.map((solution, index) => (
            <FallInPlace key={index} delay={0.2 + index * 0.1}>
              <Box
                as="a"
                href={solution.href}
                p={{ base: 6, md: 8 }}
                bg={cardBg}
                borderRadius="2xl"
                border="1px"
                borderColor="gray.200"
                _dark={{ borderColor: 'gray.700' }}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-8px)',
                  shadow: '2xl',
                  borderColor: `${solution.color}.500`,
                  textDecoration: 'none',
                }}
                cursor="pointer"
                h="full"
                display="flex"
                flexDirection="column"
              >
                <HStack spacing={4} mb={6}>
                  <Box
                    p={4}
                    bg={`${solution.color}.50`}
                    _dark={{ bg: `${solution.color}.900` }}
                    borderRadius="xl"
                  >
                    <Icon as={solution.icon} boxSize={10} color={`${solution.color}.500`} />
                  </Box>
                  <Heading size="lg">{solution.title}</Heading>
                </HStack>

                <Text color="gray.600" _dark={{ color: 'gray.400' }} mb={6} flex={1} lineHeight="tall">
                  {solution.description}
                </Text>

                <HStack spacing={2} mb={6} flexWrap="wrap">
                  {solution.features.map((feature, i) => (
                    <Badge key={i} colorScheme={solution.color} fontSize="xs" px={2} py={1}>
                      {feature}
                    </Badge>
                  ))}
                </HStack>

                <Button
                  variant="ghost"
                  colorScheme={solution.color}
                  rightIcon={<FiArrowRight />}
                  alignSelf="flex-start"
                >
                  Learn More
                </Button>
              </Box>
            </FallInPlace>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Real-World Impact
const ImpactSection = () => {
  const impacts = [
    {
      icon: FiTrendingUp,
      stat: '97.2%',
      label: 'Diagnostic Accuracy',
      description: 'AI-powered systems achieve unprecedented accuracy in medical imaging analysis',
      color: 'brand',
    },
    {
      icon: FiClock,
      stat: '60%',
      label: 'Faster Procedures',
      description: 'Robotic-assisted surgeries reduce operation time while improving precision',
      color: 'accent',
    },
    {
      icon: FiTrendingDown,
      stat: '45%',
      label: 'Reduced Complications',
      description: 'Advanced monitoring systems detect issues early, preventing adverse events',
      color: 'purple',
    },
    {
      icon: FiDollarSign,
      stat: '$850M',
      label: 'Healthcare Savings',
      description: 'Efficiency improvements translate to significant cost reductions annually',
      color: 'pink',
    },
  ]

  return (
    <Section py={20}>
      <Container maxW="container.2xl">
        <FallInPlace delay={0.1}>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Badge colorScheme="pink" fontSize="sm" px={3} py={1} borderRadius="full">
              Measurable Results
            </Badge>
            <Heading size="2xl" maxW="3xl">
              Driving Real-World Healthcare Improvements
            </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.400' }} maxW="2xl">
              Our solutions deliver quantifiable benefits across clinical outcomes, operational
              efficiency, and patient satisfaction metrics.
            </Text>
          </VStack>
        </FallInPlace>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {impacts.map((impact, index) => (
            <FallInPlace key={index} delay={0.2 + index * 0.1}>
              <Box
                p={8}
                bg="white"
                _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
                borderRadius="2xl"
                border="1px"
                borderColor="gray.200"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                }}
                textAlign="center"
                h="full"
              >
                <Icon
                  as={impact.icon}
                  boxSize={10}
                  color={`${impact.color}.500`}
                  mb={4}
                />
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  color={`${impact.color}.600`}
                  _dark={{ color: `${impact.color}.400` }}
                  mb={2}
                >
                  {impact.stat}
                </Text>
                <Text fontSize="lg" fontWeight="600" mb={3}>
                  {impact.label}
                </Text>
                <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                  {impact.description}
                </Text>
              </Box>
            </FallInPlace>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Innovation & R&D
const InnovationSection = () => {
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Section py={20} bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <Container maxW="container.2xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          <FallInPlace delay={0.1}>
            <VStack align="start" spacing={6}>
              <Badge colorScheme="brand" fontSize="sm" px={3} py={1} borderRadius="full">
                Innovation & Research
              </Badge>
              <Heading size="2xl">
                Pioneering the Future of Medical Technology
              </Heading>
              <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                With 180+ patents and three world-class R&D facilities, we invest 28% of revenue
                into research and development. Our team of 300+ scientists and engineers collaborate
                with leading academic institutions to push the boundaries of what's possible in healthcare.
              </Text>

              <SimpleGrid columns={2} spacing={6} w="full" pt={4}>
                <Stat>
                  <StatNumber fontSize="3xl" color="brand.600" _dark={{ color: 'brand.400' }}>
                    180+
                  </StatNumber>
                  <StatLabel fontSize="md">Patents Filed</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber fontSize="3xl" color="accent.600" _dark={{ color: 'accent.400' }}>
                    75+
                  </StatNumber>
                  <StatLabel fontSize="md">Active Projects</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber fontSize="3xl" color="purple.600" _dark={{ color: 'purple.400' }}>
                    300+
                  </StatNumber>
                  <StatLabel fontSize="md">Researchers</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber fontSize="3xl" color="pink.600" _dark={{ color: 'pink.400' }}>
                    28%
                  </StatNumber>
                  <StatLabel fontSize="md">R&D Investment</StatLabel>
                </Stat>
              </SimpleGrid>

              <Button
                as="a"
                href="/innovation/rnd"
                size="lg"
                colorScheme="brand"
                rightIcon={<FiArrowRight />}
                mt={4}
              >
                Explore Our Research
              </Button>
            </VStack>
          </FallInPlace>

          <FallInPlace delay={0.3}>
            <VStack spacing={6}>
              {[
                {
                  icon: FaBrain,
                  title: 'AI & Machine Learning',
                  description: '45 active projects in deep learning, computer vision, and predictive analytics',
                },
                {
                  icon: FaRobot,
                  title: 'Surgical Robotics',
                  description: '38 robotic systems in development with autonomous capabilities',
                },
                {
                  icon: FiLayers,
                  title: 'Advanced Materials',
                  description: 'Biocompatible materials and nano-coatings for next-gen implants',
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  p={6}
                  bg={cardBg}
                  borderRadius="xl"
                  border="1px"
                  borderColor="gray.200"
                  _dark={{ borderColor: 'gray.700' }}
                  w="full"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateX(8px)',
                    shadow: 'lg',
                  }}
                >
                  <HStack spacing={4} align="start">
                    <Icon as={item.icon} boxSize={6} color="brand.500" mt={1} />
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="600" fontSize="lg">
                        {item.title}
                      </Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                        {item.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </FallInPlace>
        </SimpleGrid>
      </Container>
    </Section>
  )
}

// Trusted By Section
const TrustedBySection = () => {
  const logos = [
    'Johns Hopkins Hospital',
    'Mayo Clinic',
    'Cleveland Clinic',
    'Massachusetts General',
    'Stanford Health',
    'UCSF Medical Center',
  ]

  return (
    <Section py={16}>
      <Container maxW="container.2xl">
        <FallInPlace delay={0.1}>
          <VStack spacing={8}>
            <Text
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="600"
              color="gray.500"
              letterSpacing="wider"
            >
              Trusted by Leading Healthcare Institutions
            </Text>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={8} w="full">
              <Box p={6} display="flex" alignItems="center" justifyContent="center" opacity={0.8} _hover={{ opacity: 1 }} transition="opacity 0.3s">
                <Text fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.300' }} textAlign="center">Johns Hopkins Hospital</Text>
              </Box>
              <Box p={6} display="flex" alignItems="center" justifyContent="center" opacity={0.8} _hover={{ opacity: 1 }} transition="opacity 0.3s">
                <Text fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.300' }} textAlign="center">Mayo Clinic</Text>
              </Box>
              <Box p={6} display="flex" alignItems="center" justifyContent="center" opacity={0.8} _hover={{ opacity: 1 }} transition="opacity 0.3s">
                <Text fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.300' }} textAlign="center">Cleveland Clinic</Text>
              </Box>
              <Box p={6} display="flex" alignItems="center" justifyContent="center" opacity={0.8} _hover={{ opacity: 1 }} transition="opacity 0.3s">
                <Text fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.300' }} textAlign="center">Massachusetts General</Text>
              </Box>
              <Box p={6} display="flex" alignItems="center" justifyContent="center" opacity={0.8} _hover={{ opacity: 1 }} transition="opacity 0.3s">
                <Text fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.300' }} textAlign="center">Stanford Health</Text>
              </Box>
              <Box p={6} display="flex" alignItems="center" justifyContent="center" opacity={0.8} _hover={{ opacity: 1 }} transition="opacity 0.3s">
                <Text fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.300' }} textAlign="center">UCSF Medical Center</Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </FallInPlace>
      </Container>
    </Section>
  )
}

// CTA Section
const CTASection = () => {
  return (
    <Section py={20}>
      <Container maxW="container.2xl">
        <FallInPlace delay={0.1}>
          <Box
            p={{ base: 12, md: 16 }}
            borderRadius="3xl"
            bgGradient="linear(to-br, brand.600, accent.500)"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              right="-20%"
              w="600px"
              h="600px"
              bg="whiteAlpha.200"
              borderRadius="full"
              filter="blur(100px)"
            />
            
            <VStack
              spacing={8}
              position="relative"
              zIndex={1}
              maxW="3xl"
              mx="auto"
              textAlign="center"
            >
              <Badge
                bg="whiteAlpha.200"
                color="white"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                backdropFilter="blur(10px)"
              >
                Transform Your Healthcare Delivery
              </Badge>
              
              <Heading
                as="h2"
                size="2xl"
                color="white"
                lineHeight="shorter"
              >
                Ready to Experience the Future of Medical Technology?
              </Heading>
              
              <Text
                fontSize="xl"
                color="whiteAlpha.900"
                maxW="2xl"
              >
                Join 500+ leading healthcare institutions worldwide. Schedule a personalized demo
                and discover how our innovative solutions can transform patient care at your facility.
              </Text>
              
              <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
                <Button
                  as="a"
                  href="/schedule-demo"
                  size="lg"
                  bg="white"
                  color="brand.600"
                  fontSize="lg"
                  px={10}
                  py={7}
                  rightIcon={<FiArrowRight />}
                  _hover={{
                    transform: 'translateY(-4px)',
                    shadow: '2xl',
                  }}
                  transition="all 0.3s"
                >
                  Schedule a Demo
                </Button>
                <Button
                  as="a"
                  href="/innovation/case-studies"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  fontSize="lg"
                  px={10}
                  py={7}
                  _hover={{
                    bg: 'whiteAlpha.200',
                  }}
                  transition="all 0.3s"
                >
                  View Case Studies
                </Button>
              </HStack>
              
              <HStack spacing={8} pt={4} color="whiteAlpha.900" fontSize="sm">
                <HStack>
                  <Icon as={FiCheckCircle} />
                  <Text>No Credit Card Required</Text>
                </HStack>
                <HStack>
                  <Icon as={FiCheckCircle} />
                  <Text>Free Consultation</Text>
                </HStack>
                <HStack>
                  <Icon as={FiCheckCircle} />
                  <Text>24/7 Support</Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </FallInPlace>
      </Container>
    </Section>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)
        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="7xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Custom enterprise pricing available. Contact our sales team for volume licensing and implementation support.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

// Interactive Features Showcase Section
const FeaturesShowcaseSection = () => {
  const features = [
    {
      id: 1,
      icon: FaRobot,
      title: 'Innovation in Action',
      description:
        'Witness surgical precision redefined through AI-powered robotics that combine machine learning with human expertise, delivering unprecedented accuracy in complex medical procedures.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&h=1000&fit=crop&q=90',
      stats: { value: '99.8%', label: 'Precision Rate' },
    },
    {
      id: 2,
      icon: FaBrain,
      title: 'Technology That Transforms Care',
      description:
        'Experience the future of diagnostics with our AI-powered imaging systems that detect conditions 10x faster than traditional methods, revolutionizing patient outcomes worldwide.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&h=1000&fit=crop&q=90',
      stats: { value: '10x', label: 'Faster Diagnosis' },
    },
    {
      id: 3,
      icon: FaChartLine,
      title: 'Data-Driven Patient Outcomes',
      description:
        'Harness the power of predictive analytics and real-time monitoring to anticipate patient needs, optimize treatments, and reduce hospital readmissions by 58%.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=1000&fit=crop&q=90',
      stats: { value: '58%', label: 'Reduced Readmissions' },
    },
  ]

  return (
    <Box py={{ base: 20, md: 32, lg: 40 }} bg="white" _dark={{ bg: 'gray.900' }}>
      {/* Header Section with Container */}
      <Container maxW="8xl" mb={{ base: 16, md: 20, lg: 28 }}>
        <FallInPlace delay={0.1}>
          <VStack spacing={{ base: 4, md: 6 }} textAlign="center" px={{ base: 4, md: 8 }}>
            <Badge 
              colorScheme="blue" 
              fontSize={{ base: 'xs', md: 'sm' }}
              px={{ base: 4, md: 6 }} 
              py={{ base: 2, md: 3 }}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="wider"
              fontWeight="700"
            >
              Featured Innovation
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl', lg: '7xl' }}
              fontWeight="800"
              lineHeight="1.1"
              maxW="5xl"
              bgGradient="linear(to-r, gray.900, gray.600)"
              bgClip="text"
              _dark={{
                bgGradient: "linear(to-r, white, gray.300)",
              }}
            >
              Pioneering the Future of Medicine
            </Heading>
            <Text 
              fontSize={{ base: 'xl', md: '2xl' }} 
              color="gray.600" 
              _dark={{ color: 'gray.400' }} 
              maxW="3xl"
              lineHeight="1.6"
              fontWeight="400"
            >
              Three revolutionary technologies reshaping healthcare delivery and patient outcomes across the globe
            </Text>
          </VStack>
        </FallInPlace>
      </Container>

      {/* Full Width Features */}
      <VStack spacing={{ base: 12, md: 16, lg: 20 }} w="full">
        {features.map((feature, index) => (
          <FallInPlace key={feature.id} delay={0.2 + index * 0.15}>
            <Box
              w="full"
              borderRadius={0}
                overflow="hidden"
                bg="white"
                _dark={{ 
                  bg: 'gray.800',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5)',
                  borderColor: 'gray.700'
                }}
                boxShadow="0 20px 50px -15px rgba(0, 0, 0, 0.12)"
                border="1px"
                borderColor="gray.100"
                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: 'translateY(-12px)',
                  boxShadow: '0 35px 80px -15px rgba(0, 123, 255, 0.25)',
                  _dark: { boxShadow: '0 35px 80px -15px rgba(0, 123, 255, 0.4)' },
                }}
              >
                <Grid
                  templateColumns={{ 
                    base: '1fr', 
                    lg: index % 2 === 0 ? '1.4fr 1fr' : '1fr 1.4fr' 
                  }}
                  minH={{ base: 'auto', lg: '500px', xl: '550px' }}
                  gap={0}
                >
                  {/* Image Section - Larger and More Dominant */}
                  <Box
                    position="relative"
                    overflow="hidden"
                    order={{ base: 1, lg: index % 2 === 0 ? 1 : 2 }}
                    minH={{ base: '300px', md: '380px', lg: '500px', xl: '550px' }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                      transition="transform 1s cubic-bezier(0.4, 0, 0.2, 1)"
                      _hover={{ transform: 'scale(1.08)' }}
                    />
                    
                    {/* Sophisticated Gradient Overlay */}
                    <Box
                      position="absolute"
                      inset="0"
                      bgGradient={
                        index % 2 === 0 
                          ? "linear(to-r, transparent 0%, rgba(0,123,255,0.08) 70%, rgba(0,123,255,0.15) 100%)"
                          : "linear(to-l, transparent 0%, rgba(0,123,255,0.08) 70%, rgba(0,123,255,0.15) 100%)"
                      }
                      _dark={{
                        bgGradient: index % 2 === 0 
                          ? "linear(to-r, transparent 0%, rgba(0,123,255,0.15) 70%, rgba(0,123,255,0.25) 100%)"
                          : "linear(to-l, transparent 0%, rgba(0,123,255,0.15) 70%, rgba(0,123,255,0.25) 100%)"
                      }}
                    />
                    
                    {/* Floating Stats Badge - Enhanced */}
                    <Box
                      position="absolute"
                      top={{ base: 6, md: 10 }}
                      right={{ base: 6, md: 10 }}
                      bg="whiteAlpha.950"
                      _dark={{ bg: 'rgba(0, 0, 0, 0.85)' }}
                      backdropFilter="blur(30px)"
                      borderRadius="3xl"
                      p={{ base: 5, md: 8 }}
                      border="1px"
                      borderColor="whiteAlpha.300"
                      boxShadow="0 15px 40px rgba(0, 0, 0, 0.15)"
                      transition="all 0.4s ease"
                      _hover={{
                        transform: 'scale(1.05)',
                        boxShadow: '0 20px 50px rgba(0, 123, 255, 0.3)',
                      }}
                    >
                      <VStack spacing={2}>
                        <Text
                          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                          fontWeight="900"
                          bgGradient="linear(to-br, brand.500, brand.600)"
                          bgClip="text"
                          lineHeight="1"
                        >
                          {feature.stats.value}
                        </Text>
                        <Text
                          fontSize={{ base: 'xs', md: 'sm' }}
                          color="gray.700"
                          _dark={{ color: 'gray.300' }}
                          fontWeight="700"
                          textAlign="center"
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          {feature.stats.label}
                        </Text>
                      </VStack>
                    </Box>
                  </Box>

                  {/* Content Section - Clean & Modern */}
                  <Flex
                    direction="column"
                    justify="center"
                    p={{ base: 8, md: 12, lg: 16, xl: 20 }}
                    order={{ base: 2, lg: index % 2 === 0 ? 2 : 1 }}
                    bg="white"
                    _dark={{ bg: 'gray.800' }}
                  >
                    <VStack 
                      spacing={{ base: 6, md: 8 }}
                      align={{ base: 'center', lg: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
                      textAlign={{ base: 'center', lg: index % 2 === 0 ? 'left' : 'right' }}
                      maxW="xl"
                      mx={{ base: 'auto', lg: index % 2 === 0 ? '0' : 'auto' }}
                    >
                      {/* Icon - Elegant Circle */}
                      <Box
                        p={{ base: 5, md: 6 }}
                        bg="brand.50"
                        _dark={{ bg: 'rgba(0, 123, 255, 0.1)', borderColor: 'brand.700' }}
                        borderRadius="3xl"
                        border="1px"
                        borderColor="brand.100"
                        transition="all 0.3s ease"
                        _hover={{
                          transform: 'rotate(5deg) scale(1.05)',
                          bg: 'brand.100',
                          _dark: { bg: 'rgba(0, 123, 255, 0.2)' }
                        }}
                      >
                        <Icon 
                          as={feature.icon} 
                          boxSize={{ base: 10, md: 12 }}
                          color="brand.500" 
                        />
                      </Box>

                      {/* Title - Bold & Impactful */}
                      <Heading
                        as="h3"
                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                        fontWeight="800"
                        lineHeight="1.2"
                        color="gray.900"
                        _dark={{ color: 'white' }}
                      >
                        {feature.title}
                      </Heading>

                      {/* Description - Clear & Readable */}
                      <Text
                        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                        color="gray.600"
                        _dark={{ color: 'gray.400' }}
                        lineHeight="1.7"
                        fontWeight="400"
                      >
                        {feature.description}
                      </Text>

                      {/* CTA Button - Subtle & Modern */}
                      <Button
                        size="lg"
                        colorScheme="brand"
                        variant="ghost"
                        rightIcon={<FiArrowRight />}
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight="700"
                        px={0}
                        mt={4}
                        _hover={{
                          bg: 'transparent',
                          color: 'brand.600',
                          transform: index % 2 === 0 ? 'translateX(12px)' : 'translateX(-12px)',
                        }}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      >
                        Explore Feature
                      </Button>
                    </VStack>
                  </Flex>
                </Grid>
              </Box>
            </FallInPlace>
          ))}
        </VStack>
    </Box>
  )
}

export default function Home() {
  // Latest blog posts - update this when adding new posts
  const latestPosts = [
    {
      slug: 'ai-transforming-medical-diagnostics',
      title: 'How AI is Transforming Medical Diagnostics in 2025',
      description: 'Explore the revolutionary impact of artificial intelligence on medical diagnostics, from radiology to pathology, and how it\'s improving patient outcomes.',
      date: '2025-11-10',
      author: 'Dr. Sarah Chen',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=630&fit=crop&q=90',
    },
    {
      slug: 'future-of-robotic-surgery',
      title: 'The Future of Robotic Surgery: Beyond the Operating Room',
      description: 'Discover how next-generation surgical robots are expanding possibilities in minimally invasive procedures and changing the landscape of modern surgery.',
      date: '2025-11-05',
      author: 'Dr. Michael Rodriguez',
      category: 'Robotics',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop&q=90',
    },
    {
      slug: 'remote-patient-monitoring-revolution',
      title: 'The Remote Patient Monitoring Revolution: Healthcare Beyond Hospital Walls',
      description: 'How remote patient monitoring technology is transforming chronic disease management and reducing hospital readmissions while improving quality of life.',
      date: '2025-10-28',
      author: 'Emily Thompson, RN',
      category: 'Digital Health',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=630&fit=crop&q=90',
    },
  ]

  return (
    <Box>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <FeaturesShowcaseSection />
      <StorySection1 />
      <StorySection2 />
      <StorySection3 />
      <SolutionsShowcase />
      <ImpactSection />
      <InnovationSection />
      <TestimonialsSection />
      <TrustedBySection />
      <LatestBlogClient posts={latestPosts} />
      <CTASection />
      <FaqSection />
    </Box>
  )
}
