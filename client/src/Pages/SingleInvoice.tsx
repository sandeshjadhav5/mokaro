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
  console.log("id is", id);

  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [invoices, setInvoices] = useState([]);

  const getSingleInvoiceDetails = () => {
    axios
      .get(`https://ill-tan-gown.cyclic.app/api/v1/invoices/invoices/${id.id}`)
      .then((res) => {
        setInvoiceDetails(res.data.data);
        setInvoices(res.data.invoices);
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
      <div className="mainContent">
        <Box w="26%">
          <Image border="solid #ccc 1px" m="2" />
        </Box>
        <Box w="50%" alignItems="center" alignContent="center" m="2">
          <Text textAlign="left" fontSize="1.5rem">
            {/* Name : - {invoiceDetails && invoiceDetails.customerName} */}
          </Text>
          <br />
          <Text textAlign="left" fontSize="1.5rem">
            {/* Registration Number : - {invoiceDetails && invoiceDetails.emailId} */}
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
      </div>
    </div>
  );
};

export default SingleInvoice;
