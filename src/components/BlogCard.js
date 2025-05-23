"use client";
import NextLink from "next/link";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

export default function BlogCard({ post }) {
  const { title, excerpt, slug, coverImageURL, date } = post;

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      bg="white"
      _hover={{ shadow: "md" }}
    >
      {coverImageURL && (
        <Image
          src={coverImageURL}
          alt={title}
          w="100%"
          h="150px"
          objectFit="cover"
        />
      )}
      <VStack align="start" spacing={2} p={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {new Date(date).toLocaleDateString()}
        </Text>
        <Text fontSize="sm">{excerpt}</Text>
        <Button
          as={NextLink}
          href={`/blog/${slug}`}
          size="sm"
          colorScheme="blue"
          mt={2}
        >
          Read More
        </Button>
      </VStack>
    </Box>
  );
}
