import * as types from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

const getInvoices = (payload: any) => {
  return { type: types.GET_INVOICES, payload };
};

const addInvoiceLoading = () => {
  return { type: types.ADD_INVOICE_REQ };
};

const getInvoicesLoading = () => {
  return { type: types.GET_INVOICES_LOADING };
};

const addInvoiceSuccess = (payload: number) => {
  return { type: types.ADD_INVOICE_SUCCESS, payload: payload };
};

const addInvoiceError = () => {
  return { type: types.ADD_INVOICE_FAILURE };
};

const getAllInvoices = () => (dispatch: Dispatch) => {
  //console.log("invoked");
  dispatch(getInvoicesLoading());
  return axios
    .get(`http://localhost:8080/api/v1/invoices/allinvoices`)
    .then((res: AxiosResponse) => {
      console.log(res);
      dispatch(getInvoices(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewInvoice = (data: any) => (dispatch: Dispatch) => {
  dispatch(addInvoiceLoading());

  return axios
    .post(`http://localhost:8080/api/v1/invoices/create`, data)
    .then((res: AxiosResponse) => {
      console.log(res.data);
      const tax = res.data.data.taxAmount;
      console.log("sending tax amount", res.data.data.taxAmount);
      dispatch(addInvoiceSuccess(tax));
    })
    .catch((err) => {
      dispatch(addInvoiceError());
      console.log(err);
    });
};

export {
  getInvoices,
  addInvoiceSuccess,
  addInvoiceError,
  addInvoiceLoading,
  getAllInvoices,
  addNewInvoice,
};
