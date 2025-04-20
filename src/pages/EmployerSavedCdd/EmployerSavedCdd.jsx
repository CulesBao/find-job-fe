import { useState } from "react";
import Pagination from "./components/Pagination";
import { Box } from "@mui/material";

const EmployerSavedCdd = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [jobs, setJobs] = useState([]);

  function onPageChange(page) {
    setCurrentPage(page);
  }
  return (
    <Box mt={6} width="100%">
      <h1 className="text-2xl font-bold mb-4">Saved candidates</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Box>
  );
};
export default EmployerSavedCdd;
