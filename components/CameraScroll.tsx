'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function CameraScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frames, setFrames] = useState<string[]>([]);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll (0-1) to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 0.85], [0, frames.length - 1]);

  // Load manifest
  useEffect(() => {
    fetch('/frames.json')
      .then((res) => res.json())
      .then((data) => setFrames(data))
      .catch((err) => console.error('Failed to load frames manifest', err));
  }, []);

  // Preload images
  useEffect(() => {
    if (frames.length === 0) return;

    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    frames.forEach((frame) => {
      const img = new Image();
      img.src = `/frames/${frame}`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === frames.length) {
          setIsLoading(false);
          setImages(imgs);
        }
      };
      imgs.push(img);
    });
  }, [frames]);

  // Render to canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || images.length === 0) return;

    const img = images[Math.round(index)];
    if (!img) return;

    // Responsive scaling: cover (fills screen, eliminates black bars)
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    // Calculate aspect ratio to "cover" the screen
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      // Screen is wider than image: fit width, crop height
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      // Screen is taller than image: fit height, crop width
      drawHeight = canvasHeight;
      drawWidth = drawHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // React to scroll changes
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (!isLoading) {
      renderFrame(latest);
    }
  });

  // Initial render after loading
  useEffect(() => {
    if (!isLoading && images.length > 0) {
      renderFrame(0);
    }
  }, [isLoading, images]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
        if (!isLoading && images.length > 0) {
             renderFrame(frameIndex.get());
        }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoading, images]);


  // Text Overlays Animations
  // 0-15%: Intro
  const opacityIntro = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  
  // 25-45%: Precision
  const opacityPrecision = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  
  // 55-75%: Sensor
  const opacitySensor = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);

  // 85-100%: CTA
  const opacityCTA = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 1]);
  const pointerEventsCTA = useTransform(scrollYProgress, (v) => v > 0.85 ? 'auto' : 'none');

  const scrollToSpecs = () => {
    const specs = document.getElementById('specs');
    specs?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <p className="text-xl mb-2 font-light tracking-widest">CARGANDO EXPERIENCIA</p>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-100 ease-out"
              style={{ width: `${(loadedCount / (frames.length || 1)) * 100}%` }}
            />
          </div>
          <p className="text-xs mt-2 text-gray-500 font-mono">
            {Math.round((loadedCount / (frames.length || 1)) * 100)}%
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-[#050505]">
      {/* Sticky Canvas */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-4">
          
          {/* Intro */}
          <motion.div style={{ opacity: opacityIntro }} className="absolute w-full px-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-4 leading-tight">
              Control inalámbrico <br/>
              <span className="text-gray-400">Xbox Elite Series 2</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-lg mx-auto">
              ¿Quieres ser el mejor?
            </p>
          </motion.div>

          {/* Precision */}
          <motion.div style={{ opacity: opacityPrecision }} className="absolute w-full px-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-tight">
              Ingeniería de precisión.
            </h2>
          </motion.div>

          {/* Sensor */}
          <motion.div style={{ opacity: opacitySensor }} className="absolute w-full px-6">
             <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-tight">
              Control. Adaptabilidad. Victoria.
            </h2>
          </motion.div>

           {/* CTA */}
           <motion.div 
             style={{ opacity: opacityCTA, pointerEvents: pointerEventsCTA }} 
             className="absolute bottom-24 md:bottom-32 w-full px-6"
           >
             <button 
                onClick={scrollToSpecs}
                className="bg-white text-black px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-xl hover:bg-gray-200 transition-colors shadow-lg hover:shadow-white/20 hover:scale-105 transform duration-300"
             >
               Ver especificaciones
             </button>
          </motion.div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none">
          <motion.div 
              style={{ opacity: opacityIntro }}
              className="text-white/50 text-sm animate-bounce"
          >
              Scroll para explorar
          </motion.div>
        </div>
      </div>
    </div>
  );
}
