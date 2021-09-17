import React, { useState } from "react";
import { Box, Text, Link, Flex, Stack, useColorModeValue, Image } from "@chakra-ui/react";
import { VscClose, VscMenu } from "react-icons/vsc";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import LogoIcon from "../assets/logo192.png";

const Navbar = ({ body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  const toggle = () => setIsOpen(!isOpen);

  const MenuToggle = () => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle} boxSize={35}>
        {isOpen ? <VscClose size={35} /> : <VscMenu size={35} />}
      </Box>
    );
  };

  const Logo = () => {
    return (
      <Link href="/">
        <Stack direction="row">
          <Image borderRadius="full" boxSize="45px" src={LogoIcon} />
          <Text fontSize="3xl" fontWeight="bold">
            Nulithic
          </Text>
        </Stack>
      </Link>
    );
  };

  const MenuItem = ({ children, to }) => {
    return (
      <Link href={to}>
        <Text display="block">{children}</Text>
      </Link>
    );
  };

  const MenuLinks = () => {
    return (
      <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack
          spacing={8}
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/Projects">Projects</MenuItem>
          <MenuItem to="/About">About Me</MenuItem>
          <MenuItem to="/Contact">Contact</MenuItem>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Stack>
      </Box>
    );
  };

  const NavBarContainer = ({ children }) => {
    return (
      <Flex
        as="nav"
        pos="fixed"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={4}
        bg={bg}
        color={color}
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
