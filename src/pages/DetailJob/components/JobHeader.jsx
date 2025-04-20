import { useAuth } from "@/hooks/useAuth";
import { BookmarkBorder } from "@mui/icons-material";
import { Box } from "@mui/material";

function JobHeader({ title, employerLogo, jobType, expiredAt }) {
  const { user } = useAuth();
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
              {jobType.replace("_", " ")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        {user?.role == "CANDIDATE" && (
          <div className="flex items-center gap-2">
            <Box sx={{ padding: 1.5, borderRadius: 1, backgroundColor: "#EEE" }}>
              <BookmarkBorder 
                sx={{ width: 30, height: 30, color: "primary.main" }}
              />
            </Box>
          <button className="px-19 py-4 text-1xl font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
            Apply Now →
          </button>
          </div>
        )}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <span>Job expires in:</span>
          <span className="font-medium text-red-500">{expiredAt}</span>
        </div>
      </div>
    </section>
  );
}

export default JobHeader;
