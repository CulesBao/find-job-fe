import CandidateSettingHeader from "./CandidateSettingHeader";
import { Outlet } from "react-router-dom";

const CandidateSettingLayout = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Setting</h1>
      <CandidateSettingHeader />
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default CandidateSettingLayout;