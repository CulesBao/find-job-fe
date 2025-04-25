import ApplicationLongCard from "@/components/card/ApplicationLongCard";
import Pagination from "@/components/layout/Pagination";
import { getCanddidateApplications } from "@/services/applicationService";
import handleViewApplication from "@/utils/handleViewApplication";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const CandidateAppliedJob = () => {
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [applications, setApplications] = useState([]);
  function onPageChange(page) {
    setCurrentPage(page);
  }
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await getCanddidateApplications(currentPage - 1);
        setApplications(
          response.data.content.map((application) =>
            handleViewApplication(application)
          )
        );
        setTotalPage(response.data.total_pages);
        setCurrentPage(response.data.pageable.page_number + 1);
      } catch (error) {
        console.error("Error fetching saved application:", error);
      }
    };
    fetchApplication();
  }, [currentPage]);
  return (
    <Box mt={6} width="100%">
      <h1 className="text-2xl font-bold mb-4">Applied Jobs</h1>
      {applications?.map((application) => (
        <ApplicationLongCard
          key={application.applicationId}
          application={application}
        />
      ))}
      <Pagination
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Box>
  );
};
export default CandidateAppliedJob;
