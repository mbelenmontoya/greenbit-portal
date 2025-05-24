import { db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export default async function PostPage({ params }) {
  const { slug } = params;
  const docRef = doc(db, "posts", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <Box p={8}>Post not found.</Box>;
  }

  const post = docSnap.data();
  const postUrl = `https://YOUR_DOMAIN/blog/${slug}`;
  const shareText = encodeURIComponent(post.title);

  return (
    <Box
      maxW="6xl"
      mx="auto"
      py={24}
      px={4}
      textAlign="center"
      position="relative"
    >
      {/* Optional: Abstract background shapes */}
      <Box position="absolute" top={0} left={0} w="180px" h="180px" bg="blue.100" borderRadius="40%" opacity={0.5} zIndex={0} />
      <Box position="absolute" bottom={0} right={0} w="180px" h="180px" bg="orange.100" borderRadius="40%" opacity={0.5} zIndex={0} />

      <Text color="gray.400" fontWeight="medium" fontSize="xl" mb={2} zIndex={1} position="relative">
        Blog –
      </Text>
      <Heading
        as="h1"
        size="2xl"
        fontWeight="extrabold"
        mb={4}
        lineHeight="1.1"
        zIndex={1}
        position="relative"
      >
        {post.title}
      </Heading>
      <HStack justify="center" spacing={2} color="gray.600" fontSize="lg" mb={8} zIndex={1} position="relative">
        <Text>
          By {post.author || 'the Gravity Forms community'}
        </Text>
        <Box as="span" mx={1}>&bull;</Box>
        <Text>
          Published {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>
      </HStack>

      {/* COVER IMAGE */}
      {post.coverImageURL && (
        <Box display="flex" justifyContent="center" mb={10}>
          <Image
            src={post.coverImageURL}
            alt={post.title}
            borderRadius="lg"
            maxH="400px"
            maxW="100%"
            objectFit="cover"
            boxShadow="lg"
            bg="white"
          />
        </Box>
      )}

      {/* INTRO PARAGRAPH */}
      {(() => {
        // Extract first paragraph from contentHTML
        const match = post.contentHTML.match(/<p>(.*?)<\/p>/i);
        if (match) {
          return (
            <Text fontSize="xl" color="gray.700" mb={8} maxW="3xl" mx="auto" fontWeight="medium">
              {match[1].replace(/<[^>]+>/g, '')}
            </Text>
          );
        }
        return null;
      })()}

      {/* FULL CONTENT (without first paragraph) */}
      <Box
        className="prose"
        mb={8}
        maxW="3xl"
        mx="auto"
        dangerouslySetInnerHTML={{
          __html: post.contentHTML.replace(/<p>(.*?)<\/p>/i, '')
        }}
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
