import { useEffect, useState } from "react";
import { Box, Typography, Alert, FormControlLabel, Grid } from "@mui/material";
import Pagination from "@/components/layout/Pagination";
import FilterEmployerHeader from "./components/FilterEmployerHeader";
import EmployerLongCard from "@/components/card/EmployerLongCard";
import EmployerShortCard from "@/components/card/EmployerShortCard";
import CustomSwitchComponent from "@/components/button/CustomSwitchComponent";
import { filterEmployerProfile } from "@/services/employerProfileService";
import {
  handleFindEmployer,
  handleFindEmployerForShortCard,
} from "@/utils/handleFindEmployer";

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
  const [viewMode, setViewMode] = useState("short"); // Trạng thái chế độ hiển thị

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
      {/* Header */}
      <FilterEmployerHeader
        filters={filters}
        onFilterChange={onFilterChange}
        onApply={fetchEmployers}
      />

      {/* Switch for view mode */}
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

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {/* Employer List */}
      {loading ? (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography>Loading employers...</Typography>
        </Box>
      ) : (
        <>
          {employers.length > 0 ? (
            viewMode === "long" ? (
              employers.map((employer) => (
                <EmployerLongCard
                  key={employer.id}
                  employer={handleFindEmployer(employer)}
                />
              ))
            ) : (
              <Grid container spacing={3}>
                {employers.map((employer) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={employer.id}>
                    <EmployerShortCard
                      employer={handleFindEmployerForShortCard(employer)}
                    />
                  </Grid>
                ))}
              </Grid>
            )
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography>
                No employers found matching your criteria.
              </Typography>
            </Box>
          )}

          {/* Pagination */}
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
