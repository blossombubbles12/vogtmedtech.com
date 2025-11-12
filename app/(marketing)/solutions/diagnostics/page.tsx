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
  FiClock,
  FiEye,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { FaArrowRight, FaMicroscope, FaPlay } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function DiagnosticsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const stats = [
    {
      value: '98.7%',
      label: 'Diagnostic Accuracy',
      icon: FiTarget,
      color: 'brand.500',
    },
    {
      value: '<15min',
      label: 'Average Test Time',
      icon: FiClock,
      color: 'accent.500',
    },
    {
      value: '750K+',
      label: 'Tests Annually',
      icon: FiActivity,
      color: 'purple.500',
    },
    {
      value: '35',
      label: 'Countries Deployed',
      icon: FiGlobe,
      color: 'pink.500',
    },
  ]

  const features = [
    {
      icon: FiTarget,
      title: 'Clinical Accuracy',
      description: 'AI-enhanced diagnostic algorithms validated across diverse populations, delivering consistently accurate results across all patient demographics.',
      stat: '98.7%',
      statLabel: 'Accuracy Rate',
    },
    {
      icon: FiZap,
      title: 'Rapid Results',
      description: 'Point-of-care testing with results in minutes, not hours. Accelerate treatment decisions when every second counts.',
      stat: '<15min',
      statLabel: 'Results Time',
    },
    {
      icon: FiLayers,
      title: 'Multi-Modal Testing',
      description: 'Comprehensive diagnostic panels covering biochemistry, hematology, immunology, and molecular diagnostics on a single platform.',
      stat: '200+',
      statLabel: 'Test Types',
    },
    {
      icon: FiEye,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms identify patterns and anomalies, providing clinical decision support and flagging critical values.',
      stat: '24/7',
      statLabel: 'AI Analysis',
    },
  ]

  const products = [
    {
      id: 'spectrum-analyzer',
      name: 'Spectrum™',
      fullName: 'Spectrum™ Clinical Analyzer',
      category: 'Multi-Parameter Analysis',
      tagline: 'Comprehensive Diagnostics, Singular Platform',
      image: '/static/images/avatar.jpg',
      description: 'The most advanced multi-parameter clinical analyzer on the market. Spectrum combines chemistry, immunoassay, and hematology testing in one compact, fully automated system.',
      longDescription: 'Designed for high-volume laboratories and hospitals, Spectrum delivers lab-quality results with unmatched throughput. Our proprietary microfluidic technology and AI-powered quality control ensure consistent accuracy across 200+ different assays.',
      features: [
        '200+ chemistry and immunoassay tests',
        'Throughput: 800 tests/hour',
        'Sample volume: 2μL minimum',
        'Automated quality control with AI monitoring',
        'Bidirectional LIS integration',
        'Random access testing capability',
      ],
      specs: [
        { label: 'Turnaround Time', value: '12 minutes average' },
        { label: 'Daily Capacity', value: 'Up to 5,000 tests' },
        { label: 'Certifications', value: 'CLIA-Waived, CE-IVD, FDA 510(k)' },
      ],
    },
    {
      id: 'dx-vision',
      name: 'DxVision™',
      fullName: 'DxVision™ AI Imaging System',
      category: 'Medical Imaging Diagnostics',
      tagline: 'See Beyond the Scan',
      image: '/static/images/avatar.jpg',
      description: 'Revolutionary AI-powered medical imaging platform that transforms radiology workflows. DxVision analyzes CT, MRI, and X-ray images in real-time, detecting abnormalities with superhuman accuracy.',
      longDescription: 'Trained on over 10 million annotated medical images, DxVision\'s deep learning models identify early-stage cancers, fractures, hemorrhages, and hundreds of other pathologies. Radiologists using DxVision report 40% faster read times and 25% improvement in detection rates.',
      features: [
        'Multi-modality support (CT, MRI, X-ray, Ultrasound)',
        'Real-time pathology detection and annotation',
        'FDA-cleared for clinical decision support',
        'Prioritizes urgent findings automatically',
        'PACS integration with HL7/DICOM',
        'Continuous learning from radiologist feedback',
      ],
      specs: [
        { label: 'Processing Speed', value: '<30 seconds per study' },
        { label: 'Detection Accuracy', value: '96.8% sensitivity, 99.1% specificity' },
        { label: 'Certifications', value: 'FDA 510(k), CE Mark, NMPA' },
      ],
    },
    {
      id: 'genomics-pro',
      name: 'GenomicsPro™',
      fullName: 'GenomicsPro™ Sequencing Platform',
      category: 'Molecular Diagnostics',
      tagline: 'Precision Medicine at Scale',
      image: '/static/images/avatar.jpg',
      description: 'Next-generation sequencing platform bringing genomic medicine to routine clinical practice. GenomicsPro delivers comprehensive genetic testing with clinical-grade accuracy and unmatched speed.',
      longDescription: 'From oncology to rare disease diagnosis, GenomicsPro enables clinicians to make treatment decisions based on individual genetic profiles. Our automated bioinformatics pipeline transforms raw sequencing data into actionable clinical insights within 24 hours.',
      features: [
        'Whole exome and targeted panel sequencing',
        'Liquid biopsy for early cancer detection',
        'Pharmacogenomics for drug response prediction',
        'Automated variant interpretation',
        'ACMG-compliant clinical reporting',
        'Turnaround time: 24-48 hours',
      ],
      specs: [
        { label: 'Coverage', value: '>99% at 20x depth' },
        { label: 'Variants Detected', value: 'SNVs, CNVs, SVs, Indels' },
        { label: 'Certifications', value: 'CAP/CLIA, CE-IVD, ISO 15189' },
      ],
    },
  ]

  const certifications = [
    {
      name: 'CLIA Certified',
      description: 'Clinical Laboratory Improvement Amendments',
      icon: FiAward,
    },
    {
      name: 'CAP Accredited',
      description: 'College of American Pathologists',
      icon: FiCheckCircle,
    },
    {
      name: 'CE-IVD',
      description: 'European In Vitro Diagnostic',
      icon: FiCheckCircle,
    },
  ]

  const benefits = [
    {
      icon: FiClock,
      title: 'Faster Diagnosis',
      description: 'Reduce time-to-diagnosis by up to 60% with rapid point-of-care testing and AI-accelerated image analysis.',
    },
    {
      icon: FiTarget,
      title: 'Improved Accuracy',
      description: 'AI-enhanced diagnostics reduce false positives by 30% and identify subtle abnormalities invisible to the human eye.',
    },
    {
      icon: FiUsers,
      title: 'Better Patient Outcomes',
      description: 'Earlier detection and more accurate diagnoses lead to better treatment selection and improved survival rates.',
    },
    {
      icon: FiTrendingUp,
      title: 'Laboratory Efficiency',
      description: 'Automation and high-throughput systems increase testing capacity while reducing operational costs by 25%.',
    },
  ]

  return (
    <>
      <PageHeader
        title="Diagnostic Systems"
        subtitle="Advanced diagnostic solutions that combine AI intelligence with clinical precision. From rapid point-of-care testing to comprehensive genomic analysis, our platforms empower clinicians with accurate, actionable insights."
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
                      Diagnostic Excellence
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Diagnostics That{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, brand.600, accent.500)',
                          'linear(to-r, brand.300, accent.300)'
                        )}
                        bgClip="text"
                      >
                        Change Lives
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      In medicine, accurate diagnosis is everything. Our diagnostic systems combine 
                      cutting-edge AI, advanced imaging, and molecular testing to give clinicians 
                      the insights they need to make life-saving decisions.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      From routine blood work to complex genomic analysis, Vogt MedTech's diagnostic 
                      platforms deliver speed, accuracy, and reliability that healthcare providers 
                      depend on every day.
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
                      Request Information
                    </Button>
                    <Button
                      as={Link}
                      href="#products"
                      size="lg"
                      variant="outline"
                      leftIcon={<FaPlay />}
                    >
                      View Systems
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
                    alt="Diagnostic Systems"
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
                      Trusted by 750+ Clinical Laboratories Worldwide
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
                Why Healthcare Providers Choose Vogt MedTech
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our diagnostic systems are built on four core principles that deliver 
                exceptional clinical and operational value.
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
        <Container maxW="container.xl">
          <VStack spacing={4} mb={20} textAlign="center">
            <FallInPlace>
              <Badge
                colorScheme="purple"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={4}
              >
                Diagnostic Platforms
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Clinical-Grade Diagnostic Systems
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                From multi-parameter analyzers to AI-powered imaging and genomic sequencing, 
                our platforms set new standards for diagnostic medicine.
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
                            Key Capabilities
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
                            Performance Metrics
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
                            href={`/solutions/diagnostics/${product.id}`}
                            size="lg"
                            variant="outline"
                          >
                            View Details
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
                Measurable Clinical Impact
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our diagnostic systems deliver quantifiable improvements across key clinical 
                and operational metrics.
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
                  align="start"
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
                    bgGradient="linear(to-br, accent.500, purple.500)"
                  >
                    <Icon as={benefit.icon} boxSize={7} color="white" />
                  </Flex>
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

      {/* Quality & Compliance Section */}
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
                      Regulatory Excellence
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Laboratory-Grade{' '}
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
                      All Vogt MedTech diagnostic systems are developed and manufactured in 
                      accordance with the most stringent regulatory standards for clinical diagnostics.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      Our quality management systems meet CLIA, CAP, CE-IVD, and ISO 15189 requirements, 
                      ensuring consistent performance and patient safety across all testing environments.
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
                          bgGradient="linear(to-br, accent.500, purple.500)"
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
                    alt="Laboratory Quality"
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
                bgGradient: 'linear(to-r, accent.500, purple.500)',
              }}
            >
              <VStack spacing={8} textAlign="center">
                <Flex
                  align="center"
                  justify="center"
                  w={20}
                  h={20}
                  borderRadius="full"
                  bgGradient="linear(to-br, accent.500, purple.500)"
                >
                  <Icon as={FaMicroscope} boxSize={10} color="white" />
                </Flex>
                <Text
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight="500"
                  fontStyle="italic"
                  lineHeight="tall"
                  color={accentColor}
                  maxW="4xl"
                >
                  "The Spectrum Analyzer has transformed our laboratory workflow. We've increased 
                  our daily test capacity by 40% while maintaining exceptional accuracy. The AI 
                  quality control catches issues before they become problems. It's simply the 
                  best clinical analyzer we've ever used."
                </Text>
                <Divider maxW="200px" />
                <VStack spacing={2}>
                  <Heading as="h4" size="md">
                    Dr. Robert Chen, Ph.D.
                  </Heading>
                  <Text color={mutedColor} fontSize="md">
                    Director of Clinical Laboratory, Metropolitan Medical Center
                  </Text>
                  <HStack spacing={1} pt={2}>
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} as={FiActivity} color="accent.500" boxSize={5} />
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
              'linear(to-br, accent.600, purple.500)',
              'linear(to-br, accent.500, purple.400)'
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
                  <Icon as={FaMicroscope} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Transform Your Diagnostic Capabilities
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Join 750+ clinical laboratories worldwide who trust Vogt MedTech diagnostic 
                    systems to deliver accurate, reliable results. Schedule a demonstration and 
                    discover how our technology can elevate your laboratory's performance.
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
                    href="/solutions/digital-health"
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
                    Explore Digital Health
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
