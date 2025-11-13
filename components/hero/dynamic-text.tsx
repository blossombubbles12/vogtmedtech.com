'use client'

import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface DynamicTextProps {
  words: string[]
  fontSize?: any
  color?: string
  fontWeight?: string | number
  interval?: number
}

export const DynamicText: React.FC<DynamicTextProps> = ({
  words,
  fontSize = { base: '3xl', sm: '4xl', md: '6xl', lg: '7xl' },
  color = 'brand.400',
  fontWeight = 'bold',
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <Box position="relative" display="inline-block" minH={{ base: '1.2em', md: '1.4em' }}>
      <AnimatePresence mode="wait">
        <Box
          key={currentIndex}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' } as any}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          display="inline-block"
        >
          {words[currentIndex]}
        </Box>
      </AnimatePresence>
    </Box>
  )
}
