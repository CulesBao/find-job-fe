import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCandidateProfile } from "@/services/candidateProfileService";
import { formatDate } from "@/utils/formatDate";
import { formatEducation } from "@/constants/Education";
import CandidateHeader from "./components/CandidateHeader";
import CandidateBio from "./components/CandidateBio";
import CandidateOverview from "./components/CandidateOverview";
import CandidateSocialLink from "./Components/CandidateSocialLink";

export default function ViewDetailCandidate() {
  const { candidateId } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      try {
        setLoading(true);
        const response = await getCandidateProfile(candidateId);
        if (response && response.status === 200) {
          setCandidate(response.data);
        } else {
          throw new Error("Failed to fetch candidate details");
        }
      } catch (error) {
        console.error("Error fetching candidate details:", error);
        setError("Failed to load candidate details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateDetails();
  }, [candidateId]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!candidate) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="text.secondary">
          No candidate details available.
        </Typography>
      </Box>
    );
  }

  return (
    <div className="flex flex-col space-y-1 pb-30">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 w-[30%]">
          <CandidateHeader
            candidateId={candidate.id}
            avatarUrl={candidate.avatar_url}
            fullName={`${candidate.first_name} ${candidate.last_name}`}
            createdAt={formatDate(candidate.created_at)}
            gender={candidate.gender}
          />
          <CandidateOverview
            dateOfBirth={formatDate(candidate.date_of_birth)}
            education={formatEducation(candidate.education)}
            phoneNumber={candidate.phone_number}
            districtId={candidate.district?.name_en || "N/A"}
            provinceId={candidate.province?.name_en || "N/A"}
          />
        </div>

        <div className="flex-1">
          <div className="relative gap-6 p-6 rounded-2xl bg-white">
            <CandidateBio
              bio={candidate.bio}
              name={`${candidate.first_name} ${candidate.last_name}`}
            />
            <CandidateSocialLink socialLinks={candidate.social_links} />
          </div>
        </div>
      </div>
    </div>
  );
}
