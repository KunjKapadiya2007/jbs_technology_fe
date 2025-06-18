'use client';

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    useTheme,
    useMediaQuery
} from "@mui/material";

import img1 from '@/assets/home/AngularJS.png';
import img2 from '@/assets/home/ReactJS.png';
import img3 from '@/assets/home/VueJS.png';
import img4 from '@/assets/home/JavaScript.png';
import img5 from '@/assets/home/TypeScript.png';
import img6 from '@/assets/home/NextJS.png';
import img7 from '@/assets/home/NuxtJS.png';
import img8 from '@/assets/home/Tailwind_CSS.png';
import img9 from '@/assets/home/CSS3.png';
import img10 from '@/assets/home/HTML5.png';
import img11 from '@/assets/home/jQuery.png';
import img111 from '@/assets/home/Bootstrap.png';
import img12 from '@/assets/home/PHP.png';
import img13 from '@/assets/home/NodeJs.png';
import img14 from '@/assets/home/Python.png';
import img15 from '@/assets/home/Java.png';
import img16 from '@/assets/home/MySQL.png';
import img17 from '@/assets/home/MongoDB.png';
import img18 from '@/assets/home/PostgreSQL.png';
import img19 from '@/assets/home/SQLLite.png';
import img20 from '@/assets/home/MariaDB.png';
import img21 from '@/assets/home/DynamoDB.png';
import img22 from '@/assets/home/Oracle.png';

const allTech = {
    'Frontend': [
        { name: 'AngularJS', icon: img1 },
        { name: 'ReactJS', icon: img2 },
        { name: 'VueJS', icon: img3 },
        { name: 'JavaScript', icon: img4 },
        { name: 'TypeScript', icon: img5 },
        { name: 'NextJS', icon: img6 },
        { name: 'NuxtJS', icon: img7 },
        { name: 'Tailwind CSS', icon: img8 },
        { name: 'CSS3', icon: img9 },
        { name: 'HTML5', icon: img10 },
        { name: 'jQuery', icon: img11 },
        { name: 'Bootstrap', icon: img111 },
    ],
    'Backend & Database': [
        { name: 'PHP', icon: img12 },
        { name: 'NodeJs', icon: img13 },
        { name: 'Python', icon: img14 },
        { name: 'Java', icon: img15 },
        { name: 'MySQL', icon: img16 },
        { name: 'MongoDB', icon: img17 },
        { name: 'PostgreSQL', icon: img18 },
        { name: 'SQLite', icon: img19 },
        { name: 'MariaDB', icon: img20 },
        { name: 'DynamoDB', icon: img21 },
        { name: 'Oracle', icon: img22 },
    ],
    'Frameworks': [
        { name: 'PHP', icon: img12 },
        { name: 'NodeJs', icon: img13 },
        { name: 'Python', icon: img14 },
        { name: 'Java', icon: img15 },
        { name: 'MySQL', icon: img16 },
    ],
    'Mobile App': [
        { name: 'PHP', icon: img12 },
        { name: 'NodeJs', icon: img13 },
        { name: 'Python', icon: img14 },
        { name: 'Java', icon: img15 },
        { name: 'MySQL', icon: img16 },
    ],
    'eCommerce & CMS': [
        { name: 'PHP', icon: img12 },
        { name: 'NodeJs', icon: img13 },
        { name: 'Python', icon: img14 },
        { name: 'Java', icon: img15 },
        { name: 'MySQL', icon: img16 },
    ],
};

const tabs = Object.keys(allTech);

const OurTechExpertise = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeTab, setActiveTab] = useState('Frontend');

    const techStack = allTech[activeTab] || [];

    return (
        <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: '#fff' }}>
            <Container maxWidth="lg">
                {/* Title Section */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '2.6rem' },
                            fontFamily: 'Inter, sans-serif',
                            color: '#1a1a1a'
                        }}
                    >
                        Our Tech <Box component="span" sx={{ color: '#f89100' }}>Expertise!</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mt: 1,
                            fontSize: '18px',
                            color: '#555',
                            // maxWidth: 720,
                            mx: 'auto',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Discover the depth of our technical prowess spanning across a wide spectrum of tech stacks for your next project.
                    </Typography>
                </Box>

                {/* Tab Buttons */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 4,
                }}>
                    {tabs.map((tab) => (
                        <Button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            disableRipple
                            sx={{
                                px: { xs: 2, md: 3 },
                                py: 1,
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                color: activeTab === tab ? '#f89100' : '#1a1a1a',
                                position: 'relative',
                                background: 'transparent',
                                fontFamily: 'Inter, sans-serif',
                                '&:hover': {
                                    background: 'transparent',
                                    color: '#f89100',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: activeTab === tab ? '16px' : '0',
                                    height: '2px',
                                    backgroundColor: '#f89100',
                                    transition: 'width 0.3s ease',
                                }
                            }}
                        >
                            {tab}
                        </Button>
                    ))}
                </Box>

                {/* Tech Grid */}
                <Grid container spacing={3} justifyContent="center">
                    {techStack.map((tech, i) => (
                        <Grid item xs={6} sm={4} md={2} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                sx={{
                                    width: 160,
                                    height: 172,
                                    borderRadius: '30px',
                                    padding:"37px 30px 30px 30px",
                                    backgroundColor: '#EBEBEB',
                                    color:"#000",
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={tech.icon.src}
                                    alt={tech.name}
                                    sx={{ width: 50, height: 50, mb: 1 }}
                                />
                                <Typography variant="body2" fontWeight={500} fontFamily="Inter, sans-serif">
                                    {tech.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default OurTechExpertise;
