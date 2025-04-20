import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography, useTheme } from "@mui/material";
import { Phone } from "@mui/icons-material";

const menus = [
  { label: "Dashboard", path: `/dashboard` },
  { label: "Find Candidate", path: `/candidate` },
  { label: "Find Employer", path: `/employer` },
  { label: "Find Job", path: `/job` },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const currentMenu = menus.find((menu) => location.pathname.startsWith(menu.path)) || menus[0];

  const handleMenuClick = (menu) => {
    navigate(menu.path);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "#333333",
        borderBottom: "1px solid #e0e0e0",
        px: 3,
        height: 44,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 44,
          height: 44,
          px: 2,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            flexGrow: 1,
            marginLeft: 10,
          }}
        >
          {menus.map((menu) => (
            <Typography
            key={menu.label}
            variant="caption"
            onClick={() => handleMenuClick(menu)}
            sx={{
              cursor: "pointer",
              position: "relative",
              color:
                currentMenu.label === menu.label
                  ? theme.palette.primary.main
                  : "#666",
              fontWeight: currentMenu.label === menu.label ? 600 : 400,
              transition: "color 0.2s ease-in-out",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -4,
                left: 0,
                width: "100%",
                height: 2,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1,
                transform: currentMenu.label === menu.label
                  ? "scaleX(1)"
                  : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover::after": {
                transform: "scaleX(1)",
              },
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            {menu.label}
          </Typography>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            marginRight: 10,
          }}
        >
          <Phone fontSize="small" sx={{ color: theme.palette.primary.main }} />
          <Typography variant="caption" sx={{ fontWeight: 500 }}>
            +84-795-629-257
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
