import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import BookShelf from './components/BookShelf';
import About from './components/About';
import Footer from './components/Footer';


function Home() {
  return (
    <div id="top">
      <Nav />
      <Hero />
      <BookShelf />
      <About />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}
