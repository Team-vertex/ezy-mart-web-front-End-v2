import { combineReducers, Reducer, UnknownAction } from "@reduxjs/toolkit";
import app, { AppState } from "./slices/app";
import auth, { AuthState } from "./slices/auth";
import language, { Locale } from "./slices/languageSlice";

export type RootState = {
  auth: AuthState;
  app: AppState;
  language: {
    currentLocale: Locale;
  };
};

export interface AsyncReducers {
  [key: string]: Reducer<any, UnknownAction>;
}

const staticReducers = {
  auth,
  app,
  language,
};

const rootReducer =
  (asyncReducers?: AsyncReducers) =>
  (state: RootState, actions: UnknownAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
    return combinedReducer(state, actions);
  };

export default rootReducer;
