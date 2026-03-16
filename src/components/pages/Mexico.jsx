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
    src: "/vortex/meredith-vortex.jpeg",
    alt: "Meredith at the Saint Germaine Vortex",
  },
  {
    src: "/vortex/meredith-big-tree.jpeg",
    alt: "Meredith by a large tree",
  },
  { src: "/vortex/vortex1.jpeg", alt: "Saint Germaine Vortex" },
  { src: "/vortex/vortex2.jpeg", alt: "Saint Germaine Vortex" },
  { src: "/vortex/vortex3.jpeg", alt: "Saint Germaine Vortex" },
  { src: "/vortex/vortex5.jpeg", alt: "Saint Germaine Vortex" },
  { src: "/vortex/garden.jpeg", alt: "Garden on the north shore" },
  { src: "/vortex/garden-gnomes.jpeg", alt: "Garden with gnomes" },
  { src: "/vortex/gnome.jpeg", alt: "Garden gnome" },
  { src: "/vortex/castle1.jpeg", alt: "Castle on the north shore" },
  { src: "/vortex/castle2.jpeg", alt: "Castle on Lake Chapala" },
  { src: "/vortex/castle3.jpeg", alt: "Castle on the north shore" },
  {
    src: "/vortex/lunch.jpeg",
    alt: "Lunch on the north shore of Lake Chapala",
  },
  { src: "/vortex/castle.jpeg", alt: "Castle on Lake Chapala" },
  { src: "/vortex/Poncitlan.jpeg", alt: "Poncitlan area" },
];

const AJIJIC_SLIDES = [
  { src: "/ajijic/IMG_E1361.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E1805.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E2028.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E2438.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E2823.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3081.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3180.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3218.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3381.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3913.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3930.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3933.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E3966.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E4184.JPG", alt: "Life In Ajijic" },
  { src: "/ajijic/IMG_E4335.JPG", alt: "Life In Ajijic" },
];

/** Returns the thumbnail URL for a slide (smaller asset for indicator strip). */
function getThumbSrc(src) {
  const lastSlash = src.lastIndexOf("/");
  return `${src.slice(0, lastSlash + 1)}thumb/${src.slice(lastSlash + 1)}`;
}

