import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllInvoices } from "../Redux/AppReducer/action";

import { Link } from "react-router-dom";
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
  Box,
} from "@chakra-ui/react";
import { store } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
type RootState = ReturnType<typeof store.getState>;
const InvoiceList = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const dispatch = useDispatch();
  // const studentId = JSON.parse(localStorage.getItem("studentId")) || "";
  const navigate = useNavigate();

  const getInvoices = () => {
    axios
      .get(`https://ill-tan-gown.cyclic.app/api/v1/invoices/allinvoices`)
      .then((res) => {
        console.log(res.data);
        setInvoiceData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getInvoices();
  }, []);
  return (
    <>
      {/* {invoiceData &&
        invoiceData.map((el) => (
          <Tr
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "black",
            }}
          >
            <Td>
              <Link to={`/attendance/el.id`}> </Link>
            </Td>
            <Td>
              <Link to={`/attendance/el.id`}> </Link>
            </Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        ))} */}
    </>
  );
};

export default InvoiceList;

{
  /* <TableContainer m="2">
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
        </TableContainer> */
}
