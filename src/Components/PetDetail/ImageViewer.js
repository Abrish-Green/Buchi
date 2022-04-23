import React from 'react';
import Carousel from 'nuka-carousel';
import { Grid } from '@mui/material';

const SingleImage = () =>{
    return(
        <React.Fragment>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={10} md={8} lg={6} >
                        <img style={{  height: '40vh', width: '100%' }} src="https://assets.imgix.net/unsplash/motorbike.jpg"  />
                </Grid>
            
            </Grid>

        </React.Fragment>
        
    )
}

const MultipleImage = () =>{
    return(
        <Carousel>
            <img style={{  height: '40vh', width: '100%' }} src="https://assets.imgix.net/unsplash/motorbike.jpg" />
            <img style={{  height: '40vh', width: '100%' }} src="https://assets.imgix.net/unsplash/motorbike.jpg" />
      </Carousel>
    )
}
const ImageViewer = ({photos}) => {
    return (
        <React.Fragment>
        {
            photos.length == 1 ?

            <SingleImage />
            :
            <MultipleImage />
        }
        </React.Fragment>
    );
  
}

export default ImageViewer