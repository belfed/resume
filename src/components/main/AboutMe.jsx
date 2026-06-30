import { renderBold } from "../utils";

const AboutMe = ({ text }) => {
    return (
        <>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-justify">{renderBold(text)}</p>
        </>
    );
}

export default AboutMe;
