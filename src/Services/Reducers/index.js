import { combineReducers } from 'redux'
import  app  from './app'
import filter from './filter'
export default combineReducers({
    app: app, 
    filter: filter
})