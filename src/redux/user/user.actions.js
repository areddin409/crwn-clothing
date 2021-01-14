import UserActionTypes from './user.types';

////////////////////////////////
//Sign in with either email or google
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error,
});

////////////////////////////////
//check if user is signed in or not
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

////////////////////////////////
//Sign out
export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error,
});

////////////////////////////////
//Sign Up
export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGNUP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error,
});
