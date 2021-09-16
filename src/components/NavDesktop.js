import React from "react";
import { Link } from "gatsby";
import { useIntl, FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";

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
    right: "5%"
  },
  navbarContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    paddingTop: "5rem",
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

const NavDesktop = () => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <div >
      <div className={classes.navbarContainer}>
        <div className={classes.leftLinksContainer}>
          <Link className="no-hover" to="/"
            state={{ language: intl.locale }}>
            <img src="/img/logo.png" alt="logo-praximis" />
          </Link>
        </div>
        <div className={classes.rightLinksContainer}>
          <Link to="/services/"
            state={{ language: intl.locale }}>
            <FormattedMessage id="services.title" />
          </Link>
          <Link to="/index">
            <FormattedMessage id="about.title" />
          </Link>
          <Link to="/index">
            <FormattedMessage id="contact.title" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
