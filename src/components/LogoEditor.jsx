'use client';

import { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';
import useImage from 'use-image';

// Componente para el logo transformable
function LogoImage({ image, isSelected, onSelect, onTransform, shapeProps }) {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <KonvaImage
        image={image}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => {
          onTransform({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          const rotation = node.rotation();

          node.scaleX(1);
          node.scaleY(1);

          onTransform({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(5, node.height() * scaleY),
            rotation: rotation,
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) {
              return oldBox;
            }
            return newBox;
          }}
          rotateEnabled={true}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
          ]}
        />
      )}
    </>
  );
}

// Componente principal del editor
export default function LogoEditor({ productImage, productName, onExport }) {
  const [productImg] = useImage(productImage);
  const [logoFile, setLogoFile] = useState(null);
  const [logoImg] = useImage(logoFile);
  const [selectedId, setSelectedId] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const stageRef = useRef();
  const fileInputRef = useRef();

  // Estado de rotación 360
  const [productRotation, setProductRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [initialRotation, setInitialRotation] = useState(0);

  // Estado del logo
  const [logoProps, setLogoProps] = useState({
    x: 200,
    y: 150,
    width: 150,
    height: 150,
    rotation: 0,
  });

  // Ajustar dimensiones del canvas basado en la imagen del producto
  useEffect(() => {
    if (productImg) {
      const maxWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth - 100, 800) : 800;
      const scale = maxWidth / productImg.width;
      setDimensions({
        width: maxWidth,
        height: productImg.height * scale,
      });

      // Centrar el logo inicial
      setLogoProps(prev => ({
        ...prev,
        x: (maxWidth / 2) - 75,
        y: (productImg.height * scale / 2) - 75,
      }));
    }
  }, [productImg]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogoFile(reader.result);
        setSelectedId('logo');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExport = () => {
    if (!stageRef.current) return;

    // Deseleccionar antes de exportar
    setSelectedId(null);

    // Esperar un poco para que se actualice el canvas
    setTimeout(() => {
      const uri = stageRef.current.toDataURL({
        mimeType: 'image/png',
        quality: 1,
        pixelRatio: 2, // Mayor calidad
      });

      if (onExport) {
        onExport(uri);
      }
    }, 100);
  };

  const handleRotateLeft = () => {
    setLogoProps(prev => ({
      ...prev,
      rotation: prev.rotation - 15,
    }));
  };

  const handleRotateRight = () => {
    setLogoProps(prev => ({
      ...prev,
      rotation: prev.rotation + 15,
    }));
  };

  const handleReset = () => {
    setLogoFile(null);
    setSelectedId(null);
    setLogoProps({
      x: 200,
      y: 150,
      width: 150,
      height: 150,
      rotation: 0,
    });
    setProductRotation(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Manejadores de rotación 360 con mouse
  const handleMouseDown = (e) => {
    // Solo iniciar drag si no estamos en el logo
    if (selectedId !== 'logo') {
      setIsDragging(true);
      setDragStartX(e.clientX);
      setInitialRotation(productRotation);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStartX;
      // Sensibilidad de rotación: cada pixel de movimiento = 0.5 grados
      const rotationDelta = deltaX * 0.5;
      setProductRotation((initialRotation + rotationDelta) % 360);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (selectedId !== 'logo' && e.touches.length === 1) {
      setIsDragging(true);
      setDragStartX(e.touches[0].clientX);
      setInitialRotation(productRotation);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - dragStartX;
      const rotationDelta = deltaX * 0.5;
      setProductRotation((initialRotation + rotationDelta) % 360);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      {/* Controles superiores */}
      <div className="mb-4 md:mb-6 space-y-3 md:space-y-4">
        {/* Botón principal de subir logo */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml"
            onChange={handleFileUpload}
            className="hidden"
            id="logo-upload"
          />
          <label
            htmlFor="logo-upload"
            className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors font-medium text-center"
          >
            {logoFile ? '📁 Cambiar Logo' : '📤 Subir Logo'}
          </label>

          {logoFile && (
            <button
              onClick={handleExport}
              className="flex-1 sm:flex-none px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
            >
              ✓ Listo, Cotizar
            </button>
          )}
        </div>

        {/* Controles de edición - Solo visibles cuando hay logo */}
        {logoFile && (
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            <button
              onClick={handleRotateLeft}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base"
              title="Rotar a la izquierda"
            >
              <span className="hidden sm:inline">↺ Rotar Izq.</span>
              <span className="sm:hidden">↺ Izq.</span>
            </button>
            <button
              onClick={handleRotateRight}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base"
              title="Rotar a la derecha"
            >
              <span className="hidden sm:inline">↻ Rotar Der.</span>
              <span className="sm:hidden">↻ Der.</span>
            </button>
            <button
              onClick={handleReset}
              className="px-3 sm:px-4 py-2 sm:py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm sm:text-base"
            >
              🔄 Reiniciar
            </button>
          </div>
        )}

        {/* Tips de ayuda */}
        <div className="p-3 md:p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs md:text-sm text-blue-800 mb-2">
            <strong className="block md:inline">Tip:</strong>
            <span className="hidden md:inline"> Arrastra el mouse sobre el producto para rotarlo y ver tu logo desde diferentes ángulos.</span>
            <span className="md:hidden"> Arrastra sobre el producto para rotarlo 360°.</span>
          </p>
          {logoFile && (
            <p className="text-xs md:text-sm text-blue-800">
              <strong className="block md:inline">Edición:</strong>
              <span className="hidden md:inline"> Arrastra tu logo para posicionarlo, usa las esquinas para redimensionar, y la esquina superior para rotar.</span>
              <span className="md:hidden"> Arrastra para mover, usa esquinas para redimensionar.</span>
            </p>
          )}
        </div>
      </div>

      {/* Canvas del editor con rotación 360 */}
      <div
        className="border-2 md:border-4 border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg relative touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : selectedId ? 'default' : 'grab' }}
      >
        {/* Indicador de rotación */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-black/70 text-white px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium">
          {Math.round(productRotation)}°
        </div>

        <Stage
          width={dimensions.width}
          height={dimensions.height}
          ref={stageRef}
          onMouseDown={(e) => {
            const clickedOnEmpty = e.target === e.target.getStage();
            if (clickedOnEmpty) {
              setSelectedId(null);
            }
          }}
          onTouchStart={(e) => {
            const clickedOnEmpty = e.target === e.target.getStage();
            if (clickedOnEmpty) {
              setSelectedId(null);
            }
          }}
        >
          <Layer>
            {/* Imagen del producto de fondo con rotación */}
            {productImg && (
              <KonvaImage
                image={productImg}
                width={dimensions.width}
                height={dimensions.height}
                x={dimensions.width / 2}
                y={dimensions.height / 2}
                offsetX={dimensions.width / 2}
                offsetY={dimensions.height / 2}
                rotation={productRotation}
              />
            )}

            {/* Logo del usuario */}
            {logoImg && (
              <LogoImage
                image={logoImg}
                isSelected={selectedId === 'logo'}
                onSelect={() => setSelectedId('logo')}
                onTransform={setLogoProps}
                shapeProps={logoProps}
              />
            )}
          </Layer>
        </Stage>
      </div>

      {!logoFile && (
        <div className="mt-3 md:mt-4 text-center p-6 md:p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <svg className="mx-auto h-10 w-10 md:h-12 md:w-12 text-gray-400 mb-2 md:mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-sm md:text-base text-gray-600 font-medium">
            Sube tu logo para ver cómo se vería en este producto
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            PNG, JPG o SVG
          </p>
        </div>
      )}
    </div>
  );
}
