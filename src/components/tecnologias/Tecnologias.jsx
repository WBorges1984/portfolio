import "./tecnologias.style.css";
import { linguagens } from "../../assets/img/linguagens";
import BtnSalvarCurriculo from "../btnSalvarCurriculo/BtnCurriculo";

function Tecnologias() {
  return (
    <section id="tecnologia">
      <h1>Tecnologias</h1>
      <p>Ao longo desse período, adquiri uma sólida experiência em diversas tecnologias e ferramentas, abrangendo:</p>
      <div className="linguagens">
      {Object.entries(linguagens).map(([key, value]) => (
                <article key={key}>
                    <img src={value.img} alt={value.name} />
                    <p>{value.name}</p>
                </article>
            ))}
      </div>
    
    </section>
  );
}

export default Tecnologias;
