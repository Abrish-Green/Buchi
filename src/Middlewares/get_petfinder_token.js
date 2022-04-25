const axios = require('axios');
const dotenv = require('dotenv').config({ path: '../../.env' })


const getPetFinderToken =  async() =>  {

     try{
        const token = await axios({
            method: 'post',
            url: 'https://api.petfinder.com/v2/oauth2/token',
            data: {
                grant_type: "client_credentials",
                client_id: process.env.PET_FINDER_CLIENT_ID,
                client_secret:process.env.PET_FINDER_SECRET

            }
          }).then(({data})=> data).catch(e => {return e.message});
          return token
    }catch(e){
        return (e.massage)
    }

}

module.exports =  getPetFinderToken
let token = getPetFinderToken()
getPetFinderToken().then(function(result) {
     token = (result.access_token) 
     console.log(token)// "Some User token"
 });
 