import React, { useState } from "react";

export default function FindJobFrame() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFindJobClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 200); // Reset trạng thái sau 200ms
  };

  return (
    <div className="main-container w-full h-[794px] bg-[rgba(241,242,244,0.6)] relative mx-auto my-0">
      <div className="flex w-[1320px] h-[382px] justify-between items-center relative z-[23] mt-[100px] mx-auto">
        <div className="flex w-[679px] flex-col gap-[32px] items-start shrink-0 flex-nowrap relative">
          <div className="flex w-[652px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[1]">
            <span className="flex w-[652px] h-[128px] justify-start items-start shrink-0 font-['Inter'] text-[56px] font-medium leading-[64px] text-[#18191c] relative text-left z-[2]">
              Find a job that suits your interest & skills.
            </span>
            <span className="flex w-[536px] h-[56px] justify-start items-start shrink-0 font-['Inter'] text-[18px] font-normal leading-[28px] text-[#5e6670] relative text-left z-[3]">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit vestibulum.
            </span>
          </div>
          <div className="flex w-[679px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[4]">
            <div className="flex w-[679px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4e5e8] relative shadow-[0_12px_40px_0_rgba(0,43,109,0.04)] z-[5]">
              <div className="flex w-[512px] justify-center items-center shrink-0 flex-nowrap relative z-[6]">
                <input
                  type="text"
                  value={jobTitle}
                  onChange={handleJobTitleChange}
                  placeholder="Job title, Keyword..."
                  className="w-[288px] h-[56px] bg-[#fff] rounded-[5px] pl-[54px] font-['Inter'] text-[16px] text-[#9199a3] border-none outline-none"
                />
                <div className="w-px h-[32px] shrink-0 bg-[#e4e5e8] relative z-10" />
                <input
                  type="text"
                  value={location}
                  onChange={handleLocationChange}
                  placeholder="Your Location"
                  className="w-[224px] h-[56px] bg-[#fff] rounded-[5px] pl-[54px] font-['Inter'] text-[16px] text-[#9199a3] border-none outline-none"
                />
              </div>
              <button
                onClick={handleFindJobClick}
                className={`flex w-[131px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[12px] justify-center items-center shrink-0 flex-nowrap rounded-[4px] relative z-[14] ${
                  isButtonClicked ? "cursor-wait" : "cursor-pointer"
                } bg-[#0a65cc] hover:bg-[#084a99]`}
              >
                <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left capitalize whitespace-nowrap z-[15]">
                  Find Job
                </span>
              </button>
            </div>
            <div className="flex w-[471px] items-start shrink-0 flex-nowrap relative z-[16]">
              <span className="flex w-[79px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[20px] text-[#9199a3] relative text-center whitespace-nowrap z-[17]">
                Suggestion:
              </span>
              <span className="flex w-[66px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[20px] text-[#474c54] relative text-center whitespace-nowrap z-[18]">
                Designer,
              </span>
              <span className="flex w-[84px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[20px] text-[#474c54] relative text-center whitespace-nowrap z-[19]">
                Programming,
              </span>
              <span className="flex w-[122px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[20px] text-[#0a65cc] relative text-center whitespace-nowrap z-20">
                Digital Marketing,
              </span>
              <span className="flex w-[46px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[20px] text-[#474c54] relative text-center whitespace-nowrap z-[21]">
                Video,
              </span>
              <span className="flex w-[74px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[20px] text-[#474c54] relative text-center whitespace-nowrap z-[22]">
                Animation.
              </span>
            </div>
          </div>
        </div>
        <div className="w-[492px] h-[382px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/VCvWaYjZe3.png)] bg-cover bg-no-repeat relative overflow-hidden z-[23]" />
      </div>
    </div>
  );
}