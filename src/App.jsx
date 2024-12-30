import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Sobremim from "./components/sobreMim/Sobremim";
import {useMenu } from "./components/context/menuContext";
import Tecnologias from "./components/tecnologias/Tecnologias";
import Projetos from "./components/projetos/Projetos"
import Contato from "./components/contato/Contato"
import Footer from "./components/footer/Footer";


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

export default App;
