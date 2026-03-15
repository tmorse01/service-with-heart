import React from "react";
import { Box, Flex, Separator, Heading, Text, Image } from "@chakra-ui/react";
import "./../../App.css";
const About = () => {
  return (
    <Box p={[8, 8, 24]}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
      >
        <Heading as="h1" size="3xl">
          About Meredith
        </Heading>
        <Separator />
        <Image
          objectFit="cover"
          objectPosition="center"
          borderRadius="full"
          width={{ base: "200px", md: "300px", lg: "400px" }}
          src={"/MeredithHeadshot2.jpg"}
          alt="Headshot"
        />
        <Heading as="h2" size="xl">
          Rev. Meredith Ann Murray Bio
        </Heading>
        <Text className="bio-text" lineHeight="tall" color="fg.muted">
          Meredith was raised in New England and graduated from the University
          of New Hampshire with a Bachelor’s Degree in Elementary Education.
          After living in Europe for a year, she moved to the Peninsula south of
          San Francisco for 19 years. She has traveled extensively in the United
          States, Europe, and Asia.
        </Text>
        <Text className="bio-text" lineHeight="tall" color="fg.muted">
          She treasures her two sons Christopher (1983) and Taylor (1994) who
          live in Bellingham, WA, where Meredith lived for 25 years.
        </Text>
        <Text className="bio-text" lineHeight="tall" color="fg.muted">
          For over 20 years in 3 states, Meredith worked in the Real Estate
          Industry as an administrator, personal assistant, and then as a full
          time Licensed Real Estate Broker for over 16 years.
        </Text>
        <Text className="bio-text" lineHeight="tall" color="fg.muted">
          Meredith's passion is Peace. In 2006 she earned a Masters in Divinity
          after a 2-year seminary program and has been an ordained Interfaith
          Minister of Spiritual Peacemaking ever since. She officiates at
          weddings, conducts memorial services, and is an Advanced Level
          Integrated Energy Therapy Practitioner.
        </Text>
        <Text className="bio-text" lineHeight="tall" color="fg.muted">
          Meredith's hobbies and interests include: decorating, baking, camping,
          hiking, bicycling, dancing, live music (especially Jazz!), travel,
          community volunteering and promoting world peace -- mainly through
          inner peace.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
