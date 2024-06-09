/* eslint-disable react/no-unknown-property */
import {
  Heading,
  Flex,
  Box,
  Stack,
  Text,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
const Mexico = () => {
  return (
    <Box p={[8, 8, 24]} align="center">
      <Heading as="h2" size="2xl" marginBottom="1rem">
        Learn more about life in Mexico
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={1}>
          <Text>
            Meredith offers one FREE 15-minute phone call to connect with you
            and answer some of your questions using her own experiences from
            living in Mexico since May, 2020.
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text>
            If that time is insufficient, she will schedule up to a one-hour
            long conversation with you for $55 U.S. (payable in advance on
            PayPal.) Make a list of your questions prior to connecting to make
            the best use of your time together. Viva Mexico!
          </Text>
        </GridItem>
      </Grid>
      <Divider marginTop="1em" marginBottom="1rem" />
      <Heading as="h3" size="2xl" marginBottom="1rem">
        Videos
      </Heading>
      <Stack spacing={[4, 4, 8]}>
        <Heading as="h4" size="md">
          Meredith&apos;s tour to the Saint Germaine vortex
        </Heading>
        <Flex justifyContent="center" alignItems="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8hAkVFZ4R_A?si=6Op2o7niNMa_Ux7u"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Flex>
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
