import axios from 'axios';
import config from '../Config/config.json'

export const getPetFinderToken =  async() =>  {

     try{
        const token = await axios({
            method: 'post',
            url: 'https://api.petfinder.com/v2/oauth2/token',
            data: {
                grant_type: "client_credentials",
                client_id: config.PET_FINDER_CLIENT_ID,
                client_secret: config.PET_FINDER_SECRET

            }
          }).then(({data})=> data).catch(e => {return e.message});
          return token
    }catch(e){
        return (e.massage)
    }

}
/*
let token = getPetFinderToken()
getPetFinderToken().then(function(result) {
     token = (result.access_token) 
     console.log(token)// "Some User token"
 });
*/