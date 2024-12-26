import './headerStyle.css'
import { useMenu } from "../context/menuContext";

export default function Header(){
  const {menu, setMenu} = useMenu();
    return(
        <header style={{display:'flex'}}>
        <span>LOGO</span>
         <nav>
           <button onClick={()=>setMenu('home')}>Início</button>
           <button onClick={()=>setMenu('sobre')}>Sobre mim</button>
           <button>Tecnologias</button>
           <button>Projetos</button>
           <button>Contato</button>
         </nav>
       </header>
    )
}