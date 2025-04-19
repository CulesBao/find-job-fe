import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import JobType from "@/constants/JobType";
import SalaryType from "@/constants/SalaryType";
import Currency from "@/constants/Currency";
import Education from "@/constants/Education";

const EmployerPostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    education: "",
    expired_at: "",
    job_type: "",
    max_salary: 0,
    min_salary: 0,
    responsibility: "",
    salary_type: "",
    currency: "",
    salary_unit: "",
  });

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    let { salary_unit, min_salary, max_salary, ...rest } = formData;
    min_salary = handleSalaryUnitChange(min_salary);
    max_salary = handleSalaryUnitChange(max_salary);

    const newData = {
      ...rest,
      min_salary,
      max_salary,
    };
    console.log(newData);
    event.preventDefault();
  };
  const handleMinMaxSalaryChange = (key) => (event) => {
    const value = parseFloat(event.target.value) || 0;
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSalaryUnitChange = (value) => {
    const { salary_unit } = formData;
    let multiplier = 1;
    if (salary_unit === "k") multiplier = 1000;
    else if (salary_unit === "m") multiplier = 1000000;
    else if (salary_unit === "b") multiplier = 1000000000;

    return value * multiplier;
  };

  const selectFields = [
    {
      id: "education",
      label: "Education requirement",
      value: formData.education,
      options: Object.values(Education).map((edu) => ({
        value: edu.upperCaseName,
        label: edu.name,
      })),
    },
    {
      id: "job_type",
      label: "Job type",
      value: formData.job_type,
      options: Object.values(JobType).map((job) => ({
        value: job.upperCaseName,
        label: job.name,
      })),
    },
    {
      id: "salary_type",
      label: "Salary type",
      value: formData.salary_type,
      options: Object.values(SalaryType).map((salary) => ({
        value: salary.upperCaseName,
        label: salary.name,
      })),
    },
    {
      id: "currency",
      label: "Currency",
      value: formData.currency,
      options: Object.values(Currency).map((currency) => ({
        value: currency.code,
        label: `${currency.name} (${currency.symbol})`,
      })),
    },
    {
      id: "salary_unit",
      label: "Unit",
      value: formData.salary_unit,
      options: [
        { value: "N/A", label: "N/A" },
        { value: "k", label: "k (thousand)" },
        { value: "m", label: "m (million)" },
        { value: "b", label: "b (billion)" },
      ],
    },
  ];

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField
          label="Job title"
          value={formData.title}
          onChange={handleChange("title")}
          required
          fullWidth
        />

        <Stack direction="row" spacing={2}>
          {selectFields.slice(0, 2).map((field) => (
            <FormControl fullWidth required key={field.id}>
              <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
              <Select
                labelId={`${field.id}-label`}
                value={field.value}
                onChange={handleChange(field.id)}
                label={field.label}
              >
                {field.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Stack>

        <TextField
          label="Expiration date"
          type="date"
          value={formData.expired_at}
          onChange={handleChange("expired_at")}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
        <Stack direction="row" spacing={2}>
          {selectFields.slice(2).map((field) => (
            <FormControl fullWidth required key={field.id}>
              <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
              <Select
                labelId={`${field.id}-label`}
                value={field.value}
                onChange={handleChange(field.id)}
                label={field.label}
              >
                {field.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Minimum salary"
            type="number"
            value={formData.min_salary}
            onChange={handleMinMaxSalaryChange("min_salary")}
            required
            fullWidth
          />
          <TextField
            label="Maximum salary"
            type="number"
            value={formData.max_salary}
            onChange={handleMinMaxSalaryChange("max_salary")}
            required
            fullWidth
          />
        </Stack>

        <TextField
          label="Job description"
          value={formData.description}
          onChange={handleChange("description")}
          multiline
          rows={6}
          required
          fullWidth
        />

        <TextField
          label="Job responsibility"
          value={formData.responsibility}
          onChange={handleChange("responsibility")}
          multiline
          rows={6}
          required
          fullWidth
        />
      </Stack>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Post Job
      </Button>
    </Box>
  );
};

export default EmployerPostJob;
