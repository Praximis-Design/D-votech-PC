import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavDesktop from "./NavDesktop";
import NavTabletMobile from "./NavTabletMobile";
import { Hidden } from "@material-ui/core";
import LanguageSwitcher from "./LanguageSwitcher";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({

  titleContainer: {
    position: "relative",
    height: "100%",
    marginTop: "5em"
  }
}));

const Header = ({ title, backgroundImageUrl, handleChange }) => {

  const classes = useStyles({ backgroundImageUrl });
  return (
    <div id="header">
      <Hidden smDown>
        <NavDesktop />
        <div className={"headerTopRightElement"}>
          <LanguageSwitcher handleChange={handleChange}/>
        </div>
      </Hidden>
      <Hidden mdUp>
        <NavTabletMobile />
      </Hidden>
      <div className={"headerTitleContainer"}>
        <h1 className={"headerTitle"}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
