import React from "react";
import { Box, Flex, Stack, Heading, Divider } from "@chakra-ui/react";
import Testimonial from "../shared/Testimonial";
import "./../../App.css";

const testimonials = [
  {
    name: "Susan M.",
    text: "Meredith holds a space of safety and warmth, and I immediately felt the energy flow when she began the work. I felt a sense of peace and balance when she completed, and it continued for several days.",
  },
  {
    name: "Michael R.",
    text: "Meredith brings such warmth and great care to her Integrated Healing Sessions. The session was most enjoyable and her intuitive feedback after the session was accurate and informative.",
  },
  {
    name: "Flora L.",
    text: "I feel blessed and grateful to have experienced Meredith's healing intention and session.  It was deeply relaxing and I felt the presence of Angels working with and through her. Truly a gift!!!",
  },
  {
    name: "Nancy P.",
    text: "I recently saw Meredith for an IET session. I was unfamiliar with the practice, but Meredith’s calm demeanor put me immediately at ease. The time went quickly and I felt very relaxed and peaceful as a result of Meredith’s methods. I would highly recommend this form of healing therapy for anyone who is interested.",
  },
  {
    name: "Lynne B.",
    text: "The session felt nourishing and healing. For days afterward I felt supported by the angelic energies brought in for the session.  Interesting synchronicities affirmed that progress was being made on the specific intentions I set for myself during the session. It started a release of old patterning with a physical condition, and a newfound sense of trust & confidence when approaching things I had previously encountered resistance toward. The session took place a few days before the WHO declared the Corona virus had reached pandemic phase and although there was much fear and concern around me I knew we would get through it by supporting one another and sharing our love and healing energy.",
  },
  {
    name: "Ilona M.",
    text: "I am a 90 year lady who has been struggling with some very uncomfortable abdominal issues for about one month. And I am also dealing with arthritis. Rev. Meredith Murray gave me a 1 hour long energy therapy session a few weeks ago. The results were amazing! My pain and cramps are gone! GONE! My stools are regular now and I have more energy! It is so amazing because I was truly miserable. I could feel the result as soon as a few hours after the therapy session! I will not hesitate one moment to have Meredith give me another therapy session when needed! I, whole-heartedly, recommend this therapy as offered by Rev. Meredith Murray!",
  },
  {
    name: "Joy G.",
    text: "Before the IET session with Meredith my body felt very distressed and fractured. Going through the process my body relaxed to the point where I fell asleep. When I awoke and came out of the session, I felt calm and realigned.",
  },
  {
    name: "Darcy H.",
    text: "Reverend Meredith is a generous, caring, all-inclusive woman healer, who is in touch with the divine. She performed a healing session with me that was so relaxing, introspective and comfortable that I was able to go deep within my being to connect with my spiritual self. At the end she provided me with Archangel Cards to pick from  and it  told me that the Angel had a message for me about my life’s purpose.",
  },
];

const Testimonials = () => {
  return (
    <Box p={10}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
      >
        <Heading as="h2" size="3xl">
          Client Testimonials
        </Heading>
        <Divider />
        <Stack
          spacing={4}
          direction="row"
          flexWrap="wrap"
          align="center"
          justify="center"
        >
          {testimonials.map((item) => (
            <Testimonial name={item.name} text={item.text} />
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};
export default Testimonials;
