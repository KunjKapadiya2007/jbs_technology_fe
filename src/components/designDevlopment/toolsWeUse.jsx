'use client'
import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import Image from 'next/image';

// Image Imports
import img1 from '@/assets/designandDevlopment/Sketch.png';
import img2 from '@/assets/designandDevlopment/Figma.png';
import img3 from '@/assets/designandDevlopment/InVision.png';
import img4 from '@/assets/designandDevlopment/Adobe_After_Effects.png';
import img5 from '@/assets/designandDevlopment/Adobe_XD.png';
import img6 from '@/assets/designandDevlopment/Canva.png';
import img7 from '@/assets/designandDevlopment/Zeplin.png';
import img8 from '@/assets/designandDevlopment/GitHub.png';
import img9 from '@/assets/designandDevlopment/Bitbucket.png';
import img10 from '@/assets/designandDevlopment/Docker.png';
import img11 from '@/assets/designandDevlopment/Postman.png';
import img12 from '@/assets/designandDevlopment/Npm.png';
import img13 from '@/assets/designandDevlopment/VS_Code.png';
import img14 from '@/assets/designandDevlopment/Sublime_Text.png';
import img15 from '@/assets/designandDevlopment/Jira.png';

// Tools Data
const tools = [
    { name: 'Sketch', img: img1 },
    { name: 'Figma', img: img2 },
    { name: 'InVision', img: img3 },
    { name: 'After Effects', img: img4 },
    { name: 'Adobe XD', img: img5 },
    { name: 'Canva', img: img6 },
    { name: 'Zeplin', img: img7 },
    { name: 'GitHub', img: img8 },
    { name: 'Bitbucket', img: img9 },
    { name: 'Docker', img: img10 },
    { name: 'Postman', img: img11 },
    { name: 'Npm', img: img12 },
    { name: 'VS Code', img: img13 },
    { name: 'Sublime Text', img: img14 },
    { name: 'Jira', img: img15 },
];

const ToolsWeUse = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 5, px: 2 }}>
           <Container maxWidth={"lg"}>
               <Typography variant="h4" fontWeight="bold" mb={4}>
                   Tools We Use For Design & Development
               </Typography>

               <Grid container spacing={3} justifyContent="center">
                   {tools.map((tool, index) => (
                       <Grid item size={{xs:6,sm:4,md:2.4}} key={index}>
                           <Box
                               sx={{
                                   padding:"30px 30px 50px 30px",
                                   borderRadius: 2,
                                   height: "204px",
                                   width: "161px",
                                   transition: 'all 0.3s ease-in-out',
                                   // boxShadow: '0px 8px 24px rgba(252, 191, 59, 0.4)' ,
                                   '&:hover': {
                                       boxShadow: '0px 8px 24px rgba(252, 191, 59, 0.4)',
                                   },
                               }}
                           >
                               <Image
                                   src={tool.img}
                                   alt={tool.name}
                                   style={{ width: 58, height: 58, margin: '0 auto' }}
                               />
                               <Box sx={{
                                   fontSize:"19px",
                                   mb:"16px",
                                   mt:"18px",
                                   color:"#19082D",
                                   fontWeight:"500",
                                   lineHeight:"35px",
                               }}>
                                   {tool.name}
                               </Box>
                           </Box>
                       </Grid>
                   ))}
               </Grid>
           </Container>
        </Box>
    );
};

export default ToolsWeUse;
