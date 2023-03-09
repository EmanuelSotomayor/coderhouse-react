import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Mangas from './Routes/Mangas/Mangas';
import MangaById from './Routes/MangaById/MangaById';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/mangas" element={<Mangas/>}></Route>
        <Route exact path="/mangas/:id" element={<MangaById/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;