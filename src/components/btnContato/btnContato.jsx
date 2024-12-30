import "./btnContato.style.css";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import whatsappLogo from '../../assets/img/icon/whatsapp.png'


export default function BtnContato({link, texto, linkedin, github, email, whatsapp}) {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div id="btnContato">
      <button className="btnContato" onClick={() => openLink(link)}>
        {github && <><FaGithubAlt color="black"/> <h3 className="texto">{texto}</h3></>}
        {linkedin && <><FaLinkedin color="blue"/> {texto}</>}
        {email && <><MdEmail color="black"/> {texto}</>}
        {whatsapp && <><img src={whatsappLogo} alt="" width={48}/> {texto}</>}
      </button>
    </div>
  );
}