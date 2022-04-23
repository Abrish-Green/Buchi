import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';


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

const AddCustomer = ({popup}) => {
  const [open, setOpen] = React.useState(popup);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                  />
                    </Grid>
                    <Grid item xs={12} md={8}>
                    <TextField
                        
                        id="standard-error"
                        label="Phone"
                        placeholder="+251"
                        variant="standard"
                        fullWidth 
                  />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} mt={4}>
                <Button variant="contained" sx={{  bgcolor: '#FAA455', width: '35%' }}>
                    Send
                </Button>
                </Grid>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default AddCustomer