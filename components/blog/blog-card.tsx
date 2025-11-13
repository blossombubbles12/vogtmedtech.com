import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Tag,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import NextLink from 'next/link'
import { FallInPlace } from '../motion/fall-in-place'

interface BlogCardProps {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  delay?: number
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  author,
  category,
  image,
  delay = 0,
}: BlogCardProps) {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const categoryColor = useColorModeValue('blue.600', 'blue.300')

  return (
    <FallInPlace delay={delay}>
      <LinkBox
        as="article"
        bg={cardBg}
        border="1px"
        borderColor={cardBorder}
        borderRadius="xl"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'xl',
          borderColor: 'blue.500',
        }}
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box position="relative" overflow="hidden" height="240px">
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            width="100%"
            height="100%"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          />
          <Box
            position="absolute"
            top={4}
            left={4}
          >
            <Tag
              size="md"
              bg="whiteAlpha.900"
              color={categoryColor}
              fontWeight="600"
              backdropFilter="blur(10px)"
            >
              {category}
            </Tag>
          </Box>
        </Box>

        <VStack align="stretch" p={6} spacing={3} flex="1">
          <HStack spacing={2} fontSize="sm" color={mutedColor}>
            <Text>{format(new Date(date), 'MMM dd, yyyy')}</Text>
            <Text>•</Text>
            <Text>{author}</Text>
          </HStack>

          <LinkOverlay as={NextLink} href={`/resources/blog/${slug}`}>
            <Heading
              as="h3"
              size="md"
              lineHeight="shorter"
              noOfLines={2}
              _hover={{ color: 'blue.500' }}
            >
              {title}
            </Heading>
          </LinkOverlay>

          <Text color={mutedColor} noOfLines={3} fontSize="sm">
            {description}
          </Text>
        </VStack>
      </LinkBox>
    </FallInPlace>
  )
}
