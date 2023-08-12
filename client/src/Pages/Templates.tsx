import React from "react";
import Template1 from "../Components/Template1";
import Template2 from "../Components/Template2";
import Navbar from "../Components/Navbar";
import { Heading, Box, Text } from "@chakra-ui/react";

const Templates = () => {
  return (
    <div>
      <Navbar />
      <Heading mt="120px">List of Available Invoice Templates</Heading>
      <Box border="solid #ccc 2px" m="8" p="4">
        <Text fontWeight="40">Template 1</Text>
        <Template1 />
      </Box>
      <Box border="solid #ccc 2px" m="8" p="4">
        <Text fontWeight="40">Template 2</Text>
        <Template2 />
      </Box>
    </div>
  );
};

export default Templates;
