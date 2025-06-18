'use client'

import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Divider
} from '@mui/material';
import {
    Facebook,
    LinkedIn,
    Instagram,
    Language
} from '@mui/icons-material';
import Image from "next/image";
import logo from '../../assets/global/JBS-technology-logo-2 1.34fd4673b7887296fd1c (2).png';
import {useRouter} from "next/navigation";

function Footer() {
    const router = useRouter();

    const locations = [
        {
            country: 'India',
            flag: 'https://www.budventure.technology/public/frontend/images/flag_india.svg',
            address: '303, Vedanta, Opp Ushmanpura Garden, Ashram Road, Ahmedabad, Gujarat-380014'
        },
        {
            country: 'USA',
            flag: 'https://www.budventure.technology/public/frontend/images/usa.svg',
            address: '6 Cranbury Ct, Edison, New Jersey 08820, USA'
        },
        {
            country: 'UK',
            flag: 'https://www.budventure.technology/public/frontend/images/flag_uk.svg',
            address: '9 Stafford Road, Ruislip London HA4 6PB, UK'
        },
        {
            country: 'Bahrain',
            flag: 'https://www.budventure.technology/public/frontend/images/Bahrain.svg',
            address: 'Office 9059, Road 3801, Building 15, Manama, Bahrain'
        }
    ];

    const solutions = [
        'Design & Development',
        'On Demand App Development',
        'Digital Marketing',
        'API Integration',
        'Quality Assurance',
        'IT Consultation & Strategy',
        'Outsourcing IT Services'
    ];

    const services = [
        'Frontend Development',
        'Backend Development',
        'Mobile App Development',
        'eCommerce & CMS',
        'UI/UX Design',
        'Digital Marketing',
        'Quality Assurance',
        'Trending Techstacks'
    ];

    const company = [
        'About Us',
        'Global Presence',
        'Infrastructure',
        'Portfolio',
        'Careers',
        'Testimonials',
        'Blogs',
        'Contact Us'
    ];

    const socialLinks = [
        { icon: <Facebook />, label: 'Facebook', href: 'https://facebook.com' },
        { icon: <LinkedIn />, label: 'LinkedIn', href: 'https://linkedin.com' },
        { icon: <Instagram />, label: 'Instagram', href: 'https://instagram.com' },
        { icon: <Language />, label: 'Website', href: 'https://yourwebsite.com' },
    ];


    return (
        <Box sx={{backgroundColor: '#1D1C2D', color: 'white'}}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{padding:'85px 0 75px 0' ,  px: {sm:5 , xs:'unset' , md:'unset'}}}>
                    {locations.map((location, index) => (
                        <Grid item size={{xs: 12, sm: 6, md: 3,}} key={index}>
                            <Box sx={{mb: 2 , backgroundColor:'#222134' ,p:'8px 16px' , height:'100%'}}>
                                <Box sx={{display:'flex' , alignItems: 'center' , mb:'26px'}}>
                                    <Box sx={{ position: 'relative', width: '30px', height: '30px' , mr:1 }}>
                                        <Image
                                            src={location.flag}
                                            alt={location.country}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </Box>

                                    <Typography variant="h6" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        fontWeight: 600
                                    }}>
                                        {location.country}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{
                                    color: '#FFF',
                                    lineHeight: 1.6,
                                    fontSize: '14px',
                                    mb:1
                                }}>
                                    {location.address}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{borderColor: '#333', mb: 6}}/>

                <Grid container spacing={4} sx={{mb: 4}}>
                    <Grid item size={{xs: 12, md: 3}}>
                        <Box sx={{mb: 3 , px: {sm:5 , xs:'unset' , md:'unset'}}}>
                            <Box sx={{display: 'flex', alignItems: 'center' , justifyContent: {xs:'center' , md:'unset'}, mb: 5}}>
                                <Box sx={{
                                    width: 85,
                                    height: 85,
                                }}
                                     onClick={() => router.push('/')}
                                >
                                    <Image src={logo} alt={'logo'} style={{width:'100%', height:'100%'}} />
                                </Box>
                            </Box>

                            <Typography variant="body2" sx={{
                                color: '#FFF',
                                lineHeight: 1.8,
                                fontSize: '16px',
                                mb: 3,
                                textAlign: {xs:'center' , md:'unset'},
                                opacity:'0.8'
                            }}>
                                Budventure Technologies is the market leader in IT consulting and
                                offshore software development. We provide IT solutions that transform
                                creativity into innovation as the designers of your digital aspirations,
                                with our talented pool of creative developers.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'unset' } }}>
                                {socialLinks.map((item, index) => (
                                    <IconButton
                                        key={index}
                                        component="a"
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        sx={{
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            color: '#FFF',
                                            borderRadius:'7px',
                                            p:1,
                                            '&:hover': {
                                                backgroundColor: '#F89100',
                                            }
                                        }}
                                        size="small"
                                    >
                                        {item.icon}
                                    </IconButton>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item size={{xs: 12, sm: 4, md: 3,}}>
                        <Typography variant="h6" sx={{mb: {md:'50px' , xs:3}, fontWeight: 500 , textAlign: {xs:'center' , sm:'unset'} , fontSize: '22px',color:'#FFF'}}>
                            Solutions
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5, textAlign: {xs:'center' , sm:'unset'}}}>
                            {solutions.map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    sx={{
                                        color: '#FFF',
                                        textDecoration: 'none',
                                        fontSize: '15px',
                                        opacity:'0.8',
                                        '&:hover': {
                                            color: '#f89100',
                                            textDecoration: 'none'
                                        }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item size={{xs: 12, sm: 4, md: 3}}>
                        <Typography variant="h6" sx={{mb: {md:'50px' , xs:3}, fontWeight: 600, textAlign: {xs:'center' , sm:'unset'}, fontSize: '22px',color:'#FFF'}}>
                            Services
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5, textAlign: {xs:'center' , sm:'unset'}}}>
                            {services.map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    sx={{
                                        fontSize: '15px',
                                        opacity:'0.8',
                                        color: '#FFF',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: '#f89100',
                                            textDecoration: 'none'
                                        }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item size={{xs: 12, sm: 4, md: 3}}>
                        <Typography variant="h6" sx={{mb: {md:'50px' , xs:3}, fontWeight: 600 , textAlign: {xs:'center' , sm:'unset'}, fontSize: '22px',color:'#FFF'}}>
                            Company
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5 , textAlign: {xs:'center' , sm:'unset'}}}>
                            {company.map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    sx={{
                                        color: '#FFF',
                                        textDecoration: 'none',
                                        fontSize: '15px',
                                        opacity:'0.8',
                                        '&:hover': {
                                            color: '#f89100',
                                            textDecoration: 'none'
                                        }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{borderColor: '#333'}}/>

                <Box sx={{textAlign: 'center'}}>
                    <Typography sx={{color: '#FFF' ,py:'25px' , opacity:'0.8'}}>
                        Copyright © 2025 All Rights Reserved By Budventure Technologies Pvt. Ltd.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;