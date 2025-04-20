import React from "react";

const JobDescription = ({ description }) => {
  return (
    <section className="w-full">
      <h3 className="text-xl font-medium leading-loose text-black">
        Job Description
      </h3>
      <p className="mt-4 opacity-70 text-justify leading-relaxed break-words">
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </section>
  );
};

export default JobDescription;