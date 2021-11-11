import * as React from "react";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import DefaultLayout from "../components/DefaultLayout";
import StaticIntlProvider from "../components/StaticIntlProvider";
import {
  useMediaQuery
} from "@material-ui/core";
import Section from "../components/Section";
import HeaderBackgroundDesktop from "../images/contact_Desktop.jpg"
import HeaderBackgroundPhone from "../images/contact_iPhone.jpg"
import HeaderBackgroundTablet from "../images/contact_iPad.png"
import ContactForm from "../components/ContactForm";
import "../app.css";

// markup
const ContactPage = ({ location }) => {

  const handleChange = (e) => {
    setLocale(e.target.name);
  };

  useEffect(() => {
    if (location.state != null) {
      setLocale(location.state.language)
    }
  }, []);

  const [locale, setLocale] = useState("en")

  // Gestion de l'image de fond pour le header
  let headerBackground = HeaderBackgroundDesktop;

  const isTablet = useMediaQuery("(max-width: 1366px) and (min-width: 601px)");
  const isPhone = useMediaQuery("(max-width: 600px)");

  if (isTablet) {
    headerBackground = HeaderBackgroundTablet;
  }
  else {
    headerBackground = isPhone ? HeaderBackgroundPhone : HeaderBackgroundDesktop;
  }

  return (
    <>
      <StaticIntlProvider locale={locale} >
        <DefaultLayout title={<FormattedMessage id="contact.title" values={{ br: <br></br> }} />}
          handleChange={handleChange}
          backgroundImageUrl={headerBackground}
          location="/contact/">
          <Section>
              <Section>
                <div className="contactMoreInfo">
                    <FormattedMessage id="contact.moreInfoDescription" values={{ br: <br></br> }} />
                </div>
              </Section>

              <Section>
                <ContactForm></ContactForm>
              </Section>
          </Section>
        </DefaultLayout>
      </StaticIntlProvider>
    </>
  )
}

export default ContactPage
