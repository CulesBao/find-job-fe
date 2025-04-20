import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import JobListingRow from "./components/JobListingRow";
import Pagination from "./components/Pagination";
import { getAllOwnerJobs } from "@/services/jobService";
import handleViewJob from "@/utils/handleViewJob";

function EmployerMyJob() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [jobs, setJobs] = useState([]);
  function onPageChange(page) {
    setCurrentPage(page);
  }
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllOwnerJobs(currentPage - 1);
        setTotalPages(response.data.total_pages);
        setCurrentPage(response.data.pageable.page_number + 1);
        setJobs(response.data.content.map((job) => handleViewJob(job)));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [currentPage]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <Box mt={6} width="100%">
      <h1 className="text-2xl font-bold mb-4">My jobs</h1>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={2}
        bgcolor="grey.100"
        borderRadius={1}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "text.secondary",
        }}
      >
        <Typography variant="subtitle2" sx={{ flex: 2, textAlign: "left" }}>
          Job
        </Typography>
        <Typography variant="subtitle2" sx={{ flex: 1, textAlign: "center" }}>
          Status
        </Typography>
        <Typography variant="subtitle2" sx={{ flex: 1, textAlign: "center" }}>
          Applications
        </Typography>
        <Typography variant="subtitle2" sx={{ flex: 1.5, textAlign: "center" }}>
          Actions
        </Typography>
      </Box>

      {jobs.map((job, index) => (
        <JobListingRow
          key={job.id}
          job={job}
          isDropdownOpen={activeDropdown === index}
          toggleDropdown={() => toggleDropdown(index)}
        />
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Box>
  );
}

export default EmployerMyJob;
