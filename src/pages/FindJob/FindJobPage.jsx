import { useEffect, useState } from "react";
import { Box, Typography, Alert } from "@mui/material";
import Pagination from "./Components/Pagination";
import { getJobByFilter } from "@/services/jobService";
import handleViewJob from "@/utils/handleViewJob";
import FindJobListing from "./Components/FindJobListing";
import FilterJob from "./Components/FilterJob";

function FindJobPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobTitle: "",
    province: "",
    jobType: "",
    education: "",
    salaryType: "",
  });
  const [appliedFilters, setAppliedFilters] = useState(filters);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function onPageChange(page) {
    setCurrentPage(page);
  }

  function onFilterChange(newFilters) {
    setFilters(newFilters);
  }

  function applyFilters() {
    setAppliedFilters(filters);
    setCurrentPage(1);
  }

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getJobByFilter({
          ...appliedFilters,
          page: currentPage - 1,
          size: 5,
        });

        if (response && response.data) {
          setTotalPages(response.data.total_pages || 1);
          
          if (response.data.content && Array.isArray(response.data.content)) {
            setJobs(response.data.content.map((job) => handleViewJob(job)));
          } else {
            console.warn("Response data content is missing or not an array:", response.data);
            setJobs([]);
          }
        } else {
          console.warn("Invalid response format:", response);
          setJobs([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs. Please try again later.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [appliedFilters, currentPage]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <Box width="100%">
      <FilterJob 
        filters={filters} 
        onFilterChange={onFilterChange} 
        onApply={applyFilters}
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
            jobs.map((job, index) => (
              <FindJobListing
                key={job.id}
                job={job}
                isDropdownOpen={activeDropdown === index}
                toggleDropdown={() => toggleDropdown(index)}
              />
            ))
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