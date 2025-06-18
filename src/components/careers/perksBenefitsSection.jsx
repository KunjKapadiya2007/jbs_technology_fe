'use client';
import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';

const perks = [
    { title: 'Employee-First Culture', image: '/images/careers/Employee_First_Culture.png' },
    { title: 'Great Work-Life Balance', image: '/images/careers/Great_Work_Life_Balance.png' },
    { title: '5 Days Working', image: '/images/careers/5_Days.png' },
    { title: 'Open Door Policy', image: '/images/careers/Open_Door_Policy.png' },
    { title: 'Leave Enhancement', image: '/images/careers/Leave_Enhancement.png' },
    { title: 'Continuous Development', image: '/images/careers/Continuous_Development.png' },
    { title: 'Monthly Training', image: '/images/careers/Monthly_Training_Sessions.png' },
    { title: 'Monthly Team Celebrations', image: '/images/careers/Monthly_Team_Celebrations.png' },
    { title: 'Birthday Celebrations', image: '/images/careers/Birthday_Celebrations.png' },
    { title: 'Fun Friday Activities', image: '/images/careers/Fun_Friday_Activities.png' },
];

const PerksBenefitsSection = () => {
    return (
        <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
            <Typography
                variant="h4"
                align="center"
                fontWeight={700}
                mb={'55px'}
                sx={{ color: '#19082d',fontSize:'40px',lineHeight:'40px',fontWeight:'500' }}
            >
                Perks & Benefits
            </Typography>

            <Grid container spacing={3}>
                {perks.map((perk, index) => (
                    <Grid item key={index} size={{xs:12,sm:6,md:4,lg:2.4}}>
                        <Paper
                            elevation={3}
                            sx={{
                                textAlign: 'center',
                                borderRadius: 4,
                                p: '20px 10px',
                                height: '100%',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                <Image
                                    src={perk.image}
                                    alt={perk.title}
                                    width={100}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                            <Typography
                                variant="h3"
                                fontWeight={600}
                                sx={{ color: '#19082d', my: '10px', fontSize: '28px', lineHeight: '42px',fontWeight:'500' }}
                            >
                                {perk.title}
                            </Typography>
                            <Box
                                sx={{
                                    width: '120px',
                                    height: '3px',
                                    backgroundColor: '#f89100',
                                    margin: '0 auto',
                                    borderRadius: '5px',
                                }}
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PerksBenefitsSection;
