import { Stack, Container, Grid, Box } from "@mui/material";
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

export default function ViewDetailJob() {
  const jobData = {
    id: "sWIu20uRXL6b42_nU7knx",
    created_at: "2025-03-31T02:21:04.170Z",
    updated_at: "2026-02-23",
    description:
      "Absque stipes avarus acceptus correptius aufero sufficio curto sto canis. Crux denuncio tutamen cuppedia. Atqui damno dolores aestivus crepusculum numquam claustrum carpo. Subnecto cribro copiose textus sunt verus caecus deprimo. Speciosus libero ubi spero demoror aperio.",
    education: "HIGH_SCHOOL",
    expired_at: "2025-04-01T13:34:58.829Z",
    job_type: "UI_UX_DESIGNER",
    max_salary: 25586000.571383998,
    min_salary: 9700000.88930131,
    responsibility:
      "ea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteurea anim Excepteur",
    salary_type: "BONUS",
    title: "experience brr nor shameful curry",
    employer_id: "mollit",
    currency: "VND",
    employer_name: "Luis Rutherford",
    employer_logo_url: "https://avatars.githubusercontent.com/u/21396802",
  };

  const companyData = {
    id: "jEIKjo_IeAJTQakEsyao9",
    created_at: "2025-03-25T15:59:20.806Z",
    updated_at: "2025-04-06",
    about: "nu",
    established_in: "1979-07-13",
    logo_url: "https://avatars.githubusercontent.com/u/5301647",
    name: "Suzanne Yundt",
    vision: "aute consectetur enim est",
    website_url: "https://www.facebook.com/cules.21",
    province: {
      code: "97",
      name: "Elisa Wuckert",
      name_en: "Israel Cartwright",
      full_name: "Raquel Crooks",
      full_name_en: "Sophie Hills",
    },
    district: {
      code: "70",
      name: "Joan Corwin",
      name_en: "Edna O'Connell",
      full_name: "Douglas Grady",
      full_name_en: "Rickey Weber",
    },
    social_links: [
      {
        id: "bhhc4-AZMzzgOKU2Z5dLc",
        type: "FACEBOOK",
        url: "https://www.facebook.com/cules.21",
      },
      {
        id: "SkRc6pXWOOTUtzXjrV7cQ",
        type: "GITHUB",
        url: "https://orderly-minority.net/",
      },
      {
        id: "lKzNhRoQS9DG1QG7lyymd",
        type: "X",
        url: "https://sore-challenge.biz/",
      },
    ],
  };

  const { formattedMinSalary, formattedMaxSalary } = formatSalary(
    jobData.min_salary,
    jobData.max_salary,
    jobData.currency
  );

  const formatJobType = (jobType) => {
    return jobType ? jobType.replace("_", " ") : "Unknown";
  };

  return (
    <Stack spacing={2} p={2}>
      <JobHeader
        title={jobData.title}
        employerName={jobData.employer_name}
        employerLogo={jobData.employer_logo_url}
        jobType={jobData.job_type}
        expiredAt={formatDate(jobData.expired_at)}
      />

      <Stack direction="row" spacing={2}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <JobDescription description={jobData.description} />
              <JobResponsibilities responsibility={jobData.responsibility} />
            </Grid>
          </Grid>
        </Container>
        <Box flex={1}>
          <Stack spacing={2}>
            <JobOverview
              minSalary={formattedMinSalary}
              maxSalary={formattedMaxSalary}
              education={formatEducation(jobData.education)}
              salaryType={formatSalaryType(jobData.salary_type)}
              createdAt={formatDate(jobData.created_at)}
              expiredAt={formatDate(jobData.expired_at)}
              jobType={formatJobType(jobData.job_type)}
            />
            <CompanyInfo
              establishedIn={formatDate(companyData.established_in)}
              name={companyData.name}
              logoUrl={companyData.logo_url}
              websiteUrl={companyData.website_url}
              province={companyData.province.name_en}
              district={companyData.district.name_en}
            />
            <FollowSocialLink socialLinks={companyData.social_links} />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
