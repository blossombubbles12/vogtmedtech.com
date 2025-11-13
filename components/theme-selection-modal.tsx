'use client'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  VStack,
  Button,
  Text,
  Box,
  Icon,
  useColorMode,
  Flex,
  Heading,
} from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const THEME_SELECTED_KEY = 'vogtmedtech-theme-selected'

export function ThemeSelectionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { setColorMode } = useColorMode()

  useEffect(() => {
    // Check if user has already selected a theme
    const hasSelectedTheme = localStorage.getItem(THEME_SELECTED_KEY)
    
    if (!hasSelectedTheme) {
      // Small delay to ensure smooth appearance after page load
      setTimeout(() => {
        setIsOpen(true)
      }, 800)
    }
  }, [])

  const handleThemeSelection = (mode: 'light' | 'dark') => {
    setColorMode(mode)
    localStorage.setItem(THEME_SELECTED_KEY, 'true')
    setIsOpen(false)
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={() => {}} 
      isCentered
      closeOnOverlayClick={false}
      closeOnEsc={false}
      size="lg"
    >
      <ModalOverlay 
        bg="blackAlpha.700" 
        backdropFilter="blur(10px)"
      />
      <ModalContent
        mx={4}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
      >
        <Box
          bgGradient="linear(to-br, brand.600, accent.500)"
          p={8}
          textAlign="center"
        >
          <Heading 
            size="lg" 
            color="white" 
            fontWeight="800"
            letterSpacing="tight"
          >
            Welcome to VogtMedTech
          </Heading>
          <Text 
            color="whiteAlpha.900" 
            mt={2}
            fontSize="md"
          >
            Pioneering Healthcare Innovation
          </Text>
        </Box>

        <ModalBody p={8}>
          <VStack spacing={6}>
            <Text 
              textAlign="center" 
              fontSize="lg"
              fontWeight="500"
              color="gray.600"
              _dark={{ color: 'gray.300' }}
            >
              Choose your preferred viewing experience
            </Text>

            <Flex gap={4} w="full" direction={{ base: 'column', sm: 'row' }}>
              {/* Light Mode Button */}
              <Button
                onClick={() => handleThemeSelection('light')}
                size="lg"
                h="auto"
                py={8}
                px={6}
                flex={1}
                borderRadius="xl"
                bg="white"
                border="2px"
                borderColor="gray.200"
                _hover={{
                  borderColor: 'brand.500',
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <VStack spacing={3}>
                  <Box
                    p={4}
                    bg="orange.50"
                    borderRadius="xl"
                  >
                    <Icon 
                      as={FiSun} 
                      boxSize={8} 
                      color="orange.500"
                    />
                  </Box>
                  <Text 
                    fontSize="xl" 
                    fontWeight="700"
                    color="gray.800"
                  >
                    Light Mode
                  </Text>
                  <Text 
                    fontSize="sm" 
                    color="gray.600"
                    textAlign="center"
                  >
                    Bright and clear interface
                  </Text>
                </VStack>
              </Button>

              {/* Dark Mode Button */}
              <Button
                onClick={() => handleThemeSelection('dark')}
                size="lg"
                h="auto"
                py={8}
                px={6}
                flex={1}
                borderRadius="xl"
                bg="gray.800"
                border="2px"
                borderColor="gray.700"
                _hover={{
                  borderColor: 'accent.500',
                  transform: 'translateY(-4px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <VStack spacing={3}>
                  <Box
                    p={4}
                    bg="blue.900"
                    borderRadius="xl"
                  >
                    <Icon 
                      as={FiMoon} 
                      boxSize={8} 
                      color="blue.300"
                    />
                  </Box>
                  <Text 
                    fontSize="xl" 
                    fontWeight="700"
                    color="white"
                  >
                    Dark Mode
                  </Text>
                  <Text 
                    fontSize="sm" 
                    color="gray.300"
                    textAlign="center"
                  >
                    Easy on the eyes
                  </Text>
                </VStack>
              </Button>
            </Flex>

            <Text 
              fontSize="xs" 
              color="gray.500"
              _dark={{ color: 'gray.500' }}
              textAlign="center"
              mt={2}
            >
              You can change this anytime in settings
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
