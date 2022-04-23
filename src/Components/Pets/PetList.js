import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pet from './Pet';
import { NotFound } from './NotFound';

const PetList = ({pets}) => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box sx={{p: 2,display: 'flex', flexWrap: 'wrap',gap: 2}}>
                { pets && 
                  pets.map((pet)=>{
                      return <Pet data={pet}/>
                  })
                }
               {
                 pets.length == 0 && 
                 <NotFound />
               }
                
            </Box>
        </Grid>
     
    </Grid>
  );
}

export default PetList