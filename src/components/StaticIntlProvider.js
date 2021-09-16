import React from "react";
import { IntlProvider } from "react-intl";
import messagesEn from "../messages/en.json";
import messagesFr from "../messages/fr.json";

const StaticIntlProvider = ({ locale, children }) => {
  
  const messages = locale === "en" ? messagesEn : messagesFr;

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default StaticIntlProvider;
