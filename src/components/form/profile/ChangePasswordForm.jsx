import { useState } from "react";
import Password from "@/components/input/Password";
import { Button, Stack } from "@mui/material";

const ChangePasswordForm = () => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  return (
    <Stack spacing={2}>
      <Password
        label="Old password"
        value={password.oldPassword}
        onChange={(e) =>
          setPassword({ ...password, oldPassword: e.target.value })
        }
        id="old-password"
      />
      <Password
        label="New password"
        value={password.newPassword}
        onChange={(e) =>
          setPassword({ ...password, newPassword: e.target.value })
        }
        id="new-password"
      />
      <Password
        label="Confirm password"
        value={password.confirmPassword}
        onChange={(e) =>
          setPassword({ ...password, confirmPassword: e.target.value })
        }
        id="confirm-password"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100%", height: 50, borderRadius: 2 }}
        onClick={() => {
          // Handle password change logic here
          console.log("Change password clicked", password);
        }}
      >
        Change password
      </Button>
    </Stack>
  );
};

export default ChangePasswordForm;
