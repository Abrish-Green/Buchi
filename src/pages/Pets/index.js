import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid, Paper } from '@mui/material';

import { SelectAnimalType, GoodWithChildren } from './Selects'

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
              <h1 style={headerStyle} >Buchi</h1>
          </Typography>
      </Toolbar>
      </AppBar>
    </Box>
  );
}











const Index = () => {
    return (
        <div className="App-pet" sx={{ backgroundColor: '#fee' }}>
            <NavBar />
            <Paper
                sx={{
                height: '15vh',
                width: '100%',
                backgroundColor: '#fff',
                border: '2px solid #D2691E',
                }}
                elevation={8}
          >
          <Grid container>
          <Grid item  xs={12} sm={6} md={4} >
              <SelectAnimalType />
          </Grid>
          <Grid item  xs={12} sm={6} md={4} >
              <GoodWithChildren />
          </Grid>
          <Grid item sx={2}>
              X
          </Grid>
          <Grid item sx={2}>
              X
          </Grid>
      <Grid item sx={2}>
              X
          </Grid>
          <Grid item sx={2}>
              X
          </Grid>
      
      </Grid>
          
          </Paper>
          <Box
                sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#FFF8DC',
                
                }}
          >
                
          
          </Box>
        </div>
    );
};

export default Index