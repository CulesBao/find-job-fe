const JobDescription = ({ description }) => {
  return (
    <section>
      <h3 className="text-lg font-medium leading-loose text-black">
        Job Description
      </h3>
      <p className="mt-4 max-md:max-w-full">{description}</p>
    </section>
  );
};

export default JobDescription;
