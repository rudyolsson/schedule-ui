import { Action } from 'redux';

// State Shape
export interface AlertState {
  type: string;
  message: string;
}

// Action Types
export enum AlertActionTypes {
  SUCCESS = 'ALERT_SUCCESS',
  ERROR = 'ALERT_ERROR',
  CLEAR = 'ALERT_CLEAR'
}

// Actions
export interface AlertSuccess extends Action {
  type: AlertActionTypes.SUCCESS;
  payload: {
    message: string;
  };
}

export interface AlertError extends Action {
  type: AlertActionTypes.ERROR;
  payload: {
    message: string;
  };
}

export interface AlertClear extends Action {
  type: AlertActionTypes.CLEAR;
}
