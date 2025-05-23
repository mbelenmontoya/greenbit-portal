import { db } from "@/lib/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export async function generateStaticParams() {
  // Fetch all post IDs (which you’ve set equal to your slugs)
  const snap = await getDocs(collection(db, "posts"))
  const slugs = snap.docs.map((doc) => doc.id)

  // Return an array of { slug } objects
  return slugs.map((slug) => ({ slug }))
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const docRef = doc(db, "posts", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <Box p={8}>Post not found.</Box>;
  }

  const post = docSnap.data();
  const postUrl = `https://YOUR_DOMAIN/blog/${slug}`;
  const shareText = encodeURIComponent(post.title);

  return (
    <Box maxW="6xl" mx="auto" py={12} px={4}>
      {post.coverImageURL && (
        <Image
          src={post.coverImageURL}
          alt={post.title}
          w="100%"
          h="300px"
          objectFit="cover"
          mb={6}
        />
      )}
      <Heading as="h1" size="2xl" mb={2}>
        {post.title}
      </Heading>
      <Text color="gray.500" mb={6}>
        {new Date(post.date).toLocaleDateString()}
      </Text>

      <Box
        className="prose"
        mb={8}
        dangerouslySetInnerHTML={{ __html: post.contentHTML }}
      />

      <HStack spacing={4}>
        <Link
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(
            postUrl
          )}`}
          isExternal
        >
          <FaTwitter size="1.2em" /> Twitter
        </Link>
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            postUrl
          )}`}
          isExternal
        >
          <FaLinkedin size="1.2em" /> LinkedIn
        </Link>
      </HStack>
    </Box>
  );
}
