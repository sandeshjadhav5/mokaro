import React from "react";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            MOKARO <br />
            <Text as={"span"} color={"green.400"}>
              A Billing Platform
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Generate Invoices, Customize Templates, and Handle Email
            communication.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              Sign Up with MOKARO
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Home;
