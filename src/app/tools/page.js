// src/app/tools/page.js
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import ToolCard from "@/components/ToolCard";
import { SimpleGrid, Box, Input, Select, Flex, Text } from "@chakra-ui/react";
import Hero from "@/components/Hero";

export default async function ToolsPage() {
  let tools = [];
  try {
    const snap = await getDocs(collection(db, "tools"));
    tools = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("❌ Failed to fetch tools:", e);
  }

  return (
    <Box>
      <Hero
        label="Tools"
        title="Custom Tools for Finance & IT"
        description="Explore our suite of custom tools designed to empower your financial and IT decisions."
      />
      {/* Search and Filter Row */}
      <Flex maxW="7xl" mx="auto" mt={8} mb={4} px={4} align="center" gap={6} wrap="wrap" justify="space-between">
        <Flex align="center" gap={2} flex={1} minW="260px">
          <Text color="neutral.grayDark" fontWeight="medium">Search</Text>
          <Input
            placeholder="Enter your search term."
            maxW="320px"
            bg="neutral.white"
            borderColor="neutral.grayLight"
            fontWeight="bold"
            fontSize="lg"
            _placeholder={{ color: "neutral.grayDark", fontWeight: "bold" }}
          />
        </Flex>
        <Flex align="center" gap={2}>
          <Text color="neutral.grayDark" fontWeight="medium">Sort by</Text>
          <Select
            maxW="180px"
            bg="neutral.white"
            borderColor="neutral.grayLight"
            fontWeight="bold"
            fontSize="md"
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </Select>
        </Flex>
      </Flex>
      <Box as="section" py={16} px={4} maxW="7xl" mx="auto">
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {tools.map((t) => (
            <ToolCard
              key={t.id}
              name={t.name}
              description={t.description}
              iconURL={t.iconURL}
              launchURL={t.launchURL}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
