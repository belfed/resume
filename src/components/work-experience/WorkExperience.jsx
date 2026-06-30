import Experience from "./Experience";

const WorkExperience = ({ workExperience }) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">Work Experience</h2>
            <div className="flex flex-col gap-y-2.5">
                {
                    workExperience.map((experience, key) => <Experience key={key} experience={experience} />)
                }
            </div>
        </div>
    );
}

export default WorkExperience;