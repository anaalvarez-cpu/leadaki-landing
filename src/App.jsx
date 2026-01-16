import React from 'react';
// Importamos todas las secciones
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { RevenueLoop } from './components/sections/RevenueLoop';
import { ExpandingCards } from './components/sections/ExpandingCards'; 
import { Services } from './components/sections/Services';
import { GooglePartner } from './components/sections/GooglePartner';
import { SocialProof } from './components/sections/SocialProof';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/sections/Footer';

function App() {
    return (
        <div className="bg-[#0f172a] min-h-screen text-white font-sans selection:bg-pink-500 selection:text-white">
            
            {/* Barra de navegación arriba fija */}
            <Navbar />
            
            <main>
                {/* 1. Sección Principal (Vender es dar ventaja) */}
                <Hero />
                
                {/* 2. Loop de Ingresos (Atraer, Empoderar, Conectar) */}
                <RevenueLoop />
                
                {/* 3. ¡TU NUEVA SECCIÓN DE TARJETAS! (Reemplaza a la antigua) */}
                <ExpandingCards />
                
                {/* 4. Lista de servicios */}
                <Services />

                 {/* 5. Lista de servicios */}
                <GooglePartner />
                
                {/* 6. Casos de éxito y logos */}
                <SocialProof />
                
                {/* 7. Testimonios */}
                <Testimonials />
            </main>

            {/* Pie de página con formulario */}
            <Footer />
            
        </div>
    );
}

export default App;