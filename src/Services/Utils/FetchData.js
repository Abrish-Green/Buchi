import {getPetFinderToken} from '../../Middlewares/get_petfinder_token'


const axios = require('axios')

export const FetchFromLocalDb = async (type, good_with_children, age, gender, size) =>  {    
try{
    return await  axios.get('http://209.97.133.58:8000/pet/get_pets', { 
        params: { 
            limit: 100,
            type: type,
            good_with_children: good_with_children,
            age:age,
            gender:gender,
            size:size
         } 
    }).then(({data})=> data)
    .catch(e => {return e.message});
}catch(e){
    //Not Working
}
}

export const FetchFromPetFinderAPI = async (type, gender, size, age, good_with_children ) => {
    let pets = []

    try{
        let token = getPetFinderToken()
        
    return getPetFinderToken().then(async (result) => {
        token = (result.access_token) 
        return await axios({
            method: 'get',
            url: 'https://api.petfinder.com/v2/animals',
            data: {
                type:type,
                gender:gender,
                size:size,
                age:age,
                good_with_children:good_with_children
            },
            headers: {
                Authorization: `Bearer ${token}`,
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
            } 
        })
            .then(({ data }) => pets = data)
            .catch(e => { return e.message });
    });
        
}catch(e){
    //Not Working
}
            
    return pets
}

