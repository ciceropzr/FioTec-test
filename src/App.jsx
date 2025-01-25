import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router";
import axios from 'axios';

// Rotas
import Projetos from './pages/Projetos';
import Destaque from './pages/Destaque';
import Favoritos from './pages/Favoritos';

// Componentes
import Header from './components/header';
import Sidebar from './components/sidebar';

const App = () => {
  const [filter, setFilter] = useState('Todos');
  const [projects, setProjects] = useState([]);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const toggleFavorite = (project) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorited = storedFavorites.some((fav) => fav.id === project.id);

    if (isFavorited) {
      const updatedFavorites = storedFavorites.filter((fav) => fav.id !== project.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...storedFavorites, project];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3000/projetos')
      .then(response => {
        if (response.data.length > 0) {
          if (filter === 'Todos') {
            setProjects(response.data);
          } else {
            const filteredProjects = response.data.filter(project => project.category === filter);
            setProjects(filteredProjects);
          }
        } else {
          setProjects([]);
        }
      });
  }, [filter]);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column mw-100 vh-100">
        <Header />
        <Routes>
          <Route
            path="/meus-favoritos"
            element={
              <div className="container flex-grow-1 p-5 with-max-width">
                <Favoritos toggleFavorite={toggleFavorite} />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="container d-flex justify-content-center flex-grow-1 p-5 with-max-width">
                <Sidebar onFilterChange={handleFilterChange} filter={filter} />
                <Routes>
                  <Route path="/projetos-em-destaque/:id" element={<Destaque />} />
                  <Route path="/projetos-em-destaque" element={<Projetos projects={projects} toggleFavorite={toggleFavorite} />} />
                </Routes>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;