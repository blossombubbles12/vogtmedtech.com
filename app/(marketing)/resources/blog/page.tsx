'use client'

import { Container } from '@chakra-ui/react'
import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & Insights"
        subtitle="Latest trends and expert perspectives on healthcare technology."
      />
      <Section py={20}>
        <Container maxW="container.lg">
          {/* Blog posts will go here */}
        </Container>
      </Section>
    </>
  )
}
