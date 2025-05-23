// src/app/tools/page.js
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import ToolCard from "@/components/ToolCard";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";

export default async function ToolsPage() {
  let tools = [];
  try {
    const snap = await getDocs(collection(db, "tools"));
    tools = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("❌ Failed to fetch tools:", e);
  }

  return (
    <Box as="section" py={16} px={4}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Our Tools
      </Heading>
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
  );
}
