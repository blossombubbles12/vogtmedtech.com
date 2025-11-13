'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Button,
  useColorModeValue,
  Card,
  CardBody,
  Stack,
  Badge,
  Flex,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FiActivity, FiZap, FiLayers, FiCpu, FiArrowRight, FiCheck } from 'react-icons/fi'
import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'
import Link from 'next/link'

export default function SolutionsPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')

  const solutions = [
    {
      title: 'Medical Devices',
      icon: FiActivity,
      description: 'Advanced medical devices for better patient outcomes and streamlined clinical workflows.',
      href: '/solutions/medical-devices',
      color: 'blue',
      features: [
        'Sentinel-X™ Vital Signs Monitor',
        'CardioPulse™ Cardiac Monitoring',
        'NeuroGuide™ Brain Activity Tracking',
        'FDA-cleared & hospital-grade',
      ],
      stats: [
        { label: 'Hospitals', value: '500+' },
        { label: 'Accuracy', value: '99.8%' },
      ],
    },
    {
      title: 'Diagnostic Systems',
      icon: FiZap,
      description: 'Precision diagnostic tools powered by AI for accurate, rapid clinical decision-making.',
      href: '/solutions/diagnostics',
      color: 'purple',
      features: [
        'Spectrum™ Clinical Analyzer',
        'DxVision™ AI Imaging',
        'GenomicsPro™ Sequencing',
        '200+ test parameters',
      ],
      stats: [
        { label: 'Tests/Hour', value: '800+' },
        { label: 'Sensitivity', value: '96.8%' },
      ],
    },
    {
      title: 'Digital Health',
      icon: FiLayers,
      description: 'Connected healthcare solutions for modern medicine, telehealth, and remote patient monitoring.',
      href: '/solutions/digital-health',
      color: 'green',
      features: [
        'HealthConnect™ EHR Integration',
        'VitalWatch™ Remote Monitoring',
        'CarePath™ Patient Engagement',
        'HIPAA compliant platform',
      ],
      stats: [
        { label: 'Patients', value: '2M+' },
        { label: 'Uptime', value: '99.99%' },
      ],
    },
    {
      title: 'AI & Robotics',
      icon: FiCpu,
      description: 'Cutting-edge AI and robotic systems transforming surgical precision and diagnostic accuracy.',
      href: '/solutions/ai-robotics',
      color: 'orange',
      features: [
        'CognitionAI™ Clinical Intelligence',
        'PrecisionBot™ Surgical System',
        'AutonomyAI™ Surgical Assistant',
        '7 degrees of freedom',
      ],
      stats: [
        { label: 'Accuracy', value: '97.2%' },
        { label: 'Procedures', value: '50K+' },
      ],
    },
  ]

  return (
    <>
      <PageHeader
        title="Complete Healthcare Technology Solutions"
        subtitle="Integrated medical devices, diagnostics, digital health, and AI-powered systems designed to transform patient care and clinical outcomes."
      />

      {/* Solutions Grid */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.2xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {solutions.map((solution, index) => (
              <FallInPlace key={solution.title} delay={index * 0.1}>
                <Card
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  overflow="hidden"
                  transition="all 0.3s"
                  h="full"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '2xl',
                    borderColor: `${solution.color}.500`,
                  }}
                >
                  <CardBody p={8}>
                    <VStack align="stretch" spacing={6}>
                      {/* Header */}
                      <Flex justify="space-between" align="start">
                        <Box
                          p={4}
                          bg={`${solution.color}.50`}
                          borderRadius="xl"
                          _dark={{ bg: `${solution.color}.900` }}
                        >
                          <Icon
                            as={solution.icon}
                            boxSize={8}
                            color={`${solution.color}.500`}
                          />
                        </Box>
                        <Badge
                          colorScheme={solution.color}
                          fontSize="sm"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          Available Now
                        </Badge>
                      </Flex>

                      {/* Title & Description */}
                      <VStack align="stretch" spacing={3}>
                        <Heading size="lg">{solution.title}</Heading>
                        <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                          {solution.description}
                        </Text>
                      </VStack>

                      {/* Features List */}
                      <List spacing={2}>
                        {solution.features.map((feature) => (
                          <ListItem key={feature} fontSize="sm">
                            <ListIcon
                              as={FiCheck}
                              color={`${solution.color}.500`}
                            />
                            {feature}
                          </ListItem>
                        ))}
                      </List>

                      {/* Stats */}
                      <SimpleGrid columns={2} spacing={4} pt={4} borderTop="1px" borderColor={cardBorder}>
                        {solution.stats.map((stat) => (
                          <Box key={stat.label}>
                            <Text fontSize="2xl" fontWeight="bold" color={`${solution.color}.500`}>
                              {stat.value}
                            </Text>
                            <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                              {stat.label}
                            </Text>
                          </Box>
                        ))}
                      </SimpleGrid>

                      {/* CTA Button */}
                      <Button
                        as={Link}
                        href={solution.href}
                        colorScheme={solution.color}
                        rightIcon={<FiArrowRight />}
                        size="lg"
                        w="full"
                      >
                        Explore {solution.title}
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section py={{ base: 16, md: 24 }} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="container.lg">
          <FallInPlace>
            <VStack spacing={8} textAlign="center">
              <VStack spacing={4}>
                <Badge colorScheme="brand" fontSize="sm" px={3} py={1} borderRadius="full">
                  Get Started
                </Badge>
                <Heading size={{ base: 'xl', md: '2xl' }}>
                  Ready to Transform Your Healthcare Delivery?
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" _dark={{ color: 'gray.400' }} maxW="2xl">
                  Schedule a personalized demo to see how VogtMedTech solutions can enhance patient outcomes and streamline your clinical workflows.
                </Text>
              </VStack>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  as={Link}
                  href="/schedule-demo"
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<FiArrowRight />}
                  px={8}
                >
                  Schedule a Demo
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="outline"
                  colorScheme="brand"
                  px={8}
                >
                  Contact Sales
                </Button>
              </Stack>
            </VStack>
          </FallInPlace>
        </Container>
      </Section>
    </>
  )
}
