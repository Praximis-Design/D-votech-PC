import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";
import HeaderBackground from "../images/Header.png";
import TwitterHeaderBackground from "../images/TwitterHeader.jpg";
import Favicon from "../images/favicon/favicon.ico";

const DefaultLayout = ({ title, backgroundImageUrl, children, handleChange }) => {

  return (
    <>
      <Helmet title="Devotech PC" defer={false}>
        {/*<!-- Primary Meta Tags -->*/}
        <meta name="title" content="Devotech PC" />
        <meta name="description" content="Devotech PC is the perfect place for your computer needs." />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devotechpc.com/" />
        <meta property="og:title" content="Devotech PC" />
        <meta property="og:description" content="Devotech PC is the perfect place for your computer needs." />
        <meta property="og:image" content={HeaderBackground} />

        {/*<!-- Twitter -->*/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.devotechpc.com/" />
        <meta name="twitter:title" content="Devotech PC" />
        <meta name="twitter:description" content="Devotech PC is the perfect place for your computer needs." />
        <meta name="twitter:image:src" content={HeaderBackground} />

        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
      <Header title={title} backgroundImageUrl={backgroundImageUrl} handleChange={handleChange} />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
