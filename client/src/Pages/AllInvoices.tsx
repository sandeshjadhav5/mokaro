import React, { useState, useEffect } from "react";
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
  Heading,
  Box,
} from "@chakra-ui/react";
import { ThunkDispatch } from "redux-thunk";
import { AppState, AppActions } from "../Redux/AppReducer/types";
import Navbar from "../Components/Navbar";
import { store } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getAllInvoices, addNewInvoice } from "../Redux/AppReducer/action";
type RootState = ReturnType<typeof store.getState>;

const AllInvoices = () => {
  const invoices = useSelector(
    (state: RootState) => state.AppReducer.invoices.invoices
  );
  console.log("invoices => ", invoices);
  const dispatch: ThunkDispatch<AppState, any, AppActions> = useDispatch();

  useEffect(() => {
    dispatch(getAllInvoices());
  }, []);
  return (
    <div>
      <Navbar />
      <Heading textAlign="left" m="6" mt="20">
        List of All Invoices
      </Heading>
      <Box>
        <TableContainer m="2">
          <Table size="md" variant="striped" colorScheme="purple">
            <TableCaption>List of All Invoices</TableCaption>
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>Customer Name</Th>
                <Th>Email Id</Th>
                <Th>Address</Th>
                <Th isNumeric>Tax Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoices &&
                invoices.map((el: any, index: number) => (
                  <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{el.customerName}</Td>
                    <Td>{el.emailId}</Td>
                    <Td>{el.address}</Td>
                    <Td isNumeric>₹{el.taxAmount}</Td>
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Total Invoices={invoices && invoices.length}</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default AllInvoices;
