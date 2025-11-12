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
  Tag,
  AspectRatio,
} from '@chakra-ui/react'
import {
  FiAward,
  FiBookOpen,
  FiClock,
  FiDownload,
  FiEye,
  FiFileText,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { FaArrowRight, FaBrain, FaChartLine, FaRobot } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function WhitepapersPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const stats = [
    {
      value: '50+',
      label: 'Technical Papers',
      icon: FiFileText,
      color: 'brand.500',
    },
    {
      value: '25K+',
      label: 'Downloads',
      icon: FiDownload,
      color: 'accent.500',
    },
    {
      value: '15+',
      label: 'Research Topics',
      icon: FiBookOpen,
      color: 'purple.500',
    },
    {
      value: '100%',
      label: 'Free Access',
      icon: FiAward,
      color: 'pink.500',
    },
  ]

  const categories = [
    { name: 'All Papers', count: 50 },
    { name: 'AI & Machine Learning', count: 12 },
    { name: 'Surgical Robotics', count: 10 },
    { name: 'Diagnostics', count: 8 },
    { name: 'Digital Health', count: 9 },
    { name: 'Clinical Research', count: 11 },
  ]

  const whitepapers = [
    {
      id: 'ai-diagnostic-accuracy',
      title: 'Improving Diagnostic Accuracy with Deep Learning: A Comprehensive Analysis',
      category: 'AI & Machine Learning',
      publishDate: 'October 2024',
      readTime: '25 min read',
      downloads: 3420,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'This whitepaper examines the application of deep convolutional neural networks in medical imaging diagnostics, presenting data from multi-center clinical trials demonstrating 97.2% accuracy across radiology, pathology, and cardiology specialties.',
      authors: 'Dr. Lisa Chen, Dr. Michael Rodriguez, Dr. Sarah Park',
      topics: ['Deep Learning', 'Medical Imaging', 'Clinical Validation'],
      pages: 45,
      color: 'purple.500',
      featured: true,
    },
    {
      id: 'robotic-surgery-outcomes',
      title: 'Robotic Surgery: Five-Year Outcomes Analysis and Best Practices',
      category: 'Surgical Robotics',
      publishDate: 'September 2024',
      readTime: '35 min read',
      downloads: 2890,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Comprehensive analysis of 10,000+ robotic surgical procedures across multiple specialties, demonstrating 60% reduction in complications, 45% faster recovery times, and 92% patient satisfaction scores compared to traditional approaches.',
      authors: 'Dr. Sarah Williams, Dr. James Wu, Dr. Amanda Foster',
      topics: ['Robotic Surgery', 'Clinical Outcomes', 'Patient Safety'],
      pages: 52,
      color: 'brand.500',
      featured: true,
    },
    {
      id: 'remote-patient-monitoring',
      title: 'Remote Patient Monitoring: Impact on Readmission Rates and Healthcare Costs',
      category: 'Digital Health',
      publishDate: 'August 2024',
      readTime: '20 min read',
      downloads: 4150,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Evidence-based analysis of remote monitoring programs across 50+ healthcare institutions, showing 58% reduction in 30-day readmissions for heart failure and COPD patients, with annual cost savings averaging $4.2M per institution.',
      authors: 'Dr. Amanda Foster, Dr. Robert Thompson, Dr. Jennifer Park',
      topics: ['Remote Monitoring', 'Value-Based Care', 'Cost Reduction'],
      pages: 38,
      color: 'accent.500',
      featured: true,
    },
    {
      id: 'ai-predictive-analytics',
      title: 'Predictive Analytics in Critical Care: Early Warning Systems and Clinical Decision Support',
      category: 'AI & Machine Learning',
      publishDate: 'July 2024',
      readTime: '30 min read',
      downloads: 2650,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Technical examination of machine learning models for predicting patient deterioration in ICU settings, achieving 89.3% accuracy with 45-minute advance warning, enabling proactive interventions that reduce adverse events by 62%.',
      authors: 'Dr. Jennifer Park, Dr. David Patel, Dr. Michael Rodriguez',
      topics: ['Predictive Analytics', 'ICU Care', 'Machine Learning'],
      pages: 42,
      color: 'purple.500',
      featured: false,
    },
    {
      id: 'point-of-care-diagnostics',
      title: 'Point-of-Care Diagnostics: Transforming Laboratory Medicine',
      category: 'Diagnostics',
      publishDate: 'June 2024',
      readTime: '22 min read',
      downloads: 3180,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Analysis of point-of-care testing implementation across diverse care settings, demonstrating 94% reduction in test turnaround time, 73% decrease in unnecessary patient transfers, and 89% improvement in clinical decision-making speed.',
      authors: 'Dr. Michael Rodriguez, Dr. Lisa Chen, Dr. Robert Thompson',
      topics: ['Laboratory Medicine', 'Point-of-Care', 'Diagnostics'],
      pages: 35,
      color: 'accent.500',
      featured: false,
    },
    {
      id: 'haptic-feedback-robotics',
      title: 'Haptic Feedback in Surgical Robotics: Enhancing Precision and Safety',
      category: 'Surgical Robotics',
      publishDate: 'May 2024',
      readTime: '28 min read',
      downloads: 2340,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Technical whitepaper on force-feedback mechanisms in robotic surgery, presenting randomized controlled trial data showing 34% improvement in surgical precision, 28% reduction in tissue trauma, and 85% surgeon preference over non-haptic systems.',
      authors: 'Dr. James Wu, Dr. Sarah Williams, Dr. Amanda Foster',
      topics: ['Haptic Technology', 'Surgical Precision', 'Human-Robot Interaction'],
      pages: 48,
      color: 'brand.500',
      featured: false,
    },
    {
      id: 'federated-learning-healthcare',
      title: 'Federated Learning in Healthcare: Privacy-Preserving AI Model Training',
      category: 'AI & Machine Learning',
      publishDate: 'April 2024',
      readTime: '26 min read',
      downloads: 1950,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Exploration of federated learning architecture for healthcare AI, enabling collaborative model training across institutions without sharing patient data, maintaining HIPAA compliance while achieving performance equivalent to centralized training.',
      authors: 'Dr. David Patel, Dr. Lisa Chen, Dr. Sarah Park',
      topics: ['Federated Learning', 'Data Privacy', 'HIPAA Compliance'],
      pages: 40,
      color: 'purple.500',
      featured: false,
    },
    {
      id: 'interoperability-ehr',
      title: 'Healthcare Interoperability: Integrating Medical Devices with EHR Systems',
      category: 'Digital Health',
      publishDate: 'March 2024',
      readTime: '18 min read',
      downloads: 2780,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Technical guide to medical device-EHR integration using HL7 FHIR standards, presenting architecture patterns, security considerations, and implementation case studies from 100+ successful integrations across major EHR platforms.',
      authors: 'Dr. Robert Thompson, Dr. Amanda Foster, Dr. Michael Rodriguez',
      topics: ['Interoperability', 'FHIR', 'EHR Integration'],
      pages: 32,
      color: 'accent.500',
      featured: false,
    },
    {
      id: 'clinical-validation-ai',
      title: 'Clinical Validation of AI Medical Devices: Regulatory Pathway and Best Practices',
      category: 'Clinical Research',
      publishDate: 'February 2024',
      readTime: '32 min read',
      downloads: 3560,
      thumbnail: '/static/images/avatar.jpg',
      abstract: 'Comprehensive guide to FDA regulatory pathway for AI/ML medical devices, covering premarket submission strategies, clinical trial design, performance validation, and post-market surveillance requirements with real-world examples.',
      authors: 'Dr. Jennifer Park, Dr. Sarah Williams, Dr. Lisa Chen',
      topics: ['FDA Regulation', 'Clinical Trials', 'AI Validation'],
      pages: 55,
      color: 'brand.500',
      featured: false,
    },
  ]

  const featuredPapers = whitepapers.filter((paper) => paper.featured)
  const recentPapers = whitepapers.slice(3)

  return (
    <>
      <PageHeader
        title="Whitepapers"
        subtitle="In-depth technical and clinical research from Vogt MedTech. Access our comprehensive collection of whitepapers covering AI, robotics, diagnostics, and digital health innovations—all available for free download."
        gradientColors={['brand.600', 'accent.500']}
      />

      {/* Stats Section */}
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

      {/* Categories */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <VStack spacing={4} textAlign="center">
              <FallInPlace>
                <Heading as="h2" size="xl">
                  Browse by Topic
                </Heading>
              </FallInPlace>
              <FallInPlace delay={0.2}>
                <Text color={mutedColor} maxW="2xl">
                  Explore our comprehensive collection of research across multiple domains 
                  of medical technology innovation.
                </Text>
              </FallInPlace>
            </VStack>

            <FallInPlace delay={0.3}>
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

      {/* Featured Whitepapers */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={12} textAlign="center">
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
                Featured Research
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Most Popular Whitepapers
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} maxW="3xl">
                Our most downloaded and impactful research papers covering breakthrough 
                technologies and clinical evidence.
              </Text>
            </FallInPlace>
          </VStack>

          <VStack spacing={12}>
            {featuredPapers.map((paper, index) => (
              <FallInPlace key={paper.id} delay={0.1 * index}>
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
                  w="full"
                >
                  <Grid
                    templateColumns={{ base: '1fr', lg: '400px 1fr' }}
                    gap={0}
                  >
                    {/* Thumbnail */}
                    <GridItem>
                      <Box position="relative" h={{ base: '250px', lg: 'full' }} minH={{ lg: '400px' }}>
                        <Image
                          src={paper.thumbnail}
                          alt={paper.title}
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
                          bgGradient={`linear(to-br, ${paper.color}Alpha.400, transparent)`}
                        />
                        <Badge
                          position="absolute"
                          top={4}
                          left={4}
                          colorScheme="brand"
                          fontSize="xs"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          Featured
                        </Badge>
                      </Box>
                    </GridItem>

                    {/* Content */}
                    <GridItem p={{ base: 8, md: 12 }}>
                      <VStack align="start" spacing={6}>
                        <Box>
                          <HStack spacing={4} mb={4} flexWrap="wrap">
                            <Badge colorScheme="purple" fontSize="xs" px={3} py={1} borderRadius="full">
                              {paper.category}
                            </Badge>
                            <HStack spacing={2} color={mutedColor} fontSize="sm">
                              <Icon as={FiClock} boxSize={4} />
                              <Text>{paper.readTime}</Text>
                            </HStack>
                            <HStack spacing={2} color={mutedColor} fontSize="sm">
                              <Icon as={FiDownload} boxSize={4} />
                              <Text>{paper.downloads.toLocaleString()} downloads</Text>
                            </HStack>
                          </HStack>

                          <Heading as="h3" size="lg" mb={4} lineHeight="shorter">
                            {paper.title}
                          </Heading>

                          <Text fontSize="sm" color={mutedColor} mb={4}>
                            <strong>Authors:</strong> {paper.authors}
                          </Text>

                          <Text color={mutedColor} lineHeight="tall" mb={4}>
                            {paper.abstract}
                          </Text>

                          <HStack spacing={2} flexWrap="wrap" mb={4}>
                            {paper.topics.map((topic, i) => (
                              <Tag key={i} size="sm" colorScheme="brand" borderRadius="full">
                                {topic}
                              </Tag>
                            ))}
                          </HStack>
                        </Box>

                        <Divider />

                        <HStack justify="space-between" w="full" flexWrap="wrap">
                          <HStack spacing={6} color={mutedColor} fontSize="sm">
                            <HStack>
                              <Icon as={FiFileText} boxSize={4} />
                              <Text>{paper.pages} pages</Text>
                            </HStack>
                            <HStack>
                              <Icon as={FiUsers} boxSize={4} />
                              <Text>{paper.publishDate}</Text>
                            </HStack>
                          </HStack>

                          <HStack spacing={3}>
                            <Button
                              colorScheme="brand"
                              size="lg"
                              leftIcon={<FiDownload />}
                            >
                              Download PDF
                            </Button>
                            <Button
                              variant="outline"
                              size="lg"
                              leftIcon={<FiEye />}
                            >
                              Preview
                            </Button>
                          </HStack>
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

      {/* Recent Whitepapers Grid */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={12} textAlign="center">
            <FallInPlace>
              <Heading as="h2" size="xl">
                Recent Publications
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text color={mutedColor} maxW="2xl">
                Latest research and technical papers from our innovation teams.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {recentPapers.map((paper, index) => (
              <FallInPlace key={paper.id} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  overflow="hidden"
                  h="full"
                  _hover={{
                    shadow: '2xl',
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s"
                >
                  <AspectRatio ratio={16 / 9}>
                    <Box position="relative">
                      <Image
                        src={paper.thumbnail}
                        alt={paper.title}
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
                        bgGradient={`linear(to-br, ${paper.color}Alpha.300, transparent)`}
                      />
                    </Box>
                  </AspectRatio>

                  <VStack align="start" p={6} spacing={4}>
                    <Badge colorScheme="purple" fontSize="xs" px={3} py={1} borderRadius="full">
                      {paper.category}
                    </Badge>

                    <Heading as="h3" size="sm" lineHeight="shorter">
                      {paper.title}
                    </Heading>

                    <Text fontSize="sm" color={mutedColor} noOfLines={3} lineHeight="tall">
                      {paper.abstract}
                    </Text>

                    <Divider />

                    <HStack justify="space-between" w="full" fontSize="xs" color={mutedColor}>
                      <HStack>
                        <Icon as={FiClock} boxSize={3} />
                        <Text>{paper.readTime}</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FiDownload} boxSize={3} />
                        <Text>{paper.downloads.toLocaleString()}</Text>
                      </HStack>
                    </HStack>

                    <Button
                      colorScheme="brand"
                      size="sm"
                      w="full"
                      leftIcon={<FiDownload />}
                    >
                      Download
                    </Button>
                  </VStack>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>

          <Box textAlign="center" mt={12}>
            <FallInPlace>
              <Button
                size="lg"
                colorScheme="brand"
                rightIcon={<FaArrowRight />}
              >
                View All Whitepapers
              </Button>
            </FallInPlace>
          </Box>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section py={{ base: 16, md: 24 }}>
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
                  <Icon as={FiBookOpen} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Stay Updated on New Research
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Subscribe to receive notifications when we publish new whitepapers, 
                    clinical research, and technical documentation. Join 10,000+ healthcare 
                    professionals staying informed on medical technology innovation.
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
                    Subscribe to Updates
                  </Button>
                  <Button
                    as={Link}
                    href="/resources/blog"
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
                    Visit Our Blog
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
