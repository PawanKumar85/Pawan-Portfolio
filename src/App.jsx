import React from "react";
import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Platform from "./components/Platform/Platform";
import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";
import data from "./Data/personalData.json";
import Education from "./components/Education/Education";
import ContactPageOne from "./components/Contact2/Contact2"
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div className={style.App}>
      <Navbar data={data} />
      <Hero data={data} />
      <About data={data} />
      <Education data={data}/>
      <Experience data = {data} />
      <Platform data={data}/>
      <Projects data={data}/>
      {/* <Contact data={data} /> */}
      <ContactPageOne/>
      <Footer/>

    </div>
  );
}

export default App;
