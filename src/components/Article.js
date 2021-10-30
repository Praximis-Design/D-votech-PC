import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";


const Article = ({ text, imageUrl, isReversed, title }) => {
  
  const isXsDown = useMediaQuery("(max-width: 600px)", {
    defaultMatches: true
  });
  let direction = isReversed ? "row-reverse" : "row";
  let alignItems = "center"// ? "stretch" : "center";

  if (isXsDown) {
    direction = "column-reverse";
  }

  return (
    <div>
      <Grid container alignItems={alignItems} direction={direction}>
        <Grid item sm={imageUrl ? 6 : 12}>
          <div className={imageUrl && isReversed ? "articleTextWrapperRight" : "articleTextWrapperLeft"}>
            <h6 className="articleTextWrapperTitle">{title}</h6>
            {text}
          </div>
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
