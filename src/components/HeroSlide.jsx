import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Globe, Brain } from 'lucide-react';

const HeroSlide = ({ dataProcessor, onNext }) => {
  const insights = dataProcessor?.getKeyInsights() || {};

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="gradient-text">The AI</span>
            <br />
            <span className="gradient-text">Computing</span>
            <br />
            <span className="gradient-text">Revolution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            How artificial intelligence is driving the largest infrastructure buildout in human history
          </p>
        </motion.div>

        {/* Key Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <div className="insight-card text-center">
            <div className="text-ai-blue mb-2">
              <Brain size={32} className="mx-auto" />
            </div>
            <div className="number-display text-3xl md:text-4xl">
              {insights.totalSystems?.toLocaleString() || '747'}
            </div>
            <p className="text-slate-400 text-sm">AI Supercomputers</p>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-purple mb-2">
              <Zap size={32} className="mx-auto" />
            </div>
            <div className="number-display text-3xl md:text-4xl">
              {Math.round((insights.totalCapacity || 81318822) / 1000000)}M
            </div>
            <p className="text-slate-400 text-sm">H100 Equivalents</p>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-orange mb-2">
              <TrendingUp size={32} className="mx-auto" />
            </div>
            <div className="number-display text-3xl md:text-4xl">
              {Math.round(insights.plannedMultiplier || 50)}x
            </div>
            <p className="text-slate-400 text-sm">Planned Growth</p>
          </div>

          <div className="insight-card text-center">
            <div className="text-ai-emerald mb-2">
              <Globe size={32} className="mx-auto" />
            </div>
            <div className="number-display text-3xl md:text-4xl">
              {insights.countries || 34}
            </div>
            <p className="text-slate-400 text-sm">Countries</p>
          </div>
        </motion.div>

        {/* Hero Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="insight-card text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              We are witnessing a computational phase transition
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              From 2020 to 2026, AI computing capacity will grow by over <strong className="text-ai-blue">6,000x</strong>. 
              This is not just technological progress—it's a fundamental restructuring of global computing infrastructure 
              that will reshape civilization itself.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <button
            onClick={onNext}
            className="group bg-gradient-to-r from-ai-blue to-ai-purple px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-ai-blue/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore the Data
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>

        {/* Data Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm mb-2">
            Based on analysis of 747 AI supercomputers worldwide
          </p>
          <p className="text-slate-600 text-xs">
            Data source: <a href="https://epoch.ai/data/ai-supercomputers" className="text-ai-blue hover:text-ai-blue/80 underline" target="_blank" rel="noopener noreferrer">Epoch AI - Trends in AI Supercomputers</a> • 
            Pilz, K., Rahman, R., Sanders, J., Heim, L. (2024) • Accessed Jun 7, 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlide;