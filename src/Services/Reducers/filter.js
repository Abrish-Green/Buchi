import { SELECT_ANIMAL_TYPE, SELECT_AGE, SELECT_GENDER, SELECT_IS_GOOD_WITH_CHILDREN, SELECT_SIZE, SELECT_PETFINDER_API, LOAD_PETS} from '../Constants'

const InitalState = [
    {"type": []},
    {"good_with_children": true},
    {"age": []},
    {"gender": []},
    {"size": []},
    {"include_petApiFilter": false},
    {"pets": []}
]

export default function(state=InitalState, action){
    const { type, payload } = action;
    
    switch(type){
        case SELECT_ANIMAL_TYPE:
        case SELECT_AGE:
        case SELECT_GENDER:
        case SELECT_IS_GOOD_WITH_CHILDREN:
        case SELECT_SIZE:
        case SELECT_PETFINDER_API:
            return payload;
        case LOAD_PETS:
            return payload;
        default: 
            return state;
    }
}