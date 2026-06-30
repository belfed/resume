import { renderBold } from "../utils";

const Experience = ({ experience }) => {
    return (
        <div className="flex flex-col">
            <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold">{experience.role}</span>
                <span className="text-xs text-gray-500">{experience.start} — {experience.end}</span>
            </div>
            <div className="flex items-baseline gap-x-1">
                <a href={experience.website} className="text-xs font-semibold text-gray-700 hover:text-black">{experience.company}</a>
                <span className="text-xs text-gray-500">· {experience.type}</span>
            </div>
            <div>
                <p className="text-xs leading-relaxed text-justify">{renderBold(experience.description)}</p>
            </div>
            <ul className="list-disc ml-4 text-xs mt-1 flex flex-col gap-y-0.5">
                {
                    experience.details.map((detail, key) => <li key={key} className="text-justify leading-relaxed">{renderBold(detail)}</li>)
                }
            </ul>
        </div>
    );
}

export default Experience;