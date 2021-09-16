import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({ title, backgroundImageUrl, children, handleChange }) => {

  return (
    <>
      <Header title={title} backgroundImageUrl={backgroundImageUrl} handleChange={handleChange} />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
