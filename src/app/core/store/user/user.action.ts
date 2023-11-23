import { createAction, props } from "@ngrx/store";
import { UserSignUp, User, UserModel, UserInfo } from './../../models/user';

const TYPE = '[Auth]'
export const LOGIN_START = `${TYPE} login start`
export const LOGIN_SUCCESS = `${TYPE} login success`
export const LOGIN_FAILURE = `${TYPE} login failure`

export const SIGNUP_START = `${TYPE} signup start`
export const SIGNUP_SUCCESS = `${TYPE} signup success`
export const SIGNUP_FAILURE = `${TYPE} signup failure`

export const LOGOUT = `${TYPE} logout `
export const LOGOUT_SUCCESS = `${TYPE} logout success`

export const GET_PROFILE = `${TYPE} get profile`
export const GET_PROFILE_SUCCESS = `${TYPE} get profile success`
export const GET_PROFILE_FAILED = `${TYPE} get profile failed`

export const UPDATE_PROFILE  = `${TYPE} update profile`
export const UPDATE_PROFILE_SUCCESS = `${TYPE} update profile success`
export const UPDATE_PROFILE_FAILED = `${TYPE} update profile failed`



export const updateProfile = createAction(
  UPDATE_PROFILE,
  props<{ userInfo: {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    gender?: string,
    heroes?: string[],
    userId?: number,
    age?: number,
    _id?: string,
  },
  id: string
}>());
export const updateProfileSuccess = createAction(
  UPDATE_PROFILE_SUCCESS,
  props<{UserInfo: UserInfo}>()
);
export const updateProfileFailed = createAction(
  UPDATE_PROFILE_FAILED,
  props<{error? : string}>()
);

export const signupStart = createAction(
  SIGNUP_START,
  props<{
    UserSignUp: {
      email: string,
      firstName: string,
      lastName: string,
      password: string,
    }
  }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ UserInfo: UserInfo }>()
);

export const signupFailure = createAction(
  SIGNUP_FAILURE,
  props<{ error?: string }>()
);

export const loginStart = createAction(
  LOGIN_START,
  props<{ user: { email: string, password: string } }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ UserInfo: UserInfo }>()
);

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<{ error?: string }>()
);

export const getProfile = createAction(GET_PROFILE);

export const getProfileSuccess = createAction(
  GET_PROFILE_SUCCESS,
  props<{ UserInfo: UserInfo }>()
);

export const getProfileError = createAction(GET_PROFILE_FAILED, props<{ error?: string }>())


