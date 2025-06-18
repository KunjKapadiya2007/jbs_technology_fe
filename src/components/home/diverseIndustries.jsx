'use client'
import React from 'react';
import {Box, GridLegacy as Grid, Typography, Card, CardContent, Container} from '@mui/material';
import Image from 'next/image';

import img1 from '@/assets/home/Healthcare.webp';
import img2 from '@/assets/home/Education.webp';
import img3 from '@/assets/home/Retail.webp';
import img4 from '@/assets/home/Logistics.webp';
import img5 from '@/assets/home/Hospitality.webp';
import img6 from '@/assets/home/Real_Estate.webp';
import img7 from '@/assets/home/Sports.webp';
import img8 from '@/assets/home/Media.webp';
import img9 from '@/assets/home/Agritech.webp';
import img10 from '@/assets/home/Manufacturing.webp';

const industries = [
    { title: 'Healthcare', icon: img1 },
    { title: 'Education', icon: img2 },
    { title: 'Retail', icon: img3 },
    { title: 'Logistics', icon: img4 },
    { title: 'Hospitality', icon: img5 },
    { title: 'Real Estate', icon: img6 },
    { title: 'Sports', icon: img7 },
    { title: 'Media', icon: img8 },
    { title: 'Agritech', icon: img9 },
    { title: 'Manufacturing', icon: img10 },
];

function DiverseIndustries() {
    return (
        <Box sx={{
            backgroundColor: 'white',
        }}>
            <Container maxWidth={"lg"}>
                <Box sx={{ py:"80px",px: {md:"30px",sm:"20px",xs:"15px"}, textAlign: 'center' }}>
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
                            Serving Our Clients Across  <span style={{ color: '#F89100' }}>Diverse Industries</span>
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
                            A client-focused approach helps us to address the specific demands of businesses in various industries of the economy.
                        </Typography>
                    </Box>

                    <Grid container spacing={4} justifyContent="center">
                        {industries.map((item, index) => (
                            <Grid key={index} item xs={12} sm={4} md={3} lg={2.4}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        padding: '30px',
                                        borderRadius: '12px',
                                        border: '1px solid #F3F3F3',
                                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.03)',
                                        height: '100%',
                                        textAlign: 'center',
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                            <Image src={item.icon} alt={item.title} width={58} height={58} />
                                        </Box>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontWeight: 600, color: '#0D0036', fontSize: '17px',textAlign:"center"}}
                                        >
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default DiverseIndustries;
