import { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useCandidateProfileContext } from "@/pages/CandidateCreate/CandidateCreateRoutes";

const AvatarCandidateForm = ({ fn }) => {
  const { avatar, setAvatar } = useCandidateProfileContext();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(avatar || null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  const handleSave = async () => {
    try {
      await fn(file);
      setAvatar(URL.createObjectURL(file));
    } catch (err) {
      console.error(err);
      return;
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      mt={8}
    >
      <Stack spacing={3} alignItems="center">
        <Paper
          variant="outlined"
          sx={{
            width: 240,
            height: 240,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
            borderStyle: "dashed",
            p: 2,
            textAlign: "center",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
          }}
          onClick={() => document.getElementById("avatar-input").click()}
        >
          <input
            type="file"
            accept="image/*"
            id="avatar-input"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {preview ? (
            <img
              src={preview}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          ) : (
            <>
              <CloudUploadIcon
                sx={{ fontSize: 48, color: "text.disabled", mb: 2 }}
              />
              <Typography variant="body2" fontWeight="medium">
                Browse photo or drop here
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                A photo larger than 400 pixels works best. Max photo size 5 MB.
              </Typography>
            </>
          )}
        </Paper>

        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!file}
          sx={{ textTransform: "none" }}
        >
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
};

export default AvatarCandidateForm;
