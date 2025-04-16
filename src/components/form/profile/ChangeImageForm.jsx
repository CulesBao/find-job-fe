import { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useProfileContext } from "@/components/context/ProfileContext";

const ChangeImageForm = ({ fn }) => {
  const { image, setImage } = useProfileContext();
  const [preview, setPreview] = useState(image || null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  const handleSave = async () => {
    setLoading(true);
    try {
      await fn(image);
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
          sx={{ textTransform: "none" }}
        >
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
};

export default ChangeImageForm;
