import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skils from './components/Skills'
function App() {
  return (
    <>
      <NavBar/>
      <About/>
      <Experience/>
      {/* <Projects/> */}
      <Skils/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
