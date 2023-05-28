import { LOGIN_USER, LOGOUT_USER } from "../types";

const initialState = {
    user: {},
    isLoggedIn: false,
};

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: {},
                isLoggedIn: false,
            };
        default:
            return state;
    }
}