import React from "react";
import { Link } from "gatsby";
import { useIntl, FormattedMessage } from "react-intl";
import LogoDevotech from "../images/logo_blanc.png"

const NavTabletMobile = ({ handleChange }) => {
  const [isSideNavVisible, setIsSideNavVisible] = React.useState(false);

  const handleClickHamburger = () => {
    setIsSideNavVisible(true);
  };
  const handleClickCloseSidenav = () => {
    setIsSideNavVisible(false);
  };

  const intl = useIntl();
  let currentLanguage = intl.locale;

  return (
    <div className="mobileNavContainer">
        <div className="headerLeftLinksContainer">
          <Link className="no-hover" to="/"
            state={{ language: intl.locale }}>
            <img src={LogoDevotech} alt="logo-Devotech" />
          </Link>
        </div>
        <div className="menuHamburger" onClick={handleClickHamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      <div
        className={`${isSideNavVisible ? "mobileNav mobileNavVisible" : "mobileNav"}`}
      >
        <div className="mobileNavTop">
          <div className="headerLeftLinksContainer">
            <Link className="no-hover" to="/"
              state={{ language: intl.locale }}
              onClick={handleClickCloseSidenav}>
              <img src={LogoDevotech} alt="logo-Devotech" />
            </Link>
          </div>
          <svg
            onClick={handleClickCloseSidenav}
            className="mobileNavCloseButton"
            viewBox="0 0 386.667 386.667"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
          </svg>
        </div>
        <div className="mobileNavLinksContainer">
          <Link to="/services/"
            state={{ language: intl.locale }}
            className="headerNavLink"
            onClick={handleClickCloseSidenav}>
            <FormattedMessage id="services.title" />
          </Link>
          <Link to="/about/"
            state={{ language: intl.locale }}
            className="headerNavLink"
            onClick={handleClickCloseSidenav}>
            <FormattedMessage id="about.title" />
          </Link>
          <Link to="/contact/"
            state={{ language: intl.locale }}
            className="headerNavLink"
            onClick={handleClickCloseSidenav}>
            <FormattedMessage id="contact.title" />
          </Link>
          <div onClick={handleClickCloseSidenav}>
            <a
              className={
                currentLanguage === "fr" ? "headerNavLink headerNavLinkActive" : "headerNavLink"
              }
              onClick={handleChange}
              name={"fr"}
            >
              FR
            </a>
            <span className="headerNavLinkSeparator">/</span>
            <a
              className={
                currentLanguage === "en" ? "headerNavLink headerNavLinkActive" : "headerNavLink"
              }
              onClick={handleChange}
              name={"en"}
            >
              EN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTabletMobile;
