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
import GeometricPatterns from './components/GeometricPatterns'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <GeometricPatterns 
          density="medium" 
          speed="slow" 
          opacity={0.15}
          colors={['#FFE135', '#FFD700', '#F4D03F', '#FFF59D', '#FFF9C4']}
          className="fixed-background"
        />
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
