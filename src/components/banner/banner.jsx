import BtnBanner from '../btnBanner/btnBanner'
import './bannerStyle.css'

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
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGoDEEJmlSeMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728771226649?e=1746057600&v=beta&t=uGq0d7Vr-JpqlEr2Q6pPOZlpSN6DhUBAOlrJ-7RUXPQ" 
          alt="Foto de perfil de Willian Borges"
          />
        </figure>
      </section>
   ) 
}
