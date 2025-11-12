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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import {
  FiAward,
  FiBook,
  FiCheckCircle,
  FiExternalLink,
  FiFileText,
  FiGlobe,
  FiSearch,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { FaArrowRight, FaGraduationCap, FaMicroscope } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function PatentsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const stats = [
    {
      value: '180+',
      label: 'Granted Patents',
      icon: FiShield,
      color: 'brand.500',
    },
    {
      value: '95+',
      label: 'Peer-Reviewed Papers',
      icon: FiBook,
      color: 'accent.500',
    },
    {
      value: '45+',
      label: 'Countries Protected',
      icon: FiGlobe,
      color: 'purple.500',
    },
    {
      value: '3,200+',
      label: 'Citations',
      icon: FaGraduationCap,
      color: 'pink.500',
    },
  ]

  const patentCategories = [
    {
      category: 'Artificial Intelligence',
      count: 42,
      description: 'Machine learning algorithms, neural networks, and computer vision for medical applications.',
      icon: FaMicroscope,
      color: 'purple.500',
    },
    {
      category: 'Surgical Robotics',
      count: 38,
      description: 'Robotic surgical systems, haptic feedback, motion control, and autonomous capabilities.',
      icon: FiShield,
      color: 'brand.500',
    },
    {
      category: 'Medical Devices',
      count: 56,
      description: 'Patient monitoring, diagnostic equipment, and therapeutic devices.',
      icon: FiFileText,
      color: 'accent.500',
    },
    {
      category: 'Digital Health',
      count: 28,
      description: 'Remote monitoring, telemedicine, health data analytics, and mobile health applications.',
      icon: FiTrendingUp,
      color: 'pink.500',
    },
    {
      category: 'Diagnostics',
      count: 16,
      description: 'Laboratory equipment, point-of-care testing, and molecular diagnostics.',
      icon: FiBook,
      color: 'purple.500',
    },
  ]

  const featuredPatents = [
    {
      id: 'US11234567',
      title: 'AI-Powered Diagnostic Imaging System with Real-Time Anomaly Detection',
      inventors: 'Chen, L.; Rodriguez, M.; Park, S.',
      filingDate: 'March 2022',
      grantDate: 'January 2024',
      jurisdiction: 'United States',
      abstract: 'A medical imaging system employing deep convolutional neural networks for real-time detection and classification of pathological findings across multiple imaging modalities including CT, MRI, and X-ray.',
      categories: ['Artificial Intelligence', 'Diagnostics'],
      status: 'Granted',
      color: 'purple.500',
    },
    {
      id: 'EP3987654',
      title: 'Haptic Feedback System for Minimally Invasive Robotic Surgery',
      inventors: 'Williams, S.; Thompson, R.; Foster, A.',
      filingDate: 'June 2021',
      grantDate: 'August 2023',
      jurisdiction: 'European Union',
      abstract: 'A force-feedback mechanism for surgical robots that provides surgeons with tactile sensation during minimally invasive procedures, enhancing precision and safety through realistic tissue interaction feedback.',
      categories: ['Surgical Robotics', 'Medical Devices'],
      status: 'Granted',
      color: 'brand.500',
    },
    {
      id: 'US11456789',
      title: 'Multi-Parameter Patient Monitoring System with Predictive Analytics',
      inventors: 'Martinez, L.; Anderson, K.; Patel, D.',
      filingDate: 'September 2020',
      grantDate: 'November 2023',
      jurisdiction: 'United States',
      abstract: 'An integrated monitoring platform utilizing machine learning algorithms to predict patient deterioration 30-60 minutes in advance through continuous analysis of vital signs, laboratory values, and clinical context.',
      categories: ['Medical Devices', 'Artificial Intelligence'],
      status: 'Granted',
      color: 'accent.500',
    },
    {
      id: 'WO2023123456',
      title: 'Autonomous Suturing System for Robotic Surgical Applications',
      inventors: 'Wu, J.; Kim, H.; Garcia, M.',
      filingDate: 'January 2023',
      grantDate: 'Pending',
      jurisdiction: 'PCT (International)',
      abstract: 'A semi-autonomous robotic system capable of performing standardized suturing tasks under surgeon supervision, utilizing computer vision for needle tracking and reinforcement learning for optimal suture placement.',
      categories: ['Surgical Robotics', 'Artificial Intelligence'],
      status: 'Pending',
      color: 'pink.500',
    },
  ]

  const publications = [
    {
      title: 'Deep Learning for Early Detection of Pancreatic Cancer in CT Imaging',
      authors: 'Chen, L., Rodriguez, M., Park, S., et al.',
      journal: 'Nature Medicine',
      year: '2024',
      volume: '30',
      pages: '1234-1242',
      doi: '10.1038/s41591-024-12345',
      citations: 87,
      impact: 'High Impact',
      summary: 'Demonstrated AI system achieving 94.2% sensitivity for pancreatic cancer detection 6 months earlier than current clinical standards.',
      categories: ['Artificial Intelligence', 'Diagnostics'],
    },
    {
      title: 'Clinical Validation of AI-Assisted Cardiac MRI Analysis: A Multi-Center Study',
      authors: 'Martinez, L., Foster, A., Thompson, R., et al.',
      journal: 'Journal of the American College of Cardiology',
      year: '2024',
      volume: '83',
      pages: '567-578',
      doi: '10.1016/j.jacc.2024.01.234',
      citations: 63,
      impact: 'High Impact',
      summary: 'Multi-center trial validating AI cardiac MRI analysis across 12 institutions, demonstrating 97.8% concordance with expert cardiologists.',
      categories: ['Artificial Intelligence', 'Diagnostics'],
    },
    {
      title: 'Robotic Surgery Outcomes: Five-Year Analysis of 10,000 Procedures',
      authors: 'Williams, S., Wu, J., Anderson, K., et al.',
      journal: 'JAMA Surgery',
      year: '2023',
      volume: '158',
      pages: '789-798',
      doi: '10.1001/jamasurg.2023.4567',
      citations: 142,
      impact: 'High Impact',
      summary: 'Comprehensive analysis of robotic surgery outcomes demonstrating 60% reduction in complications and 45% faster recovery compared to traditional approaches.',
      categories: ['Surgical Robotics'],
    },
    {
      title: 'Predictive Analytics in Critical Care: Machine Learning for Patient Deterioration',
      authors: 'Park, J., Kim, H., Patel, D., et al.',
      journal: 'The Lancet Digital Health',
      year: '2023',
      volume: '5',
      pages: 'e234-e243',
      doi: '10.1016/S2589-7500(23)00123-4',
      citations: 98,
      impact: 'High Impact',
      summary: 'Novel ML algorithm predicting ICU patient deterioration 45 minutes in advance with 89.3% accuracy across diverse patient populations.',
      categories: ['Artificial Intelligence', 'Digital Health'],
    },
    {
      title: 'Haptic Feedback in Robotic Surgery: Impact on Surgical Precision and Outcomes',
      authors: 'Thompson, R., Garcia, M., Foster, A., et al.',
      journal: 'Annals of Surgery',
      year: '2023',
      volume: '277',
      pages: '456-465',
      doi: '10.1097/SLA.0000000000005678',
      citations: 76,
      impact: 'High Impact',
      summary: 'Randomized controlled trial demonstrating 34% improvement in surgical precision and 28% reduction in tissue trauma with haptic feedback.',
      categories: ['Surgical Robotics', 'Medical Devices'],
    },
    {
      title: 'Remote Patient Monitoring for Heart Failure: A Randomized Clinical Trial',
      authors: 'Foster, A., Martinez, L., Anderson, K., et al.',
      journal: 'Circulation',
      year: '2023',
      volume: '147',
      pages: '1123-1134',
      doi: '10.1161/CIRCULATIONAHA.123.012345',
      citations: 124,
      impact: 'High Impact',
      summary: 'RCT showing 58% reduction in heart failure readmissions with continuous remote monitoring and AI-driven early intervention protocols.',
      categories: ['Digital Health'],
    },
    {
      title: 'Point-of-Care Diagnostics: Validation of Rapid Multi-Parameter Testing',
      authors: 'Rodriguez, M., Chen, L., Patel, D., et al.',
      journal: 'Clinical Chemistry',
      year: '2022',
      volume: '68',
      pages: '890-901',
      doi: '10.1093/clinchem/hvac123',
      citations: 89,
      impact: 'Medium Impact',
      summary: 'Validation study demonstrating 99.2% concordance between point-of-care analyzer and central laboratory across 25 analytes.',
      categories: ['Diagnostics'],
    },
    {
      title: 'Autonomous Surgical Task Execution: Feasibility and Safety in Preclinical Models',
      authors: 'Wu, J., Kim, H., Williams, S., et al.',
      journal: 'Science Robotics',
      year: '2024',
      volume: '9',
      pages: 'eabc1234',
      doi: '10.1126/scirobotics.abc1234',
      citations: 45,
      impact: 'High Impact',
      summary: 'First demonstration of semi-autonomous robotic suturing with 99.3% task completion rate and safety profile matching expert surgeons.',
      categories: ['Surgical Robotics', 'Artificial Intelligence'],
    },
  ]

  const researchAreas = [
    { name: 'Artificial Intelligence', count: 45 },
    { name: 'Surgical Robotics', count: 38 },
    { name: 'Medical Devices', count: 28 },
    { name: 'Digital Health', count: 22 },
    { name: 'Diagnostics', count: 18 },
  ]

  return (
    <>
      <PageHeader
        title="Patents & Publications"
        subtitle="Protecting innovation and advancing medical science through rigorous research. Our intellectual property portfolio and peer-reviewed publications represent breakthrough technologies backed by scientific evidence."
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
                      Intellectual Property Leadership
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Innovation{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, accent.600, brand.500)',
                          'linear(to-r, accent.300, brand.300)'
                        )}
                        bgClip="text"
                      >
                        Protected & Validated
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      Our intellectual property portfolio represents over a decade of groundbreaking 
                      research and development. With 180+ granted patents across 45 countries, we protect 
                      the innovations that are transforming modern medicine.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      Every patent and publication reflects our commitment to advancing medical science 
                      through rigorous research, peer review, and clinical validation. Our work has been 
                      recognized in the world's leading medical journals with over 3,200 citations.
                    </Text>
                  </Box>
                  <HStack spacing={4}>
                    <Button
                      as={Link}
                      href="#patents"
                      size="lg"
                      colorScheme="accent"
                      rightIcon={<FaArrowRight />}
                    >
                      Browse Patents
                    </Button>
                    <Button
                      as={Link}
                      href="#publications"
                      size="lg"
                      variant="outline"
                    >
                      View Publications
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
                    alt="Patents and Publications"
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
                      180+ Patents Protecting Global Innovation
                    </Text>
                  </Box>
                </Box>
              </FallInPlace>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Patent Categories Section */}
      <Section id="patents" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Patent Portfolio by Category
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our patents span critical areas of medical technology innovation, 
                from AI and robotics to diagnostics and digital health.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {patentCategories.map((category, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={8}
                  h="full"
                  _hover={{
                    shadow: '2xl',
                    transform: 'translateY(-4px)',
                    borderColor: category.color,
                  }}
                  transition="all 0.3s"
                >
                  <VStack align="start" spacing={5}>
                    <HStack justify="space-between" w="full">
                      <Flex
                        align="center"
                        justify="center"
                        w={14}
                        h={14}
                        borderRadius="xl"
                        bgGradient={`linear(to-br, ${category.color}, ${category.color})`}
                      >
                        <Icon as={category.icon} boxSize={7} color="white" />
                      </Flex>
                      <Badge
                        colorScheme="brand"
                        fontSize="lg"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        {category.count}
                      </Badge>
                    </HStack>
                    <Heading as="h3" size="md">
                      {category.category}
                    </Heading>
                    <Text color={mutedColor} fontSize="sm" lineHeight="tall">
                      {category.description}
                    </Text>
                  </VStack>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Featured Patents Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
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
                Featured Patents
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Breakthrough Technologies
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                A selection of our most significant patent innovations protecting 
                the future of medical technology.
              </Text>
            </FallInPlace>
          </VStack>

          <VStack spacing={8}>
            {featuredPatents.map((patent, index) => (
              <FallInPlace key={patent.id} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="lg"
                  w="full"
                  _hover={{
                    shadow: '2xl',
                    borderColor: patent.color,
                  }}
                  transition="all 0.3s"
                >
                  <Grid
                    templateColumns={{ base: '1fr', lg: '250px 1fr' }}
                    gap={0}
                  >
                    {/* Left Column - Metadata */}
                    <GridItem
                      bg={featureBg}
                      p={8}
                      borderRight={{ lg: '2px' }}
                      borderRightColor={{ lg: cardBorder }}
                    >
                      <VStack align="start" spacing={4}>
                        <Badge
                          colorScheme={patent.status === 'Granted' ? 'green' : 'yellow'}
                          fontSize="xs"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {patent.status}
                        </Badge>
                        <VStack align="start" spacing={2} w="full">
                          <Text fontSize="xs" color={mutedColor} fontWeight="600">
                            Patent Number
                          </Text>
                          <Text fontSize="md" fontWeight="bold" color={patent.color}>
                            {patent.id}
                          </Text>
                        </VStack>
                        <Divider />
                        <VStack align="start" spacing={2} w="full">
                          <Text fontSize="xs" color={mutedColor} fontWeight="600">
                            Filing Date
                          </Text>
                          <Text fontSize="sm">{patent.filingDate}</Text>
                        </VStack>
                        <VStack align="start" spacing={2} w="full">
                          <Text fontSize="xs" color={mutedColor} fontWeight="600">
                            Grant Date
                          </Text>
                          <Text fontSize="sm">{patent.grantDate}</Text>
                        </VStack>
                        <VStack align="start" spacing={2} w="full">
                          <Text fontSize="xs" color={mutedColor} fontWeight="600">
                            Jurisdiction
                          </Text>
                          <Text fontSize="sm">{patent.jurisdiction}</Text>
                        </VStack>
                      </VStack>
                    </GridItem>

                    {/* Right Column - Details */}
                    <GridItem p={8}>
                      <VStack align="start" spacing={6}>
                        <Box>
                          <Heading as="h3" size="md" mb={3}>
                            {patent.title}
                          </Heading>
                          <Text fontSize="sm" color={mutedColor} mb={4}>
                            <strong>Inventors:</strong> {patent.inventors}
                          </Text>
                          <Text fontSize="sm" color={mutedColor} lineHeight="tall">
                            {patent.abstract}
                          </Text>
                        </Box>

                        <HStack spacing={2} flexWrap="wrap">
                          {patent.categories.map((category, i) => (
                            <Tag
                              key={i}
                              size="sm"
                              colorScheme="brand"
                              borderRadius="full"
                            >
                              {category}
                            </Tag>
                          ))}
                        </HStack>

                        <Button
                          size="sm"
                          variant="outline"
                          rightIcon={<FiExternalLink />}
                        >
                          View Full Patent
                        </Button>
                      </VStack>
                    </GridItem>
                  </Grid>
                </Box>
              </FallInPlace>
            ))}
          </VStack>

          <Box textAlign="center" mt={12}>
            <FallInPlace>
              <Button
                as={Link}
                href="/innovation/patents/search"
                size="lg"
                colorScheme="brand"
                rightIcon={<FiSearch />}
              >
                Search Full Patent Database
              </Button>
            </FallInPlace>
          </Box>
        </Container>
      </Section>

      {/* Publications Section */}
      <Section id="publications" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
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
                Scientific Publications
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Peer-Reviewed Research
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our research team regularly publishes in top-tier medical and scientific 
                journals, contributing to the global body of medical knowledge.
              </Text>
            </FallInPlace>
          </VStack>

          {/* Search and Filter */}
          <FallInPlace>
            <Box mb={12}>
              <HStack spacing={4} mb={6} flexWrap="wrap">
                <InputGroup maxW="400px">
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="gray.400" />
                  </InputLeftElement>
                  <Input
                    placeholder="Search publications..."
                    bg={cardBg}
                    border="2px"
                    borderColor={cardBorder}
                  />
                </InputGroup>
                <HStack spacing={2} flexWrap="wrap">
                  {researchAreas.map((area, i) => (
                    <Button
                      key={i}
                      size="sm"
                      variant={i === 0 ? 'solid' : 'outline'}
                      colorScheme={i === 0 ? 'brand' : 'gray'}
                    >
                      {area.name} ({area.count})
                    </Button>
                  ))}
                </HStack>
              </HStack>
            </Box>
          </FallInPlace>

          {/* Publications List */}
          <VStack spacing={6}>
            {publications.map((pub, index) => (
              <FallInPlace key={index} delay={0.05 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="xl"
                  p={8}
                  w="full"
                  _hover={{
                    shadow: 'xl',
                    borderColor: 'accent.500',
                  }}
                  transition="all 0.3s"
                >
                  <Grid templateColumns={{ base: '1fr', lg: '1fr 200px' }} gap={8}>
                    <GridItem>
                      <VStack align="start" spacing={4}>
                        <HStack spacing={3} flexWrap="wrap">
                          <Badge colorScheme="green" fontSize="xs" px={3} py={1} borderRadius="full">
                            {pub.impact}
                          </Badge>
                          <Badge colorScheme="gray" fontSize="xs" px={3} py={1} borderRadius="full">
                            {pub.year}
                          </Badge>
                          <HStack spacing={1}>
                            <Icon as={FiUsers} boxSize={3} color={mutedColor} />
                            <Text fontSize="xs" color={mutedColor}>
                              {pub.citations} citations
                            </Text>
                          </HStack>
                        </HStack>

                        <Heading as="h3" size="md" lineHeight="shorter">
                          {pub.title}
                        </Heading>

                        <Text fontSize="sm" color={mutedColor}>
                          <strong>Authors:</strong> {pub.authors}
                        </Text>

                        <Text fontSize="sm" color={mutedColor}>
                          <em>{pub.journal}</em>, {pub.year}; {pub.volume}: {pub.pages}
                        </Text>

                        <Text fontSize="sm" color={mutedColor} lineHeight="tall">
                          {pub.summary}
                        </Text>

                        <HStack spacing={2} flexWrap="wrap">
                          {pub.categories.map((category, i) => (
                            <Tag
                              key={i}
                              size="sm"
                              colorScheme="accent"
                              borderRadius="full"
                            >
                              {category}
                            </Tag>
                          ))}
                        </HStack>
                      </VStack>
                    </GridItem>

                    <GridItem>
                      <VStack align="stretch" spacing={3}>
                        <Box
                          p={4}
                          bg={featureBg}
                          borderRadius="lg"
                          border="1px"
                          borderColor={cardBorder}
                        >
                          <Text fontSize="xs" color={mutedColor} mb={2} fontWeight="600">
                            DOI
                          </Text>
                          <Text fontSize="xs" fontFamily="mono" wordBreak="break-all">
                            {pub.doi}
                          </Text>
                        </Box>
                        <Button
                          size="sm"
                          colorScheme="brand"
                          rightIcon={<FiExternalLink />}
                          w="full"
                        >
                          View Paper
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          w="full"
                        >
                          Download PDF
                        </Button>
                      </VStack>
                    </GridItem>
                  </Grid>
                </Box>
              </FallInPlace>
            ))}
          </VStack>

          <Box textAlign="center" mt={12}>
            <FallInPlace>
              <Button
                as={Link}
                href="/innovation/publications/all"
                size="lg"
                colorScheme="accent"
                rightIcon={<FaArrowRight />}
              >
                View All Publications
              </Button>
            </FallInPlace>
          </Box>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Box
            position="relative"
            bgGradient={useColorModeValue(
              'linear(to-br, accent.600, brand.600)',
              'linear(to-br, accent.500, brand.500)'
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
                  <Icon as={FiBook} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Collaborate on Research
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Interested in licensing our technology or collaborating on research? 
                    Our technology transfer team works with academic institutions, 
                    healthcare organizations, and industry partners worldwide.
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
                    Contact Licensing Team
                  </Button>
                  <Button
                    as={Link}
                    href="/innovation/rnd"
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
                    Learn About Our R&D
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
