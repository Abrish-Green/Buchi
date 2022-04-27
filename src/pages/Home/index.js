import React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

import NavBar from '../../Components/Navbar'
import InfoPaper from '../../Components/Home/InfoPaper'

import dogImg from '../../assets/images/dog_img.jpg'
import catImg from '../../assets/images/cat_img.png'
import birdImg from '../../assets/images/bird_img.jpg'

import { useNavigate } from 'react-router-dom'

const cardData = [
  {
    img : dogImg,
    title: "Dogs",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintlaborum."

  },
  {
    img : catImg,
    title: "Cats",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum cia deserunt mollit anim id est laborum."
  },
  {
    img : birdImg,
    title: "Birds",
    description: "Duis aute irure dolor in reprehenderit in voluptate veli sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#0069d9'),
  backgroundColor: '#0069d9',
  '&:hover': {
    backgroundColor: '#0069d9',
  },
}));


const Index = () => {

    var navigate = useNavigate();
    const handleSubmit = ()=>{
        navigate('/pet')
    }
    return (
        <div className="App-home">
           
          <Box>
                {
                  cardData.map((card)=>{
                    return <InfoPaper key={card.title} img={card.img} title={card.title} description={card.description} />
                  })
                }
          </Box>

          <Grid container>
              
              <Grid item xs={12} sx={{ mt: 4 }} container justifyContent="center" alignItems="center" >
                 <ColorButton variant="contained" onClick={handleSubmit}><SearchIcon /> Look for Pet </ColorButton>
              </Grid>
             
          </Grid>

        </div>
    );
};

export default Index;