import { Routes, Route } from "react-router";

import Home from './pages/Home';
import ProjetosDestaques from './pages/ProjetosDestaques';
import Favoritos from './pages/Favoritos';

function App() {
  return (
    <>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/projetos-destaques" element={<ProjetosDestaques />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  )
}

export default App
