import { Box, Flex, Text, Button } from "@chakra-ui/react";

const categories = [
  "All",
  "Accessibility",
  "Blog",
  "Case Studies",
  "Featured Add-Ons",
  "Gravity Flow",
  "Gravity SMTP",
  "INPUT",
  "News & Updates",
  "Nonprofit",
  "Online Payments",
  "Starter Guides",
  "Technical",
  "Tutorials",
];

export default function BlogFilter() {
  return (
    <Box w="full" maxW="4xl" mx="auto" py={8} px={2}>
      <Flex align="center" gap={4} flexWrap="wrap" justify="center">
        <Text fontWeight="semibold" color="neutral.grayDark" mr={2} minW="90px">
          Categories
        </Text>
        <Flex gap={2} flexWrap="wrap" justify="center" width="100%">
          {categories.map((cat, idx) => (
            <Button
              key={cat}
              size="sm"
              px={5}
              py={2}
              borderRadius="md"
              fontWeight="medium"
              bg={idx === 0 ? "brand.50" : "neutral.grayLight"}
              color={idx === 0 ? "brand.400" : "neutral.grayDark"}
              boxShadow={idx === 0 ? "md" : "none"}
              _hover={{ bg: idx === 0 ? "brand.100" : "neutral.grayDark", color: idx === 0 ? "brand.400" : "neutral.white" }}
              cursor="pointer"
              border={idx === 0 ? "2px solid" : "none"}
              borderColor={idx === 0 ? "brand.200" : "transparent"}
              transition="all 0.2s"
            >
              {cat}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
} 