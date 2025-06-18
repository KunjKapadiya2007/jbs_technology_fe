import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const infoCards = [
    {
        title: 'Email us',
        content: 'support@budventure.technology',
        image: '/images/connect/send.svg',
    },
    {
        title: 'HR and Admin',
        content: '+91 63525 17175',
        image: '/images/connect/Call.svg',
    }
];

const Call = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ py: { xs: 6, md: 10 }, px: 2 }}>
                <Grid container spacing={4} direction="row">
                    {infoCards.map((card, index) => (
                        <Grid item size={{xs:12, md:6}} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '10px 90px 10px 10px',
                                    bgcolor: '#fcf9ff',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                    p: '43px 29px',
                                    height: '100%',
                                    '&:hover .image-box': {
                                        transform: 'translateY(-65%)',
                                    },
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: '19px',
                                            fontWeight: '600',
                                            mb: '6px',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: '#f89100', fontWeight: 600 }}
                                    >
                                        {card.content}
                                    </Typography>
                                </Box>

                                <Box
                                    className="image-box"
                                    sx={{
                                        position: 'absolute',
                                        top: '30px',
                                        right: '-50px',
                                        zIndex: 0,
                                        transition: 'transform 0.5s ease',
                                        transform: 'translateY(-50%)',
                                    }}
                                >
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={115}
                                        height={115}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Call;
