import { BriefcaseBusiness, Timer, Wallet } from "lucide-react";

const JobOverview = ({
  salaryRange,
  education,
  salaryType,
  createdAt,
  expiredAt,
  jobType,
  experience,
}) => {
  const overviewItems = [
    {
      icon: <Timer className="w-10 h-10 text-blue-500 mx-auto" />,
      label: "Job Posted",
      value: createdAt,
    },
    {
      icon: <Timer className="w-10 h-10 text-red-500 mx-auto" />,
      label: "Job Expire In",
      value: expiredAt,
    },
    {
      icon: <BriefcaseBusiness className="w-10 h-10 text-green-500 mx-auto" />,
      label: "Education",
      value: education,
    },
    {
      icon: <Wallet className="w-10 h-10 text-yellow-500 mx-auto" />,
      label: "Salary",
      value: `${salaryRange}`,
    },
    {
      icon: <Wallet className="w-10 h-10 text-purple-500 mx-auto" />,
      label: "Salary Type",
      value: salaryType,
    },
    {
      icon: <BriefcaseBusiness className="w-10 h-10 text-indigo-500 mx-auto" />,
      label: "Job Type",
      value: jobType,
    },
    experience && {
      icon: <BriefcaseBusiness className="w-10 h-10 text-teal-500 mx-auto" />,
      label: "Experience",
      value: experience,
    },
  ].filter(Boolean);

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-black mb-6">Job Overview</h3>
      <div className="grid grid-cols-3 gap-y-8 gap-x-6 text-center">
        {overviewItems.map((item, index) => (
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

export default JobOverview;
