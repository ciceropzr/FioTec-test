import { useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter } from "react-router";
import axios from 'axios';

// Rotas
import Projetos from './pages/Projetos';
import Destaque from './pages/Destaque';

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
        if (response.data.length > 0) {
          if (filter === 'Todos') {
            setProjects(response.data);
          } else {
            const projects = response.data.filter(project => project.category === filter);
            setProjects(projects);
          }
        } else {
          setProjects([]);
        }
        console.log(response.data)
      })
  },[filter]);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column mw-100 vh-100">
        <Header />
        <div className="container d-flex justify-content-center flex-grow-1 p-5" style={{ maxWidth: '1440px' }}>
          <Sidebar onFilterChange={handleFilterChange} filter={filter} />
          <Routes>
            <Route path="/projetos-em-destaque/:id" element={<Destaque projects={projects} />} />
            <Route path="/projetos-em-destaque" element={<Projetos projects={projects} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
