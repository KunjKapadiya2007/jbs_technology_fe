import {Box, Button, Container, Grid, Typography} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Meeting = () => {
    return (
        <Container maxWidth={'lg'} sx={{pb:'60px'}}>
            <Box
                sx={{
                    background: 'linear-gradient(90deg, #F77E29 0%, #FFC72C 100%)',
                    borderRadius: 4,
                    p: {xs: 3, md: 6},
                    my: 5,
                    color: 'white',
                    boxShadow: '0 10px 50px rgb(211 217 234 / 40%)',

                }}
            >
                <Grid container alignItems="center" spacing={2}>
                    <Grid item size={{xs:12, md:8}}>
                        <Typography sx={{fontSize: '18px', fontWeight:'400', lineHeight:'26px'}}>
                            Let’s Discuss Your Project!
                        </Typography>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{fontSize: '25px', fontWeight:'500', lineHeight:'26px',mb:'20px'}}
                        >
                            Schedule a meeting with our Expert Team!
                        </Typography>
                    </Grid>
                    <Grid item size={{xs:12, md:4}} display="flex" justifyContent={{xs: 'flex-start', md: 'flex-end'}}
                          mt={{xs: 2, md: 0}}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                fontWeight: 'bold',
                                px: 3,
                                py: 1.5,
                                borderRadius: '15px',
                                textTransform: 'none',
                                fontSize: '18px',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                },
                            }}
                            endIcon={<ArrowOutwardIcon/>}
                        >
                            Let’s Connect!
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Meeting;
