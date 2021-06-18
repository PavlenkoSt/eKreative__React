import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import authReducer from './authReducer'
import videosReducer from './videosReducer'
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    auth: authReducer,
    videos: videosReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>