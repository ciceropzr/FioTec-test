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
    <main className="container col-9">
      <div className='d-flex justify-content-between align-items-center mb-4 mx-3'>
        <h2 className='fs-6 fw-bold'>Projetos em Destaque</h2>
      </div>
      <div className="mt-4 mx-3">
        <h3 className="fw-bold fs-5 mb-3">{project.title}</h3>
        <figure className="figure w-100 overflow-hidden" style={{ maxHeight: '350px' }}>
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid mb-4 w-100 "
          />
        </figure>
        <p className="text-justify lh-lg px-1">{project.description}</p>
      </div>
    </main>
  );
}

export default ProjetoEmDestaque