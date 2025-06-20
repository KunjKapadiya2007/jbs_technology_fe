'use client';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Container,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faqs() {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accordionData = [
        {
            id: 'panel1',
            title: 'What is the role of UI/UX design in development?',
            content: `UX (User Experience) design focuses on user interaction and satisfaction, while UI (User Interface) design deals with the visual elements and layout. Both play a crucial role in creating user-friendly and visually appealing digital products.`
        },
        {
            id: 'panel2',
            title: 'What is the purpose of prototyping in design?',
            content: `Prototyping helps designers test and validate ideas before development begins, reducing errors and aligning the product with user needs.`
        },
        {
            id: 'panel3',
            title: 'What is version control, and why is it important?',
            content: `Version control systems help developers manage changes to code, collaborate effectively, and track the evolution of a project over time.`
        },
        {
            id: 'panel4',
            title: 'What is Agile development methodology?',
            content: `Agile is a flexible and iterative approach to software development that emphasizes collaboration, customer feedback, and rapid delivery.`
        },
        {
            id: 'panel5',
            title: 'What is responsive web design and why is it important?',
            content: `Responsive design ensures that websites adapt to various screen sizes and devices, improving usability and accessibility.`
        },
        {
            id: 'panel6',
            title: 'What are the key elements of graphic design?',
            content: `Key elements include color, typography, imagery, layout, and space—each playing a vital role in visual communication.`
        },
        {
            id: 'panel7',
            title: 'How long will it take to design & develop a mobile app?',
            content: `The timeline depends on complexity, features, and platform. On average, it can take from a few weeks to several months.`
        }
    ];

    return (
        <Box sx={{ padding:"80px 0", backgroundColor: '#FCFAF6', }}>
                <Container maxWidth={"lg"}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            mb: "55px",
                            textAlign: "left",
                            color: '#19082D',
                            fontSize: { xs: '30px', md: '40px' }
                        }}
                    >
                        FAQ’s on Design & Development Services
                    </Typography>
                    {accordionData.map((item) => (
                        <Accordion
                            key={item.id}
                            expanded={expanded === item.id}
                            onChange={handleChange(item.id)}
                            sx={{
                                mb: 4,
                                boxShadow: 'none',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '30px',
                                '&:before': { display: 'none' }
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        sx={{
                                            color: expanded === item.id ? '#F89100' : '#000',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                }
                                sx={{
                                    px: 3,
                                    minHeight: 80,
                                    '& .MuiAccordionSummary-content': {
                                        my: 2
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        // borderRadius:"30px",
                                        fontSize:  '16px' ,
                                        color: expanded === item.id ? '#F89100' : '#19082D'
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    px: 3,
                                    pb: 3,
                                    color: '#6c757d',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6
                                }}
                            >
                                {item.content}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
        </Box>
    );
}

export default Faqs;
