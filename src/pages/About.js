import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex h="full" alignItems="center" justifyContent="center">
      <Box color="white">
        <Text>{"About :)"}</Text>
      </Box>
    </Flex>
  );
};

export default About;
