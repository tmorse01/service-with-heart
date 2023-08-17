import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Flex,
  Text,
  Link,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, actions) => {
    // Simulate API call here
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Box p={[8, 8, 24]}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
      >
        <Heading as="h2" size="3xl">
          Rev. Meredith Ann Murray, M. Div.
        </Heading>
        <Heading as="h3" size="xl">
          Ajijic, Jalisco, Mexico
        </Heading>
        <Heading as="h3" size="xl">
          Hours
        </Heading>
        <Text>Monday - Sunday: 9am - 9pm</Text>
        <Box width={{ base: "100%", lg: "400px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack>
                  <FormControl id="name" mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input as={Field} name="name" placeholder="Name" />
                  </FormControl>
                  <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      as={Field}
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormControl id="phoneNumber" mb={4}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      as={Field}
                      name="phoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </FormControl>
                  <FormControl id="message" mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea as={Field} name="message" placeholder="Message" />
                  </FormControl>

                  <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                    isLoading={isSubmitting}
                    leftIcon={<EmailIcon />}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
      <Flex mt={8} justifyContent="center">
        {/* Social Links */}
        <Link mx={2} href="https://www.facebook.com/" target="_blank">
          <Icon as={FaFacebookF} boxSize={6} />
        </Link>
        <Link mx={2} href="https://www.instagram.com/" target="_blank">
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
        <Link mx={2} href="https://www.linkedin.com/" target="_blank">
          <Icon as={FaLinkedinIn} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Contact;
