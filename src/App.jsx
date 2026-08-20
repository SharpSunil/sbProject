
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'
import About from './pages/About'
import FAQ_Page from './pages/Faq/FAQ_Page'
import Error from './pages/Error/Error'
import Team from './pages/Team/Team'



function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/faq" element={<FAQ_Page /> } />

       <Route path="/team" element={<Team /> } />
       <Route path="*" element={<Error /> } />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
