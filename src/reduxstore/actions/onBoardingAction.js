import {
  OUR_AMENTIES_SAVE_REQUEST,
  OUR_AMENTIES_SAVE_SUCCESS,
  OUR_AMENTIES_SAVE_FAIL,
  CLEAR_ERRORS,
  FIRST_STEP_OB_REQUEST,
  FIRST_STEP_OB_SUCCESS,
  FIRST_STEP_OB_FAIL,
  STREE_ADDRESS_REQUEST,
  STREE_ADDRESS_SUCCESS,
  STREE_ADDRESS_FAIL,
  ADD_PHOTO_ON_REQUEST,
  ADD_PHOTO_ON_SUCCESS,
  ADD_PHOTO_ON_FAIL,
  CONFIG_ROOM_REQUEST,
  CONFIG_ROOM_SUCCESS,
  CONFIG_ROOM_FAIL,
} from "../constants/onBoardingConstants";

import axios from "axios";

export const firstStepData = (formData) => async (dispatch) => {
  const url = "api/onboarding/firstStep";
  try {
    dispatch({ type: FIRST_STEP_OB_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: FIRST_STEP_OB_SUCCESS,
      payload: data.res,
    });
  } catch (error) {
    dispatch({
      type: FIRST_STEP_OB_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const streetAddressOb = (formData) => async (dispatch) => {
  const url = "api/onboarding/streetaddress";
  try {
    dispatch({ type: STREE_ADDRESS_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: STREE_ADDRESS_SUCCESS,
      payload: data.res,
    });
  } catch (error) {
    dispatch({
      type: STREE_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const saveAmenties = (formData) => async (dispatch) => {
  const url = "api/onboarding/amenties/save";
  try {
    dispatch({ type: OUR_AMENTIES_SAVE_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: OUR_AMENTIES_SAVE_SUCCESS,
      payload: data.res,
    });
  } catch (error) {
    dispatch({
      type: OUR_AMENTIES_SAVE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addPhotoOnboarding = (formData) => async (dispatch) => {
  const url = "api/onboarding/photo/add";
  try {
    dispatch({ type: ADD_PHOTO_ON_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ADD_PHOTO_ON_SUCCESS,
      payload: data.res,
    });
  } catch (error) {
    dispatch({
      type: ADD_PHOTO_ON_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const configureRoomAction = (formData) => async (dispatch) => {
  const url = "api/onboarding/configure/room";
  try {
    dispatch({ type: CONFIG_ROOM_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: CONFIG_ROOM_SUCCESS,
      payload: data.res,
    });
  } catch (error) {
    dispatch({
      type: CONFIG_ROOM_FAIL,
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
