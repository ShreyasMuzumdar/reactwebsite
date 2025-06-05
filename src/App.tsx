import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
