'use client'
import React from 'react';
import {Box, Typography, Container, GridLegacy as Grid} from "@mui/material";
import Image from 'next/image';

import img1 from "@/assets/home/Abantu.png"
import img2 from "@/assets/home/Pop_Phones.png"
import img3 from "@/assets/home/Hoosier_Wholesale.png"
import img4 from "@/assets/home/My_Lusaka.png"
import img5 from "@/assets/home/Natural_Emart.png"
import img6 from "@/assets/home/Sukho_SPA.png"
import img7 from "@/assets/home/Apollo.png"
import img8 from "@/assets/home/Ranjit.png"
import img9 from "@/assets/home/Ramakrishna_Maths.png"
import img10 from "@/assets/home/Shree_Hari.png"
import img11 from "@/assets/home/One_Way_Cab.png"
import img12 from "@/assets/home/Laxmipati.png"
import img13 from "@/assets/home/OM_Jewellers.png"
import img14 from "@/assets/home/Senses.png"
import img15 from "@/assets/home/EduOption.png"
import img16 from "@/assets/home/Inity.png"
import img17 from "@/assets/home/JG_Group.png"
import img18 from "@/assets/home/Sewani.png"

const clientLogos = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18,
];

function OurClient() {
    return (
        <Box sx={{py: {xs: 6, md: 10}, px: 2, backgroundColor: '#fff'}}>
            <Container maxWidth="xl">
                {/* Heading */}
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontWeight: 700,
                        fontSize: {xs: '28px', md: '36px'},
                        color: '#0D0036',
                    }}
                >
                    Our Happy <Box component="span" sx={{color: '#F59E0B'}}>Clients</Box>
                </Typography>

                {/* Subtext */}
                <Typography
                    align="center"
                    sx={{
                        mt: 2,
                        mb: 6,
                        color: '#666',
                        fontSize: '16px',
                        maxWidth: '700px',
                        mx: 'auto',
                    }}
                >
                    Some prestigious brands that trust our commitment to excellence & innovation.
                </Typography>

                {/* Logo Grid */}
                <Grid container spacing={2} justifyContent="center">
                    {clientLogos.map((logo, index) => (
                        <Grid key={index} item xs={12} sm={4} md={2} >
                            <Box
                                key={index}
                                sx={{
                                    width: 'auto',
                                    height: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0.9,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 1,
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                <Image
                                    src={logo}
                                    alt={`client-logo-${index}`}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default OurClient;
