import './index.css'
import './responsive.css'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Skills from './components/skills/skills.jsx'
import Qualification from './components/qualifications/qualification.jsx'
import Services from './components/services/services.jsx'
import Footer from './components/footer/footer.jsx'
import { LanguageProvider } from './components/language.jsx';


function App() {

  return (
    <LanguageProvider>
     <Header />
     <Home /> 
     <About />
     <Skills />
     <Qualification />
     <Services />
     <Footer />
    </LanguageProvider>
  )
}

export default App
