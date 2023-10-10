import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// external import for development purpose
import { composeWithDevTools } from "redux-devtools-extension";
import { adminUserReducer } from "./reducers/adminAsUserReducers";
import {
  addPhotoReducer,
  amentiesReducer,
  configRoomReducer,
  firstStepReducer,
  streetAddress,
} from "./reducers/onBoardingReducers";

const reducer = combineReducers({
  // admin user reducers
  adminuser: adminUserReducer,

  // onboarding reducers
  onBoardingFisrtStep: firstStepReducer,
  onBoardingStree: streetAddress,
  onBoardingAmenties: amentiesReducer,
  onBoardingAddPhoto: addPhotoReducer,
  onBoardingConfigRoom:configRoomReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
