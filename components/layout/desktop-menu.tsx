'use client'

import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { MenuItem as MenuItemType } from '#data/menu'

interface DesktopMenuProps {
  items: MenuItemType[]
}

const MenuItemWithHover: React.FC<{ item: MenuItemType; index: number; menuBg: string; menuBorder: string; hoverBg: string; descriptionColor: string; iconColor: string }> = ({ item, index, menuBg, menuBorder, hoverBg, descriptionColor, iconColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Menu key={index} isLazy isOpen={isOpen}>
      <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuButton
          as={Button}
          variant="ghost"
          rightIcon={<Icon as={FiChevronDown} />}
          fontSize="md"
          fontWeight="600"
          px={3}
          py={2}
          h="auto"
          color={useColorModeValue('gray.700', 'gray.200')}
          _hover={{
            bg: hoverBg,
            color: 'brand.500',
          }}
          _active={{
            bg: hoverBg,
          }}
          _expanded={{
            bg: hoverBg,
            color: 'brand.500',
          }}
          transition="all 0.2s"
        >
          {item.label}
        </MenuButton>
        <MenuList
          bg={menuBg}
          borderColor={menuBorder}
          boxShadow="xl"
          p={2}
          minW="300px"
          zIndex={100}
          border="1px"
          rounded="lg"
          motionProps={{
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            transition: { duration: 0.2 },
          }}
        >
          {item.children?.map((child, childIndex) => (
            <MenuItem
              key={childIndex}
              as={NextLink}
              href={child.href}
              rounded="md"
              p={3}
              _hover={{
                bg: hoverBg,
                transform: 'translateX(4px)',
              }}
              transition="all 0.2s"
            >
              <HStack spacing={3} align="start" w="full">
                {child.icon && (
                  <Icon
                    as={child.icon}
                    boxSize={5}
                    color={iconColor}
                    mt={0.5}
                  />
                )}
                <VStack align="start" spacing={0} flex={1}>
                  <Text fontWeight="600" fontSize="sm">
                    {child.label}
                  </Text>
                  {child.description && (
                    <Text
                      fontSize="xs"
                      color={descriptionColor}
                      lineHeight="short"
                    >
                      {child.description}
                    </Text>
                  )}
                </VStack>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Box>
    </Menu>
  )
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ items }) => {
  const menuBg = useColorModeValue('white', 'gray.800')
  const menuBorder = useColorModeValue('gray.200', 'gray.700')
  const hoverBg = useColorModeValue('brand.50', 'brand.900')
  const descriptionColor = useColorModeValue('gray.600', 'gray.400')
  const iconColor = useColorModeValue('brand.500', 'brand.300')

  return (
    <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
      {items.map((item, index) => {
        // Simple link (no children)
        if (!item.children || item.children.length === 0) {
          return (
            <Link
              key={index}
              as={NextLink}
              href={item.href || '#'}
              px={3}
              py={2}
              rounded="md"
              fontSize="md"
              fontWeight="600"
              color={useColorModeValue('gray.700', 'gray.200')}
              _hover={{
                textDecoration: 'none',
                bg: hoverBg,
                color: 'brand.500',
              }}
              transition="all 0.2s"
            >
              {item.label}
            </Link>
          )
        }

        // Dropdown menu (has children)
        return (
          <MenuItemWithHover
            key={index}
            item={item}
            index={index}
            menuBg={menuBg}
            menuBorder={menuBorder}
            hoverBg={hoverBg}
            descriptionColor={descriptionColor}
            iconColor={iconColor}
          />
        )
      })}
    </HStack>
  )
}
