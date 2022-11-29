import React from "react";

import Hero from "../../companents/Header";
import Navigator from "../../companents/Navigator";
import Service from "../../companents/Services";
import Galereya from "../../companents/Galereya";
import News from "../../companents/News";
import FAQ from "../../companents/FAQ";
import Content from "../../companents/Contact";

const index = () => {
  return (
    <>
      <Hero />
      <Navigator />
      <Service />
      <Galereya />
      <News />
      <FAQ />
      <Content />
    </>
  );
};

export default index;
