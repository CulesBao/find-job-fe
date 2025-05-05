import React, { useState } from "react";

export default function Frame() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSignInClick = () => {
    console.log("Sign In button clicked!");
  };

  const handlePostJobClick = () => {
    console.log("Post a Job button clicked!");
  };

  return (
    <div className="main-container flex w-full pt-[20px] pr-[50px] pb-[20px] pl-[50px] justify-between items-center flex-nowrap bg-[#fff] relative mx-auto my-0">
      {/* Logo and Search */}
      <div className="flex w-[826px] gap-[32px] justify-center items-center shrink-0 flex-nowrap relative">
        <div className="flex w-[126px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div
            className="w-[40px] h-[40px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/3b7jw5r9VS.png)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[2]"
            alt="Logo"
          />
          <span className="h-[40px] shrink-0 basis-auto font-['Inter'] text-[24px] font-semibold leading-[40px] text-[#18191c] relative text-left whitespace-nowrap z-[3]">
            MyJob
          </span>
        </div>
        <div className="w-[668px] h-[50px] shrink-0 bg-[#fff] rounded-[5px] border-solid border border-[#e4e5e8] relative z-[4]">
          <div className="flex w-full gap-[20px] justify-center items-center flex-nowrap relative z-[5] mt-[9px] mr-0 mb-0 ml-[24px]">
            <div className="flex w-[97px] gap-[12px] justify-center items-center shrink-0 flex-nowrap relative z-[6]">
              <div className="w-[24px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/PhkbbCvRm7.png)] bg-cover bg-no-repeat relative z-[7]" />
              <span className="h-[20px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[20px] text-[#18191c] relative text-left whitespace-nowrap z-[8]">
                India
              </span>
              <div className="w-[16px] h-[16px] shrink-0 relative z-[9]">
                <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/OrXKfprbGq.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-10" />
              </div>
            </div>
            <div className="w-px h-[32px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/HhcaLbRtD9.png)] bg-cover bg-no-repeat relative z-[11]" />
            <div className="flex w-[255px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[12]">
              <div className="w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/SBw0y9XMoF.png)] bg-cover bg-no-repeat relative overflow-hidden z-[13]" />
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Job title, keyword, company"
                className="h-[24px] w-full font-['Inter'] text-[16px] text-[#9199a3] border-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-[253px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[15]">
        <button
          onClick={handleSignInClick}
          className="flex w-[101px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[12px] justify-center items-center shrink-0 flex-nowrap rounded-[3px] border-solid border border-[#cee0f5] relative z-[16] cursor-pointer hover:bg-[#e6f0fc]"
        >
          <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-semibold leading-[24px] text-[#0a65cc] relative text-left capitalize whitespace-nowrap z-[17]">
            Sign in
          </span>
        </button>
        <button
          onClick={handlePostJobClick}
          className="flex w-[140px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#0a65cc] rounded-[3px] relative z-[18] cursor-pointer hover:bg-[#084a99]"
        >
          <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left capitalize whitespace-nowrap z-[19]">
            Post a Job
          </span>
        </button>
      </div>
    </div>
  );
}