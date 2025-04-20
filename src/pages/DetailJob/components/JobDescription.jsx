import React from "react";

const JobDescription = ({ description }) => {
  return (
    <section className="max-w-full mr-15">
      <h3 className="text-xl font-medium leading-loose text-black">
        Job Description
      </h3>
      <p className="mt-4 max-md:max-w-full opacity-70 text-justify leading-relaxed">
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