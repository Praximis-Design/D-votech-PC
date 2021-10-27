import React from "react";
import { Grid, TextField, Button, Typography, Fade } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { FormattedMessage } from "react-intl";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Icon from '@material-ui/core/Icon';
import emailjs from 'emailjs-com';

// Auteur : Samuel Hénault
// Description : Component qui sert de formulaire de contact
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailBody: "",
      firstAndLastName: "",
      email: "",
      phone: "",
      hasSuccessMessage: false,
      hasErrorMessage: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  // Auteur : Samuel Hénault
  // Description : Fonction qui permet d'envoyer le courriel avec emailjs
  sendEmail(e) {
    // Annuler l'effet normal du bouton submit form
    e.preventDefault();

    // Lien avec le template emailjs
    // Pour tester : template_lxcz5vm 
    // Pour Live : template_a3gk8a5
    emailjs.sendForm('outlook', '', e.target, 'user_Eu8hJ5gCxt8agTbbnCae5')
      .then((result) => {
        this.setState({
          hasSuccessMessage: true,
          emailBody: "",
          firstAndLastName: "",
          email: "",
          phone: ""
        });

      }, (error) => {
        this.setState({
          hasErrorMessage: true,
          emailBody: "",
          firstAndLastName: "",
          email: "",
          phone: ""
        });
      });
  }

  // Auteur : Samuel Hénault
  // Description : Fonction qui permet de faire l'update des states avec les inputs de l'usager
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    const customStyle = { marginBottom: "2rem" }

    return (
      <>
        <form onSubmit={this.sendEmail} className="contactForm">
          {/* Section First et Last Name */}
          <FormattedMessage id="contact.firstAndLastName">
          { placeholder =>
            <input type="text"
                  className="contactTextField"
                  placeholder={placeholder}
                  value={this.state.firstAndLastName}
                  name="firstAndLastName"
                  onChange={this.handleChange}
                  required
            />
          }
          </FormattedMessage>

          {/* Section Phone */}
          <FormattedMessage id="contact.phone">
          { placeholder =>
            <input type="text"
                  className="contactTextField"
                  placeholder={placeholder}
                  value={this.state.phone}
                  name="phone"
                  onChange={this.handleChange}
                  required
            />
          }
          </FormattedMessage>

          {/* Section Email */}
          <FormattedMessage id="contact.email">
          { placeholder =>
            <input type="text"
                  className="contactTextField"
                  placeholder={placeholder}
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                  required
            />
          }
          </FormattedMessage>

          {/* Section Email Body */}
          <FormattedMessage id="contact.emailBody">
          { placeholder =>
            <textarea 
                  className="contactTextArea"
                  placeholder={placeholder}
                  value={this.state.emailBody}
                  name="emailBody"
                  onChange={this.handleChange}      
                  required
            />
          }
          </FormattedMessage>

          <FormattedMessage id="contact.sendButton">
          { buttonText =>
            <button type="submit" className="contactSendButton" text={buttonText} >{buttonText}</button>
          }
          </FormattedMessage>

          <Fade in={this.state.hasSuccessMessage} mountOnEnter unmountOnExit>
            <Alert onClose={() => { this.setState({ hasSuccessMessage: false }); }} severity="success">
              <Typography variant="p" component="p" color="primary" >
                <FormattedMessage id="contact.successMessage"></FormattedMessage>
              </Typography>
            </Alert>
          </Fade>
          <Fade in={this.state.hasErrorMessage} mountOnEnter unmountOnExit>
            <Alert onClose={() => { this.setState({ hasErrorMessage: false }); }} severity="success">
              <Typography variant="p" component="p" color="primary" >
                <FormattedMessage id="contact.errorMessage"></FormattedMessage>
              </Typography>
            </Alert>
          </Fade>
        </form>
      </>
    );
  }

};

export default ContactForm;
