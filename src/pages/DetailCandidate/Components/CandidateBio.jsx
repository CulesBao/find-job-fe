function CandidateBio({ bio, name }) {
  return (
    <div className="p-6 rounded-2xl bg-white">
      <h2 className="text-3xl text-center font-semibold mb-3 text-zinc-900 hover:text-blue-500 transition-all duration-300">
        Nice to connect, I{"'"}m {name}!
      </h2>
      <p className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
        {bio || "No biography provided."}
      </p>
    </div>
  );
}

export default CandidateBio;