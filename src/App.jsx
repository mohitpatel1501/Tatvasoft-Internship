import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Book from "./Pages/Book";
import Login from "./Pages/Login";


import Navbar from "./Components/global/Navbar";
import Footer from "./Components/global/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;