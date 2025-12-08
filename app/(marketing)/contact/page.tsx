'use client'

import {
  Container,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Heading,
  Icon,
  Link,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Select,
  HStack,
  Flex,
  Badge,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageCircle,
  FiHeadphones,
  FiUsers,
  FiBriefcase,
  FiShoppingCart,
  FiLifeBuoy,
  FiGlobe,
  FiArrowRight,
  FiCheckCircle,
  FiSend,
} from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function ContactPage() {
  const bgGradient = useColorModeValue(
    'linear(to-br, brand.50, accent.50)',
    'linear(to-br, gray.900, gray.800)'
  )

  const stats = [
    { icon: FiClock, label: 'Average Response', value: '< 2 Hours', color: 'brand' },
    { icon: FiHeadphones, label: '24/7 Support', value: 'Available', color: 'accent' },
    { icon: FiGlobe, label: 'Global Offices', value: '12 Locations', color: 'purple' },
    { icon: FiCheckCircle, label: 'Customer Satisfaction', value: '98.5%', color: 'pink' },
  ]

  const departments = [
    {
      icon: FiShoppingCart,
      title: 'Sales & Demos',
      description: 'Product information, pricing, and demonstrations',
      email: 'sales@vogtmedtech.com',
      phone: '1-800-VOGT-MED',
      hours: 'Mon-Fri: 8AM-8PM EST',
      color: 'brand',
    },
    {
      icon: FiLifeBuoy,
      title: 'Technical Support',
      description: '24/7 emergency support and troubleshooting',
      email: 'support@vogtmedtech.com',
      phone: '1-800-SUPPORT',
      hours: '24/7 Emergency Line',
      color: 'accent',
    },
    {
      icon: FiBriefcase,
      title: 'Partnerships',
      description: 'Strategic partnerships and collaborations',
      email: 'partnerships@vogtmedtech.com',
      phone: '+1 (617) 555-0100',
      hours: 'Mon-Fri: 9AM-6PM EST',
      color: 'purple',
    },
    {
      icon: FiUsers,
      title: 'Careers',
      description: 'Join our team of innovators and experts',
      email: 'careers@vogtmedtech.com',
      phone: '+1 (617) 555-0150',
      hours: 'Mon-Fri: 9AM-5PM EST',
      color: 'pink',
    },
  ]

  const offices = [
    {
    city: 'Vancouver',
    region: 'West Coast Office',
    address: 'TEF4 at UBC Tech District',
    cityState: '2425 Health Science Mall, Vancouver, BC',
    country: 'Canada',
    phone: '+1 604-901-9169',
    email: '',
  },
  {
    city: 'Chicago',
    region: 'Midwest Office',
    address: '800 Fulton Market',
    cityState: '800 W. Fulton Market, Chicago, IL',
    country: 'United States',
    phone: '+1 815-427-1277',
    email: 'info@vogtmedtech.com',
  },
  {
    city: 'Chicago',
    region: 'Midwest Office',
    address: 'River Point',
    cityState: 'Corner of Lake & Canal Street, Chicago, IL',
    country: 'United States',
    phone: '+1 815-427-1277',
    email: 'contact@vogtmedtech.com',
  },
  {
    city: 'Tampa',
    region: 'South Office',
    address: 'Rivergate Tower',
    cityState: 'Downtown Tampa, FL',
    country: 'United States',
    phone: '+1 (813) 736-1790',
    email: 'contact@vogtmedtech.com',
    isHQ: true,
  },
  {
    city: 'Toronto',
    region: 'East Office',
    address: '20 Toronto Street',
    cityState: '20 Toronto Street, Toronto, ON M5C 2C5',
    country: 'Canada',
    phone: '+1 (416) 555-0700',
    email: '',
  },
  ]


  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/vogtmedtech', color: '#0A66C2' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/vogtmedtech', color: '#1DA1F2' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@vogtmedtech', color: '#FF0000' },
  ]

  return (
    <>
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        pt={{ base: 20, md: 32 }}
        pb={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack spacing={8} textAlign="center">
            <FallInPlace delay={0.1}>
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                bgGradient="linear(to-r, brand.600, accent.500)"
                bgClip="text"
                mb={4}
              >
                Get In Touch
              </Heading>
            </FallInPlace>

            <FallInPlace delay={0.2}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                _dark={{ color: 'gray.400' }}
                maxW="3xl"
                lineHeight="tall"
              >
                Our global team is ready to help you transform healthcare. Whether you need technical support,
                want to explore partnerships, or schedule a product demo, we're here 24/7.
              </Text>
            </FallInPlace>

            {/* Stats */}
            <FallInPlace delay={0.3}>
              <SimpleGrid
                columns={{ base: 2, md: 4 }}
                spacing={{ base: 4, md: 8 }}
                mt={8}
                w="full"
              >
                {stats.map((stat, index) => (
                  <Box
                    key={index}
                    p={6}
                    bg="white"
                    _dark={{ bg: 'gray.800' }}
                    borderRadius="xl"
                    shadow="lg"
                    textAlign="center"
                    transition="all 0.3s"
                    _hover={{
                      transform: 'translateY(-4px)',
                      shadow: 'xl',
                    }}
                  >
                    <Icon
                      as={stat.icon}
                      boxSize={8}
                      color={`${stat.color}.500`}
                      mb={3}
                    />
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      color={`${stat.color}.600`}
                      _dark={{ color: `${stat.color}.400` }}
                      mb={1}
                    >
                      {stat.value}
                    </Text>
                    <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </FallInPlace>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Section py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            {/* Left Column - Contact Form */}
            <FallInPlace delay={0.1}>
              <Box>
                <Heading as="h2" size="xl" mb={2}>
                  Send Us a Message
                </Heading>
                <Text color="gray.600" _dark={{ color: 'gray.400' }} mb={8}>
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </Text>

                <VStack spacing={6} align="stretch">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        placeholder="John"
                        size="lg"
                        borderRadius="lg"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        placeholder="Doe"
                        size="lg"
                        borderRadius="lg"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      placeholder="john.doe@hospital.org"
                      size="lg"
                      borderRadius="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      size="lg"
                      borderRadius="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Organization</FormLabel>
                    <Input
                      placeholder="Hospital or Company Name"
                      size="lg"
                      borderRadius="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Department</FormLabel>
                    <Select
                      placeholder="Select department"
                      size="lg"
                      borderRadius="lg"
                    >
                      <option value="sales">Sales & Product Inquiries</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="careers">Career Inquiries</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      size="lg"
                      borderRadius="lg"
                      rows={6}
                    />
                  </FormControl>

                  <Button
                    size="lg"
                    colorScheme="brand"
                    rightIcon={<FiSend />}
                    w="full"
                    _hover={{
                      transform: 'translateY(-2px)',
                      shadow: 'lg',
                    }}
                  >
                    Send Message
                  </Button>

                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </Text>
                </VStack>
              </Box>
            </FallInPlace>

            {/* Right Column - Quick Contact Options */}
            <FallInPlace delay={0.2}>
              <VStack spacing={6} align="stretch">
                <Box>
                  <Heading as="h3" size="lg" mb={6}>
                    Quick Contact Options
                  </Heading>

                  <VStack spacing={4} align="stretch">
                    {/* Emergency Support */}
                    <Box
                      p={6}
                      bg="red.50"
                      _dark={{ bg: 'red.900', borderColor: 'red.700' }}
                      borderRadius="xl"
                      border="2px"
                      borderColor="red.200"
                    >
                      <HStack spacing={3} mb={2}>
                      <Icon as={FiHeadphones} boxSize={6} color="red.600" />
                      <Heading as="h4" size="md" color="red.700" _dark={{ color: 'red.300' }}>
                        Emergency Support
                      </Heading>
                      </HStack>
                      <Text color="red.700" _dark={{ color: 'red.300' }} mb={3}>
                      24/7 emergency technical support for critical issues
                      </Text>
                      <Button
                      as={Link}
                      href="tel:18005877678"
                      colorScheme="red"
                      size="sm"
                      leftIcon={<FiPhone />}
                      _hover={{ textDecoration: 'none' }}
                      >
                      Call: 1-800-SUPPORT
                      </Button>
                    </Box>

                    {/* Live Chat */}
                    <Box
                      p={6}
                      bg="white"
                      _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
                      borderRadius="xl"
                      border="1px"
                      borderColor="gray.200"
                      transition="all 0.3s"
                      _hover={{
                        borderColor: 'brand.500',
                        shadow: 'md',
                      }}
                    >
                      <HStack spacing={3} mb={2}>
                        <Icon as={FiMessageCircle} boxSize={6} color="brand.500" />
                        <Heading as="h4" size="md">
                          Live Chat
                        </Heading>
                      </HStack>
                      <Text color="gray.600" _dark={{ color: 'gray.400' }} mb={3}>
                        Chat with our team in real-time
                      </Text>
                      <Button
                        colorScheme="brand"
                        size="sm"
                        variant="outline"
                        rightIcon={<FiArrowRight />}
                      >
                        Start Chat
                      </Button>
                    </Box>

                    {/* Schedule Demo */}
                    <Box
                      p={6}
                      bg="white"
                      _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
                      borderRadius="xl"
                      border="1px"
                      borderColor="gray.200"
                      transition="all 0.3s"
                      _hover={{
                        borderColor: 'accent.500',
                        shadow: 'md',
                      }}
                    >
                      <HStack spacing={3} mb={2}>
                        <Icon as={FiClock} boxSize={6} color="accent.500" />
                        <Heading as="h4" size="md">
                          Schedule a Demo
                        </Heading>
                      </HStack>
                      <Text color="gray.600" _dark={{ color: 'gray.400' }} mb={3}>
                        Book a personalized product demonstration
                      </Text>
                      <Button
                        colorScheme="accent"
                        size="sm"
                        variant="outline"
                        rightIcon={<FiArrowRight />}
                      >
                        Book Demo
                      </Button>
                    </Box>
                  </VStack>
                </Box>

                {/* Social Media */}
                <Box
                  p={6}
                  bg="gray.50"
                  _dark={{ bg: 'gray.800' }}
                  borderRadius="xl"
                >
                  <Heading as="h4" size="md" mb={4}>
                    Connect With Us
                  </Heading>
                  <HStack spacing={4}>
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        isExternal
                        _hover={{ transform: 'translateY(-2px)' }}
                        transition="all 0.2s"
                      >
                        <Box
                          p={3}
                          bg="white"
                          _dark={{ bg: 'gray.700' }}
                          borderRadius="lg"
                          shadow="sm"
                          _hover={{ shadow: 'md' }}
                        >
                          <Icon
                            as={social.icon}
                            boxSize={6}
                            color={social.color}
                          />
                        </Box>
                      </Link>
                    ))}
                  </HStack>
                </Box>
              </VStack>
            </FallInPlace>
          </SimpleGrid>
        </Container>
      </Section>

      {/* Departments Section */}
      <Section py={20} bg="gray.50" _dark={{ bg: 'gray.900' }}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <FallInPlace delay={0.1}>
              <Box textAlign="center" maxW="3xl" mx="auto">
                <Heading as="h2" size="2xl" mb={4}>
                  Contact by Department
                </Heading>
                <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }}>
                  Reach out to the right team for faster assistance
                </Text>
              </Box>
            </FallInPlace>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {departments.map((dept, index) => (
                <FallInPlace key={index} delay={0.1 + index * 0.1}>
                  <Box
                    p={8}
                    bg="white"
                    _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
                    borderRadius="xl"
                    border="1px"
                    borderColor="gray.200"
                    transition="all 0.3s"
                    _hover={{
                      transform: 'translateY(-4px)',
                      shadow: 'xl',
                      borderColor: `${dept.color}.500`,
                    }}
                    height="full"
                  >
                    <HStack spacing={4} mb={4}>
                      <Box
                        p={4}
                        bg={`${dept.color}.50`}
                        _dark={{ bg: `${dept.color}.900` }}
                        borderRadius="xl"
                      >
                        <Icon
                          as={dept.icon}
                          boxSize={8}
                          color={`${dept.color}.500`}
                        />
                      </Box>
                      <Box>
                        <Heading as="h3" size="md" mb={1}>
                          {dept.title}
                        </Heading>
                        <Badge colorScheme={dept.color} fontSize="xs">
                          {dept.hours}
                        </Badge>
                      </Box>
                    </HStack>

                    <Text color="gray.600" _dark={{ color: 'gray.400' }} mb={6}>
                      {dept.description}
                    </Text>

                    <VStack align="stretch" spacing={3}>
                      <HStack>
                        <Icon as={FiMail} color="gray.500" />
                        <Link
                          href={`mailto:${dept.email}`}
                          color={`${dept.color}.600`}
                          _dark={{ color: `${dept.color}.400` }}
                          fontWeight="medium"
                          _hover={{ textDecoration: 'underline' }}
                        >
                          {dept.email}
                        </Link>
                      </HStack>
                      <HStack>
                        <Icon as={FiPhone} color="gray.500" />
                        <Link
                          href={`tel:${dept.phone.replace(/\s/g, '')}`}
                          color={`${dept.color}.600`}
                          _dark={{ color: `${dept.color}.400` }}
                          fontWeight="medium"
                          _hover={{ textDecoration: 'underline' }}
                        >
                          {dept.phone}
                        </Link>
                      </HStack>
                    </VStack>
                  </Box>
                </FallInPlace>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Section>

      {/* Global Offices Section */}
      <Section py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <FallInPlace delay={0.1}>
              <Box textAlign="center" maxW="3xl" mx="auto">
                <Heading as="h2" size="2xl" mb={4}>
                  Global Offices
                </Heading>
                <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }}>
                  With 12 offices worldwide, we're always close to our customers
                </Text>
              </Box>
            </FallInPlace>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
              {offices.map((office, index) => (
                <FallInPlace key={index} delay={0.1 + index * 0.05}>
                  <Box
                    p={6}
                    bg="white"
                    _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
                    borderRadius="xl"
                    border="1px"
                    borderColor="gray.200"
                    transition="all 0.3s"
                    _hover={{
                      transform: 'translateY(-4px)',
                      shadow: 'lg',
                      borderColor: 'brand.500',
                    }}
                    height="full"
                    position="relative"
                  >
                    {office.isHQ && (
                      <Badge
                        position="absolute"
                        top={4}
                        right={4}
                        colorScheme="brand"
                        fontSize="xs"
                      >
                        HQ
                      </Badge>
                    )}

                    <VStack align="start" spacing={3}>
                      <Box>
                        <Heading as="h3" size="md" mb={1}>
                          {office.city}
                        </Heading>
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          _dark={{ color: 'gray.400' }}
                          fontWeight="medium"
                        >
                          {office.region}
                        </Text>
                      </Box>

                      <Box>
                        <HStack mb={2}>
                          <Icon as={FiMapPin} color="gray.500" boxSize={4} />
                          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                            {office.address}
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} pl={6}>
                          {office.cityState}
                        </Text>
                        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} pl={6}>
                          {office.country}
                        </Text>
                      </Box>

                      <Box w="full" pt={3} borderTop="1px" borderColor="gray.200" _dark={{ borderColor: 'gray.700' }}>
                        <Stack spacing={2}>
                          <Link
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            fontSize="sm"
                            color="brand.600"
                            _dark={{ color: 'brand.400' }}
                            fontWeight="medium"
                            display="flex"
                            alignItems="center"
                            gap={2}
                            _hover={{ textDecoration: 'underline' }}
                          >
                            <Icon as={FiPhone} />
                            {office.phone}
                          </Link>
                          <Link
                            href={`mailto:${office.email}`}
                            fontSize="sm"
                            color="brand.600"
                            _dark={{ color: 'brand.400' }}
                            fontWeight="medium"
                            display="flex"
                            alignItems="center"
                            gap={2}
                            _hover={{ textDecoration: 'underline' }}
                          >
                            <Icon as={FiMail} />
                            {office.email}
                          </Link>
                        </Stack>
                      </Box>
                    </VStack>
                  </Box>
                </FallInPlace>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section py={20}>
        <Container maxW="container.xl">
          <FallInPlace delay={0.1}>
            <Box
              p={{ base: 8, md: 12 }}
              borderRadius="2xl"
              bgGradient="linear(to-r, brand.600, accent.500)"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-50%"
                right="-10%"
                w="500px"
                h="500px"
                bg="whiteAlpha.200"
                borderRadius="full"
                filter="blur(80px)"
              />
              <VStack spacing={6} position="relative" zIndex={1} textAlign="center">
                <Heading as="h2" size="xl" color="white">
                  Ready to Transform Healthcare?
                </Heading>
                <Text fontSize="lg" color="whiteAlpha.900" maxW="2xl">
                  Join 500+ leading healthcare institutions worldwide. Schedule a demo today and
                  see how our innovative solutions can improve patient outcomes.
                </Text>
                <HStack spacing={4} flexWrap="wrap" justify="center">
                  <Button
                    size="lg"
                    bg="white"
                    color="brand.600"
                    _hover={{
                      transform: 'translateY(-2px)',
                      shadow: 'xl',
                    }}
                    rightIcon={<FiArrowRight />}
                  >
                    Schedule a Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    color="white"
                    borderColor="white"
                    _hover={{
                      bg: 'whiteAlpha.200',
                    }}
                  >
                    View Case Studies
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </FallInPlace>
        </Container>
      </Section>
    </>
  )
}
