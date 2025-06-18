'use client'
import React from 'react';
import { Box, Typography, Container, GridLegacy as Grid, Card, CardContent } from "@mui/material";
import img1 from '@/assets/home/Web.gif'
import img2 from '@/assets/home/Mobile.gif'
import img3 from '@/assets/home/Watch.gif'
import img4 from '@/assets/home/IOT.gif'
import bgimg from '@/assets/home/bud-home-back.jpg'


function Platforms() {
    const platforms = [
        {
            title: "Web",
            description: "Crafting exceptional web with customised features",
            image: img1
        },
        {
            title: "Mobile",
            description: "Building applications with seamless user experience",
            image: img2
        },
        {
            title: "Watch",
            description: "Transforming lifestyles with Wearable Technology Apps",
            image: img3
        },
        {
            title: "IOT",
            description: "Enabling a smarter future with powerful IoT Integrations",
            image: img4
        }
    ];

    return (
        <Box sx={{
            backgroundImage: `url(${bgimg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // py: { xs: 6, md: 8 },
            // minHeight: '100vh',
            py:"80px",
            display: 'flex',
            alignItems: 'center'
        }}>
        <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '28px', sm: '32px', md: '38px', lg: '41px' },
                                fontWeight: 'bold',
                                mb: "10px",
                                color: '#333'
                            }}
                        >
                            <span style={{ color: '#F89100' }}>Platforms</span> We Specialise In
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: '16px', md: '18px' },
                                color: '#3E3E3E',
                                fontWeight: 400,
                                // maxWidth: '800px',
                                mx: 'auto'
                            }}
                        >
                            Experience seamless development and integration solutions for the platform of your choice.
                        </Typography>
                    </Box>

                <Grid container spacing={3} sx={{ mt: 2 }}>
                    {platforms.map((platform, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    backgroundColor: 'white',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    border: 'none'
                                }}
                            >
                                <CardContent sx={{
                                    padding:"37px 30px 30px 30px",
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Box sx={{
                                        mb: 3,
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        height: '80px'
                                    }}>
                                        <img
                                            src={platform.image.src}
                                            alt={platform.title}
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontSize: { xs: '15px', md: '19px' },
                                            fontWeight: '500',
                                            textAlign: 'left',
                                            mb: '17px',
                                            color: '#19082D'
                                        }}
                                    >
                                        {platform.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#3E3E3E',
                                            lineHeight: 1.6,
                                            fontSize: '14px',
                                            flexGrow: 1,
                                            textAlign: 'left',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {platform.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Platforms;