import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import PetsIcon from '@mui/icons-material/Pets';

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

import AccessTimeIcon from '@mui/icons-material/AccessTime';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AddIcon from '@mui/icons-material/Add';
const Pet = ({ data }) => {
   
   const { type, gender, size, age, good_with_children } = data;

    return(
      <Paper  
        sx={{ ml: { xs: 6, sm: 3, md: 4, lg: 7}, height: {xs: '55vh'}, width: {xs : '70%', sm: '40%', md: '27%', lg: '25%' } }}
        elevation={4}> 


        <Box>
          <Chip sx={{ m:.5 }} icon={<PetsIcon />} label={type} variant="outlined" />
          <Chip sx={{ m:.5 }} icon={good_with_children ? <SentimentSatisfiedAltIcon /> : <SentimentVeryDissatisfiedIcon />} label="Good With Children" variant="outlined" />
          <Chip sx={{ m:.5 }} icon={gender === "male" ? <MaleIcon /> : <FemaleIcon />} label={gender} variant="outlined" />
          <Chip sx={{ m:.5 }} icon={<AccessTimeIcon />} label={age} variant="outlined" />
          <Chip sx={{ m:.5 }} icon={<AddIcon />} label={size} variant="outlined" />
          </Box>
      </Paper>
    )
}

const testData = {
    "type":"Cat",
    "gender":"male",
    "size":"small",
    "age":"baby",
    "good_with_children":false 
}

export default function PetList() {
  return (
    <Grid container spacing={2}>
      
        <Grid item xs={12}>
            <Box sx={{p: 2,display: 'flex', flexWrap: 'wrap',gap: 2}}>
                  <Pet data={testData} />
                  <Pet data={testData} />
                  <Pet data={testData} />
                  <Pet data={testData} />
                  
            </Box>
        </Grid>
     
    </Grid>
  );
}
