import './App.css';
//router
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
//components
import Header from './components/Header';
import Footer from './components/Footer'
//pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import NotFoundPage from './pages/NotFoundPage';
import 'slick-carousel/slick/slick.css';




function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
