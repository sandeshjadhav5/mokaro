import * as types from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";

// Action Creators

const userLoginReq = () => {
  return { type: types.LOGIN_USER_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.LOGIN_USER_SUCCESS };
};

const userLoginFailure = () => {
  return { type: types.LOGIN_USER_FAILURE };
};

const registerReq = () => {
  return { type: types.REGISTER_REQUEST };
};

const registerSuccess = () => {
  return { type: types.REGISTER_SUCCESS };
};

const registerFailure = () => {
  return { type: types.REGISTER_FAILURE };
};

const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: types.LOGOUT_USER };
};

// loginFunction

const loginFunction = (payload: any) => (dispatch: Dispatch) => {
  dispatch(userLoginReq());
  return axios
    .post<{ token: string }>(
      `https://odd-tan-mackerel-wig.cyclic.app/users/login`,
      payload
    )
    .then((res) => {
      console.log(res);
      let token = res.data.token;
      if (token || res.status == 200) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch(userLoginSuccess());
      } else if (res.status === 400) {
        dispatch(userLoginFailure());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(userLoginFailure());
    });
};

export {
  userLoginReq,
  userLoginSuccess,
  userLoginFailure,
  registerReq,
  registerSuccess,
  registerFailure,
  loginFunction,
  logoutUser,
};
