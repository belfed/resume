const Education = ({ education }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
        Education
      </h2>
      {education.map((item, key) => (
        <div key={key} className="flex flex-col text-xs">
          <span className="font-semibold">{item.institution}</span>
          <span>{item.degree}</span>
          {item.start && item.end && (
            <span className="text-gray-500">
              {item.location} · {item.start}—{item.end}
            </span>
          )}
          {item.grade && <span>Grade: {item.grade}</span>}
          {item.thesis && <span>Thesis: {item.thesis}</span>}
        </div>
      ))}
    </div>
  );
};

export default Education;
