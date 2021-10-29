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

  const isXsDown = useMediaQuery("(max-width: 600px) and (orientation: portrait)");

  return (
    <>
      <StaticIntlProvider locale={locale} >
        <DefaultLayout title={<FormattedMessage id="contact.title" values={{ br: <br></br> }} />}
          handleChange={handleChange}
          backgroundImageUrl={isXsDown ? HeaderBackgroundPhone : HeaderBackgroundDesktop}>
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
