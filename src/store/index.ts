import { combineReducers } from "redux";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import recipesReducer from "./recipe/reducer";

const combinedReducer = combineReducers({
  recipes: recipesReducer,
});

const rootReducer = (state: any, action: { type: string }) => {
  if (action.type === "user/logoutUser") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(thunk),
});


export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
