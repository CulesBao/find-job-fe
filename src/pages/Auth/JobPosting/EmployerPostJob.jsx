import React, { useState } from "react";
import { Box, TextField, Button, Select, MenuItem, Stack, FormControl, InputLabel } from "@mui/material";
import JobType from "@/constants/JobType";
import SalaryType from "@/constants/SalaryType";
import Currency from "@/constants/Currency"; // Import Currency
import Education from "@/constants/Education"; // Import Education

const EmployerPostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    education: "",
    expired_at: "",
    job_type: "",
    max_salary: "",
    min_salary: "",
    salary_unit: "k", // Default unit is 'k'
    responsibility: "",
    salary_type: "",
    currency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: "" })); // Xóa lỗi khi người dùng nhập
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.title) newErrors.title = "Please enter the job title.";
    if (!formData.description) newErrors.description = "Please enter the job description.";
    if (!formData.education) newErrors.education = "Please select the education requirement.";
    if (!formData.expired_at) newErrors.expired_at = "Please select the expiration date.";
    if (!formData.job_type) newErrors.job_type = "Please select the job type.";
    if (!formData.salary_type) newErrors.salary_type = "Please select the salary type.";
    if (!formData.min_salary) newErrors.min_salary = "Please enter the minimum salary.";
    if (!formData.max_salary) newErrors.max_salary = "Please enter the maximum salary.";
    if (!formData.currency) newErrors.currency = "Please select the currency.";
    if (!formData.responsibility) newErrors.responsibility = "Please enter the job responsibility.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Job Post Data:", formData);
      alert("Job posted successfully!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "100%",
        margin: "20px auto",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: 4,
      }}
    >
      <Stack spacing={2.25}>
        {/* Job Title */}
        <TextField
          label="Job Title"
          value={formData.title}
          onChange={handleChange("title")}
          error={!!errors.title}
          helperText={errors.title}
          required
          fullWidth
        />

        {/* Education */}
        <FormControl fullWidth required error={!!errors.education}>
          <InputLabel id="education-label">Education Requirement</InputLabel>
          <Select
            labelId="education-label"
            value={formData.education}
            onChange={handleChange("education")}
            label="Education Requirement"
          >
            {Object.values(Education).map((edu) => (
              <MenuItem key={edu.code} value={edu.code}>
                {edu.name}
              </MenuItem>
            ))}
          </Select>
          <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.education}</p>
        </FormControl>

        {/* Expiration Date */}
        <TextField
          label="Expiration Date"
          type="date"
          value={formData.expired_at}
          onChange={handleChange("expired_at")}
          error={!!errors.expired_at}
          helperText={errors.expired_at}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />

        {/* Job Type */}
        <FormControl fullWidth required error={!!errors.job_type}>
          <InputLabel id="job-type-label">Job Type</InputLabel>
          <Select
            labelId="job-type-label"
            value={formData.job_type}
            onChange={handleChange("job_type")}
            label="Job Type"
          >
            {Object.values(JobType).map((job) => (
              <MenuItem key={job.upperCaseName} value={job.upperCaseName}>
                {job.name}
              </MenuItem>
            ))}
          </Select>
          <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.job_type}</p>
        </FormControl>

        {/* Salary Type */}
        <FormControl fullWidth required error={!!errors.salary_type}>
          <InputLabel id="salary-type-label">Salary Type</InputLabel>
          <Select
            labelId="salary-type-label"
            value={formData.salary_type}
            onChange={handleChange("salary_type")}
            label="Salary Type"
          >
            {Object.values(SalaryType).map((salary) => (
              <MenuItem key={salary.upperCaseName} value={salary.upperCaseName}>
                {salary.name}
              </MenuItem>
            ))}
          </Select>
          <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.salary_type}</p>
        </FormControl>

        {/* Min Salary, Max Salary, and Salary Unit */}
        <Stack direction="row" spacing={2.25} width="100%">
          <TextField
            label="Minimum Salary"
            type="number"
            value={formData.min_salary}
            onChange={handleChange("min_salary")}
            error={!!errors.min_salary}
            helperText={errors.min_salary}
            required
            fullWidth
          />
          <TextField
            label="Maximum Salary"
            type="number"
            value={formData.max_salary}
            onChange={handleChange("max_salary")}
            error={!!errors.max_salary}
            helperText={errors.max_salary}
            required
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="salary-unit-label">Unit</InputLabel>
            <Select
              labelId="salary-unit-label"
              value={formData.salary_unit}
              onChange={handleChange("salary_unit")}
              label="Unit"
            >
              <MenuItem value="k">k (thousand)</MenuItem>
              <MenuItem value="m">m (million)</MenuItem>
              <MenuItem value="b">b (billion)</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {/* Currency */}
        <FormControl fullWidth required error={!!errors.currency}>
          <InputLabel id="currency-label">Currency</InputLabel>
          <Select
            labelId="currency-label"
            value={formData.currency}
            onChange={handleChange("currency")}
            label="Currency"
          >
            {Object.values(Currency).map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                {currency.name} ({currency.symbol})
              </MenuItem>
            ))}
          </Select>
          <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.currency}</p>
        </FormControl>

        {/* Job Description */}
        <TextField
          label="Job Description"
          value={formData.description}
          onChange={handleChange("description")}
          error={!!errors.description}
          helperText={errors.description}
          multiline
          rows={4}
          required
          fullWidth
        />

        {/* Job Responsibility */}
        <TextField
          label="Job Responsibility"
          value={formData.responsibility}
          onChange={handleChange("responsibility")}
          error={!!errors.responsibility}
          helperText={errors.responsibility}
          multiline
          rows={4}
          required
          fullWidth
        />
      </Stack>

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Post Job
      </Button>
    </Box>
  );
};

export default EmployerPostJob;