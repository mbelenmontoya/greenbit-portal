import { Box, Flex, Link as ChakraLink, Button, Spacer, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box as="nav" px={6} py={4} bg="neutral.white" boxShadow="sm" position="fixed" top={0} left={0} w="100%" zIndex={1000}>
      <Flex maxW="6xl" mx="auto" align="center">
        <Text fontWeight="bold" fontSize="xl" color="brand.400" letterSpacing="wide">
          Greenbit
        </Text>
        <Spacer />
        <Flex gap={6} align="center">
          <ChakraLink href="/" color="neutral.grayDark" fontWeight="medium" _hover={{ color: "brand.200" }}>Home</ChakraLink>
          <ChakraLink href="/#section01" color="neutral.grayDark" fontWeight="medium" _hover={{ color: "brand.200" }}>section01</ChakraLink>
          <ChakraLink href="/#section02" color="neutral.grayDark" fontWeight="medium" _hover={{ color: "brand.200" }}>section02</ChakraLink>
          <ChakraLink href="/#section03" color="neutral.grayDark" fontWeight="medium" _hover={{ color: "brand.200" }}>section03</ChakraLink>
          <ChakraLink href="/blog" color="neutral.grayDark" fontWeight="medium" _hover={{ color: "brand.200" }}>Financial Blog</ChakraLink>
          <ChakraLink href="/tools" color="neutral.grayDark" fontWeight="medium" _hover={{ color: "brand.200" }}>Custom Tools</ChakraLink>
          <Button
            as={ChakraLink}
            href="/contact"
            bg="accent.500"
            color="neutral.black"
            fontWeight="bold"
            borderRadius="md"
            px={6}
            py={2}
            _hover={{ bg: "brand.200", color: "neutral.white" }}
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
