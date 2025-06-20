'use client'

import React, {useState, useRef, useEffect} from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import MarketingIcon from '@mui/icons-material/Campaign';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import CallMadeIcon from '@mui/icons-material/CallMade';
import logo from '../../assets/global/JBS-technology-logo-2 1.34fd4673b7887296fd1c (2).png';
import {useRouter} from "next/navigation";

const generateSlug = (text) => {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();
};

const navItems = [
    {
        title: 'Company',
        items: [
            { text: 'About Us', href: '/aboutus' },
            { text: 'Global Presence', href: '/global-presence' },
            { text: 'Engagement Models', href: '/engagement-models' },
            { text: 'Infrastructure', href: '/infrastructure' },
            { text: 'Life At Budventure', href: '/life-at-budventure' },
            { text: 'Testimonials', href: '/testimonials' },
            {
                title: 'Solutions',
                submenu: [
                    { text: 'Design & Development', href: '/design-development' },
                    { text: 'On Demand App Development', href: '/on-demand-app-development' },
                    { text: 'Digital Marketing', href: '/digital-marketing' },
                    { text: 'API Integration', href: '/api-integration' },
                    { text: 'QA Testing', href: '/qa-testing' },
                    { text: 'IT Consultation & Strategy', href: '/it-consultation-strategy' },
                    { text: 'Outsourcing IT Services', href: '/outsourcing-it-services' }
                ]
            }
        ],
    },
    {
        title: 'Services',
        megaMenu: [
            {
                title: 'Frontend Development',
                icon: <CodeIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/frontend-development',
                items: [
                    { text: 'Angular Development', href: '/angular' },
                    { text: 'ReactJS Development', href: '/reactjs' },
                    { text: 'Vue.JS Development', href: '/vuejs' },
                    { text: 'Bootstrap Development', href: '/bootstrap' }
                ],
            },
            {
                title: 'Backend Development',
                icon: <CodeIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/backend-development',
                items: [
                    { text: 'NodeJS Development', href: '/nodejs' },
                    { text: 'Laravel Development', href: '/laravel' },
                    { text: 'Core PHP Development', href: '/core-php' },
                    { text: 'Java Development', href: '/java' },
                    { text: 'Python Development', href: '/python' }
                ],
            },
            {
                title: 'Mobile App Development',
                icon: <PhoneAndroidIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/mobile-app-development',
                items: [
                    { text: 'Android App Development', href: '/android' },
                    { text: 'iOS App Development', href: '/ios' },
                    { text: 'Flutter App Development', href: '/flutter' },
                    { text: 'React Native Development', href: '/react-native' }
                ],
            },
            {
                title: 'eCommerce & CMS',
                icon: <DesignServicesIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/ecommerce-cms',
                items: [
                    { text: 'Wordpress Development', href: '/wordpress' },
                    { text: 'Shopify Development', href: '/shopify' },
                    { text: 'Custom eCommerce', href: '/custom-ecommerce' }
                ],
            },
            {
                title: 'UI/UX Design',
                icon: <DesignServicesIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/ui-ux-design',
                items: [
                    { text: 'Web Design', href: '/web-design' },
                    { text: 'Mobile App Design', href: '/mobile-app-design' },
                    { text: 'Software Design', href: '/software-design' },
                    { text: 'PSD to HTML Development', href: '/psd-to-html' }
                ],
            },
            {
                title: 'Digital Marketing',
                icon: <MarketingIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/digital-marketing',
                items: [
                    { text: 'Social Media Marketing', href: '/social-media-marketing' },
                    { text: 'Search Engine Optimization', href: '/seo' },
                    { text: 'Graphic Designing', href: '/graphic-designing' },
                    { text: 'Pay-Per-Click Ads', href: '/ppc-ads' },
                    { text: 'Content & Email Marketing', href: '/content-email-marketing' }
                ],
            },
            {
                title: 'Quality Assurance',
                icon: <SecurityIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/quality-assurance',
                items: [
                    { text: 'Manual Testing', href: '/manual-testing' },
                    { text: 'Automation Testing', href: '/automation-testing' },
                    { text: 'Performance Testing', href: '/performance-testing' }
                ],
            },
            {
                title: 'Trending Techstacks',
                icon: <TrendingUpIcon sx={{color: '#F89100', fontSize: 20}}/>,
                href: '/trending-techstacks',
                items: [
                    { text: 'Artificial Intelligence', href: '/artificial-intelligence' },
                    { text: 'Augmented Reality', href: '/augmented-reality' },
                    { text: 'Virtual Reality', href: '/virtual-reality' },
                    { text: 'Cyber Security', href: '/cyber-security' },
                    { text: 'Cloud Services', href: '/cloud-services' }
                ],
            },
        ],
    },
    {
        title: 'Hire Developers',
        megaMenu: [
            {
                title: 'Hire Web Developers',
                href: '/web-developers',
                items: [
                    { text: 'Hire PHP Developers', href: '/php' },
                    { text: 'Hire Laravel Developers', href: '/laravel' },
                    { text: 'Hire Full Stack Developers', href: '/full-stack' }
                ],
            },
            {
                title: 'Hire Mobile App Developers',
                href: '/mobile-app-developers',
                items: [
                    { text: 'Hire Android Developers', href: '/android' },
                    { text: 'Hire iOS Developers', href: '/ios' },
                    { text: 'Hire Flutter Developers', href: '/flutter' },
                    { text: 'Hire React Native Developers', href: '/react-native' }
                ],
            },
            {
                title: 'Hire Javascript Developers',
                href: '/javascript-developers',
                items: [
                    { text: 'Hire MEAN Stack Developers', href: '/mean-stack' },
                    { text: 'Hire MERN Stack Developers', href: '/mern-stack' },
                    { text: 'Hire NodeJS Developers', href: '/nodejs' },
                    { text: 'Hire ReactJS Developers', href: '/reactjs' },
                    { text: 'Hire AngularJS Developers', href: '/angularjs' }
                ],
            },
            {
                title: 'eCommerce & CMS',
                href: '/ecommerce-cms',
                items: [
                    { text: 'Hire WordPress Developers', href: '/wordpress' },
                    { text: 'Hire Shopify Developers', href: '/shopify' }
                ],
            },
        ],
    },
    {
        title: 'Portfolio',
        href: '/portfolio',
    },
    {
        title: 'Careers',
        href: '/careers',
    },
    {
        title: 'Connect',
        href: '/connect',
    },
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(null);
    const closeTimeout = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedAccordion, setExpandedAccordion] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    const handlePopoverOpen = (event, menu) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setAnchorEl(event.currentTarget);
        setOpenMenu(menu);
    };

    const handlePopoverClose = () => {
        closeTimeout.current = setTimeout(() => {
            setAnchorEl(null);
            setOpenMenu(null);
        }, 200);
    };

    const handleMegaMenuEnter = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };

    const handleMegaMenuLeave = () => {
        handlePopoverClose();
    };

    const handleNavigation = (href) => {
        if (href) {
            router.push(href);
            setMobileOpen(false);
            setOpenMenu(null);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const drawer = (
        <Box sx={{width: '100%', height: '100vh', bgcolor: '#f8f9fa'}}>
            <Box sx={{p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'white'}}>
                <Box
                    sx={{
                        width: '85px',
                        height: '85px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleNavigation('/')}
                >
                    <Image src={logo} alt="logo" style={{width: '100%', height: '100%'}}/>
                </Box>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon sx={{fontSize:'30px'}}/>
                </IconButton>
            </Box>

            <List sx={{px: 2, pt: 2}}>
                {navItems.map((item, index) => {
                    if (item.megaMenu || item.items) {
                        return (
                            <Accordion
                                key={item.title}
                                expanded={expandedAccordion === item.title}
                                onChange={handleAccordionChange(item.title)}
                                sx={{
                                    mb: 1,
                                    boxShadow: 'none',
                                    '&:before': {display: 'none'},
                                    bgcolor: 'white',
                                    borderRadius: 1
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            alignItems: 'center'
                                        }
                                    }}
                                >
                                    <Typography sx={{fontWeight: 500, color: '#19082D'}}>
                                        {item.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{pt: 0}}>
                                    {item.megaMenu ? (
                                        <Box>
                                            {item.megaMenu.map((section) => (
                                                <Box key={section.title} sx={{mb: 2}}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            mb: 1,
                                                            cursor: 'pointer',
                                                            '&:hover': { color: '#F89100' }
                                                        }}
                                                        onClick={() => handleNavigation(section.href)}
                                                    >
                                                        {section.icon}
                                                        <Typography sx={{
                                                            ml: 1,
                                                            fontWeight: 500,
                                                            fontSize: '16px',
                                                            color: '#19082D',
                                                        }}>
                                                            {section.title}
                                                        </Typography>
                                                    </Box>
                                                    {section.items.map((subItem) => (
                                                        <Typography
                                                            key={subItem.text}
                                                            onClick={() => handleNavigation(subItem.href)}
                                                            sx={{
                                                                fontSize: '16px',
                                                                color: '#19082D',
                                                                fontWeight: 500,
                                                                mb: 0.5,
                                                                ml: 3,
                                                                py: 1,
                                                                cursor: 'pointer',
                                                                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                                                                '&:hover': {color: '#F89100'}
                                                            }}
                                                        >
                                                            {subItem.text}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            ))}
                                        </Box>
                                    ) : (
                                        <Box>
                                            {item.items.map((subItem) => {
                                                if (typeof subItem === 'object' && subItem.submenu) {
                                                    return (
                                                        <Accordion
                                                            key={subItem.title}
                                                            sx={{
                                                                boxShadow: 'none',
                                                                '&:before': {display: 'none'},
                                                                bgcolor: 'transparent',
                                                                p: 0
                                                            }}
                                                        >
                                                            <AccordionSummary
                                                                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.2)',}}
                                                                expandIcon={<ExpandMoreIcon sx={{fontSize: '16px'}}/>}
                                                                onClick={() => handleNavigation(subItem.href)}
                                                            >
                                                                <Typography sx={{
                                                                    fontSize: '16px',
                                                                    color: '#19082D',
                                                                    fontWeight: 500,
                                                                }}>
                                                                    {subItem.title}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                {subItem.submenu.map((submenuItem) => (
                                                                    <Typography
                                                                        key={submenuItem.text}
                                                                        onClick={() => handleNavigation(submenuItem.href)}
                                                                        sx={{
                                                                            fontSize: '16px',
                                                                            fontWeight: 500,
                                                                            color: '#19082D',
                                                                            cursor: 'pointer',
                                                                            py: 1.5,
                                                                            borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                                                                            '&:hover': {color: '#F89100'}
                                                                        }}
                                                                    >
                                                                        {submenuItem.text}
                                                                    </Typography>
                                                                ))}
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    )
                                                }
                                                return (
                                                    <Typography
                                                        key={subItem.text}
                                                        onClick={() => handleNavigation(subItem.href)}
                                                        sx={{
                                                            fontSize: '16px',
                                                            color: '#19082D',
                                                            fontWeight: 500,
                                                            py: 1.5,
                                                            cursor: 'pointer',
                                                            borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                                                            '&:hover': {color: '#F89100'}
                                                        }}
                                                    >
                                                        {subItem.text}
                                                    </Typography>
                                                )
                                            })}
                                        </Box>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                        );
                    }

                    return (
                        <ListItem
                            key={item.title}
                            onClick={() => handleNavigation(item.href)}
                            sx={{
                                mb: 1,
                                bgcolor: 'white',
                                borderRadius: 1,
                                cursor: 'pointer',
                                '&:hover': {bgcolor: '#f5f5f5'}
                            }}
                        >
                            <ListItemText
                                primary={item.title}
                                primaryTypographyProps={{
                                    fontWeight: 500,
                                    color: '#19082D'
                                }}
                            />
                        </ListItem>
                    );
                })}
            </List>

            <Box sx={{px: 2, mt: 3}}>
                <Typography sx={{fontWeight: 600, color: '#253e59', mb: 2}}>
                    Contact
                </Typography>

                <Box sx={{mb: 2, p: 2, bgcolor: 'white', borderRadius: 1}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                        <Box
                            sx={{
                                p: '10px',
                                backgroundColor: '#F89100',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 1.5,
                            }}
                        >
                            <LocationOnIcon sx={{color: '#FFF', fontSize: 18}}/>
                        </Box>
                        <Box>
                            <Typography sx={{color: '#3E3E3E', fontWeight: 500}}>
                                Contact
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    color: '#19082D',
                                    lineHeight: 1.7,
                                }}
                            >
                                303, Vedanta, Opp Ushmanpura Garden, Ashram Road, Ahmedabad, Gujarat-380014
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{mb: 2, p: 2, bgcolor: 'white', borderRadius: 1}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                        <Box sx={{
                            p: '10px',
                            backgroundColor: '#F89100',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1.5,
                        }}>
                            <EmailIcon sx={{color: '#FFF', fontSize: 18,}}/>
                        </Box>
                        <Box>
                            <Typography sx={{color: '#3E3E3E', fontWeight: 500}}>
                                Email
                            </Typography>
                            <Typography sx={{
                                fontSize: '20px',
                                color: '#19082D',
                                lineHeight: 1.7,
                                wordBreak: 'break-word'
                            }}>
                                support@budventure.technology
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{mb: 2, p: 2, bgcolor: 'white', borderRadius: 1}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                        <Box sx={{
                            p: '10px',
                            backgroundColor: '#F89100',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1.5,
                        }}>
                            <PhoneIcon sx={{color: '#FFF', fontSize: 18}}/>
                        </Box>
                        <Box>
                            <Typography sx={{color: '#3E3E3E', fontWeight: 500}}>
                                HR and Admin
                            </Typography>
                            <Typography sx={{
                                fontSize: '20px',
                                color: '#19082D',
                                lineHeight: 1.7,
                            }}>
                                +91 63525 17175
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{mb: 2, p: 2, bgcolor: 'white', borderRadius: 1}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                        <Box sx={{
                            p: '10px',
                            backgroundColor: '#F89100',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1.5,
                        }}>
                            <BusinessIcon sx={{color: '#FFF', fontSize: 18,}}/>
                        </Box>
                        <Box>
                            <Typography sx={{color: '#3E3E3E', fontWeight: 500}}>
                                Sales Inquiry
                            </Typography>
                            <Typography sx={{
                                fontSize: '20px',
                                color: '#19082D',
                                lineHeight: 1.7,
                            }}>
                                +91 99241 01601 <br/>
                                +91 93161 18701
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Box sx={{position: 'relative'}}>
            {!isMobile && (
                <AppBar position="fixed" elevation={0} sx={{backgroundColor:scrolled ? '#FFF' :'transparent', zIndex: 1000}}>
                    <Container maxWidth="lg">
                        <Toolbar sx={{justifyContent: 'space-between', py: 1}}>
                            <Box sx={{mr: 2}}>
                                <Box sx={{width: 85, height: 85}}>
                                    <Box
                                        sx={{
                                            width: '85px',
                                            height: '85px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => handleNavigation('/')}
                                    >
                                        <Image src={logo} alt="logo" style={{width: '100%', height: '100%'}}/>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                                {navItems.map((item) => {
                                    const hasMega = !!item.megaMenu;
                                    const hasSimple = !!item.items;
                                    const isOpen = openMenu === item.title;

                                    if (hasMega || hasSimple) {
                                        return (
                                            <Box
                                                key={item.title}
                                                onMouseEnter={(e) => handlePopoverOpen(e, item.title)}
                                                onMouseLeave={handlePopoverClose}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        position:'relative',
                                                        fontSize: '16px',
                                                        cursor: 'pointer',
                                                        color: isOpen ? '#F89100' : '#253e59',
                                                        transition: 'all 0.3s',
                                                        '&:hover': {color: '#320930'},
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{fontWeight: 600, mr: 0.5}}>{item.title}</Typography>
                                                    {isOpen ? <RemoveIcon sx={{fontSize: '16px'}}/> :
                                                        <AddIcon sx={{fontSize: '16px'}}/>}
                                                </Box>
                                            </Box>
                                        );
                                    }

                                    return (
                                        <Typography
                                            key={item.title}
                                            onClick={() => handleNavigation(item.href)}
                                            sx={{
                                                cursor: 'pointer',
                                                transition: 'color 0.3s',
                                                color: '#253e59',
                                                fontWeight: 600,
                                                '&:hover': {color: '#320930'},
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    );
                                })}
                            </Box>

                            <Box>
                                <Typography
                                    onClick={() => handleNavigation('/connect')}
                                    sx={{
                                        backgroundColor: '#F89100',
                                        color: '#FFF',
                                        p: '14px 28px',
                                        borderRadius: '14px',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0px 4px 10px rgba(248, 145, 0, 0.3)',
                                        },
                                    }}
                                >
                                    Let's Connect <CallMadeIcon sx={{fontSize: '20px'}}/>
                                </Typography>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            )}

            {isMobile && (
                <AppBar
                    position="sticky"
                    elevation={0}
                    sx={{backgroundColor: 'white', zIndex: 1000, boxShadow: 'none'}}
                >
                    <Toolbar sx={{justifyContent: 'space-around'}}>
                        <Box
                            sx={{width: '85px', height: '85px', cursor: 'pointer'}}
                            onClick={() => handleNavigation('/')}
                        >
                            <Image src={logo} alt="logo" style={{width: '100%', height: '100%'}}/>
                        </Box>
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                sx={{color: '#FFF', backgroundColor: '#F89100', p: 1.5, fontWeight: 600}}
                            >
                                <MenuIcon sx={{fontSize:'30px'}}/>
                            </IconButton>
                            <Box sx={{ml: 2}}>
                                <Typography
                                    component="a"
                                    href="/connect"
                                    sx={{
                                        backgroundColor: '#F89100',
                                        color: '#FFF',
                                        p: {sm:'14px 28px' , xs:'10px 20px'},
                                        borderRadius: '14px',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s',
                                        display: {sm:'inline-flex' , xs:'none'},
                                        alignItems: 'center',
                                        gap: '8px',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0px 4px 10px rgba(248, 145, 0, 0.3)',
                                        },
                                    }}
                                >
                                    Let's Connect <CallMadeIcon sx={{fontSize: '20px'}}/>
                                </Typography>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            )}

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{keepMounted: true}}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        maxWidth: '480px',
                        width: '100%',
                    },
                }}
            >
                {drawer}
            </Drawer>

            {!isMobile && openMenu && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '10%',
                        left: 0,
                        right: 0,
                        zIndex: 999,
                    }}
                    onMouseEnter={handleMegaMenuEnter}
                    onMouseLeave={handleMegaMenuLeave}
                >
                    {(() => {
                        const currentItem = navItems.find(item => item.title === openMenu);

                        if (currentItem?.megaMenu) {
                            return (
                                <Container maxWidth="lg" sx={{py: 4, boxShadow: '0 0 20px rgba(0, 0, 0, .15)' , backgroundColor:'#FFF'}}>
                                    <Grid container spacing={4}>
                                        {currentItem.megaMenu.map((section) => (
                                            <Grid item size={{xs: 12, sm: 6, md: 3,}} key={section.title}>
                                                <Box sx={{mb: 2}}>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        mb: 3,
                                                        borderBottom: '1px solid #000'
                                                    }}>
                                                        {section.icon && (
                                                            <Box sx={{mr: 1.5}}>
                                                                {section.icon}
                                                            </Box>
                                                        )}
                                                        <Typography
                                                            sx={{
                                                                fontWeight: 700,
                                                                color: '#253e59',
                                                                fontSize: '16px',
                                                                pb: 0.5,
                                                            }}
                                                        >
                                                            {section.title}
                                                        </Typography>
                                                    </Box>

                                                    <Grid container spacing={1}>
                                                        {section.items.map((subItem) => (
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                key={subItem.text}
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    cursor: 'pointer',
                                                                    borderRadius: 1,
                                                                    transition: 'all 0.2s',
                                                                    '&:hover .subItemText': {
                                                                        color: '#320930',
                                                                    },
                                                                }}
                                                                onClick={() => handleNavigation(subItem.href)}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        width: 6,
                                                                        height: 6,
                                                                        borderRadius: '50%',
                                                                        backgroundColor: '#F89100',
                                                                        mr: 1.2,
                                                                        mt: '2px',
                                                                    }}
                                                                />
                                                                <Typography
                                                                    className="subItemText"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        color: '#666',
                                                                        transition: 'all 0.2s',
                                                                        lineHeight: 1.4,
                                                                    }}
                                                                >
                                                                    {subItem.text}
                                                                </Typography>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Container>
                            );
                        }

                        if (currentItem?.items) {
                            return (
                                <Container maxWidth={'lg'} sx={{position: 'relative'}}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: '18%',
                                        zIndex: 1,
                                        boxShadow: '0 0 20px rgba(0, 0, 0, .15)',
                                        p: '20px 30px',
                                        backgroundColor: 'white',
                                    }}
                                >
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={4}>
                                            <List dense sx={{p: 0}}>
                                                {currentItem.items.map((sub, index) => {
                                                    const isSubWithMenu = typeof sub === 'object' && sub.submenu;
                                                    const isSubObject = typeof sub === 'object';

                                                    return (
                                                        <Box
                                                            key={isSubObject ? sub.text || sub.title : sub}
                                                            sx={{position: 'relative'}}
                                                            onMouseEnter={(e) => {
                                                                setHoveredIndex(index);
                                                                const submenu = e.currentTarget.querySelector('.submenu-box');
                                                                if (submenu) submenu.style.display = 'block';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                setHoveredIndex(null);
                                                                const submenu = e.currentTarget.querySelector('.submenu-box');
                                                                if (submenu) submenu.style.display = 'none';
                                                            }}
                                                        >
                                                            <ListItem
                                                                sx={{
                                                                    p: 0,
                                                                    mb: 1,
                                                                    cursor: 'pointer',
                                                                    borderRadius: 1,
                                                                    transition: 'all 0.2s',
                                                                    width: '240px',
                                                                    '&:hover .MuiListItemText-primary': {
                                                                        color: '#F89100',
                                                                    },
                                                                }}
                                                                onClick={() => handleNavigation(sub.href)}
                                                            >
                                                                <ListItemText
                                                                    primary={isSubObject ? sub.text || sub.title : sub}
                                                                    primaryTypographyProps={{
                                                                        color: '#253E59',
                                                                        fontSize: '14px',
                                                                        transition: 'all 0.2s',
                                                                        fontWeight: 500,
                                                                    }}
                                                                />
                                                                {isSubWithMenu && (
                                                                    hoveredIndex === index
                                                                        ? <RemoveIcon sx={{fontSize: '14px', color: '#F89100'}}/>
                                                                        : <AddIcon sx={{fontSize: '14px'}}/>
                                                                )}
                                                            </ListItem>

                                                            {isSubWithMenu && (
                                                                <Box
                                                                    className="submenu-box"
                                                                    sx={{
                                                                        display: 'none',
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        left: '100%',
                                                                        backgroundColor: 'white',
                                                                        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
                                                                        borderRadius: 1,
                                                                        p: 2,
                                                                        zIndex: 1000,
                                                                        minWidth: '240px',
                                                                    }}
                                                                >
                                                                    <List dense sx={{p: 0}}>
                                                                        {sub.submenu.map((sublink) => (
                                                                            <ListItem
                                                                                key={sublink.text}
                                                                                sx={{
                                                                                    p: 0,
                                                                                    mb: 1,
                                                                                    cursor: 'pointer',
                                                                                    borderRadius: 1,
                                                                                    transition: 'all 0.2s',
                                                                                    '&:hover .MuiListItemText-primary': {
                                                                                        color: '#F89100',
                                                                                    },
                                                                                }}
                                                                                onClick={() => handleNavigation(sublink.href)}
                                                                            >
                                                                                <ListItemText
                                                                                    primary={sublink.text}
                                                                                    primaryTypographyProps={{
                                                                                        color: '#253E59',
                                                                                        fontSize: '14px',
                                                                                        transition: 'all 0.2s',
                                                                                        fontWeight: 500,
                                                                                    }}
                                                                                />
                                                                            </ListItem>
                                                                        ))}
                                                                    </List>
                                                                </Box>
                                                            )}
                                                        </Box>
                                                    );
                                                })}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                                </Container>
                            );
                        }
                        return null;
                    })()}
                </Box>
            )}
        </Box>
    );
};

export default Navbar;