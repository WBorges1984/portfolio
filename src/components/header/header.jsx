import './headerStyle.css'
import { useMenu } from "../context/menuContext";
import logo from '../../assets/img/logoWillDev.png'

export default function Header(){
  const {menu, setMenu} = useMenu();
    return(
        <header style={{display:'flex'}}>
        <span><img src={logo} alt="" width={60} style={{border: '1px solid #2b4a63', borderRadius: '10px'}}/></span>
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