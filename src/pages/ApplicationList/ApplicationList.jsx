import { Box, Grid, Typography, FormControl, Select, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import CandidateCard from './CandidateCard';
import JobProcess from '@/constants/JobProccess';

const candidates = [
  {
    name: 'Ronald Richards',
    title: 'UI/UX Designer',
    education: 'Master Degree',
    experience: '7 Years Experience',
    job_proccess:'HIRED',
    appliedDate: 'Jan 23, 2022',
  },
  {
    name: 'Theresa Webb',
    title: 'Product Designer',
    education: 'High School Degree',
    experience: '7 Years Experience',
    appliedDate: 'Jan 23, 2022',
    job_proccess:'HIRED'
  },
  {
    name: 'Devon Lane',
    job_proccess:'HIRED',
    title: 'User Experience Designer',
    education: 'Master Degree',
    experience: '7 Years Experience',
    appliedDate: 'Jan 23, 2022',
  },
  {
    job_proccess:'HIRED',
    name: 'Kathryn Murphy',
    title: 'User Experience & UI Designer',
    education: 'Master Degree',
    experience: '7 Years Experience',
    appliedDate: 'Jan 23, 2022',
  },
  {
    name: 'Courtney Henry',
    job_proccess:'HIRED',
    title: 'Visual Designer',
    education: 'Bachelor Degree',
    experience: '4 Years Experience',
    appliedDate: 'Feb 10, 2022',
  },
  {
    name: 'Floyd Miles',
    title: 'Interaction Designer',
    education: 'Diploma',
    experience: '5 Years Experience',
    appliedDate: 'Mar 01, 2022',
  },
];

export default function ApplicationList({ jobId }) {
  const [selectedProcess, setSelectedProcess] = useState('');
  
  const filteredCandidates = selectedProcess
    ? candidates.filter((candidate) => candidate.job_proccess === selectedProcess)
    : candidates;

  return (
    <Box px={2} py={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">
          All Applications ({filteredCandidates.length})
        </Typography>

        {/* Filter By Job Process and Save Button */}
        <Box display="flex" gap={2}>
          {/* Filter By Job Process */}
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
                      bgcolor: process?.color || '#f5f5f5', 
                      color: process?.color ? '#fff' : 'inherit',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                    }}
                  >
                    {process ? process.name : 'All Processes'}
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
                    <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: color }} />
                    <Typography>{name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Save Button */}
          <Button variant="contained" color="primary" 
            sx={{height:40, mt:1}}
          >
            Save
          </Button>
        </Box>
      </Box>

      {/* Display filtered candidates */}
      <Grid container spacing={3} justifyContent="center">
        {filteredCandidates.map((candidate, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CandidateCard candidateInfo={candidate} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
