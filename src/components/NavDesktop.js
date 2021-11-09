import React from "react";
import { Link } from "gatsby";
import { useIntl, FormattedMessage } from "react-intl";
import LogoDevotech from "../images/logo_blanc.png"

const NavDesktop = ({ handleChange }) => {
  const intl = useIntl();
  let currentLanguage = intl.locale;

  return (
    <div >
      <div className="headerNavContainer">
        <div className="headerLeftLinksContainer">
          <Link className="no-hover" to="/"
            state={{ language: intl.locale }}>
            <img src={LogoDevotech} alt="logo-Devotech" />
          </Link>
        </div>
        <div className="headerRightLinksContainer">
          <Link to="/services/"
            state={{ language: intl.locale }}
            className="headerNavLink">
            <FormattedMessage id="services.title" />
          </Link>
          <Link to="/about/"
            state={{ language: intl.locale }}
            className="headerNavLink">
            <FormattedMessage id="about.title" />
          </Link>
          <Link to="/contact/"
            state={{ language: intl.locale }}
            className="headerNavLink">
            <FormattedMessage id="contact.title" />
          </Link>
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
          <a style={{marginLeft: 0}}
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
  );
};

export default NavDesktop;
