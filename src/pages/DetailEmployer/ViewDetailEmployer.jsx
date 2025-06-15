import {
  getEmployerProfile,
  filterEmployerProfile,
} from "@/services/employerProfileService";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployerHeader from "./Components/EmployerHeader";
import EmployerOverview from "./Components/EmployerOverview";
import EmployerSocialLink from "./Components/EmployerSocialLinks";
import EmployerAbout from "./Components/EmployerAbout";
import EmployerVision from "./Components/EmployerVision";
import StarRating from "./Components/StarRating";
import EmployerShortCard from "@/components/card/EmployerShortCard";
import { handleFindEmployerForShortCard } from "@/utils/handleFindEmployer";
import { getJobByEmployerId } from "@/services/jobService";
import JobShortCard from "@/components/card/JobShortCard";
import { handleFindJobForShortCard } from "@/utils/handleFindJob";
import { formatDate } from "@/utils/formatDate";

export default function ViewDetailEmployer() {
  const { employerId } = useParams();
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentRating, setCurrentRating] = useState(0);
  const [relativeEmployers, setRelativeEmployers] = useState([]);
  const [myJobs, setMyJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);

  // Fetch employer details
  useEffect(() => {
    const fetchEmployerDetails = async () => {
      try {
        setLoading(true);
        const employerResponse = await getEmployerProfile(employerId);
        if (employerResponse && employerResponse.status === 200) {
          setEmployer(employerResponse.data);
        }
        const jobsResponse = await getJobByEmployerId(employerId);
        if (jobsResponse && jobsResponse.status === 200) {
          setMyJobs(jobsResponse.data.content);
          setTotalJobs(jobsResponse.data.total_elements);
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

  // Fetch relative employers
  useEffect(() => {
    const fetchRelativeEmployers = async () => {
      try {
        if (!employer) return;

        let response = await filterEmployerProfile(
          {
            name: "",
            provinceCode: employer?.province?.code || "",
          },
          0,
          6
        );

        if (response.data.total_elements <= 2) {
          response = await filterEmployerProfile(
            {
              name: "",
              provinceCode: "",
            },
            0,
            6
          );
        }

        setRelativeEmployers(
          response?.data?.content?.map((item) =>
            handleFindEmployerForShortCard(item)
          )
        );
      } catch (error) {
        console.error("Error fetching relative employers:", error);
      }
    };

    fetchRelativeEmployers();
  }, [employer]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!employer) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
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
            employerId={employer.id}
            logoUrl={employer.logo_url}
            companyName={employer.name}
            createdAt={formatDate(employer.established_in)}
            email={employer.email}
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
            <EmployerAbout about={employer.about} />
            <EmployerVision vision={employer.vision} />
            <EmployerSocialLink socialLinks={employer.social_links} />
            {totalJobs > 0 && (
              <div>
                <h3 className="text-2xl font-medium leading-loose ml-4 mt-3 text-black">
                  See also our jobs:
                </h3>
                <Grid container spacing={3} className="mt-4">
                  {myJobs.map((item) => (
                    <Grid item xs={4} key={item.id}>
                      <JobShortCard
                        job={handleFindJobForShortCard(item)}
                        isExternal={true}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            )}
            <h3 className="text-2xl font-medium leading-loose ml-4 mt-3 text-black">
              Relative Companies:
            </h3>
            <Grid container spacing={3} className="mt-4">
              {relativeEmployers.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <EmployerShortCard employer={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
