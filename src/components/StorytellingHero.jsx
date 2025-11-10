'use client';

import { useState, useEffect } from 'react';

export default function StorytellingHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 md:mb-8 text-xs md:text-sm animate-fade-in">
            <span>Productos Promocionales en Ecuador</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight animate-slide-down px-4">
            Tu Marca,
            <br />
            <span className="text-white drop-shadow-lg">Contada con Productos</span>
            <br />
            que Inspiran
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up px-4">
            Convertimos productos promocionales en historias memorables que conectan
            emocionalmente con tu audiencia. Sin catálogos aburridos, solo experiencias
            que venden.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-16 animate-scale-in px-4">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[120px] md:min-w-[150px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90 text-xs md:text-sm">Productos Únicos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[120px] md:min-w-[150px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">48h</div>
              <div className="text-white/90 text-xs md:text-sm">Cotización Rápida</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[120px] md:min-w-[150px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90 text-xs md:text-sm">Personalizable</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center animate-fade-in px-4">
            <a
              href="#categorias"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-base md:text-lg shadow-xl w-full sm:w-auto"
            >
              Explorar Productos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white/80 text-xs md:text-sm px-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Entrega en todo Ecuador</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Diseños sin límites</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Calidad garantizada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
