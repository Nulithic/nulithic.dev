import {
  Box,
  useDisclosure,
  useColorModeValue,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { getSimple, getFauna } from "../routes/getData";
import { postSimple, postFauna } from "../routes/postData";

const APITest = () => {
  const color = useColorModeValue("black", "white");

  const [data, setData] = useState({ firstData: "", secondData: "", password: "" });
  const [message, setMessage] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const BoxFrame = ({ children }) => {
    return (
      <Box p={5} w="xs" shadow="md" borderWidth="1px" flex="1" borderRadius="md" bgColor="gray.900" color="white">
        {children}
      </Box>
    );
  };

  const inputArea = () => {
    return (
      <BoxFrame>
        <Stack spacing="5">
          <Center>
            <Heading>API Test</Heading>
          </Center>
          <SimpleGrid>
            <Input
              placeholder="firstData"
              value={data.firstData}
              onChange={(e) => setData({ ...data, firstData: e.target.value })}
            />
            <Input
              placeholder="secondData"
              value={data.secondData}
              onChange={(e) => setData({ ...data, secondData: e.target.value })}
            />
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={5} color={color}>
            <Button onClick={async () => setMessage(await getSimple())}>Get Simple</Button>
            <Button onClick={async () => setMessage(await postSimple(data))}>Post Simple</Button>
            <Button onClick={async () => setMessage(await getFauna())}>Get Fauna</Button>
            <Button
              onClick={() => {
                setData({ ...data, password: "" });
                onOpen();
              }}
            >
              Post Fauna
            </Button>
          </SimpleGrid>
        </Stack>
      </BoxFrame>
    );
  };

  const postDialog = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                autoFocus
                type="password"
                placeholder="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="green"
                onClick={async () => {
                  onClose();
                  setMessage(await postFauna(data));
                }}
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    );
  };

  const DisplayData = () => {
    return message.map((value, i) => {
      if (value.data) {
        return (
          <BoxFrame>
            <Center>
              <Stack>
                <Text>firstData: {value.data.firstData}</Text>
                <Text>secondData: {value.data.secondData}</Text>
              </Stack>
            </Center>
          </BoxFrame>
        );
      } else {
        return (
          <BoxFrame>
            <Center>
              <Stack>
                <Text>firstData: {value.firstData}</Text>
                <Text>secondData: {value.secondData}</Text>
              </Stack>
            </Center>
          </BoxFrame>
        );
      }
    });
  };

  return (
    <Stack spacing={5}>
      {inputArea()}
      {postDialog()}
      <BoxFrame>
        <Center>
          <Text>Data Length: {message.length}</Text>
        </Center>
      </BoxFrame>

      <DisplayData />
    </Stack>
  );
};

export default APITest;
