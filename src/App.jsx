import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Sobremim from "./components/sobreMim/Sobremim";
import {useMenu } from "./components/context/menuContext";


function App() {

  const {menu} = useMenu();
  return (
    <>
        <Header />
        {menu == 'home' ? <Banner />: null}
        {menu == 'sobre' ? <Sobremim />: null}
      
    </>
  );
}

export default App;
