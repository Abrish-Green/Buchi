import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {Adopt} from '../../Services/Actions/adopt'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
const Congratulation = () => {
    return(
        <Grid container>
                <Grid item xs={12} md={8}>
                        <Typography variant="subtitle2" sx={{  color: '#D99058', fontSize: '2em', float: {xs: 'left', md:'right'}, fontWeight: 'bold' }} gutterBottom component="div">
                            Congratulations 
                        </Typography>
                        
                </Grid>
                <Grid container item xs={12} mt={0}>
                    <Grid item xs={12} md={12}>
                    <Typography variant="subtitle1" sx={{  color: ' #7d7d7d', fontSize: '1.2em', float: {xs: 'center' } }} gutterBottom component="div">
                    We will setup a meeting with your companion soon :) 
                </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                    <Link to="/pet">  
                           <Typography variant="subtitle2" sx={{  color: '#D99058', fontSize: '1em',textDecoration: 'none' }}>
                                  Browse for more...
                           </Typography>
                           </Link>
                    </Grid>
                </Grid>
            </Grid>
    )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: {xs: '70vh' },
  width: {xs: '60%', sm: '50%', md: '40%'},
  bgcolor: 'background.paper',
  border: '3px solid #F4A460',
  boxShadow: 24,
  p: 4,
};

const AddCustomer = (props) => {
  const [open, setOpen] = React.useState(props.popup);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [complete, setComplete] = React.useState(false)
  const [sending, setSending] = React.useState(false)
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  

  
  const handleSubmit = () => {
    props.Adopt(name,phone,props.pet_id)
    setComplete(true)
    
    
  }
  return (
    <div>
    
      <Modal
        open={props.popup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus 
      >
        <Box sx={style}>
              {
                sending &&  <HourglassEmptyIcon />
              }
            {
              complete ? 
                <Congratulation />
                :
                <Grid container>
                <Grid item xs={12} md={8}>
                        <Typography variant="subtitle2" sx={{  color: ' #7d7d7d', fontSize: '1.4em', float: {xs: 'left', md:'right'} }} gutterBottom component="div">
                            We don't know how to reach you
                                <Typography variant="body2" sx={{  color: ' #7d7d7d', fontSize: '.7em', float: {xs: 'left', md:'right'} }}  component="div">
                                Place your name and phone number, We will contact you asap.
                            </Typography>
                        </Typography>
                        
                </Grid>
                <Grid container item xs={12} mt={2}>
                    <Grid item xs={12} md={8}>
                    <TextField
                        
                        id="standard-error"
                        label="Name"
                        placeholder="Name"
                        variant="standard"
                        fullWidth 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                  />
                    </Grid>
                    <Grid item xs={12} md={8}>
                    <TextField
                        
                        id="standard-error"
                        label="Phone"
                        placeholder="+251"
                        variant="standard"
                        fullWidth
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)} 
                  />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} mt={4}>
                <Button onClick={handleSubmit} variant="contained" sx={{  bgcolor: '#FAA455', width: '35%' }}>
                    Send
                </Button>
                <Button onClick={()=>{handleClose()}} variant="contained" sx={{ ml: 2, bgcolor: ' #cf142b', width: '35%' }}>
                    Cancel
                </Button>
                </Grid>
            </Grid>
            }
                             
           
        </Box>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  adopt: state.adopt
});

export default connect(mapStateToProps, {Adopt})(AddCustomer)