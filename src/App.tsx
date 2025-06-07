import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Robots from './components/Robots'
import Resume from './components/Resume'
import Contact from './components/Contact'
import AnimatedBackground from './components/AnimatedBackground'
import GradientBackground from './components/GradientBackground'

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Header />
      <main>
        <AboutMe />
        <GradientBackground variant="tech" speed="slow">
          <Projects />
        </GradientBackground>
        <Robots />
        <GradientBackground variant="subtle" speed="medium">
          <Resume />
        </GradientBackground>
        <Contact />
      </main>
    </div>
  )
}

export default App
