// src/app/page.js
"use client";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import CorporateSection from "../components/CorporateSection";

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box as="section" bg="white" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Greenbit
        </Heading>
        <Text fontSize="xl" mb={6}>
          IT solutions, financial advice, and trading tools—all in one place.
        </Text>
        <Button
          colorScheme="blue"
          size="lg"
          as="a"
          href="#corporate"
        >
          Learn More
        </Button>
      </Box>

      {/* Corporate “Home” Section */}
      <CorporateSection />
    </Box>
  );
}
