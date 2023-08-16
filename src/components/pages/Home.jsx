import React from "react";
import {
  Flex,
  Button,
  Heading,
  Image,
  Stack,
  useTheme,
} from "@chakra-ui/react";
import HeartLogo from "../../assets/Heart_logo.jpg";
import PurpleFlower from "../../assets/purpleflower.jpg";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Flex
      className="home-page"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
    >
      <Heading as="h4" size="md">
        Welcome!
      </Heading>
      <Heading as="h3" size="3xl">
        Rev. Meredith Ann Murray
      </Heading>
      <Heading as="h4" size="lg">
        Integrated Energy Therapy Advanced Level Practitioner
      </Heading>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" onClick={(e) => navigate("/contact")}>
          Schedule an Appointment
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={(e) => navigate("/iet")}
        >
          Find Out More
        </Button>
      </Stack>
      <Image
        objectFit="cover"
        objectPosition="center"
        width={{ base: "200px", md: "300px", lg: "500px" }}
        src={HeartLogo}
        alt="Heart Logo"
      />
      <Image
        objectFit="cover"
        objectPosition="center"
        width={{ base: "400px", md: "600px", lg: "800px" }}
        src={PurpleFlower}
        alt="Purple Flower"
      />
    </Flex>
  );
};

export default Home;
