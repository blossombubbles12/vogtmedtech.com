'use client'

import { Container } from '@chakra-ui/react'
import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'

export default function DocumentationPage() {
  return (
    <>
      <PageHeader
        title="Documentation"
        subtitle="Product guides and technical specifications for our medical devices."
      />
      <Section py={20}>
        <Container maxW="container.lg">
          {/* Documentation content will go here */}
        </Container>
      </Section>
    </>
  )
}
