import { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { getAllProvinces } from "@/services/addressService";

const ProvinceSelect = ({ value, onChange }) => {
  const [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await getAllProvinces();
      setProvinceList(response.data);
    };

    fetchProvinces();
  }, []);

  return (
    <TextField
      select
      label="City/Province"
      value={value || ""}
      onChange={onChange}
      fullWidth
      sx={{ bgcolor: "background.paper", borderRadius: "5px" }}
    >
      {provinceList.map((province) => (
        <MenuItem key={province.code} value={province.code}>
          {province.full_name_en}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ProvinceSelect;
