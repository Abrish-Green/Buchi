import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

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
    
export default NavBar