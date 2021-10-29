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
import HeaderBackgroundDesktop from "../images/services_Desktop.jpg"
import HeaderBackgroundPhone from "../images/services_iPhone.jpg"
import RepairImage from "../images/services_Desktop2.jpg"
import ConfigImage from "../images/services_desktop3.jpg"
import ModifImage from "../images/services_desktop4.jpg"
import DeliveryImage from "../images/services_desktop5.jpg"
import "../app.css";

// markup
const ServicesPage = ({ location }) => {
  
  const handleChange = (e) => {
    setLocale(e.target.name);
  };

  useEffect(() => {
    if (location.state != null)
    {
      setLocale(location.state.language)
    }
}, []);

  const [locale, setLocale] = useState("en")

  let HeaderBackground = HeaderBackgroundDesktop;

  const isXsDown = useMediaQuery("only screen and (max-device-width: 768px) and (orientation: portrait)", {
    defaultMatches: true
  });

  if (isXsDown) {
    HeaderBackground = HeaderBackgroundPhone;
  }

  return (
    <>
    <StaticIntlProvider locale={locale} >
      <DefaultLayout title={<FormattedMessage id="services.title" values={{ br: <br></br> }} />}
        handleChange={handleChange}
        backgroundImageUrl={HeaderBackground}>
          <Section>
            <Container maxWidth="lg">
              <Section>
              <Grid item xs={12}>
                <Fade>
                  <Article title={<FormattedMessage id="services.computerRepairTitle" />} text={<FormattedMessage id="services.computerRepairDescription" />} imageUrl={RepairImage} isReversed={true}></Article>
                </Fade>
              </Grid>
              </Section>
              
              <Section>              
              <Grid item xs={12}>
                <Fade>
                  <Article title={<FormattedMessage id="services.customConfigTitle" />} text={<FormattedMessage id="services.customConfigDescription" />} imageUrl={ConfigImage} isReversed={false}></Article>
                </Fade>
              </Grid>
              </Section>
              
              <Section>
              <Grid item xs={12}>
                <Fade>
                  <Article title={<FormattedMessage id="services.computerModifTitle" />} text={<FormattedMessage id="services.computerModifDescription" />} imageUrl={ModifImage} isReversed={true}></Article>
                </Fade>
              </Grid>
              </Section>

              <Section>
              <Grid item xs={12}>
                <Fade>
                  <Article title={<FormattedMessage id="services.homeDeliveryTitle" />} text={<FormattedMessage id="services.homeDeliveryDescription" />} imageUrl={DeliveryImage} isReversed={false}></Article>
                </Fade>
              </Grid>
              </Section>
            </Container>
          </Section>
      </DefaultLayout>
    </StaticIntlProvider>
    </>
  )
}

export default ServicesPage
