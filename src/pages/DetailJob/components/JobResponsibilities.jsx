const JobResponsibilities = ({ responsibility }) => {
  return (
    <section className="mt-8 max-w-full w-[734px]">
      <h3 className="text-lg font-medium leading-loose text-black">
        Responsibilities
      </h3>
      <p className="mt-4 max-md:max-w-full">{responsibility}</p>
    </section>
  );
};

export default JobResponsibilities;
