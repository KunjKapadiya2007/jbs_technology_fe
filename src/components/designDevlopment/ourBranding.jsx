'use client'
import React from 'react';
import { Box, GridLegacy as Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import img1 from '@/assets/designandDevlopment/Social_Media_Marketing.png';
import img2 from '@/assets/designandDevlopment/Search_Engine_Optimization.png';
import img3 from '@/assets/designandDevlopment/Graphic_Designing.png';
import img4 from '@/assets/designandDevlopment/Pay_Per_Click_Ads.png';
import img5 from '@/assets/designandDevlopment/Bulk_SMS_Email_Marketing.png';

const services = [
    {
        title: 'Social Media Marketing',
        description: 'Combine your brand story with engaging content to go viral on Social Media',
        image: img1,
    },
    {
        title: 'Search Engine Optimization',
        description: 'Climb the ladder of Search Engine Rankings for more clicks and conversions',
        image: img2,
    },
    {
        title: 'Graphic Designing',
        description: 'Design Product Posters, Infographics, Pitch Deck, Stationery and much more!',
        image: img3,
    },
    {
        title: 'Pay-Per-Click Ads',
        description: 'Deliver personalised and targeted Ads to generate maximum RoI with PPC Ads',
        image: img4,
    },
    {
        title: 'Content & Email Marketing',
        description: 'Boost your reach with bulk-sharing Newsletters and Promotional Mails affordably',
        image: img5,
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
                                borderRadius: 3,
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
                                    lineHeight:"25px",
                                    fontWeight:"500",
                                }}>
                                    {service.title}
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {service.description}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="primary"
                                    sx={{ fontWeight: 600, cursor: 'pointer' }}
                                >
                                    Read More →
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default OurBranding;
