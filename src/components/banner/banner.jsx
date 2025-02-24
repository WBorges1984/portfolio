import BtnBanner from '../btnBanner/btnBanner'
import './bannerStyle.css'

export default function Banner(){
   return(
    <div className='banner'>
        <div className="dados">
          <div className="dadosAjuste">
            <h2>Willian Borges</h2>
            <h1>Desenvolvedor Multiplataforma</h1>
            <h3>Desenvolvedor apaixonado por tecnologia e inovação.</h3>
            <div className="btnDados">
              <BtnBanner texto='GitHub' icon='git'/>
              {/* <BtnBanner texto='Linkedin'icon='lin'/> */}
            </div>
          </div>
        </div>
        <div className='foto'>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGoDEEJmlSeMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728771226649?e=1746057600&v=beta&t=uGq0d7Vr-JpqlEr2Q6pPOZlpSN6DhUBAOlrJ-7RUXPQ" />
        </div>
      </div>
   ) 
}