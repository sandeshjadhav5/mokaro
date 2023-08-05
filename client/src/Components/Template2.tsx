import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Template2() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Invoice</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Item Details
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <VStack align={"start"}>
            <Text fontWeight={600}>
              <Icon as={CheckIcon} />
              Price : 100rs
            </Text>
            <Text color={"gray.600"}>
              <Icon as={CheckIcon} />
              GST: 5%
            </Text>
            <Text color={"gray.600"}>
              <Icon as={CheckIcon} /> Gross Amount 5000
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
