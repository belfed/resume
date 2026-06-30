import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const formatUrl = (url) => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\/$/, "");
}

const Infos = ({ infos }) => {
    const [email, mobile, github, linkedin, location] = infos;

    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-2.5">
            <div className="flex flex-row items-center gap-x-[3px]">
                <FontAwesomeIcon icon={faAt} />
                <a className="text-inherit visited:text-inherit">{email.value}</a>
            </div>
            <div className="flex flex-row items-center gap-x-[3px]">
                <FontAwesomeIcon icon={faPhone} />
                <a className="text-inherit visited:text-inherit">{mobile.value}</a>
            </div>
            <div className="flex flex-row items-center gap-x-[3px]">
                <FontAwesomeIcon icon={faGithub} />
                <a href={github.value} className="text-inherit visited:text-inherit">{formatUrl(github.value)}</a>
            </div>
            <div className="flex flex-row items-center gap-x-[3px]">
                <FontAwesomeIcon icon={faLinkedin} />
                <a href={linkedin.value} className="text-inherit visited:text-inherit">{formatUrl(linkedin.value)}</a>
            </div>
            <div className="flex flex-row items-center gap-x-[3px]">
                <FontAwesomeIcon icon={faLocationDot} />
                <a className="text-inherit visited:text-inherit">{location.value}</a>
            </div>
        </div>
    );
}

export default Infos;
