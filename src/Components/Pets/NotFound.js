import { Paper, Typography } from "@mui/material"

export function NotFound (){
    return(
        <Paper
          sx={{ ml:{ xs: 0, md: 15 , lg: 35}, height: {xs: '25vh'}, width: { xs: '100%', md: '60%', lg: '50%'} }}
          elevation={4}
        >
        <Typography variant="h3" gutterBottom component="div" sx={{ ml: { xs: 1, sm: 5, lg: 15}, p: 5, color: '#c02537', fontSize:{ xs: '34px', sm: '45px', lg: '50px'} }}>
            Not Found !
        </Typography>
        
        </Paper>
    )
  }