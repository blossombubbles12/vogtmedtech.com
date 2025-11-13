import { IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      size="sm"
      variant="ghost"
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <FiMoon size="16" /> : <FiSun size="16" />}
      borderRadius="md"
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggle
