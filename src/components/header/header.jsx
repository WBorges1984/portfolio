import './headerStyle.css'
import { useMenu } from "../context/menuContext";
import logo from '../../assets/img/logo.png'

export default function Header(){
  const {menu, setMenu} = useMenu();
    return(
        <header style={{display:'flex'}}>
        <span><img src={logo} alt="" width={80}/></span>
         <nav>
           <button onClick={()=>setMenu('home')}>Início</button>
           <button onClick={()=>setMenu('sobre')}>Sobre mim</button>
           <button onClick={()=>setMenu('tecno')}>Tecnologias</button>
           <button onClick={()=>setMenu('projetos')}>Projetos</button>
           <button onClick={()=>setMenu('contato')}>Contato</button>
         </nav>
       </header>
    )
}