import React from 'react';
import Carousel from 'nuka-carousel';
import { Grid } from '@mui/material';

const SingleImage = ({url}) =>{
    return(
        <React.Fragment>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={10} md={8} lg={6} >
                        <img style={{  height: '40vh', width: '100%' }} src={url}  />
                </Grid>
            
            </Grid>

        </React.Fragment>
        
    )
}

const MultipleImage = ({photos}) =>{
    return(
        <Carousel>
            {
                photos && 

                photos.map((photo)=>{
                    return(<img style={{  height: '40vh', width: '100%' }} src={photo.url} />)

                })
            }
      </Carousel>
    )
}
const ImageViewer = (props) => {
    return (
        <React.Fragment>

       

    
            {  (typeof props.photos.url === 'string' ) ?  <SingleImage url={props.photos.url}/> : <MultipleImage photos={props.photos}/> }
            
        
        </React.Fragment>
    );
  
}

export default ImageViewer