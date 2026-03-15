import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" bg="bg.muted" p={4} textAlign="center">
      <Text color="fg.muted">
        &copy; {new Date().getFullYear()} Service With Heart - All rights
        reserved. | Built with ❤️ using Vite, React and Chakra UI by Taylor
        Morse
      </Text>
    </Box>
  );
}

export default Footer;
