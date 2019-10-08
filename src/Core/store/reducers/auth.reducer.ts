import { Reducer } from 'redux';
import { AuthActions } from 'Core/store/actions/auth.actions';
import { AuthState, AuthActionTypes } from 'Core/store/types/auth.types';

export const initialState: AuthState = {
  user: undefined,
  authenticated: false,
  error: '',
  loading: false
};

export const authReducer: Reducer<any> = (
  state: AuthState = initialState,
  action
) => {
  switch ((action as AuthActions).type) {
    case AuthActionTypes.SIGNUP:
      return {
        ...state,
        loading: true
      };
    case AuthActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false
      };
    case AuthActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        authenticated: false,
        loading: false
      };
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        loading: true
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
        error: ''
      };
    case AuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.message,
        authenticated: false,
        loading: false
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: undefined
      };
    case AuthActionTypes.FORGOT:
      return {
        ...state
      };
    case AuthActionTypes.CLEAR:
      return {
        ...state,
        user: undefined,
        authenticated: false,
        error: '',
        loading: false
      };
    default:
      return state;
  }
};
