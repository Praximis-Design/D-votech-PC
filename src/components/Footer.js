import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import FacebookLogo from "../images/logo_facebook.png"
import InstagramLogo from "../images/logo_instagram.png"
import TwitterLogo from "../images/logo_twitter.png"
import FooterBackground from "../images/background_footer.jpg"

const Footer = () => {
  
  return (
    <div id="footer">
      <div>

        <h5 className={"footerTitle"}>
          <FormattedMessage id="footer.title" />
        </h5>
      </div>
      <div className={"footerLogosContainer"}>
        <div className={"footerLogoContainer"}>
          <a
            className={"footerLogoLink"}
            href="https://www.facebook.com/praximisdesign"
            target="_blank"
          >
            <img className={"footerLogo"} src={FacebookLogo} />
          </a>
        </div>
        <div className={"footerLogoContainer"}>
          <a
            className={"footerLogoLink"}
            href="https://www.instagram.com/praximisdesign"
            target="_blank"
          >
            <img className={"footerLogo"} src={InstagramLogo} />
          </a>
        </div>
        <div className={"footerLogoContainer"}>
          <a
            className={"footerLogoLink"}
            href="https://twitter.com/praximis"
            target="_blank"
          >
            <img className={"footerLogo"} src={TwitterLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
