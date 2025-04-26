import { Avatar, Box, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmployerShortCard({ employer }) {
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
          transform: "translateY(-2px)",
        },
        p: 2,
      }}
    >
      {/* Clickable Section */}
      <Link
        to={`/employer/details/${employer.id}`}
        style={{ display: "flex", textDecoration: "none", color: "inherit" }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Avatar */}
          <Avatar
            src={employer.logoUrl}
            alt={`${employer.name} logo`}
            sx={{
              width: 64,
              height: 64,
              bgcolor: "primary.main",
              objectFit: "cover",
            }}
          />

          {/* Employer Name and Location */}
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color="text.primary"
              gutterBottom
            >
              {employer.name}
            </Typography>

            {/* Location */}
            {employer.location && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <LocationOnOutlinedIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {employer.location}
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>
      </Link>

      {/* Job Count */}
      <Box sx={{ position: "absolute", bottom: 16, left: 32, right: 32 }}>
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Briefcase size={16} color="#B0BEC5" />
          <Typography variant="caption" color="text.secondary">
            {employer.jobCount}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
