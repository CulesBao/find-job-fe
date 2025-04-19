import { AppBar, Toolbar, Box, IconButton, Avatar } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import Logo from "../layout/Logo";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const { user } = useAuth();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#333",
        boxShadow: 0,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          height: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxHeight: "100%",
            marginLeft: 10,
          }}
        >
          <Logo style={{ maxHeight: 50 }} />
        </Box>

        <Box sx={{ display: "flex", gap: 2, marginRight: 5 }}>
          <IconButton
            sx={{
              color: "#333",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Notifications fontSize="medium" />
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 8,
                height: 8,
                backgroundColor: "#f44336",
                borderRadius: "50%",
              }}
            />
          </IconButton>

          <IconButton
            sx={{ color: "#E4405F", display: "flex", alignItems: "center" }}
          >
            <Avatar
              src={
                user.role == "CANDIDATE"
                  ? user.candidate_profile.avatar_url
                  : user.role == "EMPLOYER"
                  ? user.employer_profile.logo_url
                  : null
              }
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
