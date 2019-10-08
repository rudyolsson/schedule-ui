import { ActionCreator } from 'redux';
import {
  AlertActionTypes,
  AlertSuccess,
  AlertError,
  AlertClear
} from 'Core/store/types/alert.types';

export const alertSuccess: ActionCreator<AlertSuccess> = (message: string) => ({
  type: AlertActionTypes.SUCCESS,
  payload: { message }
});

export const alertError: ActionCreator<AlertError> = (message: string) => ({
  type: AlertActionTypes.ERROR,
  payload: { message }
});

export const alertClear: ActionCreator<AlertClear> = () => ({
  type: AlertActionTypes.CLEAR
});

export type AlertActions = AlertSuccess | AlertError | AlertClear;
