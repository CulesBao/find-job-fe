import {
  Stack,
  Container,
  Grid,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import JobHeader from "./components/JobHeader";
import JobDescription from "./components/JobDescription";
import JobResponsibilities from "./components/JobResponsibilities";
import JobOverview from "./components/JobOverview";
import CompanyInfo from "./components/CompanyInfo";
import FollowSocialLink from "./components/FollowSocialLink";
import { formatSalary } from "@/constants/Currency";
import { formatSalaryType } from "@/constants/SalaryType";
import { formatDate } from "@/utils/formatDate";
import { formatEducation } from "@/constants/Education";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById } from "@/services/jobService";
import { getEmployerProfile } from "@/services/employerProfileService";
import { formatJobType } from "@/constants/JobType";

export default function ViewDetailJob() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const jobResponse = await getJobById(jobId);
        if (jobResponse && jobResponse.status === 200) {
          const jobData = jobResponse.data;
          setJob(jobData);

          const employerResponse = await getEmployerProfile(
            jobData.employer_id
          );
          if (employerResponse && employerResponse.status === 200) {
            setEmployer(employerResponse.data);
          }
        } else {
          throw new Error("Failed to fetch job details");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        setError("Failed to load job details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const { formattedMinSalary, formattedMaxSalary } = formatSalary(
    job?.min_salary,
    job?.max_salary,
    job?.currency
  );

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

  if (!job || !employer) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="text.secondary">
          No job details available.
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2} p={2}>
      <JobHeader
        title={job.title}
        employerName={job.employer_name}
        employerLogo={job.employer_logo_url}
        jobType={job.job_type}
        expiredAt={formatDate(job.expired_at)}
      />

      <Stack direction="row" spacing={2}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <JobDescription description={job.description} />
              <JobResponsibilities responsibility={job.responsibility} />
            </Grid>
          </Grid>
        </Container>
        <Box flex={1}>
          <Stack spacing={2}>
            <JobOverview
              minSalary={formattedMinSalary}
              maxSalary={formattedMaxSalary}
              education={formatEducation(job.education)}
              salaryType={formatSalaryType(job.salary_type)}
              createdAt={formatDate(job.created_at)}
              expiredAt={formatDate(job.expired_at)}
              jobType={formatJobType(job.job_type)}
            />
            <CompanyInfo
              establishedIn={formatDate(employer.established_in)}
              name={employer.name}
              logoUrl={employer.logo_url}
              websiteUrl={employer.website_url}
              province={employer.province?.name_en || "N/A"}
              district={employer.district?.name_en || "N/A"}
            />
            {employer.social_links.length != 0 && (
              <FollowSocialLink socialLinks={employer.social_links} />
            )}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
