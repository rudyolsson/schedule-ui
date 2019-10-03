import { Action, ActionCreator } from 'redux';

export enum AlertActionTypes {
    SUCCESS = 'ALERT_SUCCESS',
    ERROR = 'ALERT_ERROR',
    CLEAR = 'ALERT_CLEAR',
};

export interface AlertSuccess extends Action {
    type: AlertActionTypes.SUCCESS,
    payload: {
        message: string,
    } 
}

export interface AlertError extends Action {
    type: AlertActionTypes.ERROR,
    payload: {
        message: string,
    } 
}

export interface AlertClear extends Action {
    type: AlertActionTypes.CLEAR
}

export const alertSuccess: ActionCreator<AlertSuccess> = (message: string) => ({
    type: AlertActionTypes.SUCCESS,
    payload: { message },
});

export const alertError: ActionCreator<AlertError> = (message: string) => ({
    type: AlertActionTypes.ERROR,
    payload: { message },
});

export const alertClear: ActionCreator<AlertClear> = () => ({
    type: AlertActionTypes.CLEAR,
});

export type AlertActions = 
 AlertSuccess
| AlertError
| AlertClear;