import { useAuth } from "@/hooks/useAuth";
import ApplicationPopUp from "./ApplicationPopUp";
import { useEffect, useState } from "react";
import { getStatus, createApplication } from "@/services/applicationService";

function JobHeader({ jobId, title, employerLogo, jobType, expiredAt }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const { user } = useAuth();

  const handleApply = async () => {
    try {
      if (!isApplied) {
        const response = await createApplication(jobId);
        if (response.status === 200) {
          setIsApplied(true);
          setOpenPopup(false);
        }
      }
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  useEffect(() => {
    const checkApplyStatus = async () => {
      try {
        const response = await getStatus(jobId);
        setIsApplied(response.data);
      } catch (error) {
        console.error("Error checking application status:", error);
      }
    };

    if (user?.role === "CANDIDATE") {
      checkApplyStatus();
    }
  }, [jobId, user]);

  return (
    <section className="flex flex-wrap gap-6 justify-between items-center pr-10 py-6 w-full max-md:px-4 max-md:py-4">
      <div className="flex flex-wrap gap-4 items-center">
        <img
          src={employerLogo}
          className="w-20 h-20 rounded-full"
          alt="Company logo"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
          <div className="flex gap-2 mt-1">
            <span className="px-2 py-1 text-sm text-blue-600 bg-indigo-50 rounded-full">
              {jobType}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        {user?.role === "CANDIDATE" && (
          <div className="flex items-center gap-2">
            {isApplied ? (
              <button
                disabled
                className="px-19 py-4 text-1xl font-medium text-white bg-gray-400 rounded cursor-not-allowed"
              >
                Applied
              </button>
            ) : (
              <button
                onClick={() => setOpenPopup(true)}
                className="px-19 py-4 text-1xl font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Apply Now →
              </button>
            )}
          </div>
        )}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <span>Job expires in:</span>
          <span className="font-medium text-red-500">{expiredAt}</span>
        </div>
      </div>

      <ApplicationPopUp
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        title={title}
        onApply={handleApply}
      />
    </section>
  );
}

export default JobHeader;
