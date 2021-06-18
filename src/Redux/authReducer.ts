// import { ActionTypes } from "./reduxStore"

export const authActionsTypes = {
    SET_AUTH_STATUS: 'SET_AUTH_STATUS',
    SET_AUTH_USER: 'SET_AUTH_USER'
}

export const authActions = {
    setAuthSuccess: (authStatus: boolean) => ({ type: authActionsTypes.SET_AUTH_STATUS, authStatus} as const),
    setAuthUserSuccess: (authUser: AuthUserType) => ({ type: authActionsTypes.SET_AUTH_USER, authUser} as const)
}

const initialValue = {
    auth: false,
    authUser: {
        name: ''
    }
}

const authReducer = (state = initialValue, action: any): InitialValueType => {
    switch(action.type){
        case authActionsTypes.SET_AUTH_STATUS: {
            return {
                ...state,
                auth: action.authStatus
            }
        }
        case authActionsTypes.SET_AUTH_USER: {
            return {
                ...state,
                authUser: action.authUser
            }
        }
        default: return state
    }
}

export default authReducer



type InitialValueType = typeof initialValue
// type ActionType = ActionTypes<typeof authActions>

export type AuthUserType = {
    name: string
}