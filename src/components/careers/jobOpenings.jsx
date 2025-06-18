'use client';

import React, {useState} from 'react';
import {Box, Button, Collapse, Container, Grid, Paper, Typography} from '@mui/material';
import Image from 'next/image';

const jobList = [
    {
        title: 'SEO Executive',
        experience: 'Min 1 year',
        days: '5 days a week',
        qualification: 'Any Graduate/B.Tech/BCA/BBA',
        responsibilities: [
            'Strong understanding of SEO Fundamentals (on-page, off-page, and technical)',
            'Must possess strong English language proficiency, both written and spoken',
            'Conduct Keyword Research and SEO Audits to identify opportunities for website optimization',
            'Optimize On-Page SEO Elements (Meta Tags, Headings, Internal Linking, etc.)',
            'Expertise in Link Building efforts to improve Domain Authority (DA)',
            'Expertise in using Google Analytics + Search Console + SEMRUSH for Website SEO Data Analysis',
            'Staying updated with SEO Best Practices and Algorithm updates',
            'Writing SEO-friendly Blogs',
        ],
    },
    {
        title: 'Business Development Manager',
        experience: '2-5 years',
        days: '5 days a week',
        qualification: 'B.B.A., M.B.A.',
        responsibilities: [
            '2-5 years of experience in Strategy, Lead Generation, Consulting and Business Development for, IT Software services industry.',
            'Should have experience in handling in bound leads and strong follow-up skills.',
            'Generate & identify new sales leads, pitch to prospects about the services we offer.',
            'Write proposals for prospective clients and arrange post-sales support.',
            'Must be familiar with LinkedIn, Google search and other sales tool.',
            'Well versed in delivering product/solution demos and sales presentations.',
            'Maintain meaningful relationships with existing clients to ensure that they are retained.',
            'Study clients existing technology / systems and consult them on the most appropriate process, to ensure seamless integration of our solution.',
            'Provide strategic inputs for the business based on interactions with clients.',
            'Maintain daily sales report and report to the Manager.',
            'Manage and execute marketing campaign plans.'
        ],

    },
    {
        title: 'Sr. Graphic Designer',
        experience: 'Min 3 years',
        days: '5 days a week',
        qualification: 'Any Graduation',
        responsibilities: [
            'Minimum 3 years of experience in Graphic Design and Video Editing.',
            'Proficiency in video editing software (e.g., Adobe Premiere Pro, Final Cut Pro, After Effects).',
            'Strong skills in graphic design software (e.g., Adobe Photoshop, Illustrator, InDesign).',
            'Ability to work independently as well as collaboratively in a team environment.',
            'Strong organizational and time-management skills.',
            'Creative flair and a strong attention to detail.',
            'Excellent communication skills.'
        ],
    },
    {
        title: 'MERN Stack Developer',
        experience: 'Min 2 year',
        days: '5 days a week',
        qualification: 'B.E. IT/CE, B.Tech, B.C.A, M.C.A.',
        responsibilities: [
            'Min. 2 year of experienced with MERN technologies MongoDB, Node.js, REST APIs, React.js, Express, JSON etc.',
            'Proficient in translating wireframes and PSD designs into functional web applications, with expertise in HTML5, ReactJS, and CSS.',
            'Should know UI libraries like Bootstrap, Tailwind css',
            'Address and improve any technical issues.',
            'Proficient in React.js & Node.js.',
            'Experience in deploying on AWS will be an added advantage.',
            'Experience in developing with MongoDB. Knowledge of other Databases like PostgreSql will be an added advantage.',
            'Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.',
            'Implementing server-side code and designing the data architecture using modern web frameworks.',
            'Exploring alternatives and suggesting solutions in open source stack.',
            'Experience with any DevOps tools like JIRA, BitBucket, Docker, Kubernetes will be plus.'
        ],
    },
];

const JobOpenings = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <Container maxWidth="lg" sx={{py: 8}}>
            <Typography variant="h4" align="center" fontWeight={700} mb={6} sx={{color: '#0A014F'}}>
                JOB OPENINGS
            </Typography>

            <Grid container spacing={4}>
                {jobList?.map((job, idx) => (
                    <Grid item size={{xs: 12}} key={idx} onClick={() => handleToggle(idx)}>
                        <Paper
                            elevation={1}
                            sx={{
                                p: '32px',
                                borderRadius: '20px',
                                boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, flex: 1}}>
                                    <Image src='/images/careers/current_opening.png' alt={job.title} width={80}
                                           height={98} style={{marginRight: '17px'}}/>
                                    <Typography variant="h5"
                                                sx={{fontSize: '28px', fontWeight: 600, lineHeight: '42px'}}>
                                        {job.title}
                                    </Typography>
                                </Box>

                                <Box sx={{mt: {xs: 2, md: 0}}}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#f89100',
                                            color: '#fff',
                                            textTransform: 'none',
                                            borderRadius: '15px',
                                            p: '14px 28px',
                                            boxShadow: 'none',
                                            fontSize: '18px'
                                        }}
                                        endIcon={<span>↗</span>}
                                    >
                                        Apply Now
                                    </Button>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    mt: {xs: 2, md: 0},
                                    flex: 2,
                                }}
                            >
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <Image src="/images/careers/experience.png" width={145} height={130} alt="exp"/>
                                    <Box>
                                        <Typography variant="body2" sx={{
                                            fontSize: '22px',
                                            fontWeight: '500',
                                            lineHeight: '30px',
                                            color: '#797979'
                                        }}>Experience:</Typography>
                                        <Typography sx={{
                                            fontSize: '22px',
                                            fontWeight: '500',
                                            lineHeight: '30px',
                                            color: '#000'
                                        }}>{job.experience}</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <Image src="/images/careers/5_days_small.png" width={145} height={130} alt="days"/>
                                    <Box>
                                        <Typography variant="body2" sx={{
                                            fontSize: '22px',
                                            fontWeight: '500',
                                            lineHeight: '30px',
                                            color: '#797979'
                                        }}>Working Days:</Typography>
                                        <Typography sx={{
                                            fontSize: '22px',
                                            fontWeight: '500',
                                            lineHeight: '30px',
                                            color: '#000'
                                        }}>{job.days}</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <Image src="/images/careers/Qualification.png" width={145} height={130}
                                           alt="qualification"/>
                                    <Box>
                                        <Typography variant="body2" sx={{
                                            fontSize: '22px',
                                            fontWeight: '500',
                                            lineHeight: '30px',
                                            color: '#797979'
                                        }}>Qualification:</Typography>
                                        <Typography sx={{
                                            fontSize: '22px',
                                            fontWeight: '500',
                                            lineHeight: '30px',
                                            color: '#000'
                                        }}>{job.qualification}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Collapse in={expandedIndex === idx}>
                                <Box sx={{pt: 3, borderTop: '1px solid #eaeaea'}}>
                                    <Typography variant="h3" sx={{
                                        fontSize: '22px',
                                        fontWeight: '600',
                                        lineHeight: '23px',
                                        mb: '11px',
                                        color: '#3E3E3E'
                                    }}>
                                        Role and Responsibilities:
                                    </Typography>
                                    <ul style={{paddingLeft: '20px', marginBottom: 0}}>
                                        {job.responsibilities?.map((item, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    fontSize: '18px',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    marginTop: '10px',
                                                    paddingLeft: '10px',
                                                    color: '#3E3E3E'
                                                }}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            </Collapse>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default JobOpenings;
