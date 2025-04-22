import { MapPin, Globe } from "lucide-react";

const EmployerOverview = ({ websiteUrl, districtId, provinceId }) => {
  const location = `${districtId}, ${provinceId}`;

  const infoItems = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500 mx-auto" />,
      label: "Website",
      value: websiteUrl || "N/A",
    },
    {
      icon: <MapPin className="w-10 h-10 text-orange-500 mx-auto" />,
      label: "Location",
      value: location,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg">
      <h3 className="text-lg font-semibold text-black mb-6">Company Info</h3>
      <div className="grid grid-cols-2 gap-y-8 gap-x-6 text-center">
        {infoItems.map((item, index) => (
          <div key={index}>
            {item.icon}
            <p className="text-xs text-gray-400 uppercase mt-2">{item.label}</p>
            <p className="text-sm font-medium text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerOverview;
