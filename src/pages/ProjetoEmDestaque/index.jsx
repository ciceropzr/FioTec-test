function ProjetoEmDestaque({ projeto }) {
  return (
    <main className="flex-fill p-3">
      <h2>Projetos em Destaque</h2>
      <div className="card mb-3">
        <img src="/path/to/project-image.jpg" className="card-img-top" alt="Projeto destaque" />
        <div className="card-body">
          <h5 className="card-title">Ensp/Fiocruz promove incentivos à redução do uso de agrotóxicos</h5>
          <p className="card-text">
            O uso de agrotóxicos é muito comum na agricultura, visto que controlam a incidência de insetos...
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Acessar</button>
            <button className="btn btn-outline-danger">Favoritar</button>
          </div>
        </div>
      </div>
      <p className="text-end text-muted">Mostrando 1 de 6 resultados.</p>
    </main>
  );
}

export default ProjetoEmDestaque