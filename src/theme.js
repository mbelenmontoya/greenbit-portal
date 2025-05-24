'use client'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    // Add your custom colors here
    brand: {
      50: '#ECF9E0',   // Very Light Green
      100: '#C4E538',  // Light Green
      200: '#7AC943',  // Medium Green
      300: '#3A5F3A',  // Olive Green
      400: '#0A3D3F',  // Dark Green
    },
    accent: {
      500: '#FFC300',  // Gold
    },
    neutral: {
      white: '#FAFAFA',      // Soft White
      black: '#18181B',      // Soft Black
      grayLight: '#F3F4F6',  // Light Grey
      grayDark: '#6B7280',   // Dark Grey
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'neutral.white',
        color: 'brand.400',
      },
    },
  },
})

export default theme 