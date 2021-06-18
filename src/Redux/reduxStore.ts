import {createStore, combineReducers, compose} from 'redux'
import authReducer from './authReducer'
import videosReducer from './videosReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    videos: videosReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(rootReducer, composeEnhancers())


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>