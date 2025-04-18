import Logo from "@/components/layout/Logo";
import CheckIcon from "@mui/icons-material/Check";
import { Button, Paper, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const SaveProfileCongrats = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-primary-50">
      <div className="absolute top-0 left-[34%] w-full h-full bg-primary-50">
        <Logo />
      </div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        overflow={"hidden"}
        p={2}
      >
        <Stack alignItems="center" justifyContent="center" spacing={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "primary.50",
              borderRadius: "100px",
              p: "39px",
            }}
          >
            <CheckIcon color="primary" sx={{ width: 48, height: 48 }} />
          </Paper>

          <Stack alignItems="center" justifyContent="center" spacing={2}>
            <Typography
              variant="h4"
              color="text.primary"
              align="center"
              sx={{ maxWidth: "1320px" }}
            >
              🎉 Congratulations, Your profile is 100% complete!
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ maxWidth: "536px" }}
            >
              Your profile is all set and ready to go! You can now explore
              everything we have to offer, enjoy a seamless experience, and make
              the most of all the features available to you. The possibilities
              are endless!
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/dashboard">
              <Button
                variant="text"
                sx={{
                  backgroundColor: "primary.50",
                  color: "primary.main",
                  px: 4,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "primary.100",
                  },
                }}
              >
                View Dashboard
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default SaveProfileCongrats;
