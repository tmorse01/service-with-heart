import { useState } from "react";
import { Box, Avatar, Text, Flex, Button } from "@chakra-ui/react";

const TRUNCATE_LENGTH = 220;
const CARD_MIN_HEIGHT = 260;

const Testimonial = ({ name, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > TRUNCATE_LENGTH;

  return (
    <Box
      p={6}
      borderWidth={1}
      borderLeftWidth="4px"
      borderLeftColor="accent.muted"
      borderRadius="lg"
      boxShadow="lg"
      maxW={{ base: "100%", sm: "400px" }}
      minH={`${CARD_MIN_HEIGHT}px`}
      bg="bg.default"
      display="flex"
      flexDirection="column"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "xl",
      }}
    >
      <Flex align="center" flexShrink={0}>
        <Avatar size="md" name={name} />
        <Text ml={3} fontWeight="bold">
          {name}
        </Text>
      </Flex>
      <Text
        mt={3}
        flex="1 1 auto"
        minH={0}
        fontStyle="italic"
        quotes={'" "'}
        fontSize="sm"
        lineHeight="tall"
        color="fg.muted"
        noOfLines={isExpanded ? undefined : 4}
        overflow={isExpanded ? "visible" : "hidden"}
      >
        {text}
      </Text>
      {isLong && (
        <Button
          size="sm"
          variant="link"
          colorScheme="teal"
          mt={3}
          flexShrink={0}
          alignSelf="flex-start"
          onClick={() => setIsExpanded((e) => !e)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      )}
    </Box>
  );
};

export default Testimonial;
