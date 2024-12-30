import BtnContato from "../btnContato/btnContato";
import "./contato.style.css";

export default function Contato() {
  return (
    <section id="contato">
      <div className="dadosContatos">
        <h1>Entre em contato</h1>
        <p className="txtDescricao">Sinta-se à vontade para entrar em contato comigo =)</p>
        <div className="linkContatos">
          <div className="txtContato">
            <h3>Linkedin:</h3> 
            <BtnContato texto={"/willianborgesdev"} linkedin link={"https://www.linkedin.com/in/willianborgesdev/"} />
          </div>
          <div className="txtContato">
            <h3>Email:</h3>
            <BtnContato email
              texto={'willian.borges'}
              link={'mailto:willian.borges@hotmail.com.br'}
              />
          </div>
          <div className="txtContato">
            <h3>GitHub:</h3>
            <BtnContato github
              texto={'/WBorges1984'} 
              link={'https://github.com/WBorges1984'}
              />
          </div>
          <div>Se achar melhor pode ser pelo WhatsApp</div>
          <div className="txtContato btnWhatsapp">
            <BtnContato whatsapp
            texto={'Só me chamar!'}
            link={'https://api.whatsapp.com/send?phone=5521970002611&text=Oi,%20Willian.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20de%20portf%C3%B3lio.'}/>
          </div>
        </div>
      </div>
      <div className="imgContato">
        <img
          src="https://img.freepik.com/vetores-gratis/assistente-online-ajuda-ao-usuario-perguntas-frequentes-personagem-de-desenho-animado-do-trabalhador-do-call-center-mulher-que-trabalha-na-linha-direta_335657-2336.jpg?t=st=1735517505~exp=1735521105~hmac=69af22afc4926ee05e25bc414b82f1db94dad2e8dbd3a48bd2e2d4c0bac4dfa8&w=500"
          alt=""
        />
      </div>
    </section>
  );
}
