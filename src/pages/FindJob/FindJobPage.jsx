import { useEffect, useState } from "react";
import { Box, Typography, Alert } from "@mui/material";
import Pagination from "./Components/Pagination";
import { getJobByFilter } from "@/services/jobService";
import FilterJob from "./Components/FilterJob";
import JobRow from "./Components/JobRow";
import handleFindJob from "@/utils/handleFindJob";

function FindJobPage() {
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
        setJobs(response.data?.content?.map((job) => handleFindJob(job)) || []);
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
    <Box width="100%">
      <FilterJob
        filters={filters}
        onFilterChange={onFilterChange}
        onApply={fetchJobs}
      />

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
            jobs.map((job) => <JobRow key={job.id} job={job} />)
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

export default FindJobPage;
