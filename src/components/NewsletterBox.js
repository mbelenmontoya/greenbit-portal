import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function NewsletterBox() {
  return (
    <Box
      maxW="5xl"
      mx="auto"
      mt={20}
      mb={12}
      borderRadius="2xl"
      bg="brand.400"
      color="white"
      px={{ base: 6, md: 16 }}
      py={{ base: 10, md: 16 }}
      boxShadow="xl"
      position="relative"
      overflow="hidden"
    >
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={10}>
        <Box flex={1} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="2xl" fontWeight="extrabold" mb={6} lineHeight="1.1">
            We believe there's a better way to manage your data and forms.
          </Heading>
          <Text fontSize="lg" color="whiteAlpha.800">
            Stay in touch with us. We'll send you tips and tricks, news and updates, discounts and deals, plus we promise not to spam your inbox.
          </Text>
        </Box>
        <Box flex={1} maxW="md" w="full">
          <form>
            <FormControl mb={4} isRequired>
              <FormLabel color="white" fontWeight="bold">
                Email <Text as="span" fontWeight="normal" fontStyle="italic">(Required)</Text>
              </FormLabel>
              <Input
                type="email"
                placeholder="Your email address"
                bg="whiteAlpha.400"
                color="white"
                _placeholder={{ color: "whiteAlpha.800" }}
                borderRadius="md"
                border="none"
                fontWeight="medium"
                fontSize="lg"
                mb={2}
              />
            </FormControl>
            <Button
              type="submit"
              bg="neutral.white"
              color="brand.400"
              fontWeight="bold"
              size="lg"
              borderRadius="md"
              px={8}
              py={6}
              _hover={{ bg: "accent.500", color: "neutral.black" }}
              w="full"
            >
              Subscribe
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
} 