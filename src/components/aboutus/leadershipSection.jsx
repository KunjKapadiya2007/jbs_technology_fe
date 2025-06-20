'use client';
import { Box, Container, Grid, Typography, Avatar, Card, CardContent } from '@mui/material';
import Image from 'next/image';

const leaders = [
    {
        name: 'Darshit Shah',
        role: 'Founder & Director',
        image: '/images/about/darshit.png',
        linkedin: '#'
    },
    {
        name: 'Milind Patel',
        role: 'Co-Founder & Director',
        image: '/images/about/milind.png',
        linkedin: '#'
    },
    {
        name: 'Kajol Shah',
        role: 'Marketing Head',
        image: '/images/about/kajol.png',
        linkedin: '#'
    }
];

const LeadershipSection = () => {
    return (
        <Box py={{ xs: 6, md: 12 }} px={2} sx={{
            backgroundImage: 'url(/images/connect/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} >
                    {/* Left Title */}
                    <Grid item size={{xs:12,md:6}} sx={{mb:'100px'}}>
                        <Typography variant="overline" sx={{color:'#f89100',fontSize:'20px',fontWeight:'500', lineHeight:'30px'}}>
                            LEADERSHIP
                        </Typography>
                        <Typography variant="h2" sx={{fontSize:'50px', fontWeight:'600', lineHeight:'60px',color:'#19082d'}}>
                            The People Behind the Brand
                        </Typography>
                    </Grid>

                    {/* Right Description & Stats */}
                    <Grid item size={{xs:12,md:6}}>
                        <Typography variant="body1" sx={{fontSize:'18px',lineHeight:'28px',fontWeight:'400',color:'#3e3e3e', pb:'30px'}}>
                            Meet the Collaborative Minds That Turn Ideas Into Reality. Our founders' unwavering commitment to excellence is at the core of everything we do.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item size={{xs:4}}>
                                <Typography variant="h6" sx={{fontSize:'40px', lineHeight:'50px', fontWeight:'500', color:'#f89100'}}>
                                    10 +
                                </Typography>
                                <Typography variant="caption" sx={{fontSize:'14px', fontWeight:'400', lineHeight:'24px', color:'#413f3f'}}>
                                    Years of Experience
                                </Typography>
                            </Grid>
                            <Grid item size={{xs:4}}>
                                <Typography variant="h6" sx={{fontSize:'40px', lineHeight:'50px', fontWeight:'500', color:'#f89100'}}>
                                    500 +
                                </Typography>
                                <Typography variant="caption" sx={{fontSize:'14px', fontWeight:'400', lineHeight:'24px', color:'#413f3f'}}>
                                    Global Clientele
                                </Typography>
                            </Grid>
                            <Grid item size={{xs:4}}>
                                <Typography variant="h6" sx={{fontSize:'40px', lineHeight:'50px', fontWeight:'500', color:'#f89100'}}>
                                    80 %
                                </Typography>
                                <Typography variant="caption" sx={{fontSize:'14px', fontWeight:'400', lineHeight:'24px', color:'#413f3f'}}>
                                    Client Retention
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Team Cards */}
                <Grid container spacing={4} mt={6}>
                    {leaders.map((person, index) => (
                        <Grid item size={{xs:12, sm:6, md:4}} key={index}>
                            <Card sx={{ borderRadius: 4, textAlign: 'center', p:'35px 20px', backgroundColor:'transparent', boxShadow:'0 4px 15px rgba(0, 0, 0, 0.08)'}}>
                                <Avatar
                                    src={person.image}
                                    alt={person.name} style={{width:'250px'}}
                                    sx={{Width:'250px', height: '100%', mx: 'auto', mb: 2 , borderRadius:'0'}}
                                />
                                <CardContent sx={{p:0, pb:0}}>
                                    <Typography variant="h3" sx={{fontSize:'25px', lineHeight:'8px', fontWeight:'600',mb:'8px',mt:'36px'}}>
                                        {person.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{color:'#3e3e3e', fontSize:'16px', fontWeight:'400', mb:'16px',mt:'12px'}}>
                                        {person.role}
                                    </Typography>

                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src="/images/about/linkedin.png" // Add your LinkedIn logo image in public/images/social/
                                            alt="LinkedIn"
                                            width={100}
                                            height={40}
                                            style={{ margin: 'auto' }}
                                        />
                                    </a>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LeadershipSection;
