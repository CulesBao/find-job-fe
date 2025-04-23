import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Language,
  Download,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

// Mock data in one file:
const mockData = {
  profile: {
    name: "Esther Howard",
    role: "Website Designer (UI/UX)",
  },
  biography: `I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma.`,
  coverLetter: `Dear Sir, I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice posted on JobZone, IPFW's job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.`,
  resumeFile: {
    icon: Download,
    title: "Esther Howard",
    subtitle: "PDF",
    // Updated URL to point to the actual PDF
    url: "/mnt/data/Esther-Howard-Resume.pdf",
  },
  personalDetails: [
    { icon: Language, label: "Date of Birth", value: "14 June, 2021" },
    { icon: LocationOn, label: "Nationality", value: "Bangladesh" },
    { icon: Language, label: "Marital Status", value: "Single" },
    { icon: Language, label: "Gender", value: "Male" },
    { icon: Language, label: "Experience", value: "7 Years" },
    { icon: Language, label: "Education", value: "Master Degree" },
  ],
  contactInfo: [
    { icon: Language, label: "Website", value: "www.estherhoward.com" },
    {
      icon: LocationOn,
      label: "Location",
      value: "Beverly Hills, California 90202",
    },
    { icon: Phone, label: "Phone", value: "+1-202-555-0141" },
    { icon: Email, label: "Email Address", value: "esther.howard@gmail.com" },
  ],
  socialLinks: [LinkedIn, Facebook, Twitter, Instagram],
};

export default function SingleApplication() {
  const {
    profile,
    biography,
    coverLetter,
    resumeFile,
    personalDetails,
    contactInfo,
    socialLinks,
  } = mockData;

  return (
    <Box
      className="main-container"
      sx={{
        width: 1024,
        height: 1220,
        bgcolor: "#fff",
        borderRadius: 2,
        mx: "auto",
        position: "relative",
        p: 2,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 928,
          position: "absolute",
          top: 24,
          left: 48,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: "#767f8c" }}>
            {profile.name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h5" fontWeight="medium">
              {profile.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {profile.role}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<Email />}
            sx={{ minWidth: 160, borderColor: "#0a65cc", color: "#0a65cc" }}
          >
            Send Mail
          </Button>
          <Button
            variant="contained"
            startIcon={<Phone />}
            sx={{
              minWidth: 209,
              bgcolor: "#0a65cc",
              "&:hover": { bgcolor: "#094ea0" },
            }}
          >
            Hire Candidates
          </Button>
        </Box>
      </Box>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          width: 920,
          gap: 9,
          position: "absolute",
          top: 160,
          left: 48,
        }}
      >
        {/* Left Column */}
        <Box
          sx={{ width: 536, display: "flex", flexDirection: "column", gap: 4 }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="medium">
              BIOGRAPHY
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              {biography}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" fontWeight="medium">
              COVER LETTER
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              {coverLetter}
            </Typography>
          </Paper>
          <Box>
            <Typography variant="subtitle1" mb={1}>
              Follow me Social Media
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <MuiLink
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#0a66c2", "&:hover": { color: "#004182" } }}
              >
                <LinkedIn fontSize="large" />
              </MuiLink>
              <MuiLink
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#1877f2", "&:hover": { color: "#0d47a1" } }}
              >
                <Facebook fontSize="large" />
              </MuiLink>
              <MuiLink
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#1da1f2", "&:hover": { color: "#0d8ecf" } }}
              >
                <Twitter fontSize="large" />
              </MuiLink>
              <MuiLink
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#e4405f", "&:hover": { color: "#b9314f" } }}
              >
                <Instagram fontSize="large" />
              </MuiLink>
            </Box>
          </Box>
        </Box>

        {/* Right Column */}
        <Box
          sx={{ width: 312, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Paper
            sx={{
              p: 3,
              borderColor: "rgba(206,224,245,0.7)",
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
          >
            <Typography variant="h6" mb={2}>
              Personal Details
            </Typography>
            <List disablePadding>
              {personalDetails.map((item) => (
                <ListItem key={item.label} disableGutters>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label.toUpperCase()}
                    secondary={item.value}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper
            sx={{
              p: 3,
              borderColor: "rgba(206,224,245,0.7)",
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
          >
            <Typography variant="h6" mb={2}>
              Download My Resume
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MuiLink
                href={resumeFile.url}
                download
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
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
                  <resumeFile.icon />
                </Box>
                <Box>
                  <Typography variant="body2">{resumeFile.title}</Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {resumeFile.subtitle}
                  </Typography>
                </Box>
              </MuiLink>

              <MuiLink href={resumeFile.url} download>
                <Button
                  variant="outlined"
                  sx={{ minWidth: 48, p: 1, bgcolor: "#e7f0fa" }}
                >
                  <resumeFile.icon />
                </Button>
              </MuiLink>
            </Box>
          </Paper>

          <Paper
            sx={{
              p: 3,
              borderColor: "rgba(206,224,245,0.7)",
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
          >
            <Typography variant="h6" mb={2}>
              Contact Information
            </Typography>
            <List disablePadding>
              {contactInfo.map((item) => (
                <React.Fragment key={item.label}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label.toUpperCase()}
                      secondary={item.value}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
