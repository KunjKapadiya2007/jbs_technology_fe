'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const VisionMissionSection = () => {
    return (
        <Box py={{ xs: 6, md: 12 }} px={2}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Left Image */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: 300, sm: 400, md: 450 },
                            }}
                        >
                            <Image
                                src="/images/about/VISION_MISSION.png"
                                alt="Vision and Mission Illustration"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Grid>

                    {/* Right Text */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box mb={4}>
                            <Typography variant="h2" sx={{ fontSize: '50px', fontWeight: '600', lineHeight: '60px', color: '#19082d', pb: '20px' }}>
                                Vision
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '400', color: '#3e3e3e', pb: '30px' }}>
                                To revolutionize the IT landscape by consistently delivering innovative, sustainable,
                                and customer-centric solutions that exceed expectations. To be the catalyst for digital
                                transformation, inspiring businesses worldwide to embrace change and seize new opportunities.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h2" sx={{ fontSize: '50px', fontWeight: '600', lineHeight: '60px', color: '#19082d', pb: '20px' }}>
                                Mission
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '400', color: '#3e3e3e', pb: '30px' }}>
                                To be the trusted partner for our clients, offering reliable IT services and expert guidance
                                to help them achieve their goals, secure their data, and navigate the ever-changing tech landscape.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default VisionMissionSection;
