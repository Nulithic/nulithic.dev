import { Box, Flex, Text, HStack, SimpleGrid, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  // const [currentTime, setCurrentTime] = useState("");

  const [firstColumn, setFirstColumn] = useState([...Array(5).fill(null)]);
  const [secondColumn, setSecondColumn] = useState([...Array(7).fill(null)]);
  const [thirdColumn, setThirdColumn] = useState([...Array(11).fill(null)]);
  const [fourthColumn, setFourthColumn] = useState([...Array(19).fill(null)]);
  const [fifthColumn, setFifthColumn] = useState([...Array(11).fill(null)]);
  const [sixthColumn, setSixthColumn] = useState([...Array(19).fill(null)]);

  const handleFirst = (sec) => {
    const firstDigit = [0, 1, 2];
    switch (sec) {
      case "0":
        firstDigit.unshift(null, null);
        setFirstColumn(firstDigit);
        break;
      case "1":
        firstDigit.unshift(null);
        firstDigit.push(null);
        setFirstColumn(firstDigit);
        break;
      case "2":
        firstDigit.push(null, null);
        setFirstColumn(firstDigit);
        break;
      default:
        break;
    }
  };

  const handleSecond = (sec) => {
    const secondDigit = [0, 1, 2, 3];
    switch (sec) {
      case "0":
        secondDigit.unshift(null, null, null);
        setSecondColumn(secondDigit);
        break;
      case "1":
        secondDigit.unshift(null, null);
        secondDigit.push(null);
        setSecondColumn(secondDigit);
        break;
      case "2":
        secondDigit.unshift(null);
        secondDigit.push(null, null, null);
        setSecondColumn(secondDigit);
        break;
      case "3":
        secondDigit.push(null, null, null);
        setSecondColumn(secondDigit);
        break;
      default:
        break;
    }
  };

  const handleThird = (sec) => {
    const thirdDigit = [0, 1, 2, 3, 4, 5];
    switch (sec) {
      case "0":
        thirdDigit.unshift(null, null, null, null, null);
        setThirdColumn(thirdDigit);
        break;
      case "1":
        thirdDigit.unshift(null, null, null, null);
        thirdDigit.push(null);
        setThirdColumn(thirdDigit);
        break;
      case "2":
        thirdDigit.unshift(null, null, null);
        thirdDigit.push(null, null);
        setThirdColumn(thirdDigit);
        break;
      case "3":
        thirdDigit.unshift(null, null);
        thirdDigit.push(null, null, null);
        setThirdColumn(thirdDigit);
        break;
      case "4":
        thirdDigit.unshift(null);
        thirdDigit.push(null, null, null, null);
        setThirdColumn(thirdDigit);
        break;
      case "5":
        thirdDigit.push(null, null, null, null, null);
        setThirdColumn(thirdDigit);
        break;
      default:
        break;
    }
  };

  const handleFourth = (sec) => {
    const fourthDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    switch (sec) {
      case "0":
        fourthDigit.unshift(null, null, null, null, null, null, null, null, null);
        setFourthColumn(fourthDigit);
        break;
      case "1":
        fourthDigit.unshift(null, null, null, null, null, null, null, null);
        fourthDigit.push(null);
        setFourthColumn(fourthDigit);
        break;
      case "2":
        fourthDigit.unshift(null, null, null, null, null, null, null);
        fourthDigit.push(null, null);
        setFourthColumn(fourthDigit);
        break;
      case "3":
        fourthDigit.unshift(null, null, null, null, null, null);
        fourthDigit.push(null, null, null);
        setFourthColumn(fourthDigit);
        break;
      case "4":
        fourthDigit.unshift(null, null, null, null, null);
        fourthDigit.push(null, null, null, null);
        setFourthColumn(fourthDigit);
        break;
      case "5":
        fourthDigit.unshift(null, null, null, null);
        fourthDigit.push(null, null, null, null, null);
        setFourthColumn(fourthDigit);
        break;
      case "6":
        fourthDigit.unshift(null, null, null);
        fourthDigit.push(null, null, null, null, null, null);
        setFourthColumn(fourthDigit);
        break;
      case "7":
        fourthDigit.unshift(null, null);
        fourthDigit.push(null, null, null, null, null, null, null);
        setFourthColumn(fourthDigit);
        break;
      case "8":
        fourthDigit.unshift(null);
        fourthDigit.push(null, null, null, null, null, null, null, null);
        setFourthColumn(fourthDigit);
        break;
      case "9":
        fourthDigit.push(null, null, null, null, null, null, null, null, null);
        setFourthColumn(fourthDigit);
        break;
      default:
        break;
    }
  };

  const handleFifth = (sec) => {
    const fifthDigit = [0, 1, 2, 3, 4, 5];
    switch (sec) {
      case "0":
        fifthDigit.unshift(null, null, null, null, null);
        setFifthColumn(fifthDigit);
        break;
      case "1":
        fifthDigit.unshift(null, null, null, null);
        fifthDigit.push(null);
        setFifthColumn(fifthDigit);
        break;
      case "2":
        fifthDigit.unshift(null, null, null);
        fifthDigit.push(null, null);
        setFifthColumn(fifthDigit);
        break;
      case "3":
        fifthDigit.unshift(null, null);
        fifthDigit.push(null, null, null);
        setFifthColumn(fifthDigit);
        break;
      case "4":
        fifthDigit.unshift(null);
        fifthDigit.push(null, null, null, null);
        setFifthColumn(fifthDigit);
        break;
      case "5":
        fifthDigit.push(null, null, null, null, null);
        setFifthColumn(fifthDigit);
        break;
      default:
        break;
    }
  };

  const handleSixth = (sec) => {
    const sixthDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    switch (sec) {
      case "0":
        sixthDigit.unshift(null, null, null, null, null, null, null, null, null);
        setSixthColumn(sixthDigit);
        break;
      case "1":
        sixthDigit.unshift(null, null, null, null, null, null, null, null);
        sixthDigit.push(null);
        setSixthColumn(sixthDigit);
        break;
      case "2":
        sixthDigit.unshift(null, null, null, null, null, null, null);
        sixthDigit.push(null, null);
        setSixthColumn(sixthDigit);
        break;
      case "3":
        sixthDigit.unshift(null, null, null, null, null, null);
        sixthDigit.push(null, null, null);
        setSixthColumn(sixthDigit);
        break;
      case "4":
        sixthDigit.unshift(null, null, null, null, null);
        sixthDigit.push(null, null, null, null);
        setSixthColumn(sixthDigit);
        break;
      case "5":
        sixthDigit.unshift(null, null, null, null);
        sixthDigit.push(null, null, null, null, null);
        setSixthColumn(sixthDigit);
        break;
      case "6":
        sixthDigit.unshift(null, null, null);
        sixthDigit.push(null, null, null, null, null, null);
        setSixthColumn(sixthDigit);
        break;
      case "7":
        sixthDigit.unshift(null, null);
        sixthDigit.push(null, null, null, null, null, null, null);
        setSixthColumn(sixthDigit);
        break;
      case "8":
        sixthDigit.unshift(null);
        sixthDigit.push(null, null, null, null, null, null, null, null);
        setSixthColumn(sixthDigit);
        break;
      case "9":
        sixthDigit.push(null, null, null, null, null, null, null, null, null);
        setSixthColumn(sixthDigit);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    var formatter = "HH:mm:ss";
    var time = moment().format(formatter);

    var tick = setInterval(() => {
      handleFirst(time.charAt(0));
      handleSecond(time.charAt(1));
      handleThird(time.charAt(3));
      handleFourth(time.charAt(4));
      handleFifth(time.charAt(6));
      handleSixth(time.charAt(7));
    }, 1000);
    return function clear() {
      clearInterval(tick);
    };
  });

  const GridContainer = ({ children }) => {
    return <SimpleGrid spacing={2}>{children}</SimpleGrid>;
  };

  const DigitBox = ({ item }) => {
    return (
      <Center w=".5rem" h="2rem">
        <Text fontSize="2xl">{item}</Text>
      </Center>
    );
  };

  return (
    <Flex h="full" alignItems="center" justifyContent="center">
      <Box p={5} w="10rem" shadow="md" borderWidth="2px" flex="1" borderRadius="md" pos="absolute" textAlign="center" />
      <HStack>
        <GridContainer>
          {firstColumn.map((item, i) => (
            <DigitBox key={i} item={item} />
          ))}
        </GridContainer>

        <GridContainer>
          {secondColumn.map((item, k) => (
            <DigitBox key={k} item={item} />
          ))}
        </GridContainer>

        <GridContainer>
          <Text>:</Text>
        </GridContainer>

        <GridContainer>
          {thirdColumn.map((item, j) => (
            <DigitBox key={j} item={item} />
          ))}
        </GridContainer>

        <GridContainer>
          {fourthColumn.map((item, q) => (
            <DigitBox key={q} item={item} />
          ))}
        </GridContainer>

        <GridContainer>
          <Text>:</Text>
        </GridContainer>

        <GridContainer>
          {fifthColumn.map((item, w) => (
            <DigitBox key={w} item={item} />
          ))}
        </GridContainer>

        <GridContainer>
          {sixthColumn.map((item, e) => (
            <DigitBox key={e} item={item} />
          ))}
        </GridContainer>
      </HStack>
    </Flex>
  );
};

export default Clock;
