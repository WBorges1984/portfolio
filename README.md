# Portfólio

## Acesse o portfólio hospedado na Vercel [Visite meu Portfólio](https://portfolio-hazel-five-41.vercel.app/)

## Para poder rodar o projeto

1. Faça o clone do projeto
2. No console rode `npm install`
3. Após `npm run dev`

### **Detalhes das páginas/componentes desenvolvidas:**

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
