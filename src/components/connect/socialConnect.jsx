'use client';
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import SkypeIcon from '@mui/icons-material/Skype';

const socialLinks = [
    {
        name: 'LINKEDIN',
        label: 'CONNECT WITH',
        icon: <LinkedInIcon/>,
        href: '#',
        color: '#0077B5',
    },
    {
        name: 'FACEBOOK',
        label: 'CONNECT WITH',
        icon: <FacebookIcon/>,
        href: '#',
        color: '#3b5998',
    },
    {
        name: 'INSTAGRAM',
        label: 'CONNECT WITH',
        icon: <InstagramIcon/>,
        href: '#',
        color: 'linear-gradient(45deg, #feda75, #d62976, #962fbf)',
    }
];

export default function SocialConnect() {
    return (
        <Container maxWidth="md" sx={{textAlign: 'center', py: 6}}>
            <Typography variant="h4"
                        align="center"
                        fontWeight="bold"
                        sx={{mb: '55px', fontSize: '50px', lineHeight: '60px', color: '#1c103b'}}>
                Social Connect
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {socialLinks.map((item, idx) => (
                    <Grid item size={{xs: 6, sm: 6, md: 4}} key={idx}>
                        <Button
                            variant="outlined"
                            fullWidth
                            href={item.href}
                            sx={{
                                borderRadius: 4,
                                borderColor: '#ddd',
                                p: 0,
                                overflow: 'hidden',
                                textTransform: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    background: item.color.includes('linear') ? item.color : item.color,
                                    color: '#fff',
                                    px: 2.5,
                                    py: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                    borderTopLeftRadius: 16,
                                    borderBottomLeftRadius: 16,
                                }}
                            >
                                {item.icon}
                            </Box>

                            <Box sx={{flexGrow: 1, px: 2, textAlign: 'left'}}>
                                <Typography
                                    variant="caption"
                                    sx={{color: '#878787', fontWeight: 400, fontSize: '14px', lineHeight: 1.8}}
                                >
                                    {item.label}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{color: '#0d2064', fontWeight: 600, fontsize: '18px'}}
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
