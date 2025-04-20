import { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
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
      minHeight="50vh"
      mt={8}
    >
      <Backdrop sx={{ color: "#fff", zIndex: 1301 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack spacing={3} alignItems="center">
        <Paper
          variant="outlined"
          sx={{
            width: 260,
            height: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "5px solid rgba(0, 0, 0, 0.1)",
            p: 0,
            textAlign: "center",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              borderColor: "#1976d2",
              boxShadow: "0 0 10px rgba(25, 118, 210, 0.4)",
            },
            "&:hover .overlay": {
              opacity: 1,
              visibility: "visible",
            },
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
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <CloudUploadIcon sx={{ fontSize: 64, color: "text.disabled" }} />
          )}

          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              opacity: 0,
              visibility: "hidden",
              transition: "all 0.3s ease",
              fontWeight: "500",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Change your Photo
          </Box>
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
