'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CategoryGrid({ categories }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="categorias" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Cada categoría cuenta una historia única. Encuentra la perfecta para tu marca.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Dark overlay filter */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Benefits list */}
                <div className={`space-y-2 transition-all duration-500 ${hoveredId === category.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {category.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/90 text-xs md:text-sm">
                      <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-4 md:mt-6 flex items-center text-white font-semibold group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base">
                  <span>Ver productos</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:ml-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
