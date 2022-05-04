import React from 'react';
import Carousel from 'nuka-carousel';
import { Grid } from '@mui/material';

const SingleImage = ({url}) =>{
    return(
        <React.Fragment>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={10} md={8} lg={6} >
                        <img style={{  height: '50vh', width: '100%' }} alt="Image not avaliable" src={url} onError={(event) => {event.target.onerror = "";event.target.src = "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png";return true}} />
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
                    return(<img style={{  height: '50vh', width: '100%' }} alt="Image not avaliable" key={photo.url} src={photo.url} onError={(event) => {event.target.onerror = "";event.target.src = "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png";return true}} />)

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
