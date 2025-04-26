import { Card, Stack, Typography, Box, Avatar, Link } from "@mui/material";

const CompanyInfo = ({
  id,
  establishedIn,
  name,
  logoUrl,
  websiteUrl,
  province,
  district,
}) => {
  const companyDetails = [
    { label: "Founded in:", value: establishedIn || "Unknown" },
    { label: "Website:", value: websiteUrl || "Unknown" },
    {
      label: "Location:",
      value: `${district || "Unknown"}, ${province || "Unknown"}`,
    },
  ];

  return (
    <Card className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Avatar
          src={logoUrl}
          alt={`${name} Logo`}
          sx={{ width: 70, height: 70 }}
          component={Link}
          to={`/../../job/details/${id}`}
        />
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {name || "Unknown Company"}
        </Typography>
      </Stack>
      <Box>
        {companyDetails.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={index === 0 ? 0 : 2}
          >
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
            {item.label === "Website:" && item.value !== "Unknown" ? (
              <Link
                href={item.value}
                target="_blank"
                rel="noopener"
                variant="body2"
                fontWeight="medium"
                color="primary"
                sx={{ whiteSpace: "nowrap" }}
              >
                {item.value}
              </Link>
            ) : (
              <Typography
                variant="body2"
                fontWeight="medium"
                color="text.primary"
                sx={{ whiteSpace: "nowrap" }}
              >
                {item.value}
              </Typography>
            )}
          </Stack>
        ))}
      </Box>
    </Card>
  );
};

export default CompanyInfo;
