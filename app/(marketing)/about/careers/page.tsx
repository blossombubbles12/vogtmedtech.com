'use client'

import { Container } from '@chakra-ui/react'
import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Careers"
        subtitle="Join our team and shape the future of healthcare technology."
        gradientColors={['accent.600', 'brand.500']}
      />
      <Section py={20}>
        <Container maxW="container.lg">
          {/* Career listings will go here */}
        </Container>
      </Section>
    </>
  )
}
