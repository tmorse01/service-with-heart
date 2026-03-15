import React, { useState } from "react";
import {
  Box,
  Button,
  Field as ChakraField,
  Input,
  Textarea,
  Heading,
  Flex,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

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
          setSubmitStatus("success");
        },
        (error) => {
          console.error(error.text);
          setSubmitStatus("error");
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
        <Heading as="h1" size="3xl">
          Rev. Meredith Ann Murray, M. Div.
        </Heading>
        <Heading as="h2" size="xl">
          Ajijic, Jalisco, Mexico
        </Heading>
        <Heading as="h3" size="lg">
          Hours
        </Heading>
        <Text lineHeight="tall" color="fg.muted">Monday - Sunday: 9am - 9pm</Text>
        <Text fontWeight="semibold" fontSize="md">
          332-849-4644 for texts (only) and for use with WhatsApp
        </Text>
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
                    <ChakraField.Root
                      id="name"
                      required
                      invalid={form.errors.name && form.touched.name}
                    >
                      <ChakraField.Label>Name</ChakraField.Label>
                      <Input {...field} />
                      {form.errors.name && form.touched.name && (
                        <ChakraField.ErrorText>{form.errors.name}</ChakraField.ErrorText>
                      )}
                    </ChakraField.Root>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <ChakraField.Root
                      id="email"
                      required
                      invalid={form.errors.email && form.touched.email}
                    >
                      <ChakraField.Label>Email</ChakraField.Label>
                      <Input type="email" {...field} />
                      {form.errors.email && form.touched.email && (
                        <ChakraField.ErrorText>{form.errors.email}</ChakraField.ErrorText>
                      )}
                    </ChakraField.Root>
                  )}
                </Field>

                <Field name="phoneNumber">
                  {({ field, form }) => (
                    <ChakraField.Root
                      id="phoneNumber"
                      required
                      invalid={
                        form.errors.phoneNumber && form.touched.phoneNumber
                      }
                    >
                      <ChakraField.Label>Phone Number</ChakraField.Label>
                      <Input type="tel" {...field} />
                      {form.errors.phoneNumber && form.touched.phoneNumber && (
                        <ChakraField.ErrorText>{form.errors.phoneNumber}</ChakraField.ErrorText>
                      )}
                    </ChakraField.Root>
                  )}
                </Field>

                <Field name="message">
                  {({ field, form }) => (
                    <ChakraField.Root
                      id="message"
                      required
                      invalid={form.errors.message && form.touched.message}
                    >
                      <ChakraField.Label>Message</ChakraField.Label>
                      <Textarea {...field} />
                      {form.errors.message && form.touched.message && (
                        <ChakraField.ErrorText>{form.errors.message}</ChakraField.ErrorText>
                      )}
                    </ChakraField.Root>
                  )}
                </Field>

                {submitStatus === "success" && (
                  <Text color="green.600" mt={2}>
                    Form submitted successfully!
                  </Text>
                )}
                {submitStatus === "error" && (
                  <Text color="red.600" mt={2}>
                    There was an error submitting the form.
                  </Text>
                )}

                <Button
                  type="submit"
                  mt={4}
                  colorPalette="tealPrimary"
                  loading={formikProps.isSubmitting}
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
