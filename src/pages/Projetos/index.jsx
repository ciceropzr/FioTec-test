// Imagens
import View from '../../assets/images/view_icon.png';
import Heart from '../../assets/images/heart_icon.png';

const ProjetosDestaques = ({ projects = [], toggleFavorite }) => {
  return (
    <main className="container col-12 col-md-10">
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 mx-3'>
        <h2 className='fs-5 fw-bold'>Projetos em Destaque</h2>
        <p>Mostrando {projects.length} de {projects.length} resultados.</p>
      </div>
      <div className="row">
        {projects.length > 0 ?
          projects.map((project, index) => (
          <div 
            className="col-12 col-md-6 col-lg-4 mb-5"
            key={index} 
            style={{ maxHeight: '500px' }}
          >
            <div className="card h-100 border-0">
              <img 
                src={project.image}
                className="card-img-top px-3" 
                alt={project.title} 
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center fs-6 fw-bold">{project.title}</h5>
                <p className="card-text fs-6 text-center text-truncate-multiline">
                  {project.description}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between bg-white border-0">
                <a className="btn bg-secondary-subtle px-4 border-0 rounded-pill d-flex align-items-center" href={`/projetos-em-destaque/${project.id}`}>
                  <img src={View} alt="Ver" className="me-2" style={{ width: '1rem' }}/>
                  Acessar
                </a>
                <button className="btn bg-secondary-subtle px-4 rounded-pill border-0  d-flex align-items-center" onClick={() => toggleFavorite(project)}>
                  <img src={Heart} alt="Ver" className="me-2" style={{ width: '1rem' }}/> Favoritar
                </button>
              </div>
            </div>
          </div>
        )) : <p className="ms-3">Nenhum projeto encontrado.</p>}
      </div>
    </main>
  );
};

export default ProjetosDestaques;