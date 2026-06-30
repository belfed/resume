import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const formatUrl = (url) => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\/$/, "");
}

const Contacts = ({ contacts }) => {
    return (
        <div className="flex flex-col gap-y-1">
            <h3 className="text-sm font-bold uppercase border-b border-black pb-1 mb-1">Contatti</h3>
            <div className="flex items-center gap-x-2 text-xs">
                <FontAwesomeIcon icon={faPhone} className="w-3" />
                <span>{contacts.mobile}</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs">
                <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                <span>{contacts.location}</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs">
                <FontAwesomeIcon icon={faAt} className="w-3" />
                <span>{contacts.email}</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs">
                <FontAwesomeIcon icon={faGithub} className="w-3" />
                <a href={contacts.github}>{formatUrl(contacts.github)}</a>
            </div>
            <div className="flex items-center gap-x-2 text-xs">
                <FontAwesomeIcon icon={faLinkedin} className="w-3" />
                <a href={contacts.linkedin}>{formatUrl(contacts.linkedin)}</a>
            </div>
        </div>
    );
}

export default Contacts;
