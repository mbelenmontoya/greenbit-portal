import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Box, SimpleGrid } from "@chakra-ui/react";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import BlogFilter from "@/components/BlogFilter";
import NewsletterBox from "@/components/NewsletterBox";

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
    <Box>
      <Hero
        label="Blog"
        title="News & Updates"
        description="A collection of missives and messages, along with nerd talk and company carryings-on."
      />
      <BlogFilter />
      <Box as="section" py={16} px={4} maxW="7xl" mx="auto">
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Box>
      <NewsletterBox />
    </Box>
  );
}
