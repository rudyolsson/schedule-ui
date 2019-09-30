import { combineReducers } from 'redux';
import { reducer as formReducer, FormState } from 'redux-form';

const mockReducer = (state = {}, action: any) => {
    return state;
};

export interface AppState {
    mockReducer: any,
    form: FormState,
}

export default combineReducers({
    mockReducer,
    form: formReducer,
});
