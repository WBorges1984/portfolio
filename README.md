# Portfólio

## Acesse o portfólio hospedado na Vercel [Visite meu Portfólio](https://portfolio-hazel-five-41.vercel.app/)

## Para poder rodar o projeto

1. Faça o clone do projeto
2. No console rode `npm install`
3. Após `npm run dev`

### **Detalhes das páginas/componentes desenvolvidos:**

**Todas as página com efeito de entrada feito pelo css** </br>
**Todos os efeitos feitos com css sem precisar utilizar outras tecnologias**

### **Componente App:**
- O componente faz uso do useMemo para utilizar um context que ao alterar o estado menu renderiza o componente solicitado

```javascript
function App() {
  const {menu} = useMenu();
  return (
    <>
        <Header />
        {menu == 'home' ? <Banner />: null}
        {menu == 'sobre' ? <Sobremim />: null}
        {menu == 'tecno' ? <Tecnologias />: null}
        {menu == 'projetos' ? <Projetos />: null}
        {menu == 'contato' ? <Contato />: null}
        <Footer />
    </>
  );
}
```

-No componente ainda possui os componentes **Header**  e **Footer** para renderizar em todos os componentes 

### **Pagina Banner(Home):**
- Nesta página coloquei uma breve apresentação juntamente com minha foto de perfil.
- Além de o menu ao topo que esta em todas as paginas

  ### **Pagina Sobremin:**
- Utilizado HTML semântico e existe o componente **BtnSalvarCurriculo** que renderiza um button que recebe as propriedades src e tipo do documento a ser baixado.

  ### **Pagina Tecnologias:**
- Nesta página coloca as tecnologias que já tive contato nesse eterno aprendizado que é a programação.

- Fiz um objeto linguagens, com os pair da tecnologia e faço um map utilizando o Object.entries e renderizo as tecnologias.
  
```javascript
<div className="linguagens">
      {Object.entries(linguagens).map(([key, value]) => (
                <article key={key}>
                    <img src={value.img} alt={value.name} />
                    <p>{value.name}</p>
                </article>
            ))}
      </div>
```

  ### **Pagina Projetos:**
- Nesta página idealizei formular de uma certa forma que os projetos não ficasse com posição fixa, pois os ultimos quase não seriam vistos,
- E como todos tem seu diferencial fiz a lógica abaixo para fazer uma posição aleatória.
  
```javascript
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
```

  ### **Pagina Projetos:**
- Idealizei uma botão que recebe o texto, o link e o icone como propriedade e em foco no WhatsApp o link puxo o app desktop ou no navegador, é já com um txto padrão.

```javascript
<BtnContato whatsapp
            texto={'Só me chamar!'}
            link={'https://api.whatsapp.com/send?phone=5521970002611&text=Oi,%20Willian.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20de%20portf%C3%B3lio.'}/>
          
```



