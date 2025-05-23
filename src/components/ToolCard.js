
import { Box, Image, Heading, Text, Button, VStack } from "@chakra-ui/react";

export default function ToolCard({ name, description, iconURL, launchURL }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      _hover={{ shadow: "md" }}
      bg="white"
    >
      {iconURL && (
        <Image src={iconURL} alt={`${name} icon`} boxSize="64px" mx="auto" mt={4} />
      )}
      <VStack spacing={2} p={4} align="start">
        <Heading as="h3" size="md">
          {name}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <Button
          as="a"
          href={launchURL}
          target="_blank"
          rel="noopener"
          size="sm"
          colorScheme="blue"
          mt={2}
        >
          Launch
        </Button>
      </VStack>
    </Box>
  );
}
