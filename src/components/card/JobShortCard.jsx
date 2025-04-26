import { Box, Typography, Paper, Avatar } from "@mui/material";
import { AccessTime, AttachMoney, Business } from "@mui/icons-material";
import { Link } from "react-router-dom";

function JobShortCard({ job }) {
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
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Link to={`details/${job?.id}`}>
        <Avatar
          src={job?.logoUrl}
          alt={job?.employerName}
          sx={{ width: 64, height: 64, mr: 2 }}
        />
      </Link>

      <Box flex={1} display="flex" flexDirection="column" gap={1}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600 }}
          component={Link}
          to={`details/${job?.id}`}
          color="inherit"
          style={{ textDecoration: "none" }}
        >
          {job?.jobTitle}
        </Typography>

        <Box display="flex" alignItems="center" gap={0.5}>
          <Business fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {job?.employerName}
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <AttachMoney fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job?.salaryRange}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            <AccessTime fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {job?.dayLeft}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default JobShortCard;
