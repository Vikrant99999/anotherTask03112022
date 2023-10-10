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

export const adminUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
    case LOGGED_IN_USER_REQUEST:
      return {
        progress: 20,
        loading: true,
        isAuthenticated: false,
      };
    case USER_LOGOUT_REQUEST:
      return {
        progress: 20,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
    case LOGGED_IN_USER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        progress: 100,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        progress: 100,
        loading: false,
        isAuthenticated: false,
        user: null,
        message: action.payload,
      };
    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
      return {
        ...state,
        progress: 100,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGGED_IN_USER_FAIL:
      return {
        progress: 100,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case USER_LOGOUT_FAIL:
      return {
        loading: false,
        progress: 100,
        isAuthenticated: true,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
