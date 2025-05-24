import { Box, Image, Heading, Text, Tag, VStack, HStack } from "@chakra-ui/react";

// For now, tags and plans are dummies. Replace with real data as needed.
const dummyTags = ["CRM"];
const dummyPlans = ["Basic", "Elite", "Nonprofit", "Pro"];

export default function ToolCard({ name, description, iconURL, launchURL }) {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="neutral.white"
      boxShadow="sm"
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "lg" }}
      display="flex"
      flexDirection="column"
      h="100%"
    >
      {/* Top section with icon/logo */}
      <Box bg="neutral.grayLight" w="full" h="80px" display="flex" alignItems="center" justifyContent="center">
        {iconURL && (
          <Image src={iconURL} alt={`${name} icon`} maxH="48px" maxW="120px" objectFit="contain" />
        )}
      </Box>
      <VStack align="start" spacing={3} p={6} flex={1}>
        <Heading as="h3" size="md" color="brand.400" fontWeight="bold" noOfLines={2}>
          {name}
        </Heading>
        <Text color="neutral.grayDark" fontSize="md" noOfLines={3}>
          {description}
        </Text>
        <HStack spacing={2} mt={2}>
          {dummyTags.map((tag) => (
            <Tag key={tag} bg="neutral.grayLight" color="neutral.grayDark" fontWeight="medium" borderRadius="md" px={3} py={1} fontSize="sm">
              {tag}
            </Tag>
          ))}
        </HStack>
        <Box flex={1} />
      </VStack>
      {/* Bottom bar for included plans */}
      <Box bg="brand.400" color="neutral.white" px={6} py={3} fontWeight="medium" fontSize="sm">
        Included with: {dummyPlans.join(", ")}
      </Box>
    </Box>
  );
}
