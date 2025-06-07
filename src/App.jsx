import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Play, Pause } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Import components
import HeroSlide from './components/HeroSlide';
import CurrentStateSlide from './components/CurrentStateSlide';
import TimelineSlide from './components/TimelineSlide';
import InflectionSlide from './components/InflectionSlide';
import CompanyRaceSlide from './components/CompanyRaceSlide';
import GeographicSlide from './components/GeographicSlide';
import FutureSlide from './components/FutureSlide';
import InsightsSlide from './components/InsightsSlide';
import ProgressIndicator from './components/ProgressIndicator';
import Footer from './components/Footer';

// Import data processor
import AICapacityDataProcessor from './utils/dataProcessor';
import { loadAISupercomputerData } from './utils/csvLoader';

const slides = [
  { id: 'hero', component: HeroSlide, title: 'The AI Computing Revolution' },
  { id: 'current', component: CurrentStateSlide, title: 'Current State' },
  { id: 'timeline', component: TimelineSlide, title: 'The Timeline' },
  { id: 'inflection', component: InflectionSlide, title: '2026: The Inflection Point' },
  { id: 'companies', component: CompanyRaceSlide, title: 'The Corporate Race' },
  { id: 'geography', component: GeographicSlide, title: 'Global Distribution' },
  { id: 'future', component: FutureSlide, title: 'The Future Landscape' },
  { id: 'insights', component: InsightsSlide, title: 'Key Insights' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [dataProcessor, setDataProcessor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize data processor
  useEffect(() => {
    const initializeData = async () => {
      try {
        // Load the AI supercomputer data
        const data = await loadAISupercomputerData();
        const processor = new AICapacityDataProcessor(data);
        setDataProcessor(processor);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000); // 8 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (event.key === 'Home') {
        event.preventDefault();
        setCurrentSlide(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ai-blue mx-auto mb-4"></div>
          <p className="text-xl text-slate-300">Loading AI capacity data...</p>
        </div>
      </div>
    );
  }

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-blue rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen"
          >
            <CurrentSlideComponent 
              dataProcessor={dataProcessor}
              onNext={nextSlide}
              onPrev={prevSlide}
              slideIndex={currentSlide}
              totalSlides={slides.length}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-full bg-ai-blue/20 hover:bg-ai-blue/30 transition-colors"
            title={isAutoPlaying ? 'Pause' : 'Play'}
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Previous */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronUp size={16} className="rotate-[-90deg]" />
          </button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-ai-blue w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronDown size={16} className="rotate-[-90deg]" />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator 
        currentSlide={currentSlide} 
        totalSlides={slides.length}
        slides={slides}
        onSlideClick={goToSlide}
      />

      {/* Keyboard Shortcuts Hint */}
      <div className="fixed top-4 right-4 text-xs text-slate-400 bg-slate-900/50 rounded px-3 py-2 backdrop-blur-sm">
        Use ← → arrows or space to navigate
      </div>

      {/* Data Attribution Footer */}
      <Footer />
    </div>
  );
}

export default App;