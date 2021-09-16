import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    padding: `${spacing(10)}px 0`,
    [breakpoints.down("md")]: {
      padding: `${spacing(5)}px 0`
    },
    [breakpoints.down("xs")]: {
      padding: `${spacing(3)}px 0`
    }
  }
}));

const Section = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Section;
