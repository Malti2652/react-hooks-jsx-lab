// import React from "react";
// import { image } from "../data/data";

// function About() {
//   return <div>About</div>;
// }

// export default About;


import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a web developer passionate about building great user experiences.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
