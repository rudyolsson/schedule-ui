import { ActionCreator, Dispatch } from 'redux';
import {
  AuthActionTypes,
  SignUp,
  UserCredentials,
  SignUpSuccess,
  AuthenticationProfile,
  SignUpError,
  Login,
  LoginSuccess,
  LoginError,
  ForgotPassword,
  AuthClear,
  Logout,
  RegisterBusinessCredentials
} from 'Core/store/types/auth.types';
import { instance } from 'Utils/axios.instance';
import { AlertActionTypes } from 'Core/store/types/alert.types';
import { alertError } from 'Core/store/actions/alert.actions';
import { setStorageItem } from 'Utils/jwt-helper.service';
import history from '../../../history';

export const signUp: ActionCreator<any> = (
  credentials: RegisterBusinessCredentials
) => async (dispatch: Dispatch) => {
  dispatch({
    type: AuthActionTypes.SIGNUP,
    payload: { credentials }
  });
  try {
    const response = await instance().post('/auth/register', credentials);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    const { message } = e.response.data;
    dispatch(signUpError(message));
  }
};

export const signUpSuccess: ActionCreator<SignUpSuccess> = (
  profile: AuthenticationProfile
) => ({
  type: AuthActionTypes.SIGNUP_SUCCESS,
  payload: { profile }
});

export const signUpError: ActionCreator<any> = (message: string) => (
  dispatch: Dispatch,
  getState: any
) => {
  dispatch({
    type: AuthActionTypes.SIGNUP_ERROR,
    payload: { message }
  });
  const errorMessage = getState().auth.error;
  dispatch(alertError(errorMessage));
};

export const login: ActionCreator<any> = (
  credentials: UserCredentials
) => async (dispatch: Dispatch) => {
  dispatch({ type: AuthActionTypes.LOGIN });
  try {
    const response = await instance().post('/auth/token', credentials);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    const { message } = e.response.data;
    dispatch(loginError(message));
  }
};

export const loginSuccess: ActionCreator<any> = (
  profile: AuthenticationProfile
) => async (dispatch: Dispatch, getState: any) => {
  dispatch({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: { profile }
  });
  const token = getState().auth.user;
  setStorageItem('token', token);
  history.push('/dashboard');
};

export const loginError: ActionCreator<any> = (message: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  dispatch({
    type: AuthActionTypes.LOGIN_ERROR,
    payload: { message }
  });
  const errorMessage = getState().auth.error;
  dispatch(alertError(errorMessage));
};

export const logout: ActionCreator<Logout> = () => ({
  type: AuthActionTypes.LOGOUT
});

export const authClear: ActionCreator<AuthClear> = () => ({
  type: AuthActionTypes.CLEAR
});

export const forgotPassword: ActionCreator<ForgotPassword> = (
  email: string
) => ({
  type: AuthActionTypes.FORGOT,
  payload: { email }
});

export type AuthActions =
  | SignUp
  | SignUpSuccess
  | SignUpError
  | Login
  | LoginError
  | LoginSuccess
  | Logout
  | AuthClear
  | ForgotPassword;
