import { Avatar, Box, Card, Divider, FormControl, InputLabel, Select, MenuItem, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import JobProcess from '@/constants/JobProccess';

export default function CandidateCard({ name, education, appliedDate }) {
  const [selectedProcess, setSelectedProcess] = useState('');

  const handleChange = (event) => {
    setSelectedProcess(event.target.value);
  };

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
          <Typography fontWeight={550} fontSize={20}>{name}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">Education: {education}</Typography>
        <Typography variant="body2" color="text.secondary">Applied: {appliedDate}</Typography>
      </Stack>
      
      {/* Select Process */}
      <Box mt={2}>
        <FormControl fullWidth size="small">
          <InputLabel>Job Process</InputLabel>
          <Select
            value={selectedProcess}
            label="Job Process"
            onChange={handleChange}
            displayEmpty
            IconComponent={() => null}  // Removes the default dropdown arrow
            sx={{
              color: selectedProcess ? JobProcess[selectedProcess].color : 'black',
              bgcolor: selectedProcess ? JobProcess[selectedProcess].color : 'transparent',
              borderRadius: 2,
              '& .MuiSelect-icon': {
                display: 'none',  // Hide the dropdown icon
              },
            }}
          >
            {Object.keys(JobProcess).map((key) => (
              <MenuItem
                key={key}
                value={key}
                sx={{
                  textAlign: 'center',
                  backgroundColor: selectedProcess === key ? JobProcess[key].color : 'transparent',
                  '&:hover': {
                    backgroundColor: JobProcess[key].color,  // Change color on hover
                  }
                }}
              >
                <Typography sx={{ color: selectedProcess === key ? 'white' : JobProcess[key].color }}>
                  {JobProcess[key].name}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Card>
  );
}
