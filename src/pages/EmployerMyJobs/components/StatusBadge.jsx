import { Box, Typography, useTheme } from "@mui/material";
import { CheckCircle, XCircle } from "lucide-react";

function StatusBadge({ status }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        width: 88,
        color: status ? theme.palette.success.main : theme.palette.error.main,
      }}
    >
      {status ? (
        <CheckCircle size={16} color={theme.palette.success.main} />
      ) : (
        <XCircle size={16} color={theme.palette.error.main} />
      )}
      <Typography variant="body2">{status ? "Active" : "Expired"}</Typography>
    </Box>
  );
}

export default StatusBadge;
