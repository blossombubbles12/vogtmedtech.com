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
  FiBell,
  FiCheckCircle,
  FiCloud,
  FiDatabase,
  FiGlobe,
  FiHeart,
  FiLock,
  FiMonitor,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
  FiWifi,
  FiZap,
} from 'react-icons/fi'
import { FaArrowRight, FaMobile, FaPlay } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function DigitalHealthPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const stats = [
    {
      value: '2M+',
      label: 'Connected Patients',
      icon: FiUsers,
      color: 'accent.500',
    },
    {
      value: '99.99%',
      label: 'Platform Uptime',
      icon: FiCloud,
      color: 'brand.500',
    },
    {
      value: '15B+',
      label: 'Data Points Processed',
      icon: FiDatabase,
      color: 'purple.500',
    },
    {
      value: '850+',
      label: 'Healthcare Partners',
      icon: FiGlobe,
      color: 'pink.500',
    },
  ]

  const features = [
    {
      icon: FiWifi,
      title: 'Seamless Connectivity',
      description: 'Cloud-based infrastructure connects patients, providers, and devices in real-time, enabling truly coordinated care across any setting.',
      stat: '99.99%',
      statLabel: 'Uptime SLA',
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'HIPAA-compliant, SOC 2 Type II certified platform with end-to-end encryption, ensuring patient data is always protected.',
      stat: 'Zero',
      statLabel: 'Data Breaches',
    },
    {
      icon: FiTrendingUp,
      title: 'Actionable Analytics',
      description: 'AI-powered insights transform raw health data into actionable intelligence, enabling proactive interventions and personalized care.',
      stat: '35%',
      statLabel: 'Better Outcomes',
    },
    {
      icon: FiSmartphone,
      title: 'Patient Engagement',
      description: 'Intuitive mobile and web apps empower patients to take control of their health, improving adherence and satisfaction scores.',
      stat: '4.8/5',
      statLabel: 'User Rating',
    },
  ]

  const products = [
    {
      id: 'healthconnect',
      name: 'HealthConnect™',
      fullName: 'HealthConnect™ Care Coordination Platform',
      category: 'Healthcare Integration',
      tagline: 'One Platform. Complete Care Coordination.',
      image: '/static/images/avatar.jpg',
      description: 'A comprehensive care coordination platform that unifies patient data, streamlines workflows, and enables seamless communication across the entire care continuum.',
      longDescription: 'HealthConnect eliminates data silos by integrating with 200+ EHR systems, medical devices, and health apps. Care teams gain a single, real-time view of each patient\'s health status, medications, appointments, and treatment plans—all in one intelligent platform.',
      features: [
        'Universal EHR integration (Epic, Cerner, Allscripts, etc.)',
        'Real-time care team collaboration and messaging',
        'Automated care pathway management',
        'Population health analytics dashboard',
        'Mobile apps for providers and patients',
        'FHIR-compliant API for custom integrations',
      ],
      specs: [
        { label: 'Integrations', value: '200+ EHR/EMR systems' },
        { label: 'Compliance', value: 'HIPAA, HITRUST, SOC 2 Type II' },
        { label: 'Availability', value: '99.99% uptime SLA' },
      ],
    },
    {
      id: 'remote-patient-monitoring',
      name: 'VitalWatch™',
      fullName: 'VitalWatch™ Remote Patient Monitoring',
      category: 'Remote Patient Monitoring',
      tagline: 'Hospital-Quality Care, From Home',
      image: '/static/images/avatar.jpg',
      description: 'Enterprise-grade remote patient monitoring platform that enables continuous surveillance of chronic conditions, post-discharge patients, and high-risk populations from the comfort of home.',
      longDescription: 'VitalWatch connects FDA-cleared wearable devices, home monitoring equipment, and patient-reported outcomes into a unified dashboard with intelligent alerting. Clinical teams receive real-time notifications for concerning trends, enabling early intervention before conditions worsen.',
      features: [
        'Continuous vital sign monitoring (BP, HR, SpO2, Weight)',
        'AI-powered risk stratification and predictive alerts',
        'Automated escalation protocols and triaging',
        'Video telehealth integration',
        'Medication adherence tracking',
        'Medicare/Medicaid billing automation (CPT 99453-99458)',
      ],
      specs: [
        { label: 'Device Compatibility', value: '50+ FDA-cleared devices' },
        { label: 'Alert Response Time', value: '<2 minutes average' },
        { label: 'Readmission Reduction', value: '38% decrease (clinical trials)' },
      ],
    },
    {
      id: 'patient-engagement',
      name: 'CarePath™',
      fullName: 'CarePath™ Patient Engagement Suite',
      category: 'Patient Experience',
      tagline: 'Empowering Patients, Simplifying Healthcare',
      image: '/static/images/avatar.jpg',
      description: 'Consumer-grade mobile and web applications that give patients unprecedented control over their healthcare journey, from appointment scheduling to medication management and telehealth consultations.',
      longDescription: 'CarePath transforms the patient experience with an intuitive, all-in-one health management platform. Patients can schedule appointments, access medical records, communicate securely with providers, refill prescriptions, and complete pre-visit questionnaires—all from their smartphone. Gamification and behavioral nudges drive engagement and improve adherence.',
      features: [
        'Appointment scheduling with provider availability',
        'Secure messaging with care team',
        'Electronic health records access',
        'Prescription refills and pharmacy integration',
        'Integrated telehealth video visits',
        'Personalized health education content',
      ],
      specs: [
        { label: 'User Rating', value: '4.8/5 stars (150K+ reviews)' },
        { label: 'Engagement Rate', value: '76% monthly active users' },
        { label: 'Languages', value: '15+ supported languages' },
      ],
    },
  ]

  const certifications = [
    {
      name: 'HIPAA Compliant',
      description: 'Health Insurance Portability and Accountability Act',
      icon: FiShield,
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, Availability, Confidentiality',
      icon: FiLock,
    },
    {
      name: 'HITRUST Certified',
      description: 'Healthcare Information Trust Alliance',
      icon: FiAward,
    },
  ]

  const benefits = [
    {
      icon: FiHeart,
      title: 'Improved Outcomes',
      stat: '35%',
      description: 'Better clinical outcomes through continuous monitoring, early intervention, and personalized care plans.',
    },
    {
      icon: FiTrendingUp,
      title: 'Reduced Readmissions',
      stat: '38%',
      description: 'Significant decrease in 30-day hospital readmissions with remote monitoring and proactive care management.',
    },
    {
      icon: FiUsers,
      title: 'Patient Satisfaction',
      stat: '92%',
      description: 'Patients report higher satisfaction scores with convenient access to care and improved communication.',
    },
    {
      icon: FiZap,
      title: 'Cost Savings',
      stat: '$1,200',
      description: 'Average cost savings per patient per year through reduced ER visits and hospital stays.',
    },
  ]

  return (
    <>
      <PageHeader
        title="Digital Health"
        subtitle="Transform healthcare delivery with cloud-based platforms that connect patients, providers, and data. Our digital health solutions enable coordinated care, remote monitoring, and patient engagement at scale."
        gradientColors={['accent.600', 'brand.500']}
      />

      {/* Stats Hero Section */}
      <Section py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
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
                  _hover={{
                    transform: 'translateY(-8px)',
                    shadow: '2xl',
                    borderColor: stat.color,
                    _before: {
                      opacity: 1,
                    },
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
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
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <GridItem>
              <FallInPlace>
                <VStack align="start" spacing={8}>
                  <Box>
                    <Badge
                      colorScheme="accent"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={6}
                    >
                      Connected Care
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Healthcare Without{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, accent.600, brand.500)',
                          'linear(to-r, accent.300, brand.300)'
                        )}
                        bgClip="text"
                      >
                        Boundaries
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      The future of healthcare is digital, connected, and patient-centered. Our 
                      digital health platforms break down traditional barriers, enabling care to 
                      happen anywhere, anytime.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      From enterprise care coordination to remote patient monitoring and consumer 
                      health apps, Vogt MedTech's digital solutions empower healthcare organizations 
                      to deliver better outcomes at lower costs.
                    </Text>
                  </Box>
                  <HStack spacing={4}>
                    <Button
                      as={Link}
                      href="/contact"
                      size="lg"
                      colorScheme="accent"
                      rightIcon={<FaArrowRight />}
                    >
                      Request Demo
                    </Button>
                    <Button
                      as={Link}
                      href="#products"
                      size="lg"
                      variant="outline"
                      leftIcon={<FaPlay />}
                    >
                      View Platforms
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
                    src="/static/images/avatar.jpg"
                    alt="Digital Health Platform"
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
                      Trusted by 850+ Healthcare Organizations Globally
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
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Built for Modern Healthcare
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our digital health platforms are engineered with the security, reliability, 
                and scalability that enterprise healthcare demands.
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
                    borderColor: 'accent.500',
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
                      bgGradient="linear(to-br, accent.500, brand.500)"
                      flexShrink={0}
                    >
                      <Icon as={feature.icon} boxSize={8} color="white" />
                    </Flex>
                    <VStack align="start" spacing={1} flex={1}>
                      <Heading as="h3" size="lg">
                        {feature.title}
                      </Heading>
                      <HStack>
                        <Text fontSize="2xl" fontWeight="bold" color="accent.500">
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
        <Container maxW="container.xl">
          <VStack spacing={4} mb={20} textAlign="center">
            <FallInPlace>
              <Badge
                colorScheme="brand"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={4}
              >
                Digital Platforms
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Comprehensive Digital Health Solutions
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                From care coordination to remote monitoring and patient engagement, 
                our platforms cover the full spectrum of digital healthcare.
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
                          <Text fontSize="xs" fontWeight="bold" color="accent.500">
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
                            Platform Features
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
                            Platform Highlights
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
                            colorScheme="accent"
                            rightIcon={<FaArrowRight />}
                          >
                            Request Demo
                          </Button>
                          <Button
                            as={Link}
                            href={`/solutions/digital-health/${product.id}`}
                            size="lg"
                            variant="outline"
                          >
                            Learn More
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

      {/* Benefits Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Proven Clinical & Financial Impact
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our digital health platforms deliver measurable improvements in patient 
                outcomes, satisfaction, and cost efficiency.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {benefits.map((benefit, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <VStack
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={8}
                  spacing={5}
                  align="center"
                  textAlign="center"
                  h="full"
                  _hover={{
                    shadow: 'xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'accent.500',
                  }}
                  transition="all 0.3s"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w={14}
                    h={14}
                    borderRadius="xl"
                    bgGradient="linear(to-br, accent.500, brand.500)"
                  >
                    <Icon as={benefit.icon} boxSize={7} color="white" />
                  </Flex>
                  <Text fontSize="4xl" fontWeight="bold" color="accent.500">
                    {benefit.stat}
                  </Text>
                  <Heading as="h3" size="md">
                    {benefit.title}
                  </Heading>
                  <Text color={mutedColor} fontSize="sm" lineHeight="tall">
                    {benefit.description}
                  </Text>
                </VStack>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Security & Compliance Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
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
                      Security & Compliance
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Enterprise-Grade{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, purple.600, pink.500)',
                          'linear(to-r, purple.300, pink.300)'
                        )}
                        bgClip="text"
                      >
                        Security
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      Patient data security is non-negotiable. Our digital health platforms 
                      are built with multiple layers of protection, meeting the most stringent 
                      healthcare security and privacy standards.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      From end-to-end encryption to comprehensive audit logs and role-based 
                      access controls, we ensure patient data remains secure and compliant 
                      across all touchpoints.
                    </Text>
                  </Box>

                  <SimpleGrid columns={3} spacing={6} w="full">
                    {certifications.map((cert, i) => (
                      <VStack
                        key={i}
                        p={6}
                        bg={cardBg}
                        borderRadius="xl"
                        border="2px"
                        borderColor={cardBorder}
                        spacing={3}
                        _hover={{
                          borderColor: 'accent.500',
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
                          bgGradient="linear(to-br, accent.500, brand.500)"
                        >
                          <Icon as={cert.icon} boxSize={6} color="white" />
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
                    src="/static/images/avatar.jpg"
                    alt="Security and Compliance"
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
      <Section py={{ base: 16, md: 24 }}>
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
                bgGradient: 'linear(to-r, accent.500, brand.500)',
              }}
            >
              <VStack spacing={8} textAlign="center">
                <Flex
                  align="center"
                  justify="center"
                  w={20}
                  h={20}
                  borderRadius="full"
                  bgGradient="linear(to-br, accent.500, brand.500)"
                >
                  <Icon as={FaMobile} boxSize={10} color="white" />
                </Flex>
                <Text
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight="500"
                  fontStyle="italic"
                  lineHeight="tall"
                  color={accentColor}
                  maxW="4xl"
                >
                  "VitalWatch has transformed how we manage our heart failure patients. 
                  We've seen a 42% reduction in readmissions and our patients love the 
                  peace of mind. The platform integrates seamlessly with our Epic system, 
                  and the clinical alerts are incredibly accurate."
                </Text>
                <Divider maxW="200px" />
                <VStack spacing={2}>
                  <Heading as="h4" size="md">
                    Dr. Lisa Martinez, MD
                  </Heading>
                  <Text color={mutedColor} fontSize="md">
                    Chief of Cardiology, Riverside Health System
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
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Box
            position="relative"
            bgGradient={useColorModeValue(
              'linear(to-br, accent.600, brand.500)',
              'linear(to-br, accent.500, brand.400)'
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
                  <Icon as={FiMonitor} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Ready to Go Digital?
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Join 850+ forward-thinking healthcare organizations using Vogt MedTech's 
                    digital health platforms to deliver better care, improve outcomes, and 
                    reduce costs. Schedule a personalized demo today.
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
                    color="accent.600"
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
                    href="/solutions/ai-robotics"
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
                    Explore AI & Robotics
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
