import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjetoEmDestaque = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:3000/projetos/${id}`)
      .then(response => {
        setProject(response.data);
      })
  },[]);

  return (
    <main className="container my-4">
      <h2>Projetos em Destaque</h2>
      <div className="mt-4">
        <h3 className="fw-bold">{project.title}</h3>
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded mb-4"
        />
        <p className="text-justify">{project.description}</p>
      </div>
    </main>
  );
}

export default ProjetoEmDestaque