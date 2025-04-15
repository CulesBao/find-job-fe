import { Box, Stack, Typography } from "@mui/material";
import SocialButton from "../button/SocialButton";

const FollowSocialLink = ({ socialLinks }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: 4,
        bgcolor: "background.paper",
        borderRadius: 2,
        border: 1,
        borderColor: "rgba(206, 224, 245, 0.7)",
      }}
    >
      <Typography variant="body1" color="text.primary" fontWeight={500}>
        Follow us on:
      </Typography>

      <Stack direction="row" spacing={3}>
        {socialLinks.map((link) => (
          <SocialButton type={link.type} url={link.url} key={link.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default FollowSocialLink;
