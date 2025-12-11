import React from 'react';

interface CRTWrapperProps {
  children: React.ReactNode;
  theme: 'green' | 'amber';
}

export const CRTWrapper: React.FC<CRTWrapperProps> = ({ children, theme }) => {
  const textColor = theme === 'green' ? 'text-[#00ff00]' : 'text-[#ffb000]';
  const glowColor = theme === 'green' ? 'drop-shadow-[0_0_5px_rgba(0,255,0,0.6)]' : 'drop-shadow-[0_0_5px_rgba(255,176,0,0.6)]';
  const borderColor = theme === 'green' ? 'border-[#00ff00]' : 'border-[#ffb000]';

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-black ${textColor} selection:bg-white selection:text-black font-['VT323']`}>
      {/* Screen Curvature Vignette */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.4)_100%)] shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>
      
      {/* Scanlines */}
      <div className="scanline"></div>
      
      {/* Fine Mesh/Pixel Grid */}
      <div className="absolute inset-0 pointer-events-none z-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50"></div>

      {/* Main Content Container */}
      <div className={`relative z-10 w-full h-full flex flex-col p-4 md:p-12 ${glowColor} crt-flicker`}>
         <div className={`flex-1 border-2 ${borderColor} rounded-lg p-4 relative bg-black/80 backdrop-blur-sm shadow-[0_0_20px_rgba(0,20,0,0.5)] flex flex-col overflow-hidden`}>
             {/* Decorative Corner Bolts */}
             <div className={`absolute top-2 left-2 w-2 h-2 ${theme === 'green' ? 'bg-[#00ff00]' : 'bg-[#ffb000]'}`}></div>
             <div className={`absolute top-2 right-2 w-2 h-2 ${theme === 'green' ? 'bg-[#00ff00]' : 'bg-[#ffb000]'}`}></div>
             <div className={`absolute bottom-2 left-2 w-2 h-2 ${theme === 'green' ? 'bg-[#00ff00]' : 'bg-[#ffb000]'}`}></div>
             <div className={`absolute bottom-2 right-2 w-2 h-2 ${theme === 'green' ? 'bg-[#00ff00]' : 'bg-[#ffb000]'}`}></div>
             
            {children}
         </div>
      </div>
    </div>
  );
};