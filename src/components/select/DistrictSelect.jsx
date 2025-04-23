import { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { getDistrictsByProvinceId } from "@/services/addressService";

const DistrictSelect = ({ provinceCode, value, onChange }) => {
  const [districtList, setDistrictList] = useState([]);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (!provinceCode) {
        setDistrictList([]);
        return;
      }
      const response = await getDistrictsByProvinceId(provinceCode);
      setDistrictList(response.data);
    };

    fetchDistricts();
  }, [provinceCode]);

  return (
    <TextField
      select
      label="District"
      value={value || ""}
      onChange={onChange}
      fullWidth
      disabled={!provinceCode}
      sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
    >
      {districtList.map((district) => (
        <MenuItem key={district.code} value={district.code}>
          {district.full_name_en}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DistrictSelect;
