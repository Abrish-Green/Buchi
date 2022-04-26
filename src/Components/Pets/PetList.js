import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pet from './Pet'
import { NotFound } from './NotFound';
import { connect } from 'react-redux'

const PetList = (props) => {

  console.log("petlist", props.pets)
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box sx={{p: 2,display: 'flex', flexWrap: 'wrap',gap: 2}}>
                { (props.pets != null) && 
                  props.pets.map((pet,index)=>{
                      return <Pet key={index} data={pet}/>
                  })
                }
               { (props.pets &&
                 props.pets.length == 0) && 
                 <NotFound />
               }
                
            </Box>
        </Grid>
     
    </Grid>
  );
}

const mapStateToProps = state => ({
  pets: state.pets
});

export default connect(mapStateToProps, null)(PetList)