import React from 'react';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const InfoPaper = (props) =>{

  const navigate = useNavigate()
  return(
      <Paper 

      sx={{
        display: {
            xs: 'block',
            sm: 'inline-flex'
        },
        width: 290,
        height: 300,
        ml: 12,
        mt: 5
      }}
      
      elevation={0}
      >
          <Card>
          <CardActionArea onClick={()=>{navigate('/pet')}}>
            <CardMedia
              component="img"
              image={props.img}
              alt="img"
              sx={{ width: 151 , height : '24vh', ml: 7, border: 'none' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3" style={{ 
                color: '#F4A466',
                fontSize: '20px',
                padding: '1px 2px',
                letterSpacing: '1px',
               }}>
                { props.title }
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
  )
}

export default InfoPaper;