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
import InvoiceList from "../Components/InvoiceList";
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
        <InvoiceList />
      </Box>
    </div>
  );
};

export default AllInvoices;
