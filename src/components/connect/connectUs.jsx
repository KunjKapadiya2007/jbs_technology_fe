import {Box, Typography, Grid, TextField, Button, Paper, Container} from '@mui/material';
import Image from 'next/image';
import SendIcon from '@mui/icons-material/Send';

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
    },
    {
        title: 'For Sales Enquiry',
        content: '+91 99241 01601 | +91 93161 18701',
        image: '/images/connect/mail.svg',
    },
];

const ConnectUs = () => {
    return (
        <Container maxWidth={'lg'}>
            <Box sx={{py: {xs: 6, md: 10}, px: 2}}>
                <Grid container justifyContent="center">
                    {/* Left Contact Info */}
                    <Grid item size={{xs: 12, md: 4}}>
                        <Grid container direction="column" spacing={3}>
                            {infoCards?.map((card, index) => (
                                <Grid item key={index}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderRadius: '10px 90px 10px 10px',
                                            bgcolor: '#fcf9ff',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                            p:'43px 29px',
                                            '&:hover .image-box': {
                                                transform: 'translateY(-65%)',
                                            },
                                        }}
                                    >
                                        <Box sx={{flex: 1}}>
                                            <Typography sx={{
                                                fontSize: '19px',
                                                fontWeight: '600',
                                                mb: '6px',
                                                lineHeight: '24px'
                                            }}>
                                                {card.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{color: '#f89100', fontWeight: 600}}
                                            >
                                                {card.content}
                                            </Typography>
                                        </Box>
                                        <Box  className="image-box"
                                              sx={{
                                                  position: 'absolute',
                                                  top: '30px',
                                                  right: '-50px',
                                                  zIndex: 0,
                                                  transition: 'transform 0.5s ease',
                                                  transform: 'translateY(-50%)',
                                        }}>
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                width={115}
                                                height={115}
                                                style={{objectFit: 'contain'}}
                                            />
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Right Form */}
                    <Grid item size={{xs: 12, md: 8}} pl={6}>
                        <Paper
                            sx={{
                                p:'30px 40px 30px 50px',
                                borderRadius: '30px',
                                backgroundColor: '#fcf9ff',
                            }}
                            elevation={0}
                        >
                            <Grid container spacing={4}>
                                <Grid item size={{xs: 12, md: 6}}>
                                    <Typography component={'label'} sx={{fontSize:'16px', color:'#19082d', fontWeight:'500'}}>
                                        Name
                                    </Typography>
                                    <TextField  sx={{
                                        padding: '10px 0 4px 0',
                                        '& .MuiInputBase-root': {
                                            fontSize: '18px',
                                            color: '#19082d',
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                    }} fullWidth placeholder="Enter Your Name" variant="standard"/>
                                </Grid>
                                <Grid item size={{xs: 12, md: 6}}>
                                    <Typography component={'label'} sx={{fontSize:'16px', color:'#19082d', fontWeight:'500'}}>
                                        Phone No.
                                    </Typography>
                                    <TextField sx={{
                                        padding: '10px 0 4px 0',
                                        '& .MuiInputBase-root': {
                                            fontSize: '18px',
                                            color: '#19082d',
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                    }} fullWidth placeholder="Enter Your Contact Number" variant="standard"/>
                                </Grid>
                                <Grid item size={{xs: 12}}>
                                    <Typography component={'label'} sx={{fontSize:'16px', color:'#19082d', fontWeight:'500'}}>
                                        Email
                                    </Typography>
                                    <TextField sx={{
                                        padding: '10px 0 4px 0',
                                        '& .MuiInputBase-root': {
                                            fontSize: '18px',
                                            color: '#19082d',
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                    }} fullWidth placeholder="Enter Your Email Address" variant="standard"/>
                                </Grid>
                                <Grid item size={{xs: 12}}>
                                    <Typography component={'label'} sx={{fontSize:'16px', color:'#19082d', fontWeight:'500'}}>
                                        How Can We Help You?
                                    </Typography>
                                    <TextField sx={{
                                        padding: '10px 0 4px 0',
                                        '& .MuiInputBase-root': {
                                            fontSize: '18px',
                                            color: '#19082d',
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:hover:before': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor: '#3e3e3e21',
                                        },
                                    }}
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        placeholder="Type Your Message Here"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item size={{xs: 12}}>
                                    <Button
                                        variant="contained"
                                        endIcon={<SendIcon/>}
                                        sx={{p:'14px 38px', borderRadius: '15px', backgroundColor:'#f89100', color:'#fff',boxShadow:'none', textTransform:'capitalize'}}
                                    >
                                        Submit Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ConnectUs;
