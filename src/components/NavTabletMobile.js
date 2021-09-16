import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: `${spacing(2)}px`,
    justifyContent: "space-between",
    [breakpoints.down("xs")]: {
      paddingTop: spacing(1)
    }
  },
  logo: {
    [breakpoints.down("xs")]: {
      maxWidth: "8rem"
    }
  },
  hamburger: {
    width: "60px",
    cursor: "pointer",
    [breakpoints.down("xs")]: {
      width: "40px"
    },
    "& > *": {
      height: "14px",
      backgroundColor: "white",
      [breakpoints.down("xs")]: {
        height: "6px"
      }
    },
    "& > * + *": {
      marginTop: spacing(0.6),
      [breakpoints.down("xs")]: {
        marginTop: spacing(0.5)
      }
    }
  },
  sideNav: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundImage: "url('/img/background_sidenav.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transform: "translateX(100%)",
    transition: "transform 500ms",
    "&.is-visible": {
      transform: "translateX(0)"
    }
  },
  closeButton: {
    fill: "white",
    width: "60px",
    [breakpoints.down("xs")]: {
      width: "30px"
    }
  },
  sideNavTop: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: spacing(2),
    paddingRight: spacing(2),
    paddingLeft: spacing(2),
    [breakpoints.down("xs")]: {
      paddingTop: spacing(1),
      paddingRight: spacing(2),
      paddingLeft: spacing(2)
    }
  },
  linksContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: spacing(4),
    textAlign: "center",
    [breakpoints.down("xs")]: {
      paddingTop: spacing(2)
    },
    "& a": {
      display: "block",
      color: "white",
      fontSize: "2rem",
      textDecoration: "none",
      fontWeight: "bold",
      [breakpoints.down("xs")]: {
        fontSize: "1.5rem"
      }
    },
    "& li + li": {
      marginTop: spacing(4),
      [breakpoints.down("xs")]: {
        marginTop: spacing(2)
      }
    }
  }
}));

const NavTabletMobile = () => {
  const classes = useStyles();
  const [isSideNavVisible, setIsSideNavVisible] = React.useState(false);

  const handleClickHamburger = () => {
    setIsSideNavVisible(true);
  };
  const handleClickCloseSidenav = () => {
    setIsSideNavVisible(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <div>
          <Link to="/index">
            <img
              className={classes.logo}
              src="/img/logo.png"
              alt="logo-praximis"
            />
          </Link>
        </div>
        <div>
          <div className={classes.hamburger} onClick={handleClickHamburger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.sideNav} ${isSideNavVisible ? "is-visible" : ""}`}
      >
        <div className={classes.sideNavTop}>
          <Link to="/index">
            <img
              className={classes.logo}
              src="/img/logo.png"
              alt="logo-praximis"
            />
          </Link>
          <svg
            onClick={handleClickCloseSidenav}
            className={classes.closeButton}
            viewBox="0 0 386.667 386.667"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
          </svg>
        </div>
        <div className={classes.linksContainer}>
          <ul>
            <li>
              <Link to="/index">
                à propos
              </Link>
            </li>
            <li>
              <Link to="/index">
                portfolio
              </Link>
            </li>
            <li>
              <Link to="/index">
                nos services
              </Link>
            </li>
            <li>
              <Link to="/index">
                nous contacter
              </Link>
            </li>
            <li>
              {/*<LanguageSwitcher />*/}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTabletMobile;
