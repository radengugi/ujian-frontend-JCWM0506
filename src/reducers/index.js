import { combineReducers } from 'redux'
import { authReducer } from './authReducers'
import { productReducers } from './productReducer'

export const Reducers = combineReducers({
    authReducer, productReducers
})