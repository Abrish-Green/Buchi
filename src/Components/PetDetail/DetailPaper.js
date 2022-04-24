import React, { useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Button, Grid, Paper } from '@mui/material';
import ImageViewer from './ImageViewer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AnimalDescriptorChips from '../Pets/AnimalDescriptorChips'
import AddCustomer from './AddCustomer';



const PetDetailPaper = ({data}) => {
    const { pet_id, photos } = data;
    const [open, setOpen] = useState(false)
    const handleModal = () => {
      setOpen(true)
    }

   return(
     <React.Fragment>
       <Paper  
         sx={{ ml: { xs: 5, sm: 12, md: 20, lg:35}, mt: { xs: 2}, height: {xs: '80vh', sm: '80vh',md: '80vh'}, width: {xs : '80%', sm: '70%', md: '60%', lg: '60%' } }}
         elevation={4}> 
         
         <Grid container direction="row" justifyContent="space-evenly" alignItems="stretch">
             <Grid item xs={10} sx={{ height: '100vh',  width: '60%'}}>
                   <ImageViewer photos={[1]}/>
                   <Box sx={{  m:{xs: 0, sm: 2, md: 5}, ml:{xs: 0, sm: 5, lg:15} }}>
                       <AnimalDescriptorChips data={data} />  
                   </Box>
                   <Grid xs={12} justifyContent="center" alignItems="center">
                     <Grid xs={7}>
                     <IconButton  sx={{ float:'right' }} color="primary" aria-label="Adopt pet" onClick={handleModal}>
                    
                     <FavoriteBorderIcon />
                           Adopt Me
                   
                   
                   </IconButton>

                     </Grid>

                     
                   </Grid>
             </Grid>
             
 
         </Grid>
       
     </Paper>
     <AddCustomer popup={open} />
     </React.Fragment>
   )
}
export default PetDetailPaper
