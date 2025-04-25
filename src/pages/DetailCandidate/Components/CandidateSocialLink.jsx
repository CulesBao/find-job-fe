import { Box, Typography } from "@mui/material";
import SocialButton from "../../../components/button/SocialButton";

const normalizeUrl = (url) => {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

const CandidateSocialLink = ({ socialLinks }) => {
  if (!socialLinks || socialLinks.length === 0) {
    return (
      <Box className="p-6 bg-white rounded-lg">
        <Typography variant="body2" color="textSecondary">
          No social links available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="p-6 bg-white rounded-lg">
      <h3 className="text-xl font-medium text-black mb-6">Connect with me:</h3>

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

export default CandidateSocialLink;
