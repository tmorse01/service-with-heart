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
  useToast,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const toast = useToast();

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
    actions.setSubmitting(false);
    // send email
    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICEID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATEID,
        values,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Form Submitted",
            description: "Your contact form has been submitted successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          console.error(error.text);
          toast({
            title: "Error",
            description: "There was an error submitting the form.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
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
        <Heading as="h5" size="sm">
          332-849-4644 for texts (only) and for use with WhatsApp
        </Heading>
        <Box width={{ base: "100%", lg: "400px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      id="name"
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Name</FormLabel>
                      <Input {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      id="email"
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input type="email" {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="phoneNumber">
                  {({ field, form }) => (
                    <FormControl
                      id="phoneNumber"
                      isRequired
                      isInvalid={
                        form.errors.phoneNumber && form.touched.phoneNumber
                      }
                    >
                      <FormLabel>Phone Number</FormLabel>
                      <Input type="tel" {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="message">
                  {({ field, form }) => (
                    <FormControl
                      id="message"
                      isRequired
                      isInvalid={form.errors.message && form.touched.message}
                    >
                      <FormLabel>Message</FormLabel>
                      <Textarea {...field} />
                    </FormControl>
                  )}
                </Field>

                <Button
                  type="submit"
                  mt={4}
                  colorScheme="teal"
                  isLoading={formikProps.isSubmitting}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
      <Flex mt={8} justifyContent="center">
        {/* Social Links */}
        <Link
          mx={2}
          href="https://www.facebook.com/Spirit.Song.Ministry"
          target="_blank"
        >
          <Icon as={FaFacebookF} boxSize={6} />
        </Link>
        <Link
          mx={2}
          href="https://www.linkedin.com/in/servicewithheart/"
          target="_blank"
        >
          <Icon as={FaLinkedinIn} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Contact;
