import { Box, Grid, Typography } from '@mui/material';
import CandidateCard from './CandidateCard';

const candidates = [
  {
    name: 'Ronald Richards',
    title: 'UI/UX Designer',
    education: 'Master Degree',
    experience: '7 Years Experience',
    appliedDate: 'Jan 23, 2022',
  },
  {
    name: 'Theresa Webb',
    title: 'Product Designer',
    education: 'High School Degree',
    experience: '7 Years Experience',
    appliedDate: 'Jan 23, 2022',
  },
  {
    name: 'Devon Lane',
    title: 'User Experience Designer',
    education: 'Master Degree',
    experience: '7 Years Experience',
    appliedDate: 'Jan 23, 2022',
  },
  {
    name: 'Kathryn Murphy',
    title: 'User Experience & UI Designer',
    education: 'Master Degree',
    experience: '7 Years Experience',
    appliedDate: 'Jan 23, 2022',
  },
  {
    name: 'Courtney Henry',
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

export default function ApplicationList() {
  return (
    <Box px={2} py={3}>
      <Typography variant="h6" mb={2}>
        All Applications ({candidates.length})
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {candidates.map((candidate, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CandidateCard {...candidate} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}