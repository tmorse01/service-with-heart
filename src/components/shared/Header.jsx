import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      bg="teal.500"
      color="white"
    >
      <Link href="/" fontWeight="bold" fontSize="xl">
        Service With Heart
      </Link>
      <Box>
        <Link mr={4} href="/about">
          About
        </Link>
        <Link mr={4} href="/contact">
          Contact
        </Link>
      </Box>
      <Text fontSize="2xl">332-849-4644</Text>
    </Flex>
  );
};

export default Header;
