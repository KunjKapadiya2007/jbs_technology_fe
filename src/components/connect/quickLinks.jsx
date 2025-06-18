import React from 'react';
import {Box, Typography, Grid, Paper, Button, Container} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

const links = [
    {
        icon: '/images/connect/Careers.png',
        title: 'Careers',
        description: 'Ready to explore and grow? Check out the open roles and join us now.',
        href: '#',
    },
    {
        icon: '/images/connect/Engagement_Models.png',
        title: 'Engagement Models',
        description: 'Unlock your business potential with the right plan and the right resources now.',
        href: '#',
    },
    {
        icon: '/images/connect/Life_at_Budventure.png',
        title: 'Life at Budventure',
        description: 'Come discover the opportunities and embrace the eco-culture together.',
        href: '#',
    },
];

const QuickLinks = () => {
    return (
        <Box sx={{py: 8, backgroundColor: '#fffbfb'}}>
            <Container maxWidth={'lg'} sx={{pb: '60px'}}>
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    sx={{mb:'55px', fontSize:'50px',lineHeight:'60px', color: '#1c103b'}}
                >
                    Quick Links
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {links?.map((item, index) => (
                        <Grid item size={{xs: 12, sm: 6, md: 4}} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: '60px',
                                    textAlign: 'center',
                                    borderRadius: 5,
                                    height: '100%',
                                    transition:
                                        'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, -webkit-box-shadow 0.3s',
                                    '&:hover': {
                                    backgroundImage: 'linear-gradient(137deg, #ffffff 0%, #ffffff73 100%)',
                                    boxShadow: '10px 10px 50px rgb(211 217 234 / 40%)',
                                    },
                                }}

                            >
                                <Box mb={3}>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                    />
                                </Box>

                                <Typography variant="h2" gutterBottom sx={{color:'#19082d',fontWeight:'500', fontSize:'25px',mb:'20px',cursor:'pointer', transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: '#f89100',
                                    },}}>
                                    {item.title}
                                </Typography>

                                <Typography variant="body2" sx={{fontSize:'17px',fontWeight:'400',lineHeight:'26px',mb:'20px', color:'#3e3e3e'}}>
                                    {item.description}
                                </Typography>

                                <Button
                                    endIcon={<ArrowForwardIcon/>}
                                    href={item.href}
                                    sx={{
                                        fontWeight: '500',
                                        textTransform: 'none',
                                        color: '#1c103b',
                                        fontSize:'18px',
                                        lineHeight:'16px',
                                        transition: 'color 0.4s ease',
                                        '&:hover': {
                                            color: '#f89100',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    Read More
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default QuickLinks;
