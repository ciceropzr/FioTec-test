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
            className="col-12 mb-4 favorito-card"
            onClick={() => handleCardClick(project.id)}
          >
            <div className="card d-flex flex-column flex-md-row border-0">
              <img
                src={project.image}
                className="card-img-top favorito-card-img"
                alt={project.name}
              />
              <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">{project.title}</h5>
                <p className="card-text text-truncate-multiline">
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
