import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Avatar, Box, Paper, Stack, Typography, Button } from "@mui/material";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const EmployerLongCard = ({ employer }) => {
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
      <Link
        to={`/employer/details/${employer.id}`}
        style={{
          display: "flex",
          flex: 1,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          {/* Avatar */}
          <Avatar
            sx={{
              bgcolor: "#ea4c89",
              width: 64,
              height: 64,
              overflow: "hidden",
              "& img": {
                objectFit: "cover",
                width: "100%",
                height: "100%",
              },
            }}
            src={employer.logoUrl}
            alt={`${employer.name} logo`}
          />

          {/* Employer Info */}
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color="text.primary"
              gutterBottom
            >
              {employer.name}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              {/* Location */}
              <Stack direction="row" spacing={0.75} alignItems="center">
                <LocationOnOutlinedIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {employer.location}
                </Typography>
              </Stack>

              {/* Job Count */}
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Briefcase size={16} color="#B0BEC5" />
                <Typography variant="body2" color="text.secondary">
                  {employer.jobCount}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Link>

      <Box>
        <Button
          variant="contained"
          component={Link}
          to={`/employer/details/${employer.id}`}
          color="primary"
          size="large"
          sx={{ textTransform: "none" }}
        >
          Visit Profile
        </Button>
      </Box>
    </Paper>
  );
};

export default EmployerLongCard;
