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

export const firstStepReducer = (state = { firstStep: {} }, action) => {
  switch (action.type) {
    case FIRST_STEP_OB_REQUEST:
      return {
        ...state,
        progress: 20,
        loading: true,
      };
    case FIRST_STEP_OB_SUCCESS:
      return {
        ...state,
        progress: 100,
        loading: false,
        firstStep: action.payload,
      };
    case FIRST_STEP_OB_FAIL:
      return {
        ...state,
        progress: 100,
        loading: false,
        firstStep: null,
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

export const streetAddress = (state = { streetAddress: {} }, action) => {
  switch (action.type) {
    case STREE_ADDRESS_REQUEST:
      return {
        ...state,
        progress: 20,
        loading: true,
      };
    case STREE_ADDRESS_SUCCESS:
      return {
        ...state,
        progress: 100,
        loading: false,
        streetAddress: action.payload,
      };
    case STREE_ADDRESS_FAIL:
      return {
        ...state,
        progress: 100,
        loading: false,
        streetAddress: null,
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

export const amentiesReducer = (state = { amenties: {} }, action) => {
  switch (action.type) {
    case OUR_AMENTIES_SAVE_REQUEST:
      return {
        ...state,
        progress: 20,
        loading: true,
      };
    case OUR_AMENTIES_SAVE_SUCCESS:
      return {
        ...state,
        progress: 100,
        loading: false,
        amenties: action.payload,
      };
    case OUR_AMENTIES_SAVE_FAIL:
      return {
        ...state,
        progress: 100,
        loading: false,
        amenties: null,
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

export const addPhotoReducer = (state = { addPhoto: {} }, action) => {
  switch (action.type) {
    case ADD_PHOTO_ON_REQUEST:
      return {
        ...state,
        progress: 20,
        loading: true,
      };
    case ADD_PHOTO_ON_SUCCESS:
      return {
        ...state,
        progress: 100,
        loading: false,
        addPhoto: action.payload,
      };
    case ADD_PHOTO_ON_FAIL:
      return {
        ...state,
        progress: 100,
        loading: false,
        addPhoto: null,
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

export const configRoomReducer = (state = { configRoom: {} }, action) => {
  switch (action.type) {
    case CONFIG_ROOM_REQUEST:
      return {
        ...state,
        progress: 20,
        loading: true,
      };
    case CONFIG_ROOM_SUCCESS:
      return {
        ...state,
        progress: 100,
        loading: false,
        configRoom: action.payload,
      };
    case CONFIG_ROOM_FAIL:
      return {
        ...state,
        progress: 100,
        loading: false,
        configRoom: null,
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
