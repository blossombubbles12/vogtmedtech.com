'use client'

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { MenuItem as MenuItemType } from '#data/menu'

interface MobileMenuProps {
  items: MenuItemType[]
  authItems?: MenuItemType[]
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ items, authItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const drawerBg = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const hoverBg = useColorModeValue('brand.50', 'brand.900')
  const iconColor = useColorModeValue('brand.500', 'brand.300')
  const descriptionColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <>
      {/* Hamburger Button */}
      <IconButton
        aria-label="Open menu"
        icon={<FiMenu />}
        variant="ghost"
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        fontSize="xl"
      />

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent bg={drawerBg}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor={borderColor}>
            Menu
          </DrawerHeader>

          <DrawerBody p={0}>
            <VStack spacing={0} align="stretch" py={4}>
              {/* Main menu items */}
              <Accordion allowMultiple>
                {items.map((item, index) => {
                  // Simple link (no children)
                  if (!item.children || item.children.length === 0) {
                    return (
                      <Box key={index} borderBottomWidth="1px" borderColor={borderColor}>
                        <Link
                          as={NextLink}
                          href={item.href || '#'}
                          display="flex"
                          alignItems="center"
                          px={6}
                          py={4}
                          _hover={{
                            textDecoration: 'none',
                            bg: hoverBg,
                          }}
                          onClick={onClose}
                        >
                          {item.icon && (
                            <Icon as={item.icon} mr={3} color={iconColor} />
                          )}
                          <Text fontWeight="medium">{item.label}</Text>
                        </Link>
                      </Box>
                    )
                  }

                  // Accordion item (has children)
                  return (
                    <AccordionItem key={index} border="none" borderBottomWidth="1px" borderColor={borderColor}>
                      <AccordionButton
                        px={6}
                        py={4}
                        _hover={{ bg: hoverBg }}
                        _expanded={{ bg: hoverBg, color: 'brand.500' }}
                      >
                        <HStack flex="1" textAlign="left" spacing={3}>
                          {item.icon && (
                            <Icon as={item.icon} color={iconColor} />
                          )}
                          <Text fontWeight="medium">{item.label}</Text>
                        </HStack>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={2} px={0}>
                        <VStack spacing={0} align="stretch">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              as={NextLink}
                              href={child.href}
                              display="block"
                              px={6}
                              py={3}
                              pl={item.icon ? 14 : 6}
                              _hover={{
                                textDecoration: 'none',
                                bg: hoverBg,
                              }}
                              onClick={onClose}
                            >
                              <HStack spacing={3} align="start">
                                {child.icon && (
                                  <Icon
                                    as={child.icon}
                                    boxSize={4}
                                    color={iconColor}
                                    mt={1}
                                  />
                                )}
                                <VStack align="start" spacing={0} flex={1}>
                                  <Text fontSize="sm" fontWeight="medium">
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
                            </Link>
                          ))}
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  )
                })}
              </Accordion>

              {/* Auth buttons */}
              {authItems && authItems.length > 0 && (
                <VStack spacing={3} px={6} pt={6} pb={4}>
                  {authItems.map((authItem, index) => (
                    <Button
                      key={index}
                      as={NextLink}
                      href={authItem.href || '#'}
                      w="full"
                      colorScheme={authItem.variant === 'primary' ? 'brand' : 'gray'}
                      variant={authItem.variant === 'primary' ? 'solid' : 'outline'}
                      leftIcon={authItem.icon ? <Icon as={authItem.icon} /> : undefined}
                      onClick={onClose}
                    >
                      {authItem.label}
                    </Button>
                  ))}
                </VStack>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
