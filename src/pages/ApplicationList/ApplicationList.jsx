import {
  Box,
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";
import JobProcess from "@/constants/JobProccess";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEmployerApplications,
  updateApplicationStatus,
} from "@/services/applicationService";
import Pagination from "@/components/layout/Pagination";
import handleApplicationCard from "@/utils/handleApplicationCard";

export default function ApplicationList() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [selectedProcess, setSelectedProcess] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [applications, setApplications] = useState();
  const [changeApplicationProcess, setChangeApplicationProcess] = useState([]);
  const handleChangeApplicationProcess = ({ application_id, status }) => {
    setChangeApplicationProcess((prev) => {
      const isExists = prev.find(
        (item) => item.application_id === application_id
      );
      if (isExists) {
        return prev.map((item) =>
          item.application_id === application_id ? { ...item, status } : item
        );
      } else {
        return [...prev, { application_id, status }];
      }
    });
  };
  function onPageChange(page) {
    setCurrentPage(page);
  }
  async function handleSaveChangeProccess() {
    await updateApplicationStatus(jobId, changeApplicationProcess);
    navigate(0);
  }

  const handleProccessChange = async () => {
    const response = await getEmployerApplications(
      jobId,
      selectedProcess,
      currentPage - 1
    );
    setApplications(
      response.data.content?.map((application) =>
        handleApplicationCard(application)
      )
    );
    setTotalPage(response.data.total_pages);
    setCurrentPage(response.data.pageable.page_number + 1);
  };
  useEffect(() => {
    handleProccessChange();
  }, [selectedProcess, currentPage]);

  return (
    <Box px={2} py={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <h1 className="text-2xl font-bold mb-4">Applications</h1>

        <Box display="flex" gap={2}>
          <FormControl size="small" sx={{ width: 250 }}>
            <Select
              value={selectedProcess}
              onChange={(e) => setSelectedProcess(e.target.value)}
              displayEmpty
              IconComponent={() => null}
              renderValue={(selected) => {
                const process = JobProcess[selected];
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: process?.color || "#f5f5f5",
                      color: process?.color ? "#fff" : "inherit",
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                    }}
                  >
                    {process ? process.name : "All Processes"}
                  </Box>
                );
              }}
              sx={{
                bgcolor: "transparent",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="">
                <Typography>All Processes</Typography>
              </MenuItem>
              {Object.entries(JobProcess).map(([key, { name, color }]) => (
                <MenuItem key={key} value={key}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        bgcolor: color,
                      }}
                    />
                    <Typography>{name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            sx={{ height: 40, mt: 1 }}
            onClick={() => {
              handleSaveChangeProccess();
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {applications?.map((candidate, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CandidateCard
              candidateInfo={candidate}
              onProcessChange={handleChangeApplicationProcess}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </Box>
  );
}
