import React, { useState } from 'react';
import { SLIDES } from './constants';
import { LorePoint } from './types';
import { CRTWrapper } from './components/CRTWrapper';
import { SlideViewer } from './components/SlideViewer';
import { LoreTerminal } from './components/LoreTerminal';
import { TriangleAlert } from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedLore, setSelectedLore] = useState<LorePoint | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleStart = () => {
      // Play a little sound if we had audio, but visually just switch state
      setHasStarted(true);
  };

  // Intro Splash Screen
  if (!hasStarted) {
      return (
          <CRTWrapper theme="green">
              <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-pulse">
                  <div className="border-4 border-[#00ff00] p-8 rounded-full">
                    <TriangleAlert size={64} className="text-[#00ff00]" />
                  </div>
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-[0_0_10px_#00ff00]">
                      FALLOUT
                  </h1>
                  <h2 className="text-2xl md:text-3xl tracking-widest uppercase">
                      SEASON 1 ARCHIVE
                  </h2>
                  <div className="mt-12 space-y-2">
                      <p className="text-sm opacity-70">ROBCO INDUSTRIES TERMLINK PROTECTED SYSTEM</p>
                      <button 
                        onClick={handleStart}
                        className="px-8 py-3 bg-[#00ff00] text-black text-xl font-bold uppercase hover:bg-white hover:scale-105 transition-all"
                      >
                          [ INITIALIZE SYSTEM ]
                      </button>
                  </div>
              </div>
          </CRTWrapper>
      );
  }

  return (
    <CRTWrapper theme={currentSlide.themeColor}>
      <SlideViewer 
        slide={currentSlide}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectLore={setSelectedLore}
        isFirst={currentSlideIndex === 0}
        isLast={currentSlideIndex === SLIDES.length - 1}
        totalSlides={SLIDES.length}
      />
      
      {selectedLore && (
        <LoreTerminal 
            lorePoint={selectedLore} 
            onClose={() => setSelectedLore(null)} 
            theme={currentSlide.themeColor}
        />
      )}
    </CRTWrapper>
  );
}