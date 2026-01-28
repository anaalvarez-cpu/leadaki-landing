import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';

// Páginas
import { Home } from './pages/Home';
import { WhyLeadaki } from './pages/WhyLeadaki';

// ... imports ...

function App() {
  return (
    <BrowserRouter>
      {/* 👇 AQUÍ AGREGAMOS LA MAGIA DE NUEVO: selection:bg-pink-500 */}
      <div className="bg-[#0f172a] min-h-screen text-white font-sans flex flex-col selection:bg-pink-500 selection:text-white">
        
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/por-que-leadaki" element={<WhyLeadaki />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;