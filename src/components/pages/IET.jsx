import React from "react";
import {
  Stack,
  Divider,
  Image,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
const IET = () => {
  return (
    <Box p={[8, 8, 24]}>
      <Stack
        direction={["column", "column", "row"]} // Stacks boxes on small screens, displays side by side on larger screens
        spacing={[4, 4, 8]} // Adjust spacing between stacked boxes or side by side boxes
      >
        <Box p={[4, 4, 8]} gap={4} width={["100%", "100%", "50%"]}>
          <Stack spacing="24px">
            <Heading as="h2" size="3xl">
              What is Integrated Energy Therapy?
            </Heading>
            <Divider />
            <Heading as="h4" size="xl">
              From LearnIET.com:
            </Heading>
            <Text>
              <strong>We call it “Healing with the Energy of Angels” </strong>
              Integrated Energy Therapy® (IET®) is one of the next generation –
              hands on – power energy therapy systems that get the “issues out
              of your tissues” for good! Developed at the Center of Being, by
              Stevan J. Thayer, IET uses the violet angelic energy ray, as
              brought to us through the nine Healing Angels of the Energy Field,
              to work directly with your 12 Strand Spiritual DNA. IET supports
              you in safely and gently releasing limiting energy patterns of
              your past, empowering and balancing your life in the present, and
              helps you to reach for the stars as you evolve into your future.
              We chose the term “Integrated” in our name to convey our healing
              vision of “integrating the pain of the past, into the power of the
              present, to bring about the joy of the future”.
            </Text>
            <Heading as="h4" size="xl">
              What is an IET Session?
            </Heading>
            <Text>
              " Integrated Energy Therapy® (IET) sessions use angelic energy to
              work directly with your body’s cellular memory and energy field to
              get the 'issues out of your tissues' for good. IET helps you to
              safely and gently release limiting energy patterns from your past,
              empower and balance your life in the present, and embody your full
              potential as you move into your future. "
            </Text>
          </Stack>
        </Box>
        <Box p={[4, 4, 8]} width={["100%", "100%", "50%"]}>
          <Image
            src={"/green_candles.jpg"}
            alt="Green candles"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
      </Stack>
    </Box>
  );
};
export default IET;
