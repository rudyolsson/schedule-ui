import { combineReducers } from 'redux';
import { reducer as formReducer, FormState } from 'redux-form';
import { alertReducer } from 'Core/store/reducers/alert.reducer';
import { authReducer } from 'Core/store/reducers/auth.reducer';
import { AlertState } from 'Core/store/types/alert.types';
import { AuthState } from 'Core/store/types/auth.types';


export interface AppState {
    form: FormState,
    alert: AlertState,
    auth: AuthState,
}

export default combineReducers({
    form: formReducer,
    alert: alertReducer,
    auth: authReducer,
});
