import { Avatar, Box, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WcIcon from "@mui/icons-material/Wc";
import { Link } from "react-router-dom";
import { formatEducation } from "@/constants/Education";

export default function CandidateShortCard({ candidate }) {
  return (
    <Box
      sx={{
        minWidth: 300,
        minHeight: 150,
        position: "relative",
        bgcolor: "background.paper",
        borderRadius: 3,
        outline: "1px solid",
        outlineColor: "grey.200",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)"},
        p: 2,
      }}
    >
      {/* Clickable Section */}
      <Link
        to={`/candidate/details/${candidate.id}`}
        style={{ display: "flex", textDecoration: "none", color: "inherit" }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Avatar */}
          <Avatar
            src={candidate.avatar_url}
            alt={`${candidate.first_name} ${candidate.last_name} avatar`}
            sx={{
              width: 64,
              height: 64,
              bgcolor: "primary.main",
              objectFit: "cover",
            }}
          />

          {/* Candidate Name and Location */}
          <Box>
            <Typography variant="h6" fontWeight={600} color="text.primary" gutterBottom>
              {candidate.first_name} {candidate.last_name}
            </Typography>

            {/* Location */}
            {candidate.location && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <LocationOnOutlinedIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {candidate.location}
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>
      </Link>

      {/* Candidate Education and Gender */}
      <Box sx={{ position: "absolute", bottom: 16, left: 32, right: 32 }}>
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
          {/* Education */}
          {candidate.education && (
            <Stack direction="row" spacing={0.5} alignItems="center">
              <SchoolOutlinedIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                {formatEducation(candidate.education)}
              </Typography>
            </Stack>
          )}

          {/* Gender */}
          {candidate.gender !== undefined && (
            <Stack direction="row" spacing={0.5} alignItems="center">
              <WcIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                {candidate.gender ? "Male" : "Female"}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
