'use client';

import {Box, Typography, Grid, Paper, useMediaQuery, Container} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Image from 'next/image';

const offices = [
    {
        country: 'USA',
        flag: '/images/connect/usa.png',
        address: ['6 Cranbury Ct, Edison,', 'New Jersey 08820, USA'],
        phone: '+1 (214) 609-0911',
        email: 'usa@budventure.technology',
    },
    {
        country: 'UK',
        flag: '/images/connect/uk.png',
        address: ['9 Stafford Road,', 'Ruislip London HA4 6PB, UK'],
        phone: '+44 7469645477',
        email: 'uk@budventure.technology',
    },
    {
        country: 'Bahrain',
        flag: '/images/connect/bahrain.png',
        address: ['Office 9059, Road 3801,', 'Building 15, Manama, Bahrain'],
        phone: '+973 39296060',
        email: 'bahrain@budventure.technology',
    },
];

const HeadquarterSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth={'lg'} sx={{pb:'60px'}}>
            <Box>
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    sx={{my: 5, color: '#1c103b'}}
                >
                    Our Headquarter
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        maxWidth: '1100px',
                        mx: 'auto',
                        p: 3,
                        borderRadius: '30px',
                        boxShadow: '0 10px 50px rgb(211 217 234 / 40%)',
                    }}
                >
                    <Grid container spacing={2}>
                        {/* Left - Info */}
                        <Grid item size={{xs: 12, md: 4}}>
                            <Box display="flex" alignItems="center" mb={'25px'}>
                                <Image src="/images/connect/india.svg" alt="India Flag" width={100} height={70}/>
                            </Box>
                            <Typography variant="h6" fontWeight="bold"
                                        sx={{mb: '15px', fontSize: '28px', fontWeight: '700', lineHeight: '42px'}}>
                                Ahmedabad, India
                            </Typography>

                            <Typography sx={{mb: '26px', color: '#3e3e3e'}}>
                                303, Vedanta, Opp Ushmanpura Garden, Ashram Road,
                                Ahmedabad, Gujarat - 380014
                            </Typography>

                            <Box display="flex" alignItems="center" sx={{mb: '15px', color: '#000'}}>
                                <CallIcon fontSize="small" sx={{mr: 1, color: '#f89100'}}/>
                                <Typography variant="body1">
                                    +91 99241 01601 | +91 93161 18701
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" sx={{mb: '15px', color: '#000'}}>
                                <EmailIcon fontSize="small" sx={{mr: 1, color: '#f89100'}}/>
                                <Typography variant="body1">
                                    support@budventure.technology
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Right - Map */}
                        <Grid item size={{xs: 12, md: 8}}>
                            <Box
                                component="iframe"
                                width="100%"
                                height={isMobile ? 250 : 300}
                                style={{border: '1px solid #dfdfdf', borderRadius: '12px'}}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0174873775955!2d72.5641433!3d23.0259974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f028d0380d%3A0x8f32dc16c888e2d4!2sBudventure%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718700000000"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            <Box>
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    sx={{my: 5, color: '#1c103b'}}
                >
                    Our Global Offices
                </Typography>

                <Grid container spacing={3} >
                    {offices?.map((office, index) => (
                        <Grid item size={{xs:12, sm:6, md:4}}  key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    height: '100%',
                                    boxShadow: '0 10px 50px rgb(211 217 234 / 40%)',
                                }}
                            >
                                <Box mb={'25px'}>
                                    <Image
                                        src={office.flag}
                                        alt={`${office.country} Flag`}
                                        width={100}
                                        height={70}
                                        style={{borderRadius: '6px'}}
                                    />
                                </Box>

                                <Typography variant="h6" fontWeight="bold" sx={{mb: '15px', fontSize: '28px', fontWeight: '700', lineHeight: '42px'}}>
                                    {office.country}
                                </Typography>

                                <Typography variant="body1" sx={{mb: '26px', color: '#3e3e3e'}}>
                                    {office?.address?.map((line, i) => (
                                        <Box key={i}>{line}</Box>
                                    ))}
                                </Typography>

                                <Box display="flex" alignItems="center" sx={{mb: '15px', color: '#000'}}>
                                    <CallIcon fontSize="small" sx={{mr: 1, color: '#f89100'}}/>
                                    <Typography variant="body1">{office.phone}</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" sx={{mb: '15px', color: '#000'}}>
                                    <EmailIcon fontSize="small" sx={{mr: 1, color: '#f89100'}}/>
                                    <Typography variant="body1">{office.email}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default HeadquarterSection;
