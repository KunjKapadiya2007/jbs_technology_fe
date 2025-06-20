'use client';
import { Box, Container, Typography } from '@mui/material';

const InfrastructureTextSection = () => {
    return (
        <Box py={{ xs: 6, md: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mx: 11 }}>
                    <Typography
                        variant="h2"
                        sx={{ color: '#19082d', pb: '38px', fontSize: '40px', fontWeight: '600' }}
                    >
                        The Place Where Productivity Meets Comfortability!
                    </Typography>

                    <Box sx={{ pb: '38px' }} >
                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: '500', color: '#3e3e3e', lineHeight: '28px' }}>
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100" mr={1}>
                                Empowering
                            </Box>
                            Possibilities With Our
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100" ml={1}>
                                Robust Infrastructure
                            </Box>
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '400', color: '#3e3e3e', m: 0, pb: '20px' }}>
                        Our infrastructure facilities are designed to inspire innovation with advanced software and systems. Our secure, human-centred spaces with world-class facilities enable our employees to achieve productive team performance, results and non-disruptive software development processes. A combination of ergonomic working spaces and advanced security measures allow our team of experts to work peacefully.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default InfrastructureTextSection;
