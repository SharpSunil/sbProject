
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'
import About from './pages/About'
import FAQ_Page from './componant/Page_compo/Faq/FAQ_Page'



function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/faq" element={<FAQ_Page /> } />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
