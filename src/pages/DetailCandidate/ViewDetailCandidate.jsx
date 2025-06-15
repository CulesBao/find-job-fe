import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  filterCandidateProfile,
  getCandidateProfile,
} from "@/services/candidateProfileService";
import { formatDate } from "@/utils/formatDate";
import { formatEducation } from "@/constants/Education";
import CandidateHeader from "./components/CandidateHeader";
import CandidateBio from "./components/CandidateBio";
import CandidateOverview from "./components/CandidateOverview";
import CandidateSocialLink from "./components/CandidateSocialLink";
import CandidateShortCard from "@/components/card/CandidateShortCard";
import { handleFindCandidateForShortCard } from "@/utils/handleFindCandidate";

export default function ViewDetailCandidate() {
  const { candidateId } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relativeCandidates, setRelativeCandidates] = useState([]);

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

  // Fetch relative candidates
  useEffect(() => {
    const fetchRelativeCandidates = async () => {
      try {
        if (!candidate) return;

        let response = await filterCandidateProfile(
          {
            firstName: "",
            lastName: "",
            education: "",
            provinceCode: candidate?.province?.code || "",
            gender: "",
          },
          0,
          6
        );

        if (response.data.total_elements <= 2) {
          response = await filterCandidateProfile(
            {
              firstName: "",
              lastName: "",
              education: "",
              provinceCode: "",
              gender: "",
            },
            0,
            6
          );
        }

        setRelativeCandidates(
          response?.data?.content?.map((item) =>
            handleFindCandidateForShortCard(item)
          )
        );
      } catch (error) {
        console.error("Error fetching relative candidates:", error);
      }
    };

    fetchRelativeCandidates();
  }, [candidate]);

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
            email={candidate.email}
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

            <h3 className="text-xl font-medium text-black mt-2 mb-6 ml-6">
              Relative Candidates:
            </h3>
            <Grid container spacing={3}>
              {relativeCandidates.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <CandidateShortCard candidate={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
