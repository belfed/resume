const Languages = ({ languages }) => {
    return (
        <>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                Languages
            </h2>
            <ul className="text-xs flex flex-col gap-y-0.5">
                {languages.map((lang, i) => (
                    <li key={i}>
                        <span className="font-semibold">{lang.language}</span> — {lang.level}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Languages;
