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
        console.log("i n v o i c e s ", res.data);
        setInvoiceData(res.data.invoices);
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
            {invoiceData &&
              invoiceData.map((el: any, index: number) => (
                <Tr key={el._id}>
                  {" "}
                  <Td>
                    <Link to={`/invoices/${el._id}`}>{index + 1} </Link>
                  </Td>
                  <Td>
                    <Link to={`/invoices/${el._id}`}>{el.customerName}</Link>
                  </Td>
                  <Td>
                    <Link to={`/invoices/${el._id}`}>{el.emailId}</Link>
                  </Td>
                  <Td>
                    <Link to={`/invoices/${el._id}`}>{el.address}</Link>
                  </Td>
                  <Td isNumeric>₹{el.taxAmount}</Td>{" "}
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total Invoices={invoiceData && invoiceData.length}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default InvoiceList;
