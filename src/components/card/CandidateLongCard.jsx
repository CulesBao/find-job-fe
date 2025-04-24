import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WcIcon from "@mui/icons-material/Wc";
import { Link } from "react-router-dom";
import { formatEducation } from "@/constants/Education";

const CandidateLongCard = ({ candidate }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        mb: 2,
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Clickable Left Section */}
      <Link
        to={`/candidate/details/${candidate.id}`}
        style={{ display: "flex", flex: 1, textDecoration: "none", color: "inherit" }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          {/* Avatar */}
          <Avatar
            sx={{
              bgcolor: "#1976d2",
              width: 64,
              height: 64,
              overflow: "hidden",
              "& img": {
                objectFit: "cover",
                width: "100%",
                height: "100%",
              },
            }}
            src={candidate.avatar_url}
            alt={`${candidate.first_name} ${candidate.last_name} avatar`}
          />

          {/* Candidate Info */}
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color="text.primary"
              gutterBottom
            >
              {candidate.first_name} {candidate.last_name}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              {/* Location */}
              <Stack direction="row" spacing={0.75} alignItems="center">
                <LocationOnOutlinedIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {candidate.location}
                </Typography>
              </Stack>

              {/* Education */}
              <Stack direction="row" spacing={0.75} alignItems="center">
                <SchoolOutlinedIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {formatEducation(candidate.education)}
                </Typography>
              </Stack>

              {/* Gender */}
              <Stack direction="row" spacing={0.75} alignItems="center">
                <WcIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {candidate.gender ? "Male" : "Female"}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Link>

      {/* Right Section */}
      <Box>
        <Button
          component={Link}
          to={`/candidate/details/${candidate.id}`}
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: "none" }}
        >
          View Profile
        </Button>
      </Box>
    </Paper>
  );
};

export default CandidateLongCard;
