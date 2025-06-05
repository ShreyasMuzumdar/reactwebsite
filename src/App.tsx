import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
