import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", py: 4 }}>
      <Container>
        <Grid container spacing={3}>
          {/* Cột 1: Thông tin liên hệ */}
          <Grid item xs={12} md={3} sx={{ pr: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "18px", mb: 2 }}
            >
              MyJob
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "14px", mb: 1 }}>
              Call now: <strong>(319) 555-0115</strong>
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              87/46 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang, Viet
              Nam
            </Typography>
          </Grid>

          {/* Cột 2: Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px", mb: 2 }}
            >
              Quick Link
            </Typography>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              About
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Contact
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Pricing
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Blog
            </a>
          </Grid>

          {/* Cột 3: Candidate */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px", mb: 2 }}
            >
              Candidate
            </Typography>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Browse Jobs
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Browse Employers
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Candidate Dashboard
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Saved Jobs
            </a>
          </Grid>

          {/* Cột 4: Employers */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px", mb: 2 }}
            >
              Employers
            </Typography>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Post a Job
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Browse Candidates
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Employers Dashboard
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Applications
            </a>
          </Grid>

          {/* Cột 5: Support */}
          <Grid item xs={12} md={2} sx={{ pl: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px", mb: 2 }}
            >
              Support
            </Typography>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              FAQs
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Terms & Conditions
            </a>
          </Grid>
        </Grid>

        {/* Dòng dưới cùng: Bản quyền và mạng xã hội */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 2 }}>
            &copy; 2024 MyJob - Job Portal. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
              aria-label="YouTube"
            >
              <YouTube />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
