import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { AppState, AppActions } from "../Redux/AppReducer/types";
import Template1 from "../Components/Template1";

import {
  SimpleGrid,
  Box,
  Image,
  Button,
  Text,
  Input,
  Select,
} from "@chakra-ui/react";
import {
  getAllInvoices,
  addNewInvoice,
  addInvoiceLoading,
  changeInvoiceTemplate,
} from "../Redux/AppReducer/action";
import { store } from "../Redux/store";
import Template2 from "../Components/Template2";

interface Item {
  itemName: string;
  quantity: number;
  rate: number;
}

type RootState = ReturnType<typeof store.getState>;

const Calculate = () => {
  const [customerName, setCustomerName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [emailId, setEmailId] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [rate, setRate] = useState<number>(1);

  //for selecting template
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const dispatch: ThunkDispatch<AppState, any, AppActions> = useDispatch();

  const invoices = useSelector((state: RootState) => state.AppReducer.invoices);
  const checkTaxLoading = useSelector(
    (state: RootState) => state.AppReducer.addInvoiceLoading
  );
  const taxAmount = useSelector(
    (state: RootState) => state.AppReducer.taxAmount
  );

  //console.log("taxAmount", taxAmount);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue, 10);
    setQuantity(numericValue);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseFloat(inputValue);
    setRate(numericValue);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemName(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newItem: Item = {
      itemName: itemName,
      quantity: quantity,
      rate: rate,
    };
    //console.log("Previous items:", items);
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    //console.log("Updated items:", items);

    const payload = {
      customerName,
      address,
      emailId,
      items: updatedItems,
    };

    console.log(payload);
    if (payload) {
      dispatch(addNewInvoice(payload));
      setCustomerName("");
      setAddress("");
      setEmailId("");
      setItems([]);
    }
  };

  //handleTemplate change function
  const handleTemplateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newTemplate = event.target.value;
    setSelectedTemplate(newTemplate);
    // dispatch(changeInvoiceTemplate(selectedTemplate));
  };

  useEffect(() => {
    dispatch(getAllInvoices());
  }, []);
  useEffect(() => {}, [taxAmount]);
  return (
    <div>
      <Navbar />
      <SimpleGrid minChildWidth="220px" m="auto" spacing="20px" p="2" mt="14">
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

            <form onSubmit={handleFormSubmit}>
              <Box p="2">
                <Text textAlign="left">Enter Your Name</Text>
                <Input
                  required
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter Name"
                />
              </Box>
              <Box p="2">
                <Text textAlign="left">Address</Text>
                <Input
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address Details"
                />
              </Box>
              <Box p="2">
                <Text textAlign="left">Email Id</Text>
                <Input
                  required
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="Enter Email Id"
                />
              </Box>
              <Box p="2">
                <Text textAlign="left">Select Item Category</Text>
                <Select
                  required
                  onChange={handleSelectChange}
                  value={itemName}
                  placeholder="Select Item Category"
                >
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
                <Text textAlign="left">Quantity</Text>
                <Input
                  required
                  onChange={handleQuantityChange}
                  value={quantity.toString()}
                  placeholder="Enter Quantity"
                  type="number"
                />
              </Box>
              <Box p="2">
                <Text textAlign="left">Enter Price</Text>
                <Input
                  required
                  onChange={handleRateChange}
                  value={rate.toString()}
                  placeholder="Enter Price"
                  type="number"
                />
              </Box>
              <Box p="2">
                <Input
                  bg="green.300"
                  fontWeight="bold"
                  type="submit"
                  _hover={{ bg: "green.500", cursor: "pointer" }}
                  value={checkTaxLoading ? "Checking...." : "Check Tax"}
                />
              </Box>
            </form>
            {taxAmount !== 0 && (
              <Heading>Estimated Tax is {taxAmount} ₹</Heading>
            )}
          </Box>
        </Box>
      </SimpleGrid>
      <Box m="8">
        <Text>Select Template for Invoice</Text>
        <Select value={selectedTemplate} onChange={handleTemplateChange}>
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
          {/* Add more options for other templates */}
        </Select>
      </Box>

      {/* <Template1 />
      <Template2 /> */}
    </div>
  );
};

export default Calculate;
