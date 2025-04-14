import { useState } from "react";
import { Search, Notifications, Apps } from "@mui/icons-material";
import Logo from "../layout/Logo";

const countries = [
  { code: "in", name: "India" },
  { code: "us", name: "United States" },
  { code: "jp", name: "Japan" },
  { code: "vn", name: "Vietnam" },
  { code: "de", name: "Germany" },
];

function SearchJob() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="flex w-[1920px] px-[300px] py-5 justify-between items-center">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 ">
        <Logo />
      </div>

      {/* Search Section */}
      <div className="absolute top-14 left-112 flex items-center w-[668px] h-[50px] bg-gray-50 border-gray-100 rounded-md px-[20px] py-[9px]  ">
        {/* Country Select */}
        <div className=" flex w-[392px] h-[50px] px-[252px] pl-[16px] py-[9px] items-center">
          <img
            src={`https://flagcdn.com/${selectedCountry.code}.svg`}
            alt={selectedCountry.name}
            className="w-5 h-5 rounded-sm"
          />
          <select
            value={selectedCountry.code}
            onChange={(e) =>
              setSelectedCountry(
                countries.find((c) => c.code === e.target.value)
              )
            }
            className="text-sm font-medium bg-transparent focus:outline-none"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="absolute top-4 left-46 flex  items-center gap-2 pl-3">
          <Search fontSize="small" className="text-gray-400" />
          <input
            type="text"
            placeholder="Job title, keyword, company"
            className="outline-none text-sm w-64 bg-transparent placeholder-gray-400"
          />
        </div>
      </div>

      <div className=" absolute top-16 left-380 flex items-center gap-4">
        <div className="relative">
          <Notifications fontSize="small" className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></span>
        </div>
        <Apps className="text-gray-700 text-2xl" />
      </div>
    </div>
  );
}

export default SearchJob;
