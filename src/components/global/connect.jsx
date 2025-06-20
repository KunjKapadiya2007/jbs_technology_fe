'use client';

import React from 'react';
import {Box, Typography, Button, Container} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Connect() {
    return (
       <Box sx={{
           pb:"80px"
       }}>
       <Container maxWidth={'lg'}>
           <Box
               sx={{
                   background: 'linear-gradient(90deg, #F97316 0%, #FACC15 100%)',
                   borderRadius: '24px',
                   padding: { xs: '24px', sm: '32px', md: '48px' },
                   display: 'flex',
                   justifyContent: 'space-between',
                   alignItems: 'center',
                   flexDirection: { xs: 'column', sm: 'row' },
                   gap: '20px',
               }}
           >
               <Box>
                   <Typography variant="subtitle1" color="white" sx={{ mb: 1 }}>
                       Looking for an IT Partner?
                   </Typography>
                   <Typography
                       variant="h5"
                       component="h2"
                       fontWeight="bold"
                       color="white"
                   >
                       Get in touch with us to discuss your project with a customised quote!
                   </Typography>
               </Box>

               <Button
                   variant="contained"
                   sx={{
                       backgroundColor: 'white',
                       color: 'black',
                       fontWeight: 'bold',
                       textTransform: 'none',
                       px: 3,
                       py: 1.5,
                       borderRadius: '16px',
                       '&:hover': {
                           backgroundColor: '#000',
                           color:"#FFF"
                       },
                   }}
                   endIcon={<ArrowOutwardIcon />}
               >
                   Let's Connect
               </Button>
           </Box>
       </Container>
       </Box>
    );
}

export default Connect;
