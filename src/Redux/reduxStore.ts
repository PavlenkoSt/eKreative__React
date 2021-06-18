import {createStore, combineReducers, compose} from 'redux'

const rootReducer = combineReducers({

})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(rootReducer)


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type ProreptiesType<T> = T extends { [key: string]: infer U} ? U : never
export type ActionTypes<T extends {[key: string] : (...args: any) => any}> = ReturnType<ProreptiesType<T>>