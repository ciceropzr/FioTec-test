// Importações
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import UserIcon from '../../assets/images/user_icon.png';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light px-5 py-4 shadow">
      <div className="container-fluid with-max-width">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="FioTec Logo"
            style={{ height: '40px' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto offset-2">
            <li className="nav-item">
              <a
                className={`nav-link fw-bolder ${location.pathname === '/' ? 'active text-primary' : ''}`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link fw-bolder ${
                  location.pathname.startsWith('/projetos-em-destaque') ? 'active text-primary' : ''
                }`}
                href="/projetos-em-destaque"
              >
                Projetos em Destaque
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link fw-bolder ${location.pathname === '/meus-favoritos' ? 'active text-primary' : ''}`}
                href="/meus-favoritos"
              >
                Meus Favoritos
              </a>
            </li>
          </ul>
          <div className="d-flex bg-secondary-subtle p-3 rounded-circle">
            <img src={UserIcon} alt="Perfil" className="" style={{ width: '30px' }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;