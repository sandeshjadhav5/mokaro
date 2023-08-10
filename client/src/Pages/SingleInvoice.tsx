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
import Navbar from "../Components/Navbar";
import PDFDocument from "../Components/PDFDocument";
import { PDFViewer } from "@react-pdf/renderer";

const SingleInvoice = () => {
  const id = useParams();
  console.log("id is", id);

  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [invoices, setInvoices] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [tax, setTax] = useState();

  const getSingleInvoiceDetails = () => {
    axios
      .get(`https://ill-tan-gown.cyclic.app/api/v1/invoices/invoices/${id.id}`)
      .then((res) => {
        setInvoiceDetails(res.data.data);
        setInvoices(res.data.invoices);
        setCustomerName(res.data.data.customerName);
        setEmailId(res.data.data.emailId);
        setTax(res.data.data.taxAmount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("invoiceDetails", invoiceDetails);
  useEffect(() => {
    getSingleInvoiceDetails();
  }, []);
  return (
    <div>
      <Navbar />

      <Box mt="20" mb="10">
        <Box
          w="50%"
          border="1px"
          borderColor="#ccc"
          p="2"
          alignItems="center"
          m="auto"
          alignContent="center"
        >
          <Text fontSize="2rem">Invoice Details</Text>
          <Text textAlign="left" fontSize="1.5rem">
            Customer Name : {customerName}
          </Text>
          <br />
          <Text textAlign="left" fontSize="1.5rem">
            Email Id : {emailId}
          </Text>
          <br />
          <Text textAlign="left" fontSize="1.5rem">
            Tax : {tax}
          </Text>
          <br />
        </Box>
      </Box>

      <Box w="80%" m="auto">
        <PDFViewer width="100%">
          <PDFDocument />
        </PDFViewer>
      </Box>
    </div>
  );
};

export default SingleInvoice;
