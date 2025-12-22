'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingBag, MessageCircle } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/catalogos-ksp/Catalogo Temporada nav 2025_page-0001.jpg',
    title: 'Catálogo Navidad 2025',
    subtitle: 'Regalos corporativos para fin de año',
    description: 'Sorprende a tus colaboradores y clientes con productos de calidad personalizados con tu marca',
    ctaStore: { text: 'Ver Productos', href: '/categorias' },
    ctaWhatsapp: { text: 'Cotizar Ahora', message: 'Hola, me interesa el catálogo de Navidad 2025' }
  },
  {
    id: 2,
    image: '/images/products-categoria/mugs-vasos-termos/termo-bamboo-500ml/termo-bamboo-500ml.jpg',
    title: 'Mugs y Termos',
    subtitle: 'Personaliza tu marca',
    description: 'Amplia variedad de mugs, termos y vasos personalizables para tu empresa',
    ctaStore: { text: 'Ver Colección', href: '/categoria/mugs-vasos-termos' },
    ctaWhatsapp: { text: 'Solicitar Cotización', message: 'Hola, me interesan los mugs y termos personalizados' }
  },
  {
    id: 3,
    image: '/images/products-categoria/tecnologia/reloj-inteligente-korbin-plus/reloj-inteligente-korbin-plus.jpg',
    title: 'Tecnología Promocional',
    subtitle: 'Innovación para tu marca',
    description: 'Audífonos, parlantes, cargadores y más productos tech personalizados',
    ctaStore: { text: 'Explorar Tech', href: '/categoria/tecnologia-accesorios' },
    ctaWhatsapp: { text: 'Pedir Info', message: 'Hola, me interesa la tecnología promocional' }
  },
  {
    id: 4,
    image: '/images/products-categoria/articulos-escritura/boligrafo-bambu/boligrafo-bambu.jpg',
    title: 'Artículos de Escritorio',
    subtitle: 'Impacta en cada oficina',
    description: 'Bolígrafos, libretas, organizadores y más para el día a día corporativo',
    ctaStore: { text: 'Ver Artículos', href: '/categoria/escritura-oficina' },
    ctaWhatsapp: { text: 'Cotizar', message: 'Hola, necesito artículos de escritorio personalizados' }
  },
  {
    id: 5,
    image: '/images/products-categoria/oficina/libreta-igor-jumbo/libreta-igor-jumbo.jpg',
    title: 'Artículos de Oficina',
    subtitle: 'Tu marca en cada escritorio',
    description: 'Libretas, calculadoras, sets de escritorio y más para el día a día corporativo',
    ctaStore: { text: 'Ver Artículos', href: '/categoria/oficina' },
    ctaWhatsapp: { text: 'Solicitar Precio', message: 'Hola, me interesan artículos de oficina corporativos' }
  }
];

export default function PromoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleWhatsAppClick = (message) => {
    const phoneNumber = '593999814838';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Promociones Especiales
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras ofertas exclusivas en productos promocionales personalizados
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Contenedor del slide */}
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Imagen */}
                    <div className="lg:w-1/2 relative">
                      <div className="aspect-[4/3] lg:aspect-[3/4] relative overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r"></div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <span className="inline-block text-primary font-semibold text-sm md:text-base mb-2">
                        {slide.subtitle}
                      </span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg mb-6 lg:mb-8 leading-relaxed">
                        {slide.description}
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <Link
                          href={slide.ctaStore.href}
                          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          <ShoppingBag className="w-5 h-5" />
                          {slide.ctaStore.text}
                        </Link>
                        <button
                          onClick={() => handleWhatsAppClick(slide.ctaWhatsapp.message)}
                          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          <MessageCircle className="w-5 h-5" />
                          {slide.ctaWhatsapp.text}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Siguiente slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary w-8 md:w-10'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
