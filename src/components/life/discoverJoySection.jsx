'use client';
import { Box, Container, Typography } from '@mui/material';

const DiscoverJoySection = () => {
    return (
        <Box py={{ xs: 6, md: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mx: 11 }}>
                    <Typography
                        variant="h2"
                        sx={{ color: '#19082d', pb: '38px', fontSize: '40px', fontWeight: '600' }}
                    >
                        Discover Joy & Cheerful Times Everyday <br />
                        At Budventure Technologies!
                    </Typography>

                    <Box sx={{ pb: '38px' }} >
                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: '500', color: '#3e3e3e', lineHeight: '28px' }}>
                            A Place with Symphony Of{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                Passion, Purpose & Creative Minds{' '}
                            </Box>
                            where{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                Work, Growth & Fun{' '}
                            </Box>
                            Evolves.{' '}
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '400', color: '#3e3e3e', m: 0, pb: '20px' }}>
                        Enter a world where creativity has no boundaries and each team member plays a crucial role in our success. You'll be a part of a culture that values different viewpoints and promotes open discussion as soon as you join us. With inviting lounges, engaging and collaborative breakout spaces, our office culture is designed to inspire you to share ideas, discuss solutions, and co-create in a setting that feeds your inventive spirit. Join Us in shaping the future, making a difference, and growing both personally and professionally. Explore our current openings and be a part of our exceptional company culture!
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default DiscoverJoySection;
