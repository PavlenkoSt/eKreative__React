import { ActionTypes } from "./reduxStore"

export const authActions = {
    
}

const initialValue = {
    auth: false,
    authData: []
}

const authReducer = (state = initialValue, action: ActionType): InitialValueType => {
    switch(action.type){

        default: return state
    }
}



type InitialValueType = typeof initialValue
type ActionType = ActionTypes<typeof authActions>