
const JobResponsibilities = ({ responsibility }) => {
  return (
    <section className="mt-8 w-full">
      <h3 className="text-xl font-medium leading-loose text-black">
        Responsibilities
      </h3>
      <ul className="mt-4 opacity-70 text-justify leading-relaxed list-disc pl-5 space-y-3 break-words">
        {responsibility
          .split("\n")
          .filter(line => line.trim() !== "")
          .map((line, index) => (
            <li key={index}>{line}</li>
          ))}
      </ul>
    </section>
  );
};

export default JobResponsibilities;
