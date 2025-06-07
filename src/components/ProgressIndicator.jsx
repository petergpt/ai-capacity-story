import React from 'react';
import { motion } from 'framer-motion';

const ProgressIndicator = ({ currentSlide, totalSlides, slides, onSlideClick }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-4">
        {/* Progress Bar */}
        <div className="w-1 h-32 bg-slate-800 rounded-full relative overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-t from-ai-blue to-ai-purple rounded-full"
            style={{ height: `${progress}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Slide Indicators */}
        <div className="flex flex-col space-y-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => onSlideClick(index)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-ai-blue scale-125'
                  : index < currentSlide
                  ? 'bg-ai-emerald'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              title={slide.title}
            >
              {/* Tooltip */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {slide.title}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-transparent border-r-slate-900"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Current Slide Info */}
        <div className="text-center">
          <div className="text-xs text-slate-400 font-mono">
            {currentSlide + 1} / {totalSlides}
          </div>
          <div className="text-xs text-slate-500 mt-1 max-w-20 leading-tight">
            {slides[currentSlide]?.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;