'use client'

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    GridLegacy as Grid,
    Chip,
    Link,
    useTheme,
    useMediaQuery
} from "@mui/material";
import img1 from '@/assets/home/Advertiger.webp';
import img2 from '@/assets/home/Senses.webp';
import img3 from '@/assets/home/Abantu.webp';

function CompletedProject() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeTab, setActiveTab] = useState('Web');

    const allProjects = {
        Web: [
            {
                category: 'Recruitment',
                title: 'Advertigers',
                description: 'A Recruiter Portal for finding the right job for Candidates & let Recruiters find the best match for Vacancies',
                image: img1,
                // bgColor: '#F4A261',
                // categoryColor: '#FF9F1C'
            },
            {
                category: 'Retail',
                title: 'Senses Akustik',
                description: 'A Mumbai-based company at the forefront of global innovation, specializing in cutting-edge furniture and acoustic solutions.',
                image: img2,
                // bgColor: '#2A9D8F',
                // categoryColor: '#FF9F1C'
            },
            {
                category: 'Media',
                title: 'Abantu Audio',
                description: 'A US-based Web & Mobile App providing streaming services for audiobooks and stories across multiple devices.',
                image: img3,
                // bgColor: '#8E7CC3',
                // categoryColor: '#FF9F1C'
            }
        ],
        Mobile: [
            {
                category: 'Social',
                title: 'Mobile Chat App',
                description: 'A real-time messaging application with advanced features for seamless communication across devices.',
                image: '/api/placeholder/400/250',
                // bgColor: '#E76F51',
                // categoryColor: '#FF9F1C'
            },
            {
                category: 'Finance',
                title: 'Banking App',
                description: 'Secure mobile banking solution with biometric authentication and real-time transaction monitoring.',
                image: '/api/placeholder/400/250',
                // bgColor: '#264653',
                // categoryColor: '#FF9F1C'
            }
        ],
        'E-Commerce': [
            {
                category: 'Fashion',
                title: 'StyleHub',
                description: 'Complete e-commerce platform for fashion brands with advanced inventory management and analytics.',
                image: '/api/placeholder/400/250',
                // bgColor: '#F77F00',
                // categoryColor: '#FF9F1C'
            },
            {
                category: 'Electronics',
                title: 'TechStore',
                description: 'Multi-vendor marketplace for electronics with integrated payment gateway and order tracking.',
                image: '/api/placeholder/400/250',
                // bgColor: '#003049',
                // categoryColor: '#FF9F1C'
            }
        ],
        'Customized Software': [
            {
                category: 'Healthcare',
                title: 'MedSystem',
                description: 'Hospital management system with patient records, appointment scheduling, and billing integration.',
                image: '/api/placeholder/400/250',
                // bgColor: '#06D6A0',
                // categoryColor: '#FF9F1C'
            },
            {
                category: 'Education',
                title: 'EduPlatform',
                description: 'Learning management system with virtual classrooms, assessment tools, and progress tracking.',
                image: '/api/placeholder/400/250',
                // bgC/oryColor: '#FF9F1C'
            }
        ],
        'Digital Marketing': [
            {
                category: 'Analytics',
                title: 'MarketInsight',
                description: 'Advanced analytics dashboard for tracking marketing campaigns and customer engagement metrics.',
                image: '/api/placeholder/400/250',
                // bgColor: '#F72585',
                // categoryColor: '#FF9F1C'
            },
            {
                category: 'Automation',
                title: 'CampaignBot',
                description: 'Automated marketing campaign management with AI-powered content generation and scheduling.',
                image: '/api/placeholder/400/250',
                // bgColor: '#4CC9F0',
                // categoryColor: '#FF9F1C'
            }
        ]
    };

    const tabs = ['Web', 'Mobile', 'E-Commerce', 'Customized Software', 'Digital Marketing'];

    const currentProjects = allProjects[activeTab] || [];

    return (
        <Box sx={{
            py: { xs: 4, md: 8 },
            backgroundColor: '#FEFCF8',
            minHeight: '100vh'
        }}>
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
                        A Glance At Our{' '}
                        <Box component="span" sx={{ color: '#f89100' }}>
                            Completed Projects
                        </Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#3e3e3e',
                            fontSize: '18px',
                            fontWeight: 400,
                            // maxWidth: '600px',
                            mx: 'auto',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Check out our project portfolio to witness how we translate our clients' vision into reality.
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 6,
                    flexWrap: 'wrap',
                    gap: 1
                }}>
                    {tabs.map((tab, index) => (
                        <Button
                            key={index}
                            onClick={() => setActiveTab(tab)}
                            disableRipple
                            sx={{
                                px: { xs: 2, md: 3 },
                                py: 1,
                                borderRadius: 0,
                                textTransform: 'none',
                                transition: 'width 0.15s ease',
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                fontWeight: 600,
                                fontFamily: 'Inter, sans-serif',
                                color: activeTab === tab ? '#FF9F1C' : '#1a1a1a',
                                backgroundColor: 'transparent',
                                position: 'relative',
                                minHeight: '40px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#FF9F1C',
                                    transition: 'width 0.15s ease',
                                    '&::after': {
                                        width: '16px',
                                    }
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    bottom: 0,
                                    width: activeTab === tab ? '16px' : '0px',
                                    height: '2px',
                                    backgroundColor: '#FF9F1C',
                                    transition: 'width 0.15s ease',
                                }
                            }}
                        >
                            {tab}
                        </Button>

                    ))}
                </Box>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {currentProjects.map((project, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                sx={{
                                    height: '100%',
                                    // borderRadius: '20px',
                                    // boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        // transform: 'translateY(-10px)',
                                        // boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        // height: 250,
                                        // background: `linear-gradient(135deg, ${project.bgColor} 0%, ${project.bgColor}CC 100%)`,
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
                                        image={project.image.src ?? project.image}
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
                                            border:"1px solid #C5C4C2",
                                            borderRadius:"5px",
                                            color: "#F89100",
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            // mb: 2,
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
                                        href="#"
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
                                color:"#fff"
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

export default CompletedProject;
