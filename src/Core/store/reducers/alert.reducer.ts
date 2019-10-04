import { Reducer } from 'redux';
import { AlertActions } from 'Core/store/actions/alert.actions';
import { AlertState, AlertActionTypes } from 'Core/store/types/alert.types';

export const initialState: AlertState = {
    type: '',
    message: '',
};

export const alertReducer: Reducer<any> = (state: AlertState = initialState, action) => {
    switch((action as AlertActions).type) {
        case AlertActionTypes.SUCCESS:
            return {
                ...state,
                type: 'alert-success',
                message: action.message,
            };
        case AlertActionTypes.ERROR: 
            return {
                ...state,
                type: 'alert-danger',
                message: action.message,
            }
        case AlertActionTypes.CLEAR:
            return {
                ...state,
                type: '',
                message: '',
            }
        default: 
            return state;
    }
};
