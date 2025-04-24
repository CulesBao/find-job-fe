import EmployerLongCard from "@/components/card/EmployerLongCard";
import Pagination from "@/components/layout/Pagination";
import { getFollowedEmployers } from "@/services/candidateFollowerService";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const CandidateSavedEmployers = () => {
  const [employers, setEmployers] = useState();
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function onPageChange(page) {
    setCurrentPage(page);
  }
  useEffect(() => {
    const fetchSavedEmployers = async () => {
      try {
        const response = await getFollowedEmployers(currentPage - 1);
        setEmployers(response.data.content);
        setTotalPage(response.data.total_pages);
        setCurrentPage(response.data.pageable.page_number + 1);
      } catch (error) {
        console.error("Error fetching saved employers:", error);
      }
    };
    fetchSavedEmployers();
  }, [currentPage]);
  return (
    <Box mt={6} width="100%">
      <h1 className="text-2xl font-bold mb-4">Saved Employers</h1>
      {employers?.map((employer) => (
        <EmployerLongCard key={employer.id} employer={employer} />
      ))}
      <Pagination
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Box>
  );
};
export default CandidateSavedEmployers;
