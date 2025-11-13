'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useColorModeValue,
  Card,
  CardBody,
  Icon,
  Stack,
  Badge,
  Checkbox,
  useToast,
} from '@chakra-ui/react'
import { FiCalendar, FiCheck, FiClock, FiUsers, FiZap } from 'react-icons/fi'
import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'
import { useState } from 'react'

export default function ScheduleDemoPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const benefits = [
    { icon: FiCalendar, text: 'Personalized 45-minute live demo' },
    { icon: FiUsers, text: 'Meet with product specialists' },
    { icon: FiZap, text: 'See solutions in action' },
    { icon: FiCheck, text: 'Get answers to your questions' },
  ]

  const solutions = [
    'Medical Devices',
    'Diagnostic Systems',
    'Digital Health Platform',
    'AI & Robotics',
    'All Solutions',
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Demo Request Submitted!',
        description: "We'll contact you within 24 hours to schedule your demo.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
      
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <>
      <PageHeader
        title="Schedule Your Personalized Demo"
        subtitle="Experience VogtMedTech's innovative healthcare solutions firsthand. Our experts will guide you through features tailored to your organization's needs."
      />

      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            {/* Left Column - Form */}
            <FallInPlace>
              <Card
                bg={cardBg}
                border="2px"
                borderColor={cardBorder}
                borderRadius="2xl"
                overflow="hidden"
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="stretch">
                    <VStack spacing={2} align="stretch">
                      <Heading size="lg">Request a Demo</Heading>
                      <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                        Fill out the form below and our team will reach out to schedule your demo.
                      </Text>
                    </VStack>

                    <form onSubmit={handleSubmit}>
                      <VStack spacing={5}>
                        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                          <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input
                              placeholder="John"
                              size="lg"
                              name="firstName"
                            />
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input
                              placeholder="Doe"
                              size="lg"
                              name="lastName"
                            />
                          </FormControl>
                        </SimpleGrid>

                        <FormControl isRequired>
                          <FormLabel>Work Email</FormLabel>
                          <Input
                            type="email"
                            placeholder="john.doe@hospital.com"
                            size="lg"
                            name="email"
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Phone Number</FormLabel>
                          <Input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            size="lg"
                            name="phone"
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Organization Name</FormLabel>
                          <Input
                            placeholder="Medical Center"
                            size="lg"
                            name="organization"
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Job Title</FormLabel>
                          <Input
                            placeholder="Chief Medical Officer"
                            size="lg"
                            name="jobTitle"
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Solution of Interest</FormLabel>
                          <Select
                            placeholder="Select a solution"
                            size="lg"
                            name="solution"
                          >
                            {solutions.map((solution) => (
                              <option key={solution} value={solution}>
                                {solution}
                              </option>
                            ))}
                          </Select>
                        </FormControl>

                        <FormControl>
                          <FormLabel>Number of Beds/Facilities</FormLabel>
                          <Select
                            placeholder="Select size"
                            size="lg"
                            name="size"
                          >
                            <option value="1-50">1-50 beds</option>
                            <option value="51-200">51-200 beds</option>
                            <option value="201-500">201-500 beds</option>
                            <option value="500+">500+ beds</option>
                            <option value="multi">Multiple facilities</option>
                          </Select>
                        </FormControl>

                        <FormControl>
                          <FormLabel>Additional Information</FormLabel>
                          <Textarea
                            placeholder="Tell us about your specific needs or questions..."
                            rows={4}
                            name="message"
                          />
                        </FormControl>

                        <FormControl>
                          <Checkbox name="consent" defaultChecked>
                            <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                              I agree to receive communications from VogtMedTech about products and services.
                            </Text>
                          </Checkbox>
                        </FormControl>

                        <Button
                          type="submit"
                          colorScheme="brand"
                          size="lg"
                          w="full"
                          isLoading={isSubmitting}
                          loadingText="Submitting..."
                        >
                          Schedule Demo
                        </Button>

                        <Text fontSize="xs" color="gray.500" textAlign="center">
                          By submitting this form, you agree to our Privacy Policy and Terms of Service.
                        </Text>
                      </VStack>
                    </form>
                  </VStack>
                </CardBody>
              </Card>
            </FallInPlace>

            {/* Right Column - Benefits & Info */}
            <VStack spacing={8} align="stretch">
              <FallInPlace delay={0.2}>
                <Card
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                >
                  <CardBody p={8}>
                    <VStack spacing={6} align="stretch">
                      <VStack spacing={2} align="stretch">
                        <Badge colorScheme="brand" alignSelf="start" fontSize="sm" px={3} py={1} borderRadius="full">
                          What to Expect
                        </Badge>
                        <Heading size="md">Your Demo Experience</Heading>
                      </VStack>

                      <VStack spacing={4} align="stretch">
                        {benefits.map((benefit, index) => (
                          <HStack key={index} spacing={4}>
                            <Box
                              p={3}
                              bg="brand.50"
                              borderRadius="lg"
                              _dark={{ bg: 'brand.900' }}
                            >
                              <Icon as={benefit.icon} color="brand.500" boxSize={5} />
                            </Box>
                            <Text fontWeight="500">{benefit.text}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </FallInPlace>

              <FallInPlace delay={0.3}>
                <Card
                  bg="gradient"
                  bgGradient="linear(to-br, brand.600, accent.500)"
                  borderRadius="2xl"
                  color="white"
                >
                  <CardBody p={8}>
                    <VStack spacing={4} align="stretch">
                      <Icon as={FiClock} boxSize={10} />
                      <Heading size="md">Quick Response Time</Heading>
                      <Text opacity={0.9}>
                        Our team typically responds within 24 hours to schedule your personalized demo at a time that works for you.
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              </FallInPlace>

              <FallInPlace delay={0.4}>
                <VStack spacing={4} align="stretch" p={6} bg={cardBg} borderRadius="xl" border="1px" borderColor={cardBorder}>
                  <Heading size="sm">Trusted by Healthcare Leaders</Heading>
                  <SimpleGrid columns={3} spacing={4}>
                    <VStack spacing={0}>
                      <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                        500+
                      </Text>
                      <Text fontSize="xs" color="gray.600" _dark={{ color: 'gray.400' }} textAlign="center">
                        Hospitals
                      </Text>
                    </VStack>
                    <VStack spacing={0}>
                      <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                        45
                      </Text>
                      <Text fontSize="xs" color="gray.600" _dark={{ color: 'gray.400' }} textAlign="center">
                        Countries
                      </Text>
                    </VStack>
                    <VStack spacing={0}>
                      <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                        2M+
                      </Text>
                      <Text fontSize="xs" color="gray.600" _dark={{ color: 'gray.400' }} textAlign="center">
                        Patients
                      </Text>
                    </VStack>
                  </SimpleGrid>
                </VStack>
              </FallInPlace>
            </VStack>
          </SimpleGrid>
        </Container>
      </Section>
    </>
  )
}
