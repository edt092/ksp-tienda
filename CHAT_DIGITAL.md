# 💬 Chat de Asesor Digital - Documentación

## Descripción

Componente de chat flotante tipo Cliengo/Messenger que actúa como asesor comercial digital automático para la tienda.

## ✨ Características

### Funcionalidades Principales
- ✅ Chat flotante en esquina inferior derecha
- ✅ Apertura automática después de 3 segundos
- ✅ Mensaje inicial de bienvenida
- ✅ Sonido de notificación en cada mensaje del asesor
- ✅ Mensaje de follow-up automático después de 60 segundos sin interacción
- ✅ Respuestas automáticas inteligentes basadas en keywords
- ✅ Animaciones suaves con Framer Motion
- ✅ Badge de notificación cuando hay mensajes nuevos
- ✅ Indicador de "en línea"
- ✅ Scroll automático al último mensaje
- ✅ Diseño responsive

### Diseño
- Burbujas de chat estilo moderno
- Avatar del asesor
- Gradientes con colores de marca (primary)
- Animaciones de entrada/salida
- Efecto de pulso en el botón flotante
- Timestamps en cada mensaje

### Inteligencia Conversacional
El chat responde automáticamente a keywords:
- **Precio/Costo**: Ofrece cotización por WhatsApp
- **Catálogo/Productos**: Presenta el catálogo completo
- **Email/@**: Confirma recepción y promete envío
- **Hola/Buenos días**: Saludo amigable
- **Gracias**: Despedida con CTA a WhatsApp
- **Envío/Entrega**: Información de entregas en Ecuador
- **Otro**: Respuesta genérica ofreciendo ayuda

## 📦 Instalación y Uso

### 1. Instalar Dependencia (Ya instalada)
```bash
npm install framer-motion
```

### 2. Agregar al Layout Principal

Edita `src/app/layout.jsx`:

```jsx
import DigitalAdvisorChat from '@/components/DigitalAdvisorChat';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* Chat flotante */}
        <DigitalAdvisorChat />
      </body>
    </html>
  );
}
```

### 3. Crear Imagen del Asesor

Coloca una imagen en: `/public/images/hanna.png`

**Especificaciones recomendadas:**
- Tamaño: 400x400px (cuadrado)
- Formato: PNG con fondo transparente o JPG
- Peso: < 100KB optimizado
- Una foto profesional y amigable de Hanna

**Alternativa sin imagen:**
Si no tienes imagen, el componente mostrará automáticamente un avatar con la inicial "H" en un gradiente rosa-púrpura.

## 🎨 Personalización

### Cambiar Información del Asesor

Edita en `DigitalAdvisorChat.jsx` (líneas 18-23):

```javascript
const advisor = {
  name: 'Hanna',                    // Nombre del asesor
  role: 'Asesora Comercial',       // Cargo
  avatar: '/images/hanna.png',     // Ruta de la imagen
  initialMessage: '¡Hola! 😊 Soy Hanna, ¿en qué puedo ayudarte hoy?',
  followUpMessage: '¿Deseas conocer nuestro catálogo más reciente de productos personalizados? 🚀 Puedo enviártelo por correo, solo dime tu email y te lo envío enseguida.',
};
```

### Cambiar Tiempos de Apertura

**Apertura automática** (línea 85):
```javascript
setTimeout(() => {
  setIsOpen(true);
  addAdvisorMessage(advisor.initialMessage);
}, 3000); // 3 segundos (cambiar a gusto)
```

**Mensaje de follow-up** (línea 96):
```javascript
timeoutRef.current = setTimeout(() => {
  addAdvisorMessage(advisor.followUpMessage);
}, 60000); // 60 segundos (cambiar a gusto)
```

### Personalizar Respuestas Automáticas

Edita la función `handleAutoResponse` (líneas 52-74):

```javascript
const handleAutoResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  let response = '';

  // Agrega tus propias keywords y respuestas
  if (message.includes('tu_keyword')) {
    response = 'Tu respuesta personalizada aquí';
  }
  // ... más condiciones

  addAdvisorMessage(response);
};
```

### Cambiar Posición del Chat

Por defecto está en **esquina inferior derecha**. Para cambiar:

**Esquina inferior izquierda:**
```jsx
// Línea 117 y 136
className="fixed bottom-6 left-6 z-50"  // Cambiar right-6 por left-6
```

**Arriba a la derecha:**
```jsx
// Línea 117
className="fixed top-6 right-6 z-50"
// Línea 136
className="fixed top-24 right-6 z-40 w-full max-w-md"
```

### Cambiar Colores

El chat usa las clases de Tailwind con los colores de marca definidos (`primary`, `primary-dark`).

Para cambiar, edita los gradientes en el componente:
```jsx
// Buscar: from-primary to-primary-dark
// Reemplazar por tus colores, ejemplo:
from-blue-600 to-purple-600
```

## 🔊 Sonido de Notificación

El componente usa un archivo de audio embebido en base64 (línea 119-127).

**Para usar un archivo MP3 personalizado:**

1. Coloca tu archivo en `/public/sounds/notification.mp3`
2. Reemplaza el audio element:

```jsx
<audio ref={audioRef} preload="auto">
  <source src="/sounds/notification.mp3" type="audio/mpeg" />
</audio>
```

**Recomendaciones de audio:**
- Duración: 0.5 - 2 segundos
- Formato: MP3 o WAV
- Peso: < 50KB
- Volumen: Moderado, no estridente

## 🎯 Keywords y Respuestas

Actualmente el chat detecta:

