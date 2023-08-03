import * as types from "./actionTypes";

interface State {
  isAuth: boolean;
  isRegistered: boolean;
  isAuthLoading: boolean;
  isAuthFailure: boolean;
  isRegisteredLoading: boolean;
  isRegisteredFailure: boolean;

  token: string;
}

const initialState: State = {
  isAuth: false,
  isRegistered: false,
  isAuthLoading: false,
  isAuthFailure: false,
  isRegisteredLoading: false,
  isRegisteredFailure: false,

  token: "",
};

type Action = {
  type: string;
  payload?: any;
};

const reducer = (state: State = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true, isAuthLoading: false };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthFailure: true,
        isAuthLoading: false,
        isAuth: false,
      };
    case types.REGISTER_REQUEST:
      return { ...state, isRegistered: false, isRegisteredLoading: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        isRegisteredLoading: false,
        isRegisteredFailure: false,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isRegisteredLoading: false,
        isRegisteredFailure: true,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        isAdminLogin: false,
      };
    default:
      return state;
  }
};

export { reducer };
