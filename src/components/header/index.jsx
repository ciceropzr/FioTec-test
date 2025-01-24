// Imgens
import Logo from '../../assets/images/logo.png';
import UserIcon from '../../assets/images/user_icon.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light px-5 py-4 shadow ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="FioTec Logo"
            style={{ height: '40px' }}
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" arial-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link fw-bolder" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bolder" href="/projetos-em-destaque">Projetos em Destaque</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bolder" href="/meus-favoritos">Meus Favoritos</a>
            </li>
          </ul>
          <div className="d-flex bg-secondary-subtle p-2 rounded-circle">
            <img src={UserIcon} alt="Perfil" className="" style={{ width: '20px' }} />
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Header;