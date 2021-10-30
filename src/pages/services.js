import * as React from "react";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import DefaultLayout from "../components/DefaultLayout";
import StaticIntlProvider from "../components/StaticIntlProvider";
import {
  Container,
  Grid,
  useMediaQuery,
  Fade
} from "@material-ui/core";
import Article from "../components/Article";
import Section from "../components/Section";
import HeaderBackgroundDesktop from "../images/services_Desktop.jpg"
import HeaderBackgroundPhone from "../images/services_iPhone.jpg"
import HeaderBackgroundTablet from "../images/services_iPad.jpg"
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

    const articles = document.querySelectorAll('.articleComponent');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {            

        let index = 0;

        for(var i = 0; i < articles.length; i++){
          if(articles[i] == entry.target) {
            index = i;
          }
        }

        if (entry.isIntersecting) {
          if(index % 2 == 0)
          {
            entry.target.classList.add('articleAnimationRight');
          }
          else
          {
            entry.target.classList.add('articleAnimationLeft');
          }
          return;
        }
  
        entry.target.classList.remove('articleAnimationRight');
        entry.target.classList.remove('articleAnimationLeft');
      });
    });
    
    articles.forEach(a => {
      observer.observe(a);
    }) 

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
      <DefaultLayout title={<FormattedMessage id="services.title" values={{ br: <br></br> }} />}
        handleChange={handleChange}
        backgroundImageUrl={headerBackground}>
          <Section style={{overflow: "hidden"}}>
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
