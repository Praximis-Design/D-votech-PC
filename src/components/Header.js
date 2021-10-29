import React from "react";
import NavDesktop from "./NavDesktop";
import NavTabletMobile from "./NavTabletMobile";
import { Hidden } from "@material-ui/core";

const Header = ({ title, backgroundImageUrl, handleChange }) => {

  return (
    <div id="header">
      <Hidden smDown>
        <NavDesktop handleChange={handleChange}/>
      </Hidden>
      <Hidden mdUp>
        <NavTabletMobile handleChange={handleChange}/>
      </Hidden>
      <div className={"headerTitleContainer"} style={{backgroundImage: "url(" + backgroundImageUrl + ")"}}>
        <h1 className={"headerTitle"}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
