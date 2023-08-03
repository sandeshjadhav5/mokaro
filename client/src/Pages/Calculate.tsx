import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Box,
  Image,
  Button,
  Text,
  Input,
  Select,
} from "@chakra-ui/react";

const Calculate = () => {
  return (
    <div>
      <Navbar />
      <SimpleGrid minChildWidth="220px" m="auto" spacing="20px" p="2">
        <Box>
          <Image src="https://i.imgur.com/8ytqevy.png" />
        </Box>
        <Box border="1px" borderColor="#ccc" p="2">
          <Box boxShadow="lg" p="6" rounded="md">
            <Text textAlign="center" fontWeight="semibold">
              Calculate Tax Amount
            </Text>
            <Text fontWeight="light" mb="4">
              Fill up all the details to check
            </Text>

            <form>
              <Box p="2">
                <Text textAlign="left">Enter Your Name</Text>
                <Input />
              </Box>
              <Box p="2">
                <Text textAlign="left">Address</Text>
                <Input />
              </Box>
              <Box p="2">
                <Text textAlign="left">Email Id</Text>
                <Input />
              </Box>
              <Box p="2">
                <Text textAlign="left">Select Item</Text>
                <Select>
                  <option value="">Select Item Category</option>
                  <option value="Books">Books</option>
                  <option value="Newspapers, magazines, journals and periodicals">
                    Newspapers, magazines, journals and periodicals
                  </option>
                  <option value="Advertising">Advertising</option>
                  <option value="Legal services">Legal services</option>
                  <option value="Education and training services">
                    Education and training services
                  </option>
                  <option value="Health care services">
                    Health care services
                  </option>
                  <option value="Sports and recreational services">
                    Sports and recreational services
                  </option>
                  <option value="Financial services">Financial services</option>
                  <option value="Transport services">Transport services</option>
                  <option value="Accommodation services">
                    Accommodation services
                  </option>
                  <option value="Food and beverages">Food and beverages</option>
                  <option value="Durable goods">Durable goods</option>
                  <option value="Non-durable goods">Non-durable goods</option>
                  <option value="Services relating to supply of goods">
                    Services relating to supply of goods
                  </option>
                  <option value="Works contract services">
                    Works contract services
                  </option>
                  <option value="Miscellaneous services">
                    Miscellaneous services
                  </option>
                </Select>
              </Box>
              <Box p="2">
                <Text textAlign="left">Enter Price</Text>
                <Input />
              </Box>
              <Box p="2">
                <Input bg="green.300" type="submit" />
              </Box>
            </form>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Calculate;
