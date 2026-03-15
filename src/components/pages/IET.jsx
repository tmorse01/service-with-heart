import {
  Stack,
  Separator,
  Image,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const IET = () => {
  return (
    <Box p={[6, 8, 12]} maxW="1200px" mx="auto">
      <Stack spacing={[10, 12, 16]}>
        {/* Section 1: Logo left, intro text right */}
        <Flex
          direction={["column", "column", "row"]}
          gap={[6, 8, 10]}
          align={["center", "center", "flex-start"]}
        >
          <Box
            flexShrink={0}
            width={["200px", "240px", "280px"]}
            aspectRatio={1}
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/IETlogo-final.jpg"
              alt="Integrated Energy Therapy logo"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          <Box flex={1} minW={0}>
            <Heading as="h1" size="3xl" mb={4}>
              What is Integrated Energy Therapy?
            </Heading>
            <Separator mb={4} />
            <Heading as="h2" size="xl" mb={3}>
              From LearnIET.com:
            </Heading>
            <Text lineHeight="tall" color="fg.muted">
              <strong>We call it &quot;Healing with the Energy of Angels&quot; </strong>
              Integrated Energy Therapy® (IET®) is one of the next generation –
              hands on – power energy therapy systems that get the &quot;issues out
              of your tissues&quot; for good! Developed at the Center of Being, by
              Stevan J. Thayer, IET uses the violet angelic energy ray, as
              brought to us through the nine Healing Angels of the Energy Field,
              to work directly with your 12 Strand Spiritual DNA. IET supports
              you in safely and gently releasing limiting energy patterns of
              your past, empowering and balancing your life in the present, and
              helps you to reach for the stars as you evolve into your future.
              We chose the term &quot;Integrated&quot; in our name to convey our healing
              vision of &quot;integrating the pain of the past, into the power of the
              present, to bring about the joy of the future&quot;.
            </Text>
          </Box>
        </Flex>

        {/* Section 2: Candles right (row-reverse), session info left */}
        <Flex
          direction={["column", "column", "row-reverse"]}
          gap={[6, 8, 10]}
          align={["center", "center", "flex-start"]}
        >
          <Box
            flexShrink={0}
            width={["100%", "100%", "45%"]}
            maxW={["100%", "420px", "none"]}
            mx={["auto", "auto", 0]}
          >
            <Image
              src="/green_candles.jpg"
              alt="Green candles"
              width="100%"
              maxH={["360px", "420px", "520px"]}
              objectFit="cover"
              borderRadius="lg"
            />
          </Box>
          <Box flex={1} minW={0}>
            <Heading as="h2" size="xl" mb={3}>
              What is an IET Session?
            </Heading>
            <Text lineHeight="tall" color="fg.muted" mb={4}>
              <strong>
                Meredith conducts all of the IET sessions remotely. You are
                invited to rest undisturbed for 45 minutes to 1 hour in the
                comfort of your own home while Meredith connects with the Angels
                from her home office.
              </strong>
            </Text>
            <Text lineHeight="tall" color="fg.muted">
              Integrated Energy Therapy® (IET) sessions use angelic energy to
              work directly with your body&apos;s cellular memory and energy field to
              get the &apos;issues out of your tissues&apos; for good. IET helps you to
              safely and gently release limiting energy patterns from your past,
              empower and balance your life in the present, and embody your full
              potential as you move into your future.
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};
export default IET;
