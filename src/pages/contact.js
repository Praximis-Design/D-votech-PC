import * as React from "react";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import DefaultLayout from "../components/DefaultLayout";
import StaticIntlProvider from "../components/StaticIntlProvider";
import {
  Container,
  Grid,
  Button,
  useMediaQuery,
  makeStyles,
  Fade
} from "@material-ui/core";
import Article from "../components/Article";
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

  const isTablet = useMediaQuery("(max-width: 1024px) and (min-width: 601px)");
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
          backgroundImageUrl={headerBackground}>
          <Section>
            <Container maxWidth="lg">

              <Section>
                <Grid item xs={12} className="contactMoreInfo">
                    <FormattedMessage id="contact.moreInfoDescription" />
                </Grid>
              </Section>

              <Section>
                <ContactForm></ContactForm>
              </Section>

            </Container>
          </Section>
        </DefaultLayout>
      </StaticIntlProvider>
    </>
  )
}

export default ContactPage
