'use client';

import React from 'react';
import {
    GridLegacy as Grid,
    Card,
    CardContent,
    Typography,
    Box, Container
} from '@mui/material';
import {styled} from '@mui/material/styles';
import img1 from '@/assets/home/Custom_Web_Software_Development.png';
import img2 from '@/assets/home/Digital_Marketing_Branding.png';
import img3 from '@/assets/home/eCommerce_CMS_Development.png';
import img4 from '@/assets/home/Mobile_App_Development.png';

// Styled Components
const StyledCard = styled(Card)(({theme}) => ({
    height: '100%',
    borderRadius: '20px',
    borderTop: '4px solid #F89100',
    boxShadow: 'none',
    position: 'relative',
    background: '#FFFFFF',
    transition: 'transform 0.3s ease',
    padding: '20px 20px', // fallback (will act as xs)

    [theme.breakpoints.down('sm')]: {
        padding: '20px 30px', // explicit xs (or small devices below sm)
    },
    [theme.breakpoints.up('sm')]: {
        padding: '24px 36px',
    },
    [theme.breakpoints.up('md')]: {
        padding: '30px 50px',
    },
    // '&:hover': {
    //     transform: 'translateY(-5px)',
    // },
}));


const IconBox = styled(Box)({
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    fontSize: '30px',
});

// Service Data
const servicesData = [
    {
        title: 'Website & Software Development Services',
        description: 'Build a visually stunning and customized website and software with our expert development team. We create innovative solutions that provide a seamless user experience.',
        image: img1,
        alt: 'Website Development'
    },
    {
        title: 'Mobile App Development Services',
        description: 'A great mobile app requires a solid blend of user experience and functionality. We help you create intuitive and engaging mobile experiences for your customers with our Mobile Application Development Company.',
        image: img4,
        alt: 'Mobile Development'
    },
    {
        title: 'eCommerce & CMS App Development Services',
        description: 'Empower your business by starting customers online with our Custom eCommerce Application Development Company and set up your business to Online presence.',
        image: img3,
        alt: 'eCommerce Development'
    },
    {
        title: 'Digital Marketing & Branding Services',
        description: 'Create a marketing buzz in the digital ecosystem with our 360° Digital Marketing Company. We help your customers discover, engage with, and convert into loyal customers through strategic digital marketing.',
        image: img2,
        alt: 'Digital Marketing'
    }
];

// Main Component
function Services() {
    return (
        <Box sx={{
            backgroundColor: "#F6F6F6",
        }}>
            <Container maxWidth={"lg"}>
                <Box sx={{
                    my:"80px"
                }}>
                    <Box sx={{textAlign: 'center', marginBottom: '60px'}}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: '600',
                                fontSize: {xs: '30px', md: '41px'},
                                color: '#19082d',
                                marginBottom: '10px'
                            }}
                        >
                            Services We Offer To <span style={{color: '#FF8C00'}}>Customers</span>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#666666',
                                fontSize: '18px',
                                // maxWidth: '600px',
                                margin: '0 auto'
                            }}
                        >
                            Explore our up-to-date IT services to unaloom innovation and drive creativity in your next
                            project with us!
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {servicesData.map((service, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <StyledCard>
                                    <CardContent sx={{padding: 0}}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <Box>
                                                <IconBox>
                                                    <Box
                                                        component="img"
                                                        src={service.image.src}
                                                        alt={service.alt}
                                                        sx={{width: '110px', height: '110px'}}
                                                    />
                                                </IconBox>
                                            </Box>
                                            <Box sx={{
                                                ml: 7
                                            }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        fontSize: '25px',
                                                        color: '#333333',
                                                        marginBottom: '21px',
                                                        transition: 'color 0.3s ease',
                                                        '&:hover': {
                                                            color: '#F89100', // yellow-ish
                                                        },
                                                    }}
                                                >
                                                    {service.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#3e3e3e',
                                                        fontWeight: "400",
                                                        fontSize: '16px',
                                                        lineHeight: '26px',
                                                        mb: "20px"
                                                    }}
                                                >
                                                    {service.description}
                                                </Typography>
                                            </Box>

                                        </Box>
                                    </CardContent>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Services;