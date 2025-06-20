'use client';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import Image from 'next/image';

const coreValues = [
    {
        icon: '/images/about/Innovation.png', // Make sure this exists in public/images/about/
        title: 'Innovation',
        description:
            'We foster a culture of constant innovation, encouraging our teams to think creatively, explore new technologies, and develop robust solutions.'
    },
    {
        icon: '/images/about/Integrity.png',
        title: 'Integrity',
        description:
            'We are committed to honesty, transparency, and ethical behaviour in all our interactions with clients, partners, and employees.'
    },
    {
        icon: '/images/about/Quality_Excellence.png',
        title: 'Quality Excellence',
        description:
            'We follow industry best practices and adhere to strict quality standards to ensure that our solutions are reliable, secure, and of the highest quality.'
    }
];

const CoreValuesSection = () => {
    return (
        <Box py={{ xs: 6, md: 10 }} px={2} sx={{ backgroundColor: '#fefcf8' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: '55px' }}>
                    <Typography variant="overline" sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '30px', mb: '10px', color: '#f89100' }}>
                        CORE VALUES
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: '50px', fontWeight: '600', lineHeight: '60px', color: '#19082d' }}>
                        Values That Define Us, Drive Us<br />and Unite Us!
                    </Typography>
                </Box>

                <Grid container spacing={4} mt={2}>
                    {coreValues.map((value, index) => (
                        <Grid item size={{xs:12,sm:6,md:4}} key={index}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 0,
                                    boxShadow:'none'
                                }}
                            >
                                <Box sx={{ width: 58, height: 58, position: 'relative' }}>
                                    <Image
                                        src={value.icon}
                                        alt={value.title}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                                <Typography variant="h2" sx={{fontSize:'25px',fontWeight:'500',lineHeight:'35px',mb:'16px',mt:'20px'}}>
                                    {value.title}
                                </Typography>
                                <Typography variant="body2" sx={{fontSize:'16px', fontWeight:'400',lineHeight:'26px',color:'#3e3e3e'}}>
                                    {value.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CoreValuesSection;
