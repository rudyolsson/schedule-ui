import { combineReducers } from 'redux';
import { reducer as formReducer, FormState } from 'redux-form';
import { alertReducer, AlertState } from 'Core/store/reducers/alert.reducer';

const mockReducer = (state = {}, action: any) => {
    return state;
};

export interface AppState {
    mockReducer: any,
    form: FormState,
    alert: AlertState,
}

export default combineReducers({
    mockReducer,
    form: formReducer,
    alert: alertReducer,
});
