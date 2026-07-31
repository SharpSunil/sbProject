
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
