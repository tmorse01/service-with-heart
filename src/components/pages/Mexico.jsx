import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";
const Mexico = () => {
  return (
    <Box p={[8, 8, 24]} align="center">
      <Heading as="h1" size="xl" marginBottom="1rem">
        Mexico Videos
      </Heading>
      <Flex justifyContent="center" alignItems="center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U9ArRVS63P4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Flex>
      <Flex justifyContent="center" alignItems="center" marginTop="2rem">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OkabdG949HE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Flex>
    </Box>
  );
};
export default Mexico;
