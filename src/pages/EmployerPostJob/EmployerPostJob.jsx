import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "@/services/jobService";

const EmployerPostJob = ({ fn }) => {
  const navigate = useNavigate();
  const { jobId } = useParams();

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
  useEffect(() => {
    if (jobId) {
      const fetchJobDetails = async () => {
        try {
          const getJobResponse = await getJobById(jobId);
          if (getJobResponse.status === 200) {
            const jobData = getJobResponse.data;

            setFormData({
              title: jobData.title,
              description: jobData.description,
              education: jobData.education,
              expired_at: jobData.expired_at.split("T")[0],
              job_type: jobData.job_type,
              max_salary: jobData.max_salary,
              min_salary: jobData.min_salary,
              responsibility: jobData.responsibility,
              salary_type: jobData.salary_type,
              currency: jobData.currency,
            });

            if (jobData.max_salary >= 1e9 && jobData.min_salary >= 1e9) {
              setFormData((prev) => ({
                ...prev,
                max_salary: prev.max_salary / 1e9,
                min_salary: prev.min_salary / 1e9,
                salary_unit: "b",
              }));
            } else if (jobData.max_salary >= 1e6 && jobData.min_salary >= 1e6) {
              setFormData((prev) => ({
                ...prev,
                max_salary: prev.max_salary / 1e6,
                min_salary: prev.min_salary / 1e6,
                salary_unit: "m",
              }));
            } else if (jobData.max_salary >= 1e3 && jobData.min_salary >= 1e3) {
              setFormData((prev) => ({
                ...prev,
                max_salary: prev.max_salary / 1e3,
                min_salary: prev.min_salary / 1e3,
                salary_unit: "k",
              }));
            } else {
              setFormData((prev) => ({
                ...prev,
                salary_unit: "N/A",
              }));
            }
          }
        } catch (error) {
          console.error("Error fetching job details:", error);
        }
      };
      fetchJobDetails();
    }
  }, [jobId]);

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async () => {
    let { salary_unit, min_salary, max_salary, ...rest } = formData;
    min_salary = handleSalaryUnitChange(min_salary);
    max_salary = handleSalaryUnitChange(max_salary);
    salary_unit = handleSalaryUnitChange(salary_unit);

    const newData = {
      ...rest,
      min_salary,
      max_salary,
      salary_unit,
    };

    try {
      const res = jobId ? await fn(jobId, newData) : await fn(newData);
      if (res.status === 201 || res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
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
    <>
      <h1 className="text-2xl font-bold mb-4">
        {jobId ? "Edit job" : "Post a job"}
      </h1>
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
          variant="contained"
          sx={{ width: "100%", height: 50, borderRadius: 2, mt: 3 }}
          onClick={handleSubmit}
        >
          Post Job
        </Button>
      </Box>
    </div>
  );
};

export default EmployerPostJob;
