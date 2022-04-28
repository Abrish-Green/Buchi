import React from 'react';
import Box from '@mui/material/Box';

import PetList from '../../Components/Pets/PetList'
import LinearProgress from '@mui/material/LinearProgress';
import FilterBar from '../../Components/Pets/FilterBar';

const Index = () => {
    return (
        <div className="App-pet" sx={{backgroundColor: '#fee' }}>
        
          <FilterBar />
          <Box minHeight={380} sx={{ mt: 2, width: '100%',backgroundColor: '#FFF8DC'}}>
               
                <PetList />    
          </Box>
        </div>
    );
};

export default Index