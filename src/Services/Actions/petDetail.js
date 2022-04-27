import { SELECTED_PET } from "../Constants"

export const selectPet = (data) => dispatch => {
             dispatch({
                type: SELECTED_PET,
                payload:data
            })
        
}
