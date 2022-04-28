import { PET_ADOPT } from '../Constants'
import axios from 'axios';

export const Adopt = async (name, phone,pet_id) => dispatch => {
    
    try{
    // Create Customer
    
         (
             async()=>{
                 //Create customer
                 let customer_id = null
                await axios({
                    method: 'post',
                    url: 'https://209.97.133.58:8000/customer/add_customer',
                    data: {
                     "name": name,
                     "phone": phone
         
                    }
                  }).then((data)=>{
                    customer_id = data.customer_id
                    dispatch({
                          type: PET_ADOPT,
                          payload: {"success": true}
                      })
                  }).catch(e => {return e.message});

                  //Adopt using customer Id
                  await axios({
                    method: 'post',
                    url: 'https://209.97.133.58:8000/adoption/adopt',
                    data: {
                     
                    customer_id: customer_id,
                    pet_id: pet_id
         
                    }
                  }).then(({data})=> {
                      dispatch({
                          type: PET_ADOPT,
                          payload: {"success": true}
                      })
                  }).catch(e => {return e.message});
                  
             }

         )();
      
    //Adopt
   }catch(e){
       return (e.massage)
   }
    
}

