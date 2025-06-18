import {Box, Typography, Grid, Container} from '@mui/material';
import Image from 'next/image';
import '@/app/globals.css';

const ProtfolioSection = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'url(/images/connect/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: {xs: 8, md: 12},
            }}
        >
            <Container maxWidth={'lg'}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Text Section */}
                    <Grid item size={{xs: 12, md: 7}}>
                        <Typography variant="h1" gutterBottom
                                    sx={{fontSize: '52px', color: '#000', mb: '24px', fontWeight: '500'}}>
                            Bridging Tech & Dreams: Our Portfolio
                        </Typography>
                        <Typography
                            sx={{fontSize: '20px', fontWeight: '400', lineHeight: '28px', color: '#3e3e3e', m: 0}}>
                            We proudly present a curated collection of our most transformative software solutions and
                            applications. Explore our portfolio to witness how we've partnered with businesses, both big
                            and small, to translate their visions into reality. Join us on this journey of code,
                            creativity, and collaboration.
                        </Typography>
                    </Grid>

                    {/* Image Section */}
                    <Grid item size={{xs: 12, md: 5}} sx={{textAlign: 'center'}}>
                        <Box width="520px">
                            <Image
                                src="/images/portfolio/sectionimg.webp"
                                alt="Contact Us Illustration"
                                width={0} // required when using style override
                                height={0}
                                sizes="100vw" // let the browser scale it based on viewport
                                style={{width: '100%', height: 'auto'}}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProtfolioSection;
