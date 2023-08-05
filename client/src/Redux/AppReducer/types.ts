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
  invoices: Invoice[];
  template: any;
  isLoading: boolean;
  addInvoiceLoading: boolean;
  addInvoiceSuccess: boolean;
  addInvoiceFailure: boolean;
}

export const GET_INVOICES = "GET_INVOICES";
export const GET_INVOICES_LOADING = "GET_INVOICES_LOADING";
export const ADD_INVOICE_REQ = "ADD_INVOICE_REQ";
export const ADD_INVOICE_SUCCESS = "ADD_INVOICE_SUCCESS";
export const ADD_INVOICE_FAILURE = "ADD_INVOICE_FAILURE";
export const CHANGE_TEMPLATE = "CHANGE_TEMPLATE";

interface GetInvoicesAction {
  type: typeof GET_INVOICES;
  payload: Invoice[];
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

interface changeInvoiceTemplate {
  type: typeof CHANGE_TEMPLATE;
  payload: any;
}

export type AppActions =
  | GetInvoicesAction
  | GetInvoicesLoadingAction
  | AddInvoiceReqAction
  | AddInvoiceSuccessAction
  | AddInvoiceFailureAction
  | changeInvoiceTemplate;
