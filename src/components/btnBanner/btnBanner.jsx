import './btnBannerStyle.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

export default function BtnBanner() {
  return (
    <div className='botoesBanner'>
        
            <button className='btn'>
                    <FaGithubAlt />    
                GitHub
            </button>
       
            <button className='btn'>
                    <FaLinkedin />
                Linkedin
            </button>
        

    </div>
  )
}
