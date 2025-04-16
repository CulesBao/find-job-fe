import EmployerSettingHeader from "../../components/form/profile/EmployerSettingHeader";
import { Outlet } from "react-router-dom";

const EmployerSettingPage = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Setting</h1>
      <EmployerSettingHeader />
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployerSettingPage;
