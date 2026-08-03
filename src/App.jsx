
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'
import About from './pages/About'



function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
