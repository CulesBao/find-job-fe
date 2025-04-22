import { Box, Typography } from "@mui/material";
import SocialButton from "../../../components/button/SocialButton";

const EmployerSocialLink = ({ socialLinks }) => {
  if (!socialLinks || socialLinks.length === 0) {
    return (
      <Box className="mt-5 bg-white rounded-lg">
        <Typography variant="body2" color="textSecondary">
          No social links available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="mt-5 bg-white rounded-lg">
      <h3 className="text-2xl font-medium leading-loose text-black mb-6">Connect with us:</h3>
      <Box className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <SocialButton type={link.type} url={link.url} key={link.id} />
        ))}
      </Box>
    </Box>
  );
};

export default EmployerSocialLink;
