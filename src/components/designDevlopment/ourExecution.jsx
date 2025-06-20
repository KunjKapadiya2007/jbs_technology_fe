'use client'
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import img1 from '@/assets/designandDevlopment/Process_1.webp';
import img2 from '@/assets/designandDevlopment/Process_2.webp';
import img3 from '@/assets/designandDevlopment/Process_3.webp';
import bgImage from '@/assets/designandDevlopment/process_bg.jpg';

const steps = [
    {
        title: 'Discovery and Planning',
        description: `We start initially with discovery and meticulous planning by understanding the client’s vision, target audience, and project goals. After conducting market research and gathering insights, we create our design and development strategies by collaborating with you to outline requirements, scope, and key milestones.`,
        image: img1,
    },
    {
        title: 'Design and Prototyping',
        description: `With insights in hand, design takes centre stage. We craft wireframes and prototypes that outline the user journeys and interface structure. By iteratively refining these blueprints and incorporating user feedback, we ensure optimal usability. The visual design phase brings wireframes to life with captivating aesthetics. With a strong attention to detail, we align typography, colours, and imagery to the brand’s essence.`,
        image: img2,
    },
    {
        title: 'Development and Implementation',
        description: `The development phase transforms designs into functional reality. We break down the project into manageable tasks, selecting appropriate technologies and frameworks for both back-end and front-end development, adhering to coding best practices. Integrating APIs, databases, and third-party services enhances functionality. This step culminates in a functional product ready for user testing.`,
        image: img3,
    },
];

function OurExecution() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bgImage.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                py: { xs: '40px', md: '80px' },
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        marginBottom: { xs: '30px', md: '55px' },
                        fontWeight: 600,
                        fontSize: { xs: '28px', md: '40px' },
                        lineHeight: { xs: '36px', md: '50px' },
                        color: '#19082D',
                        textAlign: 'center',
                        px: { xs: '10px', md: 0 },
                    }}
                >
                    Our Execution Process
                </Box>

                {steps.map((step, index) => {
                    const isImageLeft = index % 2 !== 1;

                    return (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    md: isImageLeft ? 'row-reverse' : 'row',
                                },
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: { xs: '40px', md: '60px' },
                                gap: { xs: '30px', md: '0px' },
                            }}
                        >
                            {/* Image */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    // py: { xs: '30px', md: '50px' },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={step.image.src}
                                    alt={step.title}
                                    sx={{
                                        width: '100%',
                                        my: { xs: '20px', md: '30px' },
                                        maxWidth: '430px',
                                        borderRadius: '16px',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>

                            {/* Content */}
                            <Box
                                sx={{
                                    flex: 1,
                                    padding: { xs: '0 15px', md: '0 30px' },
                                    textAlign: { xs: 'left' },
                                }}
                            >
                                <Box
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: { xs: '24px', md: '40px' },
                                        paddingBottom: { xs: '20px', md: '35px' },
                                        color: '#19082D',
                                    }}
                                >
                                    {step.title}
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: { xs: '16px', md: '18px' },
                                        lineHeight: { xs: '26px', md: '28px' },
                                        paddingBottom: { xs: '25px', md: '35px' },
                                        color: '#3E3E3E',
                                        fontWeight: 400,
                                    }}
                                >
                                    {step.description}
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Container>
        </Box>
    );
}

export default OurExecution;
