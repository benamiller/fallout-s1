import React from 'react';
import { Slide, LorePoint } from '../types';
import { Info, Database, FolderOpen } from 'lucide-react';

interface SlideViewerProps {
  slide: Slide;
  onNext: () => void;
  onPrev: () => void;
  onSelectLore: (point: LorePoint) => void;
  isFirst: boolean;
  isLast: boolean;
  totalSlides: number;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ 
  slide, 
  onNext, 
  onPrev, 
  onSelectLore,
  isFirst,
  isLast,
  totalSlides
}) => {
  const accentColor = slide.themeColor === 'green' ? 'text-[#00ff00]' : 'text-[#ffb000]';
  const borderColor = slide.themeColor === 'green' ? 'border-[#00ff00]' : 'border-[#ffb000]';
  const buttonHover = slide.themeColor === 'green' ? 'hover:bg-[#00ff00] hover:text-black' : 'hover:bg-[#ffb000] hover:text-black';
  
  // Specific backgrounds for the duotone effect based on theme
  const multiplyColor = slide.themeColor === 'green' ? 'bg-[#003300]' : 'bg-[#331a00]';
  const screenColor = slide.themeColor === 'green' ? 'bg-[#00ff00]' : 'bg-[#ffb000]';

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500 overflow-hidden">
      
      {/* Top Bar with Section Info */}
      <div className="flex justify-between items-start border-b-2 border-current pb-4 mb-4 md:mb-6 opacity-90 flex-shrink-0">
        <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.2em] mb-2 opacity-70 truncate">
                <FolderOpen size={16} />
                SECTION // {slide.section}
            </div>
            <h1 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase mb-1 drop-shadow-lg leading-none truncate">
                {slide.title}
            </h1>
            {slide.subtitle && (
                <h2 className="text-lg md:text-3xl opacity-80 tracking-widest uppercase mt-1 truncate">
                    {slide.subtitle}
                </h2>
            )}
        </div>
        <div className="text-3xl md:text-5xl font-bold opacity-30 font-mono select-none pl-4">
            {slide.id < 10 ? `0${slide.id}` : slide.id}
        </div>
      </div>

      {/* Main Content Split */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-10 overflow-hidden min-h-0">
        
        {/* Left: Text & Lore */}
        <div className="flex-1 flex flex-col overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-lg md:text-xl leading-relaxed mb-6 md:mb-10 font-light border-l-4 border-current pl-4 md:pl-6 py-2">
                {slide.content}
            </p>

            <div className="mt-auto pb-2">
                <div className="text-xs md:text-sm uppercase tracking-widest opacity-70 mb-4 flex items-center gap-2 border-b border-dashed border-current pb-1 w-fit">
                    <Database size={14} />
                    Related Database Entries:
                </div>
                <div className="flex flex-col gap-3">
                    {slide.lorePoints.map((point) => (
                        <button
                            key={point.id}
                            onClick={() => onSelectLore(point)}
                            className={`
                                group relative w-full md:w-auto text-left px-4 py-3 border ${borderColor} 
                                uppercase font-bold text-sm md:text-lg tracking-wider 
                                transition-all duration-200 
                                ${buttonHover}
                                bg-black/20
                            `}
                        >
                           <div className="flex items-center justify-between">
                               <span className="flex items-center gap-3">
                                    <Info size={18} />
                                    {point.label}
                               </span>
                               <span className="text-xs opacity-50 group-hover:opacity-100 hidden md:inline">Click to expand</span>
                           </div>
                           {/* Decorative markers */}
                           <div className="absolute top-0 left-0 w-1 h-full bg-current opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Right: Visual - Duotone Filter Effect */}
        <div className="flex-1 relative hidden md:block group h-full flex-shrink-0 border-2 border-current rounded-sm overflow-hidden bg-black">
            
            <div className="relative w-full h-full">
                {/* 1. Base Image - High contrast grayscale */}
                <img 
                    src={slide.imagePlaceholder} 
                    alt={slide.title}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                />
                
                {/* 2. Multiply Layer - Adds the dark tones (Dark Green/Amber) */}
                <div className={`absolute inset-0 mix-blend-multiply ${multiplyColor} opacity-90`}></div>
                
                {/* 3. Screen Layer - Adds the light tones (Bright Green/Amber) */}
                <div className={`absolute inset-0 mix-blend-screen ${screenColor} opacity-40`}></div>
                
                {/* 4. Scanlines Overlay specific to image */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 background-size-[100%_2px,3px_100%] pointer-events-none opacity-50"></div>
            </div>

            {/* HUD Elements */}
            <div className="absolute top-4 left-4 border border-current px-2 py-0.5 text-xs font-mono bg-black/50 text-current">
                IMG_REF: {slide.id}-884 // {slide.section}
            </div>
            
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <span className="animate-pulse w-2 h-2 bg-current rounded-full"></span>
                <span className="text-xs font-bold bg-black/80 px-2 py-1 border border-current">LIVE FEED</span>
            </div>
            
            {/* Crosshairs */}
            <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 border border-current opacity-20 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-current"></div>
            </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="mt-4 pt-4 border-t-2 border-current flex justify-between items-center bg-black/20 flex-shrink-0">
        <button 
            onClick={onPrev} 
            disabled={isFirst}
            className={`
                px-4 md:px-6 py-2 uppercase font-bold text-sm md:text-lg flex items-center gap-2
                ${isFirst ? 'opacity-30 cursor-not-allowed' : `${buttonHover}`}
            `}
        >
            {'<'} PREV
        </button>

        {/* Dynamic Dots: Responsive sizing for large counts */}
        <div className="flex gap-1 overflow-hidden px-2 max-w-[50%] md:max-w-none flex-wrap justify-center">
            {[...Array(totalSlides)].map((_, i) => (
                <div 
                    key={i} 
                    className={`
                        h-1 md:h-2 
                        ${totalSlides > 10 ? 'w-1 md:w-2' : 'w-4 md:w-8'} 
                        transition-colors duration-300
                        ${slide.id === i + 1 ? 'bg-current shadow-[0_0_5px_currentColor]' : 'bg-current/20'}
                        ${(i % 5 === 0 && totalSlides > 10) ? 'mb-0' : ''} 
                    `}
                />
            ))}
        </div>

        <button 
             onClick={onNext}
             disabled={isLast}
             className={`
                px-4 md:px-6 py-2 uppercase font-bold text-sm md:text-lg flex items-center gap-2
                ${isLast ? 'opacity-30 cursor-not-allowed' : `${buttonHover}`}
            `}
        >
            NEXT {'>'}
        </button>
      </div>
    </div>
  );
};