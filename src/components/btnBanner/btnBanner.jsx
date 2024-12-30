import "./btnBannerStyle.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

export default function BtnBanner() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="botoesBanner">
      <button className="btn" onClick={() => openLink("https://github.com/WBorges1984")}>
        <FaGithubAlt /> GitHub
      </button>

      <button className="btn" onClick={() => openLink("https://www.linkedin.com/in/willianborgesdev/")}>
        <FaLinkedin /> Linkedin
      </button>
    </div>
  );
}
