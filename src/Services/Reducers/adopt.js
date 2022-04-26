import { PET_ADOPT } from '../Constants'

const InitalState = {
    "success": false
}

export default function(state=InitalState, action){
    const { type, payload } = action;
    
    switch(type){
        case PET_ADOPT:
            return payload;
        default: 
            return state;
    }
}