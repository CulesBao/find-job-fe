import { Dialog, DialogContent, DialogTitle, Button, TextField, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useState } from "react";
import { Check } from "@mui/icons-material";

function ApplicationPopUp({ open, onClose, title }) {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
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
      <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
        />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
          <Button variant="outlined" onClick={onClose}>Cancel</Button>
          <Button variant="contained" color="primary" endIcon={<Check />}>
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ApplicationPopUp;
