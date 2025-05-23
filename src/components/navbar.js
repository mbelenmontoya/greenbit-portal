import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box as="nav" bg="blue.600" color="white" px={6} py={4}>
      <Flex maxW="6xl" mx="auto" align="center">
        <ChakraLink fontWeight="bold" fontSize="xl" href="/">
        Greenbit
        </ChakraLink>
        <Flex ml="auto" gap={6}>
          <ChakraLink href="/blog">Blog</ChakraLink>
          <ChakraLink href="/tools">Tools</ChakraLink>
          <ChakraLink href="/admin">Admin</ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
