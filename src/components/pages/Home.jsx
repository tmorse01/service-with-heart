import {
  Box,
  Container,
  Flex,
  Button,
  Heading,
  Image,
  AspectRatio,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import Testimonial, { AVATAR_PALETTES } from "../shared/Testimonial";
import { featuredTestimonials } from "../../data/testimonials";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box as="main">
      {/* 1. Hero */}
      <Box
        position="relative"
        minH={{ base: "50vh", md: "60vh" }}
        backgroundImage="url(/meredith-vortex.jpeg)"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          className="hero-overlay"
          position="absolute"
          inset={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
        <MotionFlex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
          position="relative"
          zIndex={1}
          p={8}
          color="fg.inverted"
          textAlign="center"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <MotionBox variants={fadeUp} transition={sectionTransition}>
          <Heading
            as="h2"
            size={{ base: "2xl", md: "3xl" }}
            textShadow="0 1px 3px rgba(0,0,0,0.5)"
          >
            Rev. Meredith Ann Murray
          </Heading>
          </MotionBox>
          <MotionBox variants={fadeUp} transition={sectionTransition}>
          <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
            Welcome!
          </Text>
          </MotionBox>
          <MotionBox variants={fadeUp} transition={sectionTransition}>
          <Heading
            as="h3"
            size={{ base: "md", md: "lg" }}
            fontWeight="medium"
            textShadow="0 1px 2px rgba(0,0,0,0.5)"
          >
            Integrated Energy Therapy Advanced Level Practitioner
          </Heading>
          </MotionBox>
          <MotionBox variants={fadeUp} transition={sectionTransition}>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            align="center"
          >
            <Button
              colorPalette="tealPrimary"
              size="lg"
              onClick={() => navigate("/contact")}
              _hover={{ transform: "translateY(-1px)" }}
              transition="transform 0.2s"
            >
              Schedule an Appointment
            </Button>
            <Button
              colorPalette="tealPrimary"
              variant="outline"
              size="lg"
              borderColor="fg.inverted"
              color="fg.inverted"
              _hover={{ bg: "whiteAlpha.300" }}
              onClick={() => navigate("/iet")}
            >
              Find Out More
            </Button>
          </Stack>
          </MotionBox>
        </MotionFlex>
      </Box>

      {/* 2. Intro — Logo + Welcome */}
      <Box py={{ base: 8, md: 10 }} px={{ base: 4, md: 6 }} bg="bg.subtle">
        <Container maxW="container.lg">
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            gap={4}
          >
            <Box>
              <Image
                fit="contain"
                width={{ base: "120px", md: "160px" }}
                height="auto"
                src="/Logo.png"
                alt="Heart Logo - Service With Heart"
              />
            </Box>
            <Box>
              <Heading as="h2" size="lg" color="fg.default">
                Service With Heart
              </Heading>
            </Box>
            <Box>
              <Text fontSize="lg" color="fg.muted" maxW="560px">
                Healing with the energy of angels. Remote IET sessions from
                Ajijic, Mexico.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* 3. About Meredith — Image Left, Text Right */}
      <Box
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 4, md: 6 }}
        bg="bg.default"
      >
        <Container maxW="container.xl">
          <MotionFlex
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "center" }}
            gap={{ base: 6, lg: 10 }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={sectionTransition}
          >
            <Box flex={{ lg: "0 0 42%" }} maxW={{ lg: "520px" }}>
              <AspectRatio
                ratio={4 / 3}
                overflow="hidden"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image
                  src="/meredith-big-tree.jpeg"
                  alt="Meredith in nature"
                  fit="cover"
                  align="center"
                />
              </AspectRatio>
            </Box>
            <Box flex={1}>
              <Heading as="h2" size="xl" mb={4}>
                About Meredith
              </Heading>
              <Text color="fg.muted" lineHeight="tall" mb={4}>
                Meredith&apos;s passion is Peace. She has been an ordained
                Interfaith Minister of Spiritual Peacemaking since 2006 and is
                an Advanced Level IET Practitioner. She officiates at weddings,
                conducts memorial services, and brings healing through angelic
                energy.
              </Text>
              <Button
                as={RouterLink}
                to="/about"
                colorPalette="tealPrimary"
                variant="outline"
                size="sm"
              >
                Learn more about Meredith →
              </Button>
            </Box>
          </MotionFlex>
        </Container>
      </Box>

      {/* 4. IET Preview — Text Left, Image Right */}
      <Box
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 4, md: 6 }}
        bg="bg.subtle"
      >
        <Container maxW="container.xl">
          <MotionFlex
            direction={{ base: "column", lg: "row-reverse" }}
            align={{ lg: "center" }}
            gap={{ base: 6, lg: 10 }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={sectionTransition}
          >
            <Box flex={{ lg: "0 0 42%" }} maxW={{ lg: "520px" }}>
              <AspectRatio
                ratio={4 / 3}
                overflow="hidden"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image
                  src="/vortex1.jpeg"
                  alt="Peaceful garden"
                  fit="cover"
                  align="center"
                />
              </AspectRatio>
            </Box>
            <Box flex={1}>
              <Heading as="h2" size="xl" mb={4}>
                What is IET?
              </Heading>
              <Text color="fg.muted" lineHeight="tall" mb={4}>
                IET is &quot;Healing with the Energy of Angels&quot; — a gentle
                energy therapy that uses angelic energy to release limiting
                patterns from your past and empower your present. Sessions are
                conducted remotely for 45–60 minutes while you rest undisturbed
                at home.
              </Text>
              <Button
                as={RouterLink}
                to="/iet"
                colorPalette="tealPrimary"
                variant="outline"
                size="sm"
              >
                Learn more about IET →
              </Button>
            </Box>
          </MotionFlex>
        </Container>
      </Box>

      {/* 5. Testimonials — Text Only */}
      <Box
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 4, md: 6 }}
        bg="bg.default"
      >
        <Container maxW="container.xl">
          <MotionFlex
            direction="column"
            align="center"
            gap={8}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={sectionTransition}
          >
            <Heading as="h2" size="xl">
              What Clients Say
            </Heading>
            <MotionFlex
              as={motion.div}
              direction={{ base: "column", md: "row" }}
              gap={8}
              justify="center"
              align="stretch"
              width="100%"
              maxW="900px"
              variants={heroStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {featuredTestimonials.map((item, index) => (
                <MotionBox
                  key={index}
                  variants={fadeUp}
                  transition={sectionTransition}
                >
                  <Testimonial
                    name={item.name}
                    text={item.text}
                    colorPalette={AVATAR_PALETTES[index % AVATAR_PALETTES.length]}
                  />
                </MotionBox>
              ))}
            </MotionFlex>
            <Link
              as={RouterLink}
              to="/testimonials"
              color="accent.solid"
              fontWeight="semibold"
            >
              Read all testimonials →
            </Link>
          </MotionFlex>
        </Container>
      </Box>

      {/* 6. Mexico Preview — Image Left, Text Right */}
      <Box
        py={{ base: 8, md: 12, lg: 16 }}
        px={{ base: 4, md: 6 }}
        bg="bg.subtle"
      >
        <Container maxW="container.xl">
          <MotionFlex
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "center" }}
            gap={{ base: 6, lg: 10 }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={sectionTransition}
          >
            <Box flex={{ lg: "0 0 42%" }} maxW={{ lg: "520px" }}>
              <AspectRatio
                ratio={4 / 3}
                overflow="hidden"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image
                  src="/Poncitlan.jpeg"
                  alt="Poncitlan, Mexico"
                  fit="cover"
                  align="center"
                />
              </AspectRatio>
            </Box>
            <Box flex={1}>
              <Heading as="h2" size="xl" mb={4}>
                Life in Mexico
              </Heading>
              <Text color="fg.muted" lineHeight="tall" mb={4}>
                Meredith has lived in Mexico since May 2020. She offers a{" "}
                <strong>Free 15-minute phone call</strong> to connect and answer
                your questions about life in Ajijic and the Lake Chapala area.
              </Text>
              <Button
                as={RouterLink}
                to="/mexico"
                colorPalette="tealPrimary"
                variant="outline"
                size="sm"
              >
                Learn more about Mexico →
              </Button>
            </Box>
          </MotionFlex>
        </Container>
      </Box>

      {/* 7. Final CTA */}
      <Box py={{ base: 10, md: 14 }} px={{ base: 4, md: 6 }} bg="bg.default">
        <Container maxW="container.md">
          <MotionFlex
            direction="column"
            align="center"
            textAlign="center"
            gap={5}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={sectionTransition}
          >
            <Image
              fit="contain"
              width={{ base: "100px", md: "120px" }}
              height="auto"
              src="/Logo.png"
              alt="Service With Heart"
            />
            <Heading as="h2" size="lg" color="fg.default">
              Ready to begin your healing journey?
            </Heading>
            <Button
              colorPalette="tealPrimary"
              size="lg"
              onClick={() => navigate("/contact")}
              _hover={{ transform: "translateY(-1px)" }}
              transition="transform 0.2s"
            >
              Schedule an Appointment
            </Button>
          </MotionFlex>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
