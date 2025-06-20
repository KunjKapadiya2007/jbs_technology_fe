import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import '@/app/globals.css';

const AboutSection = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'url(/images/connect/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: { xs: 8, md: 12 },
            }}
        >
            <Container maxWidth={'lg'}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Text Section */}
                    <Grid item size={{ xs: 12, md: 7 }}>
                        <Typography variant="h1" gutterBottom
                            sx={{ fontSize: '47px', color: '#000', mb: '24px', fontWeight: '500' }}>
                            About Budventure Technologies!
                        </Typography>
                        <Typography
                            sx={{ fontSize: '19px', fontWeight: '400', lineHeight: '28px', color: '#3e3e3e', m: 0 }}>
                            Budventure Technologies is the architect of your digital dreams, crafting IT solutions that turn imagination into innovation. With years of expertise, we offer specialised solutions that support your business objectives. We assist companies of all sizes in providing value to their business operatives, outpacing the competition, and experiencing rapid growth.
                        </Typography>
                    </Grid>

                    {/* Image Section */}
                    <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: 'center' }}>
                        <Box width="520px">
                            <Image
                                src="/images/about/sectionimg.webp"
                                alt="Contact Us Illustration"
                                width={0} // required when using style override
                                height={0}
                                sizes="100vw" // let the browser scale it based on viewport
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;
