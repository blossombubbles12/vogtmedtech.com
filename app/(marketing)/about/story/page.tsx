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
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import {
  FiAward,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function OurStoryPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const timelineBorder = useColorModeValue('brand.200', 'brand.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')

  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Vogt MedTech founded with a vision to revolutionize medical diagnostics.',
      icon: FiZap,
    },
    {
      year: '2013',
      title: 'First Breakthrough',
      description: 'Launch of our AI-powered diagnostic imaging platform, transforming radiology.',
      icon: FiTrendingUp,
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Expanded operations to 15 countries, serving 200+ healthcare institutions.',
      icon: FiGlobe,
    },
    {
      year: '2019',
      title: 'FDA Approval',
      description: 'Received FDA approval for our revolutionary surgical robotics system.',
      icon: FiAward,
    },
    {
      year: '2022',
      title: 'Innovation Milestone',
      description: 'Filed our 150th patent, leading the industry in medical technology innovation.',
      icon: FiLayers,
    },
    {
      year: '2025',
      title: 'Global Leader',
      description: 'Serving 500+ healthcare institutions across 45 countries, impacting 2M+ lives.',
      icon: FiUsers,
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of medical technology through relentless research and development.',
      icon: FiZap,
      gradient: ['brand.500', 'brand.600'],
    },
    {
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in every product, partnership, and patient interaction.',
      icon: FiShield,
      gradient: ['accent.500', 'accent.600'],
    },
    {
      title: 'Collaboration',
      description: 'Working hand-in-hand with healthcare professionals to create meaningful solutions.',
      icon: FiUsers,
      gradient: ['purple.500', 'purple.600'],
    },
    {
      title: 'Compassion',
      description: 'Placing patient wellbeing and human dignity at the heart of everything we create.',
      icon: FiHeart,
      gradient: ['pink.500', 'pink.600'],
    },
  ]

  const team = [
    {
      name: 'Dr. Michael Vogt',
      title: 'CEO & Founder',
      description: 'Visionary leader with 20+ years in medical technology innovation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=90',
    },
    {
      name: 'Sarah Chen',
      title: 'Chief Technology Officer',
      description: 'AI and robotics expert driving our technical excellence forward.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=90',
    },
    {
      name: 'Dr. James Mitchell',
      title: 'Chief Medical Officer',
      description: 'Renowned surgeon ensuring clinical relevance in every innovation.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=90',
    },
    {
      name: 'Emily Rodriguez',
      title: 'VP of Research & Development',
      description: 'Leading our team of 200+ engineers and researchers globally.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=90',
    },
  ]

  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="Innovating healthcare, one breakthrough at a time."
        gradientColors={['brand.600', 'accent.500']}
      />

      {/* Intro Section */}
      <Section py={20}>
        <Container maxW="container.2xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="center">
            <GridItem>
              <FallInPlace>
                <Heading
                  as="h2"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="800"
                  mb={6}
                  lineHeight="shorter"
                >
                  Engineering Health.{' '}
                  <Text
                    as="span"
                    bgGradient={useColorModeValue(
                      'linear(to-r, brand.600, accent.500)',
                      'linear(to-r, brand.300, accent.300)'
                    )}
                    bgClip="text"
                  >
                    Empowering Life.
                  </Text>
                </Heading>
              </FallInPlace>
              <FallInPlace delay={0.2}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  mb={6}
                  lineHeight="tall"
                >
                  Founded in 2010, Vogt MedTech began with a simple yet profound mission: to bridge
                  the gap between cutting-edge technology and compassionate patient care.
                </Text>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  lineHeight="tall"
                >
                  From a small research lab to a global leader in medical innovation, our journey
                  has been defined by breakthrough discoveries, unwavering integrity, and a
                  commitment to transforming lives through technology.
                </Text>
              </FallInPlace>
            </GridItem>
            <GridItem>
              <FallInPlace delay={0.4}>
                <Box
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  border="1px"
                  borderColor={cardBorder}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&h=600&fit=crop&q=90"
                    alt="Innovation Lab - Team collaborating on medical technology"
                    width="100%"
                    height="auto"
                  />
                </Box>
              </FallInPlace>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section bg={featureBg} py={20}>
        <Container maxW="container.2xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="800"
            >
              Our Journey
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
              maxW="3xl"
            >
              Milestones that shaped our path to becoming a global leader in medical technology.
            </Text>
          </VStack>

          <Box position="relative">
            {milestones.map((milestone, index) => (
              <Grid
                key={milestone.year}
                templateColumns={{ base: '1fr', md: '1fr auto 1fr' }}
                gap={8}
                mb={12}
                position="relative"
              >
                {/* Left side (year and content for desktop) */}
                <GridItem
                  display={{ base: 'none', md: 'flex' }}
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  {index % 2 === 0 && (
                    <Box textAlign="right" pr={4}>
                      <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color="brand.500"
                        mb={2}
                      >
                        {milestone.year}
                      </Text>
                      <Heading as="h3" size="md" mb={2}>
                        {milestone.title}
                      </Heading>
                      <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                        {milestone.description}
                      </Text>
                    </Box>
                  )}
                </GridItem>

                {/* Center line with icon */}
                <GridItem display={{ base: 'none', md: 'flex' }} flexDirection="column" alignItems="center">
                  <Flex
                    align="center"
                    justify="center"
                    w={16}
                    h={16}
                    borderRadius="full"
                    bg={cardBg}
                    border="4px"
                    borderColor={timelineBorder}
                    boxShadow="lg"
                    zIndex={1}
                  >
                    <Icon as={milestone.icon} boxSize={7} color="brand.500" />
                  </Flex>
                  {index < milestones.length - 1 && (
                    <Box
                      w="2px"
                      flex="1"
                      minH="100px"
                      bg={timelineBorder}
                      mt={2}
                    />
                  )}
                </GridItem>

                {/* Right side */}
                <GridItem
                  display="flex"
                  alignItems="center"
                >
                  {index % 2 !== 0 ? (
                    <Box pl={{ base: 0, md: 4 }}>
                      <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color="brand.500"
                        mb={2}
                      >
                        {milestone.year}
                      </Text>
                      <Heading as="h3" size="md" mb={2}>
                        {milestone.title}
                      </Heading>
                      <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                        {milestone.description}
                      </Text>
                    </Box>
                  ) : (
                    <Box display={{ base: 'block', md: 'none' }}>
                      <Flex align="center" mb={4}>
                        <Flex
                          align="center"
                          justify="center"
                          w={12}
                          h={12}
                          borderRadius="full"
                          bg={cardBg}
                          border="3px"
                          borderColor={timelineBorder}
                          mr={4}
                        >
                          <Icon as={milestone.icon} boxSize={6} color="brand.500" />
                        </Flex>
                        <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                          {milestone.year}
                        </Text>
                      </Flex>
                      <Heading as="h3" size="md" mb={2}>
                        {milestone.title}
                      </Heading>
                      <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                        {milestone.description}
                      </Text>
                    </Box>
                  )}
                </GridItem>
              </Grid>
            ))}
          </Box>
        </Container>
      </Section>

      {/* Vision & Mission Section */}
      <Section py={20}>
        <Container maxW="container.2xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box
              bg={cardBg}
              border="1px"
              borderColor={cardBorder}
              borderRadius="2xl"
              p={10}
              _hover={{
                shadow: '2xl',
                transform: 'translateY(-4px)',
              }}
              transition="all 0.3s"
            >
              <Heading as="h3" size="xl" mb={6} color="brand.600" _dark={{ color: 'brand.300' }}>
                Our Vision
              </Heading>
              <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                To redefine how technology and compassion intersect in modern healthcare, creating
                a world where every patient receives the most advanced, personalized medical care
                possible.
              </Text>
            </Box>

            <Box
              bg={cardBg}
              border="1px"
              borderColor={cardBorder}
              borderRadius="2xl"
              p={10}
              _hover={{
                shadow: '2xl',
                transform: 'translateY(-4px)',
              }}
              transition="all 0.3s"
            >
              <Heading as="h3" size="xl" mb={6} color="accent.600" _dark={{ color: 'accent.300' }}>
                Our Mission
              </Heading>
              <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                To deliver life-changing medical innovations that enhance patient outcomes
                worldwide, empowering healthcare professionals with the tools they need to provide
                exceptional care.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section bg={featureBg} py={20}>
        <Container maxW="container.2xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="800"
            >
              Our Core Values
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
              maxW="3xl"
            >
              The principles that guide every decision, innovation, and interaction at Vogt MedTech.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {values.map((value, index) => (
              <Box
                key={value.title}
                bg={cardBg}
                border="1px"
                borderColor={cardBorder}
                borderRadius="2xl"
                p={8}
                textAlign="center"
                _hover={{
                  shadow: '2xl',
                  transform: 'translateY(-8px)',
                }}
                transition="all 0.3s"
              >
                <Flex
                  align="center"
                  justify="center"
                  w={20}
                  h={20}
                  borderRadius="xl"
                  bgGradient={`linear(to-br, ${value.gradient[0]}, ${value.gradient[1]})`}
                  mb={6}
                  mx="auto"
                >
                  <Icon as={value.icon} boxSize={10} color="white" />
                </Flex>
                <Heading as="h3" size="md" mb={4}>
                  {value.title}
                </Heading>
                <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm">
                  {value.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Team Section */}
      <Section py={20}>
        <Container maxW="container.2xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="800"
            >
              Meet Our Leadership
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
              maxW="3xl"
            >
              Visionary leaders driving innovation and excellence in medical technology.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {team.map((member, index) => (
              <Box
                key={member.name}
                bg={cardBg}
                border="1px"
                borderColor={cardBorder}
                borderRadius="2xl"
                overflow="hidden"
                _hover={{
                  shadow: '2xl',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width="100%"
                  height="250px"
                  objectFit="cover"
                />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={1}>
                    {member.name}
                  </Heading>
                  <Text color="brand.500" fontWeight="600" mb={3} fontSize="sm">
                    {member.title}
                  </Text>
                  <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm">
                    {member.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          <Flex justify="center" mt={12}>
            <Button
              as={Link}
              href="/about/careers"
              size="lg"
              colorScheme="brand"
              rightIcon={<Icon as={FaArrowRight} />}
            >
              Join Our Team
            </Button>
          </Flex>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section py={20} bg={featureBg}>
        <Container maxW="container.2xl">
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
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
                color="white"
              >
                Together, We're Building a Healthier Future
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="whiteAlpha.900"
                maxW="2xl"
              >
                Partner with us to bring world-class medical innovation to your institution.
              </Text>
              <Flex gap={4} flexWrap="wrap" justify="center" pt={4}>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  bg="white"
                  color="brand.600"
                  _hover={{
                    transform: 'translateY(-2px)',
                    shadow: '2xl',
                  }}
                  transition="all 0.2s"
                >
                  Contact Our Team
                </Button>
                <Button
                  as={Link}
                  href="/solutions/medical-devices"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  _hover={{
                    bg: 'whiteAlpha.200',
                  }}
                >
                  Partner With Us
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Container>
      </Section>
    </>
  )
}
