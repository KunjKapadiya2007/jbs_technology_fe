'use client'
import React from 'react';
import {Box, Typography, GridLegacy as Grid, Container} from "@mui/material";
import Image from 'next/image';
import bgimg from '@/assets/home/bud-home-back.jpg';
import rightimg from '@/assets/home/banner-img8.webp';
import googlereview from '@/assets/home/google_review.png';
import review from '@/assets/home/Screenshot 2025-06-19 153514.png';


function Header() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 8 },
            }}
        >
           <Container maxWidth={'lg'}>
               <Grid container alignItems="center" spacing={4}>
                   {/* Left Section */}
                   <Grid item xs={12} md={6}>
                       <Box sx={{
                           fontSize: {xs:"30px",sm:"40px",md:"55px"},
                           lineHeight: { xs: '48px', sm: '53px', md: '68px' },
                           fontWeight:600,
                           mb:"26px",
                           color:"#253E59"
                       }}>
                           INSPIRING
                           DIGITAL JOURNEYS
                           WITH ONE-STOP
                           IT SOLUTIONS
                       </Box>
                       <Box sx={{
                           fontSize:"18px",
                           color:"#253E59",
                           fontWeight:400,
                           lineHeight:"28px",
                           paddingTop: "0px 0px 33px 6px",
                           mb:"26px"
                       }}>
                           We turn your visionary ideas into reality with Innovative and Premium IT Solutions.
                           As the leading Web Development Company, we pride ourselves on redefining online
                           experiences with our commitment to excellence.
                       </Box>

                       {/* Reviews Section */}
                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                               <Image src={googlereview} alt="Google Review" width={180} height={50} />
                           </Box>

                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                               <Image src={review} alt="Google Review" width={200} height={50} />
                           </Box>
                       </Box>
                   </Grid>

                   {/* Right Section */}
                   <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                       <Image src={rightimg} alt="Banner" style={{ maxWidth: '100%', height: 'auto' }} />
                   </Grid>
               </Grid>
           </Container>
        </Box>
    );
}

export default Header;
