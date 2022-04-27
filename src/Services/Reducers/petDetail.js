import { SELECTED_PET } from '../Constants'

const InitalState = [
]

export default function(state=InitalState, action){
    const { type, payload } = action;
    
    switch(type){
        case SELECTED_PET:
            return payload;
        default: 
            return state;
    }
}