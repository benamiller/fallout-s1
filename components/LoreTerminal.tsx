import React, { useEffect, useState, useRef } from 'react';
import { X, Terminal, Cpu } from 'lucide-react';
import { LorePoint } from '../types';

interface LoreTerminalProps {
  lorePoint: LorePoint | null;
  onClose: () => void;
  theme: 'green' | 'amber';
}

export const LoreTerminal: React.FC<LoreTerminalProps> = ({ lorePoint, onClose, theme }) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [typedContent, setTypedContent] = useState("");
  
  // Colors based on theme
  const accentColor = theme === 'green' ? 'text-[#00ff00]' : 'text-[#ffb000]';
  const borderColor = theme === 'green' ? 'border-[#00ff00]' : 'border-[#ffb000]';
  const bgColor = theme === 'green' ? 'bg-[#001100]' : 'bg-[#1a1100]';
  const loadingBarColor = theme === 'green' ? 'bg-green-500' : 'bg-amber-500';

  useEffect(() => {
    if (lorePoint) {
      setLoading(true);
      setContent("");
      setTypedContent("");
      
      // Simulate network handshake / mainframe access delay
      const delay = Math.random() * 500 + 500; // 500-1000ms delay

      const timer = setTimeout(() => {
        setContent(lorePoint.content);
        setLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [lorePoint]);

  // Typing effect
  useEffect(() => {
    if (!loading && content) {
      let i = 0;
      const speed = 2; // Very fast typing for large blocks
      const interval = setInterval(() => {
        // Type 3 chars at a time to speed up rendering of long text
        setTypedContent(content.slice(0, i + 3));
        i += 3;
        if (i > content.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }
  }, [loading, content]);

  if (!lorePoint) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className={`w-full max-w-4xl h-[85vh] ${bgColor} border-2 ${borderColor} shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col font-mono relative overflow-hidden`}>
        
        {/* Header */}
        <div className={`flex items-center justify-between p-2 border-b ${borderColor} bg-black/40`}>
          <div className="flex items-center gap-2">
            <Terminal size={18} className={accentColor} />
            <span className={`font-bold uppercase ${accentColor}`}>ROBCO INDUSTRIES (TM) TERMLINK</span>
          </div>
          <button onClick={onClose} className={`hover:bg-white/10 p-1 rounded transition-colors ${accentColor}`}>
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto font-['VT323'] text-lg md:text-xl leading-relaxed">
            <div className={`mb-6 border-b ${borderColor} border-dashed pb-2`}>
                <h2 className={`text-3xl font-bold uppercase ${accentColor} mb-1`}>FILE: {lorePoint.label}</h2>
                <div className="text-sm opacity-70 flex justify-between">
                    <span>SOURCE: {lorePoint.id.toUpperCase()}.DAT</span>
                    <span>ENCRYPTION: DECRYPTED</span>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center h-64 gap-6">
                    <Cpu className={`animate-spin ${accentColor}`} size={64} />
                    <div className={`${accentColor} animate-pulse text-xl uppercase tracking-widest`}>Handshaking Mainframe...</div>
                    <div className="w-96 h-4 border border-current p-1">
                        <div className={`h-full ${loadingBarColor} animate-[width_1s_ease-in-out_infinite]`} style={{width: '0%'}}></div>
                    </div>
                    <div className="font-mono text-xs opacity-50">
                        ESTABLISHING SECURE CONNECTION (TCP/IP OVER HOLOTAPE)
                    </div>
                </div>
            ) : (
                <div className="whitespace-pre-wrap font-medium">
                    {typedContent}
                    <span className={`animate-pulse inline-block w-3 h-6 ${theme === 'green' ? 'bg-[#00ff00]' : 'bg-[#ffb000]'} align-middle ml-1`}></span>
                </div>
            )}
        </div>

        {/* Footer */}
        <div className={`p-3 border-t ${borderColor} text-sm flex justify-between uppercase opacity-70 bg-black/40 font-mono`}>
            <span>Memory: 64k OK</span>
            <span>Termlink v8.4.1</span>
            <span className="animate-pulse">STATUS: ONLINE</span>
        </div>
      </div>
    </div>
  );
};