import React from 'react'
import "./App.css";
import Header from "./components/Header/header.jsx"
import TopContainer from './components/TopContainer/topcontainer.jsx';
import Skillscontainer from './components/skillscontainer/skillscontainer.jsx';
import Projectcontainer from './components/ProjectcContainer/projectcontainer.jsx';
import Experiancecontainer from "./components/ExperianceContainer/experiancecontainer.jsx"
import Contact from "./components/Contact/Contact.jsx"



const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <Skillscontainer/>
      <Projectcontainer/>
      <Experiancecontainer/>
      <Contact/>


    </div>
  )
}

export default App
