import { useState, useEffect } from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "@/services/addressService";

export default function ProvinceSelectButton() {
  const [loadingProvinces, setLoadingProvinces] = useState(false);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvinceCode, setSelectedProvinceCode] = useState("");
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  const [error, setError] = useState("");

  const extractArray = (res) => {
    if (Array.isArray(res)) {
      return res;
    } else if (res && res.data && Array.isArray(res.data)) {
      return res.data;
    }
    return null;
  };

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        setLoadingProvinces(true);
        setError("");
        const res = await getAllProvinces();

        const provincesData = extractArray(res);
        setProvinces(provincesData);
      } catch (err) {
        setError(err.message || "Lỗi khi tải danh sách tỉnh/thành phố");
      } finally {
        setLoadingProvinces(false);
      }
    };
    fetchProvinces();
  }, []);

  const fetchDistricts = async (provinceId) => {
    try {
      setLoadingDistricts(true);
      setError("");
      const res = await getDistrictsByProvinceId(provinceId);

      const districtsData = extractArray(res);
      setDistricts(districtsData);
    } catch (err) {
      setError(err.message || "Lỗi khi tải danh sách quận/huyện");
      setDistricts([]);
    } finally {
      setLoadingDistricts(false);
    }
  };

  const handleProvinceChange = (event) => {
    const provinceCode = event.target.value;
    setSelectedProvinceCode(provinceCode);
    setSelectedDistrictCode("");
    fetchDistricts(provinceCode);
  };

  const handleDistrictChange = (event) => {
    const districtCode = event.target.value;
    setSelectedDistrictCode(districtCode);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 400 }}>
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Province/City</InputLabel>
        <Select
          value={selectedProvinceCode}
          onChange={handleProvinceChange}
          disabled={loadingProvinces}
          label="Province/City"
        >
          {loadingProvinces ? (
            <MenuItem disabled>
              <CircularProgress size={20} />
            </MenuItem>
          ) : (
            provinces.map((province) => (
              <MenuItem key={province.code} value={province.code}>
                {province.full_name_en}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>District</InputLabel>
        <Select
          value={selectedDistrictCode}
          onChange={handleDistrictChange}
          disabled={!selectedProvinceCode || loadingDistricts}
          label="District"
        >
          {loadingDistricts ? (
            <MenuItem disabled>
              <CircularProgress size={20} />
            </MenuItem>
          ) : districts.length > 0 ? (
            districts.map((district) => (
              <MenuItem key={district.code} value={district.code}>
                {district.full_name_en}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>Not found data</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
