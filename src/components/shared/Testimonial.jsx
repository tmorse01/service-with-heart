import { Box, Avatar, Text, Flex } from "@chakra-ui/react";

const Testimonial = ({ name, text }) => {
  return (
    <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" maxW="400px">
      <Flex align="center">
        <Avatar size="md" name={name} />
        <Text ml={3} fontWeight="bold">
          {name}
        </Text>
      </Flex>
      <Text mt={3} fontStyle="italic" quotes='"“"' fontSize="sm">
        {text}
      </Text>
    </Box>
  );
};

export default Testimonial;
