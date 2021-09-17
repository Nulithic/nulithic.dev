import { Box, Heading, Text, SimpleGrid, Link, Flex } from "@chakra-ui/react";
import React from "react";

const projects = [
  { Title: "API Test", Link: "APITest", Desc: "Simple API test - Local and Server side" },
  { Title: "Magic 8 Ball", Link: "EightBall", Desc: "Fortune Teller" },
  { Title: "Clock", Link: "Clock", Desc: "Fancy Clock" },
];

const Projects = () => {
  const Item = ({ title, link, desc }) => {
    return (
      <Link href={`/Projects/${link}`}>
        <Box p={5} w="xs" shadow="md" borderWidth="1px" flex="1" borderRadius="md" bgColor="gray.900" color="white">
          <Heading fontSize="xl">{title}</Heading>
          <Text mt={4}>{desc}</Text>
        </Box>
      </Link>
    );
  };

  const ProjectList = () => {
    return projects.map((item, i) => <Item title={item.Title} link={item.Link} desc={item.Desc} />);
  };

  return (
    <Flex justifyContent="center">
      <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} gap={5}>
        <ProjectList />
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
