import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar Home="Inicio" Mangas="Mangas" 
      Novelas="Novelas ligeras" 
      Figuras="Figuras" 
      Contacto="Contacto"/>
      <ItemListContainer/>
    </div>
  );
}

export default App;