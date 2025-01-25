// Imagens
import View from '../../assets/images/view_icon.png';
import Heart from '../../assets/images/heart_icon.png';

const ProjetosDestaques = ({ projects = [] }) => {
  return (
    <main className="container col-9 my-4">
      <h2>Projetos em Destaque</h2>
      <p>Mostrando {projects.length} de {projects.length} resultados.</p>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div 
            className="col-11 col-md-6 col-lg-4" // Ajuste de responsividade 
            key={index} 
            style={{ maxHeight: '500px' }}
          >
            <div className="card h-100 border-0">
              <img 
                src={project.image}
                className="card-img-top px-3" 
                alt={project.title} 
              />
              <div className="card-body">
                <h5 className="card-title text-center fs-6">{project.title}</h5>
                <p className="card-text text-break text-truncate fs-6" style={{ maxHeight: '80px', overflow: 'hidden'}}>
                  {project.description}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between bg-white border-0">
                <button className="btn bg-secondary-subtle px-4 border-0 rounded-pill">
                  <img src={View} alt="Ver" className="me-2" style={{ width: '1rem' }}/>
                  Acessar
                </button>
                <button className="btn bg-secondary-subtle px-4 rounded-pill border-0">
                  <img src={Heart} alt="Ver" className="me-2" style={{ width: '1rem' }}/> Favoritar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjetosDestaques;