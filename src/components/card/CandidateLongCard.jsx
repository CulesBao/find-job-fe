import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WcIcon from "@mui/icons-material/Wc";
import { Link } from "react-router-dom";
import { formatEducation } from "@/constants/Education";

const CandidateLongCard = ({ candidate }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "grey.200",
        bgcolor: "background.paper",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Left Section */}
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

      {/* Right Section */}
      <Button
        component={Link}
        to={`/candidate/details/${candidate.id}`}
        variant="contained"
        color="primary"
        sx={{ textTransform: "capitalize", textDecoration: "none" }}
      >
        View Profile
      </Button>
    </Card>
  );
};

export default CandidateLongCard;
