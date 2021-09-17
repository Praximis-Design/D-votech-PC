import React from 'react';
import DefaultLayout from './src/components/DefaultLayout';
import StaticIntlProvider from './src/components/StaticIntlProvider';
import HeaderBackground from "/src/images/background_header_homepage.jpg";
import { IntlProvider } from "react-intl";
import messagesEn from "/src/messages/en.json";
import messagesFr from "/src/messages/fr.json";
import { FormattedMessage } from "react-intl";

export function wrapPageElement({ element, props }) {

    let locale = "en";
    let messages = messagesEn;

    const handleChange = (e) => {
        locale = e.target.name;
        messages = locale === "en" ? messagesEn : messagesFr;
        console.log("ça passe ici " +locale);
    };

    console.log(element.type.name);
    console.log(props);

    return (
        <IntlProvider locale={locale} messages={messages}>
            <DefaultLayout {...props} 
                title={<FormattedMessage id="homepage.title" values={{ br: <br></br> }} />}
                handleChange={handleChange}
                backgroundImageUrl={HeaderBackground}>
                {element}
            </DefaultLayout>
        </IntlProvider>
    );
}