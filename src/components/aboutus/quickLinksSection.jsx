'use client';
import { Box, Container, Grid, Typography, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const quickLinks = [
    {
        title: 'Global Presence',
        icon: '/images/about/Global_Presence.png',
        href: '#'
    },
    {
        title: 'Engagement Models',
        icon: '/images/about/Engagement_Models.png',
        href: '#'
    },
    {
        title: 'Careers',
        icon: '/images/about/careers.png',
        href: '#'
    },
    {
        title: 'Infrastructure',
        icon: '/images/about/infrastructure.png',
        href: '#'
    },
    {
        title: 'Life At Budventure',
        icon: '/images/about/Life_at_Budventure.png',
        href: '#'
    },
    {
        title: 'Testimonials',
        icon: '/images/about/testimonials.png',
        href: '#'
    }
];

const QuickLinksSection = () => {
    return (
        <Box py={{ xs: 6, md: 12 }} px={2}>
            <Container maxWidth="lg">
                <Typography variant="h2" align='center' sx={{ fontSize: '50px', lineHeight: '60px', mb: '55px', fontWeight: '600' }}>
                    Quick Links
                </Typography>

                <Grid container spacing={6} mt={2}>
                    {quickLinks.map((link, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 5,
                                    textAlign: 'center',
                                    borderRadius: '30px',
                                    height: '100%',
                                    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Box sx={{ width: 80, height: 80, mx: 'auto', mb: 2, position: 'relative' }}>
                                    <Image src={link.icon} alt={link.title} fill style={{ objectFit: 'contain' }} />
                                </Box>
                                <Typography variant="h2" sx={{
                                    color: '#19082d', fontSize: '20px', fontWeight: '500', lineHeight: '35px', mb: '21px', transition: 'color 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#f89100',
                                    },
                                }}>
                                    {link.title}
                                </Typography>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                    mt={1}
                                    color="primary"
                                    fontSize="0.875rem"
                                >
                                    <Typography variant="body2" sx={{
                                        fontSize: '15px', fontWeight: '500', lineHeight: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#ff7a00',
                                        },
                                        '&:hover .arrow-icon': {
                                            transform: 'translateX(4px)',
                                        },
                                    }}>
                                        Read More
                                        <ArrowForwardIcon fontSize="small" className="arrow-icon"
                                            sx={{
                                                ml: 1,
                                                transition: 'transform 0.3s ease',
                                            }} />
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default QuickLinksSection;
