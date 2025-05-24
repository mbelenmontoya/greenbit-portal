import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Hero({
  label,
  title,
  description,
  children,
  bgGradient
}) {
  return (
    <Box
      as="section"
      w="full"
      pt={40}
      pb={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      bgGradient={bgGradient || "linear(to-br, neutral.white, brand.50)"}
      position="relative"
      overflow="hidden"
    >
      {/* Top left abstract shape */}
      <Box
        position="absolute"
        top={{ base: -12, md: -20 }}
        left={{ base: -12, md: -20 }}
        w={{ base: 40, md: 64 }}
        h={{ base: 40, md: 64 }}
        bg="brand.100"
        opacity={0.5}
        borderRadius="40% 60% 70% 30% / 30% 40% 60% 70%"
        zIndex={0}
      />
      {/* Bottom right abstract shape */}
      <Box
        position="absolute"
        bottom={{ base: -10, md: -16 }}
        right={{ base: -10, md: -16 }}
        w={{ base: 32, md: 56 }}
        h={{ base: 32, md: 56 }}
        bg="accent.500"
        opacity={0.3}
        borderRadius="60% 40% 30% 70% / 70% 60% 40% 30%"
        zIndex={0}
      />
      <Flex
        direction="column"
        align={{ base: "flex-start", md: "flex-start" }}
        maxW="3xl"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        {label && (
          <Text fontSize="lg" color="brand.200" fontWeight="semibold" mb={2}>
            {label} –
          </Text>
        )}
        <Heading
          as="h1"
          size="2xl"
          fontWeight="extrabold"
          color="brand.400"
          mb={4}
          lineHeight="1.1"
        >
          {title}
        </Heading>
        <Text fontSize="xl" color="neutral.grayDark" mb={6}>
          {description}
        </Text>
        {children}
      </Flex>
    </Box>
  );
} 