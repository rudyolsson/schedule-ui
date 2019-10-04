import { combineReducers } from 'redux';
import { reducer as formReducer, FormState } from 'redux-form';
import { alertReducer, AlertState } from 'Core/store/reducers/alert.reducer';


export interface AppState {
    form: FormState,
    alert: AlertState,
}

export default combineReducers({
    form: formReducer,
    alert: alertReducer,
});
