import * as types from "./actionTypes";

interface State {
  invoices: [];
  isLoading: boolean;
  addInvoiceLoading: boolean;
  addInvoiceSuccess: boolean;
  addInvoiceFailure: boolean;
}

const initialState: State = {
  invoices: [],
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
      return { ...state, addInvoiceLoading: false, addInvoiceSuccess: true };
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
