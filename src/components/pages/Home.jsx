import React from "react";
import { Button } from "@chakra-ui/react";
import HeartLogo from "../../assets/Heart_logo.jpg";
import PurpleFlower from "../../assets/purpleflower.jpg";
import "./../../App.css";
const Home = () => {
  return (
    <div className="home-page">
      <img className="logo" src={HeartLogo} alt="Heart Logo" />
      <img className="flower" src={PurpleFlower} alt="Purple Flower" />
      <Button colorScheme="teal">Schedule an Appointment</Button>
    </div>
  );
};

export default Home;
