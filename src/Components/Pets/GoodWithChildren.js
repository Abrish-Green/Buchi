import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { connect } from 'react-redux'
import { filterGoodWithChildren } from '../../Services/Actions/filter'
const  GoodWithChildren = ({ filterGoodWithChildren }) => {
  const [isGood, setIsGood] = React.useState(true);

  const handleChange = (event) => {
    setIsGood(event.target.value);
    filterGoodWithChildren(event.target.value)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: '80%' }}>
        <InputLabel id="demo-simple-select-standard-label">Good With Child</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={isGood}
          onChange={handleChange}
          label="Good With Child"
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default connect (null, { filterGoodWithChildren })(GoodWithChildren)