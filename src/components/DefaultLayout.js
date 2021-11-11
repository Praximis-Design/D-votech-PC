import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";
import LogoDevotech from "../images/logo_blanc.png"

const DefaultLayout = ({ title, backgroundImageUrl, children, handleChange, location }) => {

  return (
    <>
      <Helmet>
        <title>Devotech PC</title>
        <meta property="og:title" content="Devotech PC" />
        <meta property="og:image" itemProp="image" content={LogoDevotech} />
        <meta property="og:description" content="Test de description"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.devotechpc.com/"/>
        <meta property="twitter:title" content="Devotech PC"/>
        <meta property="twitter:description" content="Test de description"/>
        <meta property="twitter:image" itemProp="image"  content={LogoDevotech}/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Helmet>
      <Header title={title} backgroundImageUrl={backgroundImageUrl} handleChange={handleChange} />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
