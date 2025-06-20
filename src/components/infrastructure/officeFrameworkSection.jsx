'use client';
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'next/image';

const OfficeFrameworkSection = () => {
    return (
        <Box py={{ xs: 6, md: 10 }} px={2} sx={{ backgroundColor: '#fefcf8' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align='center' sx={{ fontSize: '50px', lineHeight: '60px', mb: '55px', fontWeight: '600' }}>
                    Our Office Framework
                </Typography>

                <Grid container spacing={4} px={4}>
                    {/* Image 1 */}
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <Box sx={{...imageBoxStyle, height:'590px'}}>
                            <Image
                                src="/images/infrastructure/infra_1.png"
                                alt="Office image 1"
                                width={0}
                                height={0}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Box>
                    </Grid>

                    {/* Image 2 & 3 in one column */}
                    <Grid item size={{ xs: 12, sm: 6 }} >
                        <Box sx={{ ...imageBoxStyle, mb: 5 }}>
                            <Image
                                src="/images/infrastructure/infra_2.png"
                                alt="Office image 2"
                                width={0}
                                height={0}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Box>
                        <Box sx={imageBoxStyle}>
                            <Image
                                src="/images/infrastructure/infra_3.png"
                                alt="Office image 3"
                                width={0}
                                height={0}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Box>
                    </Grid>

                    {/* Image 4 */}
                    <Grid item size={{ xs: 12}}>
                        <Box sx={imageBoxStyle}>
                            <Image
                                src="/images/infrastructure/infra_4.png"
                                alt="Office image 4"
                                width={0}
                                height={0}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Box>
                    </Grid>

                    {/* Image 5 */}
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <Box sx={imageBoxStyle}>
                            <Image
                                src="/images/infrastructure/infra_5.png"
                                alt="Office image 5"
                                width={0}
                                height={0}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Box>
                    </Grid>

                    {/* Full width image 6 */}
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <Box sx={imageBoxStyle}>
                            <Image
                                src="/images/infrastructure/infra_6.png"
                                alt="Office image 6"
                                width={0}
                                height={0}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const imageBoxStyle = {
    overflow: 'hidden',
    borderRadius: '0px',
};

export default OfficeFrameworkSection;
