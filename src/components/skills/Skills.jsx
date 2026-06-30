const Skills = ({ skills }) => {
  const isGrouped =
    skills && typeof skills === "object" && !Array.isArray(skills);

  return (
    <>
      <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
        Technical Skills
      </h2>
      {isGrouped ? (
        <div className="flex flex-col gap-1">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="flex flex-wrap items-baseline gap-x-1"
            >
              <span className="text-xs font-semibold capitalize">
                {category}:
              </span>
              <div className="flex flex-wrap gap-1">
                <span className="text-xs">{items.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs">{skills.join(", ")}</span>
        </div>
      )}
    </>
  );
};

export default Skills;
