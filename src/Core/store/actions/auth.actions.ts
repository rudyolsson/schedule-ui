import { ActionCreator } from 'redux';
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
    Logout
} from 'Core/store/types/auth.types';

export const signUp: ActionCreator<SignUp> = (credentials: UserCredentials) => ({
    type: AuthActionTypes.SIGNUP,
    payload: { credentials },
});

export const signUpSuccess: ActionCreator<SignUpSuccess> = (profile: AuthenticationProfile) => ({
    type: AuthActionTypes.SIGNUP_SUCCESS,
    payload: { profile },
});

export const signUpError: ActionCreator<SignUpError> = (message: string) => ({
    type: AuthActionTypes.SIGNUP_ERROR,
    payload: { message },
});


export const login: ActionCreator<Login> = (credentials: UserCredentials) => ({
    type: AuthActionTypes.LOGIN,
    payload: { credentials },
});

export const loginSuccess: ActionCreator<LoginSuccess> = (profile: AuthenticationProfile) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: { profile },
});

export const loginError: ActionCreator<LoginError> = (message: string) => ({
    type: AuthActionTypes.LOGIN_ERROR,
    payload: { message },
});

export const logout: ActionCreator<Logout> = () => ({
    type: AuthActionTypes.LOGOUT,
});

export const authClear: ActionCreator<AuthClear> = () => ({
    type: AuthActionTypes.CLEAR,
});

export const forgotPassword: ActionCreator<ForgotPassword> = (email: string) => ({
    type: AuthActionTypes.FORGOT,
    payload: { email },
});

export type AuthActions = 
|SignUp
|SignUpSuccess
|SignUpError
|Login
|LoginError
|LoginSuccess
|Logout
|AuthClear
|ForgotPassword; 