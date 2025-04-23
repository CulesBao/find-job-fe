import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getFollowedCandidates } from "@/services/employerFollowerService";
import ViewCandidate from "./components/ViewCandidate";
import Pagination from "@/components/layout/Pagination";

const EmployerSavedCandidate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [candidates, setCandidates] = useState([]);

  function onPageChange(page) {
    setCurrentPage(page);
  }

  useEffect(() => {
    const fetchSavedCandidates = async () => {
      try {
        const response = await getFollowedCandidates(currentPage - 1);
        setCandidates(response.data.content);
        setTotalPages(response.data.total_pages);
        setCurrentPage(response.data.pageable.page_number + 1);
        console.log("Saved Employers:", response.data.content);
      } catch (error) {
        console.error("Error fetching saved employers:", error);
      }
    };
    fetchSavedCandidates();
  }, [currentPage]);
  return (
    <Box mt={6} width="100%">
      <h1 className="text-2xl font-bold mb-4">Saved Candidates</h1>
      {candidates?.map((candidate) => (
        <ViewCandidate key={candidate.id} candidate={candidate} />
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Box>
  );
};
export default EmployerSavedCandidate;
