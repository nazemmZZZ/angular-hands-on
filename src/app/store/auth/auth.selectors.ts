

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginReq } from "src/navagation";
import { AuthState } from "./reducers";




export const selectAuthState =
    createFeatureSelector<AuthState>("auth");


export const isLoggedIn = createSelector(
    selectAuthState,
    auth =>  auth.user? LoginReq.YES:LoginReq.NO

);

export const isLoggedInBool = createSelector(selectAuthState, (auth) =>
  !!auth.user
);

export const Token = createSelector(
  selectAuthState,
  (auth) =>auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);
