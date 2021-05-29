import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Banner from "./Banner";
import GenProductos from "./GenProductos";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

function Tienda() {
  return (
    <>
      <TopBar />
      <MenuBar />
      <Banner />
      <div className="tienda-box">
        <SideMenu />
        <GenProductos category_id="1" />
      </div>
      <Footer />
    </>
  );
}

export default Tienda;
