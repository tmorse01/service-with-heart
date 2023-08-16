import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" bg="#f4f4f4" p={4} textAlign="center">
      <Text color="#777">
        &copy; 2023 Service With Heart - All rights reserved. | Built with ❤️
        using Vite, React and Chakra UI by Taylor Morse
      </Text>
    </Box>
  );
}

export default Footer;
