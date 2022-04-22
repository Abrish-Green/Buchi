import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Chip from '@mui/material/Chip';
import PetsIcon from '@mui/icons-material/Pets';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//Components
const NavBar = () => {
    const headerStyle = {
        marginLeft: '16px',
        fontSize: '40px',
        fontWeight: '600',
        backgroundImage: 'linear-gradient(to left, #FFF8DC	, #F4A460)',
        color: 'transparent',
        backgroundClip: 'text',
        
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'transparent' ,margin:0, padding:0, height: '15vh'}}>
      <Toolbar>
            <IconButton
            size="large"
            aria-label="account of current user"
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


const DetailPaper = ({data}) => {
     const { pet_id, type, gender, size, age, good_with_children, photos } = data;

    return(
        <Paper  
          sx={{ ml: { xs: 5, sm: 12, md: 20, lg:35}, mt: { xs: 2}, height: {xs: '80vh', sm: '80vh',md: '80vh'}, width: {xs : '80%', sm: '70%', md: '60%', lg: '60%' } }}
          elevation={4}> 
          
          <Grid container direction="row" justifyContent="space-evenly" alignItems="stretch">
              <Grid item xs={10} sx={{ height: '100vh',  width: '60%'}}>
                    <ImageSlider photos={[1]}/>
                    <Box sx={{  m:{xs: 0, sm: 2, md: 5}, ml:{xs: 0, sm: 5, lg:15} }}>
                      <Chip sx={{ m:.5 }} color="primary" icon={<PetsIcon />} label={type} variant="outlined" />
                      <Chip sx={{ m:.5 }} color="primary" icon={good_with_children ? <SentimentSatisfiedAltIcon /> : <SentimentVeryDissatisfiedIcon />} label="Good With Children" variant="outlined" />
                      <Chip sx={{ m:.5 }} color="primary" icon={gender === "male" ? <MaleIcon /> : <FemaleIcon />} label={gender} variant="outlined" />
                      <Chip sx={{ m:.5 }} color="primary" icon={<AccessTimeIcon />} label={age} variant="outlined" />
                      <Chip sx={{ m:.5 }} color="primary" icon={<AddIcon />} label={size} variant="outlined" />
                    </Box>
                    <Grid xs={12} justifyContent="center" alignItems="center">
                      <Grid xs={7}>
                      <IconButton sx={{ float:'right' }} color="primary" aria-label="Adopt pet">
                         <FavoriteBorderIcon />
                            Adopt
                      </IconButton></Grid>

                      
                    </Grid>
              </Grid>
              
  
          </Grid>
        
      </Paper>
    )
}



const Index = () => {
  return (
    <div className="App-Pet-Detail">
        <NavBar />
        <DetailPaper data={testData} />
    </div>
  )
}

export default Index;