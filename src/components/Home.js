
import '../styles/App.css';
import GenDestacados from './GenDestacados'
import TopBar from './TopBar'
import Beneficios from './Beneficios'
import MenuBar from './MenuBar'
import Banner from './Banner'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <TopBar />

      <MenuBar />

      <Banner />

      <Beneficios />

      <GenDestacados />

      <Footer />
    </div>
  );
}

export default App;
