import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Portofolio from './components/Portofolio'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Experience></Experience>
            <Education></Education>
            <Portofolio></Portofolio>
            <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
