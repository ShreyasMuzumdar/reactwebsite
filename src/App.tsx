import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Robots from './components/Robots'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Robots />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
