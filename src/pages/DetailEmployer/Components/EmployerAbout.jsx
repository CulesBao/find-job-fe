import React from "react";

const EmployerAbout = ({ about }) => {
  return (
    <section className="w-full">
      <h3 className="text-2xl font-medium leading-loose ml-4 text-black">
        About Us
      </h3>
      <p className="mt-4 opacity-70 text-justify leading-relaxed break-words">
        {about.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </section>
  );
};

export default EmployerAbout;
