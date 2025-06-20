'use client'

import React, {useState} from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    Grid,
    useTheme,
    useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import work from '../../assets/engagementModels/process-img.png'

function WorkProcess() {
    const [expanded, setExpanded] = useState('panel1');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accordionData = [
        {
            id: 'panel1',
            title: 'Simple & Transparent Pricing',
            content: 'We provide Clear and Upfront Pricing with No Hidden Charges for complete transparency.'
        },
        {
            id: 'panel2',
            title: 'Fully Signed NDA',
            content: 'Your project details and intellectual property are protected with comprehensive non-disclosure agreements.'
        },
        {
            id: 'panel3',
            title: 'Code Security',
            content: 'We implement industry-standard security practices to ensure your code and data remain safe and secure.'
        },
        {
            id: 'panel4',
            title: 'Easy Exit Policy',
            content: 'No long-term commitments. You can discontinue our services at any time with a simple exit process.'
        }
    ];

    return (
        <Box sx={{
            py: '80px',
            backgroundColor: '#f8f9fa',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 20,
                    left: '12%',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: '#ff6b35',
                    zIndex: 1
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 80,
                    right: '40%',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: '#20c997',
                    zIndex: 1
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 70,
                    left: '15%',
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: '#ff6b35',
                    zIndex: 1
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 150,
                    right: '45%',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    backgroundColor: '#e74c3c',
                    zIndex: 1
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item size={{xs: 12, md: 6}}>
                        <Box sx={{mb: '55px'}}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#253E59',
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    mb: '10px',
                                    letterSpacing: 1,
                                    textTransform: 'uppercase'
                                }}
                            >
                                Work Process
                            </Typography>

                            <Typography
                                variant="h2"
                                className={'jost'}
                                sx={{
                                    fontWeight: 600,
                                    color: '#19082D',
                                    mb: 4,
                                    fontSize: {xs: '28px', sm: '34px', md: '40px'},
                                    lineHeight: 1.2
                                }}
                            >
                                Development Team
                                <br/>
                                At The Right Price!
                            </Typography>
                        </Box>

                        <Box >
                            {accordionData.map((item) => (
                                <Accordion
                                    key={item.id}
                                    expanded={expanded === item.id}
                                    onChange={handleChange(item.id)}
                                    sx={{
                                        mb: 3,
                                        boxShadow: 'none',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        '&:before': {
                                            display: 'none',
                                        },
                                        '&.Mui-expanded': {
                                            mb: 3,
                                        }
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                sx={{
                                                    color: expanded === item.id ? '#ff6b35' : '#6c757d',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                        }
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            borderTopRightRadius: '12px',
                                            borderTopLeftRadius: '12px',
                                            padding:'0 30px 0',
                                            borderRadius: expanded === item.id ? 'none' : '12px',
                                            minHeight: 80,
                                            '& .MuiAccordionSummary-content': {
                                                margin: '16px 0',
                                            },
                                            '& .MuiAccordionSummary-content.Mui-expanded': {
                                                margin: '16px 0',
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 500,
                                                color: expanded === item.id ? '#F89100' : '#19082D',
                                                fontSize: {md:'23px' , xs:'20px'}
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            borderBottomLeftRadius: '12px',
                                            borderBottomRightRadius: '12px',
                                            padding:'0 30px 30px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#6c757d',
                                                lineHeight: 1.6,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {item.content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item size={{xs: 12, md: 6,}}>
                        <Image src={work} alt={'work'} style={{width: '100%', height: '100%'}}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default WorkProcess;