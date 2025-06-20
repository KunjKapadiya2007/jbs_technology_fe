'use client';
import { Box, Container, Typography } from '@mui/material';
const TextandDesign = () => {
    return (
        <Box py={{ xs: 6, md: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mx: 11 }}>
                    <Typography
                        variant="h2"
                        sx={{ color: '#19082D', pb: '38px', fontSize: '41px', fontWeight: '600' }}
                    >
                        Create Brand Awareness & Earn Loyalty With Our Top Digital Marketing Company
                    </Typography>
                    <Box sx={{pb:'38px'}} >
                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: '400', color: '#3E3E3E', lineHeight: '28px' }}>
                            What differentiates a Business from a Brand?
                            A {' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#F89100">
                                Story
                            </Box>
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: '400', color: '#3E3E3E', lineHeight: '28px' }}>
                            that Inspires. An{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#F89100">
                                Experience
                            </Box>{' '}
                            that Aspires.

                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{fontSize:'18px',lineHeight:'28px',fontWeight:'400',color:'#3E3E3E', m:0,pb:'38px'}}>
                        As a Top Digital Marketing Company, we understand the power a brand holds by the story it tells and the way it communicates. Nobody loves a copy-cat. No matter what the type of product or service, Our Branding & Digital Marketing Services are all about creating a superior brand experience for the people.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
export default TextandDesign;