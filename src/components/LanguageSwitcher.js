import React from "react";
import { useIntl } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ palette, spacing, breakpoints }) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [breakpoints.up("md")]: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "0.75rem"
      }
    },
    link: {
      //...customStyles.linkWithHoverEffect,
      "&.disabled": {
        color: palette.primary.light,
        pointerEvents: "none",
        cursor: "default"
      }
    },
    separator: {
      color: "white",
      display: "block",
      marginLeft: spacing(0.5),
      marginRight: spacing(0.5)
    }
  })
);

const LanguageSwitcher = ({ handleChange }) => {
  const classes = useStyles();
  let intl = useIntl();
  let currentLanguage = intl.locale;

  return (
    <div className={classes.root}>
      <a
        className={`${classes.link} ${
          currentLanguage === "fr" ? "disabled" : ""
        }`}
        //href={getCurrentPathInOtherLocale("/index", "fr")}
        onClick={handleChange}
        name={"fr"}
      >
        FR
      </a>
      <span className={classes.separator}>|</span>
      <a
        className={`${classes.link} ${
          currentLanguage === "en" ? "disabled" : ""
        }`}
        //href={getCurrentPathInOtherLocale("/index", "en")}
        onClick={handleChange}
        name={"en"}
      >
        EN
      </a>
    </div>
  );
};

export default LanguageSwitcher;
