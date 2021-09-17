import { useColorModeValue, Box, Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

const EightBall = () => {
  const color = useColorModeValue("black", "white");

  const [answer, setAnswer] = useState("");

  const randomGen = () => {
    return Math.floor(Math.random() * answers.length);
  };

  const handleShake = () => {
    setAnswer(answers[randomGen()]);
  };

  const BoxFrame = ({ children }) => {
    return (
      <Box p={5} w="xs" shadow="md" borderWidth="1px" flex="1" borderRadius="md" bgColor="gray.900" color="white">
        {children}
      </Box>
    );
  };

  return (
    <Flex h="full" alignItems="center" justifyContent="center">
      <Stack>
        <BoxFrame>
          <Stack>
            <Center>
              <Heading>Eight Ball</Heading>
            </Center>
            <Button color={color} onClick={handleShake}>
              Shake
            </Button>
            <Center>
              <Text>{answer}</Text>
            </Center>
          </Stack>
        </BoxFrame>
      </Stack>
    </Flex>
  );
};

export default EightBall;
