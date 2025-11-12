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
  useColorModeValue,
  AspectRatio,
} from '@chakra-ui/react'
import {
  FiActivity,
  FiAward,
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiHeart,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { FaArrowRight, FaHospital, FaQuoteLeft } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function CaseStudiesPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const stats = [
    {
      value: '500+',
      label: 'Healthcare Institutions',
      icon: FaHospital,
      color: 'brand.500',
    },
    {
      value: '2M+',
      label: 'Patients Impacted',
      icon: FiUsers,
      color: 'accent.500',
    },
    {
      value: '98%',
      label: 'Customer Satisfaction',
      icon: FiAward,
      color: 'purple.500',
    },
    {
      value: '$850M',
      label: 'Healthcare Savings',
      icon: FiTrendingUp,
      color: 'pink.500',
    },
  ]

  const caseStudies = [
    {
      id: 'memorial-cardiac',
      institution: 'Memorial Cardiac Center',
      location: 'Boston, MA',
      specialty: 'Cardiac Surgery',
      solution: 'CardioPulse™ Ablation System',
      challenge: 'High complication rates and lengthy recovery times for atrial fibrillation ablation procedures.',
      implementation: 'Deployed CardioPulse™ system across three cardiac catheterization labs with comprehensive staff training and clinical workflow optimization.',
      results: [
        { metric: 'Procedure Time', improvement: '-42%', detail: 'Average reduced from 180 to 105 minutes' },
        { metric: 'Complications', improvement: '-68%', detail: 'Major complications dropped from 8.2% to 2.6%' },
        { metric: 'Patient Recovery', improvement: '-55%', detail: 'Hospital stay reduced from 2.2 to 1.0 days' },
        { metric: 'Success Rate', improvement: '+35%', detail: 'Single-procedure success increased to 87%' },
      ],
      testimonial: {
        quote: "CardioPulse has transformed how we approach AF ablation. The precision and safety profile are unprecedented. We're achieving outcomes that were simply not possible with earlier technology.",
        author: 'Dr. Elizabeth Chen, MD',
        role: 'Director of Electrophysiology',
      },
      timeline: '6 months',
      procedures: '1,200+ procedures',
      image: '/static/images/avatar.jpg',
      color: 'brand.500',
    },
    {
      id: 'university-ai',
      institution: 'University Medical Center',
      location: 'San Francisco, CA',
      specialty: 'Radiology & Diagnostics',
      solution: 'CognitionAI™ Diagnostic Platform',
      challenge: 'Radiologist burnout, diagnostic backlogs, and missed critical findings in high-volume emergency department.',
      implementation: 'Integrated CognitionAI with existing PACS system, enabling AI-assisted triage and automated preliminary readings across CT, MRI, and X-ray modalities.',
      results: [
        { metric: 'Reading Time', improvement: '-38%', detail: 'Average time per case reduced significantly' },
        { metric: 'Critical Findings', improvement: '+92%', detail: 'Critical cases flagged within minutes' },
        { metric: 'Diagnostic Accuracy', improvement: '+24%', detail: 'Improved detection of subtle pathologies' },
        { metric: 'Radiologist Satisfaction', improvement: '+78%', detail: 'Reduced cognitive burden and burnout' },
      ],
      testimonial: {
        quote: "CognitionAI acts like a tireless second reader who never misses anything. It's caught cases that I'm embarrassed to admit I might have overlooked. The confidence it provides is invaluable.",
        author: 'Dr. Michael Rodriguez, MD',
        role: 'Chief of Radiology',
      },
      timeline: '4 months',
      procedures: '50,000+ studies analyzed',
      image: '/static/images/avatar.jpg',
      color: 'purple.500',
    },
    {
      id: 'regional-robotics',
      institution: 'Regional Medical Center',
      location: 'Atlanta, GA',
      specialty: 'General Surgery',
      solution: 'PrecisionBot™ Surgical System',
      challenge: 'Limited minimally invasive capabilities, long wait times for complex procedures, high conversion rates to open surgery.',
      implementation: 'Established comprehensive robotic surgery program with PrecisionBot, including surgeon training, nursing education, and clinical pathway development.',
      results: [
        { metric: 'Surgical Volume', improvement: '+156%', detail: 'Complex procedures increased dramatically' },
        { metric: 'Conversion Rate', improvement: '-82%', detail: 'Robotic-to-open conversions nearly eliminated' },
        { metric: 'Patient Recovery', improvement: '-60%', detail: 'Return to work reduced from 6 to 2.4 weeks' },
        { metric: 'Hospital Revenue', improvement: '+$8.2M', detail: 'Annual increase from surgical program' },
      ],
      testimonial: {
        quote: "PrecisionBot allowed us to offer procedures we previously referred out. The economic impact has been substantial, but more importantly, our patients get world-class care without traveling.",
        author: 'Dr. Sarah Williams, MD, FACS',
        role: 'Director of Robotic Surgery',
      },
      timeline: '8 months',
      procedures: '800+ robotic procedures',
      image: '/static/images/avatar.jpg',
      color: 'accent.500',
    },
    {
      id: 'childrens-monitoring',
      institution: "Children's Hospital Network",
      location: 'Philadelphia, PA',
      specialty: 'Pediatric Critical Care',
      solution: 'Sentinel-X™ Patient Monitoring',
      challenge: 'Alarm fatigue, delayed recognition of patient deterioration, and fragmented monitoring across multiple units.',
      implementation: 'Network-wide deployment of Sentinel-X with AI-powered alarm management, predictive analytics, and centralized monitoring station.',
      results: [
        { metric: 'False Alarms', improvement: '-85%', detail: 'AI filtering reduced alarm fatigue significantly' },
        { metric: 'Rapid Response', improvement: '+48%', detail: 'Earlier detection of deterioration events' },
        { metric: 'Code Blue Events', improvement: '-62%', detail: 'Preventable codes nearly eliminated' },
        { metric: 'Nurse Satisfaction', improvement: '+71%', detail: 'Reduced alarm fatigue and stress' },
      ],
      testimonial: {
        quote: "Sentinel-X has fundamentally changed how we approach pediatric monitoring. The predictive algorithms give us a 45-minute warning window for deterioration. We're catching problems before they become emergencies.",
        author: 'Dr. Jennifer Park, MD',
        role: 'PICU Medical Director',
      },
      timeline: '10 months',
      procedures: '24/7 monitoring of 120 beds',
      image: '/static/images/avatar.jpg',
      color: 'pink.500',
    },
    {
      id: 'rural-diagnostics',
      institution: 'Rural Health Network',
      location: 'Montana & Wyoming',
      specialty: 'Point-of-Care Diagnostics',
      solution: 'Spectrum™ Clinical Analyzer',
      challenge: 'Limited access to lab services, long wait times for results, patient transfers for routine testing.',
      implementation: 'Distributed deployment of compact Spectrum analyzers across 12 rural clinics, enabling comprehensive testing at point of care.',
      results: [
        { metric: 'Test Turnaround', improvement: '-94%', detail: 'Results in 15 minutes vs. 24-48 hours' },
        { metric: 'Patient Transfers', improvement: '-73%', detail: 'Unnecessary transfers dramatically reduced' },
        { metric: 'Clinical Decisions', improvement: '+89%', detail: 'Same-visit treatment plans enabled' },
        { metric: 'Patient Satisfaction', improvement: '+95%', detail: 'Near-universal positive feedback' },
      ],
      testimonial: {
        quote: "For rural medicine, Spectrum is a game-changer. We can now run comprehensive metabolic panels, cardiac markers, and infectious disease tests right in the clinic. It's transformed our standard of care.",
        author: 'Dr. Robert Thompson, MD',
        role: 'Rural Health Network Medical Director',
      },
      timeline: '12 months rollout',
      procedures: '75,000+ tests performed',
      image: '/static/images/avatar.jpg',
      color: 'brand.500',
    },
    {
      id: 'academic-digital-health',
      institution: 'Academic Medical Center',
      location: 'Chicago, IL',
      specialty: 'Chronic Disease Management',
      solution: 'VitalWatch™ Remote Monitoring',
      challenge: 'High readmission rates for heart failure and COPD patients, poor medication adherence, limited home monitoring.',
      implementation: 'Launched comprehensive remote patient monitoring program with VitalWatch for 500 high-risk patients, integrated with clinical workflows.',
      results: [
        { metric: 'Readmissions', improvement: '-58%', detail: '30-day readmission rate dramatically reduced' },
        { metric: 'ED Visits', improvement: '-47%', detail: 'Emergency visits prevented through early intervention' },
        { metric: 'Medication Adherence', improvement: '+82%', detail: 'Remote monitoring improved compliance' },
        { metric: 'Healthcare Savings', improvement: '$4.2M', detail: 'Annual cost savings from reduced utilization' },
      ],
      testimonial: {
        quote: "VitalWatch has closed the loop on post-discharge care. We're catching decompensation events 3-5 days earlier, allowing outpatient intervention instead of hospital admission. The quality and financial benefits are undeniable.",
        author: 'Dr. Amanda Foster, MD, MPH',
        role: 'Population Health Director',
      },
      timeline: '18 months',
      procedures: '500 patients monitored',
      image: '/static/images/avatar.jpg',
      color: 'accent.500',
    },
  ]

  const categories = [
    { name: 'All Studies', count: caseStudies.length, value: 'all' },
    { name: 'Surgical', count: 2, value: 'surgical' },
    { name: 'Diagnostics', count: 2, value: 'diagnostics' },
    { name: 'Monitoring', count: 1, value: 'monitoring' },
    { name: 'Digital Health', count: 1, value: 'digital' },
  ]

  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Real-world evidence of clinical excellence and measurable outcomes. See how leading healthcare institutions are transforming patient care with Vogt MedTech solutions."
        gradientColors={['brand.600', 'accent.500']}
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
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" maxW="4xl">
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
                  Proven Results
                </Badge>
                <Heading
                  as="h2"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="800"
                  mb={6}
                >
                  Stories of{' '}
                  <Text
                    as="span"
                    bgGradient={useColorModeValue(
                      'linear(to-r, brand.600, accent.500)',
                      'linear(to-r, brand.300, accent.300)'
                    )}
                    bgClip="text"
                  >
                    Clinical Excellence
                  </Text>
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall">
                  From large academic medical centers to rural health networks, healthcare institutions 
                  worldwide are achieving remarkable outcomes with Vogt MedTech solutions. These case 
                  studies represent real implementations with documented, measurable results.
                </Text>
              </FallInPlace>
            </VStack>

            {/* Category Filters */}
            <FallInPlace delay={0.2}>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    size="md"
                    variant={index === 0 ? 'solid' : 'outline'}
                    colorScheme={index === 0 ? 'brand' : 'gray'}
                    rightIcon={
                      <Badge
                        colorScheme={index === 0 ? 'white' : 'gray'}
                        borderRadius="full"
                        px={2}
                      >
                        {category.count}
                      </Badge>
                    }
                  >
                    {category.name}
                  </Button>
                ))}
              </HStack>
            </FallInPlace>
          </VStack>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={20}>
            {caseStudies.map((study, index) => (
              <FallInPlace key={study.id} delay={0.1 * index}>
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
                  {/* Header Image */}
                  <Box position="relative" h="300px" bg={featureBg}>
                    <Image
                      src={study.image}
                      alt={study.institution}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient={`linear(to-br, ${study.color}Alpha.300, transparent)`}
                    />
                    <Box position="absolute" top={6} left={6}>
                      <Badge
                        colorScheme="brand"
                        fontSize="sm"
                        px={4}
                        py={2}
                        borderRadius="full"
                        bg="white"
                        color={study.color}
                        boxShadow="lg"
                      >
                        {study.specialty}
                      </Badge>
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box p={{ base: 8, md: 12 }}>
                    <Grid templateColumns={{ base: '1fr', lg: '1.5fr 1fr' }} gap={12}>
                      {/* Left Column - Details */}
                      <GridItem>
                        <VStack align="start" spacing={8}>
                          {/* Institution Info */}
                          <Box>
                            <Heading as="h3" size="xl" mb={2}>
                              {study.institution}
                            </Heading>
                            <HStack spacing={4} color={mutedColor}>
                              <Text fontSize="md">{study.location}</Text>
                              <Text>•</Text>
                              <HStack spacing={2}>
                                <Icon as={FiClock} boxSize={4} />
                                <Text fontSize="sm">{study.timeline}</Text>
                              </HStack>
                            </HStack>
                          </Box>

                          <Divider />

                          {/* Solution */}
                          <Box>
                            <Text fontSize="sm" fontWeight="bold" color={accentColor} mb={2} textTransform="uppercase">
                              Solution Deployed
                            </Text>
                            <Heading as="h4" size="md" color={study.color}>
                              {study.solution}
                            </Heading>
                          </Box>

                          {/* Challenge */}
                          <Box>
                            <Text fontSize="sm" fontWeight="bold" color={accentColor} mb={3} textTransform="uppercase">
                              The Challenge
                            </Text>
                            <Text color={mutedColor} lineHeight="tall">
                              {study.challenge}
                            </Text>
                          </Box>

                          {/* Implementation */}
                          <Box>
                            <Text fontSize="sm" fontWeight="bold" color={accentColor} mb={3} textTransform="uppercase">
                              Implementation
                            </Text>
                            <Text color={mutedColor} lineHeight="tall">
                              {study.implementation}
                            </Text>
                          </Box>

                          {/* Volume */}
                          <HStack
                            spacing={3}
                            p={4}
                            bg={featureBg}
                            borderRadius="lg"
                            border="1px"
                            borderColor={cardBorder}
                          >
                            <Icon as={FiBarChart2} color={study.color} boxSize={6} />
                            <VStack align="start" spacing={0}>
                              <Text fontSize="xs" color={mutedColor} fontWeight="600">
                                Total Volume
                              </Text>
                              <Text fontSize="lg" fontWeight="bold">
                                {study.procedures}
                              </Text>
                            </VStack>
                          </HStack>
                        </VStack>
                      </GridItem>

                      {/* Right Column - Results */}
                      <GridItem>
                        <VStack align="stretch" spacing={6}>
                          <Box>
                            <Text fontSize="sm" fontWeight="bold" color={accentColor} mb={4} textTransform="uppercase">
                              Measurable Results
                            </Text>
                            <VStack spacing={4}>
                              {study.results.map((result, i) => (
                                <Box
                                  key={i}
                                  p={5}
                                  bg={featureBg}
                                  borderRadius="xl"
                                  border="2px"
                                  borderColor={cardBorder}
                                  w="full"
                                  _hover={{
                                    borderColor: study.color,
                                    transform: 'translateX(4px)',
                                  }}
                                  transition="all 0.2s"
                                >
                                  <HStack justify="space-between" mb={2}>
                                    <Text fontSize="sm" fontWeight="600">
                                      {result.metric}
                                    </Text>
                                    <Badge
                                      colorScheme="green"
                                      fontSize="md"
                                      px={3}
                                      py={1}
                                      borderRadius="full"
                                    >
                                      {result.improvement}
                                    </Badge>
                                  </HStack>
                                  <Text fontSize="xs" color={mutedColor}>
                                    {result.detail}
                                  </Text>
                                </Box>
                              ))}
                            </VStack>
                          </Box>

                          {/* Testimonial */}
                          <Box
                            p={6}
                            bg={cardBg}
                            borderRadius="xl"
                            border="2px"
                            borderColor={study.color}
                            position="relative"
                          >
                            <Icon
                              as={FaQuoteLeft}
                              position="absolute"
                              top={4}
                              left={4}
                              boxSize={8}
                              color={study.color}
                              opacity={0.2}
                            />
                            <VStack align="start" spacing={4} position="relative">
                              <Text
                                fontSize="sm"
                                fontStyle="italic"
                                color={mutedColor}
                                lineHeight="tall"
                                pl={6}
                              >
                                "{study.testimonial.quote}"
                              </Text>
                              <Divider />
                              <VStack align="start" spacing={0}>
                                <Text fontSize="sm" fontWeight="bold">
                                  {study.testimonial.author}
                                </Text>
                                <Text fontSize="xs" color={mutedColor}>
                                  {study.testimonial.role}
                                </Text>
                              </VStack>
                            </VStack>
                          </Box>
                        </VStack>
                      </GridItem>
                    </Grid>

                    {/* CTA Button */}
                    <Box mt={8} pt={8} borderTop="1px" borderColor={cardBorder}>
                      <Button
                        as={Link}
                        href={`/innovation/case-studies/${study.id}`}
                        colorScheme="brand"
                        size="lg"
                        rightIcon={<FaArrowRight />}
                      >
                        Read Full Case Study
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </FallInPlace>
            ))}
          </VStack>
        </Container>
      </Section>

      {/* Bottom CTA Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Box
            position="relative"
            bgGradient={useColorModeValue(
              'linear(to-br, brand.600, accent.600)',
              'linear(to-br, brand.500, accent.500)'
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
                  <Icon as={FiAward} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Ready to Transform Your Practice?
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Join hundreds of leading healthcare institutions achieving measurable improvements 
                    in clinical outcomes, operational efficiency, and patient satisfaction. Let's discuss 
                    how Vogt MedTech solutions can address your unique challenges.
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
                    Request a Consultation
                  </Button>
                  <Button
                    as={Link}
                    href="/solutions"
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
                    Explore Solutions
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
