import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  LOGGED_IN_USER_REQUEST,
  LOGGED_IN_USER_SUCCESS,
  LOGGED_IN_USER_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/adminAsUserConstants";

import axios from "axios";

export const login = (formData) => async (dispatch) => {
  const url = "http://localhost:5000/api/login";
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  const url = "http://localhost:5000/api/register";
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    let err;
    if (error.response === undefined) {
      err = undefined;
    } else {
      err = error.response.data.message;
    }
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: err,
    });
  }
};

export const loggedInUser = () => async (dispatch) => {
  const url = "http://localhost:5000/api/me";
  try {
    dispatch({ type: LOGGED_IN_USER_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: LOGGED_IN_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGGED_IN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  const url = "http://localhost:5000/api/logout";
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ERRORS
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
