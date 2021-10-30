import React from "react";

const Section = ({ style, children }) => {
  
  return <div style={style} className={"sectionWrapper"}>{children}</div>;
};

export default Section;
