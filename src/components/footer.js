"use client"
import { Box, Flex, Text, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const links = [
  {
    heading: "Helpful Links",
    items: ["Docs", "Blog", "Tools", "Contact", "Support"],
  },
  {
    heading: "About",
    items: ["Our Story", "Team", "Careers", "Press"],
  },
  {
    heading: "Legal",
    items: ["Terms", "Privacy", "Cookies"],
  },
];

export default function Footer() {
  return (
    <Box bg="brand.400" color="white" pt={16} pb={8} px={4}>
      <Flex
        maxW="7xl"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        gap={12}
        justify="space-between"
        align={{ base: "flex-start", md: "flex-start" }}
      >
        {/* Company Info */}
        <Box flex={1} mb={{ base: 10, md: 0 }}>
          <Text fontWeight="bold" fontSize="2xl" color="neutral.white" letterSpacing="wide" mb={2}>
            Greenbit
          </Text>
          <Text color="whiteAlpha.800" mb={4} maxW="xs">
            Greenbit is your partner for IT solutions, financial advice, and trading tools.
          </Text>
          <HStack spacing={4} mt={2}>
            <Link href="#" isExternal aria-label="X / Twitter">
              <Icon as={FaXTwitter} boxSize={5} color="whiteAlpha.900" _hover={{ color: 'accent.500' }} />
            </Link>
            <Link href="#" isExternal aria-label="Facebook">
              <Icon as={FaFacebookF} boxSize={5} color="whiteAlpha.900" _hover={{ color: 'accent.500' }} />
            </Link>
            <Link href="#" isExternal aria-label="LinkedIn">
              <Icon as={FaLinkedinIn} boxSize={5} color="whiteAlpha.900" _hover={{ color: 'accent.500' }} />
            </Link>
          </HStack>
        </Box>
        {/* Links */}
        <Flex flex={2} gap={12} wrap="wrap" justify={{ base: "flex-start", md: "flex-end" }}>
          {links.map((col) => (
            <VStack align="flex-start" key={col.heading} minW="120px" spacing={2} mb={{ base: 6, md: 0 }}>
              <Text fontWeight="bold" mb={1} color="neutral.white">{col.heading}</Text>
              {col.items.map((item) => (
                <Link key={item} href="#" color="whiteAlpha.800" _hover={{ color: "accent.500" }} fontSize="md">
                  {item}
                </Link>
              ))}
            </VStack>
          ))}
        </Flex>
      </Flex>
      <Flex maxW="7xl" mx="auto" mt={12} pt={8} borderTop="1px solid" borderColor="whiteAlpha.300" direction={{ base: "column", md: "row" }} justify="space-between" align="center" fontSize="sm" color="whiteAlpha.700">
        <Text mb={{ base: 2, md: 0 }}>© {new Date().getFullYear()} Greenbit. All rights reserved.</Text>
        <HStack spacing={8}>
          <Link href="#">Contact Us</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
        </HStack>
      </Flex>
    </Box>
  );
}