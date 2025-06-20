'use client'
import React from 'react';
import {Box, GridLegacy as Grid, Typography, Card, CardContent, CardMedia, Button} from '@mui/material';
import img1 from '@/assets/designandDevlopment/Web_Design_Development.png';
import img2 from '@/assets/designandDevlopment/Mobile_App_Design_Development.png';
import img3 from '@/assets/designandDevlopment/UI_UX_Design.png';
import img4 from '@/assets/designandDevlopment/Content_Management_Systems.png';
import img5 from '@/assets/designandDevlopment/Software_Development.png';
import img6 from '@/assets/designandDevlopment/eCommerce_Development.png';
import EastIcon from "@mui/icons-material/East";

const services = [
    {
        title: 'Web Design and Development',
        description: 'We craft digital experiences through our expert Web Design and Development to translate ideas into functional, user-centric websites and web applications.',
        image: img1,
    },
    {
        title: 'Mobile App Design and Development',
        description: 'Transforming concepts into interactive realities, our Mobile App services create engaging applications for seamless experiences.',
        image: img2,
    },
    {
        title: 'UI/UX Design',
        description: 'Increase your user engagement with our thoughtful UI/UX Designing. We believe in creating intuitive interfaces that enhance usability and interactions.',
        image: img3,
    },
    {
        title: 'Content Management Systems (CMS)',
        description: 'Simplify content control with our versatile CMS solutions, empowering efficient creation, modification, and organisation of digital content across platforms.',
        image: img4,
    },
    {
        title: 'Software Development',
        description: 'Our comprehensive software development services offer tailored solutions that address specific business needs.',
        image: img5,
    },
    {
        title: 'eCommerce Development',
        description: 'Empower your online business with E-commerce Development expertise to create robust platforms that provide personalised experiences and business growth.',
        image: img6,
    },
];

function OurBranding() {
    return (
        <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 8 }, textAlign: 'center',backgroundColor: '#FBFBFB' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 6 }}>
                Our Branding & Digital Marketing Services
            </Typography>
            <Grid container spacing={4} >
                {services.map((service, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Card
                            sx={{
                                maxWidth: 340,
                                width: '100%',
                                borderRadius: "30px",
                                backgroundColor: '#FFFFFF',
                                boxShadow: 'none',
                                textAlign: 'center',
                                padding:"60px 60px 55px",
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={service.image.src}
                                alt={service.title}
                                sx={{ width: 80, height: 80, mx: 'auto' }}
                            />
                            <CardContent>
                                <Box sx={{
                                    fontSize:"20px",
                                    color:"#19082D",
                                    lineHeight:"35px",
                                    fontWeight:"500",
                                    mb:"21px",
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: '#F89100',
                                    },
                                }}>
                                    {service.title}
                                </Box>
                                <Box sx={{ mb: "20px",fontSize:"13px",color:"#3E3E3E",fontWeight:"400" }}>
                                    {service.description}
                                </Box>
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
                                    Read More
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
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default OurBranding;
