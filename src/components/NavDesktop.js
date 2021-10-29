import React from "react";
import { Link } from "gatsby";
import { useIntl, FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";
//import LogoPraximis from "../images/logo.png"

const useStyles = makeStyles(({ spacing, customStyles }) => ({
  root: {
    padding: "5rem 0 2rem 0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      fontSize: "1.18rem",
      "& + a": {
        marginLeft: "5rem"
      }
    }
  },
  leftLinksContainer: {
    position: "absolute",
    left: "5%"
  },
  rightLinksContainer: {
    position: "absolute",
    right: "10%"
  },
  navbarContainer: {
    position: "absolute",
    width: "100%",
    display: "flex",
    top: "10%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      fontSize: "1.18rem",
      "& + a": {
        marginLeft: "5rem"
      }
    }
  }
}));

const NavDesktop = ({ handleChange }) => {
  const classes = useStyles();
  const intl = useIntl();
  let currentLanguage = intl.locale;

  return (
    <div >
      <div className={classes.navbarContainer}>
        <div className={classes.leftLinksContainer}>
          <Link className="no-hover" to="/"
            state={{ language: intl.locale }}>
            {/*<img src={LogoPraximis} alt="logo-praximis" />*/}
          </Link>
        </div>
        <div className={classes.rightLinksContainer}>
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
  );
};

export default NavDesktop;
