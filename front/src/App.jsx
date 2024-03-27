import '../src/App.css'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Connexion from '../src/pages/Login/Login'
import Header from '../src/components/Header/Header'
import '../src/pages/Login/Login.css'
import '../src/components/Header/Header.css'
import Footer from '../src/components/Footer/Footer'
import '../src/components/Footer/Footer.css'
import Slide from '../src/components/Slide/Slide'
import Inscription from '../src/pages/Register/Register'
import Statistique from './components/Statistiques/Statistique'
import Detail from './components/Detail/Detail'
import Card from './components/Card/Card'
import Home from './pages/Home/Home'






function App() {
  return (
    <>
 <Header />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/accueil' element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
    </Routes>
   <Footer />  
  </>
  )
}

export default App
