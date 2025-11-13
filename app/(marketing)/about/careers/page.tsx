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
  Card,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiCoffee,
  FiDollarSign,
  FiGlobe,
  FiHeart,
  FiMapPin,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { FaArrowRight, FaGraduationCap, FaHandHoldingHeart, FaLaptop, FaUmbrellaBeach } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function CareersPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const featureBg = useColorModeValue('gray.50', 'gray.900')

  const stats = [
    {
      value: '500+',
      label: 'Team Members',
      icon: FiUsers,
      color: 'brand.500',
    },
    {
      value: '40+',
      label: 'Countries Represented',
      icon: FiGlobe,
      color: 'accent.500',
    },
    {
      value: '4.8/5',
      label: 'Glassdoor Rating',
      icon: FiAward,
      color: 'purple.500',
    },
    {
      value: '95%',
      label: 'Employee Satisfaction',
      icon: FiHeart,
      color: 'pink.500',
    },
  ]

  const benefits = [
    {
      icon: FiDollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries, equity options, and performance bonuses that reward excellence.',
      color: 'brand.500',
    },
    {
      icon: FaUmbrellaBeach,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO policy, paid parental leave, and sabbatical opportunities after 5 years.',
      color: 'accent.500',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, vision coverage, mental health support, and wellness stipend.',
      color: 'purple.500',
    },
    {
      icon: FaGraduationCap,
      title: 'Learning & Development',
      description: '$5,000 annual education budget, conference attendance, and in-house training programs.',
      color: 'pink.500',
    },
    {
      icon: FaLaptop,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours, home office stipend, and co-working memberships.',
      color: 'orange.500',
    },
    {
      icon: FiTrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths, mentorship programs, and opportunities to lead initiatives.',
      color: 'yellow.500',
    },
  ]

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Research Scientist',
      department: 'Research & Development',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: 'Senior',
      description: 'Lead cutting-edge AI research in medical imaging and diagnostics. Develop novel deep learning architectures for clinical applications.',
      skills: ['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow', 'Medical Imaging'],
      color: 'purple.500',
    },
    {
      id: 2,
      title: 'Robotics Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'Mid-Senior',
      description: 'Design and implement control systems for next-generation surgical robots. Work on real-time motion planning and safety systems.',
      skills: ['C++', 'ROS', 'Control Systems', 'Kinematics', 'Real-time Systems'],
      color: 'brand.500',
    },
    {
      id: 3,
      title: 'Clinical Affairs Manager',
      department: 'Clinical & Regulatory',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid',
      description: 'Manage clinical trials and studies for medical device products. Collaborate with healthcare institutions and regulatory bodies.',
      skills: ['Clinical Trials', 'FDA Regulations', 'Medical Writing', 'Project Management'],
      color: 'accent.500',
    },
    {
      id: 4,
      title: 'Product Designer',
      department: 'Design',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: 'Mid',
      description: 'Create intuitive interfaces for medical software and devices. Design user experiences that improve clinical workflows.',
      skills: ['Figma', 'UI/UX Design', 'User Research', 'Prototyping', 'Design Systems'],
      color: 'pink.500',
    },
    {
      id: 5,
      title: 'Senior Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Senior',
      description: 'Build scalable cloud infrastructure for medical data processing. Ensure HIPAA compliance and system reliability.',
      skills: ['Node.js', 'AWS', 'PostgreSQL', 'Kubernetes', 'HIPAA', 'API Design'],
      color: 'brand.500',
    },
    {
      id: 6,
      title: 'Biomedical Engineer',
      department: 'Research & Development',
      location: 'Atlanta, GA',
      type: 'Full-time',
      experience: 'Entry-Mid',
      description: 'Develop and test medical devices. Conduct bench testing, animal studies, and support clinical trials.',
      skills: ['Medical Device Design', 'CAD', 'Testing Protocols', 'FDA Standards', 'Lab Skills'],
      color: 'accent.500',
    },
    {
      id: 7,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid',
      description: 'Analyze clinical data to improve product performance. Build predictive models and generate insights from real-world evidence.',
      skills: ['Python', 'R', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization'],
      color: 'purple.500',
    },
    {
      id: 8,
      title: 'Field Service Engineer',
      department: 'Customer Success',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: 'Entry-Mid',
      description: 'Install, maintain, and repair medical equipment at customer sites. Provide technical training to healthcare staff.',
      skills: ['Technical Support', 'Electronics', 'Customer Service', 'Training', 'Travel'],
      color: 'orange.500',
    },
    {
      id: 9,
      title: 'Quality Assurance Engineer',
      department: 'Quality',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: 'Mid',
      description: 'Ensure products meet regulatory standards. Develop test strategies and validation protocols for medical devices.',
      skills: ['QA Testing', 'ISO 13485', 'FDA 21 CFR Part 820', 'Risk Management', 'Documentation'],
      color: 'pink.500',
    },
  ]

  const departments = [
    { name: 'All Positions', count: jobOpenings.length },
    { name: 'Engineering', count: 3 },
    { name: 'Research & Development', count: 2 },
    { name: 'Clinical & Regulatory', count: 1 },
    { name: 'Design', count: 1 },
    { name: 'Analytics', count: 1 },
    { name: 'Customer Success', count: 1 },
  ]

  const cultureValues = [
    {
      title: 'Innovation First',
      description: "We encourage bold ideas and calculated risks. If it improves patient care, we'll find a way.",
      icon: FiZap,
    },
    {
      title: 'Diverse Perspectives',
      description: 'Our best solutions come from diverse teams. We actively seek different backgrounds and viewpoints.',
      icon: FiUsers,
    },
    {
      title: 'Patient Impact',
      description: "Every decision starts with the question: How does this improve patient outcomes?",
      icon: FiHeart,
    },
    {
      title: 'Work-Life Harmony',
      description: 'We believe in sustainable excellence. Your best work happens when life is balanced.',
      icon: FiCoffee,
    },
  ]

  return (
    <>
      <PageHeader
        title="Careers at VogtMedTech"
        subtitle="Join us in building the future of medical technology. Make an impact that matters."
        gradientColors={['accent.600', 'brand.500']}
      />

      {/* Hero Section with Image */}
      <Section py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <GridItem>
              <FallInPlace>
                <VStack align="start" spacing={6}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    lineHeight="1.2"
                  >
                    Work on Technology That{' '}
                    <Text
                      as="span"
                      bgGradient={useColorModeValue(
                        'linear(to-r, brand.600, accent.500)',
                        'linear(to-r, brand.300, accent.300)'
                      )}
                      bgClip="text"
                    >
                      Saves Lives
                    </Text>
                  </Heading>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedColor} lineHeight="tall">
                    At VogtMedTech, your work directly impacts patient outcomes. Whether you're 
                    training AI models, designing surgical robots, or analyzing clinical data, 
                    you're part of a mission that matters.
                  </Text>
                  <Text fontSize="lg" color={mutedColor} lineHeight="tall">
                    We're a team of 500+ innovators, engineers, clinicians, and dreamers from 40+ 
                    countries. Together, we're pushing the boundaries of what's possible in healthcare.
                  </Text>
                  <HStack spacing={4}>
                    <Button
                      as={Link}
                      href="#openings"
                      size="lg"
                      colorScheme="brand"
                      rightIcon={<FaArrowRight />}
                    >
                      View Open Positions
                    </Button>
                    <Button
                      as={Link}
                      href="#culture"
                      size="lg"
                      variant="outline"
                    >
                      Our Culture
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80"
                    alt="VogtMedTech Team"
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
                      Our Team in Boston
                    </Text>
                  </Box>
                </Box>
              </FallInPlace>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section py={{ base: 12, md: 20 }} bg={featureBg}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {stats.map((stat, index) => (
              <FallInPlace key={index} delay={index * 0.1}>
                <VStack spacing={3}>
                  <Icon as={stat.icon} boxSize={10} color={stat.color} />
                  <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="800">
                    {stat.value}
                  </Text>
                  <Text color={mutedColor} textAlign="center">
                    {stat.label}
                  </Text>
                </VStack>
              </FallInPlace>
            ))}
          </SimpleGrid>
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
                Why Join VogtMedTech?
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                We invest in our people because they're our greatest asset. Here's what you can expect.
              </Text>
            </FallInPlace>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {benefits.map((benefit, index) => (
              <FallInPlace key={index} delay={index * 0.1}>
                <Card
                  bg={cardBg}
                  borderColor={cardBorder}
                  borderWidth="1px"
                  h="100%"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    shadow: 'xl',
                  }}
                >
                  <CardBody>
                    <VStack align="start" spacing={4}>
                      <Flex
                        align="center"
                        justify="center"
                        w={12}
                        h={12}
                        borderRadius="lg"
                        bg={useColorModeValue(`${benefit.color.split('.')[0]}.50`, `${benefit.color.split('.')[0]}.900`)}
                      >
                        <Icon as={benefit.icon} boxSize={6} color={benefit.color} />
                      </Flex>
                      <Heading as="h3" size="md">
                        {benefit.title}
                      </Heading>
                      <Text color={mutedColor}>
                        {benefit.description}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Culture Values Section */}
      <Section id="culture" py={{ base: 16, md: 24 }} bg={featureBg}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <GridItem>
              <FallInPlace>
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="2xl"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&q=80"
                    alt="Team Collaboration"
                    w="100%"
                    h="auto"
                  />
                </Box>
              </FallInPlace>
            </GridItem>
            <GridItem>
              <FallInPlace delay={0.2}>
                <VStack align="start" spacing={8}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                  >
                    Our Culture & Values
                  </Heading>
                  <Text fontSize="lg" color={mutedColor}>
                    We're building more than technology—we're building a workplace where 
                    innovation thrives and people grow.
                  </Text>
                  <VStack align="start" spacing={6} w="100%">
                    {cultureValues.map((value, index) => (
                      <HStack key={index} align="start" spacing={4}>
                        <Icon
                          as={value.icon}
                          boxSize={6}
                          color="brand.500"
                          mt={1}
                        />
                        <Box>
                          <Heading as="h4" size="sm" mb={2}>
                            {value.title}
                          </Heading>
                          <Text color={mutedColor} fontSize="sm">
                            {value.description}
                          </Text>
                        </Box>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </FallInPlace>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Job Openings Section */}
      <Section id="openings" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={12} textAlign="center">
            <FallInPlace>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Open Positions
              </Heading>
            </FallInPlace>
            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="3xl"
              >
                Join one of our teams and help shape the future of medical technology.
              </Text>
            </FallInPlace>
          </VStack>

          {/* Department Filters */}
          <FallInPlace delay={0.3}>
            <Flex
              gap={3}
              mb={8}
              flexWrap="wrap"
              justify="center"
            >
              {departments.map((dept, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  rightIcon={
                    <Badge colorScheme="brand" borderRadius="full">
                      {dept.count}
                    </Badge>
                  }
                >
                  {dept.name}
                </Button>
              ))}
            </Flex>
          </FallInPlace>

          {/* Job Listings */}
          <VStack spacing={4} align="stretch">
            {jobOpenings.map((job, index) => (
              <FallInPlace key={job.id} delay={index * 0.05}>
                <Card
                  bg={cardBg}
                  borderColor={cardBorder}
                  borderWidth="1px"
                  transition="all 0.3s"
                  cursor="pointer"
                  _hover={{
                    transform: 'translateX(4px)',
                    shadow: 'lg',
                    borderColor: job.color,
                  }}
                >
                  <CardBody>
                    <Grid templateColumns={{ base: '1fr', md: '1fr auto' }} gap={6}>
                      <VStack align="start" spacing={3}>
                        <HStack spacing={3} flexWrap="wrap">
                          <Heading as="h3" size="md">
                            {job.title}
                          </Heading>
                          <Badge colorScheme={job.color.split('.')[0]} fontSize="xs">
                            {job.experience}
                          </Badge>
                        </HStack>
                        <HStack spacing={4} flexWrap="wrap" fontSize="sm" color={mutedColor}>
                          <HStack>
                            <Icon as={FiBriefcase} />
                            <Text>{job.department}</Text>
                          </HStack>
                          <HStack>
                            <Icon as={FiMapPin} />
                            <Text>{job.location}</Text>
                          </HStack>
                          <HStack>
                            <Icon as={FiCalendar} />
                            <Text>{job.type}</Text>
                          </HStack>
                        </HStack>
                        <Text color={mutedColor}>
                          {job.description}
                        </Text>
                        <Flex gap={2} flexWrap="wrap">
                          {job.skills.map((skill, idx) => (
                            <Badge key={idx} variant="subtle" colorScheme="gray">
                              {skill}
                            </Badge>
                          ))}
                        </Flex>
                      </VStack>
                      <Flex align="center">
                        <Button
                          colorScheme="brand"
                          rightIcon={<FaArrowRight />}
                          as={Link}
                          href="/contact"
                        >
                          Apply Now
                        </Button>
                      </Flex>
                    </Grid>
                  </CardBody>
                </Card>
              </FallInPlace>
            ))}
          </VStack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section py={{ base: 16, md: 24 }} bg={featureBg}>
        <Container maxW="container.lg">
          <FallInPlace>
            <VStack spacing={6} textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="800"
              >
                Don't See the Right Role?
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={mutedColor}
                maxW="2xl"
              >
                We're always looking for exceptional talent. Send us your resume and 
                tell us how you'd like to contribute to our mission.
              </Text>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                colorScheme="brand"
                rightIcon={<FaArrowRight />}
              >
                Get in Touch
              </Button>
            </VStack>
          </FallInPlace>
        </Container>
      </Section>
    </>
  )
}
