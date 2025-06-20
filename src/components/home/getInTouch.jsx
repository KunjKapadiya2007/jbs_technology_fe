'use client'
import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    GridLegacy as Grid,
    Paper
} from "@mui/material";
import { useForm } from 'react-hook-form';
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '@/assets/home/techimply.svg';
import img2 from '@/assets/home/view-our-profile.png';
import img3 from '@/assets/home/top-it-companies.png';
import img4 from '@/assets/home/top-farm.png';
import img5 from '@/assets/home/Ecommerce_Web_Development.png';

const images = [
    { images: img1, alt: 'Top IT Pro' },
    { images: img2, alt: 'Profile' },
    { images: img3, alt: 'Top IT Company' },
    { images: img4, alt: 'Top Farm' },
    { images: img5, alt: 'Ecommerce' }
];

function GetInTouch() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box sx={{ background: '#253E59', py: "80px", display: 'flex', alignItems: 'center' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Left Side */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ color: 'white', marginBottom: '40px' }}>
                            <Typography sx={{
                                color: '#F89100',
                                fontSize: '20px',
                                fontWeight: '600',
                                marginBottom: '10px',
                                letterSpacing: '1px'
                            }}>
                                GET IN TOUCH
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: '32px', md: '41px' },
                                fontWeight: 600,
                                lineHeight: { xs: '43px', sm: '50px', md: '60px' }, // consistent unit
                                mb: '40px', // shorter alias for marginBottom
                            }}>
                                Let's Talk<br />
                                About Your <span style={{ color: '#F89100' }}>Project</span>
                            </Typography>

                            {/* Contact Info */}
                            <Box sx={{ marginBottom: '30px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 5.5 }}>
                                    <Box sx={{ width: 42, height: 42, backgroundColor: '#F89100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '17px', flexShrink: 0 }}>
                                        <EmailIcon sx={{ color: 'white', fontSize: 22 }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: 1.2, marginBottom: '8px' }}>Email</Typography>
                                        <Typography sx={{ fontSize: 20, lineHeight: 1.3,wordBreak:"break-word" }}>support@budventure.technology</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ width: 42, height: 42, backgroundColor: '#F89100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '17px', flexShrink: 0 }}>
                                        <CallIcon sx={{ color: 'white', fontSize: 22 }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: 1.2, marginBottom: '8px' }}>Phone</Typography>
                                        <Typography sx={{ fontSize: 20, lineHeight: 1.3 }}>+91 99241 01601 | +91 93161 18701</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Swiper Slider */}
                            <Box sx={{ position: 'relative', marginTop: '40px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: '100%'}}>
                                        <Swiper
                                            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                                            breakpoints={{
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                                600: {
                                                    slidesPerView: 2,
                                                },
                                                900: {
                                                    slidesPerView: 3,
                                                },
                                            }}
                                        >
                                            {images.map((image, index) => (
                                                <SwiperSlide key={index} style={{display:'flex', alignItems: 'center' , justifyContent: 'center'}}>
                                                    <Box
                                                        sx={{
                                                            width: '140px' ,
                                                            height: '141px',
                                                            backgroundColor: 'white',
                                                            borderRadius: '12px',
                                                            display: 'flex',
                                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                        }}
                                                    >
                                                        <img
                                                            src={image.images.src}
                                                            alt={image.alt}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'contain',
                                                                borderRadius: '12px',
                                                            }}
                                                        />
                                                    </Box>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        {/* Centered Dots below slider */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                marginTop: '20px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {Array.from({ length: images.length - 2 }).map((_, index) => (
                                                <Box
                                                    key={index}
                                                    onClick={() => setCurrentSlide(index)}
                                                    sx={{
                                                        width: index === currentSlide ? '24px' : '8px',
                                                        height: '8px',
                                                        backgroundColor:
                                                            index === currentSlide ? '#F89100' : 'rgba(255,255,255,0.5)',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        marginX: '4px',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>


                        </Box>
                    </Grid>

                    {/* Right Side - Form */}
                    <Grid item xs={12} md={6} pl={6}>
                        <Paper
                            sx={{
                                p: { xs: '20px', sm: '30px 40px 30px 50px' },
                                borderRadius: '30px',
                                backgroundColor: '#FCF9FF',
                                maxWidth: '500px',
                                mx: 'auto'
                            }}
                            elevation={0}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={4}>
                                    {/* Name */}
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: '14px', color: '#19082D', fontWeight: 500 }}>
                                            Name
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Enter Name"
                                            fullWidth
                                            {...register("name", { required: "Name is required" })}
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            sx={{
                                                '& .MuiInputBase-root': { fontSize: '18px', color: '#19082D', padding: "10px 0px 4px" },
                                                '& .MuiInput-underline:before': { borderBottomColor: '#ddd' },
                                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#ddd' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#ddd' },
                                            }}
                                        />
                                    </Grid>

                                    {/* Phone No */}
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: '14px', color: '#19082D', fontWeight: 500 }}>
                                            Phone No.
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box
                                                component="img"
                                                src="https://flagcdn.com/w40/in.png"
                                                alt="IN"
                                                sx={{ width: 20, height: 14 }}
                                            />
                                            <Typography sx={{ fontSize: '16px', color: '#19082D' }}>+91</Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Enter Contact Number"
                                                fullWidth
                                                {...register("phone", {
                                                    required: "Phone number is required",
                                                    pattern: {
                                                        value: /^\d{10}$/,
                                                        message: "Enter valid 10-digit phone number"
                                                    }
                                                })}
                                                error={!!errors.phone}
                                                helperText={errors.phone?.message}
                                                sx={{
                                                    '& .MuiInputBase-root': { fontSize: '18px', color: '#19082D', padding: "10px 0px 4px" },
                                                    '& .MuiInput-underline:before': { borderBottomColor: '#ddd' },
                                                    '& .MuiInput-underline:hover:before': { borderBottomColor: '#ddd' },
                                                    '& .MuiInput-underline:after': { borderBottomColor: '#ddd' },
                                                }}
                                            />
                                        </Box>
                                    </Grid>

                                    {/* Email */}
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: '14px', color: '#19082D', fontWeight: 500 }}>
                                            Email
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Enter Email Address"
                                            fullWidth
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+\.\S+$/,
                                                    message: "Enter valid email address"
                                                }
                                            })}
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            sx={{
                                                '& .MuiInputBase-root': { fontSize: '18px', color: '#19082D', padding: "10px 0px 4px" },
                                                '& .MuiInput-underline:before': { borderBottomColor: '#ddd' },
                                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#ddd' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#ddd' },
                                            }}
                                        />
                                    </Grid>

                                    {/* Message */}
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: '14px', color: '#19082D', fontWeight: 500 }}>
                                            How can we help you?
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Type Message Here"
                                            fullWidth
                                            multiline
                                            minRows={3}
                                            {...register("message", { required: "Message is required" })}
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            sx={{
                                                '& .MuiInputBase-root': { fontSize: '18px', color: '#19082D', padding: "10px 0px 4px" },
                                                '& .MuiInput-underline:before': { borderBottomColor: '#ddd' },
                                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#ddd' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#ddd' },
                                            }}
                                        />
                                    </Grid>

                                    {/* Submit Button */}
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            endIcon={<SendIcon />}
                                            sx={{
                                                p: '12px',
                                                borderRadius: '12px',
                                                backgroundColor: '#F89100',
                                                color: '#fff',
                                                textTransform: 'none',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                '&:hover': {
                                                    backgroundColor: '#e58000',
                                                }
                                            }}
                                        >
                                            Submit Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default GetInTouch;