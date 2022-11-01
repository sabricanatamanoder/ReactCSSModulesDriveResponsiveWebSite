import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero"
import Find from "./components/find/Find"
import Driver from './components/driver/Driver'
import Luxury from "./luxury/Luxury";
import Footer from "./footer/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
