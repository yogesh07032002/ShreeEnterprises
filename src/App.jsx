import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./pages/About";


import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

import { Choose } from "./pages/Choose";
import { ContactForm } from "./pages/ContactForm";
import { Products } from "./pages/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} /> {/* ✅ Corrected */}
          <Route path="/choose" element={< Choose/>} />
          <Route path="/product" element={<Products />} />
          

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;