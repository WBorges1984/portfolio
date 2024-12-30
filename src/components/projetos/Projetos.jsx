import { dadosProjetos } from "../../assets/constants/projetosMock";
import "./projetos.style.css";

export default function Projetos() {
  // Embaralhando os projetos
  const projetosAleatorios = [...dadosProjetos].sort(() => Math.random() - 0.5);

  return (
    <section id="projetos">
      <h1>Projetos</h1>
      <div className="containerProjetos">
        {projetosAleatorios.map((item) => {
          return (
            <div className="card" key={item.id}>
              {item.atualizacao && <span className="spanAtu">Em Atualização</span>}
              <h2>{item.titulo}</h2>
              <p>{item.descricao}</p>
              <p className="technologies">
                <strong>Tecnologias:</strong>
                {item.tecnologias}
              </p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Link Projeto
                </a>
              )}
              {item.repositorio && (
                <a href={item.repositorio} target="_blank" rel="noopener noreferrer">
                  Ver Repositório
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
