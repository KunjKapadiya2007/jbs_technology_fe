'use client';
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';

const comforts = [
  'Spacious Work Zone',
  'Modern Equipped & Fertile Interiors',
  'Cafeteria Zone',
  'Conference Room',
  'Highly Secure CCTV Surveillance',
  'Collaborative Sessions Space',
];

const OfficeComfortSection = () => {
  return (
    <Box py={{ xs: 6, md: 12 }} px={2} sx={{ backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item size={{xs:12, md:6}}>
            <Image
              src="/images/infrastructure/Our_Office_Space.webp"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Grid>

          {/* Text Content */}
          <Grid item size={{xs:12, md:6}}>
            <Typography variant="h2" sx={{ fontSize: '50px', lineHeight: '60px', pb: '38px', fontWeight: '600' }}>
              Our Office Space And Comforts!
            </Typography>

            <List>
              {comforts?.map((text, index) => (
                <ListItem key={index} disableGutters sx={{p:0}} >
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#ffa500' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: '18px',
                      fontWeight: 500,
                      color: '#19082d',
                      lineHeight:'29px'
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OfficeComfortSection;
