const InitalState = {
    "type": [],
    "good_with_children": true,
    "age": [],
    "gender": [],
    "size": [],
    "include_petfilter": false
}

export default function(state=InitalState, action){
    const { type, payload } = action;
    switch(type){
        case 'LOGIN_SUCCESS':
            return  payload
       
        default: 
            return state;
    }
}