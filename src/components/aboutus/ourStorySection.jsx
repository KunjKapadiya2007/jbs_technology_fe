'use client';
import { Box, Container, Typography } from '@mui/material';

const OurStorySection = () => {
    return (
        <Box py={{ xs: 6, md: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mx: 11 }}>
                    <Typography
                        variant="h2"
                        sx={{ color: '#19082d', pb: '38px', fontSize: '40px', fontWeight: '600' }}
                    >
                        Our Story
                    </Typography>

                    <Box sx={{pb:'38px'}} >
                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: '600', color: '#3e3e3e', lineHeight: '28px' }}>
                            Welcome to{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                Budventure Technologies!
                            </Box>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: '600', color: '#3e3e3e', lineHeight: '28px' }}>
                            Where{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                dreams
                            </Box>{' '}
                            meet{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                innovation
                            </Box>{' '}
                            and{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                passion
                            </Box>{' '}
                            fuels{' '}
                            <Box component="span" fontStyle="italic" fontWeight="500" fontSize="18px" color="#f89100">
                                success!
                            </Box>
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{fontSize:'18px',lineHeight:'28px',fontWeight:'400',color:'#3e3e3e', m:0,pb:'20px'}}>
                        Our journey began as a shared dream between two friends who had a strong passion
                        for technology and an unwavering commitment to make a difference. What began as
                        a late-night brainstorming session has now developed into a thriving software
                        development business that has achieved tremendous success and left an indelible
                        mark on the digital landscape.
                    </Typography>

                    <Typography variant="body1" sx={{fontSize:'18px',lineHeight:'28px',fontWeight:'400',color:'#3e3e3e', m:0,pb:'20px'}}>
                        Our story began when Darshit & Milind, The Founders, met at the LD College of
                        Engineering in 2011. They were drawn together by a passion for technology, and
                        quickly realised that their combined skills and unwavering commitment had the
                        potential to create something incredible.
                    </Typography>

                    <Typography variant="body1" sx={{fontSize:'18px',lineHeight:'28px',fontWeight:'400',color:'#3e3e3e', m:0,pb:'20px'}}>
                        The early days were far from glamorous. Long hours, tight budgets, and the
                        occasional technical hiccups were constant companions. Nonetheless, we
                        persisted, fuelled by our unwavering belief in our mission and one other.
                        Despite being aware that success was not a given, they were adamant about
                        telling their own tale.
                    </Typography>

                    <Typography variant="body1" sx={{fontSize:'18px',lineHeight:'28px',fontWeight:'400',color:'#3e3e3e', m:0,pb:'20px'}}>
                        The term{' '}
                        <Box component="span" color="#f89100">
                            "Budventure"
                        </Box>{' '}
                        carried significant significance for Darshit and Milind.{' '}
                        <Box component="span" color="#f89100">
                            "Bud"
                        </Box>{' '}
                        represented the budding entrepreneurs and their innovative ideas, while{' '}
                        <Box component="span" color="#f89100">
                            "venture"
                        </Box>{' '}
                        signified the exciting journey they would embark together.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default OurStorySection;
