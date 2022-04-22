import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import PetsIcon from '@mui/icons-material/Pets';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AddIcon from '@mui/icons-material/Add';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

const Pet = ({ data }) => {

   const { pet_id, type, gender, size, age, good_with_children, photos } = data;
   const loading = false
   const LoadingCard = () =>{
      return(
        <React.Fragment>
            <Skeleton animation="wave" variant="rectangular"  sx={{ ml: { xs: 6, sm: 3, md: 4, lg: 7}, height: {xs: '55vh'} ,width: {xs : '70%', sm: '40%', md: '27%', lg: '25%' } }}  />
        </React.Fragment>
      )
        
   }

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
            alt="Image"
          />
          </Link>
        <Box>
          <Chip sx={{ m:.5 }} color="primary" icon={<PetsIcon />} label={type} variant="outlined" />
          <Chip sx={{ m:.5 }} color="primary" icon={good_with_children ? <SentimentSatisfiedAltIcon /> : <SentimentVeryDissatisfiedIcon />} label="Good With Children" variant="outlined" />
          <Chip sx={{ m:.5 }} color="primary" icon={gender === "male" ? <MaleIcon /> : <FemaleIcon />} label={gender} variant="outlined" />
          <Chip sx={{ m:.5 }} color="primary" icon={<AccessTimeIcon />} label={age} variant="outlined" />
          <Chip sx={{ m:.5 }} color="primary" icon={<AddIcon />} label={size} variant="outlined" />
          </Box>
      </Paper>
      }
      </React.Fragment> 
      )
  }
const NotFound = () =>{
  return(
      <Paper
        sx={{ ml:{ xs: 0, md: 15 , lg: 35}, height: {xs: '25vh'}, width: { xs: '100%', md: '60%', lg: '50%'} }}
        elevation={4}
      >
      <Typography variant="h3" gutterBottom component="div" sx={{ ml: { xs: 1, sm: 5, lg: 15}, p: 5, color: '#c02537', fontSize:{ xs: '34px', sm: '45px', lg: '50px'} }}>
          Not Found !
      </Typography>
      
      </Paper>
  )
}
const testData = {
    "pet_id": 123,
    "type":"Cat",
    "gender":"male",
    "size":"small",
    "age":"baby",
    "good_with_children":false,
    "photos": {
        "url": 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU" 
    }
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
                <Pet data={testData} />
                <Pet data={testData} />
    
            </Box>
        </Grid>
     
    </Grid>
  );
}
