'use client'

import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import NextLink from 'next/link'
import * as React from 'react'

import { menuItems, authMenuItems } from '#data/menu'
import { DesktopMenu } from './desktop-menu'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'
import ThemeToggle from './theme-toggle'

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  React.useEffect(() => {
    return scrollY.on('change', () => setY(scrollY.get()))
  }, [scrollY])

  const bg = useColorModeValue('whiteAlpha.900', 'rgba(23, 25, 35, 0.95)')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(10px)"
      zIndex="sticky"
      borderColor={borderColor}
      transitionProperty="common"
      transitionDuration="normal"
      bg={y > height ? bg : ''}
      boxShadow={y > height ? 'lg' : ''}
      borderBottomWidth={y > height ? '1px' : ''}
      {...props}
    >
      <Container maxW="container.2xl" px={{ base: 4, md: 8 }} py={4}>
        <Flex width="full" align="center" justify="space-between">
          {/* Logo */}
          <Logo
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
          />

          {/* Desktop Navigation */}
          <DesktopMenu items={menuItems} />

          {/* Right side actions */}
          <HStack spacing={2}>
            <ThemeToggle />
            
            {/* Desktop Auth Buttons */}
            <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
              {authMenuItems.map((item, index) => (
                <Button
                  key={index}
                  as={NextLink}
                  href={item.href || '#'}
                  size="sm"
                  colorScheme={item.variant === 'primary' ? 'brand' : undefined}
                  variant={item.variant === 'primary' ? 'solid' : 'ghost'}
                  leftIcon={item.icon ? <Icon as={item.icon} /> : undefined}
                >
                  {item.label}
                </Button>
              ))}
            </HStack>

            {/* Mobile Menu */}
            <MobileMenu items={menuItems} authItems={authMenuItems} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

