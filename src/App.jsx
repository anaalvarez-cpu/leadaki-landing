import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';

// Páginas
import { Home } from './pages/Home';
import { Proposito } from './pages/Proposito';
import { WhyLeadaki } from './pages/WhyLeadaki';
import { WhyGrowth } from './pages/WhyGrowth';
import { ComoTrabajamos } from './pages/ComoTrabajamos';
import { RevenueGrowthSystem } from './pages/RevenueGrowthSystem';
import { DiagnosticoDigital } from './pages/DiagnosticoDigital';
import { ModeloPartnership } from './pages/ModeloPartnership';
import { Soluciones } from './pages/Soluciones';
import { PaidMedia } from './pages/PaidMedia';
import { DataAnalytics } from './pages/DataAnalytics';
import { UxUi } from './pages/UxUi';

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
            <Route path="/proposito-y-vision" element={<Proposito />} />
            <Route path="/por-que-leadaki" element={<WhyLeadaki />} />
            <Route path="/por-que-growth" element={<WhyGrowth />} />
            <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
            <Route path="/revenue-growth-system" element={<RevenueGrowthSystem />} />
            <Route path="/diagnostico-digital" element={<DiagnosticoDigital />} />
            <Route path="/modelo-partnership" element={<ModeloPartnership />} />
            <Route path="/soluciones" element={<Soluciones />} />
            <Route path="/paid-media" element={<PaidMedia />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/ux-ui" element={<UxUi />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;