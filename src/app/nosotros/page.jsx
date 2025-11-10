export const metadata = {
  title: 'Nosotros - KS Promocionales Ecuador',
  description: 'Conoce la historia de KS Promocionales, tu aliado en productos promocionales personalizados en Ecuador. Calidad, creatividad y resultados.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-primary via-primary-light to-white text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
            Somos KS Promocionales
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up px-4">
            No vendemos productos, contamos historias que convierten tu marca
            en una experiencia memorable para tus clientes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Nuestra Historia</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                En un mercado saturado de catálogos genéricos y productos sin alma, nació KS Promocionales
                con una misión clara: transformar los artículos promocionales en herramientas poderosas
                de storytelling que conecten emocionalmente con las audiencias.
              </p>
              <p>
                Creemos que cada producto personalizado es una oportunidad para contar la historia de tu
                marca. No importa si es una camiseta, un termo o una USB, cuando se diseña con propósito
                y se ejecuta con excelencia, se convierte en un embajador silencioso que habla por ti
                todos los días.
              </p>
              <p>
                Operamos 100% por WhatsApp porque sabemos que la conversación directa y humana es clave
                para entender tu visión y traducirla en productos que realmente impactan. Sin formularios
                complicados, sin esperas eternas. Solo tú, nosotros y ideas brillantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '💡',
                title: 'Creatividad',
                description: 'Diseños únicos que capturan la esencia de tu marca sin límites ni restricciones.',
              },
              {
                icon: '🎯',
                title: 'Resultados',
                description: 'Cada producto está pensado para generar conversiones y recordación de marca.',
              },
              {
                icon: '⚡',
                title: 'Agilidad',
                description: 'Respuestas en 48h. Producción eficiente. Entregas puntuales en todo Ecuador.',
              },
              {
                icon: '🤝',
                title: 'Compromiso',
                description: 'Tu éxito es nuestro éxito. Acompañamos cada proyecto de inicio a fin.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl md:text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              ¿Por Qué Somos Diferentes?
            </h2>
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: 'Enfoque en Storytelling',
                  description: 'No preguntamos "¿qué producto quieres?". Preguntamos "¿qué historia quieres contar?".',
                },
                {
                  title: 'Sin Precios Visibles',
                  description: 'Cada proyecto es único. Te damos cotizaciones personalizadas basadas en tus necesidades reales, no en tarifas genéricas.',
                },
                {
                  title: 'Conversión por WhatsApp',
                  description: 'Eliminamos fricciones. Un clic te conecta con nosotros para iniciar tu proyecto sin burocracia.',
                },
                {
                  title: 'Diseño Ilimitado',
                  description: 'Tu visión no tiene límites. Trabajamos contigo hasta que el diseño sea exactamente lo que soñaste.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
