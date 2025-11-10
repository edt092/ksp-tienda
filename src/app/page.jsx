import StorytellingHero from '@/components/StorytellingHero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCard from '@/components/ProductCard';
import { Palette, Zap, Sparkles, MessageCircle } from 'lucide-react';

import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';

export const metadata = {
  title: 'KS Promocionales - Productos Promocionales Personalizados Ecuador',
  description: 'Productos promocionales con storytelling que convierten. Textiles, tecnología, oficina y más personalizados con tu marca. Cotiza por WhatsApp en Ecuador.',
  openGraph: {
    title: 'KS Promocionales - Productos Promocionales Ecuador',
    description: 'Productos promocionales con storytelling que convierten. Cotiza por WhatsApp.',
  },
};

export default function HomePage() {
  // Get featured and bestseller products
  const featuredProducts = productsData.filter(p => p.featured || p.bestseller).slice(0, 6);

  // Get category info for products
  const getCategory = (categoryId) => {
    return categoriesData.find(c => c.id === categoryId);
  };

  return (
    <>
      {/* Hero Section */}
      <StorytellingHero />

      {/* Categories Section */}
      <CategoryGrid categories={categoriesData} />

      {/* Featured Products Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Nuestros productos más populares que han ayudado a marcas a contar sus historias
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={getCategory(product.categoryId)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¿Por Qué Elegir KS Promocionales?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4">
              No solo vendemos productos, creamos experiencias de marca
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Palette className="w-12 h-12 md:w-14 md:h-14" />,
                title: 'Diseño Personalizado',
                description: 'Tu visión, nuestra experiencia. Diseños sin límites para tu marca.',
              },
              {
                icon: <Zap className="w-12 h-12 md:w-14 md:h-14" />,
                title: 'Entrega Rápida',
                description: 'Cotizaciones en 48h. Producción eficiente en todo Ecuador.',
              },
              {
                icon: <Sparkles className="w-12 h-12 md:w-14 md:h-14" />,
                title: 'Calidad Premium',
                description: 'Materiales de primera. Técnicas de personalización de alta durabilidad.',
              },
              {
                icon: <MessageCircle className="w-12 h-12 md:w-14 md:h-14" />,
                title: 'Asesoría Directa',
                description: 'Atención personalizada por WhatsApp. Resolvemos todas tus dudas.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
