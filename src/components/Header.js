import React from "react";
import NavDesktop from "./NavDesktop";
import NavTabletMobile from "./NavTabletMobile";
import { useMediaQuery } from "@material-ui/core";

const Header = ({ title, backgroundImageUrl, handleChange }) => {

  const isTabletOrPhone = useMediaQuery("(max-width: 1366px)");

  return (
    <div id="header">
      {!isTabletOrPhone && (
        <NavDesktop handleChange={handleChange}/>
      )}
      {isTabletOrPhone &&(
        <NavTabletMobile handleChange={handleChange}/>
      )}        
      <div className={"headerTitleContainer"} style={{backgroundImage: "url(" + backgroundImageUrl + ")"}}>
        <h1 className={"headerTitle"}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
