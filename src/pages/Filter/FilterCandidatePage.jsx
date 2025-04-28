import { useEffect, useState } from "react";
import { Box, Typography, Alert, FormControlLabel, Grid } from "@mui/material";
import Pagination from "@/components/layout/Pagination";
import FilterCandidateHeader from "./components/FilterCandidateHeader";
import { filterCandidateProfile } from "@/services/candidateProfileService";
import CandidateLongCard from "@/components/card/CandidateLongCard";
import CandidateShortCard from "@/components/card/CandidateShortCard";
import CustomSwitchComponent from "@/components/button/CustomSwitchComponent";
import {
  handleFindCandidate,
  handleFindCandidateForShortCard,
} from "@/utils/handleFindCandidate";

function FilterCandidatePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    education: "",
    provinceCode: "",
    gender: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("short");

  const onPageChange = (page) => setCurrentPage(page);

  const onFilterChange = (newFilters) => setFilters(newFilters);

  const fetchCandidates = async () => {
    try {
      console.log("Fetching candidates with filters:", filters);
      setLoading(true);
      setError(null);
      const response = await filterCandidateProfile(filters, currentPage - 1);
      if (response?.data) {
        setCandidates(response.data?.content || []);
        setTotalPages(response.data.total_pages || 1);
      } else {
        setCandidates([]);
        setTotalPages(1);
        setCurrentPage(1);
        setError("No candidates found matching your criteria.");
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setError("Failed to fetch candidates. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, [currentPage]);

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={2}>
      <FilterCandidateHeader
        filters={filters}
        onFilterChange={onFilterChange}
        onApply={fetchCandidates}
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
          <Typography>Loading candidates...</Typography>
        </Box>
      ) : (
        <>
          {candidates.length > 0 ? (
            viewMode === "long" ? (
              candidates.map((candidate) => (
                <CandidateLongCard
                  key={candidate.id}
                  candidate={handleFindCandidate(candidate)}
                />
              ))
            ) : (
              <Grid container spacing={3}>
                {candidates.map((candidate) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={candidate.id}>
                    <CandidateShortCard
                      candidate={handleFindCandidateForShortCard(candidate)}
                    />
                  </Grid>
                ))}
              </Grid>
            )
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography>
                No candidates found matching your criteria.
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

export default FilterCandidatePage;
