"use client";
import NextLink from "next/link";
import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export default function BlogCard({ post }) {
  const { title, excerpt, slug, coverImageURL, date, author } = post;

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
      {coverImageURL && (
        <Image
          src={coverImageURL}
          alt={title}
          w="100%"
          h="200px"
          objectFit="cover"
        />
      )}
      <VStack align="start" spacing={3} p={6} flex={1}>
        <Heading as="h3" size="lg" color="brand.400" fontWeight="bold" noOfLines={2}>
          {title}
        </Heading>
        <Text color="neutral.grayDark" fontWeight="bold" fontSize="md" mb={1}>
          By {author || "Greenbit Team"}
        </Text>
        <Text color="neutral.grayDark" fontSize="md" noOfLines={3}>
          {excerpt}
        </Text>
        <Box flex={1} />
        <Link
          as={NextLink}
          href={`/blog/${slug}`}
          fontWeight="bold"
          color="brand.400"
          fontSize="md"
          mt={2}
          display="inline-flex"
          alignItems="center"
          _hover={{ textDecoration: "none", color: "accent.500" }}
        >
          <Box borderBottom="2px solid" borderColor="accent.500" pb={0.5} mr={2}>
            Read more
          </Box>
          <Icon as={FiArrowRight} color="accent.500" boxSize={5} />
        </Link>
      </VStack>
    </Box>
  );
}
