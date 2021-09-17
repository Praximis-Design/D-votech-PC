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
import HeaderBackground from "../images/background_header_homepage.jpg"
import HomepageMission from "../images/homepage_mission.jpg"
import "../app.css";

// markup
const AboutPage = ({ location }) => {

  const handleChange = (e) => {
    setLocale(e.target.name);
  };

  useEffect(() => {
    if (location.state != null) {
      setLocale(location.state.language)
    }
  }, []);

  const [locale, setLocale] = useState("en")

  return (
    <>
      <StaticIntlProvider locale={locale} >
        <DefaultLayout title={<FormattedMessage id="about.title" values={{ br: <br></br> }} />}
          handleChange={handleChange}
          backgroundImageUrl={HeaderBackground}>
          <Section>
            <Container maxWidth="lg">

              <Section>
                <Grid item xs={12}>
                  <Fade>
                    <Article text={<FormattedMessage id="about.customerServiceDescription" />} imageUrl={HomepageMission} isReversed={true}></Article>
                  </Fade>
                </Grid>
              </Section>

              <Section>
                <Grid item xs={12}>
                  <Fade>
                    <Article text={<FormattedMessage id="about.homeServiceDescription" />} imageUrl={HomepageMission} isReversed={false}></Article>
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

export default AboutPage
