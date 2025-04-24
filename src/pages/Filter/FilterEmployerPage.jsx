import { useEffect, useState } from "react";
import { Box, Typography, Alert } from "@mui/material";
import Pagination from "@/components/layout/Pagination";
import FilterEmployerHeader from "./components/FilterEmployerHeader";
import EmployerLongCard from "@/components/card/EmployerLongCard";
import { filterEmployerProfile } from "@/services/employerProfileService";
function FilterEmployerPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [employers, setEmployers] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    province_code: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onPageChange = (page) => setCurrentPage(page);

  const onFilterChange = (newFilters) => setFilters(newFilters);

  const fetchEmployers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await filterEmployerProfile(filters, currentPage - 1);
      if (response?.data) {
        setEmployers(response.data?.content || []);
        setTotalPages(response.data.total_pages || 1);
      } else {
        setEmployers([]);
        setTotalPages(1);
        setCurrentPage(1);
        setError("No employers found matching your criteria.");
      }
    } catch (error) {
      console.error("Error fetching employers:", error);
      setError("Failed to fetch employers. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployers();
  }, [currentPage]);

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={2}>
      <FilterEmployerHeader
        filters={filters}
        onFilterChange={onFilterChange}
        onApply={fetchEmployers}
      />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography>Loading employers...</Typography>
        </Box>
      ) : (
        <>
          {employers.length > 0 ? (
            employers.map((employer) => (
              <EmployerLongCard key={employer.id} employer={employer} />
            ))
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography>
                No employers found matching your criteria.
              </Typography>
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

export default FilterEmployerPage;
