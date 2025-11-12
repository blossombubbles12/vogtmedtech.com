'use client'

import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { footerSections, socialLinks } from '#data/footer-links'
import { Logo } from './logo'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const headingColor = useColorModeValue('gray.900', 'white')
  const linkColor = useColorModeValue('gray.600', 'gray.400')
  const linkHoverColor = useColorModeValue('brand.500', 'brand.300')
  const copyrightBg = useColorModeValue('white', 'gray.950')
  const copyrightColor = useColorModeValue('gray.600', 'gray.500')
  const socialIconBg = useColorModeValue('gray.100', 'gray.800')
  const socialIconHoverBg = useColorModeValue('brand.500', 'brand.400')
  const socialIconColor = useColorModeValue('gray.600', 'gray.400')
  const socialIconHoverColor = useColorModeValue('white', 'white')

  return (
    <Box as="footer" role="contentinfo">
      {/* Main Footer Content */}
      <Box bg={bgColor} borderTop="1px" borderColor={borderColor}>
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacing={{ base: 8, md: 12 }}
          >
            {/* Logo and Tagline Column */}
            <VStack align="start" spacing={4}>
              <Logo />
              <Text
                fontSize="sm"
                color={linkColor}
                maxW="250px"
                lineHeight="tall"
              >
                Pioneering the Future of Medical Technology through innovation,
                precision, and excellence.
              </Text>

              {/* Social Media Icons */}
              <HStack spacing={3} pt={2}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    icon={<Icon as={social.icon} boxSize={5} />}
                    variant="ghost"
                    size="md"
                    bg={socialIconBg}
                    color={socialIconColor}
                    _hover={{
                      bg: socialIconHoverBg,
                      color: socialIconHoverColor,
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                    rounded="md"
                  />
                ))}
              </HStack>
            </VStack>

            {/* Dynamic Footer Sections */}
            {footerSections.map((section) => (
              <VStack key={section.title} align="start" spacing={4}>
                <Heading
                  as="h3"
                  fontSize="sm"
                  fontWeight="700"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  color={headingColor}
                >
                  {section.title}
                </Heading>
                <Stack spacing={3}>
                  {section.links.map((link) => {
                    const isExternal = link.isExternal || link.href.startsWith('http')
                    
                    if (isExternal) {
                      return (
                        <ChakraLink
                          key={link.label}
                          href={link.href}
                          isExternal={link.href.startsWith('http')}
                          fontSize="sm"
                          color={linkColor}
                          _hover={{
                            color: linkHoverColor,
                            textDecoration: 'none',
                            transform: 'translateX(2px)',
                          }}
                          transition="all 0.2s"
                        >
                          {link.label}
                        </ChakraLink>
                      )
                    }

                    return (
                      <ChakraLink
                        key={link.label}
                        as={Link}
                        href={link.href}
                        fontSize="sm"
                        color={linkColor}
                        _hover={{
                          color: linkHoverColor,
                          textDecoration: 'none',
                          transform: 'translateX(2px)',
                        }}
                        transition="all 0.2s"
                      >
                        {link.label}
                      </ChakraLink>
                    )
                  })}
                </Stack>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Copyright Bar */}
      <Box bg={copyrightBg} borderTop="1px" borderColor={borderColor}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            py={6}
            spacing={4}
          >
            <Text fontSize="sm" color={copyrightColor} textAlign="center">
              © {currentYear} Vogt MedTech. Pioneering the Future of Medical
              Technology.
            </Text>
            <HStack spacing={6}>
              <ChakraLink
                href="/privacy"
                fontSize="sm"
                color={copyrightColor}
                _hover={{ color: linkHoverColor }}
                transition="color 0.2s"
              >
                Privacy Policy
              </ChakraLink>
              <ChakraLink
                href="/terms"
                fontSize="sm"
                color={copyrightColor}
                _hover={{ color: linkHoverColor }}
                transition="color 0.2s"
              >
                Terms of Service
              </ChakraLink>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
