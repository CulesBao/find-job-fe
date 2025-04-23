import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";

const FindEmployer = ({ job }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 4,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "grey.100",
        bgcolor: "background.paper",
      }}
    >
      <Stack direction="row" spacing={2.5} alignItems="center">
        <Avatar
          sx={{
            bgcolor: "#ea4c89",
            width: 56,
            height: 56,
            borderRadius: 1,
            overflow: "hidden",
            "& img": {
              objectFit: "cover",
              width: "100%",
              height: "100%",
            },
          }}
          src={job.logoUrl}
          alt={`${job.name} logo`}
        />

        <Box>
          <Typography
            variant="h6"
            fontWeight={500}
            color="text.primary"
            gutterBottom
          >
            {job.name}
          </Typography>

          <Stack direction="row" spacing={2.5}>
            <Stack direction="row" spacing={0.75} alignItems="center">
              <LocationOnOutlinedIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {job.location}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.75} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {job.jobCount} jobs available
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Button
        variant="outlined"
        endIcon={<ArrowForwardIcon />}
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          bgcolor: "#fff",
          color: "primary.main",
          border: "1px solid",
          borderColor: "primary.main",
          "&:hover": {
            bgcolor: "primary.50",
            borderColor: "primary.dark",
          },
          px: 3,
          py: 1.5,
          borderRadius: 1,
          textTransform: "none",
        }}
      >
        Visit website
      </Button>
    </Card>
  );
};

export default FindEmployer;
