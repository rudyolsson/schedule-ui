import { Reducer } from 'redux';
import { AlertActions } from 'Core/store/actions/alert.actions';
import { AlertState, AlertActionTypes } from 'Core/store/types/alert.types';

export const initialState: AlertState = {
  type: 'info',
  message: '',
  open: false
};

export const alertReducer: Reducer<any> = (
  state: AlertState = initialState,
  action
) => {
  switch ((action as AlertActions).type) {
    case AlertActionTypes.SUCCESS:
      return {
        ...state,
        type: 'success',
        message: action.payload.message,
        open: true
      };
    case AlertActionTypes.ERROR:
      return {
        ...state,
        type: 'error',
        message: action.payload.message,
        open: true
      };
    case AlertActionTypes.CLEAR:
      return {
        ...state,
        message: '',
        open: false
      };
    default:
      return state;
  }
};
