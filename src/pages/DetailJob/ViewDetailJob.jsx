import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import JobHeader from "./components/JobHeader";
import JobDescription from "./components/JobDescription";
import JobResponsibilities from "./components/JobResponsibilities";
import JobOverview from "./components/JobOverview";
import CompanyInfo from "./components/CompanyInfo";
import FollowSocialLink from "./components/FollowSocialLink";
import { formatSalaryType } from "@/constants/SalaryType";
import { formatDate } from "@/utils/formatDate";
import { formatEducation } from "@/constants/Education";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById } from "@/services/jobService";
import { getEmployerProfile } from "@/services/employerProfileService";
import { formatJobType } from "@/constants/JobType";
import handleSalaryAndCurrency from "@/utils/handleSalaryAndCurrency";
import JobShortCard from "@/components/card/JobShortCard";

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

  const salaryRange = handleSalaryAndCurrency(
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
    <div className="flex flex-col space-y-1 pb-30">
      <h1 className="text-xl font-medium">Job Details</h1>

      <JobHeader
        jobId={jobId}
        title={job.title}
        employerName={job.employer_name}
        employerLogo={job.employer_logo_url}
        jobType={formatJobType(job.job_type)}
        expiredAt={formatDate(job.expired_at)}
      />

      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-[65%] lg:flex-row gap-4">
          <div className="relative gap-6">
            <JobDescription description={job.description} />
            <JobResponsibilities responsibility={job.responsibility} />
            <h3 className="text-xl mt-6 font-medium leading-loose text-black">
              Relative Jobs:
            </h3>
            <Grid container spacing={2} className="mt-6 ml-10">
              <JobShortCard job={job}/>
              <JobShortCard job={job}/>
              <JobShortCard job={job}/>
              <JobShortCard job={job}/>
              <JobShortCard job={job}/>
            </Grid>
          </div>
        </div>

        <div className="flex-1 p-6 rounded-2xl  bg-white space-y-4">
          <JobOverview
            salaryRange={salaryRange}
            education={formatEducation(job.education)}
            salaryType={formatSalaryType(job.salary_type)}
            createdAt={formatDate(job.created_at)}
            expiredAt={formatDate(job.expired_at)}
            jobType={formatJobType(job.job_type)}
          />
          <div className="pt-4">
            <CompanyInfo
              establishedIn={formatDate(employer.established_in)}
              name={employer.name}
              logoUrl={employer.logo_url}
              websiteUrl={employer.website_url}
              province={employer.province?.name_en || "N/A"}
              district={employer.district?.name_en || "N/A"}
            />
          </div>
          {employer.social_links.length !== 0 && (
            <div className=" pt-4">
              <FollowSocialLink socialLinks={employer.social_links} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
