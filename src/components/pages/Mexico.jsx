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
import { forwardRef } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const INTRO_PHOTOS = [
  { src: "/ajijic.jpeg", alt: "View of Ajijic, Mexico" },
  { src: "/lake2.jpeg", alt: "View of Lake Chapala" },
];

const VORTEX_SLIDES = [
  {
    src: "/meredith-vortex.jpeg",
    alt: "Meredith at the Saint Germaine vortex",
  },
  {
    src: "/meredith-big-tree.jpeg",
    alt: "Meredith by a large tree",
  },
  { src: "/vortex1.jpeg", alt: "Saint Germaine vortex" },
  { src: "/vortex2.jpeg", alt: "Saint Germaine vortex" },
  { src: "/vortex3.jpeg", alt: "Saint Germaine vortex" },
  { src: "/vortex5.jpeg", alt: "Saint Germaine vortex" },
  { src: "/garden.jpeg", alt: "Garden on the north shore" },
  { src: "/garden-gnomes.jpeg", alt: "Garden with gnomes" },
  { src: "/gnome.jpeg", alt: "Garden gnome" },
  { src: "/castle1.jpeg", alt: "Castle on the north shore" },
  { src: "/castle2.jpeg", alt: "Castle on Lake Chapala" },
  { src: "/castle3.jpeg", alt: "Castle on the north shore" },
  { src: "/lunch.jpeg", alt: "Lunch on the north shore of Lake Chapala" },
  { src: "/castle.jpeg", alt: "Castle on Lake Chapala" },
  { src: "/Poncitlan.jpeg", alt: "Poncitlan area" },
];

const AJIJIC_SLIDES = [
  { src: "/ajijic.jpeg", alt: "Ajijic on the north shore of Lake Chapala" },
];

const CarouselActionButton = forwardRef(function CarouselActionButton(
  { insetStart, insetEnd, ...props }, // eslint-disable-line react/prop-types -- passed to IconButton
  ref,
) {
  return (
    <IconButton
      ref={ref}
      size="xs"
      variant="outline"
      rounded="full"
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
      bg="bg"
      insetStart={insetStart}
      insetEnd={insetEnd}
      {...props}
    />
  );
});

