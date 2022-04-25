import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { connect } from 'react-redux'


//Actions 
import { filterAge, filterAnimalType, filterGender, filterSize } from '../../Services/Actions/filter'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, AnimalName, theme) {
  return {
    fontWeight:
      AnimalName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelects = ({data,title, filterAnimalType, filterAge, filterGender, filterSize}) => {
  const theme = useTheme();
  const [customInput, setCustomInput] = React.useState([]);
  const [selects, setSelects] = React.useState([])
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCustomInput(
      typeof value === 'string' ? value.split(',') : value,
    );

    if(title === "Animal Type"){
      filterAnimalType(value)
    }
    if(title === "Age"){
      filterAge(value)
    }
    if(title === "Gender"){
      filterGender(value)
    }
    if(title === "Size"){
      filterSize(value)
    }
  };

 
  return (
    <div>
      <FormControl sx={{ m: 1, width: '80%' }}>
        <InputLabel id="demo-multiple-chip-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={customInput}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={title} />}
          autoWidth
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.1 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {data.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, customInput, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}



export default connect(null, { filterAnimalType, filterAge, filterGender, filterSize})(MultipleSelects) 

