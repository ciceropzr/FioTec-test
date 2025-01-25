const Sidebar = ({ onFilterChange, filter }) => {
  return (
    <aside className="border-end col-2 bg-secondary-subtle p-3 shadow rounded-1" style={{ width: '250px' }}>
      <h5 className="fw-bolder">Filtrar por categoria</h5>
      <div className="d-grid gap-2">
        <button 
          className={`btn btn-link text-decoration-none text-start p-0 ${filter === 'Todos' ? '' : 'text-dark'}`}
          onClick={() => onFilterChange('Todos')}
        >
          Todos
        </button>
        <button 
          className={`btn btn-link text-decoration-none text-start p-0 ${filter === 'Ensino' ? '' : 'text-dark'}`}
          onClick={() => onFilterChange('Ensino')}
        >
          Ensino
        </button>
        <button 
          className={`btn btn-link text-decoration-none text-start p-0 ${filter === 'Pesquisa' ? '' : 'text-dark'}`} 
          onClick={() => onFilterChange('Pesquisa')}
        >
          Pesquisa
        </button>
        <button 
          className={`btn btn-link text-decoration-none text-start p-0 ${filter === 'Estímulo à Inovação' ? '' : 'text-dark'}`} 
          onClick={() => onFilterChange('Estímulo à Inovação')}
        >
          Estímulo à Inovação
        </button>
        <button 
          className={`btn btn-link text-decoration-none text-start p-0 ${filter === 'Extensão' ? '' : 'text-dark'}`} 
          onClick={() => onFilterChange('Extensão')}
        >
          Extensão
        </button>
        <button 
          className={`btn btn-link text-decoration-none text-start p-0 ${filter === 'Desenvolvimento Institucional' ? '' : 'text-dark'}`} 
          onClick={() => onFilterChange('Desenvolvimento Institucional')}
        >
          Desenvolvimento Institucional
        </button>
        <button 
          className={`btn btn-link text-decoration-none text-start p-0 ${filter === 'Desenvolvimento Científico e Tecnológico' ? '' : 'text-dark'}`} 
          onClick={() => onFilterChange('Desenvolvimento Científico e Tecnológico')}
        >
          Desenvolvimento Científico e Tecnológico
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;