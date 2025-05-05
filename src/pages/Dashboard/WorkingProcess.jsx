import React from "react";

export default function Main() {
  return (
    <div className="main-container flex w-full pt-[100px] pb-[100px] flex-col gap-[50px] items-center bg-[#f1f2f4] relative mx-auto my-0">
      {/* Tiêu đề */}
      <span className="flex w-auto h-[48px] justify-center items-center font-['Inter'] text-[40px] font-medium leading-[48px] text-[#18191c] text-center">
        How jobpilot work
      </span>

      {/* Các bước nằm ngang */}
      <div className="flex w-full justify-center gap-[50px] items-start">
        {/* Bước 1: Create Account */}
        <div className="flex flex-col items-center gap-[24px] w-[312px] bg-[#fff] rounded-[12px] p-[24px]">
          <div className="flex w-[72px] h-[72px] items-center justify-center bg-[#fff] rounded-full">
            <div className="w-[32px] h-[32px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/rFBTBqrNpJ.png)] bg-cover" />
          </div>
          <div className="text-center">
            <span className="block font-['Inter'] text-[18px] font-medium text-[#18191c]">
              Create account
            </span>
            <span className="block font-['Inter'] text-[14px] text-[#767f8c]">
              Aliquam facilisis egestas sapien, nec tempor leo tristique at.
            </span>
          </div>
        </div>

        {/* Bước 2: Upload CV/Resume */}
        <div className="flex flex-col items-center gap-[24px] w-[312px] bg-[#fff] rounded-[12px] p-[24px] shadow-md">
          <div className="flex w-[72px] h-[72px] items-center justify-center bg-[#0a65cc] rounded-full">
            <div className="w-[32px] h-[32px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/ZNpszAdsOw.png)] bg-cover" />
          </div>
          <div className="text-center">
            <span className="block font-['Inter'] text-[18px] font-medium text-[#18191c]">
              Upload CV/Resume
            </span>
            <span className="block font-['Inter'] text-[14px] text-[#767f8c]">
              Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales.
            </span>
          </div>
        </div>

        {/* Bước 3: Find Suitable Job */}
        <div className="flex flex-col items-center gap-[24px] w-[312px] bg-[#fff] rounded-[12px] p-[24px]">
          <div className="flex w-[72px] h-[72px] items-center justify-center bg-[#fff] rounded-full">
            <div className="w-[32px] h-[32px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/N19vOBSgAO.png)] bg-cover" />
          </div>
          <div className="text-center">
            <span className="block font-['Inter'] text-[18px] font-medium text-[#18191c]">
              Find suitable job
            </span>
            <span className="block font-['Inter'] text-[14px] text-[#767f8c]">
              Phasellus quis eleifend ex. Morbi nec fringilla nibh.
            </span>
          </div>
        </div>

        {/* Bước 4: Apply Job */}
        <div className="flex flex-col items-center gap-[24px] w-[312px] bg-[#fff] rounded-[12px] p-[24px]">
          <div className="flex w-[72px] h-[72px] items-center justify-center bg-[#fff] rounded-full">
            <div className="w-[32px] h-[32px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-01/nxMhgxTiqZ.png)] bg-cover" />
          </div>
          <div className="text-center">
            <span className="block font-['Inter'] text-[18px] font-medium text-[#18191c]">
              Apply job
            </span>
            <span className="block font-['Inter'] text-[14px] text-[#767f8c]">
              Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
              purus.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}