import { UserActionTypes } from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSessionStart = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const createUserEmailStart = userData => ({
  type: UserActionTypes.CREATE_USER_EMAIL_START,
  payload: userData
});

export const createUserEmailSuccess = () => ({
  type: UserActionTypes.CREATE_USER_EMAIL_SUCCESS
});

export const createUserEmailFailure = error => ({
  type: UserActionTypes.CREATE_USER_EMAIL_FAILURE,
  payload: error
});
