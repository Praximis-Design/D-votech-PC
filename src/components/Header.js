import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavDesktop from "./NavDesktop";
import NavTabletMobile from "./NavTabletMobile";
import { Hidden } from "@material-ui/core";
import LanguageSwitcher from "./LanguageSwitcher";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    position: "relative",
    height: "100vh",
    //backgroundImage: ({ backgroundImageUrl }) => `url('${backgroundImageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [breakpoints.up("lg")]: {
      backgroundAttachment: "fixed"
    },
    [breakpoints.down("md")]: {
      height: "80vh"
    }
  },
  title: {
    position: "absolute",
    top: "30%",
    left: "50%",
    width: "90%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0px 0px 5px black"
  },
  topRightElement: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    padding: spacing(2)
  },
  titleContainer: {
    position: "relative",
    height: "100%",
    marginTop: "5em"
  }
}));

const Header = ({ title, backgroundImageUrl, handleChange }) => {

  const classes = useStyles({ backgroundImageUrl });
  return (
    <div className={classes.root} id="header">
      <Hidden smDown>
        <NavDesktop />
        <div className={classes.topRightElement}>
          <LanguageSwitcher handleChange={handleChange}/>
        </div>
      </Hidden>
      <Hidden mdUp>
        <NavTabletMobile />
      </Hidden>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
