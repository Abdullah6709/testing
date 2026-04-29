import React from 'react';
import { Box, Grid, Typography, Link, Button, TextField } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import mlogo from "../assets/newlogo.jpeg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1a1a2e',
        py: 8,
        px: { xs: 3, sm: 5, md: 10 },
        color: 'white',
        boxShadow: '0px -5px 25px rgba(0,0,0,0.4)',
        backgroundImage: 'linear-gradient(to bottom, #1a1a2e, #16213e)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        justifyContent: 'space-around'
      }}
    >
      <Grid container spacing={6} alignItems="flex-start">
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Logo and Text Container */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <img 
                src={mlogo} 
                alt="Tvesha Groups Logo" 
                style={{ 
                  height: '100px', 
                  width: '150px',
                  objectFit: 'contain', // Ensures logo maintains aspect ratio
                  // Remove the filter that was making it invisible
                  // filter: 'brightness(0) invert(1)', 
                }} 
              />
              {/* <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#5e17eb',
                  display: { xs: 'none', sm: 'inline-block' } // Hide on mobile if needed
                }}
              >
                Tvesha Groups
              </Typography> */}
            </Box>

            <Typography variant="body1" sx={{ 
              color: 'rgba(255,255,255,0.7)', 
              mb: 3,
              lineHeight: 1.6
            }}>
              Empowering industry through cutting-edge innovation and sustainable technology solutions.
            </Typography>
          </Box>
        </Grid>

        {/* Center Column: Subscribe - Now properly aligned */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              gap: 2,
            }}
          >
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              mb: 1,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 40,
                height: 2,
                background: 'linear-gradient(90deg, #13c46e, #00d4ff)',
                borderRadius: 2
              }
            }}>
              Support
            </Typography>
            <Typography
              variant="body2"
              sx={{ 
                color: 'rgba(255,255,255,0.6)', 
                mb: 2
              }}
            >
              Get the latest news and updates delivered to your inbox
            </Typography>

            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                maxWidth: 350,
                gap: 1.5,
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Your email"
                type="email"
                required
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#13c46e',
                    },
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 1,
                    color: 'white',
                  },
                  '& .MuiInputBase-input': {
                    py: 1,
                    fontSize: '0.9rem',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: '#5817eb',
                  color: 'white',
                  borderRadius: 1,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    background: '#13c46e',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Column: Contact Info */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              gap: 2.5,
            }}
          >
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              mb: 1,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: 40,
                height: 2,
                borderRadius: 2
              }
            }}>
              Address
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <LocationOn sx={{ color: '#13c46e', fontSize: '1.2rem', mt: 0.5 }} />
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Plot+No-A-7+Phase1+GNFCTWP+GiDC+Bharuch+Gujarat-392015"
                target="_blank"
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#13c46e',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                Plot No.-A-7, Phase 1, GNFCTWP,<br />
                GiDC, Bharuch, Gujarat - 392015
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Email sx={{ color: '#13c46e', fontSize: '1.2rem' }} />
              <Link
                href="mailto:info@tveshagroup.com"
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#13c46e',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                info@tveshagroup.com
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Phone sx={{ color: '#13c46e', fontSize: '1.2rem' }} />
              <Link
                href="tel:+919876543210"
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#13c46e',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                +91 98765 43210
              </Link>
            </Box>
            
            <Button
              variant="outlined"
              sx={{
                mt: 'auto',
                alignSelf: { xs: 'center', md: 'flex-start' },
                color: '#5817eb',
                borderColor: '#5817eb',
                borderRadius: 1,
                px: 3,
                py: 1,
                fontWeight: 500,
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(19, 196, 110, 0.1)',
                  borderColor: '#13c46e',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 10px rgba(19, 196, 110, 0.2)',
                },
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </Grid>
      </Grid>
      
      {/* Copyright - moved outside the main grid */}
      <Typography variant="caption" display="block" sx={{ 
        mt: 6, 
        textAlign: 'center',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.75rem'
      }}>
        © {new Date().getFullYear()} Tvesha Groups. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;