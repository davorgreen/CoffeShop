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
import NotFoundPage from './pages/NotFoundPage';
import 'slick-carousel/slick/slick.css';
import FavoritesPage from './pages/FavoritesPage';
import { ToastContainer } from 'react-toastify';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingReturn from './pages/ShippingReturn';
import TermsCondition from './pages/TermsCondition';
import OurTeam from './pages/OurTeam';
import Payment from './pages/Payment';




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
          <Route path='/ourteam' element={<OurTeam />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/refundpolicy' element={<RefundPolicy />} />
          <Route path='/shippingreturn' element={<ShippingReturn />} />
          <Route path='/termscondition' element={<TermsCondition />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </div>
  )
}

export default App
