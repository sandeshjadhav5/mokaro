import * as types from "./actionTypes";

interface State {
  invoices: [];
  taxAmount: number;
  isLoading: boolean;
  addInvoiceLoading: boolean;
  addInvoiceSuccess: boolean;
  addInvoiceFailure: boolean;
}

const initialState: State = {
  invoices: [],
  taxAmount: 0,
  isLoading: false,
  addInvoiceLoading: false,
  addInvoiceSuccess: false,
  addInvoiceFailure: false,
};

type Action = {
  type: string;
  payload?: any;
};

const reducer = (state: State = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_INVOICES:
      return { ...state, invoices: payload, isLoading: false };
    case types.GET_INVOICES_LOADING:
      return { ...state, isLoading: true };
    case types.ADD_INVOICE_REQ:
      return { ...state, addInvoiceLoading: true };
    case types.ADD_INVOICE_SUCCESS:
      console.log("inside reducer taxAmount", payload);
      return {
        ...state,
        addInvoiceLoading: false,
        addInvoiceSuccess: true,
        taxAmount: payload,
      };
    case types.ADD_INVOICE_FAILURE:
      return {
        ...state,
        addInvoiceFailure: true,
        addInvoiceLoading: false,
        addInvoiceSuccess: false,
      };

    default:
      return state;
  }
};

export { reducer };
