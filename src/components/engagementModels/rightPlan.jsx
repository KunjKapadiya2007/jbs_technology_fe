'use client';

import React from 'react';
import {Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Divider} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const plans = [
    {
        title: 'Full Time',
        features: ['8 hours a day', '5 days a week', 'Dedicated resource'],
    },
    {
        title: 'Part Time',
        features: ['4 hours a day', '5 days a week', 'Dedicated resource'],
    },
    {
        title: 'Hourly',
        features: ['60 hours a month', 'Pay-as-you-consume', 'Ideal for low volume work'],
    },
];

export default function RightPlan() {
    return (
        <Box sx={{ py: '80px', backgroundColor: '#f9f9fb' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: '55px' }}>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            mb: '10px',
                            fontSize: '20px',
                            fontWeight: 500,
                            lineHeight: '30px',
                            textTransform: 'uppercase',
                            color: '#f89100',
                        }}
                    >
                        THE RIGHT PLAN
                    </Typography>
                    <Typography
                        className={'jost'}
                        variant="h1"
                        sx={{
                            fontSize: { md: '50px', sm: '42px', xs: '36px' },
                            textAlign: 'center',
                            lineHeight: '60px',
                            fontWeight: 600,
                            color: '#19082d',
                            fontFamily: 'Jost, sans-serif',
                        }}
                    >
                        Our Engagement Models
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {plans.map((plan, index) => (
                        <Grid item size={{xs :12, sm :6, md :4,}} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    p: {lg:'35px 50px 50px' ,xs:'35px 40px 50px' ,  },
                                    borderRadius: '20px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h3" sx={{ fontWeight: 700, fontSize:'20px' ,color: '#001f3f', mb: 2 }}>
                                        {plan.title.toUpperCase()}
                                    </Typography>
                                    <Box spacing={1} sx={{borderTop:'1px solid #4d4c4c29' ,}}>
                                        {plan.features.map((feature, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'center' , mt:2 }}>
                                                <CheckCircleOutlineIcon  sx={{ color: '#999', mr: 1.5 , fontSize:'24px' }} />
                                                <Typography sx={{ color: '#372748', fontSize: '16px' }}>{feature}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>

                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        className={'jost'}
                                        sx={{
                                            color: '#f89100',
                                            border: '2px solid #f89100',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderRadius: '15px',
                                            p:'21px 45px',
                                            fontSize: '18px',
                                            ':hover': {
                                                backgroundColor: '#f89100',
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        Hire Now
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
