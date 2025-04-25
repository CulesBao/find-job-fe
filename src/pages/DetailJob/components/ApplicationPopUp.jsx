import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
  IconButton,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useEffect, useState } from "react";

function ApplicationPopUp({ open, onClose, title, onApply }) {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  useEffect(() => {
    return () => {
      if (resume) {
        URL.revokeObjectURL(resume);
      }
    };
  }, [resume]);

  const handleApply = async () => {
    try {
      setLoading(true);
      await onApply(resume, coverLetter); 
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Apply Job: {title}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="body2">Choose Resume</Typography>
        <Button
          variant="outlined"
          component="label"
          startIcon={<UploadFileIcon />}
        >
          {resume ? resume.name : "Select File"}
          <input
            hidden
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </Button>

        <Typography variant="body2">Cover Letter</Typography>
        <TextField
          multiline
          rows={5}
          placeholder="Write down your biography here. Let the employers know who you are..."
          variant="outlined"
          fullWidth
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleApply} disabled={loading}>
            Apply Now
          </Button>
        </div>
      </DialogContent>
      <Backdrop sx={{ color: "#fff", zIndex: 1301 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Dialog>
  );
}

export default ApplicationPopUp;
