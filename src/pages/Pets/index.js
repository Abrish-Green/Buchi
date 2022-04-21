import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import PetList from './PetList'

import { MultipleSelects, GoodWithChildren, SwitchForApiCheckToggler } from './Selects'
import { Link } from 'react-router-dom';

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

const MultipleSelectMenu =[
     ["cat", "dog"],
     ["baby", "young", "adult", "senior"],
     ["male", "female"],
     ["small", " medium", "large", "xlarge"]
]



const Index = () => {
    return (
        <div className="App-pet" sx={{ backgroundColor: '#fee' }}>
            <NavBar />
    
            <Paper
                sx={{
                height: {
                    xs: '75vh',
                    sm: '50vh',
                    md: '30vh',
                    lg: '25vh'
                },
                width: '100%',
                    
                backgroundColor: '#fff',
                border: '2px solid #D2691E',
                }}
                elevation={8}
          >
          <Grid container>
          <Grid item xs={12} sm={5} md={1.6}>
              <MultipleSelects data={MultipleSelectMenu[0]} title="Animal Type" />
          </Grid>
          <Grid item xs={12} sm={5} md={1.7}>
              <GoodWithChildren/>
          </Grid>
          <Grid item xs={12} sm={7} md={3.2}>
              <MultipleSelects data={MultipleSelectMenu[1]} title="Age" />
          </Grid>
          <Grid item xs={12} sm={5} md={2}>
              <MultipleSelects data={MultipleSelectMenu[2]} title="Gender"/>
          </Grid>
          <Grid item xs={12} sm={12} md={3.3}>
            <MultipleSelects data={MultipleSelectMenu[3]} title="Size" />
           </Grid>
           <Grid container item xs={12} sm={12} md={12}>
                <Grid xs={6} md={9.5}>
                    <Button sx={{ bgcolor: '#D2691E',float: 'right' }} variant="contained" size="large" startIcon={<SearchIcon />}>
                        Look
                    </Button>
                </Grid>
                <Grid item xs={6} md={2.5} sx={{ float: 'right' }}>
                    <SwitchForApiCheckToggler />

                </Grid>
           </Grid>
          
      </Grid>
          
            </Paper>
          <Box sx={{ mt: 2, width: '100%',backgroundColor: '#FFF8DC',}}>
                <PetList/>
                
    
          </Box>
        </div>
    );
};

export default Index