const LAKESIDE_TOUR_SLIDES = [
  { src: "/lakeside-tour/Chapala 1.JPG", alt: "Lake Chapala lakeside tour" },
  { src: "/lakeside-tour/Chapala 2.JPG", alt: "Lake Chapala lakeside tour" },
  { src: "/lakeside-tour/Chapala 3.JPG", alt: "Lake Chapala lakeside tour" },
  { src: "/lakeside-tour/Chapala 4.JPG", alt: "Lake Chapala lakeside tour" },
  { src: "/lakeside-tour/Chapala 5.JPG", alt: "Lake Chapala lakeside tour" },
  { src: "/lakeside-tour/Joco 1.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 2.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 3.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 4.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 5.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 6.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 7.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 8.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/Joco 9.JPG", alt: "Jocotepec lakeside tour" },
  { src: "/lakeside-tour/SJC 1.JPG", alt: "San Juan Cosalá lakeside tour" },
  { src: "/lakeside-tour/SJC 2.JPG", alt: "San Juan Cosalá lakeside tour" },
  { src: "/lakeside-tour/SJC 3.JPG", alt: "San Juan Cosalá lakeside tour" },
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
        Learn More About Life In Mexico
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
                loading="eager"
                decoding="async"
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
                loading="lazy"
                decoding="async"
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

      <Heading as="h2" size="xl" marginBottom={4}>
        Saint Germaine Vortex
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
                    loading={index <= 1 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"}
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

        <Box mt={3} overflowX="auto" maxW="full" overflowY="hidden">
          <Carousel.IndicatorGroup
            gap={2}
            justifyContent="flex-start"
            flexWrap="nowrap"
            display="flex"
            minW="min-content"
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
                  src={getThumbSrc(slide.src)}
                  alt={slide.alt}
                  fit="cover"
                  borderRadius="md"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = slide.src;
                  }}
                />
              </Carousel.Indicator>
            ))}
          </Carousel.IndicatorGroup>
        </Box>
      </Carousel.Root>
      <Box maxW="3xl" mx="auto" textAlign="center" mt={4} mb={2}>
        <Text lineHeight="tall" color="fg.muted">
          Meredith leads tours to the Saint Germaine Vortex in the Lake Chapala
          area. The carousel above includes photos from the vortex—a powerful
          spot for energy work and reflection.
        </Text>
      </Box>

      <Separator marginTop="2rem" marginBottom="1rem" />

      <Heading as="h2" size="xl" marginBottom={4}>
        Life In Ajijic
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
                    loading={index <= 1 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"}
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

        <Box mt={3} overflowX="auto" maxW="full" overflowY="hidden">
          <Carousel.IndicatorGroup
            gap={2}
            justifyContent="flex-start"
            flexWrap="nowrap"
            display="flex"
            minW="min-content"
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
                  src={getThumbSrc(slide.src)}
                  alt={slide.alt}
                  fit="cover"
                  borderRadius="md"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = slide.src;
                  }}
                />
              </Carousel.Indicator>
            ))}
          </Carousel.IndicatorGroup>
        </Box>
      </Carousel.Root>
      <Box maxW="3xl" mx="auto" textAlign="center" mt={4} mb={2}>
        <Text lineHeight="tall" color="fg.muted">
          Meredith has called Ajijic, on the north shore of Lake Chapala, home
          since May 2020. The carousel above shows daily life here—the
          community, the climate, and the chance to slow down and enjoy Mexico.
        </Text>
      </Box>

      <Separator marginTop="2rem" marginBottom="1rem" />

      <Heading as="h2" size="lg" marginBottom={4}>
        Lakeside Tour
      </Heading>
      <Carousel.Root
        slideCount={LAKESIDE_TOUR_SLIDES.length}
        maxW="4xl"
        mx="auto"
        mb={8}
        position="relative"
      >
        <Carousel.Control gap="4" width="full" position="relative">
          <Carousel.PrevTrigger asChild>
            <CarouselActionButton
              insetStart="4"
              aria-label="Previous lakeside tour image"
            >
              <LuChevronLeft />
            </CarouselActionButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="full">
            {LAKESIDE_TOUR_SLIDES.map((slide, index) => (
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
                    loading={index <= 1 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"}
                  />
                </AspectRatio>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.NextTrigger asChild>
            <CarouselActionButton
              insetEnd="4"
              aria-label="Next lakeside tour image"
            >
              <LuChevronRight />
            </CarouselActionButton>
          </Carousel.NextTrigger>
        </Carousel.Control>

        <Box mt={3} overflowX="auto" maxW="full" overflowY="hidden">
          <Carousel.IndicatorGroup
            gap={2}
            justifyContent="flex-start"
            flexWrap="nowrap"
            display="flex"
            minW="min-content"
          >
            {LAKESIDE_TOUR_SLIDES.map((slide, index) => (
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
                  src={getThumbSrc(slide.src)}
                  alt={slide.alt}
                  fit="cover"
                  borderRadius="md"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = slide.src;
                  }}
                />
              </Carousel.Indicator>
            ))}
          </Carousel.IndicatorGroup>
        </Box>
      </Carousel.Root>
      <Box maxW="3xl" mx="auto" textAlign="center" mt={4} mb={2}>
        <Text lineHeight="tall" color="fg.muted">
          Photos from day tours along the north shore of Lake Chapala—Chapala,
          Jocotepec, San Juan Cosalá, and the kind of spots that make this
          region special.
        </Text>
      </Box>
      <Box maxW="3xl" mx="auto" textAlign="center" mt={4} mb={2}>
        <Text lineHeight="tall" color="fg.muted">
          She also offers day tours along the north shore of Lake
          Chapala—castles, gardens, lunch by the lake, and the kind of spots
          that make this region special. Reach out to learn more.
        </Text>
      </Box>
    </Box>
  );
};
export default Mexico;
