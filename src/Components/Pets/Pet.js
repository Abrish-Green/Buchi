import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AnimalDescriptorChips from '../../Components/Pets/AnimalDescriptorChips'
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';

const LoadingCard = () => (
      <React.Fragment>
          <Skeleton animation="wave" variant="rectangular"  sx={{ ml: { xs: 6, sm: 3, md: 4, lg: 7}, height: {xs: '55vh'} ,width: {xs : '70%', sm: '40%', md: '27%', lg: '25%' } }}  />
      </React.Fragment>
    )
      
const Pet = ({ data }) => {

    const { pet_id, photos } = data;
    const loading = false
   
    const detailLink = `/pet/${pet_id}`
    return(
      <React.Fragment>
       {(loading) ?
         
         <LoadingCard />
         :
         <Paper  
           sx={{ ml: { xs: 6, sm: 3, md: 4, lg: 7}, height: {xs: '55vh'}, width: {xs : '70%', sm: '40%', md: '27%', lg: '25%' } }}
           elevation={4}> 
           <Link to={detailLink}>
           <img
             style={{  height: '70%', width: '100%' }}
             src={photos.url}
             alt="Loading"
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
 export default Pet;