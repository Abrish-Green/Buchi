import { LOAD_PETS } from '../Constants'

const InitalState = [
]

export default function(state=InitalState, action){
    const { type, payload } = action;
    
    switch(type){
        case LOAD_PETS:
            return payload;
        default: 
            return state;
    }
}