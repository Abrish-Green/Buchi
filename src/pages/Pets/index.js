import React from 'react';
import Box from '@mui/material/Box';

import PetList from '../../Components/Pets/PetList'
import LinearProgress from '@mui/material/LinearProgress';
import FilterBar from '../../Components/Pets/FilterBar';

const testData = [
    {
    "pet_id": 123,
    "type":"Cat",
    "gender":"male",
    "size":"small",
    "age":"baby",
    "good_with_children":true,
    "photos": {
        "url": 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU" 
    }
    },
    {
        "pet_id": 123,
        "type":"Dog",
        "gender":"female",
        "size":"small",
        "age":"baby",
        "good_with_children":false,
        "photos": {
            "url": 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU" 
        }
        },
        {
            "pet_id": 123,
            "type":"Cat",
            "gender":"male",
            "size":"small",
            "age":"baby",
            "good_with_children":false,
            "photos": {
                "url": 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU" 
            }
            },
    
]
const Index = () => {
    return (
        <div className="App-pet" sx={{backgroundColor: '#fee' }}>
        
          <FilterBar />
          <Box minHeight={380} sx={{ mt: 2, width: '100%',backgroundColor: '#FFF8DC'}}>
               
                <PetList pets={testData}/>    
          </Box>
        </div>
    );
};

export default Index