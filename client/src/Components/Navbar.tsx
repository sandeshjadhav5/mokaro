import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  children: React.ReactNode;
}

const Links = ["Calculate Your Tax", "Invoices"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box fontWeight="bold">
            <Link to="/">MOKARO</Link>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/calculate">Calculate Your Tax</Link>
            <Link to="/invoices">All Invoices</Link>
            <Link to="/templates">Templates</Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Register</MenuItem>
              <MenuDivider />
              <MenuItem>Login</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link to="/calculate">Calculate Your Tax</Link>
            <Link to="/invoices">All Invoices</Link>
            <Link to="/templates"></Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
