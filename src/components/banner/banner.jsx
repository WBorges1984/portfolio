import BtnBanner from '../btnBanner/btnBanner'
import './bannerStyle.css'
import perfil from '../../assets/img/perfil.png'

export default function Banner(){
   return(
    <section className='banner'>
        <article className="dados">
          <div className="dadosAjuste">
            <h2>Willian Borges</h2>
            <h1>Desenvolvedor Multiplataforma</h1>
            <h3>Desenvolvedor apaixonado por tecnologia e inovação.</h3>
            <div className="btnDados">
              <BtnBanner texto='GitHub' icon='git'/>
            </div>
          </div>
        </article>
        <figure className='foto'>
          <img src={perfil} 
          alt="Foto de perfil de Willian Borges"
          />
        </figure>
      </section>
   ) 
}
