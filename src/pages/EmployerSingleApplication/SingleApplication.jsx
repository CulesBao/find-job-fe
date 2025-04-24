import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
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
  MenuItem,
  FormControl,
  Select,
  Tooltip,
} from "@mui/material";
import { Email, Download, Close } from "@mui/icons-material";
import { forwardRef, useState } from "react";
import CandidateSocialLink from "../DetailCandidate/Components/CandidateSocialLink";
import JobProcess from "@/constants/JobProccess";
import { MapPin, PhoneCall } from "lucide-react";

// eslint-disable-next-line react/display-name
const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function SingleApplication({ open, onClose, data, role }) {
  const { candidate_profile: profile, cover_letter, cv_url } = data;
  const isDisabled = role !== "EMPLOYER";

const [selectedProcess, setSelectedProcess] = useState();
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx
// TEST TRONG TESTLAYOUT.jsx

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      scroll="body"
      PaperProps={{ sx: { borderRadius: 3 } }}
    >
      <DialogTitle
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f5f5f5"}}
      >
        {profile.first_name} {profile.last_name}{"'s"} Application
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 3 }}>
        <Box>
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
                sx={{ width: 100, height: 100 }}
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
                {role === "EMPLOYER" && (
                <Button
                  variant="outlined"
                  startIcon={<Email />}
                  sx={{ borderColor: "#0a65cc", color: "#0a65cc" }}
                >
                  Send Mail
                </Button>)}
                <Tooltip title={isDisabled ? "Only Employer can change this" : ""} placement="top">
                  <FormControl size="small" sx={{ minWidth: 200 }}>
                    <Select
                      value={selectedProcess}
                      onChange={(e) => setSelectedProcess(e.target.value)}
                      displayEmpty
                      IconComponent={() => null}
                      renderValue={(selected) => {
                        const process = JobProcess[selected] || { name: "Select Process", color: "#ccc" };
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              bgcolor: process.color,
                              color: "#fff",
                              fontWeight: 500,
                              px: 2,
                              py: 1,
                              borderRadius: 2,
                            }}
                          >
                            {process.name}
                          </Box>
                        );
                      }}
                      disabled={isDisabled}
                      sx={{
                        pointerEvents: isDisabled ? "none" : "auto",
                        opacity: 1, 
                        "& .MuiSelect-select": {
                          padding: 0,
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        bgcolor: "transparent",
                      }}
                    >
                      {Object.entries(JobProcess).map(([key, { name, color }]) => (
                        <MenuItem key={key} value={key}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                bgcolor: color,
                              }}
                            />
                            <Typography>{name}</Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Tooltip>
              </Box>
          </Box>

          {/* Content */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {/* Left Column */}
            <Box sx={{ flex: 2 }}>
              <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" fontWeight="medium" mb={2}>
                  Biography
                </Typography>
                <Typography variant="body1" textAlign="justify" color="text.secondary">
                  {profile.bio}
                </Typography>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="medium" mb={2}>
                  Cover Letter
                </Typography>
                <Typography variant="body1" textAlign="justify" color="text.secondary">
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
                      <MapPin className="w-10 h-10 text-orange-500 mx-auto"/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Province"
                      secondary={profile.province.full_name_en}
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <MapPin className="w-10 h-10 text-orange-500 mx-auto"/>
                    </ListItemIcon>
                    <ListItemText
                      primary="District"
                      secondary={profile.district.full_name_en}
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <PhoneCall className="w-9 h-9 text-emerald-500 mx-auto"/>
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

              <Paper>
                <CandidateSocialLink socialLinks={profile.social_links} />
              </Paper>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
