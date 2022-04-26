import { combineReducers } from 'redux'
import  pets  from './pets'
import filter from './filter'
import adopt from './adopt'
export default combineReducers({
    pets: pets, 
    filter: filter,
    adopt: adopt
})