import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

export default function Template1() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              Invoice
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Total Amount
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Price
                  </Text>{" "}
                  100rs
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    GST:
                  </Text>{" "}
                  5%
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    SAC :
                  </Text>{" "}
                  5
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Quantity
                  </Text>{" "}
                  100
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Tax Amount
                  </Text>{" "}
                  100
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Gross Amount
                  </Text>{" "}
                  5000
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>Purchase</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