| Keyword | Respuesta |
|---------|-----------|
| precio, costo, cuanto | Ofrece cotización por WhatsApp |
| catalogo, productos | Presenta catálogo completo |
| @ (email) | Confirma recepción del email |
| hola, buenos, buenas | Saludo de bienvenida |
| gracias, thank | Despedida con CTA |
| envio, entrega, delivery | Info sobre entregas en Ecuador |
| Otros | Ofrece ayuda general |

## 📱 Responsive

El chat es completamente responsive:
- **Desktop**: Ventana de 400px de ancho
- **Tablet**: Ventana ajustada al contenedor
- **Mobile**: Ocupa 90% del ancho de pantalla

## 🎭 Animaciones

Todas las animaciones usan Framer Motion:
- Entrada del botón flotante: Spring animation
- Apertura/cierre del chat: Scale + slide
- Mensajes nuevos: Fade + slide up
- Badge de notificación: Scale in/out
- Pulso del botón: CSS animation continuo

## 🔧 Funciones Principales

### `addAdvisorMessage(text)`
Agrega un mensaje del asesor y reproduce sonido.

### `addUserMessage(text)`
Agrega un mensaje del usuario y cancela el timeout del follow-up.

### `handleAutoResponse(userMessage)`
Analiza el mensaje del usuario y genera respuesta automática.

### `playNotificationSound()`
Reproduce el sonido de notificación.

## 📊 Estado del Componente

```javascript
isOpen          // Boolean - Chat abierto/cerrado
messages        // Array - Historial de mensajes
inputValue      // String - Texto del input
hasInteracted   // Boolean - Usuario ha enviado mensaje
showBadge       // Boolean - Mostrar badge de notificación
```

## 🚀 Mejoras Futuras (Opcionales)

### Integración con Backend
Para guardar conversaciones en base de datos:
```javascript
const addUserMessage = async (text) => {
  // ... código existente

  // Enviar a API
  await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message: text, userId: 'xxx' }),
  });
};
```

### Integración con WhatsApp Business API
```javascript
const sendToWhatsApp = async (message) => {
  const phoneNumber = '593999999999';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};
```

### Guardar en LocalStorage
```javascript
useEffect(() => {
  // Guardar mensajes
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}, [messages]);

// Cargar al inicio
useEffect(() => {
  const saved = localStorage.getItem('chatMessages');
  if (saved) setMessages(JSON.parse(saved));
}, []);
```

### Typing Indicator
```javascript
const [isTyping, setIsTyping] = useState(false);

// Mostrar "Escribiendo..." antes de respuesta automática
const handleAutoResponse = (userMessage) => {
  setIsTyping(true);
  setTimeout(() => {
    setIsTyping(false);
    // ... respuesta
  }, 1500);
};
```

## ⚠️ Consideraciones

### Rendimiento
- El componente es ligero (< 10KB)
- Las animaciones usan GPU acceleration
- El audio es base64 (no requiere carga adicional)

### Accesibilidad
- Botones con aria-label
- Keyboard navigation funcional
- Colores con contraste suficiente

### SEO
- El chat no afecta el SEO (renderizado en cliente)
- No bloquea contenido importante
- Z-index alto para estar siempre visible

### Privacidad
- Los mensajes solo se guardan en estado local (React)
- No se envía información a servidores externos
- Se pierde al recargar la página (a menos que implementes localStorage)

## 🐛 Troubleshooting

### El chat no se abre automáticamente
- Verifica que el componente esté importado en layout.jsx
- Revisa la consola por errores de JavaScript

### No suena el audio
- Los navegadores bloquean audio sin interacción del usuario
- El sonido solo funciona después del primer clic en la página
- Solución: Está configurado para fallar silenciosamente

### La imagen del asesor no carga
- Verifica que `/public/images/asesor.png` exista
- Si no existe, se mostrará un avatar con inicial
- Revisa la ruta en el objeto `advisor`

### Las animaciones se ven entrecortadas
- Verifica que framer-motion esté instalado
- Revisa que no haya conflictos de CSS
- Reduce la cantidad de mensajes en pantalla

### El mensaje de follow-up no se envía
- Se cancela si el usuario interactúa antes de 60 segundos
- Verifica que `hasInteracted` no esté en `true`
- Revisa los timeouts en la consola

## 📝 Ejemplo de Uso Completo

```jsx
// src/app/layout.jsx
import DigitalAdvisorChat from '@/components/DigitalAdvisorChat';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Chat flotante - Se muestra en todas las páginas */}
        <DigitalAdvisorChat />
      </body>
    </html>
  );
}
```

## ✅ Checklist de Implementación

- [ ] Instalar framer-motion
- [ ] Crear imagen del asesor en `/public/images/asesor.png`
- [ ] Importar componente en layout.jsx
- [ ] Personalizar información del asesor (nombre, cargo)
- [ ] Ajustar mensajes (inicial y follow-up)
- [ ] Personalizar keywords y respuestas automáticas
- [ ] Probar en móvil y desktop
- [ ] Verificar que el audio funcione (después de interacción)
- [ ] Ajustar tiempos de apertura si es necesario

---

## 🎉 Resultado Final

Un chat flotante completamente funcional que:
- ✅ Se abre automáticamente y da la bienvenida
- ✅ Responde inteligentemente a preguntas comunes
- ✅ Mantiene conversaciones fluidas
- ✅ Usa copywriting persuasivo
- ✅ Tiene diseño moderno y profesional
- ✅ Funciona en todos los dispositivos

**El chat está listo para usar y empezar a convertir visitantes en clientes.** 🚀
