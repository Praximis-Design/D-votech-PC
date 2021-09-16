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

  return (
    <>
    <StaticIntlProvider locale={locale} >
      <DefaultLayout title={<FormattedMessage id="services.title" values={{ br: <br></br> }} />}
        handleChange={handleChange}
        backgroundImageUrl="/img/background_header_homepage.jpg">
          <Section>
            <Container maxWidth="lg">
              <Section>
              <Grid item xs={12}>
                <Fade>
                  <Article text={<FormattedMessage id="services.computerRepairDescription" />} imageUrl={"/img/homepage_mission.jpg"} isReversed={true}></Article>
                </Fade>
              </Grid>
              </Section>
              
              <Section>              
              <Grid item xs={12}>
                <Fade>
                  <Article text={<FormattedMessage id="services.customConfigDescription" />} imageUrl={"/img/homepage_mission.jpg"} isReversed={false}></Article>
                </Fade>
              </Grid>
              </Section>
              
              <Section>
              <Grid item xs={12}>
                <Fade>
                  <Article text={<FormattedMessage id="services.computerModifDescription" />} imageUrl={"/img/homepage_mission.jpg"} isReversed={true}></Article>
                </Fade>
              </Grid>
              </Section>

              <Section>
              <Grid item xs={12}>
                <Fade>
                  <Article text={<FormattedMessage id="services.homeDeliveryDescription" />} imageUrl={"/img/homepage_mission.jpg"} isReversed={false}></Article>
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
