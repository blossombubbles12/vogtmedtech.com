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
import type { NextPage } from 'next'
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
import { Hero, AnimatedHero } from '#components/hero'
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

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <StorySection1 />
      <StorySection2 />
      <StorySection3 />
      <SolutionsShowcase />
      <ImpactSection />
      <InnovationSection />
      <TestimonialsSection />
      <TrustedBySection />
      <CTASection />
      <FaqSection />
    </Box>
  )
}

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
      <Container maxW="7xl">
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
    <Section py={20}>
      <Container maxW="7xl">
        <FallInPlace delay={0.1}>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Badge colorScheme="accent" fontSize="sm" px={3} py={1} borderRadius="full">
              Why Choose VogtMedTech
            </Badge>
            <Heading size="2xl" maxW="3xl">
              Excellence in Every Innovation
            </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.400' }} maxW="2xl">
              Combining cutting-edge technology with decades of medical expertise to deliver
              solutions that exceed the highest industry standards.
            </Text>
          </VStack>
        </FallInPlace>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {benefits.map((benefit, index) => (
            <FallInPlace key={index} delay={0.2 + index * 0.1}>
                <Box
                  p={10}
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
                  <HStack spacing={4} align="start">
                    <Box
                      p={4}
                      bg={`${benefit.color}.50`}
                      borderRadius="xl"
                      _dark={{ bg: `${benefit.color}.900` }}
                    >
                      <Icon as={benefit.icon} boxSize={8} color={`${benefit.color}.500`} />
                    </Box>
                    <VStack align="start" spacing={3} flex={1}>
                      <Heading size="md">{benefit.title}</Heading>
                      <Text
                        color="gray.600"
                        lineHeight="tall"
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
    <Section py={24}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
          {/* Text Content - Left */}
          <FallInPlace delay={0.2}>
            <VStack align="start" spacing={6}>
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
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                lineHeight="shorter"
                fontWeight="bold"
              >
                Redefining Surgical
                <br />
                <Text as="span" bgGradient="linear(to-r, brand.500, accent.500)" bgClip="text">
                  Precision & Safety
                </Text>
              </Heading>

              <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                Our robotic-assisted surgical systems combine sub-millimeter precision with
                AI-powered guidance, enabling surgeons to perform complex procedures with
                unprecedented accuracy. Real-time imaging and haptic feedback create a seamless
                extension of the surgeon's capabilities.
              </Text>

              <VStack align="start" spacing={4} pt={4}>
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
                  <HStack key={index} spacing={4} align="start">
                    <Box
                      p={2}
                      bg="brand.50"
                      _dark={{ bg: 'brand.900' }}
                      borderRadius="lg"
                      mt={1}
                    >
                      <Icon as={feature.icon} boxSize={5} color="brand.500" />
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
                href="/solutions/ai-robotics"
                size="lg"
                colorScheme="brand"
                rightIcon={<FiArrowRight />}
                mt={4}
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
              _hover={{
                transform: 'scale(1.02)',
                transition: 'transform 0.4s ease',
              }}
            >
              <AspectRatio ratio={4 / 3}>
                <Box
                  bg="gray.200"
                  _dark={{ bg: 'gray.700' }}
                  position="relative"
                  overflow="hidden"
                >
                  {/* Placeholder gradient overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(135deg, brand.500, accent.500)"
                    opacity={0.9}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack spacing={4}>
                      <Icon as={FaRobot} boxSize={20} color="white" opacity={0.9} />
                      <Text color="white" fontSize="2xl" fontWeight="bold">
                        Surgical Robotics
                      </Text>
                    </VStack>
                  </Box>
                  
                  {/* Premium border effect */}
                  <Box
                    position="absolute"
                    inset={0}
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    borderRadius="2xl"
                    pointerEvents="none"
                  />
                </Box>
              </AspectRatio>

              {/* Floating badge */}
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
              >
                8,000+ Procedures Performed
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
      <Container maxW="7xl">
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
                  bg="gray.200"
                  _dark={{ bg: 'gray.700' }}
                  position="relative"
                  overflow="hidden"
                >
                  {/* Placeholder gradient overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(135deg, purple.500, pink.500)"
                    opacity={0.9}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack spacing={4}>
                      <Icon as={FaBrain} boxSize={20} color="white" opacity={0.9} />
                      <Text color="white" fontSize="2xl" fontWeight="bold">
                        AI Diagnostics
                      </Text>
                    </VStack>
                  </Box>
                  
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
                    borderColor="whiteAlpha.300"
                    borderRadius="2xl"
                    pointerEvents="none"
                  />
                </Box>
              </AspectRatio>

              {/* Floating badge */}
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
              >
                97.2% Diagnostic Accuracy
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
      <Container maxW="7xl">
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
                  bg="gray.200"
                  _dark={{ bg: 'gray.700' }}
                  position="relative"
                  overflow="hidden"
                >
                  {/* Placeholder gradient overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(135deg, accent.500, brand.500)"
                    opacity={0.9}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack spacing={4}>
                      <Icon as={FiActivity} boxSize={20} color="white" opacity={0.9} />
                      <Text color="white" fontSize="2xl" fontWeight="bold">
                        Connected Care
                      </Text>
                    </VStack>
                  </Box>
                  
                  {/* Pulse animation */}
                  <Box
                    position="absolute"
                    inset={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {[0, 1, 2].map((i) => (
                      <Box
                        key={i}
                        position="absolute"
                        w="200px"
                        h="200px"
                        borderRadius="full"
                        border="2px solid"
                        borderColor="whiteAlpha.400"
                        sx={{
                          '@keyframes pulse': {
                            '0%': {
                              transform: 'scale(0.8)',
                              opacity: 0.8,
                            },
                            '100%': {
                              transform: 'scale(1.5)',
                              opacity: 0,
                            },
                          },
                          animation: `pulse 2s ease-out infinite`,
                          animationDelay: `${i * 0.6}s`,
                        }}
                      />
                    ))}
                  </Box>
                  
                  {/* Premium border effect */}
                  <Box
                    position="absolute"
                    inset={0}
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    borderRadius="2xl"
                    pointerEvents="none"
                  />
                </Box>
              </AspectRatio>

              {/* Floating badge */}
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
              >
                500K+ Active Patients
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
    <Section py={20} bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <Container maxW="7xl">
        <FallInPlace delay={0.1}>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="full">
              Our Solutions
            </Badge>
            <Heading size="2xl" maxW="3xl">
              Comprehensive Medical Technology Portfolio
            </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.400' }} maxW="2xl">
              From advanced diagnostics to intelligent surgical systems, our integrated solutions
              cover the entire spectrum of modern healthcare delivery.
            </Text>
          </VStack>
        </FallInPlace>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {solutions.map((solution, index) => (
            <FallInPlace key={index} delay={0.2 + index * 0.1}>
              <Box
                as="a"
                href={solution.href}
                p={8}
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
      <Container maxW="7xl">
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
      <Container maxW="7xl">
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
      <Container maxW="7xl">
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
              {logos.map((logo, index) => (
                <Box
                  key={index}
                  p={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity={0.6}
                  _hover={{ opacity: 1 }}
                  transition="opacity 0.3s"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="600"
                    color="gray.600"
                    _dark={{ color: 'gray.400' }}
                    textAlign="center"
                  >
                    {logo}
                  </Text>
                </Box>
              ))}
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
      <Container maxW="7xl">
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
                  href="/contact"
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

export default Home
