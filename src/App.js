import Navbar from '../src/Navbar/Navbar'
import About from './About/About';
import Footer from './Footer/Footer';
import Products from './Products/Products';
import Services from './Services/Services';
import Home from './Home/Home';
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
//     <Router>
// <>
//   <Routes>
//   <Route path="/" element={<Navbar />} />
//     <Route path="/products" element={<Products/>} />
//     <Route path="/aboutUs" element={<About />} />
//     <Route path="/services" element={<Services/>} />
//     <Route path="/footer" element={<Footer/>} />
//   </Routes>
// </>
// </Router>
<>

<Footer/>
</>
  );
}

export default App;
