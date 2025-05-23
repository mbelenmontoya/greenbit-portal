// src/app/providers.js
import { ChakraProvider } from "@chakra-ui/react"

export default function Providers({ children }) {
  return (
    <ChakraProvider>
        {children}
    </ChakraProvider>
  )
}
