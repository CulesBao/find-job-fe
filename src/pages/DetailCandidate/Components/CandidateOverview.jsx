import { Calendar, GraduationCap, Phone, MapPin } from "lucide-react";

const CandidateOverview = ({
  dateOfBirth,
  education,
  phoneNumber,
  districtId,
  provinceId,
}) => {
  const location = `${districtId}, ${provinceId}`; 

  const infoItems = [
    {
      icon: <Calendar className="w-10 h-10 text-blue-500 mx-auto" />,
      label: "Date of Birth",
      value: dateOfBirth,
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-green-500 mx-auto" />,
      label: "Education",
      value: education,
    },
    {
      icon: <Phone className="w-10 h-10 text-indigo-500 mx-auto" />,
      label: "Phone Number",
      value: phoneNumber,
    },
    {
      icon: <MapPin className="w-10 h-10 text-orange-500 mx-auto" />,
      label: "Location",
      value: location, 
    },
  ];

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-black mb-6">Candidate Info</h3>
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


export default CandidateOverview;
