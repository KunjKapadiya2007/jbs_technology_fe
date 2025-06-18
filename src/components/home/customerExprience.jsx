'use client';
import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import beforeHover from '@/assets/home/quote4.png';
import afterHover from '@/assets/home/quote7.png';

const testimonials = [
    {
        id: 1,
        name: 'Rekha Songara',
        position: 'Director, Songara All Ayurvedic',
        content:
            'Their quality output and speed of execution is very good. The best thing about them is whenever there is a customisation required beyond the scope of the projects, they have always supported us by going the extra mile.',
    },
    {
        id: 2,
        name: 'Luckens Cadet',
        position: 'CEO, Adanta Audio',
        content:
            "We've been a client of Budventure Technologies for several years now, and they continue to impress us with their innovative solutions and exceptional support. Their team consistently goes above and beyond to ensure our software is efficient, secure, and up-to-date.",
    },
    {
        id: 3,
        name: 'Mohamed Sabra',
        position: 'Director, SabTrek Technologies',
        content:
            "Working with Budventure has been a delight from start to finish. Their team's creativity and technical process are unmatched. They took our concept and transformed it into an intuitive, user-friendly application. We're grateful for their dedication and hard work.",
    },
    {
        id: 4,
        name: 'Mohamed Sabra',
        position: 'Director, SabTrek Technologies',
        content:
            "Working with Budventure has been a delight from start to finish. Their team's creativity and technical process are unmatched. They took our concept and transformed it into an intuitive, user-friendly application. We're grateful for their dedication and hard work.",
    },
    {
        id: 5,
        name: 'Mohamed Sabra',
        position: 'Director, SabTrek Technologies',
        content:
            "Working with Budventure has been a delight from start to finish. Their team's creativity and technical process are unmatched. They took our concept and transformed it into an intuitive, user-friendly application. We're grateful for their dedication and hard work.",
    },
    {
        id: 6,
        name: 'Mohamed Sabra',
        position: 'Director, SabTrek Technologies',
        content:
            "Working with Budventure has been a delight from start to finish. Their team's creativity and technical process are unmatched. They took our concept and transformed it into an intuitive, user-friendly application. We're grateful for their dedication and hard work.",
    },
];

function CustomerExperience() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#FEFCF8' }}>
            <Container maxWidth="lg">
                {/* Header */}
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
                        A Look at <span style={{ color: '#F89100' }}>Customer Experiences</span>
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
                        Witness the journey of delight and success through the words of our satisfied clients.
                    </Typography>
                </Box>

                {/* Swiper Slider */}
                <Box sx={{ position: 'relative' }}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                            bulletClass: 'custom-bullet',
                            bulletActiveClass: 'custom-bullet-active',
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        style={{
                            paddingBottom: '60px',
                            // Set minimum height for the swiper container
                            minHeight: '400px'
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide
                                key={testimonial.id}
                                style={{
                                    display: 'flex',
                                    // Ensure slides stretch to full height
                                    height: 'auto'
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        padding: { xs: '30px 20px', sm: '35px 25px', md: '40px 30px' },
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        // Set minimum height for consistent card sizing
                                        minHeight: { xs: '320px', sm: '350px', md: '380px' },
                                        width: '100%',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                        },
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Quote Icon */}
                                    <Box
                                        component="img"
                                        src={hoveredIndex === index ? afterHover.src : beforeHover.src}
                                        alt="Quote icon"
                                        sx={{
                                            position: 'absolute',
                                            top: 60,
                                            right: 30,
                                            width: '36px',
                                            height: '36px',
                                            transition: 'all 0.3s ease',
                                            objectFit: 'contain',
                                        }}
                                    />

                                    {/* Content Container - This will grow to fill available space */}
                                    <Box sx={{
                                        mt: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}>
                                        {/* Header Content - Fixed size */}
                                        <Box sx={{ flexShrink: 0 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500,
                                                    lineHeight: '34px',
                                                    color: '#372748',
                                                    mb: 0.5,
                                                }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: '14px',
                                                    color: '#3E3E3EB5',
                                                    pb: '10px',
                                                }}
                                            >
                                                {testimonial.position}
                                            </Typography>
                                        </Box>

                                        {/* Content - This will expand to fill remaining space */}
                                        <Box sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            pt: '28px'
                                        }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontSize: '18px',
                                                    color: '#3E3E3E',
                                                    lineHeight: '34px',
                                                    fontStyle: 'normal',
                                                }}
                                            >
                                                {testimonial.content}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination Dots */}
                    <Box
                        className="custom-pagination"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 1,
                            mt: 2,
                            '& .custom-bullet': {
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#e0e0e0',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#ffab91',
                                },
                            },
                            '& .custom-bullet-active': {
                                backgroundColor: '#ff6b35',
                                transform: 'scale(1.2)',
                            },
                        }}
                    />
                </Box>
            </Container>

            {/* Swiper bullet override (global styles) */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    background: #e0e0e0 !important;
                    opacity: 1 !important;
                    margin: 0 4px !important;
                    transition: all 0.3s ease !important;
                }

                .swiper-pagination-bullet-active {
                    background: #ff6b35 !important;
                    transform: scale(1.2) !important;
                }

                .swiper-pagination-bullet:hover {
                    background: #ffab91 !important;
                }

                /* Ensure all swiper slides have equal height */
                .swiper-slide {
                    height: auto !important;
                }

                .swiper-wrapper {
                    align-items: stretch !important;
                }
            `}</style>
        </Box>
    );
}

export default CustomerExperience;