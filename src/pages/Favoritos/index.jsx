import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/projetos-em-destaque/${id}`);
  };

  if (favorites.length === 0) {
    return <p>Nenhum favorito adicionado ainda.</p>;
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-5 fw-bold">Meus Favoritos</h2>
      </div>
      <div className="row">
        {favorites.map((project) => (
          <div
            key={project.id}
            className="col-md-12 mb-5 d-flex"
            style={{ cursor: 'pointer' }}
            onClick={() => handleCardClick(project.id)}
          >
            <div className="card d-flex flex-row border-0" style={{
              width: '100%',
              height: '180px',
            }}>
              <img
                src={project.image}
                className="card-img-top img-fluid rounded-0"
                alt={project.name}
                style={{ width: '250px', height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body px-3 py-0">
                <h5 className="card-title fs-6 fw-bolder">{project.title}</h5>
                <p className="card-text mb-0 text-truncate-multiline">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;