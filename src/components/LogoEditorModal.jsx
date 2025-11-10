'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Cargar LogoEditor solo en el cliente para evitar problemas con Konva en SSR
const LogoEditor = dynamic(() => import('./LogoEditor'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  ),
});

export default function LogoEditorModal({ isOpen, onClose, product }) {
  const [mockupImage, setMockupImage] = useState(null);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleExport = (imageDataUrl) => {
    setMockupImage(imageDataUrl);
    setShowWhatsAppButton(true);
  };

  const handleWhatsAppClick = () => {
    // Número de WhatsApp de KS Promocionales (Ecuador)
    // Formato internacional: +593 (código de Ecuador)
    const phoneNumber = '593999814838';

    // Mensaje personalizado
    const message = `Hola! Me interesa cotizar *${product.name}*

He personalizado el producto con mi logo y me gustaría recibir información sobre:
- Precio según cantidad
- Tiempos de entrega
- Opciones de personalización

*Mockup adjunto:* He creado una previsualización del producto con mi logo. ¿Podrían ayudarme con la cotización?

Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank');

    // Nota: El usuario deberá enviar la imagen manualmente desde el mockup
    // Para compartir la imagen, podrían descargarla primero
  };

  const handleDownloadMockup = () => {
    if (!mockupImage) return;

    const link = document.createElement('a');
    link.download = `mockup-${product.slug}-${Date.now()}.png`;
    link.href = mockupImage;
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 md:px-6 md:py-4 flex justify-between items-start md:items-center z-10">
            <div className="flex-1 pr-2">
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
                Visualiza tu Logo
              </h2>
              <p className="text-sm md:text-base text-gray-900 font-medium mt-0.5">
                {product.name}
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 hidden sm:block">
                Personaliza el producto con tu logo y cotiza por WhatsApp
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 md:p-2 flex-shrink-0"
              aria-label="Cerrar modal"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 md:p-6">
            <LogoEditor
              productImage={product.images?.[0] || '/images/placeholder-product.jpg'}
              productName={product.name}
              onExport={handleExport}
            />

            {/* WhatsApp Action */}
            {showWhatsAppButton && (
              <div className="mt-4 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                      ¡Perfecto! Tu mockup está listo
                    </h3>
                    <p className="text-sm md:text-base text-gray-700">
                      Descarga tu mockup y envíalo por WhatsApp para recibir tu cotización personalizada.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleDownloadMockup}
                      className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium text-sm md:text-base"
                    >
                      📥 Descargar Mockup
                    </button>
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Cotizar por WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-3 md:px-6 md:py-4 bg-gray-50">
            <p className="text-xs md:text-sm text-gray-600 text-center">
              El mockup es una representación aproximada. El producto final puede variar según especificaciones técnicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
