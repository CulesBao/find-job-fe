import { Box, Typography, Paper, Avatar, Chip, Button } from "@mui/material";
import {
  LocationOn,
  AttachMoney,
  AccessTime,
  Business,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getApplicationById } from "@/services/applicationService";
import SingleApplication from "@/pages/EmployerSingleApplication/SingleApplication";
import { useAuth } from "@/hooks/useAuth";

function ApplicationLongCard({ application }) {
  const [open, setOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState();
  const { user } = useAuth();
  const handleViewApplication = async (applicationId) => {
    const response = await getApplicationById(applicationId);
    setCoverLetter(response.data);
    setOpen(true);
  };
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
      <Box display="flex" alignItems="center" gap={2} flex={1}>
        <Avatar
          src={application?.logoUrl}
          alt={application?.employerName}
          sx={{ width: 64, height: 64 }}
          component={Link}
          to={`/../../job/details/${application?.jobId}`}
        />

        <Box display="flex" flexDirection="column" gap={1}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600 }}
            component={Link}
            to={`/../../job/details/${application?.jobId}`}
            color="inherit"
            style={{ textDecoration: "none" }}
          >
            {application?.jobTitle}
          </Typography>

          <Box display="flex" alignItems="center" gap={0.5}>
            <Business fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {application?.employerName}
            </Typography>
          </Box>

          <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <AttachMoney fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {application?.salaryRange}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={0.5}>
              <LocationOn fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {application?.location}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={0.5}>
              <AccessTime fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {application?.dayLeft}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
        <Chip
          label={application?.jobProccess?.name || "Unknown"}
          sx={{
            bgcolor: application?.jobProccess?.color || "grey.300",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "0.875rem",
          }}
        />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: "none" }}
          onClick={() => {
            handleViewApplication(application.applicationId);
          }}
        >
          View Detail
        </Button>
        <SingleApplication
          open={open}
          onClose={() => setOpen(false)}
          role={user?.role}
          data={coverLetter}
        />
      </Box>
    </Paper>
  );
}

export default ApplicationLongCard;
