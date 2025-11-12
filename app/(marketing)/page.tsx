'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import type { NextPage } from 'next'
import {
  FiActivity,
  FiAward,
  FiBox,
  FiCpu,
  FiHeart,
  FiShield,
  FiSmile,
  FiThumbsUp,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Pioneering the Future
                <Br /> of Medical Technology
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Vogt MedTech delivers <Em>innovative medical devices</Em>
                <Br /> and cutting-edge diagnostic systems that transform <Br />{' '}
                healthcare outcomes worldwide.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="brand" size="lg" href="/contact">
                  Contact Sales
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/solutions/medical-devices"
                  variant="outline"
                  colorScheme="brand"
                >
                  Explore Solutions
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'FDA Approved',
            icon: FiShield,
            description: 'All devices meet rigorous FDA regulatory standards and compliance requirements.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'AI-Powered',
            icon: FiCpu,
            description:
              'Advanced machine learning algorithms enhance diagnostic accuracy and patient outcomes.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Patient-Centered',
            icon: FiHeart,
            description:
              'Designed with patient safety, comfort, and optimal care at the forefront of innovation.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Proven Results',
            icon: FiThumbsUp,
            description:
              'Trusted by 500+ healthcare institutions across 45 countries, impacting 2M+ lives.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Comprehensive Solutions">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            From <Em>advanced diagnostic systems</Em> to precision surgical robotics,
            Vogt MedTech provides integrated solutions across the entire patient care journey.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Innovation at Scale">
        <Text color="muted" fontSize="lg">
          With over 150 patents and cutting-edge R&D facilities, we continuously push
          the boundaries of what&apos;s possible in medical technology.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Dr. Sarah Mitchell"
        description="Chief of Surgery, Boston General"
        avatar="/static/images/avatar.jpg"
        gradient={['brand.200', 'accent.500']}
      >
        "Vogt MedTech&apos;s AI-powered diagnostic systems have revolutionized our surgical
        planning. The precision and reliability are unmatched in the industry."
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Complete Medical Technology Ecosystem"
      >
        <Text color="muted" fontSize="lg">
          Our integrated platform covers every aspect of modern healthcare delivery,
          from diagnosis to treatment and ongoing patient monitoring.
        </Text>
        <Box mt="8">
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} flexWrap="wrap">
            {[
              'Diagnostic Imaging',
              'Surgical Robotics',
              'Patient Monitoring',
              'AI Analytics',
              'Digital Health',
              'Clinical Decision Support',
              'Telemedicine',
              'Data Security',
              'Regulatory Compliance',
              'Clinical Training',
              'Remote Care',
              'Integration APIs',
            ].map((value) => (
              <Box
                key={value}
                bg="brand.50"
                _dark={{ bg: 'brand.900', color: 'brand.300' }}
                color="brand.600"
                rounded="full"
                px="4"
                py="1"
                fontSize="sm"
                fontWeight="medium"
              >
                {value}
              </Box>
            ))}
          </Stack>
        </Box>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Beyond Standard
          <Br /> Medical Equipment.
        </Heading>
      }
      description={
        <>
          Vogt MedTech combines decades of medical expertise with cutting-edge technology.
          <Br />
          Our solutions are trusted by healthcare leaders worldwide.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Medical Devices.',
          icon: FiBox,
          description:
            'FDA-approved devices engineered for precision, reliability, and patient safety across all medical specialties.',
          variant: 'inline',
        },
        {
          title: 'Diagnostic Systems.',
          icon: FiActivity,
          description:
            'Advanced imaging and diagnostic tools delivering rapid, accurate results for informed clinical decisions.',
          variant: 'inline',
        },
        {
          title: 'Digital Health.',
          icon: FiSmile,
          description:
            'Connected care platforms enabling remote monitoring, telemedicine, and personalized patient experiences.',
          variant: 'inline',
        },
        {
          title: 'AI & Robotics.',
          icon: FiCpu,
          description:
            'Intelligent surgical systems and AI-powered analytics transforming precision medicine and patient outcomes.',
          variant: 'inline',
        },
        {
          title: 'Research & Development.',
          icon: FiZap,
          description:
            '150+ patents and ongoing innovation in medical technology, biomaterials, and clinical applications.',
          variant: 'inline',
        },
        {
          title: 'Global Reach.',
          icon: FiTrendingUp,
          description:
            'Serving 500+ healthcare institutions across 45 countries with 24/7 support and clinical training.',
          variant: 'inline',
        },
        {
          title: 'Compliance & Safety.',
          icon: FiShield,
          description:
            'Rigorous quality control, regulatory compliance, and industry-leading safety standards across all products.',
          variant: 'inline',
        },
        {
          title: 'Clinical Excellence.',
          icon: FiAward,
          description:
            'Award-winning solutions recognized globally for innovation, clinical impact, and improving patient care.',
          variant: 'inline',
        },
        {
          title: 'Patient Impact.',
          icon: FiHeart,
          description:
            'Over 2 million lives positively impacted through our medical devices, diagnostics, and healthcare solutions.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)
        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Custom enterprise pricing available. Contact our sales team for volume licensing and implementation support.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
