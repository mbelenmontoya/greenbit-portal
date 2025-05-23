import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaLaptopCode, FaChartLine, FaCog } from "react-icons/fa";

export default function CorporateSection() {
  return (
    <Box as="section" id="corporate" bg="gray.50" py={16}>
      <Box maxW="6xl" mx="auto" textAlign="center" mb={12}>
        <Heading as="h2" size="xl" mb={4}>
          Our Mission
        </Heading>
        <Text fontSize="lg">
          We empower traders and advisors with cutting-edge IT solutions and
          financial insights to help them succeed.
        </Text>
      </Box>

      <Box maxW="6xl" mx="auto" px={4} textAlign="center">
        <Heading as="h3" size="lg" mb={6}>
          Who We Are
        </Heading>
        <Text mb={8}>
          A team of seasoned IT professionals and finance experts passionate
          about building tools and providing advice that drives real-world
          results.
        </Text>

        <Heading as="h3" size="lg" mb={6}>
          Core Services
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <VStack>
            <Icon as={FaLaptopCode} w={12} h={12} color="blue.500" />
            <Heading as="h4" size="md">
              Custom IT Solutions
            </Heading>
            <Text textAlign="center">
              Bespoke web & mobile applications tailored to your needs.
            </Text>
          </VStack>

          <VStack>
            <Icon as={FaChartLine} w={12} h={12} color="green.500" />
            <Heading as="h4" size="md">
              Trading Advice
            </Heading>
            <Text textAlign="center">
              Professional strategies to optimize your trading performance.
            </Text>
          </VStack>

          <VStack>
            <Icon as={FaCog} w={12} h={12} color="purple.500" />
            <Heading as="h4" size="md">
              Analytical Tools
            </Heading>
            <Text textAlign="center">
              Smart Trading Journal, Portfolio Rebalancer, Macro Dashboards…
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
