import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const EmployerLongCard = ({ employer }) => {
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
          src={employer.logo_url}
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
                {employer.job_count} jobs available
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Button
        component={Link}
        to={`/employer/details/${employer.id}`}
        variant={"contained"}
        color={"primary"}
        sx={{ textTransform: "capitalize", textDecoration: "none" }}
      >
        Vist Profile
      </Button>
    </Card>
  );
};

export default EmployerLongCard;
