import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { GoodWithChildren } from './GoodWithChildren'
import MultipleSelects from '../../Components/Form/MultipleSelectes'
import  SwitchForApiCheckToggler from '../../Components/Form/SwitchForApiCheckToggler'


const MultipleSelectMenu =[
     ["cat", "dog"],
     ["baby", "young", "adult", "senior"],
     ["male", "female"],
     ["small", " medium", "large", "xlarge"]
]



function FilterBar(props) {
  return (
    
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

  )
}

FilterBar.propTypes = {}

export default FilterBar
