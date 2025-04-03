import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import errorImage from "../assets/error-robot.png"; // Đảm bảo đường dẫn ảnh chính xác
import Footer from "../components/layout/Footer"; // Đảm bảo Footer được import đúng cách

const ErrorPage = () => {
  return (
    <>
      {/* Light mode cho ErrorPage */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          color: "#000000",
          minHeight: "100vh",
        }}
      >
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
                maxWidth: "300px",
                width: "100%",
                marginBottom: "2rem",
              }}
            />

            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2, color: "#000000" }}
            >
              Oops! Page not found
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 4, color: "#000000" }}
            >
              Something went wrong. It looks like the link is broken or the page
              is removed.
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
      <Box sx={{ backgroundColor: "#121212", color: "#ffffff" }}>
        <Footer />
      </Box>
    </>
  );
};

export default ErrorPage;
