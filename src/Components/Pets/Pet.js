import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AnimalDescriptorChips from '../../Components/Pets/AnimalDescriptorChips'
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux'
import { selectPet } from '../../Services/Actions/petDetail'

const LoadingCard = () => (
      <React.Fragment>
          <Skeleton animation="wave" variant="rectangular"  sx={{ ml: { xs: 6, sm: 3, md: 4, lg: 7}, height: {xs: '55vh'} ,width: {xs : '70%', sm: '40%', md: '27%', lg: '25%' } }}  />
      </React.Fragment>
    )
      
const Pet = ({ data , selectPet}) => {

    let photos = "";
    let loading = false
    
    if(data.photos != null){
        
        if(data.photos[0]){
          
          photos = data.photos[0].url
        }else{
          photos = "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
        }
         
    }else{
      photos = "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
      loading = false
    
    }
    
    const handleSelect = () => {
      selectPet(data)
    }
    
   
    const detailLink = `/pet/${data.pet_id}`
    return(
      <React.Fragment>
       {(loading) ?
         
         <LoadingCard />
         :
         <Paper  
           sx={{ ml: { xs: 4, sm: 12, md: 2}, height: {xs: '70vh',sm:'80vh', md: '80vh',}, width: {xs : '85%', sm: '70%', md: '45%',lg:'30%' } }}
           elevation={4}> 
           <Link onClick={handleSelect} to={detailLink}>
           <img
             style={{  height: '70%', width: '100%' }}
             src={photos}
             onError={(event) => {
              event.target.onerror = "";
              event.target.src = "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
              return true;
           }}
             alt="Image not Available"
           />
           </Link>
         <Box>
             <AnimalDescriptorChips data={data}/>  
         </Box>
       </Paper>
       }
       </React.Fragment> 
       )
   }
 export default connect(null, { selectPet })(Pet);