'use client'

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    CardContent,
    CardMedia,
    Grid,
    Chip,
    Link
} from "@mui/material";
import img1 from '@/assets/designandDevlopment/Laxmipati.webp';
import img2 from '@/assets/designandDevlopment/Inity.webp';
import img3 from '@/assets/designandDevlopment/Saucemen.webp';

function CompleteProject() {
    const projects = [
        {
            category: 'Retail',
            title: 'Laxmipati Sarees',
            description: 'Laxmipati Sarees, One of the India’s largest manufacturers of man-made fabric Sarees, Kurtis, Gowns etc',
            image: img1,
            link: '#'
        },
        {
            category: 'Hospitality',
            title: 'Initty',
            description: 'Mobile App designed to provide digital coupons for dining at restaurants, staying in hotels, and enjoying resort experiences.',
            image: img2,
            link: '#'
        },
        {
            category: 'Hospitality',
            title: 'Saucemen',
            description: 'An On-Demand Mobile Application for providing Home Cooking from Professional Chefs that specialise in varied Cuisines of The World',
            image: img3,
            link: '#'
        }
    ];

    return (
        <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#FEFCF8', minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '41px' },
                            color: '#1a1a1a',
                            mb: '10px',
                            lineHeight: '51px',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        A Glance At Our Completed Projects
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {projects.map((project, index) => (
                        <Grid item size={{xs:12,md:4}} key={index}>
                            <Box sx={{ height: '100%', overflow: 'hidden' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        px: 2
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={project.image.src}
                                        alt={project.title}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '10px'
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 3 }}>
                                    <Chip
                                        label={project.category}
                                        sx={{
                                            backgroundColor: '#FAFAFA',
                                            border: "1px solid #C5C4C2",
                                            borderRadius: "5px",
                                            color: "#F89100",
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            fontFamily: 'Inter, sans-serif'
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#1a1a1a',
                                            my: '10px',
                                            fontSize: '28px',
                                            fontFamily: 'Inter, sans-serif'
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#3E3E3E',
                                            lineHeight: 1.6,
                                            mb: '10px',
                                            fontSize: '0.95rem',
                                            fontFamily: 'Inter, sans-serif'
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Link
                                        href={project.link}
                                        sx={{
                                            color: '#f89100',
                                            textDecoration: 'underline',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            fontFamily: 'Inter, sans-serif',
                                        }}
                                    >
                                        Visit Website
                                    </Link>
                                </CardContent>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            px: 4.5,
                            py: 1.5,
                            borderRadius: '15px',
                            border: '2px solid #f89100',
                            color: '#FF9F1C',
                            fontSize: '1rem',
                            fontWeight: 500,
                            textTransform: 'none',
                            fontFamily: 'Inter, sans-serif',
                            '&:hover': {
                                borderColor: '#E8890B',
                                backgroundColor: '#f89100',
                                color: "#fff"
                            }
                        }}
                    >
                        View All Projects
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default CompleteProject;
