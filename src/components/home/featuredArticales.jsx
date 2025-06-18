'use client'
import React from 'react';
import { Box, Typography, Button, GridLegacy as Grid, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img1 from '@/assets/home/blog_4_main.webp';
import img2 from '@/assets/home/blog_2_main.webp';
import img3 from '@/assets/home/blog_1_main.webp';

const SectionContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]: { padding: theme.spacing(4, 0) },
}));

const MainContainer = styled(Box)(({ theme }) => ({
    maxWidth: '1200px',
    margin: '0 auto',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('sm')]: { padding: theme.spacing(0, 2) },
}));

const HeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
    },
}));

const FeaturedTag = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: 500,
    color: '#f89100',
    lineHeight: '30px',
    mb: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
}));

const MainTitle = styled(Typography)(({ theme }) => ({
    fontSize: '41px',
    fontWeight: 600,
    color: '#19082D',
    lineHeight: '60px',
    '& .highlight': { color: '#F89100' },
    [theme.breakpoints.down('md')]: { fontSize: '36px', lineHeight: '44px' },
    [theme.breakpoints.down('sm')]: { fontSize: '28px', lineHeight: '36px' },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#F89100',
    border: '2px solid #F89100',
    borderRadius: '15px',
    padding: '14px 50px 14px 40px',
    fontSize: '18px',
    fontWeight: 400,
    textTransform: 'none',
    transition: 'all 0.3s ease',
    '&:hover': { backgroundColor: '#F89100', color: '#fff' },
    [theme.breakpoints.down('sm')]: { padding: theme.spacing(1, 3), fontSize: '14px' },
}));

const ArticleCard = styled(Card)(() => ({
    height: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: 'none',
}));

const ArticleImage = styled(CardMedia)(({ theme }) => ({
    height: 240,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: { height: 200 },
}));

const ArticleContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(3),
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: { padding: theme.spacing(2) },
}));

const DateBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
}));

const DateText = styled(Typography)(() => ({
    fontSize: '16px',
    color: '#3E3E3E',
    fontWeight: 400,
}));

const ArticleTitle = styled(Typography)(({ theme }) => ({
    fontSize: '22px',
    fontWeight: 700,
    color: '#19082D',
    lineHeight: 1.4,
    marginBottom: theme.spacing(3),
    flexGrow: 1,
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('sm')]: { fontSize: '18px' },
    '&:hover': {
        color: '#F89100',
        background: 'transparent',
    },
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
    alignSelf: 'flex-start',
    color: '#372748',
    fontSize: '18px',
    fontWeight: 400,
    textTransform: 'none',
    padding: 0,
    minWidth: 'auto',
    '&:hover': { backgroundColor: 'transparent', color: '#f89100' },
    '& .MuiButton-endIcon': {
        marginLeft: theme.spacing(1),
        transition: 'transform 0.3s ease',
    },
    '&:hover .MuiButton-endIcon': {
        transform: 'translateX(4px)',
    },
}));

const articles = [
    { id: 1, image: img1, date: 'Feb 12, 2024', title: 'Why Use React When Developing Websites: A Real Game Changer & Fast Development Approach' },
    { id: 2, image: img2, date: 'Nov 06, 2023', title: 'Why MERN Tech Stack is a Preferred Choice for Enterprise Solutions Among CTOs?' },
    { id: 3, image: img3, date: 'Oct 03, 2023', title: 'Leveraging Digital Transformation Services to Empower Business Growth' },
    { id: 4, image: img1, date: 'Oct 03, 2023', title: 'Influence of an Impactful Mentor in Choosing the Right Organization' },
    { id: 5, image: img2, date: 'Oct 03, 2023', title: '15 Tips for Improving Your SEO in 2025: Boost Your Website Performance' },
];

export default function FeaturedArticles() {
    return (
        <SectionContainer>
            <MainContainer>
                <HeaderBox>
                    <Box>
                        <FeaturedTag>FEATURED ARTICLES</FeaturedTag>
                        <MainTitle>
                            Insights Into The <span className="highlight">Tech Novelties</span>
                        </MainTitle>
                    </Box>
                    <ViewAllButton>View All</ViewAllButton>
                </HeaderBox>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        600: { slidesPerView: 1.2 },
                        900: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    style={{ paddingBottom: 0 }}
                >
                    {articles.map(article => (
                        <SwiperSlide key={article.id}>
                            <ArticleCard>
                                <ArticleImage image={article.image.src} title={article.title} />
                                <ArticleContent>
                                    <DateBox>
                                        <CalendarTodayIcon sx={{ fontSize: 16, color: '#666' }} />
                                        <DateText>{article.date}</DateText>
                                    </DateBox>
                                    <ArticleTitle>{article.title}</ArticleTitle>
                                    <ReadMoreButton endIcon={<ArrowForwardIcon />}>
                                        Read more
                                    </ReadMoreButton>
                                </ArticleContent>
                            </ArticleCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </MainContainer>
        </SectionContainer>
    );
}
