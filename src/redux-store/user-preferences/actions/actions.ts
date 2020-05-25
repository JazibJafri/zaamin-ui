/* Absolute Imports */
import * as actionsCreators from 'redux-store/user-preferences/action-creators';

interface OwnProps extends WithDispatch {
    newLanguage: string;
}

const changeLanguage = ({ dispatch, newLanguage }: OwnProps) => {
    try {
        dispatch(actionsCreators.changeLanguage(newLanguage));
        return null;
    } catch (error) {
        return error;
    }
};

const setDefaultLanguage = ({ dispatch }: OwnProps) => {
    try {
        dispatch(actionsCreators.setDefaultLanguage());
        return null;
    } catch (error) {
        return error;
    }
};
export const actions = {
    changeLanguage,
    setDefaultLanguage,
};
