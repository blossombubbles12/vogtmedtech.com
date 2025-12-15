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
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import {
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiHeart,
  FiLinkedin,
  FiMail,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { FaGraduationCap, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function TeamPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const accentColor = useColorModeValue('brand.600', 'brand.300')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')

  const executiveTeam = [
    {
      name: 'Brian Vogt',
      title: 'CEO and Co-Founder',
      image: '/static/images/vogt.jpeg',
      bio: 'Visionary leader with 25+ years pioneering medical device innovation. Founded Vogt MedTech with a mission to democratize access to cutting-edge healthcare technology worldwide.',
      education: 'Ph.D. Biomedical Engineering, MIT | MBA, Stanford GSB',
      specialization: 'Medical Devices, Healthcare Innovation, Strategic Leadership',
      achievements: [
        '150+ patents in medical technology',
        'Named Healthcare Innovator of the Year 2023',
        'Led 3 successful FDA device approvals',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'm.vogt@vogtmedtech.com',
      },
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
      bio: 'AI and robotics pioneer transforming surgical precision. Leading our R&D division with breakthrough innovations in machine learning-powered diagnostics and autonomous surgical systems.',
      education: 'Ph.D. Artificial Intelligence, Carnegie Mellon | B.S. Robotics, UC Berkeley',
      specialization: 'AI/ML, Surgical Robotics, Computer Vision',
      achievements: [
        'Developed award-winning AI diagnostic platform',
        '80+ peer-reviewed publications',
        'Former lead engineer at Boston Dynamics',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 's.chen@vogtmedtech.com',
      },
    },
    {
      name: 'Dr. James Mitchell',
      title: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80',
      bio: 'Board-certified surgeon and clinical innovator ensuring every product meets the highest standards of safety and efficacy. Bridge between cutting-edge technology and real-world patient care.',
      education: 'M.D., Johns Hopkins School of Medicine | Residency, Mayo Clinic',
      specialization: 'Minimally Invasive Surgery, Clinical Trials, Patient Safety',
      achievements: [
        '5,000+ successful surgical procedures',
        'Clinical advisor to FDA Medical Devices Panel',
        'Published author in NEJM and The Lancet',
      ],
      social: {
        linkedin: '#',
        email: 'j.mitchell@vogtmedtech.com',
      },
    },
    {
      name: 'Emily Rodriguez',
      title: 'VP of Research & Development',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
      bio: 'Leading a global team of 200+ engineers and researchers driving breakthrough innovations. Expert in translating scientific discoveries into market-ready medical solutions.',
      education: 'Ph.D. Mechanical Engineering, Stanford | B.S. Bioengineering, Georgia Tech',
      specialization: 'Product Development, Materials Science, Regulatory Strategy',
      achievements: [
        'Led development of 12 FDA-cleared devices',
        '50+ patents in medical device technology',
        'Winner of Edison Award for Innovation',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'e.rodriguez@vogtmedtech.com',
      },
    },
    {
      name: 'David Park',
      title: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
      bio: 'Strategic financial leader with deep expertise in healthcare economics and high-growth medical technology companies. Driving sustainable growth while maintaining our mission-first approach.',
      education: 'MBA, Harvard Business School | B.A. Economics, Yale University',
      specialization: 'Healthcare Finance, M&A Strategy, Investor Relations',
      achievements: [
        'Led $250M Series C funding round',
        'Former VP at Goldman Sachs Healthcare',
        'Board member of 3 medtech startups',
      ],
      social: {
        linkedin: '#',
        email: 'd.park@vogtmedtech.com',
      },
    },
    {
      name: 'Dr. Aisha Patel',
      title: 'Chief Compliance & Regulatory Officer',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&q=80',
      bio: 'Regulatory expert ensuring global compliance across 45 countries. Champion of ethical innovation and patient safety, navigating complex international medical device regulations.',
      education: 'J.D., Columbia Law School | Ph.D. Regulatory Science, USC',
      specialization: 'FDA/EMA Regulations, Quality Systems, Ethics & Compliance',
      achievements: [
        'Successfully navigated 20+ international approvals',
        'Former FDA Medical Device Reviewer',
        'Expert testimony to Congressional committees',
      ],
      social: {
        linkedin: '#',
        email: 'a.patel@vogtmedtech.com',
      },
    },
  ]

  const advisoryBoard = [
    {
      name: 'Prof. Robert Chen',
      title: 'Scientific Advisor',
      affiliation: 'MIT Media Lab',
      expertise: 'Biomedical Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Dr. Lisa Thompson',
      title: 'Clinical Advisor',
      affiliation: 'Cleveland Clinic',
      expertise: 'Cardiothoracic Surgery',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Dr. Ahmed Hassan',
      title: 'Strategic Advisor',
      affiliation: 'WHO Health Systems',
      expertise: 'Global Health Policy',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Jennifer Wu',
      title: 'Innovation Advisor',
      affiliation: 'Y Combinator',
      expertise: 'Healthcare Startups',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80',
    },
  ]

  const stats = [
    {
      value: '150+',
      label: 'Combined Years of Experience',
      icon: FiTrendingUp,
    },
    {
      value: '300+',
      label: 'Patents & Publications',
      icon: FiBookOpen,
    },
    {
      value: '45',
      label: 'Countries Represented',
      icon: FiGlobe,
    },
    {
      value: '2M+',
      label: 'Lives Impacted',
      icon: FiHeart,
    },
  ]

  return (
    <>
      <PageHeader
        title="Leadership Team"
        subtitle="Meet the experts driving medical innovation at Vogt MedTech."
        gradientColors={['brand.600', 'accent.500']}
      />

      {/* Intro Section */}
      <Section py={20}>
        <Container maxW="container.xl">
          <VStack spacing={6} maxW="4xl" mx="auto" textAlign="center" mb={16}>
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
                lineHeight="shorter"
              >
                Diverse Minds.{' '}
                <Text
                  as="span"
                  bgGradient={useColorModeValue(
                    'linear(to-r, brand.600, accent.500)',
                    'linear(to-r, brand.300, accent.300)'
                  )}
                  bgClip="text"
                >
                  Unified Purpose.
                </Text>
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                lineHeight="tall"
              >
                Our leadership team combines world-class expertise in medicine, engineering, 
                and business to drive innovation that transforms patient care globally. 
                Together, we're building the future of medical technology.
              </Text>
            </FallInPlace>
          </VStack>

          {/* Stats */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} mb={20}>
            {stats.map((stat, index) => (
              <FallInPlace key={stat.label} delay={0.1 * index}>
                <VStack
                  bg={cardBg}
                  border="1px"
                  borderColor={cardBorder}
                  borderRadius="xl"
                  p={8}
                  textAlign="center"
                  _hover={{
                    shadow: 'xl',
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s"
                >
                  <Icon as={stat.icon} boxSize={8} color="brand.500" mb={2} />
                  <Text
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="bold"
                    color={accentColor}
                  >
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" color={mutedColor} fontWeight="500">
                    {stat.label}
                  </Text>
                </VStack>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Executive Team */}
      <Section bg={featureBg} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="800"
            >
              Executive Leadership
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} maxW="3xl">
              Visionary leaders with proven track records in medical innovation, 
              clinical excellence, and strategic growth.
            </Text>
          </VStack>

          <VStack spacing={12}>
            {executiveTeam.map((member, index) => (
              <FallInPlace key={member.name} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="1px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  overflow="hidden"
                  _hover={{
                    shadow: '2xl',
                  }}
                  transition="all 0.3s"
                >
                  <Grid
                    templateColumns={{ base: '1fr', lg: '320px 1fr' }}
                    gap={0}
                  >
                    {/* Image Section */}
                    <GridItem>
                      <Box
                        position="relative"
                        h={{ base: '400px', lg: 'full' }}
                        minH={{ lg: '500px' }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          objectFit="cover"
                          w="100%"
                          h="100%"
                        />
                        <Box
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          bgGradient="linear(to-t, blackAlpha.800, transparent)"
                          p={6}
                        >
                          <HStack spacing={3}>
                            {member.social.linkedin && (
                              <Flex
                                as="a"
                                href={member.social.linkedin}
                                align="center"
                                justify="center"
                                w={10}
                                h={10}
                                borderRadius="lg"
                                bg="whiteAlpha.200"
                                _hover={{
                                  bg: 'brand.500',
                                  transform: 'translateY(-2px)',
                                }}
                                transition="all 0.2s"
                              >
                                <Icon as={FaLinkedin} color="white" boxSize={5} />
                              </Flex>
                            )}
                            {member.social.twitter && (
                              <Flex
                                as="a"
                                href={member.social.twitter}
                                align="center"
                                justify="center"
                                w={10}
                                h={10}
                                borderRadius="lg"
                                bg="whiteAlpha.200"
                                _hover={{
                                  bg: 'accent.500',
                                  transform: 'translateY(-2px)',
                                }}
                                transition="all 0.2s"
                              >
                                <Icon as={FaTwitter} color="white" boxSize={5} />
                              </Flex>
                            )}
                            <Flex
                              as="a"
                              href={`mailto:${member.social.email}`}
                              align="center"
                              justify="center"
                              w={10}
                              h={10}
                              borderRadius="lg"
                              bg="whiteAlpha.200"
                              _hover={{
                                bg: 'purple.500',
                                transform: 'translateY(-2px)',
                              }}
                              transition="all 0.2s"
                            >
                              <Icon as={FiMail} color="white" boxSize={5} />
                            </Flex>
                          </HStack>
                        </Box>
                      </Box>
                    </GridItem>

                    {/* Content Section */}
                    <GridItem p={{ base: 8, md: 10, lg: 12 }}>
                      <VStack align="stretch" spacing={6}>
                        <Box>
                          <Heading as="h3" size="xl" mb={2}>
                            {member.name}
                          </Heading>
                          <Text
                            fontSize="lg"
                            color="brand.500"
                            fontWeight="600"
                            mb={4}
                          >
                            {member.title}
                          </Text>
                          <Text
                            fontSize="md"
                            color={mutedColor}
                            lineHeight="tall"
                          >
                            {member.bio}
                          </Text>
                        </Box>

                        <Box>
                          <HStack mb={2}>
                            <Icon as={FaGraduationCap} color="brand.500" boxSize={5} />
                            <Text fontSize="sm" fontWeight="600" color={accentColor}>
                              Education
                            </Text>
                          </HStack>
                          <Text fontSize="sm" color={mutedColor}>
                            {member.education}
                          </Text>
                        </Box>

                        <Box>
                          <HStack mb={2}>
                            <Icon as={FiUsers} color="accent.500" boxSize={5} />
                            <Text fontSize="sm" fontWeight="600" color={accentColor}>
                              Specialization
                            </Text>
                          </HStack>
                          <Text fontSize="sm" color={mutedColor}>
                            {member.specialization}
                          </Text>
                        </Box>

                        <Box>
                          <HStack mb={3}>
                            <Icon as={FiAward} color="purple.500" boxSize={5} />
                            <Text fontSize="sm" fontWeight="600" color={accentColor}>
                              Key Achievements
                            </Text>
                          </HStack>
                          <VStack align="stretch" spacing={2}>
                            {member.achievements.map((achievement, i) => (
                              <HStack key={i} align="flex-start">
                                <Box
                                  w={1.5}
                                  h={1.5}
                                  borderRadius="full"
                                  bg="brand.500"
                                  mt={2}
                                  flexShrink={0}
                                />
                                <Text fontSize="sm" color={mutedColor}>
                                  {achievement}
                                </Text>
                              </HStack>
                            ))}
                          </VStack>
                        </Box>
                      </VStack>
                    </GridItem>
                  </Grid>
                </Box>
              </FallInPlace>
            ))}
          </VStack>
        </Container>
      </Section>

      {/* Advisory Board */}
      <Section py={20}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="800"
            >
              Advisory Board
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} maxW="3xl">
              Distinguished experts from leading institutions guiding our strategic direction.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {advisoryBoard.map((advisor, index) => (
              <FallInPlace key={advisor.name} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="1px"
                  borderColor={cardBorder}
                  borderRadius="xl"
                  p={6}
                  textAlign="center"
                  _hover={{
                    shadow: 'xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'brand.500',
                  }}
                  transition="all 0.3s"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w={16}
                    h={16}
                    borderRadius="full"
                    bg={useColorModeValue('gray.100', 'gray.700')}
                    mx="auto"
                    mb={4}
                  >
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      borderRadius="full"
                      boxSize={16}
                      objectFit="cover"
                    />
                  </Flex>
                  <Heading as="h3" size="sm" mb={1}>
                    {advisor.name}
                  </Heading>
                  <Text fontSize="xs" color="brand.500" fontWeight="600" mb={2}>
                    {advisor.title}
                  </Text>
                  <Badge colorScheme="purple" fontSize="xs" mb={2}>
                    {advisor.affiliation}
                  </Badge>
                  <Text fontSize="xs" color={mutedColor}>
                    {advisor.expertise}
                  </Text>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Join Our Team CTA */}
      <Section bg={featureBg} py={20}>
        <Container maxW="container.xl">
          <Box
            bgGradient={useColorModeValue(
              'linear(to-r, brand.600, accent.500)',
              'linear(to-r, brand.500, accent.400)'
            )}
            borderRadius="3xl"
            p={{ base: 8, md: 16 }}
            textAlign="center"
          >
            <VStack spacing={6}>
              <Icon as={FiUsers} boxSize={16} color="white" />
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
                color="white"
              >
                Join Our Mission
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="whiteAlpha.900"
                maxW="2xl"
              >
                We're always looking for exceptional talent to join our team. 
                Help us pioneer the future of medical technology.
              </Text>
              <Flex gap={4} flexWrap="wrap" justify="center" pt={4}>
                <Button
                  as={Link}
                  href="/about/careers"
                  size="lg"
                  bg="white"
                  color="brand.600"
                  _hover={{
                    transform: 'translateY(-2px)',
                    shadow: '2xl',
                  }}
                  transition="all 0.2s"
                >
                  View Open Positions
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  _hover={{
                    bg: 'whiteAlpha.200',
                  }}
                >
                  Contact Us
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Container>
      </Section>
    </>
  )
}
