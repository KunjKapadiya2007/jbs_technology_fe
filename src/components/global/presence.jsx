import React from 'react'
import {Box, Container, Typography} from "@mui/material";

const Presence = () => {
    return (
        <Container maxWidth="lg" sx={{pb:'60px'}} >
            <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                sx={{my: 6, color: '#1c103b'}}
            >
                Our Global Presence
            </Typography>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '100%',
                    height: 'auto',
                    overflow: 'hidden',
                    p:2,
                    borderRadius:'30px',
                    boxShadow: '0 10px 50px rgb(211 217 234 / 40%)',
                }}
            >
                <img
                    src="/images/connect/Global_Presence.gif"
                    alt="Global Presence Animation"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </Box>
        </Container>
    )
}
export default Presence
