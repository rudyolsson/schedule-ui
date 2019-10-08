import { Action } from 'redux';

// State Shape
export interface AuthState {
  user: AuthenticationProfile | undefined;
  authenticated: boolean;
  error: string;
  loading: boolean;
}

//  Action Types
export enum AuthActionTypes {
  LOGIN = 'auth/LOGIN',
  LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR = 'auth/LOGIN_ERROR',
  SIGNUP = 'auth/SIGNUP',
  SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS',
  SIGNUP_ERROR = 'auth/SIGNUP_ERROR',
  LOGOUT = 'auth/LOGOUT',
  CLEAR = 'auth/CLEAR',
  FORGOT = 'AUTH/FORGOT_PASSWORD'
}

// Actions
export interface SignUp extends Action {
  type: AuthActionTypes.SIGNUP;
  payload: {
    credentials: UserCredentials;
  };
}

export interface SignUpSuccess extends Action {
  type: AuthActionTypes.SIGNUP_SUCCESS;
  payload: {
    profile: AuthenticationProfile;
  };
}

export interface SignUpError extends Action {
  type: AuthActionTypes.SIGNUP_ERROR;
  payload: {
    message: string;
  };
}

export interface Login extends Action {
  type: AuthActionTypes.LOGIN;
  payload: {
    credentials: UserCredentials;
  };
}

export interface LoginSuccess extends Action {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: {
    profile: AuthenticationProfile;
  };
}

export interface LoginError extends Action {
  type: AuthActionTypes.LOGIN_ERROR;
  payload: {
    message: string;
  };
}

export interface Logout extends Action {
  type: AuthActionTypes.LOGOUT;
}

export interface AuthClear extends Action {
  type: AuthActionTypes.CLEAR;
}

export interface ForgotPassword extends Action {
  type: AuthActionTypes.FORGOT;
  payload: {
    email: string;
  };
}

// DTO's
export interface UserCredentials {
  userName: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthenticationProfile {
  id: string;
}
