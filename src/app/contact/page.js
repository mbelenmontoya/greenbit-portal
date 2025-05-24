"use client";
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <Box maxW="2xl" mx="auto" py={16} px={4}>
      <Heading as="h1" size="xl" mb={8} color="brand.400">
        Contact Us
      </Heading>
      <form>
        <FormControl mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="you@example.com" />
        </FormControl>
        <FormControl mb={6} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="How can we help you?" rows={5} />
        </FormControl>
        <Button type="submit" colorScheme="yellow" bg="accent.500" color="neutral.black" _hover={{ bg: "brand.200", color: "neutral.white" }}>
          Send Message
        </Button>
      </form>
    </Box>
  );
} 