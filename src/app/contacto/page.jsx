import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contacto | Productos Promocionales Ecuador - Quito y Guayaquil | KS',
  description: 'Contacta a KS Promocionales para productos promocionales en Ecuador. Atendemos Quito, Guayaquil y todo el país. Cotiza tus artículos promocionales por WhatsApp.',
  alternates: {
    canonical: 'https://www.kronosolopromocionales.com/contacto',
  },
  openGraph: {
    title: 'Contacto | Productos Promocionales Ecuador - Quito y Guayaquil | KS',
    description: 'Contacta a KS Promocionales para productos promocionales en Ecuador. Atendemos Quito, Guayaquil y todo el país.',
    url: 'https://www.kronosolopromocionales.com/contacto',
    siteName: 'KS Promocionales',
    locale: 'es_EC',
    type: 'website',
  },
};

export default function ContactoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KS Promocionales',
    description: 'Productos promocionales Ecuador: artículos promocionales y regalos corporativos en Quito, Guayaquil y todo el país.',
    url: 'https://www.kronosolopromocionales.com',
    email: 'claudiagonzalez@kronosolopromocionales.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EC',
      addressLocality: 'Quito',
      addressRegion: 'Pichincha'
    },
    areaServed: [
      { '@type': 'City', name: 'Quito' },
      { '@type': 'City', name: 'Guayaquil' },
      { '@type': 'Country', name: 'Ecuador' }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contacta con KS Promocionales
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Tu proveedor de productos promocionales en Ecuador. Atendemos Quito, Guayaquil y envíos a todo el país.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600">Quito, Ecuador</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Productos promocionales Quito con envíos a Guayaquil y todo Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:claudiagonzalez@kronosolopromocionales.com"
                      className="text-primary hover:underline break-all"
                    >
                      claudiagonzalez@kronosolopromocionales.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Cotiza por WhatsApp</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Respuesta rápida para cotizaciones de productos promocionales en Ecuador
                </p>
                <a
                  href="https://wa.me/593999999999?text=Hola,%20me%20interesa%20cotizar%20productos%20promocionales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            {/* Coverage Area */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cobertura Nacional
              </h2>

              <p className="text-gray-600 mb-6">
                Somos tu proveedor de <strong>productos promocionales en Ecuador</strong>.
                Realizamos entregas en las principales ciudades del país:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Productos Promocionales Quito</h3>
                  <p className="text-sm text-gray-600">
                    Sede principal con entrega directa en toda la ciudad y valles.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Productos Promocionales Guayaquil</h3>
                  <p className="text-sm text-gray-600">
                    Envíos frecuentes a la Costa con tiempos de entrega competitivos.
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Otras ciudades atendidas:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cuenca', 'Ambato', 'Manta', 'Machala', 'Santo Domingo', 'Loja', 'Ibarra', 'Riobamba'].map((city) => (
                    <span
                      key={city}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Productos promocionales Ecuador:</strong> artículos promocionales,
                  regalos corporativos, merchandising empresarial y más. Personalizamos con tu
                  logo en Quito, Guayaquil y todo el país.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Productos Promocionales para Tu Empresa en Ecuador
            </h2>
            <p className="text-gray-600 mb-8">
              En KS Promocionales ofrecemos artículos promocionales de calidad con personalización
              profesional. Desde mugs y textiles hasta tecnología y artículos de oficina.
              Cotiza sin compromiso y recibe asesoría personalizada para tu marca.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="text-sm text-gray-500">Productos promocionales Ecuador</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">Productos promocionales Quito</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">Productos promocionales Guayaquil</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
