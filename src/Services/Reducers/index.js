import { combineReducers } from 'redux'
import  pets  from './pets'
import filter from './filter'
export default combineReducers({
    pets: pets, 
    filter: filter
})