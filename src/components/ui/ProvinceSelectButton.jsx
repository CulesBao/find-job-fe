/* eslint-disable unused-imports/no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { getAllProvinces, getDistrictsByProvinceId } from "@/services/addressService";

export default function SelectCombo() {
  const [loadingProvinces, setLoadingProvinces] = useState(false);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvinceCode, setSelectedProvinceCode] = useState("");
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  const [error, setError] = useState("");

  // Nếu cần dùng đối tượng tỉnh/quận để hiển thị thêm thông tin
  const selectedProvince = provinces.find((p) => p.code === selectedProvinceCode);
  const selectedDistrict = districts.find((d) => d.code === selectedDistrictCode);

  // Hàm chuyển đổi dữ liệu trả về thành mảng nếu cần
  const extractArray = (res) => {
    if (Array.isArray(res)) {
      return res;
    } else if (res && res.data && Array.isArray(res.data)) {
      return res.data;
    }
    return null;
  };

  // Fetch danh sách tỉnh từ API
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        setLoadingProvinces(true);
        setError("");
        const res = await getAllProvinces();
        console.log("API response for provinces:", res);

        const provincesData = extractArray(res);
        if (!provincesData) {
          throw new Error("Không có dữ liệu tỉnh/thành phố để hiển thị");
        }

        setProvinces(provincesData);
      } catch (err) {
        console.error("Error fetching provinces:", err);
        setError(err.message || "Lỗi khi tải danh sách tỉnh/thành phố");
      } finally {
        setLoadingProvinces(false);
      }
    };
    fetchProvinces();
  }, []);

  // Fetch danh sách huyện dựa vào provinceId từ API
  const fetchDistricts = async (provinceId) => {
    try {
      setLoadingDistricts(true);
      setError("");
      const res = await getDistrictsByProvinceId(provinceId);
      console.log(`API response for districts (provinceId: ${provinceId}):`, res);

      const districtsData = extractArray(res);
      if (!districtsData) {
        throw new Error("Không có dữ liệu quận/huyện để hiển thị");
      }

      setDistricts(districtsData);
    } catch (err) {
      console.error("Error fetching districts:", err);
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

      {/* ComboBox chọn Tỉnh/Thành phố */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Tỉnh/Thành phố</InputLabel>
        <Select
          value={selectedProvinceCode}
          onChange={handleProvinceChange}
          disabled={loadingProvinces}
          label="Tỉnh/Thành phố"
        >
          {loadingProvinces ? (
            <MenuItem disabled>
              <CircularProgress size={20} />
            </MenuItem>
          ) : (
            provinces.map((province) => (
              <MenuItem key={province.code} value={province.code}>
                {province.full_name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>

      {/* ComboBox chọn Huyện/Quận */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Huyện/Quận</InputLabel>
        <Select
          value={selectedDistrictCode}
          onChange={handleDistrictChange}
          disabled={!selectedProvinceCode || loadingDistricts}
          label="Huyện/Quận"
        >
          {loadingDistricts ? (
            <MenuItem disabled>
              <CircularProgress size={20} />
            </MenuItem>
          ) : districts.length > 0 ? (
            districts.map((district) => (
              <MenuItem key={district.code} value={district.code}>
                {district.full_name}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>Chưa có dữ liệu</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
