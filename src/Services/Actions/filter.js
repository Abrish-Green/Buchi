import { SELECT_ANIMAL_TYPE, SELECT_AGE, SELECT_GENDER, SELECT_IS_GOOD_WITH_CHILDREN, SELECT_SIZE, SELECT_PETFINDER_API, LOAD_PETS } from '../Constants'
import { FetchFromLocalDb, FetchFromPetFinderAPI } from '../Utils/FetchData'

export const filterAnimalType = (data) => dispatch => {
    
    dispatch({
        type: SELECT_ANIMAL_TYPE,
        payload:  {
            type: data,
            },
    })
}
export const filterGoodWithChildren = (data) => dispatch => {
    dispatch({
        type: SELECT_IS_GOOD_WITH_CHILDREN,
        payload: {
            good_with_children: data,
        },
    })
}
export const filterAge = (data) => dispatch => {
    dispatch({
        type: SELECT_AGE,
        payload: {
            age: data
        },
    })
}
export const filterGender = (data) => dispatch => {
    dispatch({
        type: SELECT_GENDER,
        payload: {
            gender: data
        },
    })
}
export const filterSize = (data) => dispatch => {
    dispatch({
        type: SELECT_SIZE,
        payload: {
            size:data
        },
    })
}
export const filterPetFinderAPI = (data) => dispatch => {
    dispatch({
        type: SELECT_PETFINDER_API,
        payload: {
                include_petApiFilter:data
        },
    })
}

export const loadPets = (type, good_with_children, age, gender, size,from_petFinderApi) => dispatch => {
    let pet = []
    if(from_petFinderApi){
        FetchFromPetFinderAPI(type, good_with_children, age, gender, size).then((res)=> {
            pet = [...res.animals] 
        })
    }
        dispatch({
                    type:LOAD_PETS,
                    payload: pet
                })
        // FetchFromLocalDb(type, good_with_children, age, gender, size ).then((res)=> {
        //     pet = [...pet,...res.pets]
            
        // })
        
}

