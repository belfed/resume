import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const formatUrl = (url) =>
  url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\/$/, "");

const Header = ({ header, contacts }) => {
    return (
        <header className="text-center pb-3 border-b-2 border-gray-800">
            <h1 className="text-2xl font-bold tracking-wide">{header.name}</h1>
            <p className="text-sm text-gray-600 mt-0.5">{header.role}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-700">
                <span className="flex items-center gap-x-1">
                    <FontAwesomeIcon icon={faAt} className="w-3 text-gray-500" />
                    {contacts.email}
                </span>
                <span className="flex items-center gap-x-1">
                    <FontAwesomeIcon icon={faPhone} className="w-3 text-gray-500" />
                    {contacts.mobile}
                </span>
                <span className="flex items-center gap-x-1">
                    <FontAwesomeIcon icon={faLocationDot} className="w-3 text-gray-500" />
                    {contacts.location}
                </span>
                <a href={contacts.github} className="flex items-center gap-x-1 text-gray-700 hover:text-black">
                    <FontAwesomeIcon icon={faGithub} className="w-3" />
                    {formatUrl(contacts.github)}
                </a>
                <a href={contacts.linkedin} className="flex items-center gap-x-1 text-gray-700 hover:text-black">
                    <FontAwesomeIcon icon={faLinkedin} className="w-3" />
                    {formatUrl(contacts.linkedin)}
                </a>
            </div>
        </header>
    );
}

export default Header;