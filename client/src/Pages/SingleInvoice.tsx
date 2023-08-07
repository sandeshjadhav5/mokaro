import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Image, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const SingleInvoice = () => {
  const id = useParams();

  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [invoices, setInvoices] = useState([]);

  const getSingleInvoiceDetails = () => {
    axios
      .get(`https://ill-tan-gown.cyclic.app/api/v1/invoices/invoices/${id}`)
      .then((res) => {
        setInvoiceDetails(res.data);
        setInvoices(res.data.invoices);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleInvoiceDetails();
  }, []);
  return (
    <div>
      <div className="mainContent">
        <Box
          borderBottom="solid #ccc 3px"
          display="flex"
          m="auto"
          justifyContent="space-between"
        >
          <Box w="26%">
            <Image alt="Student Img" border="solid #ccc 1px" m="2" />
          </Box>
          <Box w="50%" alignItems="center" alignContent="center" m="2">
            <Text textAlign="left" fontSize="1.5rem">
              Name : -
            </Text>
            <br />
            <Text textAlign="left" fontSize="1.5rem">
              Registration Number : -
            </Text>
            <br />
            <Text textAlign="left" fontSize="1.5rem">
              Mobile Number : -
            </Text>
            <br />
            <Text textAlign="left" fontSize="1.5rem">
              Year : -
            </Text>
          </Box>
        </Box>
        <Box mt="2">
          <Text fontSize="1.5rem">Attendance Report</Text>

          <TableContainer border="solid #ccc 1px">
            <Table size="lg" variant="striped" colorScheme="green">
              <TableCaption> Details</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Attendance in %</Th>
                  <Th>Total Lectures</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* {invoices &&
                  invoices.map((el) => (
                    <Tr
                      key={el._id}
                      _hover={{
                        background: "white",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      <Td>{el.name}</Td>
                      <Td>{el.attendence_percentage} %</Td>
                      <Td>{el.lectures.length}</Td>

                      <Td></Td>
                    </Tr>
                  ))} */}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default SingleInvoice;
