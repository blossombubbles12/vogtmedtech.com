'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FiActivity,
  FiAward,
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiHeart,
  FiLifeBuoy,
  FiShield,
  FiSliders,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function MedicalDevicesPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')
  const gradientBorder = useColorModeValue(
    'linear(to-r, brand.400, accent.400)',
    'linear(to-r, brand.600, accent.600)'
  )

  const stats = [
    {
      value: '500+',
      label: 'Healthcare Institutions',
      icon: FiGlobe,
      color: 'brand.500',
    },
    {
      value: '45',
      label: 'Countries Worldwide',
      icon: FiUsers,
      color: 'accent.500',
    },
    {
      value: '2M+',
      label: 'Patients Impacted',
      icon: FiHeart,
      color: 'purple.500',
    },
    {
      value: '99.8%',
      label: 'Uptime Reliability',
      icon: FiTrendingUp,
      color: 'pink.500',
    },
  ]

  const features = [
    {
      icon: FiSliders,
      title: 'Precision Engineering',
      description: 'Sub-millimeter accuracy with aerospace-grade components ensuring reliable performance in critical procedures.',
      stat: '<0.1mm',
      statLabel: 'Accuracy',
    },
    {
      icon: FiCpu,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms deliver real-time insights, predictive alerts, and clinical decision support.',
      stat: '24/7',
      statLabel: 'Monitoring',
    },
    {
      icon: FiShield,
      title: 'Patient Safety First',
      description: 'Multi-layer fail-safes, biocompatible materials, and redundant systems exceed international safety standards.',
      stat: 'ISO 13485',
      statLabel: 'Certified',
    },
    {
      icon: FiZap,
      title: 'Clinical Efficiency',
      description: 'Intuitive interfaces and streamlined workflows reduce procedure times while improving patient outcomes.',
      stat: '40%',
      statLabel: 'Time Saved',
    },
  ]

  const products = [
    {
      id: 'sentinel-x',
      name: 'Sentinel-X™',
      fullName: 'Sentinel-X™ Patient Monitor',
      category: 'Critical Care Monitoring',
      tagline: 'Intelligence Meets Vigilance',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=600&fit=crop&q=90',
      description: 'The future of critical care monitoring. Sentinel-X combines AI-powered predictive analytics with continuous multi-parameter monitoring to give clinicians the insights they need before emergencies occur.',
      longDescription: 'Designed for high-acuity environments, Sentinel-X represents a paradigm shift in patient monitoring. Our proprietary AI engine analyzes over 100 clinical parameters in real-time, identifying subtle patterns that may indicate patient deterioration hours before traditional alarms would trigger.',
      features: [
        'Continuous 12-lead ECG with arrhythmia detection',
        'AI early warning system with 94% sensitivity',
        'Central monitoring station for up to 64 beds',
        'HL7/FHIR EMR integration',
        'Wireless telemetry with 500m range',
        'Battery backup: 8+ hours',
      ],
      specs: [
        { label: 'Display', value: '15.6" HD Touchscreen' },
        { label: 'Parameters', value: 'ECG, SpO2, NIBP, IBP, Temp, CO2' },
        { label: 'Certifications', value: 'FDA 510(k), CE Mark, Health Canada' },
      ],
    },
    {
      id: 'cardio-pulse',
      name: 'CardioPulse™',
      fullName: 'CardioPulse™ Ablation System',
      category: 'Cardiac Electrophysiology',
      tagline: 'Precision That Saves Hearts',
      image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=600&fit=crop&q=90',
      description: 'Revolutionary catheter ablation technology that combines high-density 3D mapping with contact force sensing to treat cardiac arrhythmias with unparalleled precision and safety.',
      longDescription: 'CardioPulse transforms cardiac ablation procedures with real-time 3D electroanatomical mapping and advanced catheter navigation. Surgeons gain unprecedented visibility and control, reducing procedure times while improving first-pass success rates.',
      features: [
        'Ultra-high-density mapping (>20,000 points)',
        'Real-time contact force sensing (5-40g)',
        'AI-guided lesion assessment',
        'Magnetic catheter navigation',
        'Temperature-controlled RF delivery',
        'Integrated imaging fusion (CT/MRI)',
      ],
      specs: [
        { label: 'Mapping Accuracy', value: '<1mm spatial resolution' },
        { label: 'Procedure Time', value: '30% reduction vs. conventional' },
        { label: 'Certifications', value: 'FDA PMA, CE Mark' },
      ],
    },
    {
      id: 'neuro-guide',
      name: 'NeuroGuide™',
      fullName: 'NeuroGuide™ Surgical Robot',
      category: 'Robotic-Assisted Surgery',
      tagline: 'The Future of Neurosurgery',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop&q=90',
      description: 'A breakthrough robotic system for minimally invasive neurosurgery. NeuroGuide augments surgeon capabilities with sub-millimeter precision, 3D visualization, and intelligent tremor compensation.',
      longDescription: 'NeuroGuide represents the pinnacle of surgical robotics for neurosurgery. With seven degrees of freedom, haptic feedback, and AI-powered surgical planning, it enables procedures previously thought impossible through minimally invasive approaches.',
      features: [
        'Sub-millimeter positioning accuracy',
        'Active tremor filtration and scaling',
        '4K 3D HD stereoscopic vision',
        'Intuitive haptic feedback',
        'AI surgical planning and navigation',
        'Compatible with standard OR equipment',
      ],
      specs: [
        { label: 'Accuracy', value: '±0.05mm positioning' },
        { label: 'Instruments', value: '50+ specialized micro-tools' },
        { label: 'Certifications', value: 'FDA Class II, CE Mark' },
      ],
    },
  ]

  const certifications = [
    {
      name: 'FDA Approved',
      description: 'Class II & III Medical Devices',
      icon: FiAward,
    },
    {
      name: 'CE Marked',
      description: 'European Medical Device Regulation',
      icon: FiShield,
    },
    {
      name: 'ISO 13485',
      description: 'Quality Management Systems',
      icon: FiCheckCircle,
    },
  ]

  return (
    <>
      <PageHeader
        title="Medical Devices"
        subtitle="Engineering the future of healthcare with intelligent, reliable, and life-saving medical technology. Our FDA-approved and CE-marked solutions empower clinicians worldwide to achieve superior patient outcomes."
        gradientColors={['brand.600', 'accent.500']}
      />

      {/* Stats Hero Section */}
      <Section py={{ base: 16, md: 20 }}>
        <Container maxW="container.2xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 10 }}>
            {stats.map((stat, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <VStack
                  spacing={4}
                  p={{ base: 6, md: 8 }}
                  bg={cardBg}
                  borderRadius="2xl"
                  border="2px"
                  borderColor={cardBorder}
                  position="relative"
                  overflow="hidden"
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                  transform: 'translateY(-8px)',
                  shadow: '2xl',
                  borderColor: stat.color,
                  _before: {
                    opacity: 1,
                  },
                  }}
                  _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bgGradient: `linear(to-r, ${stat.color}, ${stat.color})`,
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  }}
                >
                  <Icon as={stat.icon} boxSize={{ base: 8, md: 10 }} color={stat.color} />
                  <Text
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="bold"
                  bgGradient={`linear(to-r, ${stat.color}, ${stat.color})`}
                  bgClip="text"
                  lineHeight="1"
                  >
                  {stat.value}
                  </Text>
                  <Text
                  fontSize={{ base: 'xs', md: 'sm' }}
                  fontWeight="600"
                  color={mutedColor}
                  textAlign="center"
                  >
                  {stat.label}
                  </Text>
                </VStack>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Introduction Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.2xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <GridItem>
              <FallInPlace>
                <VStack align="start" spacing={8}>
                  <Box>
                    <Badge
                      colorScheme="brand"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={6}
                    >
                      World-Class Innovation
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Engineering Excellence{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, brand.600, accent.500)',
                          'linear(to-r, brand.300, accent.300)'
                        )}
                        bgClip="text"
                      >
                        That Saves Lives
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      Every Vogt MedTech device represents years of research, thousands of hours of 
                      clinical testing, and an unwavering commitment to improving patient care.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      From AI-powered monitoring systems to robotic surgical platforms, our medical 
                      devices set new standards for precision, safety, and clinical outcomes.
                    </Text>
                  </Box>
                  <HStack spacing={4}>
                    <Button
                      as={Link}
                      href="/contact"
                      size="lg"
                      colorScheme="brand"
                      rightIcon={<FaArrowRight />}
                    >
                      Schedule a Demo
                    </Button>
                    <Button
                      as={Link}
                      href="#products"
                      size="lg"
                      variant="outline"
                      leftIcon={<FaPlay />}
                    >
                      View Products
                    </Button>
                  </HStack>
                </VStack>
              </FallInPlace>
            </GridItem>
            <GridItem>
              <FallInPlace delay={0.3}>
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=90"
                    alt="Medical professionals collaborating with advanced medical technology"
                    w="100%"
                    h="auto"
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={6}
                    bgGradient="linear(to-t, blackAlpha.800, transparent)"
                  >
                    <Text color="white" fontWeight="600" fontSize="lg">
                      Trusted by 500+ Healthcare Institutions Worldwide
                    </Text>
                  </Box>
                </Box>
              </FallInPlace>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Key Features Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.2xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                The Vogt MedTech Standard
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Four fundamental pillars drive every innovation, ensuring our devices 
                deliver exceptional clinical value.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {features.map((feature, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={{ base: 8, md: 10 }}
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    shadow: '2xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'brand.500',
                  }}
                  transition="all 0.3s"
                >
                  <HStack spacing={6} mb={6} align="start">
                    <Flex
                      align="center"
                      justify="center"
                      w={16}
                      h={16}
                      borderRadius="xl"
                      bgGradient="linear(to-br, brand.500, accent.500)"
                      flexShrink={0}
                    >
                      <Icon as={feature.icon} boxSize={8} color="white" />
                    </Flex>
                    <VStack align="start" spacing={1} flex={1}>
                      <Heading as="h3" size="lg">
                        {feature.title}
                      </Heading>
                      <HStack>
                        <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                          {feature.stat}
                        </Text>
                        <Text fontSize="sm" color={mutedColor}>
                          {feature.statLabel}
                        </Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <Text color={mutedColor} fontSize="md" lineHeight="tall">
                    {feature.description}
                  </Text>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Product Showcase Section */}
      <Section id="products" bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.2xl">
          <VStack spacing={4} mb={20} textAlign="center">
            <FallInPlace>
              <Badge
                colorScheme="accent"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={4}
              >
                Flagship Products
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Transformative Medical Technology
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our portfolio of FDA-approved and CE-marked devices represents the 
                pinnacle of medical innovation, trusted by leading healthcare institutions.
              </Text>
            </FallInPlace>
          </VStack>

          <VStack spacing={20}>
            {products.map((product, index) => (
              <FallInPlace key={product.id} delay={0.2 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="xl"
                  _hover={{
                    shadow: '2xl',
                  }}
                  transition="all 0.3s"
                >
                  <Grid
                    templateColumns={{ base: '1fr', lg: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr' }}
                    gap={0}
                  >
                    <GridItem order={{ base: 1, lg: index % 2 === 0 ? 1 : 2 }}>
                      <Box
                        position="relative"
                        h={{ base: '400px', lg: 'full' }}
                        minH={{ lg: '600px' }}
                      >
                        <Image
                          src={product.image}
                          alt={product.fullName}
                          objectFit="cover"
                          w="100%"
                          h="100%"
                        />
                        <Box
                          position="absolute"
                          top={6}
                          right={6}
                          bg={cardBg}
                          px={4}
                          py={2}
                          borderRadius="full"
                          boxShadow="lg"
                        >
                          <Text fontSize="xs" fontWeight="bold" color="brand.500">
                            {product.category}
                          </Text>
                        </Box>
                      </Box>
                    </GridItem>
                    <GridItem
                      order={{ base: 2, lg: index % 2 === 0 ? 2 : 1 }}
                      p={{ base: 8, md: 12, lg: 16 }}
                    >
                      <VStack align="start" spacing={8} h="full" justify="center">
                        <Box>
                          <Heading
                            as="h3"
                            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                            fontWeight="800"
                            mb={2}
                          >
                            {product.name}
                          </Heading>
                          <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="accent.500"
                            fontWeight="600"
                            fontStyle="italic"
                            mb={6}
                          >
                            {product.tagline}
                          </Text>
                          <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color={mutedColor}
                            lineHeight="tall"
                            mb={4}
                          >
                            {product.description}
                          </Text>
                          <Text
                            fontSize="md"
                            color={mutedColor}
                            lineHeight="tall"
                          >
                            {product.longDescription}
                          </Text>
                        </Box>

                        <Divider />

                        <Box w="full">
                          <Heading as="h4" size="sm" mb={4} color={accentColor}>
                            Key Features
                          </Heading>
                          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                            {product.features.map((feature, i) => (
                              <HStack key={i} align="start" spacing={3}>
                                <Icon
                                  as={FiCheckCircle}
                                  color="accent.500"
                                  boxSize={5}
                                  mt={0.5}
                                  flexShrink={0}
                                />
                                <Text fontSize="sm" color={mutedColor}>
                                  {feature}
                                </Text>
                              </HStack>
                            ))}
                          </SimpleGrid>
                        </Box>

                        <Box
                          w="full"
                          bg={featureBg}
                          p={6}
                          borderRadius="xl"
                          border="1px"
                          borderColor={cardBorder}
                        >
                          <Heading as="h4" size="sm" mb={4} color={accentColor}>
                            Technical Specifications
                          </Heading>
                          <VStack align="stretch" spacing={3}>
                            {product.specs.map((spec, i) => (
                              <HStack key={i} justify="space-between">
                                <Text fontSize="sm" fontWeight="600">
                                  {spec.label}:
                                </Text>
                                <Text fontSize="sm" color={mutedColor}>
                                  {spec.value}
                                </Text>
                              </HStack>
                            ))}
                          </VStack>
                        </Box>

                        <HStack spacing={4} pt={4}>
                          <Button
                            as={Link}
                            href="/contact"
                            size="lg"
                            colorScheme="brand"
                            rightIcon={<FaArrowRight />}
                          >
                            Request Demo
                          </Button>
                          <Button
                            as={Link}
                            href={`/solutions/medical-devices/${product.id}`}
                            size="lg"
                            variant="outline"
                          >
                            Full Specifications
                          </Button>
                        </HStack>
                      </VStack>
                    </GridItem>
                  </Grid>
                </Box>
              </FallInPlace>
            ))}
          </VStack>
        </Container>
      </Section>

      {/* Quality & Compliance Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.2xl">
          <Grid templateColumns={{ base: '1fr', lg: '1.2fr 1fr' }} gap={{ base: 12, lg: 16 }} alignItems="center">
            <GridItem>
              <FallInPlace>
                <VStack align="start" spacing={8}>
                  <Box>
                    <Badge
                      colorScheme="purple"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={6}
                    >
                      Quality Assurance
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Uncompromising{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, purple.600, pink.500)',
                          'linear(to-r, purple.300, pink.300)'
                        )}
                        bgClip="text"
                      >
                        Quality Standards
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      Every Vogt MedTech device is developed and manufactured in ISO 13485 
                      certified facilities with the most rigorous quality control processes 
                      in the industry.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      We don't just meet regulatory standards—we exceed them. Our commitment 
                      to patient safety and clinical excellence drives every decision from 
                      initial design to post-market surveillance.
                    </Text>
                  </Box>

                  <SimpleGrid columns={3} spacing={6} w="full">
                    {certifications.map((cert, i) => (
                      <VStack
                        key={i}
                        p={6}
                        bg={featureBg}
                        borderRadius="xl"
                        border="2px"
                        borderColor={cardBorder}
                        spacing={3}
                        _hover={{
                          borderColor: 'brand.500',
                          transform: 'translateY(-4px)',
                        }}
                        transition="all 0.3s"
                      >
                        <Flex
                          align="center"
                          justify="center"
                          w={12}
                          h={12}
                          borderRadius="lg"
                          bg={cardBg}
                        >
                          <Icon as={cert.icon} boxSize={6} color="brand.500" />
                        </Flex>
                        <VStack spacing={1}>
                          <Text fontSize="sm" fontWeight="bold" textAlign="center">
                            {cert.name}
                          </Text>
                          <Text fontSize="xs" color={mutedColor} textAlign="center">
                            {cert.description}
                          </Text>
                        </VStack>
                      </VStack>
                    ))}
                  </SimpleGrid>
                </VStack>
              </FallInPlace>
            </GridItem>
            <GridItem>
              <FallInPlace delay={0.3}>
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  border="2px"
                  borderColor={cardBorder}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop&q=90"
                    alt="Quality control and precision manufacturing of medical devices"
                    w="100%"
                    h="auto"
                  />
                </Box>
              </FallInPlace>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Testimonial Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.lg">
          <FallInPlace>
            <Box
              bg={cardBg}
              border="2px"
              borderColor={cardBorder}
              borderRadius="3xl"
              p={{ base: 10, md: 16 }}
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                bgGradient: 'linear(to-r, brand.500, accent.500)',
              }}
            >
              <VStack spacing={8} textAlign="center">
                <Flex
                  align="center"
                  justify="center"
                  w={20}
                  h={20}
                  borderRadius="full"
                  bgGradient="linear(to-br, brand.500, accent.500)"
                >
                  <Icon as={FiHeart} boxSize={10} color="white" />
                </Flex>
                <Text
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight="500"
                  fontStyle="italic"
                  lineHeight="tall"
                  color={accentColor}
                  maxW="4xl"
                >
                  "The Sentinel-X monitor has fundamentally changed how we approach 
                  critical care. The predictive alerts have helped us prevent at least 
                  three critical events in the last month alone. It's not just a tool; 
                  it's a member of the care team."
                </Text>
                <Divider maxW="200px" />
                <VStack spacing={2}>
                  <Heading as="h4" size="md">
                    Dr. Maria Garcia, MD
                  </Heading>
                  <Text color={mutedColor} fontSize="md">
                    Head of Intensive Care, University Hospital
                  </Text>
                  <HStack spacing={1} pt={2}>
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} as={FiHeart} color="accent.500" boxSize={5} />
                    ))}
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </FallInPlace>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.2xl">
          <Box
            position="relative"
            bgGradient={useColorModeValue(
              'linear(to-br, brand.600, accent.500)',
              'linear(to-br, brand.500, accent.400)'
            )}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="2xl"
          >
            <Box
              position="absolute"
              top={-20}
              right={-20}
              w="400px"
              h="400px"
              bgGradient="radial(circle, whiteAlpha.200, transparent)"
              borderRadius="full"
              filter="blur(60px)"
            />
            <Box
              position="relative"
              p={{ base: 10, md: 16, lg: 20 }}
              textAlign="center"
            >
              <VStack spacing={8}>
                <Flex
                  align="center"
                  justify="center"
                  w={24}
                  h={24}
                  borderRadius="2xl"
                  bg="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                >
                  <Icon as={FiLifeBuoy} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Ready to Transform Patient Care?
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Join 500+ leading healthcare institutions worldwide who trust Vogt MedTech 
                    devices to deliver superior clinical outcomes. Schedule a personalized demo 
                    and discover how our technology can elevate your standard of care.
                  </Text>
                </VStack>
                <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
                  <Button
                    as={Link}
                    href="/contact"
                    size="lg"
                    h={14}
                    px={8}
                    bg="white"
                    color="brand.600"
                    fontSize="lg"
                    fontWeight="bold"
                    rightIcon={<FaArrowRight />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      shadow: '2xl',
                    }}
                    transition="all 0.2s"
                  >
                    Schedule a Demo
                  </Button>
                  <Button
                    as={Link}
                    href="/solutions/diagnostics"
                    size="lg"
                    h={14}
                    px={8}
                    variant="outline"
                    color="white"
                    borderColor="white"
                    borderWidth="2px"
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{
                      bg: 'whiteAlpha.200',
                    }}
                  >
                    Explore More Solutions
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  )
}
