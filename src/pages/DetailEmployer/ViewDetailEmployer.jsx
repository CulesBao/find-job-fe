import { getEmployerProfile } from "@/services/employerProfileService";
import { formatDate } from "@/utils/formatDate";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployerHeader from "./Components/EmployerHeader";
import EmployerOverview from "./Components/EmployerOverview";
import EmployerSocialLink from "./Components/EmployerSocialLinks";
import EmployerAbout from "./Components/EmployerAbout";
import EmployerVision from "./Components/EmployerVision";
import StarRating from "./Components/StarRating";

export default function ViewDetailEmployer() {
  const { employerId } = useParams();
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    const fetchEmployerDetails = async () => {
      try {
        setLoading(true);
        const response = await getEmployerProfile(employerId); 
        if (response && response.status === 200) {
          setEmployer(response.data);
        } else {
          throw new Error("Failed to fetch employer details");
        }
      } catch (error) {
        console.error("Error fetching employer details:", error);
        setError("Failed to load employer details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployerDetails();
  }, [employerId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  if (!employer) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="text.secondary">
          No employer details available.
        </Typography>
      </Box>
    );
  }

  return (
    <div className="flex flex-col space-y-1 pb-30">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-0 w-[30%] items-center">
        <EmployerHeader
          logoUrl={employer.logo_url}
          companyName={employer.name}
          createdAt={formatDate(employer.created_at)}
        />
        <StarRating 
          rating={currentRating}
          onRate={(value) => setCurrentRating(value)}
        />
        <EmployerOverview
          websiteUrl={employer.website_url}
          districtId={employer.district?.name_en || "N/A"}
          provinceId={employer.province?.name_en || "N/A"}
        />
        </div>

        <div className="flex-1">
          <div className="relative gap-6 p-6 rounded-2xl bg-white">
          <h2 className="text-3xl text-center font-semibold mb-3 text-zinc-900 hover:text-blue-500 transition-all duration-300">
            Nice to connect, We{"'"}re {employer.name}!
          </h2>
            <EmployerAbout about={employer.about}/>
            <EmployerVision vision={employer.vision}/>
            <EmployerSocialLink 
              socialLinks={employer.social_links}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
