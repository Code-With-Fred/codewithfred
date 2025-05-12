import React from 'react'
import Portfolio from './Component/Portfolio'
import About from './Component/about'
import Services from './Component/services'
import ProjectSection from './Component/project'
import Skills from './Component/skill'
import Contact from './Component/contact'

export const App = () => {
  return (
 <div>
  <Portfolio/>
  <About/>
  <Services/>
  <ProjectSection/>
  <Skills/>
  <Contact/>
 </div>
  )
}
