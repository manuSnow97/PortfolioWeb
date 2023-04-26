import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Work from './components/Work'
import Resume from './components/Resume'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Work />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
