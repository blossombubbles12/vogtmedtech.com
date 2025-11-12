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
  FiCpu,
  FiEye,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { FaArrowRight, FaBrain, FaPlay, FaRobot } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function AIRoboticsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const stats = [
    {
      value: '10M+',
      label: 'Medical Images Analyzed',
      icon: FiEye,
      color: 'purple.500',
    },
    {
      value: '97.2%',
      label: 'AI Diagnostic Accuracy',
      icon: FiTarget,
      color: 'pink.500',
    },
    {
      value: '8,000+',
      label: 'Robotic Procedures',
      icon: FaRobot,
      color: 'brand.500',
    },
    {
      value: '60%',
      label: 'Procedure Time Reduction',
      icon: FiClock,
      color: 'accent.500',
    },
  ]

  const features = [
    {
      icon: FaBrain,
      title: 'Deep Learning Intelligence',
      description: 'Advanced neural networks trained on millions of medical cases provide superhuman pattern recognition and diagnostic support across specialties.',
      stat: '97.2%',
      statLabel: 'Accuracy',
    },
    {
      icon: FiTarget,
      title: 'Surgical Precision',
      description: 'Sub-millimeter robotic accuracy with haptic feedback and tremor filtration enables procedures previously impossible through minimally invasive approaches.',
      stat: '±0.05mm',
      statLabel: 'Precision',
    },
    {
      icon: FiZap,
      title: 'Real-Time Processing',
      description: 'Edge computing and optimized AI models deliver instantaneous analysis during procedures, enabling immediate clinical decision-making.',
      stat: '<100ms',
      statLabel: 'Latency',
    },
    {
      icon: FiLayers,
      title: 'Continuous Learning',
      description: 'Federated learning systems improve AI models with every procedure while maintaining patient privacy and data security.',
      stat: '24/7',
      statLabel: 'Learning',
    },
  ]

  const products = [
    {
      id: 'cognition-ai',
      name: 'CognitionAI™',
      fullName: 'CognitionAI™ Clinical Intelligence Platform',
      category: 'AI-Powered Diagnostics',
      tagline: 'Artificial Intelligence. Human Insight.',
      image: '/static/images/avatar.jpg',
      description: 'A revolutionary AI platform that augments clinical decision-making across radiology, pathology, and diagnostics. CognitionAI analyzes medical images, lab results, and patient data to identify patterns invisible to the human eye.',
      longDescription: 'Trained on 10+ million annotated medical cases, CognitionAI\'s deep learning models achieve accuracy rates that match or exceed specialist physicians. The platform integrates seamlessly with existing PACS and LIS systems, providing real-time analysis and prioritizing urgent findings automatically.',
      features: [
        'Multi-specialty AI models (radiology, pathology, cardiology)',
        'Real-time anomaly detection and classification',
        'Automatic case prioritization by urgency',
        'Explainable AI with visual attention maps',
        'Continuous model updates via federated learning',
        'FDA 510(k) cleared for clinical decision support',
      ],
      specs: [
        { label: 'Diagnostic Accuracy', value: '97.2% sensitivity, 98.5% specificity' },
        { label: 'Processing Speed', value: '<30 seconds per case' },
        { label: 'Supported Modalities', value: 'CT, MRI, X-ray, Ultrasound, WSI' },
      ],
    },
    {
      id: 'precision-robot',
      name: 'PrecisionBot™',
      fullName: 'PrecisionBot™ Surgical Robotic System',
      category: 'Robotic Surgery',
      tagline: 'Redefining Surgical Possibilities',
      image: '/static/images/avatar.jpg',
      description: 'Next-generation surgical robot that combines 7 degrees of freedom, haptic feedback, and AI-guided navigation to enable complex procedures through millimeter-sized incisions.',
      longDescription: 'PrecisionBot represents a quantum leap in surgical robotics. The system features articulating instruments that mimic the human wrist with greater dexterity, active tremor cancellation, and motion scaling that translates large hand movements into micro-precise adjustments. Surgeons using PrecisionBot report 40% faster procedure times and 60% reduction in complications.',
      features: [
        '7 degrees of freedom articulating instruments',
        'Active tremor filtration (10:1 motion scaling)',
        'Haptic feedback for tissue interaction sensing',
        'AI-assisted surgical planning and navigation',
        '4K 3D stereoscopic visualization with fluorescence',
        'Single-port and multi-port configurations',
      ],
      specs: [
        { label: 'Positioning Accuracy', value: '±0.05mm repeatability' },
        { label: 'Instrument Arsenal', value: '80+ specialized tools' },
        { label: 'FDA Clearance', value: 'General surgery, urology, gynecology' },
      ],
    },
    {
      id: 'autonomy-assistant',
      name: 'AutonomyAI™',
      fullName: 'AutonomyAI™ Autonomous Surgical Assistant',
      category: 'Autonomous Robotics',
      tagline: 'The Future of Collaborative Surgery',
      image: '/static/images/avatar.jpg',
      description: 'Semi-autonomous surgical robot that handles routine procedural steps under surgeon supervision, allowing physicians to focus on complex decision-making and critical maneuvers.',
      longDescription: 'AutonomyAI uses computer vision and reinforcement learning to perform standardized surgical tasks like suturing, retraction, and cavity exposure with human-level skill. The system operates under constant surgeon supervision with instant override capability, maintaining human control while reducing surgeon fatigue and operative time.',
      features: [
        'AI-guided autonomous suturing and knot-tying',
        'Computer vision-based anatomical recognition',
        'Real-time path planning and collision avoidance',
        'Surgeon-supervised autonomy with instant override',
        'Procedure recording for training and quality review',
        'Integration with existing surgical robots',
      ],
      specs: [
        { label: 'Autonomy Level', value: 'SAE Level 2 (Partial Automation)' },
        { label: 'Task Success Rate', value: '99.3% for standardized procedures' },
        { label: 'Time Savings', value: '30-45 minutes per procedure' },
      ],
    },
  ]

  const certifications = [
    {
      name: 'FDA 510(k)',
      description: 'Medical Device Clearance',
      icon: FiAward,
    },
    {
      name: 'CE Mark',
      description: 'European Conformity',
      icon: FiCheckCircle,
    },
    {
      name: 'ISO 13485',
      description: 'Quality Management Systems',
      icon: FiCheckCircle,
    },
  ]

  const benefits = [
    {
      icon: FiTarget,
      title: 'Enhanced Precision',
      stat: '10x',
      description: 'Robotic systems provide 10x greater precision than human hands alone, enabling micro-surgical techniques.',
    },
    {
      icon: FiClock,
      title: 'Faster Procedures',
      stat: '40%',
      description: 'AI-assisted planning and robotic execution reduce average procedure times by 40% vs. traditional methods.',
    },
    {
      icon: FiHeart,
      title: 'Better Outcomes',
      stat: '60%',
      description: 'Minimally invasive robotic procedures result in 60% fewer complications and faster patient recovery.',
    },
    {
      icon: FiUsers,
      title: 'Reduced Fatigue',
      stat: '70%',
      description: 'Surgeons report 70% less physical strain, enabling longer careers and better focus during procedures.',
    },
  ]

  const useCases = [
    {
      specialty: 'Neurosurgery',
      icon: FaBrain,
      description: 'Micro-precision brain surgery with real-time tumor margin detection.',
      procedures: ['Tumor resection', 'Deep brain stimulation', 'Epilepsy surgery'],
    },
    {
      specialty: 'Cardiac Surgery',
      icon: FiHeart,
      description: 'Minimally invasive heart procedures with enhanced visualization.',
      procedures: ['Valve repair', 'CABG', 'Arrhythmia ablation'],
    },
    {
      specialty: 'Orthopedic Surgery',
      icon: FiActivity,
      description: 'Computer-guided joint replacement with perfect alignment.',
      procedures: ['Total knee', 'Hip replacement', 'Spine surgery'],
    },
    {
      specialty: 'General Surgery',
      icon: FiLayers,
      description: 'Single-port procedures with rapid recovery times.',
      procedures: ['Hernia repair', 'Cholecystectomy', 'Bariatric surgery'],
    },
  ]

  return (
    <>
      <PageHeader
        title="AI & Robotics"
        subtitle="Where artificial intelligence meets surgical precision. Our AI-powered diagnostic systems and robotic surgical platforms are transforming how medicine is practiced, enabling procedures once thought impossible and diagnostics with superhuman accuracy."
        gradientColors={['purple.600', 'pink.500']}
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
                      colorScheme="purple"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={6}
                    >
                      Next-Gen Technology
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      The Future of{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, purple.600, pink.500)',
                          'linear(to-r, purple.300, pink.300)'
                        )}
                        bgClip="text"
                      >
                        Surgical Precision
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      Our AI and robotics platforms represent the convergence of computer science, 
                      engineering, and medical expertise—creating tools that augment human capability 
                      and push the boundaries of what's medically possible.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      From AI systems that detect cancer earlier than radiologists to surgical robots 
                      performing procedures through incisions smaller than a dime, Vogt MedTech is 
                      leading the transformation of modern surgery and diagnostics.
                    </Text>
                  </Box>
                  <HStack spacing={4}>
                    <Button
                      as={Link}
                      href="/contact"
                      size="lg"
                      colorScheme="purple"
                      rightIcon={<FaArrowRight />}
                    >
                      Schedule Demo
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
                    alt="AI and Robotics"
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
                      Performed 8,000+ Successful Robotic Procedures
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
                Breakthrough Technology
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our AI and robotics systems combine cutting-edge hardware with 
                sophisticated software to deliver unprecedented clinical capabilities.
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
                    borderColor: 'purple.500',
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
                      bgGradient="linear(to-br, purple.500, pink.500)"
                      flexShrink={0}
                    >
                      <Icon as={feature.icon} boxSize={8} color="white" />
                    </Flex>
                    <VStack align="start" spacing={1} flex={1}>
                      <Heading as="h3" size="lg">
                        {feature.title}
                      </Heading>
                      <HStack>
                        <Text fontSize="2xl" fontWeight="bold" color="purple.500">
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
                colorScheme="pink"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={4}
              >
                Advanced Systems
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                AI & Robotic Platforms
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                From intelligent diagnostics to autonomous surgical assistance, 
                our systems represent the pinnacle of medical AI and robotics.
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
                          <Text fontSize="xs" fontWeight="bold" color="purple.500">
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
                            color="purple.500"
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
                                  color="purple.500"
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
                            colorScheme="purple"
                            rightIcon={<FaArrowRight />}
                          >
                            Request Demo
                          </Button>
                          <Button
                            as={Link}
                            href={`/solutions/ai-robotics/${product.id}`}
                            size="lg"
                            variant="outline"
                          >
                            Full Details
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

      {/* Clinical Applications Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Clinical Applications
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Our AI and robotic systems are transforming care across 
                multiple surgical specialties.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {useCases.map((useCase, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={8}
                  _hover={{
                    shadow: 'xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'purple.500',
                  }}
                  transition="all 0.3s"
                >
                  <HStack spacing={4} mb={4}>
                    <Flex
                      align="center"
                      justify="center"
                      w={12}
                      h={12}
                      borderRadius="lg"
                      bgGradient="linear(to-br, purple.500, pink.500)"
                    >
                      <Icon as={useCase.icon} boxSize={6} color="white" />
                    </Flex>
                    <Heading as="h3" size="md">
                      {useCase.specialty}
                    </Heading>
                  </HStack>
                  <Text color={mutedColor} mb={4} lineHeight="tall">
                    {useCase.description}
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {useCase.procedures.map((procedure, i) => (
                      <HStack key={i}>
                        <Icon as={FiCheckCircle} color="purple.500" boxSize={4} />
                        <Text fontSize="sm" color={mutedColor}>
                          {procedure}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Measurable Clinical Benefits
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                AI and robotics deliver quantifiable improvements in surgical 
                precision, efficiency, and patient outcomes.
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
                    borderColor: 'purple.500',
                  }}
                  transition="all 0.3s"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w={14}
                    h={14}
                    borderRadius="xl"
                    bgGradient="linear(to-br, purple.500, pink.500)"
                  >
                    <Icon as={benefit.icon} boxSize={7} color="white" />
                  </Flex>
                  <Text fontSize="4xl" fontWeight="bold" color="purple.500">
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

      {/* Quality & Compliance Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1.2fr 1fr' }} gap={{ base: 12, lg: 16 }} alignItems="center">
            <GridItem>
              <FallInPlace>
                <VStack align="start" spacing={8}>
                  <Box>
                    <Badge
                      colorScheme="pink"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={6}
                    >
                      Safety & Compliance
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Rigorously Tested{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, purple.600, pink.500)',
                          'linear(to-r, purple.300, pink.300)'
                        )}
                        bgClip="text"
                      >
                        & Certified
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      Every AI algorithm and robotic system undergoes extensive validation 
                      and clinical trials before deployment. Our commitment to safety and 
                      efficacy is unwavering.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      All systems meet FDA Class II medical device standards and international 
                      regulatory requirements, with ongoing post-market surveillance to ensure 
                      continued safety and performance.
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
                          borderColor: 'purple.500',
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
                          bgGradient="linear(to-br, purple.500, pink.500)"
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
                    alt="Testing and Certification"
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
                bgGradient: 'linear(to-r, purple.500, pink.500)',
              }}
            >
              <VStack spacing={8} textAlign="center">
                <Flex
                  align="center"
                  justify="center"
                  w={20}
                  h={20}
                  borderRadius="full"
                  bgGradient="linear(to-br, purple.500, pink.500)"
                >
                  <Icon as={FaRobot} boxSize={10} color="white" />
                </Flex>
                <Text
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight="500"
                  fontStyle="italic"
                  lineHeight="tall"
                  color={accentColor}
                  maxW="4xl"
                >
                  "PrecisionBot has fundamentally changed my practice. The level of precision 
                  and control it provides allows me to perform procedures I wouldn't have 
                  attempted with traditional laparoscopy. My patients are going home the same 
                  day with minimal discomfort. It's truly revolutionary."
                </Text>
                <Divider maxW="200px" />
                <VStack spacing={2}>
                  <Heading as="h4" size="md">
                    Dr. James Wu, MD, FACS
                  </Heading>
                  <Text color={mutedColor} fontSize="md">
                    Chief of Robotic Surgery, Memorial Medical Center
                  </Text>
                  <HStack spacing={1} pt={2}>
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} as={FiZap} color="purple.500" boxSize={5} />
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
        <Container maxW="container.xl">
          <Box
            position="relative"
            bgGradient={useColorModeValue(
              'linear(to-br, purple.600, pink.500)',
              'linear(to-br, purple.500, pink.400)'
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
                  <Icon as={FaRobot} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Experience the Future of Surgery
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    See firsthand how AI-powered diagnostics and robotic surgery can transform 
                    your practice. Schedule a personalized demonstration or visit our Innovation 
                    Center to experience these groundbreaking systems in action.
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
                    color="purple.600"
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
                    Visit Innovation Center
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
