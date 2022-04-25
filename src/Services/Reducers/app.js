
const initalState = {
    "selected_pet_id":"",
    "loading": false
}

export default function(state=initalState, action){
    const { type, payload } = action;
    switch(type){
        case "LOGIN_SUCCESS":
            return  payload
        
        default: 
            return state;
    }
}