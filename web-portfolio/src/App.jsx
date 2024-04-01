import Footer from './components/footer'
import Navbar from './components/navbar'
import Dashboard from './pages/dashboard'
import Projects from './pages/projects'
import Skills from './pages/skills'

function App() {
  return (
    <>
      <Navbar/>
      <Dashboard/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App