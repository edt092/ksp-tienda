'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ product, category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {product.bestseller && (
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-fade-in">
            MÁS VENDIDO
          </span>
        )}
        {product.featured && (
          <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-fade-in">
            DESTACADO
          </span>
        )}
      </div>

      {/* Image container */}
      <Link href={`/productos/${product.slug}`} className="block relative h-48 md:h-64 bg-gray-50 overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br from-primary/80 to-primary-light/60">
            <div className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-6xl opacity-40">
              {category?.icon || '📦'}
            </div>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Category tag */}
        {category && (
          <Link
            href={`/categorias/${category.slug}`}
            className="inline-block text-xs font-semibold text-gray-500 hover:text-primary uppercase tracking-wide mb-2 transition-colors"
          >
            {category.name}
          </Link>
        )}

        {/* Product name */}
        <Link href={`/productos/${product.slug}`}>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Short description */}
        <p className="text-gray-600 text-xs md:text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Features preview */}
        <div className="mb-4 space-y-1">
          {product.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-500">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
          {product.features.length > 2 && (
            <span className="text-xs text-gray-400 ml-6">+ {product.features.length - 2} más</span>
          )}
        </div>

        {/* Actions */}
        <Link
          href={`/productos/${product.slug}`}
          className="block w-full text-center px-4 py-2.5 md:py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-sm md:text-base shadow-md hover:shadow-lg"
        >
          Ver más detalles
        </Link>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 transform translate-x-10 -translate-y-10 rotate-45 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 bg-primary/10"></div>
    </div>
  );
}
