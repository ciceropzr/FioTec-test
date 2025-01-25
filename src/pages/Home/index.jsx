import Logo from '../../assets/images/logo.png';

const Home = ({ projects = [] }) => {
  const getRandomProjects = (projectList, count) => {
    const shuffled = [...projectList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div>
      <header className="bg-light py-5 shadow">
        <div className="container text-center">
          <img src={Logo} alt="FioTec Logo" style={{ height: '60px' }} />
          <h1 className="mt-4 fw-bold" style={{ fontSize: '2rem' }}>Bem-vindo à FioTec</h1>
          <p className="text-muted" style={{ fontSize: '1rem' }}>Explore nossos projetos em destaque e descubra como estamos impactando a sociedade.</p>
        </div>
      </header>

      <main className="container py-5">
        <section className="mb-5">
          <h2 className="fw-bold mb-4">Projetos em Destaque</h2>
          <div className="row">
            {getRandomProjects(projects, 3).map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={project.image}
                    className="card-img-top rounded-0"
                    alt="Projeto"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text text-muted" style={{ textAlign: 'justify', WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {project.description}
                    </p>
                    <a href={`/projetos-em-destaque/${project.id}`} className="btn btn-primary btn-sm mt-3">
                      Saiba Mais
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-5 bg-secondary text-white text-center">
          <h2 className="fw-bold mb-4">Sobre a FioTec</h2>
          <p className="mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
            A FioTec é uma instituição comprometida com o desenvolvimento de projetos que promovem inovação e melhoria na qualidade de vida. Nossa missão é impactar a sociedade por meio de iniciativas transformadoras.
          </p>
          <a href="/sobre" className="btn btn-light btn-sm">
            Saiba Mais
          </a>
        </section>
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} FioTec. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
