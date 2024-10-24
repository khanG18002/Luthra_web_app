import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  return (
      <div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* You can add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
