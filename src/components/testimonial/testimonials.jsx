'use client';
import React from 'react';
import {
    Box,
    Typography,
    GridLegacy as Grid,
    Card,
    CardContent,
    Container
} from '@mui/material';
import Image from 'next/image';
import quote from '@/assets/testimonials/quote.png';

const testimonials = [
    {
        name: 'Luckens Cadet',
        role: 'CEO, Abantu Audio',
        text: "We've been a client of Budventure Technologies for several years now, and they continue to impress us with their innovative solutions and exceptional support. Their team consistently goes above and beyond to ensure our software is efficient, secure, and up-to-date."
    },
    {
        name: 'Mohamed Sabra',
        role: 'Director, SabTrek Technologies',
        text: "Working with Budventure has been a delight from start to finish. Their team’s creativity and technical process are unmatched. They took our concept and transformed it into an intuitive, user-friendly application. We’re grateful for their dedication and hard work."
    },
    {
        name: 'Francis Sakala',
        role: 'Director, MyMusika Marketplace',
        text: 'We were initially skeptical about outsourcing our software development, but it turned out to be very efficient. They delivered a top-notch product on time and within budget. Their professionalism, technical proficiency, and problem-solving skills were truly impressive.'
    },
    {
        name: 'Matthew Apsakardu',
        role: 'CEO, Apsos Media',
        text: "Working with Budventure has been a game-changer for our business. The quality of their work, attention to detail, and commitment to meeting deadlines were exceptional. We couldn't be happier with the results."
    },
    // ...repeat testimonials as needed
];

function Testimonials() {
    return (
        <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 8 }, backgroundColor: '#FDFDFE' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        color: '#F89100',
                        fontWeight: 500,
                        textAlign: 'center',
                        mb: '10px',
                        fontSize: { xs: '16px', sm: '18px', md: '20px' }
                    }}
                >
                    TESTIMONIALS
                </Box>
                <Box
                    sx={{
                        fontWeight: 600,
                        textAlign: 'center',
                        mb: 9,
                        color: '#19082D',
                        fontSize: { xs: '24px', sm: '32px', md: '40px' },
                        lineHeight: { xs: '32px', sm: '40px', md: '48px' }
                    }}
                >
                    Real Stories, Real Comments, Real Success!
                </Box>
                <Grid container spacing={4}>
                    {testimonials?.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    px: { xs: 3, sm: 4, md: 6 },
                                    py: { xs: 4, sm: 5, md: 7 },
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    backgroundColor: '#FFFFFF'
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <Box sx={{ mb: 2 }}>
                                        <Image src={quote} alt="quote" width={40} height={30} />
                                    </Box>
                                    <Box
                                        sx={{
                                            color: '#3E3E3E',
                                            my: '25px',
                                            fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                            lineHeight: { xs: '28px', sm: '30px', md: '34px' }
                                        }}
                                    >
                                        {testimonial.text}
                                    </Box>
                                    <Box
                                        sx={{
                                            fontWeight: 500,
                                            color: '#372748',
                                            fontSize: { xs: '16px', sm: '17px', md: '18px' },
                                            lineHeight: '28px'
                                        }}
                                    >
                                        {testimonial.name}
                                    </Box>
                                    <Box
                                        sx={{
                                            color: '#3E3E3EB5',
                                            fontSize: { xs: '13px', sm: '14px' },
                                            fontWeight: 300,
                                            lineHeight: '22px'
                                        }}
                                    >
                                        {testimonial.role}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Testimonials;
