// 1️⃣ Import from the Admin SDK’s modular entrypoints:
import { initializeApp, cert, getApps } from "firebase-admin/app"
import {
  getFirestore as getAdminFirestore,
  collection,
  getDocs as getAdminDocs
} from "firebase-admin/firestore"

// 2️⃣ Initialize the Admin SDK *once* (on the server at build‐time)
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId:     process.env.FIREBASE_PROJECT_ID,
      clientEmail:   process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:    process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  })
}

const adminDb = getAdminFirestore()

export async function generateStaticParams() {
  const snap = await getAdminDocs(collection(adminDb, "posts"))
  const slugs = snap.docs.map((d) => d.id)
  return slugs.map((slug) => ({ slug }))
}


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
