import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
} from "@mui/material";
import { Email, Phone, LocationOn, Download } from "@mui/icons-material";
import CandidateSocialLink from "../DetailCandidate/Components/CandidateSocialLink";

export default function SingleApplication({ data }) {
  const { candidate_profile: profile, cover_letter, cv_url } = data;

  return (
    <Box
      className="main-container"
      sx={{
        width: 1024,
        bgcolor: "#fff",
        borderRadius: 2,
        mx: "auto",
        p: 4,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar
            src={profile.avatar_url}
            alt={`${profile.first_name} ${profile.last_name}`}
            sx={{ width: 80, height: 80 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="medium">
              {profile.first_name} {profile.last_name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {profile.education}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<Email />}
            sx={{ borderColor: "#0a65cc", color: "#0a65cc" }}
          >
            Send Mail
          </Button>
          <Button
            variant="contained"
            startIcon={<Phone />}
            sx={{
              bgcolor: "#0a65cc",
              "&:hover": { bgcolor: "#094ea0" },
            }}
          >
            Hire Candidate
          </Button>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ display: "flex", gap: 4 }}>
        {/* Left Column */}
        <Box sx={{ flex: 2 }}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight="medium" mb={2}>
              Biography
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {profile.bio}
            </Typography>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="medium" mb={2}>
              Cover Letter
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {cover_letter}
            </Typography>
          </Paper>
        </Box>

        {/* Right Column */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight="medium" mb={2}>
              Personal Details
            </Typography>
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText
                  primary="Province"
                  secondary={profile.province.full_name_en}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText
                  primary="District"
                  secondary={profile.district.full_name_en}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText
                  primary="Phone Number"
                  secondary={profile.phone_number}
                />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight="medium" mb={2}>
              Download CV
            </Typography>
            <MuiLink
              href={cv_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "#e7f0fa",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Download />
              </Box>
              <Typography variant="body1" fontWeight="medium">
                Download CV
              </Typography>
            </MuiLink>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <CandidateSocialLink socialLinks={profile.social_links} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
