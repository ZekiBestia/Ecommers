import React from 'react';
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0 custom-link  " href="https://www.creative-tim.com/astro">
          Vida plena con Cris Cara
        </a>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 custom-link" aria-current="page" href="https://drive.google.com/uc?export=download&id=1O9O1XapjCOH6E2UGGOEzop55R3iM22-0">
                Catálogo
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-dark dropdown-toggle font-weight-bold align-items-center custom-link"
                aria-current="page"
                id="pagesExample"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contacto
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li>
                  <a
                    aria-current="page"
                    href="https://www.facebook.com/SheloNabelAllOverTheWorld/"
                    rel="nofollow"
                    target="_blank"
                    className="dropdown-item-face"
                  >
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a
                    aria-current="page"
                    href="https://discord.com/invite/TGZqBvZB"
                    rel="nofollow"
                    target="_blank"
                    className="dropdown-item-what"
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    aria-current="page"
                    href="https://www.instagram.com/shelonabelmexicodi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    rel="nofollow"
                    target="_blank"
                    className="dropdown-item-insta hover-fa"
                  >
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 custom-link " aria-current="page" href="#shelo">
                Conócenos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 custom-link " aria-current="page" href="#afiliar">
                Únete a nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
