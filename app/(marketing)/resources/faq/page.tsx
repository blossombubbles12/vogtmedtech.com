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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import {
  FiBook,
  FiCheckCircle,
  FiCreditCard,
  FiHelpCircle,
  FiLock,
  FiPhone,
  FiSearch,
  FiSettings,
  FiShield,
  FiTool,
  FiTruck,
  FiUsers,
} from 'react-icons/fi'
import { FaArrowRight, FaHeadset } from 'react-icons/fa'
import Link from 'next/link'

import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export default function FAQPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const featureBg = useColorModeValue('gray.50', 'gray.900')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('brand.600', 'brand.300')

  const faqCategories = [
    {
      name: 'General',
      icon: FiHelpCircle,
      color: 'brand.500',
      count: 8,
    },
    {
      name: 'Products',
      icon: FiSettings,
      color: 'accent.500',
      count: 12,
    },
    {
      name: 'Support',
      icon: FiTool,
      color: 'purple.500',
      count: 10,
    },
    {
      name: 'Billing',
      icon: FiCreditCard,
      color: 'pink.500',
      count: 6,
    },
  ]

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          q: 'What types of healthcare institutions does Vogt MedTech serve?',
          a: 'We serve a wide range of healthcare organizations including academic medical centers, community hospitals, surgical centers, diagnostic laboratories, and rural health networks. Our solutions are designed to scale from small clinics to large health systems with hundreds of locations.',
        },
        {
          q: 'Are Vogt MedTech products FDA approved?',
          a: 'Yes, all our medical devices have received appropriate FDA clearances (510(k) or PMA) for their intended uses. Our AI diagnostic systems have FDA 510(k) clearance, our surgical robots have FDA approval for general surgery, urology, and gynecology, and our monitoring systems meet FDA Class II device standards. Additionally, our products carry CE marking for European markets and comply with international regulatory standards.',
        },
        {
          q: 'How long has Vogt MedTech been in business?',
          a: 'Vogt MedTech was founded in 2010 and has over 15 years of experience developing and deploying advanced medical technologies. We\'ve grown from a startup to a global leader serving 500+ healthcare institutions across 45 countries.',
        },
        {
          q: 'What makes Vogt MedTech different from competitors?',
          a: 'Our unique value proposition combines three key differentiators: (1) Integration - our solutions work seamlessly with existing healthcare IT systems, (2) Evidence - all our products are backed by peer-reviewed clinical studies demonstrating measurable outcomes, and (3) Support - we provide comprehensive training, 24/7 technical support, and ongoing clinical education to ensure customer success.',
        },
        {
          q: 'Does Vogt MedTech have international presence?',
          a: 'Yes, we have a global footprint with offices in North America, Europe, and Asia-Pacific. We serve customers in 45 countries worldwide with localized support teams, regulatory compliance for each market, and multilingual customer service.',
        },
        {
          q: 'How can I schedule a product demonstration?',
          a: 'You can schedule a demonstration through multiple channels: (1) Fill out the contact form on our website, (2) Call our sales team at 1-800-VOGT-MED, (3) Email sales@vogtmedtech.com, or (4) Request a demo through your regional sales representative. We offer both virtual demonstrations and in-person visits to our Innovation Centers.',
        },
        {
          q: 'What is the typical implementation timeline?',
          a: 'Implementation timelines vary by product and scope. Small-scale deployments (single department) typically take 4-8 weeks, while enterprise-wide implementations can take 6-12 months. This includes site preparation, installation, staff training, workflow integration, and go-live support. We provide detailed project plans and dedicated implementation managers for all deployments.',
        },
        {
          q: 'Do you offer financing options?',
          a: 'Yes, we offer flexible financing options including capital purchase, operating leases, per-procedure pricing, and subscription models. We work with major healthcare financing partners and can structure agreements to fit your budget and cash flow requirements. Contact our sales team to discuss financing options.',
        },
      ],
    },
    {
      category: 'Products',
      questions: [
        {
          q: 'Can CognitionAI integrate with our existing PACS system?',
          a: 'Yes, CognitionAI is designed for seamless integration with all major PACS (Picture Archiving and Communication Systems) platforms. It supports DICOM standards and can pull studies directly from your PACS, analyze them in real-time, and push results back with structured findings. Integration typically takes 2-3 weeks including testing and validation.',
        },
        {
          q: 'What specialties does PrecisionBot support?',
          a: 'PrecisionBot has FDA clearance for general surgery, urology, and gynecology procedures. Common applications include hernia repair, cholecystectomy, prostatectomy, hysterectomy, and colorectal surgery. We\'re actively pursuing regulatory clearance for cardiac, thoracic, and pediatric surgery applications. Our clinical team can help determine if PrecisionBot is appropriate for your surgical program.',
        },
        {
          q: 'How accurate is the Sentinel-X monitoring system?',
          a: 'Sentinel-X exceeds FDA accuracy standards for all monitored parameters. Key specifications: ECG accuracy >99.5%, SpO2 accuracy ±2%, blood pressure accuracy ±3 mmHg, temperature accuracy ±0.1°C. The AI-powered predictive algorithms have been validated in clinical trials showing 89.3% accuracy in predicting patient deterioration 45 minutes before clinical signs appear.',
        },
        {
          q: 'What types of tests can Spectrum Clinical Analyzer run?',
          a: 'Spectrum can perform over 200 different tests across multiple categories: comprehensive metabolic panel, lipid panel, cardiac markers (troponin, BNP), infectious disease markers, coagulation studies, thyroid function, HbA1c, blood gases, and electrolytes. Test menu continues to expand with software updates. Turnaround time is <15 minutes for most tests.',
        },
        {
          q: 'Is VitalWatch compatible with consumer wearables?',
          a: 'Yes, VitalWatch can integrate data from FDA-cleared consumer wearables including Apple Watch, Fitbit medical devices, and other compatible devices. However, for clinical-grade monitoring requiring regulatory compliance, we recommend using our proprietary VitalWatch sensors which meet medical device standards for accuracy and reliability.',
        },
        {
          q: 'How often are AI models updated?',
          a: 'Our AI models receive continuous updates through federated learning, improving with every case analyzed while maintaining patient privacy. Major model updates with new capabilities are released quarterly after validation. All updates undergo rigorous testing and maintain or improve upon existing accuracy metrics. Updates are automatically deployed with minimal downtime.',
        },
        {
          q: 'What is the warranty period for medical devices?',
          a: 'All Vogt MedTech medical devices come with a standard 2-year parts and labor warranty. Extended warranty options up to 7 years are available. Warranty covers all manufacturer defects, software updates, and technical support. We also offer comprehensive service contracts that include preventive maintenance, priority parts replacement, and loaner equipment.',
        },
        {
          q: 'Can I upgrade my system to newer versions?',
          a: 'Yes, we offer upgrade paths for all our product lines. Software upgrades are typically included in service contracts and deployed automatically. Hardware upgrades are available at discounted rates for existing customers. Many customers choose a refresh cycle of 5-7 years to maintain access to the latest technology while maximizing their initial investment.',
        },
        {
          q: 'What are the space requirements for PrecisionBot?',
          a: 'PrecisionBot requires approximately 400 square feet of operating room space with standard surgical infrastructure (power, medical gases, data connectivity). The system includes the patient cart (6\' x 4\' footprint), surgeon console (4\' x 4\'), and vision cart (3\' x 3\'). We provide detailed site specifications during the planning phase and work with your facilities team to ensure optimal placement.',
        },
        {
          q: 'Do your devices require special IT infrastructure?',
          a: 'Our devices integrate with standard healthcare IT infrastructure. Requirements typically include: gigabit ethernet connectivity, standard electrical outlets (120V/20A or 220V/16A), network security compliance (firewall rules, VLAN configuration), and DICOM/HL7 interface capabilities. Our IT team works closely with your IT department during implementation to ensure smooth integration.',
        },
        {
          q: 'How is patient data protected?',
          a: 'All Vogt MedTech systems employ enterprise-grade security: 256-bit AES encryption for data at rest and TLS 1.3 for data in transit, HIPAA-compliant data handling, SOC 2 Type II certified cloud infrastructure, multi-factor authentication, role-based access controls, automatic audit logging, and regular security assessments. We undergo annual third-party security audits and maintain compliance with international data protection regulations including GDPR.',
        },
        {
          q: 'What happens if a device malfunctions during a procedure?',
          a: 'All critical systems include redundant safety features and fail-safes. In the unlikely event of a malfunction, devices enter a safe state and alert clinical staff immediately. For surgical robots, surgeons maintain manual override capability at all times. We provide 24/7 technical support with average response time of <15 minutes. For critical installations, we offer on-site spare equipment and next-business-day parts replacement.',
        },
      ],
    },
    {
      category: 'Support & Training',
      questions: [
        {
          q: 'What training is included with product purchase?',
          a: 'Comprehensive training is included with all purchases: (1) Administrator training - system configuration, user management, reporting (2-3 days), (2) Clinical user training - hands-on operation, workflow integration, troubleshooting (1-2 days per specialty), (3) Ongoing education - quarterly webinars, online learning modules, annual refresher courses. For surgical robotics, we provide cadaver lab training and proctoring for initial cases.',
        },
        {
          q: 'Is 24/7 technical support available?',
          a: 'Yes, all customers receive 24/7/365 technical support. Support tiers include: (1) Phone support with live engineers (average answer time <2 minutes), (2) Remote diagnostic access for troubleshooting, (3) Online knowledge base and video tutorials, (4) Emergency on-site support available within 24 hours globally. Premium support contracts offer <4 hour on-site response for critical issues.',
        },
        {
          q: 'How do I report a product issue or malfunction?',
          a: 'Report issues through multiple channels: (1) 24/7 technical support hotline (1-800-VOGT-SUP), (2) Online support portal (support.vogtmedtech.com), (3) In-device alert system for critical issues, (4) Mobile support app for quick troubleshooting. All reports are logged, tracked, and assigned priority levels. Critical issues affecting patient care receive immediate escalation to senior engineering teams.',
        },
        {
          q: 'What is the average response time for support requests?',
          a: 'Response times vary by severity: P1 (Critical/system down) - <15 minutes, P2 (High/major function impaired) - <1 hour, P3 (Medium/minor issue) - <4 hours, P4 (Low/question or request) - <24 hours. Resolution time varies by issue complexity but most issues are resolved remotely within the same business day.',
        },
        {
          q: 'Do you offer ongoing clinical education?',
          a: 'Yes, we provide extensive continuing education: (1) Monthly webinars on clinical best practices and new features, (2) Annual users conference with workshops and networking, (3) Clinical advisory board meetings, (4) On-demand training modules with CME credits, (5) Peer-to-peer learning communities. Many programs offer AMA PRA Category 1 Credits™.',
        },
        {
          q: 'Can we customize workflows to match our hospital protocols?',
          a: 'Absolutely. All our systems offer extensive workflow customization through configurable templates, protocols, and care pathways. During implementation, our clinical specialists work with your team to map existing workflows and configure the system to match your institutional practices. We can also develop custom integrations with your EHR and departmental systems.',
        },
        {
          q: 'What preventive maintenance is required?',
          a: 'Preventive maintenance schedules vary by device: surgical robots require quarterly servicing (4-6 hours), diagnostic equipment requires semi-annual calibration (2-3 hours), monitoring systems require annual inspections (1-2 hours). Service contracts include all preventive maintenance, calibration, software updates, and annual safety inspections. We schedule maintenance during off-hours to minimize disruption.',
        },
        {
          q: 'How do software updates work?',
          a: 'Software updates are delivered through our secure cloud platform: (1) Minor updates (bug fixes, small improvements) - deployed automatically during maintenance windows, (2) Major updates (new features) - scheduled with customer notification 30 days in advance, (3) Security patches - deployed immediately for critical vulnerabilities. All updates are tested extensively before release and include rollback capabilities. Customers can review update notes and schedule deployment timing.',
        },
        {
          q: 'Do you provide remote assistance?',
          a: 'Yes, our support team can remotely access devices (with your permission) for diagnostics, configuration, and troubleshooting. Remote sessions are encrypted, audited, and require customer authorization. Most issues can be resolved remotely without on-site visits. Remote assistance is available 24/7 and typically begins within minutes of contacting support.',
        },
        {
          q: 'What documentation is provided?',
          a: 'Comprehensive documentation includes: (1) User manuals (digital and print), (2) Quick reference guides laminated for clinical areas, (3) Installation and service manuals for technical staff, (4) Training videos and tutorials, (5) Clinical evidence and white papers, (6) Regulatory documentation (510(k) summaries, safety documents). All documentation is accessible through our online portal and updated regularly.',
        },
      ],
    },
    {
      category: 'Billing & Contracts',
      questions: [
        {
          q: 'What is included in the purchase price?',
          a: 'Standard purchase includes: hardware/software system, installation and setup, comprehensive training for all user types, first year of standard support and warranty, software updates and security patches, online learning resources, and basic integration services. Optional add-ons include extended warranties, premium support, advanced integrations, and custom development.',
        },
        {
          q: 'Are there recurring costs after purchase?',
          a: 'Yes, typical recurring costs include: (1) Annual support and maintenance contract (typically 10-15% of purchase price), (2) Consumables and supplies (varies by usage), (3) Optional services (training refreshers, consulting, custom development). Some customers choose subscription pricing which bundles everything into a single monthly payment.',
        },
        {
          q: 'Do you offer trial periods or pilots?',
          a: 'Yes, we offer evaluation programs: (1) Virtual demonstrations with your own data (1-2 hours), (2) On-site pilots with temporary equipment (30-90 days), (3) Limited deployment in one department before enterprise rollout. Pilot programs include full training and support with minimal risk commitment. Success metrics are defined upfront to guide purchase decisions.',
        },
        {
          q: 'What is your refund policy?',
          a: 'We stand behind our products with satisfaction guarantees: (1) 30-day money-back guarantee for software licenses (no questions asked), (2) 90-day satisfaction guarantee for hardware systems (excluding installation costs), (3) Pro-rated refunds for annual support contracts if cancelled early. Custom contracts may have different terms. Our goal is customer success, not just a sale.',
        },
        {
          q: 'Can we get volume discounts for multiple systems?',
          a: 'Yes, we offer tiered volume pricing: (1) Multi-site discounts for health systems, (2) Bundle pricing when purchasing multiple product lines, (3) Long-term commitment discounts for 3-5 year contracts. Enterprise customers with 5+ locations typically receive 15-25% discounts. Contact our enterprise sales team for custom pricing based on your specific needs.',
        },
        {
          q: 'How does per-procedure pricing work?',
          a: 'Per-procedure pricing offers a pay-as-you-go model ideal for new programs: (1) No upfront capital investment, (2) Fixed cost per procedure (varies by product and procedure type), (3) Includes all hardware, software, support, maintenance, and consumables, (4) Minimum monthly charges apply. This model allows you to align expenses with revenue and scale as your program grows.',
        },
      ],
    },
  ]

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Vogt MedTech products, services, support, and more. Can't find what you're looking for? Our support team is here to help."
        gradientColors={['brand.600', 'purple.500']}
      />

      {/* Quick Contact Section */}
      <Section py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {[
              {
                icon: FiPhone,
                title: '24/7 Support',
                detail: '1-800-VOGT-MED',
                color: 'brand.500',
              },
              {
                icon: FaHeadset,
                title: 'Live Chat',
                detail: 'Available Mon-Fri 8am-6pm ET',
                color: 'accent.500',
              },
              {
                icon: FiBook,
                title: 'Documentation',
                detail: 'User guides & tutorials',
                color: 'purple.500',
              },
              {
                icon: FiSettings,
                title: 'Support Portal',
                detail: 'Submit tickets & track status',
                color: 'pink.500',
              },
            ].map((item, index) => (
              <FallInPlace key={index} delay={0.1 * index}>
                <Box
                  bg={cardBg}
                  border="2px"
                  borderColor={cardBorder}
                  borderRadius="xl"
                  p={6}
                  textAlign="center"
                  _hover={{
                    shadow: 'xl',
                    borderColor: item.color,
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s"
                  cursor="pointer"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w={12}
                    h={12}
                    borderRadius="lg"
                    bg={`${item.color}Alpha.100`}
                    mx="auto"
                    mb={4}
                  >
                    <Icon as={item.icon} boxSize={6} color={item.color} />
                  </Flex>
                  <Text fontSize="sm" fontWeight="bold" mb={1}>
                    {item.title}
                  </Text>
                  <Text fontSize="xs" color={mutedColor}>
                    {item.detail}
                  </Text>
                </Box>
              </FallInPlace>
            ))}
          </SimpleGrid>
        </Container>
      </Section>

      {/* Search and Categories */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            {/* Search */}
            <FallInPlace>
              <VStack spacing={6} w="full" maxW="2xl" mx="auto">
                <VStack spacing={2} textAlign="center">
                  <Heading as="h2" size="xl">
                    How can we help you?
                  </Heading>
                  <Text color={mutedColor}>
                    Search our knowledge base or browse by category
                  </Text>
                </VStack>
                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="gray.400" />
                  </InputLeftElement>
                  <Input
                    placeholder="Search FAQs..."
                    bg={cardBg}
                    border="2px"
                    borderColor={cardBorder}
                    _focus={{
                      borderColor: 'brand.500',
                      shadow: 'md',
                    }}
                  />
                </InputGroup>
              </VStack>
            </FallInPlace>

            {/* Categories */}
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full">
              {faqCategories.map((category, index) => (
                <FallInPlace key={index} delay={0.1 * index}>
                  <Box
                    bg={cardBg}
                    border="2px"
                    borderColor={cardBorder}
                    borderRadius="xl"
                    p={6}
                    textAlign="center"
                    _hover={{
                      shadow: 'xl',
                      borderColor: category.color,
                      transform: 'translateY(-4px)',
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                  >
                    <Flex
                      align="center"
                      justify="center"
                      w={14}
                      h={14}
                      borderRadius="xl"
                      bgGradient={`linear(to-br, ${category.color}, ${category.color})`}
                      mx="auto"
                      mb={4}
                    >
                      <Icon as={category.icon} boxSize={7} color="white" />
                    </Flex>
                    <Text fontSize="md" fontWeight="bold" mb={2}>
                      {category.name}
                    </Text>
                    <Badge colorScheme="gray" borderRadius="full">
                      {category.count} questions
                    </Badge>
                  </Box>
                </FallInPlace>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Section>

      {/* FAQ Accordions */}
      <Section py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            {faqData.map((section, sectionIndex) => (
              <FallInPlace key={sectionIndex} delay={0.1 * sectionIndex}>
                <Box w="full">
                  <HStack spacing={4} mb={8}>
                    <Box
                      w={2}
                      h={10}
                      bgGradient="linear(to-b, brand.500, accent.500)"
                      borderRadius="full"
                    />
                    <Heading as="h2" size="lg">
                      {section.category}
                    </Heading>
                  </HStack>

                  <Accordion allowMultiple>
                    {section.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        border="2px"
                        borderColor={cardBorder}
                        borderRadius="xl"
                        mb={4}
                        bg={cardBg}
                        _hover={{
                          shadow: 'md',
                        }}
                        transition="all 0.2s"
                      >
                        <AccordionButton
                          p={6}
                          _hover={{
                            bg: featureBg,
                          }}
                          borderRadius="xl"
                        >
                          <HStack flex="1" textAlign="left" spacing={4}>
                            <Flex
                              align="center"
                              justify="center"
                              w={8}
                              h={8}
                              borderRadius="lg"
                              bg={`brand.500Alpha.100`}
                              flexShrink={0}
                            >
                              <Icon as={FiHelpCircle} boxSize={5} color="brand.500" />
                            </Flex>
                            <Text fontSize="md" fontWeight="600">
                              {item.q}
                            </Text>
                          </HStack>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel p={6} pt={0}>
                          <Box
                            pl={12}
                            borderLeft="3px"
                            borderColor="brand.500"
                            ml={4}
                          >
                            <Text color={mutedColor} lineHeight="tall">
                              {item.a}
                            </Text>
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>
              </FallInPlace>
            ))}
          </VStack>
        </Container>
      </Section>

      {/* Still Need Help CTA */}
      <Section bg={featureBg} py={{ base: 16, md: 24 }}>
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
                  <Icon as={FaHeadset} boxSize={12} color="white" />
                </Flex>
                <VStack spacing={4}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="shorter"
                  >
                    Still Need Help?
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="3xl"
                    lineHeight="tall"
                  >
                    Our expert support team is available 24/7 to answer your questions 
                    and provide technical assistance. Whether you're a current customer 
                    or evaluating our solutions, we're here to help.
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
                    Contact Support
                  </Button>
                  <Button
                    as={Link}
                    href="tel:1-800-VOGT-MED"
                    size="lg"
                    h={14}
                    px={8}
                    variant="outline"
                    color="white"
                    borderColor="white"
                    borderWidth="2px"
                    fontSize="lg"
                    fontWeight="bold"
                    leftIcon={<FiPhone />}
                    _hover={{
                      bg: 'whiteAlpha.200',
                    }}
                  >
                    1-800-VOGT-MED
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
