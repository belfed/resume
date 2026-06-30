const Certifications = ({ certifications }) => {
    return (
        <div className="flex flex-col gap-y-1">
            <h3 className="text-sm font-bold uppercase border-b border-black pb-1 mb-1">Certificazioni</h3>
            <ul className="list-disc list-inside text-xs flex flex-col gap-y-0.5">
                {certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                ))}
            </ul>
        </div>
    );
}

export default Certifications;
