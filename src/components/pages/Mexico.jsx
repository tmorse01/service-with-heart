import { useState } from "react";
import {
  Heading,
  Flex,
  Box,
  Stack,
  Text,
  Divider,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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

function ImageCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = slides.length - 1;

  const goPrev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <Box
      role="region"
      aria-roledescription="carousel"
      position="relative"
      maxW="4xl"
      mx="auto"
      mb={4}
    >
      <Flex align="center" gap={2}>
        <IconButton
          aria-label="Previous image"
          icon={<ChevronLeftIcon />}
          onClick={goPrev}
          variant="outline"
          size="sm"
          flexShrink={0}
        />
        <Box
          flex={1}
          overflow="hidden"
          borderRadius="lg"
          boxShadow="md"
          position="relative"
          sx={{ aspectRatio: "4/3" }}
        >
          <Flex
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            w={`${slides.length * 100}%`}
            h="100%"
            transform={`translateX(-${(currentIndex / slides.length) * 100}%)`}
            transition="transform 0.3s ease-out"
          >
            {slides.map((slide) => (
              <Box
                key={slide.src}
                w={`${100 / slides.length}%`}
                h="100%"
                position="relative"
                flexShrink={0}
              >
                <Image
                  as="img"
                  src={slide.src}
                  alt={slide.alt}
                  objectFit="cover"
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  w="100%"
                  h="100%"
                  display="block"
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <IconButton
          aria-label="Next image"
          icon={<ChevronRightIcon />}
          onClick={goNext}
          variant="outline"
          size="sm"
          flexShrink={0}
        />
      </Flex>
      <Flex justify="center" gap={1} mt={2} flexWrap="wrap">
        {slides.map((slide, i) => (
          <Box
            key={slide.src}
            as="button"
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setCurrentIndex(i)}
            w={2}
            h={2}
            borderRadius="full"
            bg={i === currentIndex ? "accent.solid" : "bg.emphasized"}
            _hover={{ bg: i === currentIndex ? "accent.muted" : "border.default" }}
          />
        ))}
      </Flex>
    </Box>
  );
}

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
            <Box
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
              sx={{ aspectRatio: "4/3" }}
            >
              <Image
                as="img"
                src={INTRO_PHOTOS[0].src}
                alt={INTRO_PHOTOS[0].alt}
                objectFit="cover"
                w="100%"
                h="100%"
                display="block"
              />
            </Box>
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
            <Box
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
              sx={{ aspectRatio: "4/3" }}
            >
              <Image
                as="img"
                src={INTRO_PHOTOS[1].src}
                alt={INTRO_PHOTOS[1].alt}
                objectFit="cover"
                w="100%"
                h="100%"
                display="block"
              />
            </Box>
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

      <Divider marginTop="2rem" marginBottom="1rem" />

      <ImageCarousel slides={CAROUSEL_SLIDES} />

      <Divider marginTop="2rem" marginBottom="1rem" />

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
