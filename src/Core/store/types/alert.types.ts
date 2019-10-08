import { Action } from 'redux';
import { variantIcon } from 'Core/components/Snackbar';
// State Shape
export interface AlertState {
  type: keyof typeof variantIcon;
  message: any;
  open: boolean;
}

// Action Types
export enum AlertActionTypes {
  SUCCESS = 'alert/SUCCESS',
  ERROR = 'alert/ERROR',
  CLEAR = 'alert/CLEAR'
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
