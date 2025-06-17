import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import EducationExperience from './components/EducationExperience'
import Projects from './components/Projects'
import Robots from './components/Robots'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <AboutMe />
          <Skills />
          <EducationExperience />
          <Projects />
          <Robots />
          <Resume />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
