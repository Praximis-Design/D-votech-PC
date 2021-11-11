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

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }        
      });
    });
    observer.observe(domRef.current);
    //return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="articleComponent">
      <Grid container alignItems={alignItems} direction={direction}>
        <Grid item sm={imageUrl ? 6 : 12}>
          <div ref={domRef} className={imageUrl && isReversed ? (isVisible ? "articleTextWrapperRight articleRight articleAnimationRight" : "articleTextWrapperRight articleRight") : 
                                                                (isVisible ? "articleTextWrapperLeft articleLeft articleAnimationLeft" : "articleTextWrapperLeft articleLeft") }>
            <h6 className="articleTextWrapperTitle">{title}</h6>
            {text}
          </div>
        </Grid>
        {imageUrl && (
          <Grid ref={domRef} item container alignItems="center" sm={6} className={isReversed ? (isVisible ? "articleLeft articleAnimationLeft" : "articleLeft") : 
                                                                                               (isVisible ? "articleRight articleAnimationRight" : "articleRight")}>
            <img src={imageUrl} alt="ArticleImage" />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Article;
