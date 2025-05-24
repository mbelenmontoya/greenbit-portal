// src/app/page.js
"use client";
import { Box, Heading, Text, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { FaRegEdit, FaCreditCard, FaProjectDiagram, FaRandom, FaLock, FaRegFileImage } from "react-icons/fa";
import Hero from "../components/Hero";
import { useState } from "react";
import NewsletterBox from "../components/NewsletterBox";

const features = [
  {
    icon: FaRegEdit,
    title: "Visual Form Editor",
    desc: "Quickly design and build your WordPress forms using the intuitive visual form editor. Select your fields, configure your options, and easily embed forms on your site.",
  },
  {
    icon: FaCreditCard,
    title: "Online Payment Collection",
    desc: "From registrations to subscriptions, donations to product sales, Greenbit lets you manage transactions with the same tool you use to create contact forms on your site.",
  },
  {
    icon: FaProjectDiagram,
    title: "Workflow Automation",
    desc: "Configure your form to show or hide fields, sections, pages, and buttons based on user selections. Easily set custom automated workflows for any form you create.",
  },
  {
    icon: FaRandom,
    title: "Conditional Logic",
    desc: "Make your forms more relevant to your audience by displaying or hiding fields, sections, or entire pages based on user inputs.",
  },
  {
    icon: FaLock,
    title: "Secure Data Collection",
    desc: "We put a virtual airlock in place when it comes to your data. Our state-of-the-art security measures keep your data safe and your mind at ease.",
  },
  {
    icon: FaRegFileImage,
    title: "File Uploads",
    desc: "Need to have your users submit documents, photos, or other attachments? Just add file upload fields to your form to save the files directly to your server.",
  },
];

const interactiveFeatures = [
  {
    title: "Drag & Drop Form Builder",
    desc: "Create and edit your forms with ease, using our drag and drop interface to select and organize your modules.",
    image: "/feature-dragdrop.jpg",
  },
  {
    title: "Column Layouts",
    desc: "Choose the number of columns you need, customize the width, and drag fields within the builder to add a new column.",
    image: "/feature-columns.jpg",
  },
  {
    title: "Build Accessible Forms",
    desc: "With Greenbit you have all the tools to create accessible forms that are WCAG 2.1AA compliant.",
    image: "/feature-accessible.jpg",
  },
];

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <Box>
      <Hero
        label="Welcome"
        title="Greenbit: IT & Financial Solutions"
        description="IT solutions, financial advice, and trading tools—all in one place."
        pt={{ base: 24, md: 28 }}
      >
        {/* You can add a button or other content here if needed */}
      </Hero>

      {/* Info Box 1: Trusted by... */}
      <Box maxW="5xl" mx="auto" mt={16} mb={12} textAlign="center">
        <Text color="neutral.grayDark" fontWeight="medium" mb={8} fontSize="lg">
          Trusted by the biggest brands in the galaxy
        </Text>
        <Flex justify="center" align="center" gap={{ base: 6, md: 12 }} wrap="wrap" mb={10}>
          {/* Dummy logos, replace with real ones as needed */}
          <Image src="/logos/espn.svg" alt="ESPN" h="40px" opacity={0.2} />
          <Image src="/logos/nike.svg" alt="Nike" h="40px" opacity={0.2} />
          <Image src="/logos/unicef.svg" alt="Unicef" h="40px" opacity={0.2} />
          <Image src="/logos/airbnb.svg" alt="Airbnb" h="40px" opacity={0.2} />
          <Image src="/logos/google.svg" alt="Google" h="40px" opacity={0.2} />
          <Image src="/logos/yale.svg" alt="Yale" h="40px" opacity={0.2} />
        </Flex>
        <Heading as="h2" size="xl" fontWeight="extrabold" color="brand.400" mb={4}>
          One giant leap for <Box as="span" borderBottom="6px solid" borderColor="brand.100" display="inline" px={1}>WordPress forms</Box>—<br />Greenbit helps you use your data for good.
        </Heading>
        <Text color="neutral.grayDark" fontSize="xl" mt={6}>
          Create custom web forms to capture leads, collect payments, automate your workflows, and build your business online.
        </Text>
      </Box>

      {/* Feature Grid */}
      <Box maxW="7xl" mx="auto" mb={20} px={4}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12}>
          {features.map((f) => (
            <Flex key={f.title} direction="column" align="center" textAlign="center" gap={4}>
              <Box color="brand.400" mb={2}>
                <f.icon size={48} />
              </Box>
              <Text fontWeight="bold" fontSize="xl" color="brand.400" mb={1}>{f.title}</Text>
              <Text color="neutral.grayDark" fontSize="md">{f.desc}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      {/* CTA with Video Section */}
      <Box w="full" bg="neutral.grayLight" pt={24} pb={0} position="relative" zIndex={0} overflow="hidden" id="section01">
        <Box maxW="3xl" mx="auto" textAlign="center" px={4}>
          <Heading as="h2" size="xl" fontWeight="extrabold" color="brand.400" mb={4}>
            All the tools you need to build professional forms online.
          </Heading>
          <Text color="neutral.grayDark" fontSize="lg" mb={8}>
            The only form management platform you will ever need. Packed with tons of time-saving tools and features.
          </Text>
          <Box as="button"
            bg="brand.400"
            color="neutral.white"
            fontWeight="bold"
            fontSize="lg"
            px={8}
            py={4}
            borderRadius="md"
            boxShadow="md"
            _hover={{ bg: "accent.500", color: "neutral.black" }}
            mb={12}
          >
            Get Started Now
          </Box>
        </Box>
        {/* Video/Image Section */}
        <Box maxW="6xl" mx="auto" mt={-8} pb={24} px={4}>
          <Box
            as="div"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl"
            bg="neutral.white"
            position="relative"
          >
            {/* Replace with your video embed or image as needed */}
            <Box as="img" src="/video-placeholder.jpg" alt="Demo Video" w="100%" h={{ base: "220px", md: "400px" }} objectFit="cover" />
            {/* Play button overlay */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="rgba(0,0,0,0.6)"
              borderRadius="full"
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="white" fillOpacity="0.8"/>
                <polygon points="22,18 40,28 22,38" fill="#0A3D3F" />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box as="section" id="section02" maxW="7xl" mx="auto" py={24} px={4}>
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={16}>
          {/* Left: Interactive menu */}
          <Box flex={1} mb={{ base: 12, md: 0 }}>
            <Heading as="h2" size="xl" fontWeight="extrabold" color="brand.400" mb={8}>
              Easy to make <Box as="span" borderBottom="6px solid" borderColor="brand.100" display="inline" px={1}>it shine.</Box>
            </Heading>
            <Box display="flex" flexDirection="column" gap={4}>
              {interactiveFeatures.map((f, idx) => (
                <Box
                  key={f.title}
                  as="button"
                  w="full"
                  textAlign="left"
                  bg={selectedFeature === idx ? "neutral.white" : "transparent"}
                  boxShadow={selectedFeature === idx ? "xl" : "none"}
                  borderRadius="xl"
                  p={6}
                  border={selectedFeature === idx ? "2px solid" : "2px solid transparent"}
                  borderColor={selectedFeature === idx ? "brand.100" : "transparent"}
                  transition="all 0.2s"
                  cursor="pointer"
                  onClick={() => setSelectedFeature(idx)}
                  _hover={{ bg: "neutral.white", boxShadow: "xl", borderColor: "brand.100" }}
                >
                  <Text fontWeight="bold" fontSize="lg" color="brand.400" mb={2}>{f.title}</Text>
                  <Text color="neutral.grayDark" fontSize="md">{f.desc}</Text>
                </Box>
              ))}
            </Box>
          </Box>
          {/* Right: Image changes with selection */}
          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <Box as="img" src={interactiveFeatures[selectedFeature].image} alt={interactiveFeatures[selectedFeature].title} borderRadius="2xl" boxShadow="2xl" w="100%" maxW="500px" />
          </Box>
        </Flex>
      </Box>

      {/* Prepare for lift off / Templates Section */}
      <Box as="section" w="full" bg="brand.400" position="relative" py={24} px={4} id="section03">
        <Box maxW="5xl" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <Heading as="h2" size="2xl" fontWeight="extrabold" color="neutral.white" mb={4}>
            Prepare for lift off.
          </Heading>
          <Text color="whiteAlpha.800" fontSize="xl" mb={6}>
            Build beautiful and powerful forms from scratch, or kickstart your flow with our{' '}
            <Box as="a" href="#" color="brand.100" borderBottom="2px solid" borderColor="brand.100" fontWeight="bold" _hover={{ color: "accent.500", borderColor: "accent.500" }}>
              pre-built templates
            </Box>
            .
          </Text>
        </Box>
        {/* Overlapping cards/images */}
        <Box maxW="6xl" mx="auto" mt={16} display="flex" justifyContent="center" alignItems="end" position="relative" zIndex={2}>
          {/* Left card */}
          <Box
            bg="neutral.white"
            borderRadius="2xl"
            boxShadow="2xl"
            w={{ base: "90%", md: "340px" }}
            h={{ base: "220px", md: "340px" }}
            mr={{ base: 0, md: -16 }}
            mt={{ base: 8, md: 16 }}
            zIndex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            opacity={0.85}
          >
            <Text fontWeight="bold" color="brand.400" mb={2}>Contact</Text>
            {/* Replace with SVG or image as needed */}
            <Box w="80%" h="60%" bg="brand.400" borderRadius="md" opacity={0.2} />
          </Box>
          {/* Center card */}
          <Box
            bg="neutral.white"
            borderRadius="2xl"
            boxShadow="2xl"
            w={{ base: "90%", md: "380px" }}
            h={{ base: "260px", md: "400px" }}
            zIndex={2}
            mx={0}
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="bold" color="brand.400" mb={2}>Payment</Text>
            <Box w="80%" h="60%" bg="brand.400" borderRadius="md" opacity={0.2} />
          </Box>
          {/* Right card */}
          <Box
            bg="neutral.white"
            borderRadius="2xl"
            boxShadow="2xl"
            w={{ base: "90%", md: "340px" }}
            h={{ base: "220px", md: "340px" }}
            ml={{ base: 0, md: -16 }}
            mt={{ base: 8, md: 16 }}
            zIndex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            opacity={0.85}
          >
            <Text fontWeight="bold" color="brand.400" mb={2}>Survey</Text>
            <Box w="80%" h="60%" bg="brand.400" borderRadius="md" opacity={0.2} />
          </Box>
        </Box>
      </Box>

      {/* Newsletter Section */}
      <Box as="section" id="newsletter">
        <NewsletterBox />
      </Box>

    </Box>
  );
}
