import NavbarHome from "../components/navs/NavbarHome";
import Publicacion from "../components/publicaciones/publicacion";
import Footer from "../components/footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Aviso from "../components/avisos/aviso";
import './Home.css'

function Home() {
  return (
    <>
    
      <NavbarHome />
      <Tabs
      defaultActiveKey="contact"
      id="justify-tab-example"
      className="mb-2"
      justify
    >
    <Tab eventKey="longer-tab" title="Marketplace">
      <Aviso/>
      </Tab>
      <Tab eventKey="contact" title="Ofertas Laborales" >
      <Publicacion />
      </Tab>
    </Tabs>
    <Footer/>
    </>
  );
}
export default Home;


