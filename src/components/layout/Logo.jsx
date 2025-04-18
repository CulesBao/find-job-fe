export default function Logo() {
  return (
    <div className="flex flex-row h-[10%] relative left-[12%] top-[10px]">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g clipPath="url(#clip0_3264_352)">
            <path
              d="M33.751 11.25H6.25098C5.56062 11.25 5.00098 11.8096 5.00098 12.5V32.5C5.00098 33.1904 5.56062 33.75 6.25098 33.75H33.751C34.4413 33.75 35.001 33.1904 35.001 32.5V12.5C35.001 11.8096 34.4413 11.25 33.751 11.25Z"
              stroke="#0A65CC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25"
              stroke="#0A65CC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.0012 19.7358C30.4423 22.3734 25.2669 23.7583 20 23.75C14.7339 23.7583 9.55935 22.3739 5.00098 19.7371"
              stroke="#0A65CC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.125 18.75H21.875"
              stroke="#0A65CC"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3264_352">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-[#18191C] font-[Gill Sans] text-[24px] font-semibold leading-[40px] m-[3px]">
          MyJob
        </h1>
      </div>
    </div>
  );
}