const Mexico = () => {
  return (
    <Box p={[8, 8, 24]} align="center">
      <Heading as="h1" size="2xl" marginBottom={6}>
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
            <AspectRatio
              ratio={4 / 3}
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
            >
              <Image
                src={INTRO_PHOTOS[0].src}
                alt={INTRO_PHOTOS[0].alt}
                fit="cover"
                align="center"
              />
            </AspectRatio>
          </Box>
          <Box flex={1}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="tall"
              color="fg.muted"
            >
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
            <AspectRatio
              ratio={4 / 3}
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
            >
              <Image
                src={INTRO_PHOTOS[1].src}
                alt={INTRO_PHOTOS[1].alt}
                fit="cover"
                align="center"
              />
            </AspectRatio>
          </Box>
          <Box flex={1}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="tall"
              color="fg.muted"
            >
              If that time is insufficient, she will schedule up to a one-hour
              long conversation with you for $55 U.S. (payable in advance on
              PayPal). Make a list of your questions prior to connecting to make
              the best use of your time together. Viva Mexico!
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Separator marginTop="2rem" marginBottom="1rem" />

      <Heading as="h2" size="lg" marginBottom={4}>
        Saint Germaine vortex
      </Heading>
      <Carousel.Root
        slideCount={VORTEX_SLIDES.length}
        maxW="4xl"
        mx="auto"
        mb={8}
        position="relative"
      >
        <Carousel.Control gap="4" width="full" position="relative">
          <Carousel.PrevTrigger asChild>
            <CarouselActionButton
              insetStart="4"
              aria-label="Previous vortex image"
            >
              <LuChevronLeft />
            </CarouselActionButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="full">
            {VORTEX_SLIDES.map((slide, index) => (
              <Carousel.Item key={slide.src} index={index}>
                <AspectRatio
                  ratio={{ base: 2 / 1, md: 16 / 9 }}
                  overflow="hidden"
                  borderRadius="lg"
                  boxShadow="md"
                  width="100%"
                >
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

          <Carousel.NextTrigger asChild>
            <CarouselActionButton insetEnd="4" aria-label="Next vortex image">
              <LuChevronRight />
            </CarouselActionButton>
          </Carousel.NextTrigger>
        </Carousel.Control>

        <Box mt={3} overflowX="auto" maxW="full">
          <Carousel.IndicatorGroup
            gap={2}
            justifyContent="center"
            flexWrap="nowrap"
            maxW="27rem"
            mx="auto"
            display="flex"
          >
            {VORTEX_SLIDES.map((slide, index) => (
              <Carousel.Indicator
                key={slide.src}
                index={index}
                unstyled
                flexShrink={0}
                _current={{
                  outline: "2px solid",
                  outlineColor: "colorPalette.subtle",
                  outlineOffset: "2px",
                }}
              >
                <Image
                  w="20"
                  aspectRatio="16/9"
                  src={slide.src}
                  alt={slide.alt}
                  fit="cover"
                  borderRadius="md"
                />
              </Carousel.Indicator>
            ))}
          </Carousel.IndicatorGroup>
        </Box>
      </Carousel.Root>

      <Separator marginTop="2rem" marginBottom="1rem" />

      <Heading as="h2" size="lg" marginBottom={4}>
        Life in Ajijic
      </Heading>
      <Carousel.Root
        slideCount={AJIJIC_SLIDES.length}
        maxW="4xl"
        mx="auto"
        mb={8}
        position="relative"
      >
        <Carousel.Control gap="4" width="full" position="relative">
          <Carousel.PrevTrigger asChild>
            <CarouselActionButton
              insetStart="4"
              aria-label="Previous Ajijic image"
            >
              <LuChevronLeft />
            </CarouselActionButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="full">
            {AJIJIC_SLIDES.map((slide, index) => (
              <Carousel.Item key={slide.src} index={index}>
                <AspectRatio
                  ratio={{ base: 2 / 1, md: 16 / 9 }}
                  overflow="hidden"
                  borderRadius="lg"
                  boxShadow="md"
                  width="100%"
                >
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

          <Carousel.NextTrigger asChild>
            <CarouselActionButton insetEnd="4" aria-label="Next Ajijic image">
              <LuChevronRight />
            </CarouselActionButton>
          </Carousel.NextTrigger>
        </Carousel.Control>

        <Box mt={3} overflowX="auto" maxW="full">
          <Carousel.IndicatorGroup
            gap={2}
            justifyContent="center"
            flexWrap="nowrap"
            maxW="27rem"
            mx="auto"
            display="flex"
          >
            {AJIJIC_SLIDES.map((slide, index) => (
              <Carousel.Indicator
                key={slide.src}
                index={index}
                unstyled
                flexShrink={0}
                _current={{
                  outline: "2px solid",
                  outlineColor: "colorPalette.subtle",
                  outlineOffset: "2px",
                }}
              >
                <Image
                  w="20"
                  aspectRatio="16/9"
                  src={slide.src}
                  alt={slide.alt}
                  fit="cover"
                  borderRadius="md"
                />
              </Carousel.Indicator>
            ))}
          </Carousel.IndicatorGroup>
        </Box>
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
          <Text lineHeight="tall" color="fg.muted">
            Meredith leads tours to the Saint Germaine vortex in the Lake
            Chapala area. The carousel above includes photos from the vortex—a
            powerful spot for energy work and reflection.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" marginBottom="0.5rem">
            Life in Ajijic
          </Heading>
          <Text lineHeight="tall" color="fg.muted">
            Meredith has called Ajijic, on the north shore of Lake Chapala, home
            since May 2020. The carousel above shows daily life here—the
            community, the climate, and the chance to slow down and enjoy
            Mexico.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" marginBottom="0.5rem">
            Day tours of the north shore
          </Heading>
          <Text lineHeight="tall" color="fg.muted">
            She also offers day tours along the north shore of Lake
            Chapala—castles, gardens, lunch by the lake, and the kind of spots
            that make this region special. Reach out to learn more.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
export default Mexico;
