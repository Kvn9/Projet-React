import '../src/App.css'
import { Link, Outlet, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Connexion from '../src/pages/Login/Login'
import Header from '../src/components/Header/Header'
import '../src/pages/Login/Login.css'
import '../src/components/Header/Header.css'
import Footer from '../src/components/Footer/Footer'
import '../src/components/Footer/Footer.css'
import Inscription from '../src/pages/Register/Register'
import Home from './pages/Home/Home'
import Cabinet from './pages/Cabinets/Cabinet'
import Admin from './pages/Admin/Admin'
import Error404 from './pages/Error404/Error404'
import Tarifs from './pages/Tarifs/Tarifs'
import { useAuth } from '../context'
import ModifierUser from './pages/ModifierUser/ModifierUser'


const ProtectedRoute = () => {
  return user ? <Outlet/> : <Navigate to="/accueil" />;
};

function App() {
  const { user } = useAuth();

  return (
    <>
 <Header />
  {user ? (
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path='/accueil' element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/cabinets" element={<Cabinet />} />
          <Route path="*" element={<Error404 />} />
          <Route path='/tarifs' element={<Tarifs />} />
          <Route path='/modifier/:id' element={<ModifierUser />} />
        </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/accueil' element={<Home />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/cabinets" element={<Cabinet />} />
            <Route path="*" element={<Error404 />} />
            <Route path='/tarifs' element={<Tarifs />} />
            <Route path='/modifier/id' element={<ModifierUser />} />
          </Routes>
  )
      }
   <Footer />  
  </>
  )
}

export default App
