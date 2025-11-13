'use client'

import { SimpleGrid, VStack, Badge, Heading, Text, Flex, Button, Container } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'
import { BlogCard } from './blog-card'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Section } from '#components/section'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
}

interface LatestBlogClientProps {
  posts: BlogPost[]
}

export function LatestBlogClient({ posts }: LatestBlogClientProps) {
  return (
    <Section py={{ base: 16, md: 24 }}>
      <Container maxW="container.2xl">
        <FallInPlace>
          <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
              Latest Insights
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="3xl">
              Healthcare Technology Insights
            </Heading>
            <Text 
              fontSize={{ base: 'lg', md: 'xl' }} 
              color="gray.600" 
              _dark={{ color: 'gray.400' }} 
              maxW="2xl"
            >
              Expert perspectives on the latest trends and innovations in medical technology
            </Text>
          </VStack>
        </FallInPlace>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={12}>
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
              delay={0.2 + index * 0.1}
            />
          ))}
        </SimpleGrid>

        <FallInPlace delay={0.5}>
          <Flex justify="center">
            <Button
              as="a"
              href="/resources/blog"
              size="lg"
              colorScheme="blue"
              rightIcon={<FiArrowRight />}
              variant="outline"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.3s"
            >
              View All Articles
            </Button>
          </Flex>
        </FallInPlace>
      </Container>
    </Section>
  )
}
