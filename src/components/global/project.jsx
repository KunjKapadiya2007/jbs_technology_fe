'use client';
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Project() {
    return (
        <Box sx={{backgroundColor: '#253e59', py: 4}}>
            <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={4} justifyContent="space-between">
                    {/* Left side content */}
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="h3"
                            fontWeight="600"
                            color="white"
                            sx={{mb: 1, lineHeight: '60px'}}
                        >
                            Starting a new project or{' '} <br/>
                            <Box component="span" sx={{color: '#f89100'}}>
                                want to collaborate with us?
                            </Box>
                        </Typography>

                        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mt: 2}}>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', color: '#f89100', cursor: 'pointer',
                                '&:hover': {
                                    color: '#f89100',
                                    '& .MuiTypography-root': {color: '#f89100'},
                                    '& .MuiSvgIcon-root': {color: '#f89100'},
                                },
                            }}>
                                <EmailIcon sx={{mr: 2}}/>
                                <Typography color="white" variant="body1" sx={{fontSize: '20px', padding: '6px 0'}}>
                                    support@budventure.technology
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex', alignItems: 'center', color: '#f89100', cursor: 'pointer',
                                '&:hover': {
                                    color: '#f89100',
                                    '& .MuiTypography-root': {color: '#f89100'},
                                    '& .MuiSvgIcon-root': {color: '#f89100'},
                                },
                            }}>
                                <CallIcon sx={{mx: 2}}/>
                                <Typography color="white" variant="body1" sx={{fontSize: '20px', padding: '6px 0'}}>
                                    +91 99241 01601 | +91 93161 18701
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Button on right */}
                    <Grid item xs={12} md={4} sx={{textAlign: {xs: 'left', md: 'right'}}}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#f89100',
                                color: '#fff',
                                fontWeight: 'bold',
                                px: 3,
                                py: 1.5,
                                borderRadius: '15px',
                                textTransform: 'none',
                                fontSize: '18px',
                                boxShadow: 'none'
                            }}
                            endIcon={<ArrowOutwardIcon/>}
                        >
                            Let’s Connect!
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
