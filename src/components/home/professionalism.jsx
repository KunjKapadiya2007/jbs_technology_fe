'use client';
import React from 'react';
import { Box, Container, GridLegacy as Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import img from '@/assets/home/home_about.gif';

function Professionalism() {
    return (
        <Box sx={{ backgroundColor: '#FEFCF8', py:"30px" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Image on Left */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex' }}>
                            <Image
                                src={img}
                                alt="Professionalism Illustration"
                                width={508}
                                height={639}
                                style={{ width: '100%', height: '100%'}}
                            />
                        </Box>
                    </Grid>

                    {/* Text on Right */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '28px', sm: '32px', md: '38px', lg: '41px' },
                                fontWeight: 600,
                                mt: { lg: 6, sm: 3, xs: 2 },
                                pb: '35px',
                                color: '#19082D',
                                lineHeight: { xs: '38px', sm: '43px', md: '52px', lg: '65px' }, // ✅ fixed here
                                textAlign: 'left',
                            }}
                        >
                        Where Ideas Turn Into <br />
                            Outstanding Results With <br />
                            <Box component="span" sx={{ color: '#F89100' }}>
                                Expertise & Professionalism
                            </Box>
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '16px', md: '18px' },
                                color: '#3E3E3E',
                                pb:"40px",
                                // maxWidth: 520,
                                textAlign: { xs: 'center', md: 'left' },
                                mx: { xs: 'auto', md: 0 },
                            }}
                        >
                            Budventure Technologies is a trusted IT Partner for clients across the world.
                            We empower organisations with our technical skills and creative brilliance to help them achieve their goals.
                        </Typography>

                        <Grid container spacing={3} sx={{ pb:"50px" }}>
                            <Grid item xs={4}>
                                <Box  sx={{ fontWeight: 600, color: '#F89100', textAlign: { xs: 'center', md: 'left' },fontSize: {md:"40px" , sm:"30px" , xs:"25px"},mb:1 }}>
                                    10+
                                </Box>
                                <Box sx={{ color: '#3E3E3EB3', textAlign: { xs: 'center', md: 'left' },fontSize:"16px" }}>
                                    Years of Experience
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box  sx={{ fontWeight: 600, color: '#F89100', textAlign: { xs: 'center', md: 'left' },fontSize: {md:"40px" , sm:"30px" , xs:"25px"},mb:1 }}>
                                    500+
                                </Box>
                                <Box sx={{ color: '#3E3E3EB3', textAlign: { xs: 'center', md: 'left' },fontSize:"16px" }}>
                                    Global Clientele
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box  sx={{ fontWeight: 600, color: '#F89100', textAlign: { xs: 'center', md: 'left' },fontSize: {md:"40px" , sm:"30px" , xs:"25px"},mb:1 }}>
                                    80%
                                </Box>
                                <Box sx={{ color: '#3E3E3EB3', textAlign: { xs: 'center', md: 'left' },fontSize:"16px" }}>
                                    Client Retention
                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    border:"2px solid #F89100",
                                    color: '#F89100',
                                    fontWeight: 500,
                                    borderRadius: '10px',
                                    px: 5.5,
                                    py: 1.7,
                                    fontSize: "16px",
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#F89100',
                                        color: '#fff',
                                        borderColor: '#F89100',
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Professionalism;
