'use client';
import React from 'react';
import { Box, Container, GridLegacy as Grid, Typography, Card, CardContent, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import img1 from '@/assets/home/Mern_stack.png';
import img2 from '@/assets/home/Full_Stack.png';
import img3 from '@/assets/home/NodeJS_Developers.png';
import img4 from '@/assets/home/ReactJS_Developers.png';
import img5 from '@/assets/home/Laravel.png';
import img6 from '@/assets/home/Flutter.png';
import img7 from '@/assets/home/React_Native_Developers.png';
import img8 from '@/assets/home/WordPress.png';

const resources = [
    { title: 'Hire MERN Stack Developer', image: img1 },
    { title: 'Hire Full Stack Developers', image: img2 },
    { title: 'Hire NodeJS Developer', image: img3 },
    { title: 'Hire ReactJS Developer', image: img4 },
    { title: 'Hire Laravel Developers', image: img5 },
    { title: 'Hire Flutter Developers', image: img6 },
    { title: 'Hire React Native Developers', image: img7 },
    { title: 'Hire WordPress Developers', image: img8 },
];

function DedicatedResource() {
    return (
        <Box sx={{ backgroundColor: '#fff', py: { xs: 6, md: 8 } }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '28px', sm: '32px', md: '38px', lg: '41px' },
                            fontWeight: 'bold',
                            mb: '10px',
                            color: '#333',
                        }}
                    >
                        Hire Our  <span style={{ color: '#F89100' }}>Dedicated Resources</span>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '16px', md: '18px' },
                            color: '#3E3E3E',
                            fontWeight: 400,
                            // maxWidth: '800px',
                            mx: 'auto',
                        }}
                    >
                        Achieve the perfect balance of quality and affordability by hiring dedicated resources for your individual projects.
                    </Typography>
                </Box>

                {/* Grid Cards */}
                <Grid container spacing={3}>
                    {resources.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    padding:"50px",
                                    height: '100%',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                        // transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Box component="img" src={item.image.src} alt={item.title} sx={{ width: 80, height: 80, mb: 2 }} />
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 500, fontSize: '18px', color: '#19082D', mb: '21px','&:hover': {
                                            color: '#F89100',
                                            background: 'transparent',
                                        }, }}
                                >
                                    {item.title}
                                </Typography>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: '#19082D',
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        fontSize: '18px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        transition: 'color 0.3s ease',

                                        '&:hover': {
                                            color: '#F89100',
                                            background: 'transparent',
                                            '.arrow-icon': {
                                                transform: 'translateX(8px)',
                                                color: '#F89100',
                                            },
                                        },
                                    }}
                                >
                                    Hire Now
                                    <Box
                                        component="span"
                                        className="arrow-icon"
                                        sx={{
                                            display: 'inline-flex',
                                            transition: 'transform 0.3s ease, color 0.3s ease',
                                            fontSize: '20px',
                                        }}
                                    >
                                        <EastIcon fontSize="inherit" />
                                    </Box>
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default DedicatedResource;
