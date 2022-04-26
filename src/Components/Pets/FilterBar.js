import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import  GoodWithChildren  from './GoodWithChildren'
import MultipleSelects from '../../Components/Form/MultipleSelectes'
import  SwitchForApiCheckToggler from '../../Components/Form/SwitchForApiCheckToggler'
import { connect } from 'react-redux'
import { loadPets } from '../../Services/Actions/filter'
import { FetchFromLocalDb } from '../../Services/Utils/FetchData'
const MultipleSelectMenu =[
     ["cat", "dog"],
     ["baby", "young", "adult", "senior"],
     ["male", "female"],
     ["small", "medium", "large", "xlarge"]
]


const data = []
function FilterBar(props) {
    
    const [type, setType] = React.useState([]);
    const [good_with_children, setGood_with_children] = React.useState()
    const [age, setAge] = React.useState()
    const [gender, setGender] = React.useState()
    const [size, setSize] = React.useState()
    const [include_petApiFilter, setInclude_petApiFilter] = React.useState(true)
    const queryData = { type, good_with_children, age, gender, size}
    useEffect(() => {
        if(props.filter.type != null) setType((typeof props.filter.type !== 'string') ? props.filter.type.join() : props.filter.type)
        if(props.filter.good_with_children != null)setGood_with_children(props.filter.good_with_children)
        if(props.filter.good_with_children == null) setGood_with_children(true)
        if(props.filter.age != null) setAge((typeof props.filter.age !== 'string') ? props.filter.age.join() : props.filter.age)
        if(props.filter.gender != null) setGender((typeof props.filter.gender !== 'string') ? props.filter.gender.join() : props.filter.gender)
        if(props.filter.size != null) setSize((typeof props.filter.size !== 'string') ? props.filter.size.join() : props.filter.size)
        if(props.filter.include_petApiFilter != null) setInclude_petApiFilter(props.filter.include_petApiFilter)
        

    }, [props.filter])
        const onload = () => {
                        props.loadPets(type , good_with_children, age, gender, size,include_petApiFilter)

        }
        const handleLook = () =>{
            props.loadPets(type , good_with_children, age, gender, size,include_petApiFilter)

        }
        onload();
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
              <MultipleSelects key="animal type" data={MultipleSelectMenu[0]} title="Animal Type" />
          </Grid>
          <Grid item xs={12} sm={5} md={1.7}>
              <GoodWithChildren/>
          </Grid>
          <Grid item xs={12} sm={7} md={3.2}>
              <MultipleSelects key="age" data={MultipleSelectMenu[1]} title="Age" />
          </Grid>
          <Grid item xs={12} sm={5} md={2}>
              <MultipleSelects key="gender" data={MultipleSelectMenu[2]} title="Gender"/>
          </Grid>
          <Grid item xs={12} sm={12} md={3.3}>
            <MultipleSelects key="size" data={MultipleSelectMenu[3]} title="Size" />
           </Grid>
           <Grid container item xs={12} sm={12} md={12}>
                <Grid item xs={6} md={3}>
                    <SwitchForApiCheckToggler sx={{ width: '10%' }} />
  
                </Grid>
                <Grid item xs={6} md={8}>
                    <Button onClick={handleLook} sx={{ bgcolor: '#D2691E', float: 'right' }} variant="contained" size="large" startIcon={<SearchIcon />}>
                        Look
                    </Button>

                </Grid>
           </Grid>
          
      </Grid>
          
            </Paper>

  )
}

FilterBar.propTypes = {}

const mapStateToProps = state => ({
    filter : state.filter 
});

export default connect(mapStateToProps,{ loadPets })(FilterBar)
