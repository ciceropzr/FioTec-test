import { useState } from 'react';
import { Routes, Route } from "react-router";

// Rotas
import Home from './pages/Home';
import ProjetosDestaques from './pages/ProjetosDestaques';
import Favoritos from './pages/Favoritos';

// Componentes
import Header from './components/header';
import Sidebar from './components/sidebar';

const App = () => {
  const [filter, setFilter] = useState('Todos');

  const handleFilterChange = (category) => {
    setFilter(category);
    console.log({category});
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="d-flex flex-grow-1 p-5">
        <Sidebar onFilterChange={handleFilterChange} filter={filter} />
        {/* <Routes>
          {/* <Route index path="/" element={<Home />} />
          <Route path="/projetos-destaques" element={<ProjetosDestaques />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default App
