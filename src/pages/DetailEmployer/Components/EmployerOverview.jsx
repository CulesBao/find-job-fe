import { MapPin, Globe } from "lucide-react";

const EmployerOverview = ({ websiteUrl, districtId, provinceId }) => {
  const location = `${districtId}, ${provinceId}`;

  const normalizedUrl = websiteUrl && !/^https?:\/\//i.test(websiteUrl)
    ? `https://${websiteUrl}`
    : websiteUrl;

  const infoItems = [
    {
      icon: normalizedUrl ? (
        <a
          href={normalizedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Globe className="w-10 h-10 text-blue-500 mx-auto hover:scale-105 transition-transform" />
        </a>
      ) : (
        <Globe className="w-10 h-10 text-gray-400 mx-auto" />
      ),
      label: "Website",
      value: normalizedUrl ? (
        <a
          href={normalizedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-800 hover:underline block truncate max-w-[150px] mx-auto pt-1"
          title={websiteUrl}
        >
          {websiteUrl}
        </a>
      ) : (
        "N/A"
      ),
    },
    {
      icon: <MapPin className="w-10 h-10 text-orange-500 mx-auto" />,
      label: "Location",
      value: <span className="text-sm font-medium text-gray-800">{location}</span>,
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
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerOverview;
