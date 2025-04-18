function JobHeader({ title, employerLogo, jobType, expiredAt }) {
  return (
    <section className="flex flex-wrap gap-6 justify-between items-center px-10 py-6 w-full max-md:px-4 max-md:py-4">
      <div className="flex flex-wrap gap-4 items-center">
        <img
          src={employerLogo}
          className="object-contain w-16 h-16 rounded-full"
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
        <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
          Apply Now
        </button>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <span>Job expires in:</span>
          <span className="font-medium text-red-500">{expiredAt}</span>
        </div>
      </div>
    </section>
  );
}

export default JobHeader;
