import {
  Dialog,
  DialogContent,
  Slide,
  Box,
  Avatar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  MenuItem,
  FormControl,
  Select,
  Tooltip,
} from "@mui/material";
import { Email, Download } from "@mui/icons-material";
import { forwardRef, useState } from "react";
import CandidateSocialLink from "../DetailCandidate/Components/CandidateSocialLink";
import JobProcess from "@/constants/JobProccess";
import { MapPin, PhoneCall } from "lucide-react";
import { withdrawApplication } from "@/services/applicationService";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/display-name
const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function SingleApplication({ open, onClose, data, role }) {
  const navigate = useNavigate();
  const isDisabled = role !== "EMPLOYER";
  const [selectedProcess, setSelectedProcess] = useState(data?.job_proccess);
  const handleWithdraw = async () => {
    await withdrawApplication(data?.id);
    navigate(0);
  };
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
                src={data?.candidate_profile.avatar_url}
                alt={`${data?.candidate_profile.first_name} ${data?.candidate_profile.last_name}`}
                sx={{ width: 100, height: 100 }}
              />
              <Box>
                <Typography variant="h5" fontWeight="medium">
                  {data?.candidate_profile.first_name}{" "}
                  {data?.candidate_profile.last_name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {data?.candidate_profile.education}
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
                </Button>
              )}
              {role === "CANDIDATE" && (
                <Button
                  variant="outlined"
                  color="error"
                  disabled={data?.job_proccess == "WITHDRAWN"}
                  onClick={() => handleWithdraw()}
                >
                  Withdrawn
                </Button>
              )}
              <Tooltip
                title={isDisabled ? "Only Employer can change this" : ""}
                placement="top"
              >
                <FormControl size="small" sx={{ minWidth: 200 }}>
                  <Select
                    value={selectedProcess}
                    onChange={(e) => setSelectedProcess(e.target.value)}
                    displayEmpty
                    IconComponent={() => null}
                    renderValue={(selected) => {
                      const process =
                        JobProcess[selected] || JobProcess[data?.job_proccess];
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
                    {Object.entries(JobProcess).map(
                      ([key, { name, color }]) => (
                        <MenuItem key={key} value={key}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
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
                      )
                    )}
                  </Select>
                </FormControl>
              </Tooltip>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {/* Left Column */}
            <Box sx={{ flex: 2 }}>
              <Box sx={{ mb: 4, borderBottom: "1px solid #ccc", pb: 2, pl: 3 }}>
              <h3 className="text-xl font-medium text-black mb-3">Biography:</h3>
              <Typography
                  variant="body1"
                  textAlign="justify"
                  color="text.secondary"
                >
                {data?.candidate_profile.bio}
              </Typography>
              </Box>

              <Box sx={{ borderBottom: "1px solid #ccc", pb: 2, pl: 3 }}>
              <h3 className="text-xl font-medium text-black mb-3">Cover Letter:</h3>
                <Typography
                  variant="body1"
                  textAlign="justify"
                  color="text.secondary"
                >
                  {data?.cover_letter}
                </Typography>
              </Box>

              <Box>
                <CandidateSocialLink
                  socialLinks={data?.candidate_profile.social_links}
                />
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  p: 3,
                  mb: 4,
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  boxShadow: 'none',
                }}
              >
                <h3 className="text-xl font-medium text-black mb-3">Personal Details:</h3>
                <List disablePadding>
                  <ListItem
                    disableGutters
                    sx={{
                      display: 'flex',
                      alignItems: 'center', 
                      gap: 2,
                      mb: 1, 
                    }}
                  >
                    <MapPin className="w-6 h-6 text-orange-500" />
                    <ListItemText
                      primary="Province"
                      secondary={data?.candidate_profile.province.full_name_en}
                      sx={{ margin: 0 }}
                    />
                  </ListItem>
                  <ListItem
                    disableGutters
                    sx={{
                      display: 'flex',
                      alignItems: 'center', 
                      gap: 2,
                      mb: 1, 
                    }}
                  >
                    <MapPin className="w-6 h-6 text-orange-500" />
                    <ListItemText
                      primary="District"
                      secondary={data?.candidate_profile.district.full_name_en}
                      sx={{ margin: 0 }} 
                    />
                  </ListItem>
                  <ListItem
                    disableGutters
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <PhoneCall className="w-6 h-6 text-emerald-500" />
                    <ListItemText
                      primary="Phone Number"
                      secondary={data?.candidate_profile.phone_number}
                      sx={{ margin: 0 }} 
                    />
                  </ListItem>
                </List>
              </Box>
                <Box
                  sx={{
                    p: 3,
                    mb: 4,
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    boxShadow: "none",
                  }}
                >
                <h3 className="text-xl font-medium text-black mb-6">Download my Resume:</h3>
                <MuiLink
                  href={data?.cv_url}
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
                    Download Resume
                  </Typography>
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
