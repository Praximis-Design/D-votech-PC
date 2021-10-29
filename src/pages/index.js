import * as React from "react";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import DefaultLayout from "../components/DefaultLayout";
import Article from "../components/Article";
import StaticIntlProvider from "../components/StaticIntlProvider";
import {
  Container,
  Grid,
  Button,
  useMediaQuery,
  makeStyles,
  Fade
} from "@material-ui/core";
import Section from "../components/Section";
import HeaderBackgroundDesktop from "../images/accueil_Desktop.jpg";
import HeaderBackgroundPhone from "../images/accueil_iPhone.jpg";
import HomepageMission from "../images/accueil_desktop2.jpg";
import "../app.css";

const IndexPage = ({ location }) => {

  let HeaderBackground = HeaderBackgroundDesktop;

  const handleChange = (e) => {
    setLocale(e.target.name);
  };

  useEffect(() => {
    if (location.state != null) {
      setLocale(location.state.language)
    }
  }, []);

  const [locale, setLocale] = useState("en")

  const isXsDown = useMediaQuery("(max-width: 600px) and (orientation: portrait)", {
    defaultMatches: true
  });

  if (isXsDown) {
    HeaderBackground = HeaderBackgroundPhone;
  }

  return (
    <>
      <StaticIntlProvider locale={locale} >
        <DefaultLayout title={<FormattedMessage id="homepage.title" values={{ br: <br></br> }} />}
          handleChange={handleChange}
          backgroundImageUrl={HeaderBackground}>
          <Section>
            <Container maxWidth="lg">
              <Grid item xs={12}>
                <Fade>
                  <Section>
                    <Article text={<FormattedMessage id="homepage.missionDescription" />} imageUrl={HomepageMission} isReversed={true}></Article>
                  </Section>
                </Fade>
              </Grid>
            </Container>
          </Section>
        </DefaultLayout>
      </StaticIntlProvider>
    </>
  )
}

export default IndexPage
