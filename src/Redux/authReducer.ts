import { signInWithFacebook, signInWithGoogle } from './../API/auth'
import { AnyAction, Store } from "redux"
import { ThunkAction } from "redux-thunk"

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


export const authorizing = (responce: any, authService: 'google' | 'facebook'): ThunkType => async dispatch => {
    const authUser = 
        authService === 'facebook' ? await signInWithFacebook(responce) : 
        authService === 'google' ? await signInWithGoogle(responce) : 
        null

    if(authUser){
        dispatch(authActions.setAuthUserSuccess(authUser))
        dispatch(authActions.setAuthSuccess(true))
    }
}

type InitialValueType = typeof initialValue
type ThunkType = ThunkAction<void, Store, unknown, AnyAction>

export type AuthUserType = {
    name: string
}