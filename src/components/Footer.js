import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import FacebookLogo from "../images/logo_facebook.png"
import InstagramLogo from "../images/logo_instagram.png"
import TwitterLogo from "../images/logo_twitter.png"
import FooterBackground from "../images/background_footer.jpg"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "url(" + FooterBackground + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [breakpoints.up("lg")]: {
      backgroundAttachment: "fixed"
    },
    [breakpoints.down("md")]: {
      height: "60vh"
    },
    [breakpoints.down("xs")]: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    }
  },
  logo: {
    maxWidth: "2rem"
  },
  title: {
    color: "white",
    marginTop: "1.5rem",
    fontSize: "1.75rem",
    fontWeight: "bold",
    fontFamily: "Heebo, sans-serif"
  },
  logosContainer: {
    display: "flex"
  },
  logoContainer: {
    padding: "5em"
  },
  logoLink: {
    display: "block",
    transform: "scale(1)",
    transition: "transform 500ms",
    "&:hover": {
      transform: "scale(1.25)"
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>

        <h5 className={classes.title}>
          <FormattedMessage id="footer.title" />
        </h5>
      </div>
      <div className={classes.logosContainer}>
        <div className={classes.logoContainer}>
          <a
            className={classes.logoLink}
            href="https://www.facebook.com/praximisdesign"
            target="_blank"
          >
            <img className={classes.logo} src={FacebookLogo} />
          </a>
        </div>
        <div className={classes.logoContainer}>
          <a
            className={classes.logoLink}
            href="https://www.instagram.com/praximisdesign"
            target="_blank"
          >
            <img className={classes.logo} src={InstagramLogo} />
          </a>
        </div>
        <div className={classes.logoContainer}>
          <a
            className={classes.logoLink}
            href="https://twitter.com/praximis"
            target="_blank"
          >
            <img className={classes.logo} src={TwitterLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
