import { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useProfileContext } from "@/context/ProfileContext";
import { useAuth } from "@/hooks/useAuth";

const ChangeImageForm = ({ fn }) => {
  const { updateUser } = useAuth();
  const { image, setImage } = useProfileContext();
  const [preview, setPreview] = useState(image || null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  useEffect(() => {
    if (typeof image === "string") {
      setPreview(image);
      return;
    } else if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const setImageResponse = await fn(image);
      if (setImageResponse?.status === 200) {
        await updateUser();
      }
    } catch (err) {
      console.error(err);
      return;
    } finally {
      setLoading(false);
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
      <Backdrop sx={{ color: "#fff", zIndex: 1301 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
          onClick={() => document.getElementById("image-input").click()}
        >
          <input
            type="file"
            accept="image/*"
            id="image-input"
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
          disabled={!image}
          className="w-full h-15 text-white px-4 py-4 mt-5 mb-5 rounded text-lg font-sans transition-all duration-200"
        >
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
};

export default ChangeImageForm;
