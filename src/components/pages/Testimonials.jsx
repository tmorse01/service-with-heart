import { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Testimonial, { AVATAR_PALETTES } from "../shared/Testimonial";
import { testimonials } from "../../data/testimonials";
import "./../../App.css";

const STAGGER_DELAY_MS = 80;

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box as="main" py={{ base: 8, md: 12 }} px={{ base: 4, md: 6 }} bg="bg.subtle">
      <Container maxW="container.xl" ref={sectionRef}>
        <Flex direction="column" align="center" textAlign="center" gap={4} mb={10}>
          <Heading
            as="h1"
            size="3xl"
            className={`testimonials-heading-enter ${visible ? "visible" : ""}`}
          >
            Client Testimonials
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="tall"
            color="fg.muted"
            className={`testimonials-heading-enter ${visible ? "visible" : ""}`}
            sx={{ animationDelay: "0.05s" }}
          >
            What clients have shared about their sessions
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={8}
          justifyItems="center"
          alignItems="start"
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              className={`testimonials-card-enter ${visible ? "visible" : ""}`}
              sx={{
                animationDelay: visible ? `${index * (STAGGER_DELAY_MS / 1000)}s` : undefined,
                width: "100%",
                maxW: "400px",
              }}
            >
              <Testimonial
                name={item.name}
                text={item.text}
                colorPalette={AVATAR_PALETTES[index % AVATAR_PALETTES.length]}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default Testimonials;
