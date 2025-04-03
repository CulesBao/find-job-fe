<<<<<<< HEAD
import SocialMedia from "@/components/ui/SocialMedia";
import { Button, TextField } from "@mui/material";

function Error() {
  return (
    <div className="flex justify-center items-center h-screen bg-white overflow-hidden">
      <div className="flex flex-col items-start space-y-6 max-w-lg">
        <header>
          <h1 className="text-[#18191C] text-4xl font-medium leading-[56px] font-inter">
            Our website is under construction
          </h1>
          <p className="text-[#474C54] text-lg font-normal leading-[28px] font-inter mt-4">
            We are working hard to bring you a new experience. <br /> Please
            check back later.
          </p>
        </header>
        <div className="flex items-center space-x-4 w-full gap-3">
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            className="flex-1"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-blue-500 text-white text-lg px-6 py-6 min-h-[56px] flex justify-center items-center gap-2 "
          >
            Subscribe →
          </Button>
        </div>
      </div>
      <div className="ml-16">
        <img
          src="src/assets/Screenshot 2025-04-03 070838.png"
          alt="Under Construction"
          className="max-w-md"
        />
      </div>
      <div className="absolute top-4 left-8 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g clipPath="url(#clip0_3592_185)">
            <path
              d="M33.7512 11.25H6.25122C5.56086 11.25 5.00122 11.8096 5.00122 12.5V32.5C5.00122 33.1904 5.56086 33.75 6.25122 33.75H33.7512C34.4416 33.75 35.0012 33.1904 35.0012 32.5V12.5C35.0012 11.8096 34.4416 11.25 33.7512 11.25Z"
              stroke="#0A65CC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25"
              stroke="#0A65CC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3592_185">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-lg font-semibold">MyJob</span>
      </div>
      <div className="">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Error;
=======
import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import errorImage from '../assets/error-robot.png'; // Đảm bảo đường dẫn ảnh chính xác
import Footer from '../components/layout/Footer'; // Đảm bảo Footer được import đúng cách

const ErrorPage = () => {
  return (
    <>
      {/* Light mode cho ErrorPage */}
      <Box sx={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh' }}>
        {/* Nội dung trang lỗi */}
        <Container maxWidth="md">
          <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            textAlign="center" 
            py={10}
          >
            <img 
              src={errorImage} 
              alt="404 Error" 
              style={{ 
                maxWidth: '300px', 
                width: '100%', 
                marginBottom: '2rem' 
              }} 
            />
            
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: '#000000' }}>
              Oops! Page not found
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mb: 4, color: '#000000' }}>
              Something went wrong. It looks like the link is broken or the page is removed.
            </Typography>

            <Box display="flex" gap={2}>
              <Button
                component="a"
                href="/"
                variant="contained"
                color="primary"
                sx={{ px: 4, py: 1.5 }}
              >
                Home Page
              </Button>
              
              <Button
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                variant="outlined"
                color="primary"
                sx={{ px: 4, py: 1.5 }}
              >
                Go Back
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer giữ nguyên chế độ dark mode */}
      <Box sx={{ backgroundColor: '#121212', color: '#ffffff' }}>
        <Footer />
      </Box>
    </>
  );
};

export default ErrorPage;
>>>>>>> 4062567237d66206f088950e002a4279c96da5eb
