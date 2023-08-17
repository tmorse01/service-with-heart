import React from "react";
import {
  Heading,
  Box,
  Flex,
  Link,
  Text,
  useTheme,
  Spacer,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const theme = useTheme();

  return (
    <Box bg="teal.500" color="white" py={4} px={8}>
      <Flex align="center" justify="space-between" p={4} wrap="wrap">
        <Heading as="h1" size="lg" color="gray.800">
          Service With Heart
        </Heading>
        <Spacer />
        <Flex wrap="wrap" align="center">
          <Link
            as={RouterLink}
            to="/"
            color="white"
            mr={4}
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "blue.200" }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            color="white"
            mr={4}
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "blue.200" }}
          >
            About
          </Link>
          <Link
            as={RouterLink}
            to="/testimonials"
            color="white"
            mr={4}
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "blue.200" }}
          >
            Testimonials
          </Link>
          <Link
            as={RouterLink}
            to="/iet"
            color="white"
            mr={4}
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "blue.200" }}
          >
            IET
          </Link>
          <Link
            as={RouterLink}
            to="/mexico"
            color="white"
            mr={4}
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "blue.200" }}
          >
            Mexico
          </Link>
          <Link
            as={RouterLink}
            to="/conact"
            color="white"
            mr={4}
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "blue.200" }}
          >
            Contact
          </Link>
        </Flex>
        <Spacer />
        <Text fontSize="2xl" color="gray.800">
          332-849-4644
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
