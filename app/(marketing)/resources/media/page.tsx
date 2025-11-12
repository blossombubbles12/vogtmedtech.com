'use client'

import { Container } from '@chakra-ui/react'
import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'

export default function MediaPage() {
  return (
    <>
      <PageHeader
        title="Media Center"
        subtitle="Press releases, videos, and media assets from Vogt MedTech."
        gradientColors={['accent.600', 'brand.600']}
      />
      <Section py={20}>
        <Container maxW="container.lg">
          {/* Media center content will go here */}
        </Container>
      </Section>
    </>
  )
}
