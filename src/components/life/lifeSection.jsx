import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import '@/app/globals.css';

const LifeSection = () => {
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
                        Life At Budventure Technologies!
                        </Typography>
                        <Typography
                            sx={{ fontSize: '19px', fontWeight: '400', lineHeight: '28px', color: '#3e3e3e', m: 0 }}>
                            Our company culture is the heartbeat of who we are and how we operate, driving our shared vision and guiding our actions every day. We support maintaining a healthy balance between work and personal life. We support flexible work arrangements and provide resources that promote overall well-being.
                        </Typography>
                    </Grid>

                    {/* Image Section */}
                    <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: 'center' }}>
                        <Box width="520px">
                            <Image
                                src="/images/life/sectionimg.webp"
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

export default LifeSection;
