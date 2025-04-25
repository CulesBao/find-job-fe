import { Box, Typography } from "@mui/material";
import SocialButton from "../../../components/button/SocialButton";

const normalizeUrl = (url) => {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

const EmployerSocialLink = ({ socialLinks }) => {
  if (!socialLinks || socialLinks.length === 0) {
    return (
      <Box className="mt-5 bg-white rounded-lg p-4">
        <Typography variant="body2" color="textSecondary">
          No social links available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="mt-5 bg-white rounded-lg p-4">
      <h3 className="text-2xl font-medium leading-loose text-black mb-6">
        Connect with us:
      </h3>
      <Box className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <SocialButton
            type={link.type}
            url={normalizeUrl(link.url)}
            key={link.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EmployerSocialLink;
