import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors: {
      brand: {
        50: '#E6F2FF',
        100: '#B3D9FF',
        200: '#80C1FF',
        300: '#4DA8FF',
        400: '#1A90FF',
        500: '#007BFF', // Primary Blue
        600: '#0062CC',
        700: '#004A99',
        800: '#003166',
        900: '#001933',
      },
      accent: {
        50: '#E6FAF7',
        100: '#B3F0E6',
        200: '#80E6D6',
        300: '#4DDCC5',
        400: '#1AD2B5',
        500: '#00C2A8', // Innovation Teal
        600: '#009B86',
        700: '#007465',
        800: '#004D43',
        900: '#002622',
      },
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
        '*': {
          transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out',
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)
