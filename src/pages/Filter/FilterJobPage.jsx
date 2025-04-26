import { useEffect, useState } from "react";
import { Box, Typography, Alert, FormControlLabel, Grid } from "@mui/material";
import Pagination from "@/components/layout/Pagination";
import { getJobByFilter } from "@/services/jobService";
import FilterJobHeader from "./components/FilterJobHeader";
import JobLongCard from "../../components/card/JobLongCard";
import JobShortCard from "../../components/card/JobShortCard";
import CustomSwitchComponent from "@/components/button/CustomSwitchComponent";
import handleFindJob, {
  handleFindJobForShortCard,
} from "@/utils/handleFindJob";

function FilterJobPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    province_code: "",
    job_type: "",
    education: "",
    salary_type: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("long");

  const onPageChange = (page) => setCurrentPage(page);

  const onFilterChange = (newFilters) => setFilters(newFilters);

  const fetchJobs = async (page) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getJobByFilter(
        filters,
        page || currentPage - 1,
        10
      );
      if (response?.data) {
        setJobs(response.data?.content);
        setTotalPages(response.data.total_pages || 1);
      } else {
        setJobs([]);
        setTotalPages(1);
        setCurrentPage(1);
        setError("No jobs found matching your criteria.");
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={2}>
      <FilterJobHeader
        filters={filters}
        onFilterChange={onFilterChange}
        onApply={fetchJobs}
      />

      <Box display="flex" justifyContent="flex-end" pr={2}>
        <FormControlLabel
          control={
            <CustomSwitchComponent
              checked={viewMode === "short"}
              onChange={(e) => setViewMode(e.target.checked ? "short" : "long")}
            />
          }
        />
      </Box>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography>Loading jobs...</Typography>
        </Box>
      ) : (
        <>
          {jobs.length > 0 ? (
            viewMode === "long" ? (
              jobs.map((job) => (
                <JobLongCard key={job.id} job={handleFindJob(job)} />
              ))
            ) : (
              <Grid container spacing={3}>
                {jobs.map((job) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
                    <JobShortCard
                      key={job?.id}
                      job={handleFindJobForShortCard(job)}
                    />
                  </Grid>
                ))}
              </Grid>
            )
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography>No jobs found matching your criteria.</Typography>
            </Box>
          )}

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </>
      )}
    </Box>
  );
}

export default FilterJobPage;
