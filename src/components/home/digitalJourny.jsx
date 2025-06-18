'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import img1 from '@/assets/home/home_process_1.gif';

function DigitalJourny() {
    return (
        <Box sx={{ backgroundColor: '#FEFCF8', py: { xs: 6, md: 8 } }}>
            <Container maxWidth="lg">
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
                        Empowering Your  <span style={{ color: '#F89100' }}>Digital Journey</span>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '16px', md: '18px' },
                            color: '#3E3E3E',
                            fontWeight: 400,
                            maxWidth: '800px',
                            mx: 'auto',
                        }}
                    >
                        Our work process fosters strong client partnerships, ensuring software success!
                    </Typography>
                </Box>

                {/* Image Section */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Box
                        component="img"
                        src={img1.src}
                        alt="Digital Journey Process"
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                            height: '100%',
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
}

export default DigitalJourny;
