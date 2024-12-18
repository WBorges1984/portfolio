import './headerStyle.css'

export default function Header(){
    return(
        <header style={{display:'flex'}}>
        <span>LOGO</span>
         <nav>
           <a href="#inicio">Início</a>
           <a href="#sobre">Sobre mim</a>
           <a href="#tecnologia">Tecnologias</a>
           <a href="#projetos">Projetos</a>
           <a href="#contatos">Contato</a>
         </nav>
       </header>
    )
}