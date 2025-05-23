import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import BlogCard from "@/components/BlogCard";

export default async function BlogListPage() {
  let posts = [];
  try {
    const q = query(
      collection(db, "posts"),
      orderBy("date", "desc")
    );
    const snap = await getDocs(q);
    posts = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Failed to fetch posts:", e);
  }

  return (
    <Box as="section" py={16} px={4}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Blog & News
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
