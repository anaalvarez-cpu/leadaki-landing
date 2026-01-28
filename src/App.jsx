import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Fijos (Siempre visibles)
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';

// Páginas (El contenido que cambia)
import { Home } from './pages/Home';

// Aquí importaremos las nuevas páginas luego (ej: import { About } from './pages/About';)

function App() {
  return (
    <Router>
      <div className="bg-[#0f172a] min-h-screen text-white font-sans selection:bg-pink-500 selection:text-white flex flex-col">
        
        {/* 1. NAVBAR FIJO ARRIBA */}
        <Navbar />

        {/* 2. CONTENIDO CAMBIANTE (RUTAS) */}
        <main className="flex-grow">
          <Routes>
            {/* Cuando la ruta es "/" (el inicio), muestra el componente Home */}
            <Route path="/" element={<Home />} />
            
            {/* Aquí agregaremos las otras rutas pronto:
            <Route path="/nosotros" element={<About />} /> 
            <Route path="/servicios" element={<ServicesPage />} /> 
            */}
          </Routes>
        </main>

        {/* 3. FOOTER FIJO ABAJO */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;