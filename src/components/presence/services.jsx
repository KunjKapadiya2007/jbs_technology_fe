'use client';
import { Box, Container, Typography } from '@mui/material';

const Services = () => {
    return (
        <Box py={{ xs: 6, md: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mx: 11 }}>
                    <Typography
                        variant="h2"
                        sx={{ color: '#19082d', pb: '38px', fontSize: '40px', fontWeight: '600' }}
                    >
                        IT Services & IT Consulting Beyond Borders
                    </Typography>

                    <Box sx={{ pb: '38px' }} >
                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: '500', color: '#3e3e3e', lineHeight: '28px' }}>
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                Navigating Ideas
                            </Box>
                            ,With
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100" ml={1}>
                                Innovative IT Services Globally
                            </Box>
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '400', color: '#3e3e3e', m: 0, pb: '20px' }}>
                        Our commitment to collaboration knows no geographical boundaries. Through seamless digital platforms and communication tools, our teams across different time zones collaborate in real-time, enabling us to deliver comprehensive solutions to our clients regardless of where they are located. Our global presence gives us a unique vantage point to identify emerging trends and anticipate shifts in the market. By amalgamating insights from diverse markets, we stay at the forefront of innovation, constantly adapting and evolving to meet the changing needs of our customers. Since 2017, our unrelenting dedication to quality has helped us carve out a significant global position in the rapidly changing IT market. Budventure Technologies has a dynamic and far-reaching network of IT solutions and expertise that seamlessly interconnects businesses, individuals, and ideas across continents.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
