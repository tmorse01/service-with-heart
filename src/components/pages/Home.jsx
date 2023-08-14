import React from "react";
import { Button } from "@chakra-ui/react";
import HeartLogo from "../../assets/Heart_logo.jpg";
import "./../../App.css";
const Home = () => {
  return (
    <div>
      <img className="logo" src={HeartLogo} alt="Heart Logo" />
      <Button colorScheme="teal">Schedule an Appointment</Button>
    </div>
  );
};

export default Home;
