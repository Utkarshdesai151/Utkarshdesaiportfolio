import './App.css'
import About from './component/About'
import Contact from './component/Contact'
// import Contact from './component/Contact'
import Header from './component/Header'
import Hero from './component/Hero'
import Languages from './component/Languages'
import Projects from './component/Project'
import Workexp from './component/Workexperience'
function App() {

  return (
    <div className=''>
      <Header />
      <Hero />
      <About />
      <Workexp />
      <Languages />
      <Projects />
      <Contact />
      <footer className="w-full py-4 bg-black flex justify-center">
        <p className="text-gray-400 text-sm text-center">
         @ made with ❤️ by Utkarsh Desai
        </p>
      </footer>
    </div>
  )
}

export default App
