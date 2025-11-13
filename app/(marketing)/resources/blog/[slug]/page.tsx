'use client'

import { notFound } from 'next/navigation'
import { Container, Box, Heading, Text, Image, HStack, Tag, VStack, Divider, useColorModeValue } from '@chakra-ui/react'
import { format } from 'date-fns'
import { getPostBySlug } from '#data/blog-posts'
import { Section } from '#components/section'
import { BlogContent } from '#components/blog/blog-content'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const cardBg = useColorModeValue('white', 'gray.800')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <>
      {/* Hero Section with Featured Image */}
      <Box
        position="relative"
        h={{ base: '400px', md: '500px' }}
        w="full"
        overflow="hidden"
      >
        <Image
          src={post.image}
          alt={post.title}
          objectFit="cover"
          w="full"
          h="full"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Container maxW="container.lg">
            <VStack spacing={4} color="white" textAlign="center">
              <Tag colorScheme="blue" size="lg">
                {post.category}
              </Tag>
              <Heading
                as="h1"
                size={{ base: 'xl', md: '2xl' }}
                fontWeight="800"
              >
                {post.title}
              </Heading>
              <HStack spacing={4} fontSize="md" opacity={0.9}>
                <Text>{format(new Date(post.date), 'MMMM dd, yyyy')}</Text>
                <Text>•</Text>
                <Text>{post.author}</Text>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Box>

      {/* Article Content */}
      <Section py={{ base: 12, md: 20 }}>
        <Container maxW="container.md">
          <VStack spacing={8} align="stretch">
            {/* Description */}
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={mutedColor}
              fontWeight="500"
              lineHeight="tall"
            >
              {post.description}
            </Text>

            <Divider />

            {/* Article Body - Full Content */}
            <Box>
              <BlogContent slug={post.slug} />
            </Box>

            <Divider />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <Box>
                <Text fontSize="sm" fontWeight="600" mb={3} textTransform="uppercase" letterSpacing="wide">
                  Tags
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {post.tags.map((tag) => (
                    <Tag key={tag} size="md" variant="subtle" colorScheme="blue">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}
          </VStack>
        </Container>
      </Section>
    </>
  )
}
