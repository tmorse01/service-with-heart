import React from "react";
import { Heading, Flex, Box, Stack } from "@chakra-ui/react";
const Mexico = () => {
  return (
    <Box p={[8, 8, 24]} align="center">
      <Heading as="h2" size="2xl" marginBottom="1rem">
        Learn more about Meredith’s life in Mexico (full time since May 2020) in
        the videos below:
      </Heading>
      <Stack spacing={[4, 4, 8]}>
        <Heading as="h4" size="md">
          A 45 minute interview with Meredith by Bill Dallas-Lewis about life in
          Ajijic, Mexico
        </Heading>
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
        <Heading as="h4" size="md">
          A 10 minute interview with Meredith by Bill Dallas-Lewis about her day
          tours of the north shore of Lake Chapala.
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
      </Stack>
    </Box>
  );
};
export default Mexico;
