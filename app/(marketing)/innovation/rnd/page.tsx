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
} from '@chakra-ui/react'
import {
  FiActivity,
  FiAward,
  FiCheckCircle,
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
import { FaArrowRight, FaBrain, FaFlask, FaMicroscope, FaRocket } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function RnDPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const stats = [
    {
      value: '75+',
      label: 'Active Research Projects',
      icon: FaFlask,
      color: 'brand.500',
    },
    {
      value: '180+',
      label: 'Patents Worldwide',
      icon: FiAward,
      color: 'accent.500',
    },
    {
      value: '300+',
      label: 'Research Scientists',
      icon: FiUsers,
      color: 'purple.500',
    },
    {
      value: '28%',
      label: 'Revenue to R&D',
      icon: FiTrendingUp,
      color: 'pink.500',
    },
  ]

  const focusAreas = [
    {
      icon: FaBrain,
      title: 'Artificial Intelligence',
      description: 'Deep learning, computer vision, and natural language processing for medical applications. Our AI research spans diagnostic imaging, clinical decision support, and predictive analytics.',
      projects: ['Medical image segmentation', 'Drug discovery AI', 'Clinical outcome prediction'],
      color: 'purple.500',
    },
    {
      icon: FaRocket,
      title: 'Advanced Robotics',
      description: 'Next-generation surgical robots with enhanced dexterity, haptic feedback, and semi-autonomous capabilities. Pushing the boundaries of minimally invasive surgery.',
      projects: ['Micro-robotic instruments', 'Autonomous suturing', 'Haptic feedback systems'],
      color: 'brand.500',
    },
    {
      icon: FaMicroscope,
      title: 'Molecular Diagnostics',
      description: 'Breakthrough technologies in genomics, proteomics, and liquid biopsy for early disease detection and personalized medicine applications.',
      projects: ['Liquid biopsy platforms', 'Point-of-care genomics', 'Biomarker discovery'],
      color: 'accent.500',
    },
    {
      icon: FiActivity,
      title: 'Wearable Biosensors',
      description: 'Continuous monitoring devices with advanced sensor fusion, edge computing, and predictive algorithms for proactive healthcare management.',
      projects: ['Non-invasive glucose monitoring', 'Cardiac arrhythmia detection', 'Sleep apnea sensors'],
      color: 'pink.500',
    },
    {
      icon: FiLayers,
      title: 'Regenerative Medicine',
      description: 'Biomaterials, tissue engineering, and cellular therapies for organ regeneration and wound healing. Collaborating with leading academic centers.',
      projects: ['3D bioprinting', 'Stem cell therapies', 'Smart wound dressings'],
      color: 'purple.500',
    },
    {
      icon: FiZap,
      title: 'Quantum Computing',
      description: 'Exploring quantum algorithms for drug discovery, treatment optimization, and complex biological system simulation at unprecedented scales.',
      projects: ['Protein folding prediction', 'Drug interaction modeling', 'Genomic analysis'],
      color: 'brand.500',
    },
  ]

  const facilities = [
    {
      name: 'Innovation Center',
      location: 'Boston, MA',
      focus: 'AI & Machine Learning',
      team: '120 researchers',
      highlights: [
        'State-of-the-art GPU cluster for deep learning',
        'Medical imaging research partnership with MGH',
        'FDA-compliant AI validation laboratory',
      ],
    },
    {
      name: 'Robotics Lab',
      location: 'Stanford, CA',
      focus: 'Surgical Robotics',
      team: '85 engineers',
      highlights: [
        'Full surgical simulation suite',
        'Haptic feedback testing facility',
        'Cadaver lab for validation studies',
      ],
    },
    {
      name: 'Molecular Institute',
      location: 'San Diego, CA',
      focus: 'Genomics & Diagnostics',
      team: '95 scientists',
      highlights: [
        'Next-gen sequencing capabilities',
        'BSL-3 biocontainment facility',
        'Clinical trial coordination center',
      ],
    },
  ]

  const partnerships = [
    {
      type: 'Academic',
      partners: ['MIT', 'Stanford', 'Johns Hopkins', 'Mayo Clinic'],
      icon: FiGlobe,
    },
    {
      type: 'Government',
      partners: ['NIH SBIR Grants', 'DARPA Research', 'NSF Partnerships'],
      icon: FiAward,
    },
    {
      type: 'Industry',
      partners: ['NVIDIA Healthcare', 'AWS MedTech', 'Google Health'],
      icon: FiLayers,
    },
  ]

  const achievements = [
    {
      year: '2024',
      title: 'AI Breakthrough Award',
      description: 'Received FDA Breakthrough Device Designation for CognitionAI diagnostic platform.',
      icon: FiAward,
    },
    {
      year: '2023',
      title: 'Nature Publication',
      description: 'Published groundbreaking research on autonomous surgical systems in Nature Medicine.',
      icon: FiTarget,
    },
    {
      year: '2022',
      title: 'Patent Milestone',
      description: 'Surpassed 150 issued patents in medical robotics and AI diagnostics.',
      icon: FiCheckCircle,
    },
    {
      year: '2021',
      title: 'Quantum Partnership',
      description: 'Launched quantum computing research collaboration with leading tech companies.',
      icon: FiCpu,
    },
  ]

  return (
    <>
      <PageHeader
        title="Research & Development"
        subtitle="Pioneering the future of medicine through relentless innovation. Our world-class research facilities and multidisciplinary teams are developing breakthrough technologies that will define healthcare for decades to come."
        gradientColors={['brand.600', 'purple.500']}
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
                      colorScheme="brand"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={6}
                    >
                      Innovation Leadership
                    </Badge>
                    <Heading
                      as="h2"
                      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                      fontWeight="800"
                      mb={6}
                      lineHeight="shorter"
                    >
                      Where{' '}
                      <Text
                        as="span"
                        bgGradient={useColorModeValue(
                          'linear(to-r, brand.600, purple.500)',
                          'linear(to-r, brand.300, purple.300)'
                        )}
                        bgClip="text"
                      >
                        Curiosity Meets Impact
                      </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall" mb={6}>
                      Our R&D philosophy is simple: pursue technologies that have the potential to 
                      fundamentally transform patient care. We invest 28% of annual revenue back into 
                      research—more than double the industry average.
                    </Text>
                    <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                      With over 300 researchers across three world-class facilities, we're tackling 
                      medicine's most pressing challenges through AI, robotics, genomics, and emerging 
                      technologies like quantum computing.
                    </Text>
                  </Box>
                  <HStack spacing={4}>
                    <Button
                      as={Link}
                      href="/careers"
                      size="lg"
                      colorScheme="brand"
                      rightIcon={<FaArrowRight />}
                    >
                      Join Our Team
                    </Button>
                    <Button
                      as={Link}
                      href="#focus"
                      size="lg"
                      variant="outline"
                    >
                      Research Areas
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
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=800&fit=crop&q=80"
                    alt="Research & Development"
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
                      Innovation Center - Boston, MA
                    </Text>
                  </Box>
                </Box>
              </FallInPlace>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Research Focus Areas Section */}
      <Section id="focus" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Research Focus Areas
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Six strategic research domains driving the next generation of medical innovation.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {focusAreas.map((area, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={8}
                  h="full"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    shadow: '2xl',
                    transform: 'translateY(-4px)',
                    borderColor: area.color,
                  }}
                  transition="all 0.3s"
                >
                  <VStack align="start" spacing={5}>
                    <Flex
                      align="center"
                      justify="center"
                      w={14}
                      h={14}
                      borderRadius="xl"
                      bgGradient={`linear(to-br, ${area.color}, ${area.color})`}
                    >
                      <Icon as={area.icon} boxSize={7} color="white" />
                    </Flex>
                    <Heading as="h3" size="md">
                      {area.title}
                    </Heading>
                    <Text color={mutedColor} fontSize="sm" lineHeight="tall">
                      {area.description}
                    </Text>
                    <Divider />
                    <VStack align="stretch" spacing={2} w="full">
                      <Text fontSize="xs" fontWeight="bold" color={accentColor} textTransform="uppercase">
                        Active Projects:
                      </Text>
                      {area.projects.map((project, i) => (
                        <HStack key={i} spacing={2}>
                          <Icon as={FiCheckCircle} color={area.color} boxSize={4} flexShrink={0} />
                          <Text fontSize="xs" color={mutedColor}>
                            {project}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Research Facilities Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
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
                Global Network
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                World-Class Research Facilities
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Three cutting-edge facilities equipped with the latest technology and 
                staffed by leading experts in their fields.
              </Text>
            </FallInPlace>
          </VStack>

          <VStack spacing={8}>
            {facilities.map((facility, index) => (
              <FallInPlace key={index} delay={0.2 * index}>
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
                  }}
                  transition="all 0.3s"
                >
                  <Grid
                    templateColumns={{ base: '1fr', lg: '300px 1fr' }}
                    gap={0}
                  >
                    <GridItem
                      bg={featureBg}
                      p={8}
                      borderRight={{ lg: '2px' }}
                      borderRightColor={{ lg: cardBorder }}
                    >
                      <VStack align="start" spacing={4}>
                        <Badge colorScheme="brand" fontSize="xs" px={3} py={1} borderRadius="full">
                          {facility.location}
                        </Badge>
                        <Heading as="h3" size="lg">
                          {facility.name}
                        </Heading>
                        <Text fontSize="md" color={mutedColor} fontWeight="600">
                          {facility.focus}
                        </Text>
                        <Divider />
                        <HStack>
                          <Icon as={FiUsers} color="brand.500" boxSize={5} />
                          <Text fontSize="sm" fontWeight="600">
                            {facility.team}
                          </Text>
                        </HStack>
                      </VStack>
                    </GridItem>
                    <GridItem p={8}>
                      <VStack align="start" spacing={4}>
                        <Text fontSize="sm" fontWeight="bold" color={accentColor} textTransform="uppercase">
                          Facility Highlights:
                        </Text>
                        <VStack align="stretch" spacing={3}>
                          {facility.highlights.map((highlight, i) => (
                            <HStack key={i} align="start" spacing={3}>
                              <Icon
                                as={FiCheckCircle}
                                color="brand.500"
                                boxSize={5}
                                mt={0.5}
                                flexShrink={0}
                              />
                              <Text fontSize="sm" color={mutedColor}>
                                {highlight}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </VStack>
                    </GridItem>
                  </Grid>
                </Box>
              </FallInPlace>
            ))}
          </VStack>
        </Container>
      </Section>

      {/* Partnerships Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Strategic Partnerships
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Collaborating with leading institutions to accelerate innovation and clinical translation.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {partnerships.map((partnership, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  p={8}
                  textAlign="center"
                  h="full"
                  _hover={{
                    shadow: 'xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'brand.500',
                  }}
                  transition="all 0.3s"
                >
                  <VStack spacing={6}>
                    <Flex
                      align="center"
                      justify="center"
                      w={16}
                      h={16}
                      borderRadius="full"
                      bgGradient="linear(to-br, brand.500, purple.500)"
                    >
                      <Icon as={partnership.icon} boxSize={8} color="white" />
                    </Flex>
                    <Heading as="h3" size="md">
                      {partnership.type} Partners
                    </Heading>
                    <VStack spacing={2}>
                      {partnership.partners.map((partner, i) => (
                        <Text key={i} fontSize="sm" color={mutedColor} fontWeight="500">
                          {partner}
                        </Text>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Recent Achievements Section */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Recent Achievements
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Milestones that demonstrate our commitment to pushing the boundaries of medical science.
              </Text>
            </FallInPlace>
          </VStack>

          <VStack spacing={6} position="relative">
            {/* Timeline line */}
            <Box
              position="absolute"
              left={{ base: '20px', md: '50%' }}
              top={0}
              bottom={0}
              w="2px"
              bg={cardBorder}
              transform={{ md: 'translateX(-50%)' }}
            />
            
            {achievements.map((achievement, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <Grid
                  templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                  gap={{ base: 0, md: 16 }}
                  w="full"
                  position="relative"
                >
                  {/* Year badge (centered on timeline) */}
                  <Box
                    position={{ base: 'relative', md: 'absolute' }}
                    left={{ md: '50%' }}
                    top={{ md: '50%' }}
                    transform={{ md: 'translate(-50%, -50%)' }}
                    zIndex={2}
                    mb={{ base: 4, md: 0 }}
                    ml={{ base: 0, md: 0 }}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      w={16}
                      h={16}
                      borderRadius="full"
                      bg={cardBg}
                      border="4px"
                      borderColor="brand.500"
                      boxShadow="lg"
                    >
                      <Text fontSize="lg" fontWeight="bold" color="brand.500">
                        {achievement.year}
                      </Text>
                    </Flex>
                  </Box>

                  {/* Content (alternating sides on desktop) */}
                  <GridItem
                    colStart={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}
                    textAlign={{ base: 'left', md: index % 2 === 0 ? 'right' : 'left' }}
                  >
                    <Box
                      bg={cardBg}
                      border="2px"
                      borderColor={cardBorder}
                      borderRadius="xl"
                      p={6}
                      ml={{ base: 12, md: 0 }}
                      _hover={{
                        shadow: 'xl',
                        borderColor: 'brand.500',
                      }}
                      transition="all 0.3s"
                    >
                      <HStack
                        spacing={3}
                        mb={3}
                        justify={{ base: 'start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' }}
                      >
                        <Icon as={achievement.icon} color="brand.500" boxSize={6} />
                        <Heading as="h3" size="md">
                          {achievement.title}
                        </Heading>
                      </HStack>
                      <Text color={mutedColor} fontSize="sm" lineHeight="tall">
                        {achievement.description}
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>
              </FallInPlace>
            ))}
          </VStack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Box
            position="relative"
            bgGradient={useColorModeValue(
              'linear(to-br, brand.600, purple.600)',
              'linear(to-br, brand.500, purple.500)'
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
                  <Icon as={FaFlask} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Join the Innovation Journey
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Whether you're a researcher looking to collaborate, an institution seeking partnership, 
                    or a talented scientist wanting to join our team, we'd love to hear from you.
                  </Text>
                </VStack>
                <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
                  <Button
                    as={Link}
                    href="/careers"
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
                    Explore Careers
                  </Button>
                  <Button
                    as={Link}
                    href="/contact"
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
                    Partner With Us
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
