import * as React from "react";
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
import "../app.css";
import { formatMessage } from "@formatjs/intl";

const IndexPage = ({ location }) => {

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
        <DefaultLayout title={<FormattedMessage id="homepage.title" values={{ br: <br></br> }} />}
          handleChange={handleChange}
          backgroundImageUrl="/img/background_header_homepage.jpg">
          <Section>
            <Container maxWidth="lg">
              <Grid item xs={12}>
                <Fade>
                  <Article text={<FormattedMessage id="homepage.missionDescription" />} imageUrl={"/img/homepage_mission.jpg"} isReversed={true}></Article>
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
