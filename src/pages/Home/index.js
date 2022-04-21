import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'

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

const NavBar = () => {
  
const headerStyle = {
                marginLeft: '16px',
                fontSize: '40px',
                fontWeight: '600',
                color: '#F4A460',
                backgroundClip: 'text',
                textDecoration: 'none'
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'transparent' ,margin:0, padding:0, height: '15vh'}}>
      <Toolbar>
            <IconButton
            size="large"
            aria-label="Menuicon"
            aria-haspopup="true"
            color="inherit"
            sx={{ color: '#001', display:{ xs: 'block',sm: 'none'} }}
        >
          <MenuIcon />
        </IconButton> 
        <Typography variant="h6" color="inherit" component="div">
              <Link to="/" href=""style={headerStyle} >Buchi</Link>
          </Typography>
      </Toolbar>
      </AppBar>
    </Box>
  );
}

const InfoPaper = (props) =>{
  return(
      <Paper 

      sx={{
        display: {
            xs: 'block',
            sm: 'inline-flex'
        },
        width: 290,
        height: 300,
        ml: 12,
        mt: 5
      }}
      
      elevation={0}
      >
          <Card>
          <CardActionArea >
            <CardMedia
              component="img"
              image={props.img}
              alt="img"
              sx={{ width: 151 , height : '24vh', ml: 7, border: 'none' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3" style={{ 
                color: '#F4A466',
                fontSize: '20px',
                padding: '1px 2px',
                letterSpacing: '1px',
               }}>
                { props.title }
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
  )
}
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
            <NavBar />
          <Box>
                {
                  cardData.map((card)=>{
                    return <InfoPaper img={card.img} title={card.title} description={card.description} />
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