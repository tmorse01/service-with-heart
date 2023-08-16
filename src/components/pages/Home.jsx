import React from "react";
import { Button, Heading, Stack } from "@chakra-ui/react";
import HeartLogo from "../../assets/Heart_logo.jpg";
import PurpleFlower from "../../assets/purpleflower.jpg";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Heading as="h4" size="md">
        Welcome!
      </Heading>
      <Heading as="h3" size="3xl" noOfLines={1}>
        Rev. Meredith Ann Murray
      </Heading>
      <Heading as="h4" size="lg" noOfLines={1}>
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
      <img className="logo" src={HeartLogo} alt="Heart Logo" />
      <img className="flower" src={PurpleFlower} alt="Purple Flower" />
    </div>
  );
};

export default Home;
