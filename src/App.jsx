import { useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter } from "react-router";
import axios from 'axios';

// Rotas
import ProjetosDestaques from './pages/ProjetosDestaques';
import Favoritos from './pages/Favoritos';

// Componentes
import Header from './components/header';
import Sidebar from './components/sidebar';

const App = () => {
  const [filter, setFilter] = useState('Todos');
  const [projects, setProjects] = useState([]);

  const handleFilterChange = (category) => {
    setFilter(category);
    console.log({category});
  };

  useEffect(() => {
    axios.get('http://localhost:3000/projetos')
      .then(response => {
        setProjects(response.data)
        console.log(response.data)
      })
  },[]);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column mw-100 vh-100">
        <Header />
        <div className="container d-flex justify-content-center flex-grow-1 p-5" style={{ maxWidth: '1440px' }}>
          <Sidebar onFilterChange={handleFilterChange} filter={filter} />
          <Routes>
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/" element={<ProjetosDestaques projects={projects} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
