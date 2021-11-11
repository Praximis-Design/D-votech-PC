import React from "react";
import { FormattedMessage } from "react-intl";

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
            href="https://www.facebook.com/devotechpc"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className={"footerLogoContainer"}>
          <a
            className={"footerLogoLink"}
            href="https://www.instagram.com/devotechpc"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className={"footerLogoContainer"}>
          <a
            className={"footerLogoLink"}
            href="https://twitter.com/DevotechPC"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
      <div>
        <h5 className={"footerCopyrights"}>
          <FormattedMessage id="footer.copyrights" />
        </h5>
      </div>
    </div>
  );
};

export default Footer;
