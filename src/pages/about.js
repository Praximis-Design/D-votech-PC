import * as React from "react";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import DefaultLayout from "../components/DefaultLayout";
import StaticIntlProvider from "../components/StaticIntlProvider";
import {
  Container,
  Grid,
  useMediaQuery
} from "@material-ui/core";
import Article from "../components/Article";
import Section from "../components/Section";
import HeaderBackgroundDesktop from "../images/a_propos_Desktop.jpg"
import HeaderBackgroundPhone from "../images/à_propos_iPhone.jpg"
import HeaderBackgroundTablet from "../images/à_propos_iPad.jpg"
import CustomImage from "../images/a_propos_desktop3_small.jpg"
import DeliveryImage from "../images/a_propos_desktop2_small.jpg"
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
        <DefaultLayout title={<FormattedMessage id="about.title" values={{ br: <br></br> }} />}
          handleChange={handleChange}
          backgroundImageUrl={headerBackground}>
          <Section style={{overflow: "hidden"}}>
            <Container maxWidth="lg">

              <Section>
                <Grid item xs={12}>
                    <Article text={<FormattedMessage id="about.customerServiceDescription" />} imageUrl={CustomImage} isReversed={true}></Article>
                </Grid>
              </Section>

              <Section>
                <Grid item xs={12}>
                    <Article text={<FormattedMessage id="about.homeServiceDescription" />} imageUrl={DeliveryImage} isReversed={false}></Article>
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
