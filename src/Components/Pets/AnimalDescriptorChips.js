import React from 'react'
import Chip from '@mui/material/Chip';
import PetsIcon from '@mui/icons-material/Pets';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AddIcon from '@mui/icons-material/Add';

export default function AnimalDescriptorChips({data}) {
    
 const { type, gender, size, age, good_with_children } = data;
  return (
    <React.Fragment>
        <Chip sx={{ m:.5 }} color="primary" icon={<PetsIcon />} label={type} variant="outlined" />
        <Chip sx={{ m:.5 }} color="primary" icon={good_with_children ? <SentimentSatisfiedAltIcon /> : <SentimentVeryDissatisfiedIcon />} label="Good With Children" variant="outlined" />
        <Chip sx={{ m:.5 }} color="primary" icon={gender === "male" ? <MaleIcon /> : <FemaleIcon />} label={gender} variant="outlined" />
        <Chip sx={{ m:.5 }} color="primary" icon={<AccessTimeIcon />} label={age} variant="outlined" />
        <Chip sx={{ m:.5 }} color="primary" icon={<AddIcon />} label={size} variant="outlined" />
    
    </React.Fragment>
  )
}
