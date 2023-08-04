export interface Invoice {
  id: string;
  customerName: string;
  address: string;
  emailId: string;
  items: Item[];
  taxAmount: number;
}

export interface Item {
  itemName: string;
  quantity: number;
  rate: number;
  taxPercentage: number;
  sacCode: string;
}

export interface AppState {
  invoices: Invoice[]; // An array of invoices in the state
  isLoading: boolean; // Indicates if data is loading
  addInvoiceLoading: boolean; // Indicates if adding an invoice is in progress
  addInvoiceSuccess: boolean; // Indicates if adding an invoice was successful
  addInvoiceFailure: boolean; // Indicates if adding an invoice failed
  // Add other properties of your application state as needed
}

// Define the action types as string constants
export const GET_INVOICES = "GET_INVOICES";
export const GET_INVOICES_LOADING = "GET_INVOICES_LOADING";
export const ADD_INVOICE_REQ = "ADD_INVOICE_REQ";
export const ADD_INVOICE_SUCCESS = "ADD_INVOICE_SUCCESS";
export const ADD_INVOICE_FAILURE = "ADD_INVOICE_FAILURE";

// Define interfaces for each action
interface GetInvoicesAction {
  type: typeof GET_INVOICES;
  payload: Invoice[]; // Payload for this action type
}

interface GetInvoicesLoadingAction {
  type: typeof GET_INVOICES_LOADING;
}

interface AddInvoiceReqAction {
  type: typeof ADD_INVOICE_REQ;
}

interface AddInvoiceSuccessAction {
  type: typeof ADD_INVOICE_SUCCESS;
}

interface AddInvoiceFailureAction {
  type: typeof ADD_INVOICE_FAILURE;
}
export type AppActions =
  | GetInvoicesAction
  | GetInvoicesLoadingAction
  | AddInvoiceReqAction
  | AddInvoiceSuccessAction
  | AddInvoiceFailureAction;
