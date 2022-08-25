import { PET_ADOPT } from '../Constants'
import axios from 'axios';

export const Adopt = (name, phone,pet_id) => dispatch => {
    
    try{
               let customer_id = null
               const registerUser = async () => {
                   await axios({
                    method: 'post',
                    url: 'http://209.97.133.58:8000/customer/add_customer',
                    data: {
                     "name": name,
                     "phone": phone
         
                    }
                  }).then(async ({data})=>{
                    var customer_id = data.customer_id
                    await axios({
                        method: 'post',
                        url: 'http://209.97.133.58:8000/adoption/adopt',
                        data: {
                        customer_id: customer_id,
                        pet_id: pet_id
             
                        }
                      }).then(({data})=> {
                          dispatch({
                              type: PET_ADOPT,
                              payload: {"success": true}
                          })
                      }).catch(e => {});
                  }).catch(e => {});

               }  
                  //Adopt using customer Id
                
            // Create Customer
                registerUser()
            
   }catch(e){
       
   }
    
}

