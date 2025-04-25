import {
  Avatar,
  Box,
  Card,
  Divider,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import JobProcess from "@/constants/JobProccess";

export default function CandidateCard({ candidateInfo, onProcessChange }) {
  const [selectedProcess, setSelectedProcess] = useState(
    candidateInfo.jobProcess
  );

  useEffect(() => {
    setSelectedProcess(candidateInfo.jobProcess);
  }, [candidateInfo.jobProcess]);

  const handleProcessChange = (newProcess) => {
    setSelectedProcess(newProcess);
    onProcessChange({
      application_id: candidateInfo.id,
      status: newProcess,
    });
  };

  const renderProcessValue = (selected) => {
    const process = JobProcess[selected];
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: process?.color,
          color: "#fff",
          fontWeight: 500,
          px: 2,
          py: 1,
          borderRadius: 2,
        }}
      >
        {process?.name}
      </Box>
    );
  };

  const renderProcessOptions = () =>
    Object.entries(JobProcess)
      .filter(([key]) => key != "WITHDRAWN")
      .map(([key, { name, color }]) => (
        <MenuItem key={key} value={key}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
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
      ));

  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        boxShadow: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: 300,
      }}
    >
      <Box display="flex" gap={2} alignItems="center">
        <Avatar
          sx={{ width: 48, height: 48, bgcolor: "grey.500" }}
          src={candidateInfo.avatarUrl}
        />
        <Box>
          <Typography fontWeight={550} fontSize={20}>
            {candidateInfo.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {candidateInfo.education}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          Applied: {candidateInfo.createdAt}
        </Typography>
      </Stack>

      <Box mt={2}>
        <FormControl size="small" sx={{ width: "100%" }}>
          <Select
            value={selectedProcess}
            onChange={(e) => handleProcessChange(e.target.value)}
            displayEmpty
            IconComponent={() => null}
            disabled={candidateInfo?.jobProcess === "WITHDRAWN"}
            renderValue={renderProcessValue}
            sx={{
              opacity: 1,
              "& .MuiSelect-select": {
                padding: 0,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              bgcolor: "transparent",
            }}
          >
            {renderProcessOptions()}
          </Select>
        </FormControl>
      </Box>
    </Card>
  );
}
