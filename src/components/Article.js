import React from "react";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  textWrapper: {
    paddingLeft: ({ isReversed }) => (isReversed ? spacing(3) : 0),
    paddingRight: ({ isReversed }) => (isReversed ? 0 : spacing(3)),
    [breakpoints.down("xs")]: {
      paddingTop: spacing(2),
      paddingLeft: "0!important",
      paddingRight: "0!important"
    }
  }
}));

const Article = ({ text, imageUrl, isReversed }) => {
  const classes = useStyles({ isReversed });
  /*const theme = useTheme();
  const isXsDown = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true
  });*/
  let direction = isReversed ? "row-reverse" : "row";
  let alignItems = "center"// ? "stretch" : "center";
/*
  if (isXsDown) {
    direction = "column-reverse";
  }*/

  return (
    <div className={classes.root}>
      <Grid container alignItems={alignItems} direction={direction}>
        <Grid item sm={imageUrl ? 6 : 12}>
          <div className={imageUrl ? classes.textWrapper : ""}>{text}</div>
        </Grid>
        {imageUrl && (
          <Grid item container alignItems="center" sm={6}>
            <img src={imageUrl} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Article;
