import {
  Carousel,
  Heading,
  Flex,
  Box,
  Stack,
  Text,
  Separator,
  Image,
  AspectRatio,
  IconButton,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const INTRO_PHOTOS = [
  { src: "/Poncitlan.jpeg", alt: "View of Poncitlan, Mexico" },
  { src: "/meredith-big-tree.jpeg", alt: "Meredith by a large tree" },
];

const CAROUSEL_SLIDES = [
  {
    src: "/meredith-vortex.jpeg",
    alt: "Meredith at the Saint Germaine vortex",
  },
  { src: "/lunch.jpeg", alt: "Lunch on the north shore of Lake Chapala" },
  { src: "/vortex1.jpeg", alt: "Saint Germaine vortex" },
  { src: "/vortex2.jpeg", alt: "Saint Germaine vortex" },
  { src: "/vortex3.jpeg", alt: "Saint Germaine vortex" },
  { src: "/vortex4.jpeg", alt: "Saint Germaine vortex" },
  { src: "/vortex5.jpeg", alt: "Saint Germaine vortex" },
  { src: "/castle.jpg.jpeg", alt: "Castle on Lake Chapala" },
  { src: "/castle1.jpeg", alt: "Castle on the north shore" },
  { src: "/castle2.jpeg", alt: "Castle on Lake Chapala" },
  { src: "/castle3.jpeg", alt: "Castle on the north shore" },
  { src: "/garden.jpeg", alt: "Garden on the north shore" },
  { src: "/garden-gnomes.jpeg", alt: "Garden with gnomes" },
  { src: "/gnome.jpeg", alt: "Garden gnome" },
];

const Mexico = () => {
  return (
    <Box p={[8, 8, 24]} align="center">
      <Heading as="h2" size="2xl" marginBottom={6}>
        Learn more about life in Mexico
      </Heading>

      <Stack spacing={[8, 8, 10]} maxW="4xl" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ md: "center" }}
          gap={6}
        >
          <Box
            flex={{ md: "0 0 42%" }}
            maxW={{ md: "380px" }}
            mx={{ base: "auto", md: 0 }}
          >
            <AspectRatio ratio={4 / 3} overflow="hidden" borderRadius="lg" boxShadow="md">
              <Image
                src={INTRO_PHOTOS[0].src}
                alt={INTRO_PHOTOS[0].alt}
                fit="cover"
                align="center"
              />
            </AspectRatio>
          </Box>
          <Box flex={1}>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
              Meredith offers one <strong>FREE 15-minute phone call</strong> to
              connect with you and answer some of your questions using her own
              experiences from living in Mexico since May 2020.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row-reverse" }}
          align={{ md: "center" }}
          gap={6}
        >
          <Box
            flex={{ md: "0 0 42%" }}
            maxW={{ md: "380px" }}
            mx={{ base: "auto", md: 0 }}
          >
            <AspectRatio ratio={4 / 3} overflow="hidden" borderRadius="lg" boxShadow="md">
              <Image
                src={INTRO_PHOTOS[1].src}
                alt={INTRO_PHOTOS[1].alt}
                fit="cover"
                align="center"
              />
            </AspectRatio>
          </Box>
          <Box flex={1}>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
              If that time is insufficient, she will schedule up to a one-hour
              long conversation with you for $55 U.S. (payable in advance on
              PayPal). Make a list of your questions prior to connecting to make
              the best use of your time together. Viva Mexico!
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Separator marginTop="2rem" marginBottom="1rem" />

      <Carousel.Root slideCount={CAROUSEL_SLIDES.length} maxW="4xl" mx="auto" mb={4}>
        <Carousel.ItemGroup>
          {CAROUSEL_SLIDES.map((slide, index) => (
            <Carousel.Item key={slide.src} index={index}>
              <AspectRatio ratio={4 / 3} overflow="hidden" borderRadius="lg" boxShadow="md">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fit="cover"
                  align="center"
                />
              </AspectRatio>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.Control justifyContent="center" gap={4} mt={3}>
          <Carousel.PrevTrigger asChild>
            <IconButton size="sm" variant="outline" aria-label="Previous image">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.Indicators />

          <Carousel.NextTrigger asChild>
            <IconButton size="sm" variant="outline" aria-label="Next image">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>

      <Separator marginTop="2rem" marginBottom="1rem" />

      <Stack
        spacing={[6, 6, 8]}
        align="center"
        textAlign="center"
        maxW="3xl"
        mx="auto"
      >
        <Box>
          <Heading as="h3" size="lg" marginBottom="0.5rem">
            Saint Germaine vortex
          </Heading>
          <Text>
            Meredith leads tours to the Saint Germaine vortex in the Lake
            Chapala area. The gallery above includes photos from the vortex—a
            powerful spot for energy work and reflection.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" marginBottom="0.5rem">
            Life in Ajijic
          </Heading>
          <Text>
            Meredith has called Ajijic, on the north shore of Lake Chapala, home
            since May 2020. She loves sharing what daily life is like here—the
            community, the climate, and the chance to slow down and enjoy
            Mexico.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" marginBottom="0.5rem">
            Day tours of the north shore
          </Heading>
          <Text>
            She also offers day tours along the north shore of Lake
            Chapala—castles, gardens, lunch by the lake, and the kind of spots
            that make this region special. Reach out to learn more and see the
            photos above.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
export default Mexico;
