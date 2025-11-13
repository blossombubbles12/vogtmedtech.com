'use client'

import { Container, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react'
import { PageHeader } from '#components/page-header'
import { Section } from '#components/section'
import { BlogCard } from '#components/blog'
import { getAllPosts } from '#data/blog-posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <PageHeader
        title="Blog & Insights"
        subtitle="Latest trends and expert perspectives on healthcare technology."
      />
      <Section py={20}>
        <Container maxW="container.2xl">
          <VStack spacing={12} align="stretch">
            {posts.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {posts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    author={post.author}
                    category={post.category}
                    image={post.image}
                    delay={index * 0.1}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <VStack py={20} spacing={4}>
                <Heading size="lg">No posts yet</Heading>
                <Text color="gray.500">Check back soon for updates!</Text>
              </VStack>
            )}
          </VStack>
        </Container>
      </Section>
    </>
  )
}
