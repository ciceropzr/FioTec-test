import { useState } from "react";

const Sidebar = ({ onFilterChange, filter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "Todos",
    "Ensino",
    "Pesquisa",
    "Estímulo à Inovação",
    "Extensão",
    "Desenvolvimento Institucional",
    "Desenvolvimento Científico e Tecnológico",
  ];

  return (
    <>
      {/* Sidebar para telas maiores */}
      <aside className="d-none d-md-block border-end col-2 bg-body-secondary p-3 shadow rounded-1" style={{ width: "250px" }}>
        <h5 className="fw-bolder">Filtrar por categoria</h5>
        <div className="d-grid gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-link text-decoration-none text-start p-0 ${
                filter === category ? "" : "text-dark"
              }`}
              onClick={() => onFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>

      {/* Dropdown para telas menores */}
      <div className="d-block d-md-none mb-3">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="dropdownMenuButton"
            aria-expanded={isDropdownOpen}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {filter || "Filtrar por categoria"}
          </button>
          <ul
            className={`dropdown-menu w-100 ${isDropdownOpen ? "show" : ""}`}
            aria-labelledby="dropdownMenuButton"
          >
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`dropdown-item ${
                    filter === category ? "active" : ""
                  }`}
                  onClick={() => {
                    onFilterChange(category);
                    setIsDropdownOpen(false); // Fecha o dropdown ao selecionar
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
