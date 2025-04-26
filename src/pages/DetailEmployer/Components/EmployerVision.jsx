import React from "react";

const EmployerVision = ({ vision }) => {
  return (
    <section className="w-full mt-5">
      <h3 className="text-2xl ml-4 font-medium leading-loose text-black">
        Our Vision
      </h3>
      <p className="mt-4 opacity-70 text-justify leading-relaxed break-words">
        {vision.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </section>
  );
};

export default EmployerVision;
