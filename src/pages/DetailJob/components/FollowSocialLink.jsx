import { Box, Stack } from "@mui/material";
import SocialButton from "../../../components/button/SocialButton";

const FollowSocialLink = ({ socialLinks }) => {
  return (
    <Box className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-black mb-6">Follow us on:</h3>

      <Stack direction="row" spacing={3}>
        {socialLinks.map((link) => (
          <SocialButton type={link.type} url={link.url} key={link.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default FollowSocialLink;
