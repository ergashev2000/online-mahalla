import { useState } from "react";
import Navbar from "./companents/Navbar";
import Hero from "./companents/Header";
import Navigator from "./companents/Navigator";
import Service from "./companents/Services";
import Galereya from "./companents/Galereya";
import News from "./companents/News";
import FAQ from "./companents/FAQ";
import Content from "./companents/Contact";
import Footer from "./companents/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Navigator />
      <Service />
      <Galereya />
      <News />
      <FAQ />
      <Content />
      <Footer/>
    </>
  );
}

export default App;
