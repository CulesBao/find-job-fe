import { Avatar, Box, Card, Divider, FormControl, Select, MenuItem, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import JobProcess from '@/constants/JobProccess';

export default function CandidateCard({ candidateInfo }) {
  const [selectedProcess, setSelectedProcess] = useState('');


  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        boxShadow: 1,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: 300,
      }}
    >
      <Box display="flex" gap={2} alignItems="center">
        <Avatar sx={{ width: 48, height: 48, bgcolor: 'grey.500' }} />
        <Box>
          <Typography fontWeight={550} fontSize={20}>{candidateInfo.name}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">Education: {candidateInfo.education}</Typography>
        <Typography variant="body2" color="text.secondary">Applied: {candidateInfo.appliedDate}</Typography>
      </Stack>
      
      {/* Select Process */}
      <Box mt={2}>
        <FormControl size="small" sx={{ width: 300 }}>
          <Select
            value={selectedProcess}
            onChange={(e) => setSelectedProcess(e.target.value)}
            displayEmpty
            IconComponent={() => null}
            renderValue={(selected) => {
              const process =
                JobProcess[selected] || JobProcess[candidateInfo?.job_proccess];
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
            }}
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
            {Object.entries(JobProcess).map(
              ([key, { name, color }]) => (
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
              )
            )}
          </Select>
        </FormControl>
      </Box>
    </Card>
  );
}
